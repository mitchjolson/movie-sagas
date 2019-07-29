const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

router.get('/', (req, res) => {
    const sqlText='select * from movies order by title asc;';
    pool.query(sqlText)
        .then((response) => {
            res.send(response.rows)
        })
        .catch((error) => {
            console.log('error getting movies', error)
            res.sendStatus(500)
        })
})

router.put('/:id', (req, res) => {
    console.log('modifying, req.body is', req.body)
    const sqlText = `update movies set (title, description) = ('${req.body.title}', '${req.body.description}') where movies.id = ${req.body.id};`;
    pool.query(sqlText)
        .then((response) => {
            res.sendStatus(200)
        })
        .catch((error) => {
            console.log('error editing movie', error)
            res.sendStatus(500)
        })
})

module.exports = router;