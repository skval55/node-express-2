- BUG #1: route POST "/auth/login" didn't have await infront of User.authenticate(username, password); so it would never wait to correctly gather data to see if user is admin
- added test to see if user who is admin can login and token will properly show if they are admin

- BUG #2: route PATCH "/user/:username" says user can update their own info but only admins can.
- I created a function in middleware/auth that checks if admin or curr user == searched user and if not then returns unauthorized error

- BUG #3: route GET '/users/:username' says it returns 404 if user not found 
- reason in if (!user) statement forgot to add `throw` before `new ExpressError("No such user", 404);` in models/users.js
- test added searching for invalid username checking if correct status code is returned

- BUG #4: route PATCH '/users/:username' you can update not-allowed-fields. test was passing because of BUG #2. 
- I added jsonschema to validate what can be sent on patch request and left the test the same

- BUG #5: in middleware/auth in authUser function it doesn't validate token signiture
- added `jwt.verify(token, SECRET_KEY);` to authUser function

- BUG #6: route DELETE '/users/:username' no `await` before calling User model
- added `await` before
- because it didn't have an await and the next line was hard coded to return `{ message: "deleted" }` the tests passed
- added test to see if will return 404 status code when user doesnt exist