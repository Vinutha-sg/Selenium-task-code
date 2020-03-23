Feature: To Automate the given website

Scenario Outline: shop the paticular item from esite

Given navigate to the E-site
Then go to women category and apply filters
Then add a product to cart 
Then proceed to checkout
Then enter "<email>" and "<password>" to login
Then read the message from payment
Then quit the Browser

Examples:
|email|password|
|gvinutha12@gmail.com|yellow|