
fetch('https://www.freecodecamp.dev/curriculum-data/v1/available-superblocks.json')
.then((response) => response.json())
.then((data) => console.log(data));
