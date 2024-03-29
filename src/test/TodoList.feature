Feature: Todo List Parity

    Scenario: Lists appear the same
        Given the "todo-list" page is loaded
        Then I should see the "React" list
        And I should see the "Angular" list
        And both lists contain the same items

    Scenario: Can add a todo item
        Given the "todo-list" page is loaded
        When I add a todo item "test1" to the "React" list
        Then I should see the todo item "test1" in the "React" list
        And I should see the todo item "test1" in the "Angular" list

    Scenario: Can remove a todo item
        Given the "todo-list" page is loaded
        And the list is not empty
        When I remove an item from the "React" list
        Then the item is removed from the "React" list
        And the item is removed from the "Angular" list
