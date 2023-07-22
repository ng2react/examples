Feature: Non-Leaf Parity

    Can a non-leaf component be successfully converted, providing the leaf node exists

    Scenario: Input Exists
        Given the non-leaf page is loaded
        Then the input element exists
    
    Scenario: Leaf component is correctly inferred
        Given the non-leaf page is loaded
        When the input text is set to "Hello, Cucumber"
        Then the leaf component's text is equal to "Hello, Cucumber"