let myPromise = new Promise(function (resolve, reject) {
  if (success) {
    resolve(); // when successful
  } else {
    reject(); // when error
  }
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function (value) {
    /* code if successful */
  },
  function (error) {
    /* code if some error */
  }
);
