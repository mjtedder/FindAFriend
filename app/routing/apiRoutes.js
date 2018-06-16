let friendsArray = require("../data/friends");

//ROUTING
//API GET request
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsArray);
    });

    //API POST request for adding new friend profile to the array
    app.post("/api/friends", function (req, res) {
        res.json(friendsArray);
    });
}