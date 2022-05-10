// -------------Understanding JavaScript Promises 1------------------------------

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { username: "john", email: "john@test.com" },
        { username: "jane", email: "jane@test.com" },
      ]);
    }, 1000);
  });
}

function onFulfilled(users) {
  console.log(users);
}

const promise = getUsers();
console.log("promise");
console.log(promise);
promise.then(onFulfilled);

// o tambien se puede utilizando arrow function

// promise.then((users) => {
//   console.log(users);
// });
