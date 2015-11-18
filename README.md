# Redd

> Grab Reddit subreddits

## Install

    $ npm install redd

## Usage

```js
const redd = require('redd')
const subreddit = 'programming'
redd(subreddit, function (err, posts) {
  if (err) {
    return handleError(err)
  }
  console.log(posts.map(function (post) {
    return post.title
  })
})
```

## API

### redd(subreddit, callback)

#### subreddit

Type: `string`

URL slug for desired subreddit

#### callback

Type: `function`
Arg1: err
Arg2: array of post ojbects

## Licence

MIT © Ben Evans
