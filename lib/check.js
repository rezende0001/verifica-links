const checkLinkResult = require("./checkLinkResult");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

class Checker {
  constructor(link, err, callback) {
    this.link = link;
    this.err = err;
    this.callback = callback;
  }

  async check(link, callback) {
    if (!link) throw new Error("You need to specify a link!");

    const timeStart = Date.now();

    const res = await fetch(link).then(async (data) => {
      const responseTime = Date.now() - timeStart;
      console.log(responseTime);

      return callback(new checkLinkResult(link, data.status, responseTime));
    });
  }
}
module.exports = new Checker();
