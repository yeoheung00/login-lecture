"use strict";

const db = require("../config/db");

class UserStorage {
    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM asdf WHERE id = ?";
            db.query(query, [id], (err, data) => {
                if(err) reject(`${err}`);
                else resolve(data[0]);
            });
        });
    }

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, name, pw) VALUES(?, ?, ?);";
            db.query(query, [userInfo.id, userInfo.name, userInfo.pw], (err, data) => {
                if(err) reject(`${err}`);
                else resolve({success: true});
            });
        });
    }

}

module.exports = UserStorage;