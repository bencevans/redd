var request = require('request')

module.exports = function redd (options, callback) {
  if (typeof options === 'string') {
    options = { subreddit: options }
  }
  if (typeof options !== 'object') {
    throw new Error('no options/subreddit provided')
  }
  if (!options.subreddit) {
    throw new Error('no subreddit provided')
  }
  if (!callback) {
    throw new Error('no callback provided')
  }

  getPageAfter(options.subreddit, options.after || false, callback)
}

function getPageAfter (subreddit, after, callback) {
  request({
    uri: 'https://www.reddit.com/r/' + subreddit + '.json' + (after ? '?after=' + after : ''),
    json: true
  }, function (err, res, body) {
    if (err) {
      return callback(err)
    }
    var posts = body.data.children
    callback(null, posts)
  })
}
