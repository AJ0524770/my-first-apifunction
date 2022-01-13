module.exports = async function (context, req) {
    const axios = require("axios");
    context.log('JavaScript HTTP trigger function processed a request.');

    //const name = (req.query.name || (req.body && req.body.name));
    const name = await axios.get("https://randomuser.me/api/");

    const responseMessage = name
        ? "Hello, " + name.data.results[0].name.first + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}