
fetch('https://www.freecodecamp.dev/curriculum-data/v1/available-superblocks.json')
.then((response) => response.html())
.then((data) => console.log(data));

