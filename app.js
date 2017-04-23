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

const path = require('path');

// Init our app
const app = express();

// Serve our static files (css, js, images, etc.)
// This will tell Express to match any routes for files found in this folder and deliver the files directly to the browser. 
// This should be done before any other routes are defined and before the server is set up to listen.
// When Express receives a request for a route it is now checking to see whether such a file path exists in the static directory we defined. 
// If it does it delivers this directly to the browser with no need for us to add in any routes.
app.use(express.static(path.join(__dirname, 'public')));

// NO LONGER IN USE
// [START hello_world]
// Say hello!
app.get('/hello', (req, res) => {
   res.status(200).send('Hello, Lana Gruni Semi-Static!');
});
// [END hello_world]

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
