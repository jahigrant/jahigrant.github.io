    // const apiKey = '6e7useryu5rr66u856uiedr6856u5ui76rit687i796rt';
    // const endpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions'; // Endpoint for GPT-3.5
    
    // const prompt = 'Your conversation history and question here...'; // Provide the conversation history and your question
    
    // fetch(endpoint, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${apiKey}`
    //   },
    //   body: JSON.stringify({
    //     prompt: prompt,
    //     max_tokens: 150 // You can adjust the `max_tokens` parameter based on the length of the response you want
    //   })
    // })
    // .then(response => response.json())
    // .then(data => {
    //   const answer = data.choices[0].text.trim();
    //   console.log('ChatGPT response:', answer);
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });

const dbbotResponses = {
    "initial": ["Hi User, my name is Dogsbody,<br> How may I assist you today?"],
    "greetings": ["Yo!", "Wha gwan?", "Hey!", "Word up?", "Guten tag", "Salaam", "Hola", "Ciao"],
    "questions": {
        "name": ["My name is Dogsbody", "I'm Dogsbody, nice to meet you!"],
        "age": ["I don't have an age", "Age is just a number for bots!"],
        "default": ["Don't be silly! What is that ish?", "Yeah I don't understand that one"],
        "france": ["France is a country, situated withinin Europe, it\'s capital is Paris"]
    },
    "farewell": ["Goodbye!", "See you later!", "Farewell!", "Bye!", "Ciao!"]
};

function getResponse(input) {

    const lowerCaseInput = input.toLowerCase();

    if (lowerCaseInput.includes("hello") || lowerCaseInput.includes("hi")) {    
        return getRandomResponse(dbbotResponses.greetings);
    } else if (lowerCaseInput.includes("name") || lowerCaseInput.includes("call")) {
        return getRandomResponse(dbbotResponses.questions.name);
    } else if (lowerCaseInput.includes("france")) {
        return getRandomResponse(dbbotResponses.questions.france);
    } else if (lowerCaseInput.includes("age")  || lowerCaseInput.includes("old")) {
        return getRandomResponse(dbbotResponses.questions.age);
    } else if (lowerCaseInput.includes("bye") || lowerCaseInput.includes("ciao")) {
        return getRandomResponse(dbbotResponses.farewell);
    } else {
        return getRandomResponse(dbbotResponses.questions.default);
    }
}

