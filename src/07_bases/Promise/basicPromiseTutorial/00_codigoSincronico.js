// ---------------the problem itself-------------
function getUsers() {
  let user = [];

  setTimeout(() => {
    user = [
      { username: "john", email: "john@test.com" },
      { username: "jane", email: "jane@test.com" },
    ];
  }, 1000);
  return user;
}

function findUser(username) {
  const users = getUsers();
  const user = users.find((user) => user.username === username);
  return user;
}

console.log(findUser("john"));

// when execute the result es Output:

// undefined
