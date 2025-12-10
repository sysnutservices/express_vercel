const serverless = require("serverless-http");

// Load express app (works for both ES modules & CommonJS)
const appModule = require("../dist/app/index");
const app = appModule.default || appModule;

module.exports = async (req, res) => {
    const handler = serverless(app);
    return handler(req, res);
};
