Feature: Controller Injection Parity
    Scenario: Parent Updates Child
        Given the controller injection page is loaded
        When the "name" on the "Parent" component is set to "Mr Pickle"
        And the "status" on the "Parent" component is set to "Pickled"
        Then the "name" on the "React" component is equal to "Mr Pickle"
        And the "status" on the "React" component is equal to "Pickled"


    Scenario: Controller Properties update
        Given the controller injection page is loaded
        When the "name" on the "React" component is set to "Mr React"
        Then the "name" on the "Parent" component is equal to "Mr React"

    Scenario: Controller callbacks called
        Given the controller injection page is loaded
        When the "status" on the "React" component is set to "Reacted"
        And the update button is clicked on the "React" component
        Then the "status" on the "Parent" component is equal to "Reacted"