    function playSound(e){
        // selects the audio element where data-key="e.keyCode"
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
      
        //if there is no audio element with the corresponding keyCode, then don't do anything
        if(!audio) return;
        audio.currentTime = 0
        audio.play()
      }
      
      window.addEventListener('keydown', playSound)

function maschine() {



    console.clear();

    var AUDIO = new (window.AudioContext || window.webkitAudioContext)();
    
    var dispatcher = _.extend(
      {
        EventKeys: {},
        register: function (eventHash) {
          for (var k in eventHash) {
            if (k in this.EventKeys)
              throw "Dispatcher error: duplicate event key: " + k;
    
            this.EventKeys[k] = eventHash[k];
          }
        }
      },
      Backbone.Events
    );
    
    /**
     * Sample bank.  Loads and maintains sound sources
     * and responds to requests to play them.
     **/
    var SampleBank = (function (A) {
      var bank = {},
        loadCount = 0,
        totalCount = 0;
    
      /**
       * Resource loading
       **/
    
      function loadSamples(srcObj, callback) {
        for (var k in srcObj) {
          totalCount++;
        }
        for (var k in srcObj) {
          _loadSample(k, srcObj[k]);
        }
        _onSamplesLoaded = callback;
      }
    
      function _onSamplesLoaded() {
        console.warn("Need to pass a callback to load()");
      }
    
      function _handleSampleLoad(key, buffer) {
        if (!buffer) {
          console.error("Unable to decode audio file", url);
          return;
        }
        bank[key] = buffer;
        if (++loadCount == totalCount) _onSamplesLoaded();
      }
    
      function _loadSample(key, url) {
        var req = new XMLHttpRequest();
        req.responseType = "arraybuffer";
        req.onload = function () {
          A.decodeAudioData(
            req.response,
            function (b) {
              _handleSampleLoad(key, b);
            },
            function (err) {
              console.error("Unable to decode audio data", err);
            }
          );
        };
        req.onerror = function (err) {
          console.error("Error loading sample data", key, url, err);
        };
        req.open("GET", url, true);
        req.send();
      }
    
      /**
       * Resource playing
       **/
    
      function playSample(id, when) {
        var s = A.createBufferSource();
        s.buffer = bank[id];
        s.connect(A.destination);
        s.start(when || 0);
      }
    
      var API = {
        play: playSample,
        init: loadSamples
      };
      return API;
    })(AUDIO);
    
    /**
     * Sequencer
     **/
    var Sequencer = (function (A, S) {
      var evs = {
        SEQUENCER_PLAY: "sequencer:play",
        SEQUENCER_STOP: "sequencer:stop",
        SEQUENCER_SET_PATTERN: "sequencer:setpattern",
        SEQUENCER_PATTERN_CHANGED: "sequencer:patternchanged",
        SEQUENCER_STEP: "sequencer:step",
        SEQUENCER_NOTE_PLAY: "sequencer:noteplay"
      };
    
      var tempo,
        tic,
        _initialized = false;
      var noteTime,
        startTime,
        ti,
        currentStep = 0;
      var isPlaying = false;
      var currentPattern = null,
        _currentPatternSequenceRaw;
      var channelStatus = {};
    
      function setTempo(newTempo) {
        tempo = newTempo;
        tic = 60 / tempo / 4; // 16th
      }
    
      /* Scheduling */
    
      function scheduleNote() {
        if (!isPlaying) return false;
        var ct = A.currentTime;
        ct -= startTime;
        while (noteTime < ct + 0.2) {
          var pt = noteTime + startTime;
    
          playPatternStepAtTime(pt);
    
          nextNote();
        }
        ti = setTimeout(scheduleNote, 0);
      }
    
      function nextNote() {
        currentStep++;
        if (currentStep == 16) currentStep = 0;
        noteTime += tic;
      }
    
      function playPatternStepAtTime(pt) {
        for (var k in currentPattern) {
          if (channelStatus[k] !== false && currentPattern[k][currentStep] == "1") {
            S.play(k, pt);
            dispatcher.trigger(dispatcher.EventKeys.SEQUENCER_NOTE_PLAY, k);
          }
          dispatcher.trigger(dispatcher.EventKeys.SEQUENCER_STEP, currentStep);
        }
      }
    
      /* Parsing */
    
      function playPattern(pattern, loops) {
        if (!_initialized) throw "Sequencer not initialized";
        if (currentPattern === null) _parsePattern(pattern);
    
        if (loops === undefined) loops = 1;
        if (loops === -1) loops = Number.MAX_INT;
    
        play();
      }
    
      function _parsePattern(pattern) {
        currentPattern = {};
        _currentPatternSequenceRaw = _.extend(pattern.sequence, {});
        for (var k in pattern.sequence) {
          var pat = _parseLine(pattern.sequence[k]);
          currentPattern[k] = pat;
        }
      }
    
      function _parseLine(line) {
        if (line.length !== 16) console.error("Invalid line length", pattern);
        return line.split("");
      }
    
      /** Transport **/
    
      function play() {
        isPlaying = true;
        noteTime = 0.0;
        startTime = A.currentTime + 0.005;
        scheduleNote();
      }
    
      function stop() {
        isPlaying = false;
        currentStep = 0;
        dispatcher.trigger(dispatcher.EventKeys.SEQUENCER_STEP, currentStep);
      }
    
      function changeChannelActiveStatus(channel, status) {
        channelStatus[channel] = status;
      }
    
      var _template = Handlebars.compile(
        '\
        <div class="module sequencer">\
          <div class="sequencer-channels">\
                {{#each channels}}\
                    <div class="channel row row-cols-auto pt-2 pb-2" data-inst="{{ this }}"></div>\
                    <div class="sep"></div>\
                {{/each}}\
                 </div>\
        </div>'
      );
    
      var SequencerView = Backbone.View.extend({
        channelViews: {},
        initialize: function (options) {
          this.listenTo(
            dispatcher,
            dispatcher.EventKeys.SEQUENCER_PLAY,
            playPattern
          );
          this.listenTo(dispatcher, dispatcher.EventKeys.SEQUENCER_STOP, this.stop);
          this.listenTo(
            dispatcher,
            dispatcher.EventKeys.SEQUENCER_SET_PATTERN,
            this.setPattern
          );
          this.listenTo(
            dispatcher,
            dispatcher.EventKeys.SEQUENCER_SET_TEMPO,
            setTempo
          );
          this.listenTo(
            dispatcher,
            dispatcher.EventKeys.SEQUENCER_STEP,
            this.setPlayhead
          );
          this.listenTo(
            dispatcher,
            dispatcher.EventKeys.SEQUENCER_NOTE_PLAY,
            this.onNotePlay
          );
        },
        setPattern: function (pattern) {
          _parsePattern(pattern);
    
          this.render();
    
          for (var k in this.channelViews) {
            this.channelViews[k].remove();
          }
          for (var k in currentPattern) {
            var $cel = this.$el.find('.channel[data-inst="' + k + '"]');
            this.channelViews[k] = new ChannelView({
              channel: k,
              model: currentPattern[k],
              el: $cel
            });
          }
    
          this.renderChannels();
        },
        render: function () {
          var data = currentPattern ? Object.keys(currentPattern) : [];
          var rawHTML = _template({ channels: data });
          this.$el.html(rawHTML);
          return this;
        },
        renderChannels: function () {
          this.$channelContainer = this.$el.find(".sequencer-channels");
          for (var k in this.channelViews) {
            this.channelViews[k].render();
          }
          this.$steps = $(".channel span");
        },
        setPlayhead: function (stepId) {
          for (var k in this.channelViews) {
            this.channelViews[k].setPlayhead(stepId);
          }
        },
        onNotePlay: function (channel) {
          this.channelViews[channel].spikeEQ();
        },
        stop: function () {
          stop();
          for (var k in this.channelViews) {
            this.channelViews[k].clearPlayhead();
          }
        }
      });
    
      var _channelTemplate = Handlebars.compile(
        `\
        <div class="col">
            <button class="control mute active"></button>\
        </div>\
        <div class="col">
            <button class="control pad">{{ symbol }}</button>\
        </div>\
        <div class="col">
            <div class="control meter vertical">\
                <span></span>\
            </div>\
        </div>\
        <div class="col-12 col-xs-12 col-sm-12 col-md-9">
            <div class="seq-row inline row gx-4 pt-2">\
                {{#each notes}}\
                    <span data-tic="{{ @index }}" class="col"></span>\
                {{/each}}\
            </div>\
        </div>\
        `
      );
    
      var ChannelView = Backbone.View.extend({
        events: {
          "click .seq-row span": "onNoteClick",
          "click .pad": "onPadClick",
          "click .mute": "onMuteClick"
        },
        channel: null,
        active: true,
        initialize: function (options) {
          this.channel = options.channel;
        },
        render: function () {
          var rawHTML = _channelTemplate({
            id: this.channel,
            symbol: this.channel.substr(0, 1).toUpperCase(),
            notes: this.model
          });
          this.$el.html(rawHTML);
    
          this.$notes = this.$el.find(".seq-row span");
          this.$eq_bar = this.$el.find(".meter span");
          this.$active = this.$el.find(".mute");
    
          var self = this;
          this.model.forEach(function (note, idx) {
            var $el = self.$notes.eq(idx);
            if (note === "1") $el.addClass("seq-note");
            if (idx % 4 === 0) $el.addClass("seq-step-measure");
          });
          this.spikeEQ();
          this.$active.toggleClass("active", this.active);
          return this;
        },
        clearPlayhead: function () {
          this.$notes.removeClass("seq-playhead");
        },
        setPlayhead: function (id) {
          this.clearPlayhead();
          this.$notes.filter('[data-tic="' + id + '"]').addClass("seq-playhead");
        },
        onNoteClick: function (e) {
          var tic = $(e.currentTarget).attr("data-tic");
          currentPattern[this.channel][tic] =
            currentPattern[this.channel][tic] === "1" ? "0" : "1";
          this.render();
        },
        onMuteClick: function (e) {
          this.active = !this.active;
          channelStatus[this.channel] = this.active;
          this.$active.toggleClass("active", this.active);
        },
        onPadClick: function (e) {
          S.play(this.channel);
          this.spikeEQ(this.channel);
        },
        spikeEQ: function () {
          var self = this;
          this.$eq_bar.removeClass("fade");
          this.$eq_bar.css("transform", "scaleX(1)");
    
          setTimeout(function () {
            self.$eq_bar.addClass("fade");
            self.$eq_bar.css("transform", "scaleX(0)");
          }, 50);
        }
      });
    
      function init(options) {
        dispatcher.register(evs);
        new SequencerView(options).render();
        setTempo(150);
        _initialized = true;
      }
    
      return {
        init: init
      };
    })(AUDIO, SampleBank);
    
    /**
     * Transport
     **/
    var Transport = (function () {
      var evs = {
        TRANSPORT_PLAY: "transport:play",
        TRANSPORT_STOP: "transport:stop",
        TRANSPORT_REQUEST_PLAY: "transport:requestplay",
        TRANSPORT_REQUEST_STOP: "transport:requeststop",
        TRANSPORT_TEMPO_CHANGED: "transport:tempochanged",
        TRANSPORT_CHANGE_TEMPO: "transport:changetempo"
      };
    
      var _template = Handlebars.compile(
        '\
        <div class="module transport pb-2">\
          <button class="transport-play" title="Play">&#9658;</button>\
                <button class="transport-stop" title="Stop">&#9632;</button>\
                <input type="text" size="3" min="30" max="250" value="150" class="transport-tempo" /> \
        </div>\
      '
      );
    
      function play() {
        console.log("play");
        dispatcher.trigger(dispatcher.EventKeys.TRANSPORT_REQUEST_PLAY);
      }
    
      function stop() {
        dispatcher.trigger(dispatcher.EventKeys.TRANSPORT_REQUEST_STOP);
      }
    
      var TransportView = Backbone.View.extend({
        events: {
          "click .transport-play": "onPlayClick",
          "click .transport-stop": "onStopClick",
          "change .transport-tempo": "onTempoChange"
        },
        initialize: function (options) {
          this.listenTo(dispatcher, dispatcher.EventKeys.TRANSPORT_PLAY, play);
          this.listenTo(dispatcher, dispatcher.EventKeys.TRANSPORT_STOP, stop);
          this.listenTo(
            dispatcher,
            dispatcher.EventKeys.TRANSPORT_CHANGE_TEMPO,
            this.onIncomingTempoChange
          );
        },
        render: function () {
          var rawHTML = _template();
          this.$el.html(rawHTML);
          this.$tempo = this.$el.find(".transport-tempo");
          return this;
        },
        onPlayClick: play,
        onStopClick: stop,
        onTempoChange: function (e) {
          var newTempo = $(e.currentTarget).val();
          dispatcher.trigger(
            dispatcher.EventKeys.TRANSPORT_TEMPO_CHANGED,
            newTempo
          );
        },
        onIncomingTempoChange: function (newTempo) {
          this.$tempo.val(newTempo);
          dispatcher.trigger(
            dispatcher.EventKeys.TRANSPORT_TEMPO_CHANGED,
            newTempo
          );
        }
      });
    
      function init(options) {
        dispatcher.register(evs);
        new TransportView(options).render();
      }
    
      return {
        init: init
      };
    })();
    
    /**
     * Metronome
     **/
    var Metronome = (function () {
      var evs = {
        METRONOME_TIC: "metronome:tic",
        METRONOME_CLEAR: "metronome:clear"
      };
    
      var _template = Handlebars.compile(
        `\
            
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0dc1ff" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg>\
            <div class="control metronome rounded-end">\
          <span></span>\
          <span></span>\
          <span></span>\
          <span></span>\
        </div>\
        `
      );
    
      var MetronomeView = Backbone.View.extend({
        initialize: function (options) {
          this.listenTo(dispatcher, dispatcher.EventKeys.METRONOME_TIC, this.onTic);
          this.listenTo(
            dispatcher,
            dispatcher.EventKeys.METRONOME_CLEAR,
            this.clear
          );
        },
        render: function () {
          var rawHTML = _template();
          this.$el.html(rawHTML);
          this.$steps = this.$el.find("span");
          return this;
        },
        clear: function () {
          this.$steps.removeClass("active");
        },
        onTic: function (stepId) {
          if (stepId % 4 == 0) {
            this.clear();
            this.$steps.eq(Math.floor(stepId / 4)).addClass("active");
          }
        }
      });
    
      function init(options) {
        dispatcher.register(evs);
        new MetronomeView(options).render();
      }
    
      return {
        init: init
      };
    })();
    
    /**
     * Preset pattern selector
     **/

    
    /** Application **/
    
    var DrumApp = {
      _connectModules: function () {
        // Transport controls -> sequencer
        dispatcher.on(dispatcher.EventKeys.TRANSPORT_REQUEST_PLAY, function () {
          dispatcher.trigger(dispatcher.EventKeys.SEQUENCER_PLAY);
        });
        dispatcher.on(dispatcher.EventKeys.TRANSPORT_REQUEST_STOP, function () {
          dispatcher.trigger(dispatcher.EventKeys.SEQUENCER_STOP);
        });
        dispatcher.on(
          dispatcher.EventKeys.TRANSPORT_TEMPO_CHANGED,
          function (newTempo) {
            dispatcher.trigger(dispatcher.EventKeys.SEQUENCER_SET_TEMPO, newTempo);
          }
        );
    
        // Sequencer actions -> metronome
        dispatcher.on(dispatcher.EventKeys.SEQUENCER_STEP, function (stepId) {
          dispatcher.trigger(dispatcher.EventKeys.METRONOME_TIC, stepId);
        });
        dispatcher.on(dispatcher.EventKeys.SEQUENCER_STOP, function () {
          dispatcher.trigger(dispatcher.EventKeys.METRONOME_CLEAR);
        });
    
        // Preset list -> tempo and sequencer
        dispatcher.on(dispatcher.EventKeys.PRESET_SELECTED, function (preset) {
          dispatcher.trigger(
            dispatcher.EventKeys.TRANSPORT_CHANGE_TEMPO,
            preset.tempo
          );
          dispatcher.trigger(dispatcher.EventKeys.SEQUENCER_SET_PATTERN, preset);
        });
      },
    
      onLoad: function () {
        this._connectModules();
    
        var pattern = {
          sequence: {
            kick:       "1000000000000000",
            snare:      "0000000010000000",
            closedHat:  "0000000000000000",
            openHat:    "0000000000000000"
          }
        };
    
        dispatcher.trigger(dispatcher.EventKeys.SEQUENCER_SET_PATTERN, pattern);
        //dispatcher.trigger(dispatcher.EventKeys.TRANSPORT_PLAY);
      },
    
      init: function () {
        //
        document.addEventListener(
          "visibilitychange",
          function (e) {
            if (document.hidden)
              dispatcher.trigger(dispatcher.EventKeys.SEQUENCER_STOP);
          },
          false
        );
    
        // 808 or GTFO
        var samples = {},
          sampleList = ["kick", "snare", "openHat", "closedHat", "kick", "snare", "openHat", "closedHat"];
        sampleList.forEach(function (id) {
          samples[id] =
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/101507/" + id + ".wav";
            console.log(samples[id]);
        });
    
        Sequencer.init({ el: $("#r-mid") });
        Transport.init({ el: $("#r-top") });
        Metronome.init({ el: $("#r-head") });
    
        // Load samples and kickoff
        SampleBank.init(samples, this.onLoad.bind(this));

        console.log(samples);

      }
    };
    
    DrumApp.init();
    


}

