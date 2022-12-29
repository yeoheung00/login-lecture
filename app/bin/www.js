"use strict";

const app = require("../app");          //app.js 사용
const logger = require("../src/config/logger");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {                //서버 시작
    logger.info(`Server activated in port ${PORT}`);
});