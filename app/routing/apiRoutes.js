let friendsArray = require("../data/friends");


module.exports = function(app) {
    // A GET route that displays JSON of all possible friends
    app.get('/api/friends', function(req,res){
        res.json(friendsArray);
    });
    // A POST route that displays new friends scores to compare with possible friends
    app.post('/api/friends', function(req,res){
        let newFriendScores = req.body.scores;
        let scoresArray = [];
        let friendCount = 0;
        let bestMatch = 0;

    //Looping through friends list to compare with friends in friendsArray
    for (let i = 0; i < friendsArray.length; i++) {
        let scoresDiff = 0;
        //Run through scores to compare friends
        for (let j = 0; j < newFriendScores.length; j++) {
            scoresDiff += (Math.abs(parseInt(friendsArray[i].scoresArray[j]) - parseInt(newFriendScores[j])));
        }
        //Push results into scoresArray
        scoresArray.push(scoresDiff)
    }
        //After friends are compared, find the best match
        for (let i = 0; i < scoresArray.length; i++) {
            if(scoresArray[i] <= scoresArray[bestMatch]){
                bestMatch = i;
            }
        }

        //returns bestMatch
        let bff = friendsArray[bestMatch];
        res.json(bff);

        //pushing new submission into friendsArray
        friendsArray.push(req.body);
    });
};


//function findMatch
 function findFriend() {
     let result;
     let score = 50;
     for (friend of friends) {
        console.log(friend);
     }
 }

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