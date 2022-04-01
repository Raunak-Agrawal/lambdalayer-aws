const util = require("/opt/nodejs/util");

exports.handler = (event, context) => {
  console.log(util.add(3, 4));
  return {
    status: 200,
    body: JSON.stringify({
      message: "Hello world",
    }),
  };
};
