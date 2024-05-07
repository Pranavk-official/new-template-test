const express = require('express')
const router = express.Router()

const layout = './layouts/adminLayout.ejs'

router.get('/', (req, res) => {
    res.render('admin', {
        title: 'Admin Page',
        layout
    })
})

module.exports = router