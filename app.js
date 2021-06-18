const express = require('express');
const bodyParser = require('body-parser');
const SkyRemote = require('sky-remote');

const skyboxes = {
	"main": "192.168.1.12",
	"games": "192.168.1.14"
};

const app = express();
app.use(express.static('webroot'));
app.use(bodyParser.urlencoded({extended:true}));

app.post('/control', function(req, res) {
	const remoteControl = new SkyRemote(skyboxes[req.body.box]);
	let command = req.body.command;
	if (!isNaN(command)) command = [...command];

	console.log(req.body.box,":", command);
	remoteControl.press(req.body.command,()=> {
		res.end('OK');
	});
});

app.listen(83, function() {
	console.log("http://127.0.0.1:83");
});