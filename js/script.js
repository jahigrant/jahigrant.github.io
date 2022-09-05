
fetch('https://www.freecodecamp.dev/curriculum-data/v1/available-superblocks.json')
.then((response) => response.json())
.then((data) => console.log(data));

const result = await fetch('https://www.freecodecamp.dev/curriculum-data/v1/available-superblocks.json', {
  method: 'GET',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ foo: 'bar' }),
}).then((data) => console.log(data));