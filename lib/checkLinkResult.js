class checkLinkResult {
  constructor(link, statusCode, responseTime, data) {
    this.link = link;
    this.statusCode = statusCode || 0;
    this.responseTime = responseTime || null;
  }
}

module.exports = checkLinkResult;
