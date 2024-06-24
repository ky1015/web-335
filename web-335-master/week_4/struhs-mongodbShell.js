// logging into the shell
C:\Users\kylie\buwebdev\web-335\web-335-master\week_4> mongosh "mongodb+srv://bellevueuniversity.edz2jps.mongodb.net/" --apiVersion 1 --username web335_user
Enter password: ******
Current Mongosh Log ID: 6678d86d2f1685b605d736a8
Connecting to:          mongodb+srv://<credentials>@bellevueuniversity.edz2jps.mongodb.net/?appName=mongosh+2.0.0
Using MongoDB:          7.0.11 (API Version 1)
Using Mongosh:          2.0.0
mongosh 2.2.9 is available for download: https://www.mongodb.com/try/download/shell

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

//loading the file
Atlas atlas-kww38r-shard-0 [primary] test> load("users.js")

// validation that we have loaded users.js
true

// query to display all users
Atlas atlas-kww38r-shard-0 [primary] test> db.users.find();
[
  {
    _id: ObjectId("6678d8722f1685b605d736a9"),
    firstName: 'Johann',
    lastName: 'Bach',
    employeeId: '1007',
    email: 'jbach@me.com',
    dateCreated: ISODate("2024-06-24T02:22:42.580Z")
  },
  {
    _id: ObjectId("6678d8722f1685b605d736aa"),
    firstName: 'Ludwig',
    lastName: 'Beethoven',
    employeeId: '1008',
    email: 'lbeethoven@me.com',
    dateCreated: ISODate("2024-06-24T02:22:42.580Z")
  },
  {
    _id: ObjectId("6678d8722f1685b605d736ab"),
    firstName: 'Wolfgang',
    lastName: 'Mozart',
    employeeId: '1009',
    email: 'wmozart@me.com',
    dateCreated: ISODate("2024-06-24T02:22:42.580Z")
  },
  {
    _id: ObjectId("6678d8722f1685b605d736ac"),
    firstName: 'Johannes',
    lastName: 'Brahms',
    employeeId: '1010',
    email: 'jbrahms@me.com',
    dateCreated: ISODate("2024-06-24T02:22:42.580Z")
  },
  {
    _id: ObjectId("6678d8722f1685b605d736ad"),
    firstName: 'Richard',
    lastName: 'Wagner',
    employeeId: '1011',
    email: 'rwagner@me.com',
    dateCreated: ISODate("2024-06-24T02:22:42.580Z")
  },
  {
    _id: ObjectId("6678d8722f1685b605d736ae"),
    firstName: 'Claude',
    lastName: 'Debussy',
    employeeId: '1012',
    email: 'cdebussy@me.com',
    dateCreated: ISODate("2024-06-24T02:22:42.580Z")
  }
]

// query to find user with email of "jbach@me.com"
Atlas atlas-kww38r-shard-0 [primary] test> db.users.findOne({email:'jbach@me.com'});
{
  _id: ObjectId("6678d8722f1685b605d736a9"),
  firstName: 'Johann',
  lastName: 'Bach',
  employeeId: '1007',
  email: 'jbach@me.com',
  dateCreated: ISODate("2024-06-24T02:22:42.580Z")
}

// query to find user with lastName of "Mozart"
Atlas atlas-kww38r-shard-0 [primary] test> db.users.findOne({lastName:'Mozart'});
{
  _id: ObjectId("6678d8722f1685b605d736ab"),
  firstName: 'Wolfgang',
  lastName: 'Mozart',
  employeeId: '1009',
  email: 'wmozart@me.com',
  dateCreated: ISODate("2024-06-24T02:22:42.580Z")
}

// query to find user with first name of Richard
Atlas atlas-kww38r-shard-0 [primary] test> db.users.findOne({firstName:'Richard'});
{
  _id: ObjectId("6678d8722f1685b605d736ad"),
  firstName: 'Richard',
  lastName: 'Wagner',
  employeeId: '1011',
  email: 'rwagner@me.com',
  dateCreated: ISODate("2024-06-24T02:22:42.580Z")
}

// query to find user with employeeId of "1010"
Atlas atlas-kww38r-shard-0 [primary] test> db.users.findOne({employeeId:'1010'});
{
  _id: ObjectId("6678d8722f1685b605d736ac"),
  firstName: 'Johannes',
  lastName: 'Brahms',
  employeeId: '1010',
  email: 'jbrahms@me.com',
  dateCreated: ISODate("2024-06-24T02:22:42.580Z")
}