Feature: Home Page

    Feature Login page will work depending on the user credentials.

    Scenario: Success Page Load
        When user navigates to my project page
        Then the user will be able to see the Turista logo
        And User will be able to see the input box for name


        Given user navigates to my project page
    Scenario: Name Available
        When User will be able to enter the name as "John"
        Then User will be able to see the first name as "John"


    Scenario: Email Available
        When user navigates to my project page
        And User able to enter the email as "John@gmail.com"
        Then User able to see the email as "John@gmail.com"


    Scenario: Subject Available
        When user navigates to my project page
        And User able to enter the subject as "something"
        Then User able to see the subject as "something"

    Scenario: Message Available
        When user navigates to my project page
        And User able to enter the message as "Hello"
        Then User able to see the message as "Hello"

   
    

    

        

# Create Test Case to
# 1. verify URL
# 2. Verify Email with validation
# 3. Verify Subject
# 4. Verify Message
# 5. Verify if contact details are correct
