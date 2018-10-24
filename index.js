var app = require('express')();
var http = require('http').Server(app);

var parser = require('body-parser');
var corb = require('cors');

app.use(parser.json());
app.use(corb());


app.get('/newsPreview', function (req, res) {
    var newsPreviewList = [];

    var info1 = {
        type : 'newsPreview',
        title : 'Earthquake: 4.4 quake strikes Inland',
        content : 'This information comes from the USGS Earthquake Notification Service and this post was created '
    };
    var info2 = {
        type : 'newsPreview',
        title : '2.6 earthquake shakes near Concord',
        content : 'CONCORD (KRON) - A 2.6 magnitude earthquake has struck near Concord on Tuesday afternoon, according'
    };
    var info3 = {
        type : 'newsPreview',
        title : 'Death Toll From Indonesia Earthquake Passes 43',
        content : 'An earthquake expected in Istanbul may claim the lives of 26,000 to 30,000 people...'
    };

    newsPreviewList.push(info1);
    newsPreviewList.push(info2);
    newsPreviewList.push(info3);

    res.send(newsPreviewList);
});

app.get('/testInform', function (req, res) {
    var info = {
        name: '엄태성',
        year: '4',
        birth: '931232',
        depart: '노량진1동803통민방위대',
        address: '서울특별시 송파구 올림픽로47길 12 쌍용아파트 103동 705호 \n (서울특별시 송파구 풍납2동 쌍용아파트 103동 705호)',
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



app.get('/city', function (req, res) {
    var info = ['서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종',
        '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'];

    res.send(info);
});


app.get('/gu', function (req, res) {
    var info = ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구',
        '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구',
        '서대문구', '서초구', '성동구', '송파구', '성북구', '양천구',
        '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'];

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