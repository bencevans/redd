var redd = require('./')
var sub = process.argv[2]

if (!sub) {
  console.log('usage: redd [subreddit]')
  process.exit(1)
}

function handleError (err) {
  console.error(err)
  process.exit(1)
}

var subreddit = redd(sub, function (err, posts) {
  if (err) {
    return handleError(err)
  }

  var readablePosts = posts.forEach(function (post) {
    console.log(post.data.title + "\n" + post.data.url + "\n")
  })

})
