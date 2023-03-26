const express = require('express')
const { 
    createWorkout,
    getWorkout,
    getWorkouts } = require('../controllers/workoutController')

const router = express.Router()

//get all workouts
router.get('/', getWorkouts)

//get a single workout
router.get('/:id', getWorkout)

//POST a new workout
router.post('/', createWorkout)

//delete a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
})

//update a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
})

module.exports = router
