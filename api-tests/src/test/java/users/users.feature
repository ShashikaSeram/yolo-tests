Feature: Test users GET, POST and DELETE

  Background:
    * url 'https://gorest.co.in'
    * def headerData = {Accept: 'application/json' , Content-Type: 'application/json' , Authorization: 'Bearer 67ac373930d4f90d2e83985373b6b5eda93d16ef244de9633dadd3ea8c4fa6ed'}
    * headers headerData
    * def newUserBody = read('inputRequestBody.json')

  Scenario: Get all users and validate 200 status code
    Given path 'public/v2/users'
    When method get
    Then status 200
      #Verify the total number of occurrences of id in the response is equal to 10
    * def ids = $..id
    * assert ids.length == 10

  Scenario: Create new user, then verify created user details
    Given path 'public/v2/users'
    And request newUserBody
    When method post
    Then status 201
    #Verify created user details matches with the expected result
    * def expectedOutput = read('expectedResponse.json')
    And match response == expectedOutput

    * def id = response.id
    Given path 'public/v2/users/' + id
    * headers headerData
    When method get
    Then status 200
    #Verify the requested user details matches with the respond body by email
    * def email = response.email
    * assert email == newUserBody.email

    Given path 'public/v2/users/' + id
    * headers headerData
    When method delete
    Then status 204

  Scenario: Delete a created user and validate user doesn't exist
    Given path 'public/v2/users'
    And request newUserBody
    When method post
    Then status 201
    * def id = response.id

    Given path 'public/v2/users/' + id
    * headers headerData
    When method delete
    Then status 204
    
    Given path 'public/v2/users/' + id
    * headers headerData
    When method get
    Then status 404

  Scenario Outline: Enter invalid user details, then validate 422 status code and response body
    * def invalidUSer =
    """
    {
    "name":"<name>",
    "email":"<email>",
    "gender":"<gender>",
    "status":"<status>"
    }
    """
    Given path 'public/v2/users'
    And request invalidUSer
    When method post
    Then status 422
    And match response == [{"field":"<field>","message":"<message>"}]

    Examples:
      | name   | email             | gender | status   | field  | message                               |
      |        | harry29@gmail.com | male   | active   | name   | can't be blank                        |
      | Daniel |                   | male   | active   | email  | can't be blank                        |
      | Daniel | harry29@gmail.com |        | active   | gender | can't be blank, can be male of female |
      | Daniel | harry29@gmail.com | male   |          | status | can't be blank                        |
      | Daniel | harry29gmail.com  | male   | inactive | email  | is invalid                            |
      | Daniel | harry29@gmail.com | m      | inactive | gender | can't be blank, can be male of female |
      | Daniel | harry29@gmail.com | male   | no       | status | can't be blank                        |





