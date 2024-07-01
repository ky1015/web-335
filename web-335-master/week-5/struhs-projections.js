/*
Name: Kylie Struhs
Date: June 29 2024
File Name: queries.js
Description: a file with the queries used to search the users collection
*/

// Add a user to the collection, and prove that it was successful
db.users.insertOne({
  firstName: "Patrick",
  lastName: "Star",
  employeeId: "2000",
  email: "starPat@me.com",
});

db.users.find(); // to return all users and prove Patrick was added

// Update Mozart's email address and prove it was successful

db.users.updateOne(
  { lastName: "Mozart" },
  { $set: { email: "mozart@me.com" } }
);

db.users.findOne({ lastName: "Mozart" }); // to prove it updated

// Display all users in collection. Only display firstName, lastName and email
db.users.find({}, { firstName: 1, lastName: 1, email: 1, _id: 0 });
