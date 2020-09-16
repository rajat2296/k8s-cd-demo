const express = require('express');
const app = express();

app.get('/ping', function(req, res) {
	return res.status(200).send({message: 'GET /ping successful HTTP 1.1'});
})

app.post('/test', function(req, res) {
	return res.status(200).send({message: 'POST /test successful'});
})

const port = process.env.PORT || 8080;

module.exports = app.listen(port, function() {
	console.log("app listening on 8080")
});

