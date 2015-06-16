# Redd

Grab Reddit subreddits

## Install

    npm install redd

## Use

```js
var redd = require('redd')
var subreddit = 'programming'
redd(subreddit, function (err, posts) {
  if (err) {
    return handleError(err)
  }
  console.log(posts.map(function (post) {
    return post.title
  })
})
```

## Licence

MIT
