const quoteItems = [
    {
      "quote": "Be yourself; everyone else is already taken.",
      "author": "Oscar Wilde",
      "profession": "Irish poet",
      "topics": [
        "Inspirational",
        "Advice",
        "Humor"
      ]
    },
    {
      "quote": "To live is the rarest thing in the world. Most people exist, that is all.",
      "author": "Oscar Wilde",
      "profession": "Irish poet",
      "topics": [
        "Philosophy",
        "Humor"
      ]
    },
    {
      "quote": "True friends stab you in the front.",
      "author": "Oscar Wilde",
      "profession": "Irish poet",
      "topics": [
        "Philosophy",
        "People"
      ]
    },
    {
      "quote": "Women are made to be Loved, not understood.",
      "author": "Oscar Wilde",
      "profession": "Irish poet",
      "topics": [
        "Philosophy",
        "Humor"
      ]
    },
    {
      "quote": "Be the change that you wish to see in the world.",
      "author": "Mahatma Gandhi",
      "profession": "Indian leader",
      "topics": [
        "Inspirational",
        "Philosophy",
        "Advice"
      ]
    },
    {
      "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
      "author": "Mahatma Gandhi",
      "profession": "Indian leader",
      "topics": [
        "Inspirational",
        "Life",
        "Advice"
      ]
    },
    {
      "quote": "No one can make you feel inferior without your consent.",
      "author": "Eleanor Roosevelt",
      "profession": "Former First Lady of the United States",
      "topics": [
        "Wisdom"
      ]
    },
    {
      "quote": "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
      "author": "Eleanor Roosevelt",
      "profession": "Former First Lady of the United States",
      "topics": [
        "Wisdom",
        "People"
      ]
    },
    {
      "quote": "Do what you feel in your heart to be right - for you'll be criticized anyway.",
      "author": "Eleanor Roosevelt",
      "profession": "Former First Lady of the United States",
      "topics": [
        "Wisdom",
        "Advice"
      ]
    },
    {
      "quote": "Do one thing every day that scares you.",
      "author": "Eleanor Roosevelt",
      "profession": "Former First Lady of the United States",
      "topics": [
        "Wisdom",
        "Life"
      ]
    },
    {
      "quote": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
      "author": "Martin Luther King",
      "profession": "American minister",
      "topics": [
        "Inspirational",
        "Wisdom",
        "Love"
      ]
    },
    {
      "quote": "Our lives begin to end the day we become silent about things that matter.",
      "author": "Martin Luther King",
      "profession": "American minister",
      "topics": [
        "Inspirational",
        "Life"
      ]
    },
    {
      "quote": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      "author": "Martin Luther King",
      "profession": "American minister",
      "topics": [
        "People",
        "Life"
      ]
    },
    {
      "quote": "Injustice anywhere is a threat to justice everywhere.",
      "author": "Martin Luther King",
      "profession": "American minister",
      "topics": [
        "Wisdom"
      ]
    },
    {
      "quote": "The time is always right to do what is right.",
      "author": "Martin Luther King",
      "profession": "American minister",
      "topics": [
        "Inspirational",
        "Wisdom"
      ]
    },
    {
      "quote": "Life's most persistent and urgent question is, 'What are you doing for others?",
      "author": "Martin Luther King",
      "profession": "American minister",
      "topics": [
        "Inspirational",
        "Life",
        "People"
      ]
    },
    {
      "quote": "Weak people revenge. Strong people forgive. Intelligent People Ignore.",
      "author": "Albert Einstein",
      "profession": "Theoretical physicist",
      "topics": [
        "Inspirational",
        "Life"
      ]
    },
    {
      "quote": "I have not failed. I've just found 10,000 ways that won't work.",
      "author": "Thomas A. Edison",
      "profession": "American inventor",
      "topics": [
        "Inspirational"
      ]
    },
    {
      "quote": "Genius is one percent inspiration and ninety-nine percent perspiration.",
      "author": "Thomas A. Edison",
      "profession": "American inventor",
      "topics": [
        "Inspirational",
        "Wisdom"
      ]
    },
    {
      "quote": "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
      "author": "Thomas A. Edison",
      "profession": "American inventor",
      "topics": [
        "Inspirational",
        "Advice"
      ]
    },
    {
      "quote": "If we did all the things we are capable of, we would literally astound ourselves.",
      "author": "Thomas A. Edison",
      "profession": "American inventor",
      "topics": [
        "Inspirational"
      ]
    },
    {
      "quote": "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
      "author": "Albert Einstein",
      "profession": "Theoretical physicist",
      "topics": [
        "Inspirational",
        "Wisdom"
      ]
    },
    {
      "quote": "Life isn't about finding yourself. Life is about creating yourself.",
      "author": "George Bernard Shaw",
      "profession": "Irish playwright",
      "topics": [
        "Inspirational",
        "Life",
        "Advice"
      ]
    },
    {
      "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      "author": "Winston Churchill",
      "profession": "Former British Prime Minister",
      "topics": [
        "Inspirational",
        "Life",
        "Advice"
      ]
    },
    {
      "quote": "If you're going through hell, keep going.",
      "author": "Winston Churchill",
      "profession": "Former British Prime Minister",
      "topics": [
        "Inspirational",
        "Advice"
      ]
    },
    {
      "quote": "We make a living by what we get, but we make a life by what we give.",
      "author": "Winston Churchill",
      "profession": "Former British Prime Minister",
      "topics": [
        "People",
        "Life"
      ]
    },
    {
      "quote": "Peace begins with a smile.",
      "author": "Mother Teresa",
      "profession": "Roman Catholic Saint",
      "topics": [
        "Inspirational",
        "Wisdom"
      ]
    },
    {
      "quote": "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
      "author": "Mother Teresa",
      "profession": "Roman Catholic Saint",
      "topics": [
        "Inspirational",
        "Love",
        "Advice"
      ]
    },
    {
      "quote": "If you can't feed a hundred people, then feed just one.",
      "author": "Mother Teresa",
      "profession": "Roman Catholic Saint",
      "topics": [
        "Inspirational",
        "Advice",
        "People"
      ]
    },
    {
      "quote": "Kind words can be short and easy to speak, but their echoes are truly endless.",
      "author": "Mother Teresa",
      "profession": "Roman Catholic Saint",
      "topics": [
        "Inspirational",
        "People"
      ]
    },
    {
      "quote": "Isn't it nice to think that tomorrow is a new day with no mistakes in it yet?",
      "author": "L.M. Montgomery",
      "profession": "Canadian author",
      "topics": [
        "Inspirational"
      ]
    },
    {
      "quote": "Tomorrow is always fresh, with no mistakes in it.",
      "author": "L.M. Montgomery",
      "profession": "Canadian author",
      "topics": [
        "Inspirational"
      ]
    },
    {
      "quote": "We should regret our mistakes and learn from them, but never carry them forward into the future with us.",
      "author": "L.M. Montgomery",
      "profession": "Canadian author",
      "topics": [
        "Inspirational",
        "Advice",
        "Life"
      ]
    },
    {
      "quote": "It's so easy to be wicked without knowing it, isn't it?",
      "author": "L.M. Montgomery",
      "profession": "Canadian author",
      "topics": [
        "Inspirational",
        "Philosophy",
        "Life"
      ]
    },
    {
      "quote": "All the darkness in the world cannot extinguish the light of a single candle.",
      "author": "Francis of Assisi",
      "profession": "Italian Catholic Saint",
      "topics": [
        "Inspirational",
        "Wisdom"
      ]
    },
    {
      "quote": "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
      "author": "Francis of Assisi",
      "profession": "Italian Catholic Saint",
      "topics": [
        "Inspirational",
        "Wisdom"
      ]
    },
    {
      "quote": "Preach the Gospel at all times and when necessary use words.",
      "author": "Francis of Assisi",
      "profession": "Italian Catholic Saint",
      "topics": [
        "Religion",
        "Wisdom"
      ]
    },
    {
      "quote": "A single sunbeam is enough to drive away many shadows.",
      "author": "Francis of Assisi",
      "profession": "Italian Catholic Saint",
      "topics": [
        "Inspirational",
        "Wisdom"
      ]
    },
    {
      "quote": "You never fail until you stop trying.",
      "author": "Albert Einstein",
      "profession": "Theoretical physicist",
      "topics": [
        "Inspirational",
        "Advice"
      ]
    },
    {
      "quote": "You see things; you say, 'Why?' But I dream things that never were; and I say 'Why not?",
      "author": "George Bernard Shaw",
      "profession": "Irish playwright",
      "topics": [
        "Inspirational"
      ]
    },
    {
      "quote": "We don't stop playing because we grow old; we grow old because we stop playing.",
      "author": "George Bernard Shaw",
      "profession": "Irish playwright",
      "topics": [
        "Inspirational"
      ]
    },
    {
      "quote": "Progress is impossible without change, and those who cannot change their minds cannot change anything.",
      "author": "George Bernard Shaw",
      "profession": "Irish playwright",
      "topics": [
        "Inspirational"
      ]
    },
  ]; 

  
  let apiResponse = fetch("https://gist.githubusercontent.com/awran5/355643af99164a61ae0f95c84206d151/raw/c62636e8eef7e73540fa04b67f753ca9b95ee21e/quotes-api.js").then(res => res.json()).then((data) => {
    return data[0];
});



  function random_item(items){
    return items.sort(() => Math.random() - 0.5).slice(0, 5); 
  }

