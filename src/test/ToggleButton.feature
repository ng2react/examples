Feature: Toggle Button Parity
    Scenario: Initial Values Match
        Given I am on the toggle button page
        Then both buttons show the same value

    Scenario: Parent Updates Child
        Given I am on the toggle button page
        When I toggle the "Angular" button
        Then the "React" button matches the parent state
        And both buttons show the same value

    Scenario: Child Updates Parent
        Given I am on the toggle button page
        When I toggle the "React" button
        Then the "Angular" button matches the parent state
        And both buttons show the same value