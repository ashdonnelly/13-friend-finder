// LOAD DATA
var friends = require("../data/friends.js");

// ROUTING
module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)

    app.get("/api/friends", function(req, res) {
    res.json(friends);
    });


    // API POST Requests
    // json object from friend array
    app.post("/api/friends", function(req, res) {
        var bestFriend = {
            name: "",
            imageURL: "",
            compatibilityRating: "40" // add total score of all answers
        }

        //parse result of the post
        var userData = req.body;
        var userScores = userData.scores;
        var compatibilityDifference = 0; // difference between each friends' ratings and user rating set to 0

        // loop through friends array
        for (var i = 0; i < friends.length; i++) {
        compatibilityDifference = 0; // set to 0
        
            // loop through each friend's score
            for (var j = 0; j < friends[i].scores[j]; j++) {

                // calculate and parse compatibility rating using abs value
                compatibilityDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                // find friend with lowest compatibility difference
                if (compatibilityDifference <= bestFriend.friendDifference) {

                    // set bestFriend variable to the friend w/lowest compatibility difference
                    bestFriend.name = friends[i].name;
                    bestfriend.photo = friends[i].photo;
                    bestFriend.friendDifference = compatibilityDifference;

                }
            }
        }

        // save friend into database
        friends.push(userData);

        // json object for bestfriend
        res.json(bestFriend);
    });
};
