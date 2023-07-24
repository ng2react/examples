Feature: Toggle Button Parity
    Scenario: Initial Values Match
        Given the "toggle-btn" page is loaded
        Then both buttons show the same value

    Scenario: Parent Updates Child
        Given the "toggle-btn" page is loaded
        When I toggle the "Angular" button
        Then the "React" button matches the parent state
        And both buttons show the same value

    Scenario: Child Updates Parent
        Given the "toggle-btn" page is loaded
        When I toggle the "React" button
        Then the "Angular" button matches the parent state
        And both buttons show the same value