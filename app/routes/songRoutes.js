// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for examples
// const Song = require('../models/song')
const List = require('../models/list')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
// const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
// const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

router.post('/songs', requireToken, (req, res, next) => {
  // set owner of new example to be current user
  const songData = req.body.song
  const listId = songData.id
  List.findById(listId)
    .then(handle404)
    .then(list => {
      list.songs.push(songData)
      return list.save()
    })
    .then(list => res.status(201).json({list: list}))
    .catch(next)
})

router.delete('/songs/:id', requireToken, (req, res, next) => {
  const id = req.params.id
  List.findOne({ 'songs._id': id })
    .then(handle404)
    .then(list => {
      list.songs.id(id).remove()
      return list.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// router.patch('/songs/:id', requireToken, removeBlanks, (req, res, next) => {
//   const id = req.params.id
//   const songData = req.body.song
//   List.findOne({'songs._id': id})
//     .then(handle404)
//     .then(list => {
//       const song = list.songs.id(id)
//       song.set(songData)
//       return list.save()
//     })
//     .then(() => res.sendStatus(200))
//     .catch(next)
// })

module.exports = router
