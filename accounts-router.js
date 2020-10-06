const express = require('express')
const db = require('./data/dbConfig')
// 'accounts'
const router = express.Router()

router.post('/', (req, res) => {
    const postData = req.body
    db('accounts')
    .insert(postData)
    .then(post => {
        res.status(201).json({
            data: post
        })
    })
    .catch(err => {
        message: err.message
    })
})


router.get('/', (req,res) => {
    db.select('*').from('accounts')
    .then(acc => {
        res.status(200).json({
            data: acc
        })
    })
    .catch(err => {
        message: err.message
    })
})

router.put('/:id', (req,res) => {
    const changes = req.body;
    db('accounts')
    .where({id: req.params.id})
    .update(changes)
    .then(res => {
        res.status(200).json({
            message: `The id that was changed: ${changes}`
        })
    })
    .catch(err => {
        message: err.message
    })
})

router.delete('/:id', (req, res) => {
    db('accounts')
    .delete(req.params.id)
    .then(res => {
        res.status(200).json({
            message: 'the id has been destroyed'
        })
    })
    .catch(err => {
        message: err
    })
})

module.exports = router