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
