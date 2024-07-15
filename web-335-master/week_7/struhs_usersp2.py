"""
Name: Kylie Struhs
Date: July 12 2024
File Name: struhs_users-2.py
Description: Code for Assignment 5.2
"""

# import the mongo client
from pymongo import MongoClient
import datetime

# connection string
client = MongoClient("mongodb+srv://web335_user:s3cret@bellevueuniversity.edz2jps.mongodb.net/?retryWrites=true&w=majority&appName=BellevueUniversity")

# configure a variable to access the web335DB
db = client['web335DB']

# create a new user document
john = {
    "firstName": "John",
    "lastName" : "Williams",
    "employeeId" : "1078",
    "email" : "john.williams@mail.me",
    "dateCreated" : datetime.datetime.utcnow()
}

# insert the document into the users collection
john_user_id = db.users.insert_one(john).inserted_id
print(john_user_id)

# prove document was inserted
print(db.users.find_one({"employeeId" : "1078"}))

# update user document
db.users.update_one(
{"employeeId": "1078"},
{
"$set": {
"email": "john.williams@me.com"
}
}
)
# prove the update worked
print(db.users.find_one({"employeeId": "1078"}))

# remove user document
result = db.users.delete_one({
"employeeId": "1078"
})

# Display the results of the query
print(result)

# Prove the delete worked by searching the collection for the deleted document
print(db.users.find_one({"employeeId": "1013"}))