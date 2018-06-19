let friendsArray = require("../data/friends");


module.exports = function(app) {
    console.log('api routes connected');
    // A GET route that displays JSON of all possible friends
    app.get('/api/friends', function(req,res){
        res.json(friendsArray);
    });
    // A POST route that displays new friends scores to compare with possible friends
    app.post('/api/friends', function(req,res){
        console.log("working");
        let newFriendScores = req.body.scores;
        console.log(newFriendScores);
        let scoresArray = [];
        let friendCount = 0;
        let bestMatch = 0;

    //Looping through friends list to compare with friends in friendsArray
    for (let i = 0; i < friendsArray.length; i++) {
        let scoresDiff = 0;
        //Run through scores to compare friends
        for (let j = 0; j < newFriendScores.length; j++) {
            scoresDiff += (Math.abs(parseInt(friendsArray[i].scores[j]) - parseInt(newFriendScores[j])));
        }
        //Push results into scoresArray
        console.log("scoresDiff:" + scoresDiff);
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

//ROUTING

