let friendsArray = require("../data/friends");

//Logic for comparing differences in scores
//for (let i = 1; i < 2; i++) {
   // math.abs()
//}

//ROUTING
module.exports = function (app) {
    //API GET request
    app.get("/api/friends", function (req, res) {
        res.json(friendsArray);
    });

    //API POST request for adding new friend profile to the array
    app.post("/api/friends", function (req, res) {
        friendsArray.push(req.body);
        res.json(friendsArray);
    });
}