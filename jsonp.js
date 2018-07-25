const http = require('http');
const url = require('url');
const queryString = require('querystring');
const server = http.createServer();
server.on('request', (req, res) => {
		let pathname = url.parse(req.url).pathname;
		let queryObj = queryString.parse(req.url.split('?')[1]);
		if (pathname === '/jsonp' && queryObj.callback) {
			res.writeHead(200, 'ok', {"Content-Type": "application/json"});
			let data = {
				name: 'dyh',
				age: 23
			};
			res.end(queryObj.callback + '(' + JSON.stringify(data) + ')', 'utf-8', () => console.log("返回jsonp成功!"));
		}
	});
server.listen(8000, () => console.log("服务已经跑在8000端口"));