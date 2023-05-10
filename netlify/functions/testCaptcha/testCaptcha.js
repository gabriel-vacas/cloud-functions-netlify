const fetch = require("node-fetch");

const handler = async function (event) {
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
