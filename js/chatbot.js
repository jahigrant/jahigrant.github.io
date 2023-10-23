
  
const dbbotResponses = {
    "greetings": ["Yo!", "Wha gwan?", "Hey!", "Word up?", "Guten tag", "Salaam", "Hola", "Ciao"],
    "questions": {
        "name": ["My name is Dogsbody", "I'm Dogsbody, nice to meet you!"],
        "age": ["I don't have an age", "Age is just a number for bots!"],
        "default": ["Don't be silly! What is that ish?", "Yeah I don't understand that one"]
    },
    "farewell": ["Goodbye!", "See you later!", "Farewell!", "Bye!", "Ciao!"]
};

function getResponse(input) {
    const lowerCaseInput = input.toLowerCase();

    if (lowerCaseInput.includes("hello") || lowerCaseInput.includes("hi")) {
        return getRandomResponse(dbbotResponses.greetings);
    } else if (lowerCaseInput.includes("name") || lowerCaseInput.includes("call")) {
        return getRandomResponse(dbbotResponses.questions.name);
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

<div id="chatbot_component"></div>

            <div id="chat" className="card bg-dark p-3 rounded-bottom-0" style={{borderBottom: "0px", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px"}}></div>
                        <div id="chat-container" className="card bg-dark p-3 rounded-top-0" style={{borderTop: "0px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px"}}>
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
                                <button type="submit" id="submit-button" className="btn btn-secondary" onClick={getVal}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                                    </svg>
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
        // Example usage

        const userInput = val;
        const botResponse = getResponse(userInput);

        const d = new Date();
        let hour = d.getHours();
        let minutes = d.getMinutes();
        let seconds = d.getSeconds();

        console.log("Bot:", botResponse);

        user_chat.innerHTML += `
            <div class="user_msg rounded-4 bg-primary text-light p-3 px-4 mt-2" style="border-bottom-right-radius: 0!important;border-radius: 30px;">
                <div class="container p-0 m-0">
                    <p class="lh-sm fw-lighter fs-6 p-0 m-0 text-lowercase">`+d.toLocaleTimeString('en-GB', { hour12: true })+`</p>
                    <p class="text-break lh-sm fw-lighter mb-0 fs-4">
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

            const element = document.getElementById("waiting_msg");
            element.remove();
            user_chat.innerHTML += `
                <div class="bot_msg rounded-4 bg-success text-light p-3 px-4 mt-2" style="border-bottom-left-radius: 0!important;border-radius: 30px;">
                    <div class="container p-0 m-0">
                        <p class="lh-sm fw-lighter fs-6 p-0 m-0 text-lowercase">`+res_d.toLocaleTimeString('en-GB', { hour12: true })+`</p>
                        <p class="text-break lh-sm fw-lighter mb-0 fs-4">
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



