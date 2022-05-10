// // ---------------the problem itself-------------
// function getUsers() {
//   let user = [];

//   setTimeout(() => {
//     user = [
//       { username: "john", email: "john@test.com" },
//       { username: "jane", email: "jane@test.com" },
//     ];
//   }, 1000);
//   return user;
// }

// function findUser(username) {
//   const users = getUsers();
//   const user = users.find((user) => user.username === username);
//   return user;
// }

// console.log(findUser("john"));

// // when execute the result es Output:

// // undefined

// ---------------Using callbacks to deal with an asynchronous operation-------------

// function getUsers(callback) {
//   setTimeout(() => {
//     callback([
//       { username: "john", email: "john@test.com" },
//       { username: "jane", email: "jane@test.com" },
//     ]);
//   }, 1000);
// }

// function findUser(username, callback) {
//   getUsers((users) => {
//     const user = users.find((user) => user.username === username);
//     callback(user);
//   });
// }
// findUser("john", console.log);

// -----------------------Understanding JavaScript Promises------------------------------

// const promise = new Promise((resolve, reject) => {
//   // contain an operation
//   // ...

//   // return the state
//   if (success) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// -----------------------Understanding JavaScript Promises 1------------------------------

// function getUsers() {
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve([
//         { username: 'john', email: 'john@test.com' },
//         { username: 'jane', email: 'jane@test.com' },
//       ])
//     },1000)

//   })

// }

// function onFulfilled(users) {
//   console.log(users);
// }

// const promise = getUsers()
// console.log('promise')
// console.log(promise)
// promise.then(onFulfilled)

// -----------------------Understanding JavaScript Promises 1------------------------------

// function getUsers() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         { username: "john", email: "john@test.com" },
//         { username: "jane", email: "jane@test.com" },
//       ]);
//     }, 1000);
//   });
// }

// const promise = getUsers();
// promise.then((users) => {
//   console.log(users);
// });

// -----------------------Understanding JavaScript Promises 2------------------------------
// let success = true;

// function getUsers() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (success) {
//         resolve([
//           { username: "john", email: "john@test.com" },
//           { username: "jane", email: "jane@test.com" },
//         ]);
//       } else {
//         reject("Failed to the user list");
//       }
//     }, 1000);
//   });
// }

// function onFulfilled(users) {
//   console.log(users);
// }
// function onRejected(error) {
//   console.log(error);
// }

// const promise = getUsers();
// promise.then(onFulfilled, onRejected);
// promise.then(
//   (users) => console.log,
//   (error) => console.log
// );
// -----------------------Understanding JavaScript Promises 2------------------------------
let success = true;

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: "john", email: "john@test.com" },
          { username: "jane", email: "jane@test.com" },
        ]);
      } else {
        reject("Failed to the user list");
      }
    }, 1000);
  });
}

function render(text) {
  console.log(text);
}

function onFulfilled(users) {
  console.log(users);
}
function onRejected(error) {
  console.log(error);
}

getUsers()
  .then((users) => {
    console.log(users);
    render("success promise");
  })
  .catch((error) => {
    console.log(error);
    render("something wrong");
  });
