const notesData = require("../db/db");
const fs = require("fs");

module.exports = function (app) {
    app.get("/api/notes", function (request, response) {
        return response.json(notesData);
    });
    app.post("/api/notes", function (request, response) {
        notesData.push(request.body);
        let withId = notesData.map(element => element.id = notesData.indexOf(element));
        return response.json(true);
    });
    app.delete("/api/notes/:id", function (request, response) {
        let urlId = request.params.id;
        let filterId = notesData.filter(element => element.id != urlId);

        let withoutId = JSON.parse(JSON.stringify(filterId));
        console.log(withoutId);

       response.send(withoutId);
    });
}

