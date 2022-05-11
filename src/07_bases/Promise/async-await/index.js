function getUser(userId) {
  return new Promise((resolve, reject) => {
    console.log("Get user from the database.");
    setTimeout(() => {
      resolve({
        userId: userId,
        username: "john",
      });
    }, 1000);
  });
}

function getServices(user) {
  return new Promise((resolve, reject) => {
    console.log(`Get services of  ${user.username} from the API.`);
    setTimeout(() => {
      resolve(["Email", "VPN", "CDN"]);
    }, 2 * 1000);
  });
}

function getServiceCost(services) {
  return new Promise((resolve, reject) => {
    console.log(`Calculate service costs of ${services}.`);
    setTimeout(() => {
      resolve(services.length * 100);
    }, 3 * 1000);
  });
}

// getUser(100)
//     .then(getServices)
//     .then(getServiceCost)
//     .then(console.log);

/*
 esto de arriba se puede escribir utilizando async/await
 compare el codigo de arriba con el codigo de abajo, es lo mismo
*/

async function showServiceCost() {
  let user = await getUser(100);
  let services = await getServices(user);
  let cost = await getServiceCost(services);
  console.log(`The service cost is ${cost}`);
}

showServiceCost();