function getRandomResponse(responses) {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

function chatbot() {
    const element = (
        <div>
            <div id="chat" className="card p-3 rounded-bottom-0" style={{borderBottom: "0px", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px"}}></div>
            <div id="chat-container" className="card p-3 rounded-top-0" style={{borderTop: "0px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px"}}>
                <div className="input-group mb-0 pt-0 mt-0">
                    <input 
                        type="text" 
                        className="form-control form-control-lg" 
                        name="question" 
                        id="user-input" 
                            placeholder="Type question &#x23CE;" 
                        aria-label="Ask question" 
                        aria-describedby="question-input"
                    />
                    <button type="submit" id="submit-button" className="btn btn-secondary" onClick={getVal} title="Submit a question">
                        <i className="fa-sharp fa-solid fa-circle-question fa-xl"></i>
                    </button>
                    <button type="submit" id="random-button" className="btn btn-secondary" onClick={random_facts}title="Random question">
                        <i className="fa-sharp fa-solid fa-shuffle fa-xl"></i>
                    </button>
                </div>
            </div>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('chatbot_component')
    );
}
chatbot();

function chatbot_welcome() {
    const user_chat = document.querySelector('#chat');
    const d = new Date();
    let hour = d.getHours();
    let minutes = d.getMinutes()
    user_chat.innerHTML += `
        <div id="waiting_msg" class="waiting_msg p-3 px-4 mt-2">
            <div class="dot-flashing"></div>
        </div>
    `;
    const resTimeout = setTimeout(dbResponse, 5000);

    function dbResponse() {

        let res_d = new Date();
        let hour = res_d.getHours();
        let minutes = res_d.getMinutes();

        const element = document.getElementById("waiting_msg");
        element.remove();
        user_chat.innerHTML += `
            <div class="bot_msg rounded-4 bg-success text-light p-3 px-4 mt-2" style="border-bottom-left-radius: 0!important;border-radius: 30px;">
                <div class="container p-0 m-0">
                    <p class="lh-sm fw-lighter fs-6 p-0 m-0 text-lowercase">`+res_d.toLocaleTimeString('en-GB', { hour12: true })+`</p>
                    <p class="text-break lh-sm fw-lighter mb-0 fs-5">
                        `+ _.upperFirst(dbbotResponses.initial) +`
                    </p>
                </div>
            </div>
        `;
    }
}
chatbot_welcome();

function escapeHtmlChars(unsafe) {
    return unsafe
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, "\"")
        .replace(/&#039;/g, "\'");
}

function random_facts() {

        let quoteApi = fetch('https://opentdb.com/api.php?amount=1')
        .then(response => response.json())
        .then(data => {
            const replace_quotes_in_question = data.results[0].question.replace(/&quot;/gim, '"');
            const replace_quotes_in_answer = data.results[0].correct_answer.replace(/&quot;/gim, '"');

            const element = document.getElementById("waiting_msg");

            let res_d = new Date();
            let hour = res_d.getHours();
            let minutes = res_d.getMinutes();

const user_chat = document.querySelector('#chat');

user_chat.innerHTML += `
<div class="user_msg rounded-4 bg-primary text-light p-3 px-4 mt-2" style="border-bottom-right-radius: 0!important;border-radius: 30px;">
<div class="container p-0 m-0">
    <p class="lh-sm fw-lighter fs-6 p-0 m-0 text-lowercase">`+res_d.toLocaleTimeString('en-GB', { hour12: true })+`</p>
    <p class="text-break lh-sm fw-lighter mb-0 fs-5">
        `+ escapeHtmlChars(data.results[0].question) +`
    </p>
</div>
</div>

<div id="waiting_msg" class="waiting_msg p-3 px-4 mt-2">
                    <div class="dot-flashing"></div>
                </div>
`;



            const resTimeout = setTimeout(dbResponse, 2000);
            function dbResponse() {
                const element = document.getElementById("waiting_msg");
                  element.remove();
            user_chat.innerHTML += `
                <div class="bot_msg rounded-4 bg-success text-light p-3 px-4 mt-2" style="border-bottom-left-radius: 0!important;border-radius: 30px;">
                    <div class="container p-0 m-0">
                        <p class="lh-sm fw-lighter fs-6 p-0 m-0 text-lowercase">`+res_d.toLocaleTimeString('en-GB', { hour12: true })+`</p>
                        <p class="text-break lh-sm fw-lighter mb-0 fs-5">
                            `+ escapeHtmlChars(data.results[0].correct_answer) +`
                        </p>
                    </div>
                </div>
            `;          
 
                
            }
            

            console.log("Full Object: ", data.results);
            console.log("Question: ", escapeHtmlChars(data.results[0].question));
            console.log("Answer: ", escapeHtmlChars(data.results[0].correct_answer));


        });
   
}

function getVal() {

    const user_chat = document.querySelector('#chat');
    const val = document.querySelector('#user-input').value;
    const submit_btn = document.querySelector('#submit-button');

    $(submit_btn).attr('disabled', true);
    $('input[id="user-input"]').on('keyup', function () {
        var text_value = $('input[name="question"]').val();
        if (text_value != '') {
            $('button[id="submit-button"]').attr('disabled', false);
        } else {
            $('button[id="submit-button"]').attr('disabled', true);
        }
    });

    if (val == '') {

    } else {


        console.log(val);

        const userInput = val;
        const botResponse = getResponse(userInput);

        const d = new Date();
        let hour = d.getHours();
        let minutes = d.getMinutes();

        console.log("Bot:", botResponse);

        user_chat.innerHTML += `
            <div class="user_msg rounded-4 bg-primary text-light p-3 px-4 mt-2" style="border-bottom-right-radius: 0!important;border-radius: 30px;">
                <div class="container p-0 m-0">
                    <p class="lh-sm fw-lighter fs-6 p-0 m-0 text-lowercase">`+d.toLocaleTimeString('en-GB', { hour12: true })+`</p>
                    <p class="text-break lh-sm fw-lighter mb-0 fs-5">
                        `+ _.upperFirst(val) +`
                    </p>
                </div>
            </div>

            <div id="waiting_msg" class="waiting_msg p-3 px-4 mt-2">
                <div class="dot-flashing"></div>
            </div>
        `;

        const resTimeout = setTimeout(dbResponse, 2000);
        function dbResponse() {

            let res_d = new Date();
            let hour = res_d.getHours();
            let minutes = res_d.getMinutes();

            const element = document.getElementById("waiting_msg");
            element.remove();
            user_chat.innerHTML += `
                <div class="bot_msg rounded-4 bg-success text-light p-3 px-4 mt-2" style="border-bottom-left-radius: 0!important;border-radius: 30px;">
                    <div class="container p-0 m-0">
                        <p class="lh-sm fw-lighter fs-6 p-0 m-0 text-lowercase">`+res_d.toLocaleTimeString('en-GB', { hour12: true })+`</p>
                        <p class="text-break lh-sm fw-lighter mb-0 fs-5">
                            `+ _.upperFirst(botResponse) +`
                        </p>
                    </div>
                </div>
            `;
        }

        document.querySelector("#user-input").value = '';
    }

}

var input = document.getElementById("user-input");//get textarea tag
//NOW replace this with: var input = document.getElementById("myTextarea")

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
// If the user presses the "Enter" key on the keyboard
if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("submit-button").click();
}
}); 



