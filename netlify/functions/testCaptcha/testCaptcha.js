const fetch = require("node-fetch");

const handler = async function (event, context) {
  try {
    const body = JSON.parse(event.body);
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${body.secret}&response=${body.response}`;
    const response = await fetch(url, {
      method: "POST",
    }).then((res) => res.json());

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: error.message }),
    };
  }
};

module.exports = { handler };

// const handler = async function () {
//   try {
//     const response = await fetch('https://icanhazdadjoke.com', {
//       headers: { Accept: 'application/json' },
//     })
//     if (!response.ok) {
//       return { statusCode: response.status, body: response.statusText }
//     }
//     const data = await response.json()

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ msg: data.joke }),
//     }
//   } catch (error) {
//     console.log(error)
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ msg: error.message }),
//     }
//   }
// }

// module.exports = { handler };

// exports.handler = async function (event, context) {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ message: "Hello World" }),
//   };
// };
