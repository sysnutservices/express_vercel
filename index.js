const serverless = require("serverless-http");

// Load the compiled Express app from dist/server.js
const appModule = require("./dist/server");
const app = appModule.default || appModule;

// Export as a Vercel serverless function
module.exports = serverless(app);
