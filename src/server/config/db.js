const mysql = require("mysql");

const db = mysql.createPool({
    host: "minmoong.cafe24.com",
    user: "minmoong",
    password: "Minmoongsdft9824",
    port: 3306,
    database: "minmoong"
});

module.exports = db;