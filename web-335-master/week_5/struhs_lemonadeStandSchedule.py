"""
Name: Kylie Struhs
Date: 06/25/2024
File Name: struhs_lemonadeStandSchedule.py
Description: program to loop over tasks
"""

# list of tasks
tasks = ["juice lemons", "measure sugar", "buy ingredients", "put up sign", "set up cash drawer"]

"""
@method: open_stand
@description: prints tasks to console
@params: none
@returns: none
"""
def open_stand():
    for task in tasks:
        print(task)

# day of week array
days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

def output(day, task):
    task_str = ", ".join(tasks)
    return "On {0} we need to {1}".format(day,task_str)

"""
@method: daily_tasks
@description: prints daily tasks to console
@params: none
@returns: none
"""
def daily_tasks():
    for day in days: 
        if day == "Sunday" or day == "Saturday":
            print ("Day off")
        else:
            print(output(day, tasks))

# Call functions
print("List of Tasks")
open_stand()

print("Daily Schedule")
daily_tasks()


