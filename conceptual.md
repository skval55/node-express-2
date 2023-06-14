### Conceptual Exercise

Answer the following questions below:

- What is a JWT? 
- JSON Web Token. Commonly used for authentication.

- What is the signature portion of the JWT?  What does it do? 
- it is the last portion of the token and used to verify the authenticity of the token

- If a JWT is intercepted, can the attacker see what's inside the payload?
- Yes, the attacker can that is why you do not store very private or impotant info in payload like a password

- How can you implement authentication with a JWT?  Describe how it works at a high level.
- You can have implement authentication by first 
- 1. have user authentication by logging in or registering
- 2. validate user info against the server data
- 3. generate token
- 4. store token in local storage, cookie, headers ...
- 5. use stored token to authorize access to different things

- Compare and contrast unit, integration and end-to-end tests.
- Unit testing tests a certain unit or could say function(testing single function)
- Integation testing how small portion of things work together(testing a route)
- End-to-end testing is making a test case that works through full application

- What is a mock? What are some things you would mock?
- mock is a fake thing like when testing making fake api calls
- api calls are somthing you can want to make a mock of because you don't want to 
- charge your account with tons of api calls if you don't have to

- What is continuous integration?
- continuous integration is a software development practice that involves frequently integrating code changes from multiple developers 
- into a shared repository. 

- What is an environment variable and what are they used for?
- it is a variable defined in the operating systems enviroment
- these variables are used for configuration or runtime parameters
- examples incliude API keys, if it is a testing enviroment

- What is TDD? What are some benefits and drawbacks?
- TDD is Test Driven Development
- Benefits: Improves code quality, better design and structure, faster debugging
- Drawbacks: time consuming, learning curve, test maintenance

- What is the value of using JSONSchema for validation?
- it will check values and values before it breaks app with bad requests
- it will make the data consistant
- good form of documentaion as well

- What are some ways to decide which code to test?
- some things you want to test are critical and complex logic, edge cases, and error handling

- What does `RETURNING` do in SQL? When would you use it?
- `RETURNING` in sql defines what values will be returned when not using `SELECT`
- Example when updating job you can have it `RETURNING` title, salary, equity, company_handle.

- What are some differences between Web Sockets and HTTP?
- web sockets will send data to specific clients when any request is sent 
- because it is a persistant connection
- HTTP will send that data when refreshed and doesn't have persistant connection

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
