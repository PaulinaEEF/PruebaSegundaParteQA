Feature: Login on ToolsQA

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | Invalid username or password!  |
      | Ester    | hola                 | Invalid username or password!  |