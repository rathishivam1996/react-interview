function randomIntArrayGenerator(numArrays, arraySize) {
  let numGeneratedArr = 0;

  function generateRandomArray() {
    return new Promise((resolve, reject) => {
      // check limit
      if (numGeneratedArr >= numArrays)
        reject(new Error('Limit Reachecd. No more data'));
      // generate
      const randArray = Array.from({ length: arraySize }, () =>
        Math.floor(Math.random() * 100),
      );
      // check error
      if (randArray.length < arraySize)
        reject(new Error('Error generating data'));
      else {
        // resolve success
        numGeneratedArr += 1;
        setTimeout(() => {
          resolve(randArray);
        }, 1000);
      }
    });
  }
  return { generateRandomArray };
}

export default randomIntArrayGenerator;
