const express = require("express");
const app = express();

/* ROUTE HANDKERS */

/* lIST ROUTES */

/**
 * GET /lists
 * Purpose: Get all lists
 */
app.get("/", (req, res) => {
  //we want to return an array at all the lists in the database
});

/**
 * POST /lists
 * Purpose: Create a list
 */
app.post("/", (req, res) => {
  //we want to create a new list and return the new list document back to the user (which include the id)
  // the list information (fields) will be passed in via the JSON request body
});

/**
 * PATCH /lists/id
 * Purpose: Update a specified list
 */
app.patch("/lists/:id", (req, res) => {
  // we want to update the specified list (list document with id in the URL) with the new values specified in the JSON body of the request
});

/**
 * DELETE /lists/:id
 * Purpose: Delete a list
 */
app.delete("/lists/:id", (req, res) => {
  // we want to delete the specified list (document with id in the URL)
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
