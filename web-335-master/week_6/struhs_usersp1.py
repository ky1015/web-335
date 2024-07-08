"""
Name: Kylie Struhs
Date: July 7 2024
File Name: struhs_users_p1.py
Description: Work for Exercise 6.3
"""

# import the mongo client
from pymongo import MongoClient
import datetime

# connection string
client = MongoClient("mongodb+srv://web335_user:s3cret@bellevueuniversity.edz2jps.mongodb.net/?retryWrites=true&w=majority&appName=BellevueUniversity")

# configure a variable to access the web335DB
db = client['web335DB']

# code to display all documents in the collection
print("All Documents:")
cursor = db.users.find({}, {"firstName": 1, "lastName": 1})
for user in cursor:
    print(user)

# code to display document where employeeId is 1011
print(db.users.find_one({"employeeId": "1011"}))

# code to display document where lastName is Mozart
print(db.users.find_one({"lastName": "Mozart"}))