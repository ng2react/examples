Feature: Multiple Features Parity
    Scenario: React service injection component loads
        Given the "multiple-patterns" page is loaded
        Then the react component contains an input
        And the react component contains a button

    Scenario: Service function is called
        Given the "multiple-patterns" page is loaded
        When I enter the text "hello, cucumber"
        And I click the button
        Then the service was updated with "hello, cucumber"

    Scenario: Transclude works as expected
        Given the "multiple-patterns" page is loaded
        Then both transclude directives should have the same content

    Scenario: Leaf Input Exists
        Given the "multiple-patterns" page is loaded
        Then the input element exists

    Scenario: Leaf component is correctly inferred
        Given the "multiple-patterns" page is loaded
        When the input text is set to "Hello, Cucumber"
        Then the leaf component's text is equal to "Hello, Cucumber"

    Scenario: ToggleBtn Initial Values Match
        Given the "multiple-patterns" page is loaded
        Then both buttons show the same value

    Scenario: ToggleBtn Parent Updates Child
        Given the "multiple-patterns" page is loaded
        When I toggle the "Angular" button
        Then the "React" button matches the parent state
        And both buttons show the same value

    Scenario: ToggleBtn Child Updates Parent
        Given the "multiple-patterns" page is loaded
        When I toggle the "React" button
        Then the "Angular" button matches the parent state
        And both buttons show the same value