let friendData = require("../data/friends");

module.exports = function (app) {

    // Displays all friends
    app.get("/api/friends", function (req, res) {
        return res.json(friendData);
    });

    // Posts to friends
    app.post("/api/friends", function (req, res) {
        friendData.push(req.body);
        res.json(friendData);
    });
}