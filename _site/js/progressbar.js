const progressBar = document.getElementById('progress-bar');
const progressBarContainer = document.getElementById('progress-bar-container');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://pyscript.net/latest/pyscript.js', true);
xhr.responseType = 'text';

xhr.onprogress = function(event) {
    if (event.lengthComputable) {
        const percentage = (event.loaded / event.total) * 100;
        progressBar.style.width = percentage + '%';

        // Optionally, update a label to show the loading percentage
        // progressBar.innerText = Math.round(percentage) + '%';
    }
};

xhr.onload = function() {
    if (xhr.status === 200) {
        // Script loaded successfully, execute it
        const script = document.createElement('script');
        script.textContent = xhr.responseText;
        document.head.appendChild(script);
        
        // Optionally, hide the progress bar after the script is loaded
        progressBarContainer.style.display = 'none';
    } else {
        // Handle error loading script
        console.error('Error loading script:', xhr.status);
    }
};

xhr.send();