console.log(apiResponse);

  function loadQuote() {
    let randomItem = random_item(quoteItems);
    let randomResult = randomItem;

    let quoteBox = document.getElementById('quote-box');
    let tweetbtn = document.getElementById('tweet-quote');
    let quoteText = document.getElementById('text');
    let authorName = document.getElementById('author');

    let insertQuote = randomResult[0].quote;  
    if (insertQuote) {
      quoteText.innerHTML = insertQuote;
    }  
    
    let insertAuthor = randomResult[0].author;
    authorName.innerHTML = insertAuthor;

    let twitterUrl = "https://twitter.com/intent/tweet?text=";
    let quoteStr = insertQuote.toString();
    let authorStr = insertAuthor.toString();
    let urlString = twitterUrl + "%22" + quoteStr + "%22" + "%20%2D%20" + authorStr.toString();
    tweetbtn.href = urlString;

  }
  
  window.addEventListener('load', function() {
    console.log('Window loaded');
    loadQuote();
  });

  document.addEventListener('load', function() {
    console.log('Document loaded');
    loadQuote();
  });
  

  function getQuote() {
    
    let randomItem = random_item(quoteItems);
    let randomResult = randomItem;

    

    let btn = document.getElementById('new-quote');
    let tweetbtn = document.getElementById('tweet-quote');
    let quoteText = document.getElementById('text');
    let authorName = document.getElementById('author');

    // tweetbtn.onclick = () => {
    //     let insertQuote = randomResult[0].quote;    

    //       quoteText.innerHTML = insertQuote;
    //       console.log(randomResult[0].quote);

    // };

    btn.onclick = () => {
      let insertQuote = randomResult[0].quote;    
      if (insertQuote !== quoteText.innerHTML) {
        quoteText.innerHTML = insertQuote;
        console.log(randomResult[0].quote);
      } else {
        quoteText.innerHTML = randomResult[1].quote;
        console.log(randomResult[1].quote);
      }

      let insertAuthor = randomResult[0].author;    
      if (insertAuthor !== authorName.innerHTML) {
        authorName.innerHTML = insertAuthor;
        let twitterUrl = "https://twitter.com/intent/tweet?text=";
        let quoteStr = insertQuote.toString();
        let authorStr = insertAuthor.toString();
        let urlString = twitterUrl + "%22" + quoteStr + "%22" + "%20%2D%20" + authorStr.toString();
        tweetbtn.href = urlString;
        console.log(randomResult[0].author);
      } else {
        authorName.innerHTML = randomResult[1].author;
        let twitterUrl = "https://twitter.com/intent/tweet?text=";
        let quoteStr = insertQuote.toString();
        let authorStr = insertAuthor.toString();
        let urlString = twitterUrl + "%22" + quoteStr + "%22" + "%20%2D%20" + authorStr.toString();
        tweetbtn.href = urlString;
        console.log(randomResult[1].author);
      }
    };

  }
  



function tick() {
    const element = (

      <div id="quote-box">
        
        <blockquote className="blockquote d-block">
          <p className="fs-1 lh-sm fw-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16">
              <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
            </svg>
            <span id="text"></span>
          </p>
        </blockquote>
        <figcaption className="blockquote-footer d-block">
          <footer className="text-end fw-light fs-3" id="author"></footer>
        </figcaption>

        <div className="row p-0 m-0">
          <div className="d-flex p-0 m-0">
            
            <a id='tweet-quote' className="btn btn-primary rounded-1 text-start me-auto" href="#" role="button" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
              </svg>
            </a>

            <button id='new-quote' type="button" className="btn btn-primary rounded-1 text-end" onClick={getQuote}>New Quote</button>

          </div>
        </div>
        
      </div>
    );
    ReactDOM.render(
      element,
      document.getElementById('qoute_component')
    );
  }
  
tick();
getQuote();
loadQuote();