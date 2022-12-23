"use strict";

class UserStorage {
    static #users = {
        id: ["minnie", "miyeon", "soyeon", "yuqi", "shuhua"],
        pw: ["1023", "0131", "0826", "0923", "0106"],
        name: ["민니", "미연", "소연", "우기", "슈화"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        console.log(newUsers);
        return newUsers;
    };
}

module.exports = UserStorage;