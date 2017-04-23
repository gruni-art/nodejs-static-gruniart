// Copyright 2017, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// We start with express
const express = require('express');

// We require semi-static
const semiStatic = require('./semi-static.js'); // NOTE the npm version currently has a bug, so use our custom version instead

// Init our app
const app = express();

// Serve our static files (css, js, images, etc.)
// semi-static doesn't do this for us.
app.use(express.static(__dirname + "/public"));

// Tell express to use pug
app.set("view engine", "pug");

// If you're using express out of the box, you can just
// do this. And it will assume you put your pug files
// into 'views/static' and will look for an 'index.pug' file.
// You can also pass it a static context object,
// that will get passed to the template engine
app.get("*", semiStatic({
    passReq: true,
    context: {static: true}
}));

// NO LONGER IN USE
// [START hello_world]
// Say hello!
// app.get('/', (req, res) => {
//   res.status(200).send('Hello, Lana Gruni Semi-Static!');
// });
// [END hello_world]

// we can still have a normal 404 at the end
// because it will only do something if there's
// a path that matches.
app.all("*", function (req, res) {
    res.status(404).send("not found");
});

if (module === require.main) {
  // [START server]
  // Start the server
  const server = app.listen(process.env.PORT || 8081, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
  // [END server]
}

module.exports = app;
