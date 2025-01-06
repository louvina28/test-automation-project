Feature: Webtrends application tests for login

  Scenario Outline: Login with valid credentials
    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>
    
    
    Examples:
      | email                                  | password    | 
      | richardeames123+pubeta@gmail.com       | Corona2024! |

  Scenario Outline: Login with invalid credentials
    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>
    Then I should not be able to login to the application

    Examples:
      | email                                  | password    | 
      | richardeames123+pubeta@gmail.com       | abc         |

  Scenario Outline: Forgot Password Process
    Given I am on the webtrends website home page
    When I click on the Forgot password link
    And I will enter my email address <email>
    And I will click on the Request reset link
    Then I should see a confirmation message for the reset link

    Examples:
      | email                             |
      | richardeames123+pubeta@gmail.com  |

    Scenario: login using SSO
    Given I am on the webtrends website home page
    When I click on "Sign in with SSO"
    Then I enter my valid credentials on the SSO page
    


 