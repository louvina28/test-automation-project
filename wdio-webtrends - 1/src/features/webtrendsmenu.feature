Feature: Webtrends Menu Bar Tests

  Scenario Outline: To check the menu bar navigation
    Given I am on the webtrends website home page
    And I login with webtrends "<email>" and "<password>"
    When I click on the dashboard menu
    Then I verify the dashboard name is displayed correctly

    Examples:
      | email                              | password    |
      | richardeames123+pubeta@gmail.com   | Corona2024! |
