function random_item(items){
    ~~(Math.random()*10) + 1
    return items.sort(() => Math.random() - 0.172).slice(0, 172); 
}

const colors = [`Black`];

const bgcolors = ['dark'];

const imageArrayChoice = [0,1,2,3,4,5,6,7,8,9]
let randomiseChoice = _.sample(imageArrayChoice)

var w = window.innerWidth;
var h = window.innerHeight;

const strokeWidth = "0.1px";

let link_arrow = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" stroke="black" strokeWidth="` + strokeWidth + `" class="ps-2 bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
    <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z"/>
</svg>`

$(document).ready(() => {

        var amount_01 = 150    
        var weeks_01 = 30
        var amount_02 = 200    
        var weeks_02 = 22
        var equation_01 = _.toNumber(amount_01)  * _.toNumber(weeks_01)
        var equation_02 = _.toNumber(amount_02)  * _.toNumber(weeks_02)
        console.log(
            "Amount: ", _.toNumber(equation_01) + _.toNumber(equation_02)
        );    

  let quoteApi = fetch('https://gist.githubusercontent.com/awran5/355643af99164a61ae0f95c84206d151/raw/c62636e8eef7e73540fa04b67f753ca9b95ee21e/quotes-api.js')
  .then(response => response.json())
  .then(data => {



    console.log(data) // Prints result from `response.json()` in getRequest
    console.log(_.shuffle(Object.values(data)))
    const objectArray = _.shuffle(Object.values(data));
    const objectKeys = Object.keys(data);

    const values = _.shuffle(Object.values(objectArray));
    const ranVals = values[0]
    console.log(ranVals);

    let randomItems = _.sample(objectArray);
    let randomKeys = _.sample(objectKeys);
    console.log(randomItems);
    console.log(randomKeys, randomKeys.length);

    async function loadQuote() {

        let randomItem = ranVals;
        let randomResult = ranVals;

        let quoteBox = document.getElementById('quote-box');
        let tweetbtn = document.getElementById('tweet-quote');
        let quoteText = document.getElementById('text');
        let authorName = document.getElementById('author');
        let btn = document.getElementById('new-quote');
        let allquote_text = document.getElementById('quote-text')
        let quotemark = document.getElementById('quotemark');
        let authorImg = document.getElementById('auth-image');
        let textArea = document.getElementById('quote-text-area');
        let imgCopy = document.getElementById('image-copyright');
        let quoteBtns = document.getElementById('buttons');
        let imgLoading = document.getElementById('loading-dots');

        


        const loading_dots = `
        <div class="container-fluid p-0 m-0">
            <div class="row p-0 m-0">
                <div class="progress p-0 rounded-0" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar rounded-0" style="width: 0%"></div>
                </div>
            </div>
        </div>
        `;

        var count = 60;
        var counting = setInterval(function(){
            if(count < 101) {
                $('.inner-card').css("display", 'none');
                $('.progress-bar').css("width", count + '%');
                count++
            } else {
                clearInterval(counting)
                $('.inner-card').css(
                    {
                        "display": 'inherit',
                        "animation": 'fadeIn 5s'
                    }
                );
                $('.fade').css(
                    {
                        "animation": 'fadeIn 5s'
                    }
                );


                imgLoading.innerHTML = loading_dots

                textArea.classList.add('fade');
                textArea.classList.add('show');
                quoteText.classList.add('fade');
                quoteText.classList.add('show');
                authorName.classList.add('fade');
                authorName.classList.add('show');
                quotemark.classList.add('fade');
                quotemark.classList.add('show');
                imgCopy.classList.add('fade');
                imgCopy.classList.add('show');
                quoteBtns.classList.add('fade');
                quoteBtns.classList.add('show');
        
                let insertQuote = randomResult.quote;  
                if (insertQuote) {
                    quoteText.innerHTML = insertQuote;
                    quoteText.style.color = _.sample(colors)
                }  
            
                let insertAuthor = randomResult.author;
                authorName.innerHTML = insertAuthor;
                authorName.style.color = _.sample(colors)
        
                quotemark.innerHTML = '&ldquo;'
        
                let twitterUrl = "https://twitter.com/intent/tweet?text=";
                let quoteStr = insertQuote.toString();
                let authorStr = insertAuthor.toString();
                let urlString = twitterUrl + "%22" + quoteStr + "%22" + "%20%2D%20" + authorStr.toString();
                tweetbtn.href = urlString;
        
            
                let quoteEdit = quoteStr.replaceAll(" ", "+");
                let exchangeSpacetoUnderscore = insertAuthor.replaceAll(" ", "+");
                let urlFormatted = "https://api.artic.edu/api/v1/artworks/search?q=" + exchangeSpacetoUnderscore + "+" + quoteEdit
                console.log("search author " + urlFormatted);
        
                fetch(
                    urlFormatted,
                    {
                    method: "GET"
                    }
                )
                .then(blob => blob.json())
                .then(dataset => {
        
        
        
                    const datasetNumChoice = randomiseChoice
                    const string_data = JSON.stringify(dataset)
                    console.log("dataset url " + urlFormatted)
                    console.log("dataset " + string_data )
                    const getTheImageAPi = "https://api.artic.edu/api/v1/artworks/" + dataset.data[datasetNumChoice].id + "?fields=id,title,image_id,artist_title,info"
                                
                    fetch(
                        getTheImageAPi,
                        {
                            method: "GET"
                        }
                    )
                    .then(blob => blob.json())
                    .then(imgdata => {
        
                        const image_url = imgdata.config.iiif_url
                        const image_data_id = imgdata.data.image_id
                        const url_append_data = '/full/843,/0/default.jpg'
                        const url_format = image_url + "/" + image_data_id + url_append_data
                        const UrlsFormat = url_format.replaceAll("\'", "");
                        const UrlFormat = UrlsFormat.replaceAll('"', "");
                        const imgAltText = dataset.data[datasetNumChoice].thumbnail.alt_text;
                        console.log("dataset " + UrlFormat )
                        console.log("dataset " + getTheImageAPi )
                        console.log("dataset " + JSON.stringify(imgdata) )
        
                        const imgCopy = document.getElementById('image-copyright');
                        const imgCopyTitle = JSON.stringify(imgdata.data.title);
                        const imgCopyFormat = imgCopyTitle.replaceAll('"', "");
                        const imgCopyLicense = JSON.stringify(imgdata.info.license_text);
                        const imgCopyLicenseFormat = imgCopyLicense.replaceAll('"', ""); 
        
                        const artistName = imgdata.data.artist_title
        
                        function artistNameIf(artist) {
                            if (artist !== 'null') { 
                                return artistName 
                            } else {
                                return _.capitalize(`Unknown Artist`)
                            }
                        }
        
                        const imgCopyLicenseLink = imgdata.info.license_links[0]
                        const imgCopyTandCLink = imgdata.info.license_links[1]
        
                        const authorImg = document.getElementById('auth-image');
                        
                        // if (UrlFormat || imgAltText) {
                        //     authorImg.innerHTML = `<img id="author-img" className="card-img object-fit-cover" src="` + UrlFormat + `" alt="` + imgAltText + `" width="` + w + `" height="` + h + `"></img>`
                        // } 
        
                        const obj = {};
                        
                        const getMeta = async (url) => {
                            const img = new Image();
                            img.src = url;
                            await img.decode();  
                            return img
                        };                
                        getMeta(UrlFormat).then(img => {
                            obj.height = img.naturalHeight;
                            obj.width = img.naturalWidth;
                            console.log(JSON.stringify(obj));
                            console.log(Object.freeze(obj));
        
        
                        if (UrlFormat || imgAltText) {
        
                            authorImg.innerHTML = ""
        
                            authorImg.innerHTML += `<div id="image-overlay" class="shadow image-wrap overlay fade show" style="background-image: url(` + UrlFormat + `);width:`+w*2+`px;height:`+h*2+`px;" alt="` + imgAltText + `"></div>`
                                
                            authorImg.innerHTML += `<div id="author-img" class="shadow image-wrap fade show" style="background-image: url(` + UrlFormat + `);width:`+w*2+`px;height:`+h*2+`px;" alt="` + imgAltText + `"></div>`
                                
                        } 
                        if (authorImg.src == "https://www.artic.edu/iiif/2/null/full/843,/0/default.jpg"){
        
                            authorImg.innerHTML = ""
        
                            authorImg.innerHTML += `<div id="image-overlay" class="shadow image-wrap overlay card-img h-100 fade show rounded-0" style="background-image: url("https://www.artic.edu/iiif/2/40b5d8dc-45a8-6629-5ace-32c86c0905e1/full/843,/0/default.jpg");width:`+w*2+`px;height:`+h*2+`px;" alt="` + imgCopyFormat + `"></div>`
        
                            authorImg.innerHTML += `<div id="author-img" class="shadow image-wrap card-img h-100 fade show rounded-0" style="background-image: url("https://www.artic.edu/iiif/2/40b5d8dc-45a8-6629-5ace-32c86c0905e1/full/843,/0/default.jpg");width:`+w*2+`px;height:`+h*2+`px;" alt="` + imgCopyFormat + `"></div>`
        
                        }
        
                        imgCopy.innerHTML = `
                        <div class="vstack gap-1 mt-2 ps-0 fade show" id="artwork-data">
                        <span class="fade show lh-sm text-left p-1 px-3 pb-1 pt-3 text-break rounded-0" style="">
                            <p class="p-0 text-break text-dark fs-6 fade show">
                                Artwork Title: <a href="` + UrlFormat + `" target="_blank" title="Artwork Title"><span class="texty-overflow">` + imgCopyFormat + `</span></a> | 
                                Artist: <span class="texty-overflow">` + artistNameIf(artistName) + `</span> | 
                                License: <a href="` + imgCopyLicenseLink + `" target="_blank">Creative Commons` + `</a> | 
                                Terms and Conditions: <a href="` + imgCopyTandCLink + `" target="_blank">artic.edu` + `</a>
                            </p>
                        </span>
                    </div>     
                        `;
                
                        });
        
                    })
                })
                .catch(error => {
                    console.log(error.message);
                });


            }
        }, 100);   

        
    }




    function getQuote() {

        let btn = document.getElementById('new-quote');
        let tweetbtn = document.getElementById('tweet-quote');
        let quoteText = document.getElementById('text');
        let allquote_text = document.getElementById('quote-text')
        let authorName = document.getElementById('author');
        let quotemark = document.getElementById('quotemark');
        let imgLoading = document.getElementById('loading-dots');
        let authorImg = document.getElementById('auth-image');
        let textArea = document.getElementById('quote-text-area');

        let imgCopy = document.getElementById('image-copyright');
        let quoteBtns = document.getElementById('buttons');
      
        $('button[id^="new-quote"]').on("click", function() {

            $('.inner-card').css("transition", 'visibility 0s 2s, opacity 2s linear');
            $('.inner-card').css("moz-transition", 'visibility 0s 2s, opacity 2s linear');

// textArea.classList.remove('fade');
// textArea.classList.remove('show');            
// quoteText.classList.remove('fade');
// quoteText.classList.remove('show');           
// authorName.classList.remove('fade');
// authorName.classList.remove('show');  
// quotemark.classList.remove('fade');
// quotemark.classList.remove('show');
// // imgCopy.classList.remove('fade');
// // imgCopy.classList.remove('show');
// quoteBtns.classList.remove('fade');
// quoteBtns.classList.remove('show');

            const loading_dots = `
            <div class="container-fluid p-0 m-0">
                <div class="row p-0 m-0">
                    <div class="progress p-0 rounded-0" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar rounded-0" style="width: 0%"></div>
                    </div>
                </div>
            </div>
            `;

            var count = 60;
            var counting = setInterval(function(){
                if(count < 101) {
                    $('.inner-card').css("display", 'none');
                    $('.progress-bar').css("width", count + '%');
                    count++
                    $('#author-img').css(
                        {
                            "transition": 'visibility 0s 2s, opacity 2s linear',
                            "visibility": "hidden",
                            "opacity": "0"
                        }
                    );
                    $('#image-overlay').css(
                        {
                            "moz-transition": 'visibility 0s 2s, opacity 2s linear',
                            "visibility": "hidden",
                            "opacity": "0"
                        }
                    );
                } else {
                    clearInterval(counting)
                    $('.inner-card').css(
                        {
                            "display": 'inherit',
                            "animation": 'fadeIn 5s'
                        }
                    );
                    $('.fade').css(
                        {
                            "animation": 'fadeIn 5s'
                        }
                    );



imgLoading.innerHTML = loading_dots;
            quoteText.innerHTML = ""
            authorName.innerHTML = ""
            authorImg.src = ""

            // function fadeInItems() {
            //     textArea.classList.add('fade');
            //     textArea.classList.add('show');
            //     quoteText.classList.add('fade');
            //     quoteText.classList.add('show');
            //     authorName.classList.add('fade');
            //     authorName.classList.add('show');
            //     quotemark.classList.add('fade');
            //     quotemark.classList.add('show');
            //     imgCopy.classList.add('fade');
            //     imgCopy.classList.add('show');
            //     quoteBtns.classList.add('fade');
            //     quoteBtns.classList.add('show');
            // }
              
            // setTimeout(fadeInItems, 1000);

            const objArray = _.shuffle(Object.values(data));
    
            let randomItem = objArray[0];    

            let div = document.querySelector("blockquote");
            let divFooter = document.getElementById("author");
    
            const insertAuthor = randomItem.author; 
            const insertQuote = randomItem.quote;
            quoteText.innerHTML = insertQuote;
            quoteText.style.color = _.sample(colors)
            authorName.innerHTML = insertAuthor;
            authorName.style.color = _.sample(colors)

            quotemark.innerHTML = '&ldquo;'

            const twitterUrl = "https://twitter.com/intent/tweet?text=";
            const quoteStr = _.toString(insertQuote);
            const authorStr = _.toString(insertAuthor);
            const urlString = twitterUrl + "%22" + quoteStr + "%22" + "%20%2D%20" + _.toString(authorStr);
            tweetbtn.href = urlString;
            
            let quoteEdit = quoteStr.replaceAll(" ", "+");
            let exchangeSpacetoUnderscore = insertAuthor.replaceAll(" ", "+");
            let urlFormatted = "https://api.artic.edu/api/v1/artworks/search?q=" + exchangeSpacetoUnderscore + "+" + quoteEdit
            
            fetch(
                urlFormatted,
                {
                method: "GET"
                }
            )
            .then(blob => blob.json())
            .then(dataset => {
    
                const datasetNumChoice = randomiseChoice
                const string_data = JSON.stringify(dataset)
                console.log("dataset url " + urlFormatted)
                console.log("dataset " + string_data )
                const getTheImageAPi = "https://api.artic.edu/api/v1/artworks/" + dataset.data[datasetNumChoice].id + "?fields=id,title,image_id,artist_title,info"
                            
                fetch(
                    getTheImageAPi,
                    {
                        method: "GET"
                    }
                )
                .then(blob => blob.json())
                .then(imgdata => {
    
                    const image_url = imgdata.config.iiif_url
                    const image_data_id = imgdata.data.image_id
                    const url_append_data = '/full/843,/0/default.jpg'
                    const url_format = image_url + "/" + image_data_id + url_append_data
                    const UrlsFormat = url_format.replaceAll("\'", "");
                    const UrlFormat = UrlsFormat.replaceAll('"', "");
                    const imgAltText = dataset.data[datasetNumChoice].thumbnail.alt_text;
                    console.log("dataset " + imgAltText )
                    console.log("dataset " + UrlFormat )
                    console.log("dataset " + getTheImageAPi )
                    console.log("dataset " + JSON.stringify(imgdata) )

                    const artistName = imgdata.data.artist_title
                    console.log(artistName);

                    console.log(randomItem);
                    console.log("search author " + urlFormatted)
                        
                    function artistNameIf(artist) {
                        if (artist !== 'null') { 
                            return artistName 
                        } else {
                            return _.capitalize(`Unknown Artist`)
                        }
                    }

                    const imgCopyTitle = JSON.stringify(imgdata.data.title);
                    const imgCopyFormat = imgCopyTitle.replaceAll('"', "");
                    const imgCopyLicense = JSON.stringify(imgdata.info.license_text);
                    const imgCopyLicenseFormat = imgCopyLicense.replaceAll('"', "");
                    const imgCopyLicenseLink = imgdata.info.license_links[0]
                    const imgCopyTandCLink = imgdata.info.license_links[1]
                    console.log(imgCopyLicenseLink);

                    const obj = {};
                
                const getMeta = async (url) => {
                    const img = new Image();
                    img.src = url;
                    await img.decode();  
                    return img
                };                
                getMeta(UrlFormat).then(img => {
                    obj.height = img.naturalHeight;
                    obj.width = img.naturalWidth;
                    console.log(JSON.stringify(obj));
                    console.log(Object.freeze(obj));

                    if (insertAuthor !== authorName) {

                        authorImg.innerHTML = ""
                        
                        authorImg.innerHTML += `<div id="image-overlay" class="shadow image-wrap overlay show" style="background-image: url(` + UrlFormat + `);width:`+w*2+`px;height:`+h*2+`px;" alt="` + imgAltText + `"></div>`

                        authorImg.innerHTML += `<div id="author-img" class="shadow image-wrap show" style="background-image: url(` + UrlFormat + `);width:`+w*2+`px;height:`+h*2+`px;" alt="` + imgAltText + `"></div>`
                    } 
                    
                    if (UrlFormat == "https://www.artic.edu/iiif/2/null/full/843,/0/default.jpg" || !imgAltText){
                        
                        authorImg.innerHTML += `<div id="image-overlay" class="shadow image-wrap overlay card-img h-100 show rounded-0" style="background-image: url("https://www.artic.edu/iiif/2/40b5d8dc-45a8-6629-5ace-32c86c0905e1/full/843,/0/default.jpg");width:`+w*2+`px;height:`+h*2+`px;" alt="` + imgCopyFormat + `"></div>`
                        authorImg.innerHTML += `<div id="author-img" class="shadow image-wrap card-img h-100 show rounded-0" style="background-image: url("https://www.artic.edu/iiif/2/40b5d8dc-45a8-6629-5ace-32c86c0905e1/full/843,/0/default.jpg");width:`+w*2+`px;height:`+h*2+`px;" alt="` + imgCopyFormat + `"></div>`
                        
                    }

                    

                    imgCopy.innerHTML = `
                    <div class="vstack gap-1 mt-2 ps-0 fade show" id="artwork-data">
                        <span class="fade show lh-sm text-left p-1 px-3 pb-1 pt-3 text-break rounded-0" style="">
                            <p class="p-0 text-break text-dark fs-6 fade show">
                                Artwork Title: <a href="` + UrlFormat + `" target="_blank" title="Artwork Title"><span class="texty-overflow">` + imgCopyFormat + `</span></a> | 
                                Artist: <span class="texty-overflow">` + artistNameIf(artistName) + `</span> | 
                                License: <a href="` + imgCopyLicenseLink + `" target="_blank">Creative Commons` + `</a> | 
                                Terms and Conditions: <a href="` + imgCopyTandCLink + `" target="_blank">artic.edu` + `</a>
                            </p>
                        </span>
                    </div>     
                    `;

                });


                })
            })
            .catch(error => {
                console.log(error.message);
            });



                    
                }
            }, 100);  

            



            
            

        });

        

    }
  





    function tick() {
        const element = (
            <div className="p-0 m-0 shadow border border-muted">
                <div id="quote-box" className="card-img justify-content-center fade show rounded-0" style={{overflow: 'hidden'}}>

                    <div className="w-100 h-100 p-0 m-0">
                        <span id="loading-dots">
                            <div className="progress rounded-0" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar rounded-0" style={{width: '0%'}}></div>
                            </div>
                        </span>
                    </div>

                    <div className="card-img shadow-lg rounded-0 vh-50 fade show">
                        <figure className="figure m-0 p-0 w-100 ratio ratio-1x1">
                            <div id="auth-image" className="show"></div>
                        </figure>
                        <div className="inner-card card-img-overlay rounded-0" id="quote-text-area">
                        </div>
                    </div>

                </div>
                
                <div id="quotemarks" className="pt-2 inner-card" style={{
                    display: "block",
                    zIndex: "1050", 
                    position: "relative", 
                    animation: "5s ease 0s 1 normal none running fadeIn" 
                }}>
                    <div className="container">
                        <div className="d-flex align-items-start flex-column mb-3">
                            <div className="row">
                                <div id="quotemark" className="vw-quote col-2"></div>
                                <div id="text" className="vw-font lh-sm col-10"></div>
                                <div id="author" className="text-end vw-author col-12 pb-4"></div>
                            </div>
                            <div className="row">
                                <div className="figure-caption text-start mb-0 pb-0 m-0" id="image-copyright"></div>

                                <div className="pt-4" id="buttons" style={{
                    display: "block",
                    zIndex: "1050", 
                    position: "relative", 
                    animation: "5s ease 0s 1 normal none running fadeIn",
                    marginLeft: "0px"
                }}>
                    <div className="p-0 m-0 ms-1 px-2" style={{display: "inline"}}>
                        <a id='tweet-quote' className="btn btn-secondary btn-lg border-0 " href="#" role="button" target="_blank" style={{
                                borderTopLeftRadius: "0rem!important",
                                borderTopRightRadius: "0rem!important",
                                borderBottomLeftRadius: "0.25rem!important",
                                borderBottomRightRadius: "0rem!important"
                            }}>
                            <i className="fa-brands fa-x-twitter fa-xl"></i>
                        </a>
                    </div>
                    <div className="p-0 m-0" style={{display: "inline"}}>
                        <button id='new-quote' type="button" className="btn btn-secondary btn-lg border-0">
                        <i className="fa-sharp fa-solid fa-rotate-right fa-xl"></i>
                        </button>
                    </div>
                </div>

                            </div>
                        </div>
                    </div>
                </div>

                            
                
                
            </div>

        );
        ReactDOM.render(
            element,
            document.getElementById('quote_component')
        );

        
    }

    tick();
    getQuote();
    loadQuote();  

})
.catch(error => console.error(error))
});



async function btnClick() {
    var input = await document.getElementsByTagName("new-quote");

    input.addEventListener("click", function(event) {
      event.preventDefault();
    
      // Number 13 is the "Enter" key on the keyboard
    
      if (event.key === 13) {
        event.preventDefault();
                document.getElementById("new-quote").click();
      }
    });
}


var count = 10;
var counting = setInterval(function(){
    if(count < 101) {
        $('.inner-card').css("display", 'none');
        $('.progress-bar').css("width", count + '%');
        count++
    } else {
        clearInterval(counting)
        $('.inner-card').css("display", 'inherit');
        $("#auth-image").css({
            animation: "15s ease 0s 1 normal none running fadeIn"
        });
    }
})
  




