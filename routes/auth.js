const express = require('express')
const router = express.Router()

const layout = './layouts/adminLayout.ejs'
const adminLayout = './layouts/auth/admin/authLayout.ejs'

router.get('/login', (req, res) => {
    res.render('auth/admin/login', {
        title: 'Auth Page',
        layout: adminLayout
    })
})

router.get('/register', (req, res) => {
    res.render('auth/admin/register', {
        title: 'Register Page',
        layout: adminLayout
    })
})


router.get('/admin/login', (req, res) => {
    res.render('adminLogin', {
        title: 'Auth Page'
    })
})

module.exports = router