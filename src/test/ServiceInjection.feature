Feature: Service Injection Parity
    Scenario: React service injection component loads
        Given the service injection page is loaded
        Then the react component contains an input
        And the react component contains a button

    Scenario: Service function is called
        Given the service injection page is loaded
        When I enter the text "hello, cucumber"
        And I click the button
        Then the service was updated with "hello, cucumber"
