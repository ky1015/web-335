/*
Name: Kylie Struhs
Date: July 7 2024
File Name: struhs_aggregatequeries.js
Description: Assignment 6.2
*/

// query to display all students
db.students.find();

// query to add a new student
db.students.insertOne({
  firstName: "Ebony",
  lastName: "Way",
  studentId: "s1099",
  houseId: "h1010",
});

// prove student was added successfully
db.students.findOne({ firstName: "Ebony" });

// update a property of the new student
db.students.updateOne(
  { firstName: "Ebony" },
  { $set: { lastName: "Dark'ness Dementia Raven Way" } }
);

// prove the property was updated
db.students.findOne({ firstName: "Ebony" });

//delete the new student
db.students.deleteOne({ firstName: "Ebony" });

// prove new student was deleted
db.students.findOne({ firstName: "Ebony" });

// display all students by house, the order should be houses, students
db.houses.aggregate([
  {
    $lookup: {
      from: "students",
      localField: "houseId",
      foreignField: "houseId",
      as: "student_docs",
    },
  },
]);

// display all students in house Gryffindor. The order should be Gryffindor, students
db.houses.aggregate([
  { $match: { founder: "Godric Gryffindor" } },
  {
    $lookup: {
      from: "students",
      localField: "houseId",
      foreignField: "houseId",
      as: "gryffindor_students",
    },
  },
]);
// display all students in the house with an Eagle mascot. The order should be House, students

db.houses.aggregate([
  { $match: { mascot: "Eagle" } },
  {
    $lookup: {
      from: "students",
      localField: "houseId",
      foreignField: "houseId",
      as: "eagle_students",
    },
  },
]);
