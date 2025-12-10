// index.js - serverless entry for Vercel

const serverless = require("serverless-http");

// compiled Express app from dist/server.js
const appModule = require("./dist/server");
const app = appModule.default || appModule;

// export as Vercel serverless function
module.exports = serverless(app);
