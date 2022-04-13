Feature: Profile on ToolsQA

  Scenario Outline: As a user, I can see my profile

    Given I am on the profile page after I login with <username> and <password>
    When I search a book with the title <searchBox>
    Then I should see on the screen the book <title>

    Examples:
      | username | password             | searchBox         | title                      |
      | Ester3   | #es78TER             | sp                | Speaking JavaScript        |
      | Ester3   | #es78TER             | git               | Git Pocket Guide           |