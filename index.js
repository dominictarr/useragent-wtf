
try {
  var ua = require('ua_parser/src/js/userAgent').util.userAgent()
  var b = ua.browser
  module.exports = {
    browser: b.name,
    os: ua.os.name,
    platform: ua.platform,
    version: b.version
  }
} catch (err) {
  if(console) console.error(err)
  module.exports = {
    browser: 'unknown',
    os: 'unknown',
    platform: 'unknown',
    version: {info: '?.?.?'}
  }
}

