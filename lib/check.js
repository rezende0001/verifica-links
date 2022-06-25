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
    if (typeof link !== "string") throw new Error("You need to enter a string in the Link!");

    const timeStart = Date.now();

    const res = await fetch(link).then(async (data) => {
      const responseTime = Date.now() - timeStart;
      
      return callback(new checkLinkResult(link, data.status, responseTime));
    });
  }
}
module.exports = new Checker();
