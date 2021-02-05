const express = require("express");

const app = express();

// レスポンスのデータ
const responseObjectData = {
  textObject1 : {
    title: 'Objectのタイトル1です',
    subTitle: 'Objectのサブタイトル1です',
    bodyText: 'Objectの本文1です'
  },
  textObject2 : {
    title: 'Objectのタイトル2です',
    subTitle: 'Objectのサブタイトル2です',
    bodyText: 'Objectの本文2です'
  },
};

app.get("/", (req, res) => {
  res.status(200).send("Express!!");
});

app.get("/api/objectdata", function(req, res, next) {
  // CORS対応
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, access_token'
  );

  // データの返却
  res.json(responseObjectData);
});

// ポート3000番でlistenする
app.listen(3000);
