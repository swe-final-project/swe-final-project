const functions = require("firebase-functions");
const { default: next } = require("next");

const isDev = process.env.NODE_ENV !== "production";
const server = next({
  dev: isDev,
  conf: { distDir: ".next" },
});
const nextjsHandle = server.getRequestHandler();

exports.nextjsFunc = functions.https.onRequest(async (req, res) => {
  await server.prepare();
  return nextjsHandle(req, res);
});
