function random_item(items){
    return items.sort(() => Math.random() - 0.5).slice(0, 5); 
}
$(document).ready(() => {
let quoteApi = fetch('https://gist.githubusercontent.com/awran5/355643af99164a61ae0f95c84206d151/raw/c62636e8eef7e73540fa04b67f753ca9b95ee21e/quotes-api.js')
.then(response => response.json())
.then(data => {
    console.log(data) // Prints result from `response.json()` in getRequest
    const objectArray = Object.values(data);

    let randomItems = random_item(objectArray);
    console.log(randomItems);
  
    async function loadQuote() {
        
        var fade_state = true;
        let div = document.querySelector("blockquote");
        let divFooter = await document.getElementById("author");
        div.style.animation = "fade-in 2s forwards";
        divFooter.style.animation = await "fade-in 2s forwards";
        fade_state = true;
    
        let randomItem = random_item(randomItems);
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


  
    function getQuote() {
    
        let randomItem = random_item(objectArray);
        let randomResult = randomItem;

        let btn = document.getElementById('new-quote');
        let tweetbtn = document.getElementById('tweet-quote');
        let quoteText = document.getElementById('text');
        let authorName = document.getElementById('author');

        $('#new-quote').on("click", function() {

            var fadeState = true;
            let div = document.querySelector("blockquote");
            let divFooter = document.getElementById("author");
            div.style.animation = "fade-out 2s forwards";
            divFooter.style.animation = "fade-out 2s forwards";

            const fadeTimeout = setTimeout(fading, 0);

            function fading() {
                div.style.animation = "fade-in 2s forwards";
                divFooter.style.animation = "fade-in 2s forwards";
                fadeState = true;
            }
            
            function FadeStopFunction() {
                clearTimeout(fadeTimeout);
            }

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

        });

    }
  



    function tick() {
        const element = (

            <div id="quote-box" className="fade show">
            
                <blockquote className="blockquote d-block" id="quote-text">
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
            document.getElementById('quote_component')
        );
    }

    tick();
    getQuote();
    loadQuote();  
})
.catch(error => console.error(error))
});



  




