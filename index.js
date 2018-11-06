var app = require('express')();
var http = require('http').Server(app);

var parser = require('body-parser');
var corb = require('cors');

app.use(parser.json());
app.use(corb());




app.get('/testInform', function (req, res) {
    var info = {
        name: '엄태성',
        year: '4',
        birth: '931232',
        depart: '노량진1동803통민방위대',
        address: '서울특별시 송파구 올림픽길 18길 극동아파트 103동 803호 \n (서울특별시 송파구 성내2동 극동아파트 103동 704호)',
        master:'엄태성',
        div:'소집교육',
        date:'2018년9월9일',
        stampLoc:'노량진1동',
        stampDate: '2018년10월12일',
        qrLink: 'http://222.107.4.162/qr.png',
        stampLink: 'http://222.107.4.162/stamp.png'
    };


    res.send(info);
});

app.get('/confirm', function (req, res) {
    var info = {
        name: '엄**',
        year: '2018',
        birth: '8****8'
    };


    res.send(info);
});

// - 메인화면 : 맨 마지막 지역 순서만 광주/제주/경북/경남/부산 순으로 수정

app.get('/city', function (req, res) {
    var info = ['서울', '인천', '경기', '강원', '충북', '충남', '대전', '세종',
        '전북', '전남', '대구', '울산', '광주', '제주', '경북', '경남', '부산'];

    res.send(info);
});

app.get('/cityTest', function (req, res) {
    var info = ['서울', '인천', '경기', '강원', '충북', '충남', '대전', '세종',
        '전북', '전남', '대구', '울산', '광주', '제주', '경북', '경남', '부산',
        '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    res.send(info);
});


app.get('/gu', function (req, res) {
    var info = ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구',
        '구로구', '금천구',  '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];

    res.send(info);
});

app.get('/gu1', function (req, res) {
    var info = ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구',
        '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구',
        '서대문구', '서초구', '성동구', '송파구', '성북구', '양천구',
        '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구','서대문구', '서초구', '성동구', '송파구', '성북구', '양천구',
        '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'];

    res.send(info);
});

app.get('/gu2', function (req, res) {
    var info = ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구',
        '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구',
        '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'];

    res.send(info);
});


app.get('/confirm', function (req, res) {
    var info = {
        name: '엄태성',
        year: '4',
        birth: '931232'
    };


    res.send(info);
});




http.listen(8899, function () {
    console.log('listening on *:8899');
});