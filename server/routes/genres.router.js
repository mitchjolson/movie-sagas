const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

router.get('/:id', (req, res) => {
    console.log('getting genres, req.params is', req.params)
    const sqlText = `select genres.name from movies join junction on movies.id = junction.movie_id join genres on genres.id = junction.genre_id where movies.id = ${req.params.id};`;
    pool.query(sqlText)
        .then((response) => {
            res.send(response.rows)
        })
        .catch((error) => {
            console.log('error getting movies', error)
            res.sendStatus(500)
        })
})


module.exports = router;