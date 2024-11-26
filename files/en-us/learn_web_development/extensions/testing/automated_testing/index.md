---
title: Introduction to automated testing
slug: Learn_web_development/Extensions/Testing/Automated_testing
page-type: learn-module-chapter
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}

Manually running tests on several browsers and devices, several times per day, can get tedious, and time-consuming. To handle this efficiently, you should become familiar with automation tools. In this article, we look at what is available, how to use task runners, and how to use the basics of commercial browser test automation apps such as Sauce Labs, BrowserStack, and TestingBot.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Familiarity with the core <a href="/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/en-US/docs/Learn_web_development/Core/Styling_basics">CSS</a>, and <a href="/en-US/docs/Learn_web_development/Core/Scripting">JavaScript</a> languages;
        an idea of the high level <a href="/en-US/docs/Learn_web_development/Extensions/Testing/Introduction">principles of cross-browser testing</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To provide an understanding of what automated testing entails, how it can make your life easier, and how to make use of some of the commercial products that make things easier.
      </td>
    </tr>
  </tbody>
</table>

## Automation makes things easy

Throughout this module we have detailed loads of different ways in which you can test your websites and apps, and explained the sort of scope your cross-browser testing efforts should have in terms of what browsers to test, accessibility considerations, and more. Sounds like a lot of work, doesn't it?

We agree — testing all the things we've looked at in previous articles manually can be a real pain. Fortunately, there are tools to help us automate some of this pain away. There are two main ways in which we can automate the tests we've been talking about in this module:

