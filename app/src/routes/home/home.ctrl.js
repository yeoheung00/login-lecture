"use strict";

const output = {
    home: (req, res) => {
        res.render("home/index");
    },

    login: (req, res) => {
        res.render("home/login");
    },
}

const users = {
    id: ["minnie", "miyeon", "soyeon", "yuqi", "shuhua"],
    pw: ["1023", "0131", "0826", "0923", "0106"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id;
        const pw = req.body.pw;
        console.log(id + ":" + pw);

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.pw[idx] === pw) {
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: true,
            msg: "로그인에 실패했습니다.",
        });
    },
}

module.exports = {
    output,
    process,
};