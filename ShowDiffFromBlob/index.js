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
    if (prev !== undefined) {
        context.log(prev.length)
    }
    const current = AzureAdParser.getUsers(req.body.current)
    context.log('current:')
    context.log(current)
    if (current !== undefined) {
        context.log(current.length)
    }
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: AzureAdParser.diffUsers(prev, current)
    }
}
