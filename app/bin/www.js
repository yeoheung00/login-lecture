"use strict";

const app = require("../app");          //app.js 사용
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {                //서버 시작
    console.log("Server activated");
});