1. Use a task runner such as [Grunt](https://gruntjs.com/) or [Gulp](https://gulpjs.com/), or [npm scripts](https://docs.npmjs.com/misc/scripts/) to run tests and clean up code during your build process. This is a great way to perform tasks like linting and minifying code, adding in CSS prefixes or transpiling nascent JavaScript features for maximum cross-browser reach, and so on.
2. Use a browser automation system like [Selenium](https://www.selenium.dev/) to run specific tests on installed browsers and return results, alerting you to failures in browsers as they crop up. Commercial cross-browser testing apps like [Sauce Labs](https://saucelabs.com/) and [BrowserStack](https://www.browserstack.com/) are based on Selenium, but allow you to access their set up remotely using an interface, saving you the hassle of setting up your own testing system.

We will look at how to set up your own Selenium-based testing system in the next article. In this article, we'll look at how to set up a task runner, and use the basic functionality of commercial systems like the ones mentioned above.

> [!NOTE]
> The above two categories are not mutually exclusive. It is possible to set up a task runner to access a service like Sauce Labs, or LambdaTest via an API, run cross browser tests, and return results. We will look at this below as well.

## Using a task runner to automate testing tools

As we said above, you can drastically speed up common tasks such as linting and minifying code by using a task runner to run everything you need to run automatically at a certain point in your build process. For example, this could be every time you save a file, or at some other point. Inside this section we'll look at how to automate task running with Node and Gulp, a beginner-friendly option.

### Setting up Node and npm

Most tools these days are based on {{Glossary("Node.js")}}, so you'll need to install it along with its counterpart package manager, [`npm`](https://www.npmjs.com/):

1. The easiest way to install and update Node.js and `npm` is via a node version manager: Follow the instructions at [Installing Node](/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#installing_node) to do so.
2. Make sure to [test that your installation was successful](/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#testing_your_nodejs_and_npm_installation) before continuing.
3. If you previously installed Node.js/`npm`, you should update them to their latest versions. This can be done by using the node version manager to install the latest LTS versions (refer again to the linked instructions above).

To start using Node/npm-based packages on your projects, you need to set up your project directories as npm projects. This is easy to do.

For example, let's first create a test directory to allow us to play without fear of breaking anything.

1. Create a new directory somewhere sensible using your file manager UI, or, on a command line, by navigating to the location you want and running the following command:

   ```bash
   mkdir node-test
   ```

2. To make this directory an npm project, you just need to go inside your test directory and initialize it, with the following:

   ```bash
   cd node-test
   npm init
   ```

3. This second command will ask you many questions to find out the information required to set up the project; you can just select the defaults for now.
4. Once all the questions have been asked, it will ask you if the information entered is OK. Type `yes` and press Enter/Return and npm will generate a `package.json` file in your directory.

This file is basically a config file for the project. You can customize it later, but for now it'll look something like this:

```json
{
  "name": "node-test",
  "version": "1.0.0",
  "description": "Test for npm projects",
  "main": "index.js",
  "scripts": {
    "test": "test"
  },
  "author": "Chris Mills",
  "license": "MIT"
}
```

With this, you are ready to move on.

### Setting up Gulp automation

Let's look at setting up Gulp and using it to automate some testing tools.

1. To begin with, create a test npm project using the procedure detailed at the bottom of the previous section.
   Also, update the `package.json` file with the line: `"type": "module"` so that it'll look something like this:

   ```json
   {
     "name": "node-test",
     "version": "1.0.0",
     "description": "Test for npm projects",
     "main": "index.js",
     "scripts": {
       "test": "test"
     },
     "author": "Chris Mills",
     "license": "MIT",
     "type": "module"
   }
   ```

2. Next, you'll need some sample HTML, CSS and JavaScript content to test your system on — make copies of our sample [index.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/index.html), [main.js](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/main.js), and [style.css](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/style.css) files in a subfolder with the name `src` inside your project folder.
   You can try your own test content if you like, but bear in mind that such tools won't work on internal JS/CSS — you need external files.
3. First, install gulp globally (meaning, it will be available across all projects) using the following command:

   ```bash
   npm install --global gulp-cli
   ```

4. Next, run the following command inside your npm project directory root to set up gulp as a dependency of your project:

   ```bash
   npm install --save-dev gulp
   ```

5. Now create a new file inside your project directory called `gulpfile.mjs`. This is the file that will run all our tasks. Inside this file, put the following:

   ```js
   import gulp from "gulp";

   export default function (cb) {
     console.log("Gulp running");
     cb();
   }
   ```

   This requires the `gulp` module we installed earlier, and then exports a default task that does nothing except for printing a message to the terminal — this is useful for letting us know that Gulp is working. Each gulp task is exported in the same basic format — `exports.taskName = taskFunction`. Each function takes one parameter — a callback to run when the task is completed.

6. You can run your gulp's default task with the following command — try this now:

   ```bash
   gulp
   ```

### Adding some real tasks to Gulp

To add some real tasks to Gulp, we need to think about what we want to do. A reasonable set of basic functionalities to run on our project is as follows:

- html-tidy, css-lint, and js-hint to lint and report/fix common HTML/CSS/JS errors (see [gulp-htmltidy](https://www.npmjs.com/package/gulp-htmltidy), [gulp-csslint](https://www.npmjs.com/package/gulp-csslint), [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)).
- Autoprefixer to scan our CSS and add vendor prefixes only where needed (see [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)).
- babel to transpile any new JavaScript syntax features to traditional syntax that works in older browsers (see [gulp-babel](https://www.npmjs.com/package/gulp-babel)).

See the links above for full instructions on the different gulp packages we are using.

To use each plugin, you need to first install it via npm, then require any dependencies at the top of the `gulpfile.js` file, then add your test(s) to the bottom of it, and finally export the name of your task to be available via gulp's command.

#### html-tidy

1. Install using the following line:

   ```bash
   npm install --save-dev gulp-htmltidy
   ```

   > **Note:** `--save-dev` adds the package as a dependency to your project. If you look in your project's `package.json` file, you'll see an entry for it in the `devDependencies` property.

2. Add the following dependency to `gulpfile.js`:

   ```js
   import htmltidy from "gulp-htmltidy";
   ```

3. Add the following test to the bottom of `gulpfile.js`:

   ```js
   export function html() {
     return gulp
       .src("src/index.html")
       .pipe(htmltidy())
       .pipe(gulp.dest("build"));
   }
   ```

4. Change the default export to:

   ```js
   export default html;
   ```

Here we are grabbing our development `index.html` file with `gulp.src()`, which allows us to grab a source file to do something with.

We next use the `pipe()` function to pass that source to another command to do something else with. We can chain as many of these together as we want. We first run `htmltidy()` on the source, which goes through and fixes errors in our file. The second `pipe()` function writes the output HTML file to the `build` directory.

In the input version of the file, you may have noticed that we put an empty {{htmlelement("p")}} element; htmltidy has removed this by the time the output file has been created.

#### Autoprefixer and css-lint

1. Install using the following lines:

   ```bash
   npm install --save-dev gulp-autoprefixer
   npm install --save-dev gulp-csslint
   ```

2. Add the following dependencies to `gulpfile.js`:

   ```js
   import autoprefixer from "gulp-autoprefixer";
   import csslint from "gulp-csslint";
   ```

3. Add the following test to the bottom of `gulpfile.js`:

   ```js
   export function css() {
     return gulp
       .src("src/style.css")
       .pipe(csslint())
       .pipe(csslint.formatter("compact"))
       .pipe(
         autoprefixer({
           cascade: false,
         }),
       )
       .pipe(gulp.dest("build"));
   }
   ```

4. Add the following property to `package.json`:

   ```json
   "browserslist": [
     "last 5 versions"
   ]
   ```

5. Change the default task to:

   ```js
   export default gulp.series(html, css);
   ```

Here we grab our `style.css` file, run csslint on it (which outputs a list of any errors in your CSS to the terminal), then runs it through autoprefixer to add any prefixes needed to make nascent CSS features run in older browsers. At the end of the pipe chain, we output our modified prefixed CSS to the `build` directory. Note that this only works if csslint doesn't find any errors — try removing a curly brace from your CSS file and re-running gulp to see what output you get!

#### js-hint and babel

1. Install using the following lines:

   ```bash
   npm install --save-dev gulp-babel @babel/preset-env
   npm install --save-dev @babel/core
   npm install jshint gulp-jshint --save-dev
   ```

2. Add the following dependencies to `gulpfile.js`:

   ```js
   import babel from "gulp-babel";
   import jshint from "gulp-jshint";
   ```

3. Add the following test to the bottom of `gulpfile.js`:

   ```js
   export function js() {
     return gulp
       .src("src/main.js")
       .pipe(jshint())
       .pipe(jshint.reporter("default"))
       .pipe(
         babel({
           presets: ["@babel/env"],
         }),
       )
       .pipe(gulp.dest("build"));
   }
   ```

4. Change the default task to:

   ```js
   export default gulp.series(html, css, js);
   ```

Here we grab our `main.js` file, run `jshint` on it and output the results to the terminal using `jshint.reporter`; we then pass the file to babel, which converts it to old style syntax and outputs the result into the `build` directory. Our original code included a [fat arrow function](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), which babel has modified into an old style function.

#### Further ideas

Once this is all set up, you can run the `gulp` command inside your project directory, and you should get an output like this:

![Output in a code editor where lines show the time tasks start or finish, the task name, and the duration of 'Finished' tasks.](gulp-output.png)

You can then try out the files output by your automated tasks by looking at them inside the `build` directory, and loading `build/index.html` in your web browser.

If you get errors, check that you've added all the dependencies and the tests as shown above; also try commenting out the HTML/CSS/JavaScript code sections and then rerunning gulp to see if you can isolate what the problem is.

Gulp comes with a `watch()` function that you can use to watch your files and run tests whenever you save a file. For example, try adding the following to the bottom of your `gulpfile.js`:

```js
export function watch() {
  gulp.watch("src/*.html", html);
  gulp.watch("src/*.css", css);
  gulp.watch("src/*.js", js);
}
```

Now try entering the `gulp watch` command into your terminal. Gulp will now watch your directory, and run the appropriate tasks whenever you save a change to an HTML, CSS, or JavaScript file.

> [!NOTE]
> The `*` character is a wildcard character — here we're saying "run these tasks when any files of these types are saved. You could also use wildcards in your main tasks, for example `gulp.src('src/*.css')` would grab all your CSS files and then run piped tasks on them.

There's a lot more you can do with Gulp. The [Gulp plugin directory](https://gulpjs.com/plugins/) has literally thousands of plugins to search through.

### Other task runners

There are many other task runners available. We certainly aren't trying to say that Gulp is the best solution out there, but it works for us and it is fairly accessible to beginners. You could also try using other solutions:

- Grunt works in a very similar way to Gulp, except that it relies on tasks specified in a config file, rather than using written JavaScript. See [Getting started with Grunt for more details.](https://gruntjs.com/getting-started)
- You can also run tasks directly using npm scripts located inside your `package.json` file, without needing to install any kind of extra task runner system. This works on the premise that things like Gulp plugins are basically wrappers around command line tools. So, if you can work out how to run the tools using the command line, you can then run them using npm scripts. It is a bit trickier to work with, but can be rewarding for those who are strong with their command line skills. [Why npm scripts?](https://css-tricks.com/why-npm-scripts/) provides a good introduction with a good deal of further information.

## Using commercial testing services to speed up browser testing

Now let's look at commercial third-party browser testing services and what they can do for us.

When you use these kinds of services, you provide a URL of the page you want to test along with information, such as what browsers you want it tested in. The app then configures a new VM with the OS and browser you specified, and returns the test results in the form of screenshots, videos, log files, text, etc. This is very useful, and way more convenient than having to set up all the OS/browser combinations by yourself.

You can then step up a gear, using an API to access functionality programmatically, which means that such apps can be combined with task runners, such as your own local Selenium environments and others, to create automated tests.

> [!NOTE]
> There are other commercial browser testing systems available but in this article, we'll focus on BrowserStack, Sauce Labs, and TestingBot. We're not saying that these are necessarily the best tools available, but they are good ones that are simple for beginners to get up and running with.

### BrowserStack

#### Getting started with BrowserStack

To get started:

1. Create a [BrowserStack trial account](https://www.browserstack.com/users/sign_up).
2. Sign in. This should happen automatically after you verify your email address.
3. Click the _Live_ link in the top nav menu to go to Live Manual Testing.

#### The basics: Manual tests

The BrowserStack Live dashboard allows you to choose what device and browser you want to test on — platforms on the left, devices on the right. Select a device to see the choice of browsers available on that device.

![Test Choices](browserstack-test-choices-sized.png)

Clicking on one of those browser icons will load up your choice of platform, device, and browser — choose one now, and give it a try.

![Test Devices](browserstack-test-device-sized.png)

You can enter URLs into the address bar, scroll up and down by dragging with the mouse, and use appropriate gestures (for example, pinch/zoom, two fingers to scroll) on the touchpads of supporting devices like MacBooks. Not all features are available on all devices.

You'll also see a menu that allows you to control the session.

![Test Menu](browserstack-test-menu-sized.png)

The available features vary depending on what browser is loaded, and can include controls for:

- Displaying information on the current browser
- Switching to other browsers
- Testing localhost URLs
- Setting zoom level and toggling orientation
- Saving and loading bookmarks
- Capturing/annotating screenshots and filing bug reports
- Accessing browser DevTools
- Changing reported location
- Throttling the network
- Accessing screen readers

#### Advanced: The BrowserStack API

BrowserStack also has a [restful API](https://www.browserstack.com/docs/automate/api-reference/selenium/introduction) that allows you to programmatically retrieve details of your account plan, sessions, builds, etc.

Let's have a brief look at how we'd access the API using Node.js.

1. First, set up a new npm project to test this out, as detailed in [Setting up Node and npm](#setting_up_node_and_npm). Use a different directory name than before, like `bstack-test` for example.
2. Create a new file inside your project root called `call_bstack.js` and give it the following content:

   ```js
   const axios = require("axios");

   const bsUser = "BROWSERSTACK_USERNAME";
   const bsKey = "BROWSERSTACK_ACCESS_KEY";
   const baseUrl = `https://${bsUser}:${bsKey}@www.browserstack.com/automate/`;

   function getPlanDetails() {
     axios.get(`${baseUrl}plan.json`).then((response) => {
       console.log(response.data);
     });
     /* Response:
       {
         automate_plan: <string>,
         terminal_access: <string>.
         parallel_sessions_running: <int>,
         team_parallel_sessions_max_allowed: <int>,
         parallel_sessions_max_allowed: <int>,
         queued_sessions: <int>,
         queued_sessions_max_allowed: <int>
       }
       */
   }

   getPlanDetails();
   ```

3. Replace the placeholders for BrowserStack username and access key with your actual values. These can be retrieved from your [BrowserStack Account & Profile Details](https://www.browserstack.com/accounts/profile/details), under the _Authentication & Security_ section.
4. Install the [axios](https://www.npmjs.com/package/axios) module we are using in the code to handle sending HTTP requests by running the following command in your terminal (we chose axios because it is simple, popular, and well-supported):

   ```bash
   npm install axios
   ```

5. Make sure your JavaScript file is saved, and run it by executing the following command in your terminal. You should see an object printed to the terminal containing your BrowserStack plan details.

   ```bash
   node call_bstack
   ```

Below we've also provided some other ready-made functions you might find useful when working with the BrowserStack restful API.

This function returns summary details of all automated builds previously created (see the next article for [BrowserStack automated test details](/en-US/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#browserstack)):

```js
function getBuilds() {
  axios.get(`${baseUrl}builds.json`).then((response) => {
    console.log(response.data);
  });

  /* Response:
  [
    {
      automation_build: {
        name: <string>,
        hashed_id: <string>,
        duration: <int>,
        status: <string>,
        build_tag: <string>,
        public_url: <string>
      }
    },
    {
      automation_build: {
        name: <string>,
        hashed_id: <string>,
        duration: <int>,
        status: <string>,
        build_tag: <string>,
        public_url: <string>
      }
    },
    // …
  ]
  */
}
```

This function returns details on the specific sessions for a particular build:

```js
function getSessionsInBuild(build) {
  const buildId = build.automation_build.hashed_id;
  axios.get(`${baseUrl}builds/${buildId}/sessions.json`).then((response) => {
    console.log(response.data);
  });
  /* Response:
  [
    {
      automation_session: {
        name: <string>,
        duration: <int>,
        os: <string>,
        os_version: <string>,
        browser_version: <string>,
        browser: <string>,
        device: <string>,
        status: <string>,
        hashed_id: <string>,
        reason: <string>,
        build_name: <string>,
        project_name: <string>,
        logs: <string>,
        browser_url: <string>,
        public_url: <string>,
        appium_logs_url: <string>,
        video_url: <string>,
        browser_console_logs_url: <string>,
        har_logs_url: <string>,
        selenium_logs_url: <string>
      }
    },
    {
      automation_session: {
        // …
      }
    },
    // …
  ]
  */
}
```

The following function returns the details for one particular session:

```js
function getSessionDetails(session) {
  const sessionId = session.automation_session.hashed_id;
  axios.get(`${baseUrl}sessions/${sessionId}.json`).then((response) => {
    console.log(response.data);
  });
  /* Response:
  {
    automation_session: {
      name: <string>,
      duration: <int>,
      os: <string>,
      os_version: <string>,
      browser_version: <string>,
      browser: <string>,
      device: <string>,
      status: <string>,
      hashed_id: <string>,
      reason: <string>,
      build_name: <string>,
      project_name: <string>,
      logs: <string>,
      browser_url: <string>,
      public_url: <string>,
      appium_logs_url: <string>,
      video_url: <string>,
      browser_console_logs_url: <string>,
      har_logs_url: <string>,
      selenium_logs_url: <string>
    }
  }
  */
}
```

#### Advanced: Automated tests

We'll cover [running automated BrowserStack tests](/en-US/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#browserstack) in the next article.

### Sauce Labs

#### Getting started with Sauce Labs

Let's get started with a Sauce Labs Trial.

1. Create a Sauce Labs trial account.
2. Sign in. This should happen automatically after you verify your email address.

#### The basics: Manual tests

The [Sauce Labs dashboard](https://app.saucelabs.com/dashboard/manual) has a lot of options available on it. For now, make sure you are on the _Manual Tests_ tab.

1. Click _Start a new manual session_.
2. In the next screen, type in the URL of a page you want to test (use <https://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box-fixed.html>, for example), then choose a browser/OS combination you want to test by using the different buttons and lists. There is a lot of choice, as you'll see!![select sauce manual session](sauce-manual-session.png)
3. When you click Start session, a loading screen will then appear, which spins up a virtual machine running the combination you chose.
4. When loading has finished, you can then start to remotely test the website running in the chosen browser.![Sauce test running](sauce-test-running.png)
5. From here you can see the layout as it would look in the browser you are testing, move the mouse around and try clicking buttons, etc. The top menu allows you to:

   - Stop the session
   - Give someone else a URL so they can observe the test remotely.
   - Copy text/notes to a remote clipboard.
   - Take a screenshot.
   - Test in full screen mode.

Once you stop the session, you'll return to the Manual Tests tab, where you'll see an entry for each of the previous manual sessions you started. Clicking on one of these entries shows more data for the session. In here you can download any screenshots you took, watch a video of the session, view data logs, and more.

> [!NOTE]
> This is already very useful, and way more convenient than having to set up all these emulators and virtual machines by yourself.

#### Advanced: The Sauce Labs API

Sauce Labs has a [restful API](https://docs.saucelabs.com/dev/api/) that allows you to programmatically retrieve details of your account and existing tests, and annotate tests with further details, such as their pass/fail state which isn't recordable by manual testing alone. For example, you might want to run one of your own Selenium tests remotely using Sauce Labs to test a certain browser/OS combination, and then pass the test results back to Sauce Labs.

It has several clients available to allow you to make calls to the API using your favorite environment, be it PHP, Java, Node.js, etc.

Let's have a brief look at how we'd access the API using Node.js and [node-saucelabs](https://github.com/saucelabs/node-saucelabs).

1. First, set up a new npm project to test this out, as detailed in [Setting up Node and npm](#setting_up_node_and_npm). Use a different directory name than before, like `sauce-test` for example.
2. Install the Node Sauce Labs wrapper using the following command:

   ```bash
   npm install saucelabs
   ```

3. Create a new file inside your project root called `call_sauce.js`. Give it the following contents:

   ```js
   const SauceLabs = require("saucelabs").default;

   (async () => {
     const myAccount = new SauceLabs({
       username: "your-sauce-username",
       password: "your-sauce-api-key",
     });

     // Get full WebDriver URL from the client depending on region:
     console.log(myAccount.webdriverEndpoint);

     // Get job details of last run job
     const jobs = await myAccount.listJobs("your-sauce-username", {
       limit: 1,
       full: true,
     });

     console.log(jobs);
   })();
   ```

4. You'll need to fill in your Sauce Labs username and API key in the indicated places. These can be retrieved from your [User Settings](https://app.saucelabs.com/user-settings) page. Fill these in now.
5. Make sure everything is saved, and run your file like so:

   ```bash
   node call_sauce
   ```

#### Advanced: Automated tests

We'll cover actually running automated Sauce Lab tests in the next article.

### TestingBot

#### Getting started with TestingBot

Let's get started with a TestingBot Trial.

1. Create a [TestingBot trial account](https://testingbot.com/users/sign_up).
2. Sign in. This should happen automatically after you verify your email address.

#### The basics: Manual tests

The [TestingBot dashboard](https://testingbot.com/members) lists the various options you can choose from. For now, make sure you are on the _Live Web Testing_ tab.

1. Enter the URL of the page you want to test.
2. Choose the browser/OS combination you want to test by selecting the combination in the grid.
   ![Test Choices](screen_shot_2019-04-19_at_14.55.33.png)
3. When you click _Start Browser_, a loading screen will then appear, which spins up a virtual machine running the combination you chose.
4. When loading has finished, you can then start to remotely test the website running in the chosen browser.
5. From here you can see the layout as it would look in the browser you are testing, move the mouse around and try clicking buttons, etc. The side menu allows you to:

   - Stop the session
   - Change the screen resolution
   - Copy text/notes to a remote clipboard
   - Take, edit, and download screenshots
   - Test in full screen mode.

Once you stop the session, you'll return to the _Live Web Testing_ page, where you'll see an entry for each of the previous manual sessions you started. Clicking on one of these entries shows more data for the session. Here you can download any screenshots you took, watch a video of the test, and view logs for the session.

#### Advanced: The TestingBot API

TestingBot has a [restful API](https://testingbot.com/support/api) that allows you to programmatically retrieve details of your account and existing tests, and annotate tests with further details, such as their pass/fail state which isn't recordable by manual testing alone.

TestingBot has several API clients you can use to interact with the API, including clients for NodeJS, Python, Ruby, Java and PHP.

Below is an example on how to interact with the TestingBot API with the NodeJS client [testingbot-api](https://www.npmjs.com/package/testingbot-api).

1. First, set up a new npm project to test this out, as detailed in [Setting up Node and npm](#setting_up_node_and_npm). Use a different directory name than before, like `tb-test` for example.
2. Install the Node TestingBot wrapper using the following command:

   ```bash
   npm install testingbot-api
   ```

3. Create a new file inside your project root called `tb.js`. Give it the following contents:

   ```js
   const TestingBot = require("testingbot-api");

   let tb = new TestingBot({
     api_key: "your-tb-key",
     api_secret: "your-tb-secret",
   });

   tb.getTests(function (err, tests) {
     console.log(tests);
   });
   ```

4. You'll need to fill in your TestingBot Key and Secret in the indicated places. You can find these in the [TestingBot dashboard](https://testingbot.com/members/user/edit).
5. Make sure everything is saved, and run the file:

   ```bash
   node tb.js
   ```

#### Advanced: Automated tests

We'll cover actually running automated TestingBot tests in the next article.

## Summary

This was quite a ride, but I'm sure you can start to see the benefits of using automation tools to do some of the heavy lifting in terms of testing.

In the next article, we'll look at setting up our own local automation system using Selenium, and how to combine that with services such as Sauce Labs, BrowserStack and TestingBot.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}
