const express = require('express')
const app = express()

app.listen(3300, () => {
    console.log("server started listing at port number:3300");
})

app.post('/login', (req, res) => {
    dataService.login(req, req.body.acno, req.body.pswd)
        .then(result => {
            res.status(result.statusCode).json(result)
        })
})