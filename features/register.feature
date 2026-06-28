Feature: User Registration

Scenario: Register a new user successfully
  Given User opens the application
  When User navigate to Register page
  And User enter valid registration details
  Then User should be registered successfully