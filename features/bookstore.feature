Feature: Bookstore on ToolsQA

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the bookstore page
    When I write the book with the title <searchBox>
    Then I should see on the screen a book with the title <title>

    Examples:
      | searchBox         | title                        |
      | You               | You Don't Know JS            |
      | git               | Git Pocket Guide             |