// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://www.freecodecamp.dev/curriculum-data/v1/available-superblocks.json', true)

request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        data.forEach(superblocks => {
            console.log(superblocks.title)
        })
    } else {
        console.log('error')
    }
}

// Send request
request.send()
