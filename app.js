const express = require('express');
const app = express();
const port = 7777;

app.use(express.static('public'));
app.set('view engine', 'ejs');

/* Routes */

app.get('/', function(req, res) {
	res.render('index');
});

app.get('*', function(req, res) {
	res.send('Page not found');
});

app.listen(port,() => { 
	console.log(`Server started on port ${port}`);
});