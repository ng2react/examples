Feature: State Binding Parity
    Scenario: Two-way binding Down
        Given the "state-binding" page is loaded
        When the parent "2-Way" binding state is changed
        Then the child "2-Way" binding state in the React component should be updated

    Scenario: Two-way binding Up
        Given the "state-binding" page is loaded
        When the child "2-Way" binding state is changed
        Then the parent "2-Way" binding state should be updated

    Scenario: Optional Two-way binding Down
        Given the "state-binding" page is loaded
        When the parent "Optional 2-Way" binding state is changed
        Then the child "Optional 2-Way" binding state in the React component should be updated

    Scenario: Optional Two-way binding Up
        Given the "state-binding" page is loaded
        When the child "Optional 2-Way" binding state is changed
        Then the parent "Optional 2-Way" binding state should be updated

    Scenario: One-way binding Down
        Given the "state-binding" page is loaded
        When the parent "1-Way" binding state is changed
        Then the child "1-Way" binding state in the React component should be updated

    Scenario: One-way binding Up
        Given the "state-binding" page is loaded
        When the child "1-Way" binding state is changed
        Then the parent "1-Way" binding state should not be updated

    Scenario: Optional One-way binding Down
        Given the "state-binding" page is loaded
        When the parent "Optional 1-Way" binding state is changed
        Then the child "Optional 1-Way" binding state in the React component should be updated

    Scenario: Optional One-way binding Up
        Given the "state-binding" page is loaded
        When the child "Optional 1-Way" binding state is changed
        Then the parent "Optional 1-Way" binding state should not be updated

    Scenario: String binding Down
        Given the "state-binding" page is loaded
        When the parent "String" binding state is changed
        Then the child "String" binding state in the React component should be updated

    Scenario: String binding Up
        Given the "state-binding" page is loaded
        When the child "String" binding state is changed
        Then the parent "String" binding state should not be updated

    Scenario: Optional String binding Down
        Given the "state-binding" page is loaded
        When the parent "Optional String" binding state is changed
        Then the child "Optional String" binding state in the React component should be updated

    Scenario: Optional String binding Up
        Given the "state-binding" page is loaded
        When the child "Optional String" binding state is changed
        Then the parent "Optional String" binding state should not be updated

    