function drumMachine() {
    const element = (
        <div>

            <div id="drum-maschine" className="container mb-4-sm p-0">
                <div id="display"></div>

<div id="drum-app" className="seq-ui shadow rounded-3 p-3">
  <div className="drum-app-region" id="r-head"></div>
  <div className="drum-app-region" id="r-top"></div>
  <div className="drum-app-region" id="r-mid"></div>
  <div className="drum-app-region" id="r-bottom"></div>
  <div className="drum-app-region" id="r-footer"></div>
</div>



                    <div id="drum-kick-1" className="drum-pad">
                        <audio id="Q" data-key="81" src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav" className="clip">Q</audio>
                    </div>
                    <div id="drum-kick-2" className="drum-pad">
                        <audio id="W" data-key="87" src="https://freewavesamples.com/files/Bass-Drum-1.wav" className="clip">W</audio>
                    </div>
                    <div id="drum-snare-1" className="drum-pad">
                        <audio id="E" data-key="69" src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/snare.wav" className="clip">E</audio>
                    </div>
                    <div id="drum-snare-2" className="drum-pad">
                        <audio id="A" data-key="65" src="https://freewavesamples.com/files/Ensoniq-ESQ-1-Snare.wav" className="clip">A</audio>
                    </div>
                    <div id="drum-op-hat-1" className="drum-pad">
                        <audio id="S" data-key="83" src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-open.wav" className="clip">S</audio>
                    </div>
                    <div id="drum-op-hat-2" className="drum-pad">
                        <audio id="D" data-key="68" src="https://freewavesamples.com/files/Ensoniq-SQ-1-Open-Hi-Hat.wav" className="clip">D</audio>
                    </div>
                    <div id="drum-cl-hat-1" className="drum-pad">
                        <audio id="Z" data-key="90" src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-close.wav" className="clip">Z</audio>
                    </div>
                    <div id="drum-cl-hat-2" className="drum-pad">
                        <audio id="X" data-key="88" src="https://freewavesamples.com/files/Closed-Hi-Hat-1.wav" className="clip">X</audio>
                    </div>
                    <div id="drum-tom" className="drum-pad">
                        <audio id="C" data-key="67" src="https://freewavesamples.com/files/Floor-Tom-1.wav" className="clip">C</audio>
                    </div>

            </div>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('drum_machine_component')
    );
}

drumMachine();
maschine();




  




