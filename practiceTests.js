console.log("Starting tests...");

function add(a ,b){
  return a + b;
}

expect(add(3,5)).toBe(8);
expect(add(-3,5)).toBeA('number');

function capitalizeWord(word) {
  if (!word || typeof word !== 'string') {
    word = '';
  }

  return word.charAt(0).toUpperCase() + word.slice(1);
}

// given dick expect to be Dick
expect(capitalizeWord('dick')).toBe('Dick');
// given dick expect to be a string
expect(capitalizeWord('dick')).toBeA('string');
// given nothing expect ''
expect(capitalizeWord()).toBe('');

console.log('All tests have passed!');
