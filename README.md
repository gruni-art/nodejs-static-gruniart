### NodeJS Static

Based on 'Semi-static' at https://www.npmjs.com/package/semi-static

Simple, lazy way to serve a directory of semi-static pages in express.js. Handy for building quick "static" pages inside an otherwise "dynamic" app.

Include the following node_modules in package.json:

- semi-static; which depends on express, pug, and jshint

### Using Google Cloud Shell

Cloud Shell is a built-in command line tool for the console. We're going to use Cloud Shell to deploy our app.

1. Using Google Cloud Shell

Open the Google Cloud Shell on the Web console using the [>_] button.

You will be prompted as follows:

```javascript
Welcome to Cloud Shell! Type "help" to get started.
lana_gruni@long-temple-164810:~$
```

where 'lana_gruni' is the user with which you are logged in, and 'long-temple-164810' is the project name.

2. Clone the sample code

Use Cloud Shell to clone and navigate to the code. The sample code is cloned from your project repository to the Cloud Shell.

In Cloud Shell enter:

```javascript
CLONEDTODIR=~/src/long-temple-164810/nodejs_mvms_quickstart-2017-04-23-12-50
```

Clone a sample repository:

```javascript
git clone https://github.com/gruni-art/nodejs-static-gruniart.git $CLONEDTODIR
```

You will be prompted with:

```javascript
Cloning into '/home/lana_gruni/src/long-temple-164810/nodejs_mvms_quickstart-2017-04-23-12-50'...
remote: Counting objects: 1540, done.
remote: Compressing objects: 100% (79/79), done.
remote: Total 1540 (delta 67), reused 21 (delta 21), pack-reused 1438
Receiving objects: 100% (1540/1540), 460.51 KiB | 0 bytes/s, done.
Resolving deltas: 100% (1071/1071), done.
```

Switch to the tutorial directory:

```javascript
cd $CLONEDTODIR
```

Or, if you have cloned into the directory before, pull the sample repository instead:

```javascript
git pull
```

You will be prompted with:

```javascript
lana_gruni@long-temple-164810:~/src/long-temple-164810/nodejs_mvms_quickstart-2017-04-23-12-50$
```

Testing your app

1. Install npm packages

We will install the npm packages on Cloud Shell in order to test run the Node.js app.

To install npm packages, enter:

```javascript
npm install --production
```

2 Test your app on Cloud Shell

Cloud Shell lets you test your app before deploying to make sure it's running as intended, just like debugging on your local machine.

To test your app enter:

```javascript
npm start
```

You will be prompted with:

```javascript
> nodejs-getting-started@1.0.0 start /home/lana_gruni/src/long-temple-164810/nodejs_mvms_quickstart-2017-04-23-12-50
> node app.js

App listening on port 8081
```

3 Preview your app with "Web preview"

Your app is now running on Cloud Shell. You can access the app by using "Web preview" [^]  to connect to port 8081.

The URL will be something like https://8081-dot-2352367-dot-devshell.appspot.com/?authuser=0

The [^] button is found along the menu bar along the Cloud Shell.

4 Terminating the preview instance

Terminate the instance of the application by pressing Ctrl+C in the Cloud Shell.

Last steps

1 Deploying with Cloud Shell

You can use Cloud Shell to deploy your app. To deploy your app enter:

```javascript
gcloud app deploy --project long-temple-164810
```

You will be prompted with:

```javascript
You are about to deploy the following services:
 - long-temple-164810/default/20170422t170830 (from [/home/lana_gruni/src/long-temple-164810/nodejs_mvms_quickstart-2017-04-23-12-50/app.yaml])
     Deploying to URL: [https://long-temple-164810.appspot.com]

Do you want to continue (Y/n)?  
```

Confirm with: Y <followed by ENTER>

You will be prompted with:

```javascript
...
DONE
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Updating service [default]...done.                                                                                                                                         
Deployed service [default] to [https://long-temple-164810.appspot.com]

You can stream logs from the command line by running:
  $ gcloud app logs tail -s default

To view your application in the web browser run:
  $ gcloud app browse
lana_gruni@long-temple-164810:~/src/long-temple-164810/nodejs_mvms_quickstart-2017-04-23-12-50$ 
```

The app will be deployed.

2 Visit your app. The first time, this may take a while!

Open a web browser and browse to http://long-temple-164810.appspot.com/

The page will show: 'Hello, Lana Gruni Semi-Static!'

Congratulations! Your app has been deployed. The default URL of your app is long-temple-164810.appspot.com  Click the URL to visit it.

NOTE: The app is now running in the cloud. We will show you how to disable the app to avoid potential charges.

3 View your app's status

You can check in on your app by monitoring its status on the App Engine dashboard.

Open the menu on the left side of the console and select App Engine.

Congratulations!

You have successfully deployed an App Engine application! Here are some next steps:

1 Disable your tutorial project

You should disable your project to avoid additional charges.