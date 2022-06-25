const { URL } = require("url");

const https = require("./lib/check");

function checkLink(link, callback) {
  https.check(link, callback);
}

module.exports = checkLink;
