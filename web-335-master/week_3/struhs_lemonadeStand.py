"""
    Name: Kylie Struhs
    Date: June 11 2024
    File Name: struhs_lemonadeStand.py
    In this hands-on project, you will be building a simple Python program that simulates a
        lemonade stand. You will create functions to calculate the cost of making lemonade and
        the profit from selling it.
        Instructions:
        1. Create a new Python program and name it <yourLastName>_lemonadeStand.py
        and add it to a folder named week_3 in your GitHub repository.
        2. Create a function named calculate_cost with two parameters: lemons_cost and
        sugar_cost. In the body of the function, return the total cost of making the
        lemonade.
        3. Create a function named calculate_profit with three parameters: lemons_cost,
        sugar_cost, and selling_price. In the body of the function, return the profit from
        selling the lemonade.
        4. Create variables to test each function. Use a variable to build a string for the
        results. Use the format: (cost of lemons) + (cost of sugar) = (total cost).
        5. Call each function passing in the variables you created in step 4 and print the results
        to the console using an output variable and string concatenation.
        Hints:
        • Remember to include file header and code comments.
        • Your program should use the print function to output the cost and profit
        calculations.
"""

# function to calculate total cost of lemonade
def calculate_cost(lemons_cost, sugar_cost):
    total_cost = lemons_cost + sugar_cost
    return total_cost

# function to calculate the profit
def calculate_profit(lemons_cost, sugar_cost, selling_price):
    total_cost = calculate_cost(lemons_cost, sugar_cost)
    profit = selling_price - total_cost
    return profit

# Variables for function
lemons_cost = 1.50
sugar_cost = 0.50
selling_price = 3.50


# Variable to hold values calculated from functions
total_cost = calculate_cost(lemons_cost, sugar_cost)
profit = calculate_profit(lemons_cost, sugar_cost, selling_price)

cost_result = "Cost of Lemons:({0:.2f}) + Cost of Sugar:({1:.2f}) = Total Cost: {2:.2f}".format(lemons_cost, sugar_cost, total_cost)
profit_result = "Profit = {0}. Selling Price of lemonade: {1}, Cost of ingredients: {2}".format(profit, selling_price, total_cost)

# Print outputs
print(cost_result)
print(profit_result)
