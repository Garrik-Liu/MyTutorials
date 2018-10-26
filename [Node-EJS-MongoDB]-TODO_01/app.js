var http = require('http');
var url = require('url');
var ejs = require('ejs');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var mongoServerUrl = 'mongodb://localhost:27017';

var server = http.createServer(function(req, res) {
    var urlObj = url.parse(req.url, true);

    switch (urlObj.pathname) {
        case "":
        case "/":
            MongoClient.connect(mongoServerUrl, function(err, client) {
                if (err) throw err;

                var db = client.db('todoDb');
                var collection = db.collection('todos');

                collection.find({}).toArray(function(err, result) {
                    if (err) throw err;

                    ejs.renderFile('./views/index.ejs', { tasks: result }, function(err, str) {
                        if (err) throw err;
                        client.close(function() {
                            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
                            res.write(str);
                            res.end();
                        });

                    });
                })
            });

            break;
        case "/addTask":
            var taskDetail = urlObj.query.taskDetail;

            MongoClient.connect(mongoServerUrl, function(err, client) {
                if (err) throw err;

                var db = client.db('todoDb');
                var collection = db.collection('todos');

                collection.insertOne({ taskDetail: taskDetail }, function(err, result) {
                    if (err) throw err;

                    client.close(function() {
                        res.writeHead(302, { 'Location': '/' });
                        res.end();
                    });
                });
            });

            break;
        case "/deleteTask":
            var targetId = urlObj.query.id;

            var targetObjectId = new ObjectID(targetId);

            MongoClient.connect(mongoServerUrl, function(err, client) {
                if (err) throw err;

                var db = client.db('todoDb');
                var collection = db.collection('todos');

                collection.deleteOne({ _id: targetObjectId }, function(err, result) {
                    if (err) throw err;

                    client.close(function() {
                        res.writeHead(302, { 'Location': '/' });
                        res.end();
                    });
                });
            });

            break;
        default:
            ejs.renderFile('./views/404.ejs', {}, function(err, str) {
                if (err) throw err;

                res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
                res.write(str);
                res.end();
            });

            break;
    }
});

server.listen(8080, function() {
    console.log("服务器启动, 监听 3000 端口:");
})