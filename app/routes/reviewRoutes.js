// // Express docs: http://expressjs.com/en/api.html
// const express = require('express')
// // Passport docs: http://www.passportjs.org/docs/
// const passport = require('passport')
//
// // pull in Mongoose model for examples
// // const Review = require('../models/review')
// const Recipe = require('../models/recipe')
//
// // this is a collection of methods that help us detect situations when we need
// // to throw a custom error
// const customErrors = require('../../lib/custom_errors')
//
// // we'll use this function to send 404 when non-existant document is requested
// const handle404 = customErrors.handle404
// // we'll use this function to send 401 when a user tries to modify a resource
// // that's owned by someone else
// // const requireOwnership = customErrors.requireOwnership
//
// // this is middleware that will remove blank fields from `req.body`, e.g.
// // { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
// // const removeBlanks = require('../../lib/remove_blank_fields')
// // passing this as a second argument to `router.<verb>` will make it
// // so that a token MUST be passed for that route to be available
// // it will also set `req.user`
// const requireToken = passport.authenticate('bearer', { session: false })
//
// // instantiate a router (mini app that only handles routes)
// const router = express.Router()
//
// router.post('/reviews', requireToken, (req, res, next) => {
//   // set owner of new example to be current user
//   const reviewData = req.body.review
//   const recipeId = reviewData.id
//   Recipe.findById(recipeId)
//     .then(handle404)
//     .then(recipe => {
//       recipe.reviews.push(reviewData)
//       return recipe.save()
//     })
//     .then(recipe => res.status(201).json({recipe: recipe}))
//     .catch(next)
// })
//
// router.delete('/reviews/:id', requireToken, (req, res, next) => {
//   const id = req.params.id
//   Recipe.findOne({ 'reviews._id': id })
//     .then(handle404)
//     .then(recipe => {
//       recipe.reviews.id(id).remove()
//       return recipe.save()
//     })
//     .then(() => res.sendStatus(204))
//     .catch(next)
// })
//
// // router.patch('/reviews/:id', requireToken, removeBlanks, (req, res, next) => {
// //   const id = req.params.id
// //   const reviewData = req.body.review
// //   Recipe.findOne({'reviews._id': id})
// //     .then(handle404)
// //     .then(recipe => {
// //       const review = recipe.reviews.id(id)
// //       review.set(reviewData)
// //       return recipe.save()
// //     })
// //     .then(() => res.sendStatus(200))
// //     .catch(next)
// // })
//
// module.exports = router
