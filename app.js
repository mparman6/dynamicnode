// Problem: We need a simple way to look at a user's badge count and javascript points from a web browser
// Solution: Use node.js to perform the profile lookups and serve our templates via http

// Plan
// 1. Create a web server

// 2. Handle the http route GET / and POST /
  // if url = "/" && GET
  // show search
  // if url = "/" && POST
  // redirect to /:username

// 3. Handle the http route for Get /:username i.e: /parman
  // if url = "/..."
  // get JSON from Treehouse
    // on "end"
      // show profile
    // on "error"
      // show error

// 4. Function that handles the reading of files and merge in 
  // read from file and get a string
    // merge values into string