var redd = require('./')
var test = require('tape')

test('error thrown when no subreddit provided', function (t) {
  t.plan(1)
  t.throws(function () {
    redd()
  }, /no options\/subreddit provided/)
})

test('error thrown when no callback provided', function (t) {
  t.plan(1)
  t.throws(function () {
    redd('Music')
  }, /no callback provided/)
})

test('fetching front page', function (t) {
  t.plan(2)
  redd('Music', function (err, posts) {
    t.error(err)
    t.equal(posts.length, 25)
  })
})
