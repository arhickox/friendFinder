//connecting to the friends.js data file
var friendsData = require("../data/friends");

//Routing
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(tableData);
    });

    app.post("/api/friends", function (req, res) {
        friendsData.push(req.body);
        res.json(true);
    });

    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!

    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        tableData.length = [];
        waitListData.length = [];

        res.json({ ok: true });
    });
};
