const { URL } = require("url");

const https = require("./lib/check");

function checkLink(link, callback) {
  https.check(link, callback);
}

function checkLinkSync(link) {
  return new Promise((resolve, reject) => {
    https.check(link, (data, error) => {
      if (error) reject(error)
      resolve(data)
    })
  })
}

module.exports = { checkLink, checkLinkSync };
