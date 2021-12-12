/* module */
const express = require("express");
const db = require("./config/db");
const bodyParser = require("body-parser");

/* function */
const database_convert_string = require("./function/database_convert_string");
const random_string = require("./function/random_string");

/* variable */
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(4000, () => {
    console.log("[*] Server is On http://localhost:4000/");
});

app.post("/api/data/upload_votecontent", (request, response) => {
    db.query(`INSERT INTO vote_objects
            (path, title, contents) VALUE ('/${ random_string() }', '${ request.body.title }', '${
                JSON.stringify([...JSON.parse(request.body.contents)
                    .map(value => `${ Buffer.from(value, "utf-8").toString("base64") }`)])
            }')`, (error, data) => {
        if(!error) {
            response.setHeader("Access-Control-Allow-Origin", "*");

            if(data.serverStatus === 2) {
                response.send({ status: "OK" });
            }

            else {
                response.send({ status: "FAILED", errorCode: data.serverStatus });
            }
        }

        else {
            console.log(error);
        }
    });
});

app.get("/api/data/get_votecontent_objects", (request, response) => {
    db.query("SELECT * FROM vote_objects", (error, data) => {
        if(!error) {
            response.setHeader("Access-Control-Allow-Origin", "*");

            response.send([
                ...data.map(value => (
                    {
                        path: database_convert_string(value.path),
                        title: database_convert_string(value.title),
                        contents: [
                            ...JSON.parse(database_convert_string(value.contents))
                                .map(value => `${ Buffer.from(value, "base64").toString("utf-8") }`)
                        ],
                        contents_totalVotes: 1000,
                        contents_votes: [450, 250, 150, 75, 75]
                    }
                ))
            ]);
        }
    
        else {
            console.log(error);
        }
    });
});