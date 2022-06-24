const checkLinkResult = require('./checkLinkResult');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

class Checker {
    constructor(link, err, callback) {
        this.link = link;
        this.err = err;
        this.callback = callback;
    }

    async check(link, callback) {
        
        if (!link) throw new Error('Not is Link');

        const res = await fetch(link)
        return callback(new checkLinkResult(link,res.status))
    }
}
module.exports = new Checker