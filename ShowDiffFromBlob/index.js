module.exports = async function (context, req, prevStatus) {
    context.log('JavaScript HTTP trigger function processed a request.')
    context.log('prev:')
    context.log(req.body.prev)
    context.log('current:')
    context.log(req.body.current)

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.name || req.body.name)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};