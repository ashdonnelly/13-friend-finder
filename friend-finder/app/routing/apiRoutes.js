// LOAD DATA
var tableData = require("../data/tableData");
var waitListData = require("../data/waitinglistData");

// ROUTING
module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });


  // API POST Requests
  app.post("/api/tables", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

//   // clear out the table while working with the functionality.
//   // Don"t worry about it!

//   app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     friendData = [];

//     console.log(friendData);
//   });

};
