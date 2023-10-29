const express = require('express');
const router = express.Router();

router.get('/articles', (req, res) => {
    res.send('articles Router')
});

router.get('/admin/articles/new', (req, res) => {
    res.render('admin/articles/new')
});

module.exports = router;