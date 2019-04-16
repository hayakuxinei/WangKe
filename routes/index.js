var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;
var spawn = require('child_process');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {tittle: '刷课'});
});

router.post('/start', function (req, res) {
    let username = req.body.name;
    let password = req.body.psw;
    let coursename = '马克思主义基本原理概论';
    let filename = 'D:/程序/Python/爬虫/wangke3.py';
    test = exec('python ' + filename + ' ' + coursename + ' ' + username + ' ' + password, function (err, stdout, stderr) {
        if (err) {
            console.log(err);
        }
        if (stdout.length > 1) {
            console.log(stdout);
        }
    });
    //endprocess=spawn('kill',['-9',test.pid+1]);
    res.send('随缘刷课开始')
});

module.exports = router;
