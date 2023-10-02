function random_item(items){
    ~~(Math.random()*10) + 1
    return items.sort(() => Math.random() - 0.172).slice(0, 172); 
}


const colors = [`WhiteSmoke`];

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
            <div class="spinner-grow text-success spinner-grow-sm" style={{width: '2rem', height: '2rem'}} role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-danger spinner-grow-sm" style={{width: '2rem', height: '2rem'}} role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-warning spinner-grow-sm" style={{width: '2rem', height: '2rem'}} role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        `
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

        quotemark.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" stroke="black" strokeWidth="`+strokeWidth+`" fill="`+_.sample(colors)+`" class="bi bi-quote" viewBox="0 0 16 16">
        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
        </svg>`

        let twitterUrl = "https://twitter.com/intent/tweet?text=";
        let quoteStr = insertQuote.toString();
        let authorStr = insertAuthor.toString();
        let urlString = twitterUrl + "%22" + quoteStr + "%22" + "%20%2D%20" + authorStr.toString();
        tweetbtn.href = urlString;

    
        let quoteEdit = quoteStr.replaceAll(" ", "+");
        let exchangeSpacetoUnderscore = insertAuthor.replaceAll(" ", "+");
        let urlFormatted = "https://api.artic.edu/api/v1/artworks/search?q=" + exchangeSpacetoUnderscore + "+" + quoteEdit
        console.log("search author " + urlFormatted)

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

                    authorImg.innerHTML += `<div class="overlay fade show" style="background-image: url(` + UrlFormat + `);width:`+w+`px;height:`+w+`px;background-size:100% 100%;" alt="` + imgAltText + `"></div>`
                        
                    authorImg.innerHTML += `<div id="author-img" class="fade show" style="background-image: url(` + UrlFormat + `);width:`+w+`px;height:`+w+`px;background-size:100% 100%;" alt="` + imgAltText + `"></div>`
                        
                } 
                if (authorImg.src == "https://www.artic.edu/iiif/2/null/full/843,/0/default.jpg"){

                    authorImg.innerHTML = ""

                    authorImg.innerHTML += `<div class="overlay card-img h-100 fade show" style="background-image: url("https://www.artic.edu/iiif/2/40b5d8dc-45a8-6629-5ace-32c86c0905e1/full/843,/0/default.jpg");width:`+w+`px;height:`+h+`px;background-size:100% 100%;" alt="` + imgCopyFormat + `"></div>`

                    authorImg.innerHTML += `<div id="author-img" class="card-img h-100 fade show" style="background-image: url("https://www.artic.edu/iiif/2/40b5d8dc-45a8-6629-5ace-32c86c0905e1/full/843,/0/default.jpg");width:`+w+`px;height:`+h+`px;background-size:100% 100%;" alt="` + imgCopyFormat + `"></div>`

                }

                imgCopy.innerHTML = `
                <div class="vstack gap-1 mt-2 ps-0" id="artwork-data">
                    <span class="fade show lh-sm text-light text-left bg-`+_.sample(bgcolors)+` p-1 px-3 pb-1 pt-3 text-break rounded-0" style="">

                        <p class="p-0 text-break fs-6">
                            Artwork Title: <a class="text-light" href="` + UrlFormat + `" target="_blank" title="Artwork Title">` + imgCopyFormat + `</a><br>
                            Artist: <span>` + artistNameIf(artistName) + `</span><br>
                            License: <a class="text-light" href="` + imgCopyLicenseLink + `" target="_blank">Creative Commons` + `</a><br>
                            Terms and Conditions: <a class="text-light" href="` + imgCopyTandCLink + `" target="_blank">artic.edu` + `</a>
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

textArea.classList.remove('fade');
textArea.classList.remove('show');            
quoteText.classList.remove('fade');
quoteText.classList.remove('show');           
authorName.classList.remove('fade');
authorName.classList.remove('show');  
quotemark.classList.remove('fade');
quotemark.classList.remove('show');
imgCopy.classList.remove('fade');
imgCopy.classList.remove('show');
quoteBtns.classList.remove('fade');
quoteBtns.classList.remove('show');

            const loading_dots = `
                <div class="spinner-grow text-success spinner-grow-sm" style={{width: '2rem', height: '2rem'}} role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-danger spinner-grow-sm" style={{width: '2rem', height: '2rem'}} role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-warning spinner-grow-sm" style={{width: '2rem', height: '2rem'}} role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            `
            imgLoading.innerHTML = loading_dots;
            quoteText.innerHTML = ""
            authorName.innerHTML = ""
            authorImg.src = ""

            function fadeInItems() {
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
            }
              
            setTimeout(fadeInItems, 1000);

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

            quotemark.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" stroke="black" strokeWidth="`+strokeWidth+`" fill="`+_.sample(colors)+`" className="bi bi-quote" viewBox="0 0 16 16">
                                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
                                </svg>`

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
                        
                        authorImg.innerHTML += `<div class="overlay fade show" style="background-image: url(` + UrlFormat + `);width:`+w+`px;height:`+w+`px;background-size:100% 100%;" alt="` + imgAltText + `"></div>`

                        authorImg.innerHTML += `<div id="author-img" class="fade show" style="background-image: url(` + UrlFormat + `);width:`+w+`px;height:`+w+`px;background-size:100% 100%;" alt="` + imgAltText + `"></div>`
                    } 
                    
                    if (UrlFormat == "https://www.artic.edu/iiif/2/null/full/843,/0/default.jpg" || !imgAltText){
                        
                        authorImg.innerHTML += `<div class="overlay card-img h-100 fade show" style="background-image: url("https://www.artic.edu/iiif/2/40b5d8dc-45a8-6629-5ace-32c86c0905e1/full/843,/0/default.jpg");width:`+w+`px;height:`+h+`px;background-size:100% 100%;" alt="` + imgCopyFormat + `"></div>`
                        authorImg.innerHTML += `<div id="author-img" class="card-img h-100 fade show" style="background-image: url("https://www.artic.edu/iiif/2/40b5d8dc-45a8-6629-5ace-32c86c0905e1/full/843,/0/default.jpg");width:`+w+`px;height:`+h+`px;background-size:100% 100%;" alt="` + imgCopyFormat + `"></div>`
                        
                    }

                    

                    imgCopy.innerHTML = `
                    <div class="vstack gap-1 mt-2 ps-0 fade show" id="artwork-data">
                        <span class="fade show lh-sm text-light text-left bg-`+_.sample(bgcolors)+` p-1 px-3 pb-1 pt-3 text-break rounded-0" style="">
                            <p class="p-0 text-break fs-6 fade show">
                                Artwork Title: <a class="text-light" href="` + UrlFormat + `" target="_blank" title="Artwork Title">` + imgCopyFormat + `</a><br>
                                <span>Artist: ` + artistNameIf(artistName) + `</span><br>
                                License: <a class="text-light" href="` + imgCopyLicenseLink + `" target="_blank">Creative Commons` + `</a><br>
                                Terms and Conditions: <a class="text-light" href="` + imgCopyTandCLink + `" target="_blank">artic.edu` + `</a>
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



            
            

        });

        

    }
  





    function tick() {
        const element = (
            
            <div id="quote-box" className="card-img justify-content-center fade show" style={{overflow: 'hidden'}}>
                <div className="card-img shadow-lg rounded-0">

                    <figure className="figure m-0 p-0 w-100 ratio ratio-1x1">
                        <div className="d-flex justify-content-end">
                            <span className="align-items-start" id="loading-dots"></span>
                        </div>
                        <div id="auth-image" class="fade show">

                        </div>
                    </figure>

                    <div className="card-img-overlay" id="quote-text-area">
                        <h5 className="card-title pt-2">
                            <blockquote className="blockquote d-block ps-md-5 px-md-5 pt-md-2 pb-md-2" id="quote-text">
                                <p id="quotemarks" className="fs-1 lh-sm fw-semibold">
                                    <span id="quotemark"></span>
                                    <span id="text"></span>
                                </p>
                            </blockquote>
                        </h5>
                        <figcaption className="blockquote-footer d-block ps-md-5 px-md-5">
                            <footer className="text-end fw-bold fs-3" id="author"></footer>
                        </figcaption>
                        <div className="row p-0 m-0 px-md-5 ps-md-5" id="buttons">
                            <div className="d-flex p-0 m-0">
                                <div className="row align-items-start">
                                    <div className="col-auto">
                                        <a id='tweet-quote' className="btn btn-dark btn-lg rounded-1 text-start border-0 me-auto" href="#" role="button" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" stroke="black" strokeWidth={{strokeWidth}} className="bi bi-twitter" viewBox="0 0 16 16">
                                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="col-auto">
                                        <button id='new-quote' type="button" className="btn btn-dark btn-lg border-0 rounded-0 text-end">
                                            New Quote 
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" stroke="black" strokeWidth={{strokeWidth}} class="ps-2 bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                                                <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <figcaption className="blockquote-footer d-block ps-md-5 px-md-5 row">
                            <figcaption className="figure-caption text-start text-light mb-0 pb-0 m-0" id="image-copyright"></figcaption>
                        </figcaption>
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



  




