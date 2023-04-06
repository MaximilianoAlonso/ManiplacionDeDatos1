const express = require('express');
const router = express.Router();
const {list,detail, news, recomended } = require('../controllers/moviesController');

router.get('/movies', list);
router.get('/movies/new', news);
router.get('/movies/recommended',recomended);
router.get('/movies/detail/:id', detail);


module.exports = router;