const express = require('express')
const router = express.Router()
const {stay, Shotgun, Superstore, player, Library,Food_Level,Hardware_Store,Search,Leave, Crossbow} = require('../model/Story.js')

router.use('*', (req, res, next) => {
       Food_Level()
       console.log("its working")
       next()
    })

router.get('/', (req, res) => {

    let instructions = `Welcome to Zombie Apocalypse an Exciting new Choose your Adventure game. 
    To start the game go to localhost\:3000\/start end point.<br>At each endpoint you will have to make a decision choose wisely as some decisions will lead to your
    death`
    res.send(instructions)
})

router.get('/start', (req, res) => {
    let startGame =`The Year is 2030 in post-apocalyptic Calgary. A virus has escaped from a lab.
    When people are infected they become zombies (fast-moving zombies).<br>
   You have hidden in Calgary Public Library on the third floor and running out of food.<br>
   Decision 1: Go to Superstore localhost:3000/Superstore <br>
   Decision 2: Stay localhost:3000/stay`
   res.send(startGame)
   console.log(player)
   })

router.get('/stay', (req, res) => {
    message = stay()
    res.send(message)
    console.log(player)
})

router.get('/Superstore', (req, res) => {
    Message= Superstore() 
    res.send(Message)
    console.log(player)
}) 

router.get('/Library', (req, res) => {
    message = Library()
    res.send(message)
    console.log(player)
})

router.get('/Hardware_Store', (req, res) => {
    message = Hardware_Store()
    res.send(message)
    console.log(player)
})

router.get('/search', (req, res) => {
    message = Search()
    res.send(message)
    console.log(player)
})

router.get('/Leave', (req, res) => {
    message = Leave()
    res.send(message)
    console.log(player)
})

router.get('/Shotgun', (req, res) => {
    message = Shotgun()
    res.send(message)
    console.log(player)
})

router.get('/Crossbow', (req, res) => {
    message = Crossbow()
    res.send(message)
    console.log(player)
})

module.exports = router
