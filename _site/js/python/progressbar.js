


const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://pyscript.net/latest/pyscript.js', true);
xhr.responseType = 'text';

xhr.onprogress = function(event) {


};


xhr.onload = function() {
    if (xhr.status === 200) {
        // Script loaded successfully, execute it
        const script = document.createElement('script');
        script.textContent = xhr.responseText;
        document.head.appendChild(script);
        

    } else {
        // Handle error loading script
        console.error('Error loading script:', xhr.status);
    }
};

xhr.send();        

pyscriptLoaded = false

// Store the original console.log function
const originalConsoleLog = console.info;

// Override the console.log function with a custom one
console.info = function (message) {
  originalConsoleLog.apply(console, arguments); // Call the original console.log function

  if (message.includes('PyScript page fully initialized')) {
    pyscriptLoaded = true;
    console.log = originalConsoleLog;


  }
};

