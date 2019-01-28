var friends = require("../data/friends");

//routing
module.exports = function(app) {

  //api GET request
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  //api POST request
  app.post("/api/friends", function(req, res) {

    //object for current best match
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: Infinity
    };

    var userData = req.body;
    var userScores = userData.scores;

    var totalDifference;

    //loop through all friend possibilities
    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDifference = 0;

      console.log(currentFriend.name);

      //loop through all scores of each friend
      for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];

        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

      if (totalDifference <= bestMatch.friendDifference) {
        //replace current best match if difference lower than currest lowest
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDifference;
      }
    }

    friends.push(userData);

    res.json(bestMatch);
  });
};
