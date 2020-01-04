const AzureAdParser = require("./azure-ad-parser")
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.')
    if (!req.body || !req.body.current || !req.body.prev) {
        context.res = {
            status: 400,
            body: "Please put current and prev in the request body"
        }
        return
    }
    const prev = AzureAdParser.getUsers(req.body.prev)
    context.log('prev:')
    context.log(prev)
    const current = AzureAdParser.getUsers(req.body.current)
    context.log('current:')
    context.log(current)
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: AzureAdParser.diffUsers(prev, current)
    }
}