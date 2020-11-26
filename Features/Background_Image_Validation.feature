Feature: Background Image displayed in website feature

  Scenario Outline: Verify that when user opens JP Morgan website background image is displayed
    Given User navigates to Google Home page "<webpage>"
    When User search for "<search>"
    Then User clicks on JP Moran website link
    And JP Morgan website is opened
    Then Background Image is displayed to User
    
    Examples: 
    |webpage | search    |
    |google	 | JP Morgan |