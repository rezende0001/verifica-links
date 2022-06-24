class checkLinkResult {
    constructor(link, statusCode){
        this.link = link;
        this.statusCode = statusCode || 0;
    }
}

module.exports = checkLinkResult