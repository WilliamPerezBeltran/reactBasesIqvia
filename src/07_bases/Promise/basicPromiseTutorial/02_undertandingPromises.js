// -----------------------Understanding JavaScript Promises------------------------------

const promise = new Promise((resolve, reject) => {
  // contain an operation
  // ...

  // return the state
  if (success) {
    resolve();
  } else {
    reject();
  }
});
