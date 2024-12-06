---
title: Setting up your own test automation environment
slug: Learn_web_development/Extensions/Testing/Your_own_automation_environment
page-type: learn-module-chapter
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

In this article, we will teach you how to install your own automation environment and run your own tests using Selenium/WebDriver and a testing library such as selenium-webdriver for Node. We will also look at how to integrate your local testing environment with commercial tools like the ones discussed in the previous article.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Familiarity with the core <a href="/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/en-US/docs/Learn_web_development/Core/Styling_basics">CSS</a>, and
        <a href="/en-US/docs/Learn_web_development/Core/Scripting">JavaScript</a> languages; an idea
        of the high-level
        <a href="/en-US/docs/Learn_web_development/Extensions/Testing/Introduction">principles of cross browser testing</a>, and
        <a href="/en-US/docs/Learn_web_development/Extensions/Testing/Automated_testing">automated testing</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To show how to set up a Selenium testing environment locally and run tests with it, and how to integrate it with tools like LambdaTest, Sauce Labs, and BrowserStack.
      </td>
    </tr>
  </tbody>
</table>

## Selenium

[Selenium](https://www.selenium.dev/) is the most popular browser automation tool. There are other ways, but the best way to use Selenium is via WebDriver, a powerful API that builds on top of Selenium and makes calls to a browser to automate it, carrying out actions such as "open this web page", "move over this element on the page", "click this link", "see whether the link opens this URL", etc. This is ideal for running automated tests.

How you install and use WebDriver depends on what programming environment you want to use to write and run your tests. Most popular environments have available a package or framework that will install WebDriver and the bindings required to communicate with WebDriver using this language, for example, Java, C#, Ruby, Python, JavaScript (Node), etc. See [Setting Up a Selenium-WebDriver Project](https://www.selenium.dev/documentation/webdriver/getting_started/) for more details of Selenium setups for different languages.

Different browsers require different drivers to allow WebDriver to communicate with and control them. See [Platforms Supported by Selenium](https://www.selenium.dev/downloads/) for more information on where to get browser drivers from, etc.

We will cover writing and running Selenium tests using Node.js, as it is quick and easy to get started, and a more familiar environment for front end devs.

> [!NOTE]
> If you want to find out how to use WebDriver with other server-side environments, also check out [Platforms Supported by Selenium](https://www.selenium.dev/downloads/) for some useful links.

### Setting up Selenium in Node

1. To start with, set up a new npm project, as discussed in [Setting up Node and npm](/en-US/docs/Learn_web_development/Extensions/Testing/Automated_testing#setting_up_node_and_npm) in the last chapter. Call it something different, like `selenium-test`.
2. Next, we need to install a framework to allow us to work with Selenium from inside Node. We are going to choose selenium's official [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver), as the documentation seems fairly up-to-date and it is well-maintained. If you want different options, [webdriver.io](https://webdriver.io/) and [nightwatch.js](https://nightwatchjs.org/) are also good choices. To install selenium-webdriver, run the following command, making sure you are inside your project folder:

   ```bash
   npm install selenium-webdriver
   ```

> [!NOTE]
> It is still a good idea to follow these steps even if you previously installed selenium-webdriver and downloaded the browser drivers. You should make sure that everything is up-to-date.

Next, you need to download the relevant drivers to allow WebDriver to control the browsers you want to test. You can find details of where to get them from on the [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) page (see the table in the first section.) Obviously, some of the browsers are OS-specific, but we're going to stick with Firefox and Chrome, as they are available across all the main OSes.

1. Download the latest [GeckoDriver](https://github.com/mozilla/geckodriver/releases/) (for Firefox) and [ChromeDriver](https://googlechromelabs.github.io/chrome-for-testing/#stable) drivers.
2. Unpack them into somewhere fairly easy to navigate to, like the root of your home user directory.
3. Add the `chromedriver` and `geckodriver` driver's location to your system `PATH` variable. This should be an absolute path from the root of your hard disk, to the directory containing the drivers. For example, if we were using a macOS machine, our user name was bob, and we put our drivers in the root of our home folder, the path would be `/Users/bob`.

> [!NOTE]
> Just to reiterate, the path you add to `PATH` needs to be the path to the directory containing the drivers, not the paths to the drivers themselves! This is a common mistake.

To set your `PATH` variable on a macOS system and on most Linux systems:

1. Open your `.zprofile` (or `.bash_profile` if your system uses `bash` shell) file.
   > [!NOTE]
   > If you can't see hidden files, you'll need to display them, see [Show/Hide hidden files in macOS](https://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/) or [Show hidden folders in Ubuntu](https://askubuntu.com/questions/470837/how-to-show-hidden-folders-in-file-manager-nautilus-on-ubuntu)).
2. Paste the following into the bottom of your file (updating the path as it actually is on your machine):

   ```bash
   #Add WebDriver browser drivers to PATH
   export PATH=$PATH:/Users/bob
   ```

3. Save and close this file, then restart your Terminal/command prompt to reapply your Bash configuration.
4. Check that your new paths are in the `PATH` variable by entering the following into your terminal:

   ```bash
   echo $PATH
   ```

   You should see it printed out in the terminal.

> [!NOTE]
> To set your `PATH` variable on Windows, follow the instructions at [How can I add a new folder to my system path?](https://www.itprotoday.com/)

Let's try a quick test to make sure everything is working.

1. Create a new file inside your project directory called `duck_test.js`:
2. Give it the following contents, then save it:

   ```js
   const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

   (async function example() {
     const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
     try {
       await driver.get("https://duckduckgo.com/");
       await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
       await driver.wait(until.titleIs("webdriver at DuckDuckGo"), 1000);
       console.log("Test passed!");
     } catch (e) {
       console.log(`Error: ${e}`);
     } finally {
       await driver.sleep(2000); // Delay long enough to see search page!
       await driver.quit();
     }
   })();
   ```

   > [!NOTE]
   > This function is an {{glossary("IIFE")}} (Immediately Invoked Function Expression).

3. In terminal, make sure you are inside your project folder, then enter the following command:

   ```bash
   node duck_test
   ```

You should see an instance of Firefox automatically open up! DuckDuckGo will automatically be loaded in a tab, "webdriver" will be entered in the search box, and the search button will be clicked. WebDriver will then wait for 1 second; the document title is then accessed, and if it is "webdriver at DuckDuckGo", we will return a message to state that the test is passed.

We then wait 2 seconds, after which WebDriver will close down the Firefox instance and stop.

## Testing in multiple browsers at once

There is also nothing to stop you running the test on multiple browsers simultaneously. Let's try this!

1. Create another new file inside your project directory called `duck_test_multiple.js`. You can feel free to change the references to some of the other browsers we added, remove them, etc., depending on what browsers you have available to test on your operating system. You'll need to make sure you have the right browser drivers set up on your system. In terms of what string to use inside the `.forBrowser()` method for other browsers, see the [Browser enum](https://www.selenium.dev/selenium/docs/api/javascript/global.html#Browser) reference page.
2. Give your file the following contents, then save it:

   ```js
   const { Builder, Browser, By, Key } = require("selenium-webdriver");

   const driver_fx = new Builder().forBrowser(Browser.FIREFOX).build();
   const driver_chr = new Builder().forBrowser(Browser.CHROME).build();

   async function searchTest(driver) {
     try {
       await driver.get("https://duckduckgo.com/");
       await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
       await driver.sleep(2000);
       const title = await driver.getTitle();
       if (title === "webdriver at DuckDuckGo") {
         console.log("Test passed");
       } else {
         console.log("Test failed");
       }
     } finally {
       driver.quit();
     }
   }

   searchTest(driver_fx);
   searchTest(driver_chr);
   ```

3. In terminal, make sure you are inside your project folder, then enter the following command:

   ```bash
   node duck_test_multiple
   ```

> [!NOTE]
> If you are using a Mac and decide to test Safari, you might get an error message along the lines of "Could not create a session: You must enable the 'Allow Remote Automation' option in Safari's Develop menu to control Safari via WebDriver." If you get this, follow the given instruction and try again.
>
> You might get a message saying that you can't open a driver app because it was not downloaded from a verified source. If you get this, you can override that security setting just for that driver app. For example, on Mac, <kbd>Ctrl</kbd> + click on the app, choose _Open_, and choose _Open_ again from the resulting dialog box.

So here we've done the test as before, except that this time we've wrapped it inside a function, `searchTest()`. We've created new browser instances for multiple browsers, then passed each one to the function so the test is performed on all of them.

Let's move on and look at the basics of WebDriver syntax, in a bit more detail.

## WebDriver syntax crash course

Let's have a look at a few key features of the webdriver syntax. For more complete details, you should consult the [selenium-webdriver JavaScript API reference](https://www.selenium.dev/selenium/docs/api/javascript/) for a detailed reference and the Selenium main documentation's [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/), which contain multiple examples to learn from written in different languages.

### Starting a new test

To start up a new test, you need to include the `selenium-webdriver` module, importing the `Builder` constructor and `Browser` interface:

```js
const { Builder, Browser } = require("selenium-webdriver");
```

You use the `Builder()` constructor to create a new instance of a driver, chaining the `forBrowser()` method to specify what browser you want to test with this builder.
The `build()` method is chained at the end to actually build the driver instance (see the [Builder class reference](https://www.selenium.dev/selenium/docs/api/javascript/Builder.html) for detailed information on these features).

```js
let driver = new Builder().forBrowser(Browser.FIREFOX).build();
```

Note that it is possible to set specific configuration options for browsers to be tested, for example you can set a specific version and OS to test in the `forBrowser()` method:

```js
let driver = new Builder().forBrowser(Browser.FIREFOX, "130", "MAC").build();
```

You could also set these options using an environment variable, for example:

```bash
SELENIUM_BROWSER=firefox:130:MAC
```

Let's create a new test to allow us to explore this code as we talk about it. Inside your selenium test project directory, create a new file called `quick_test.js`, and add the following code to it:

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
})();
```

You can test the example by entering the following command into your terminal:

```bash
node quick_test
```

### Getting the document you want to test

To load the page you actually want to test, you use the `get()` method of the driver instance you created earlier, for example:

```js
driver.get("http://www.google.com");
```

> [!NOTE]
> See the [WebDriver class reference](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html) for details of the features in this section and the ones below it.

You can use any URL to point to your resource, including a `file://` URL to test a local document:

```js
driver.get("file:///Users/bob/git/examples/test_file.html");
```

or

```js
driver.get("http://localhost:8888/test_file.html");
```

But it is better to use a remote server location so the code is more flexible — when you start using a remote server to run your tests (see later on), your code will break if you try to use local paths.

Update your `example()` function as follows, replacing the placeholder path with a real local path to an HTML file on your computer, then try running it:

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get("file:///Users/bob/git/examples/test_file.html");
})();
```

### Interacting with the document

Now we've got a document to test, we need to interact with it in some way, which usually involves first selecting a specific element to test something about. You can [select UI elements in many ways](https://www.selenium.dev/documentation/webdriver/elements/) in WebDriver, including by ID, class, element name, etc. The actual selection is done by the `findElement()` method, which accepts as a parameter a selection method. For example, to select an element by ID:

```js
const element = driver.findElement(By.id("myElementId"));
```

One of the most useful ways to find an element by CSS — the `By.css()` method allows you to select an element using a CSS selector.

Update your `example()` function now as follows, then run the example:

```js
const { Builder, Browser, By } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );
  const button = driver.findElement(By.css("button:nth-of-type(1)"));
})();
```

### Testing your element

There are many ways to interact with your web documents and elements inside them. You can see useful common examples starting at [Getting text values](https://www.selenium.dev/documentation/webdriver/elements/information/#text-content) on the WebDriver docs.

If we wanted to get the text inside our button, we could do this:

```js
button.getText().then((text) => {
  console.log(`Button text is '${text}'`);
});
```

Add this to the bottom of the `example()` function now as shown below:

```js
const { Builder, Browser, By } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();

  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );

  const button = driver.findElement(By.css("button:nth-of-type(1)"));

  button.getText().then((text) => {
    console.log(`Button text is '${text}'`);
  });
})();
```

Run the example with `node` in the same way you did previously. You should see the button's text label reported inside the console.

Let's do something a bit more useful. Replace the previous code entry with `button.click();` as shown below:

```js
const { Builder, Browser, By } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );

  const button = driver.findElement(By.css("button:nth-of-type(1)"));

  button.click();
})();
```

Try running your test again; the button will be clicked, and an `alert()` popup should appear. At least we know the button is working!

You can interact with the popup too. Update the `example()` function as follows, and try testing it again:

```js
const { Builder, Browser, By, until } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();

  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );

  const button = driver.findElement(By.css("button:nth-of-type(1)"));

  button.click();

  await driver.wait(until.alertIsPresent());

  const alert = driver.switchTo().alert();

  alert.getText().then((text) => {
    console.log(`Alert text is '${text}'`);
  });

  alert.accept();
})();
```

Next, let's try entering some text into the form elements. Update the `example()` function as follows and try running your test again:

```js
const { Builder, Browser, By, Key } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );

  const input = driver.findElement(By.id("name"));
  input.sendKeys("Bob Smith");

  input.sendKeys(Key.TAB);

  const input2 = driver.findElement(By.id("age"));
  input2.sendKeys("65");
})();
```

You can submit key presses that can't be represented by normal characters using properties of the `Key` object. For example, above we used the following to tab between form inputs:

```js
input.sendKeys(Key.TAB);
```

### Waiting for something to complete

There are times where you'll want to make WebDriver wait for something to complete before carrying on. For example if you load a new page, you'll want to wait for the page's DOM to finish loading before you try to interact with any of its elements, otherwise the test will likely fail.

In our `duck_test_multiple.js` test for example, we included this line:

```js
await driver.sleep(2000);
```

The `sleep()` method accepts a value that specifies the time to wait in milliseconds — the method returns a {{jsxref("Promise")}} that resolves at the end of that time. We use the `await` keyword to pause the enclosing function until the promise resolves, after which the code following the method executes.

We could add a `sleep()` method to our `quick_test.js` test too — try updating your `example()` function like this:

```js
const { Builder, Browser, By, Key } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );

  const input = driver.findElement(By.id("name"));
  input.sendKeys("Bob Smith");

  driver.sleep(1000).then(() => {
    input.getAttribute("value").then((value) => {
      if (value !== "") {
        console.log("Form input filled out");
      } else {
        console.log("Text could not be entered");
      }
    });
  });
})();
```

Try running the updated code. WebDriver will now fill out the first form field, wait for one second, then test whether its value got filled out (i.e., is not empty) by using `getAttribute()` to retrieve its `value` attribute value. It then prints a message to the console to report success/failure.

> [!NOTE]
> There is also a method called [`wait()`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html#wait), which repeatedly tests a condition for a certain length of time, and then carries on executing the code. This also makes use of the [util library](https://www.selenium.dev/selenium/docs/api/javascript/lib_until.js.html), which defines common conditions to use along with `wait()`.

### Shutting down drivers after use

After you've finished running a test, you should shut down any driver instances you've opened using the `driver.quit()` method, to make sure they don't continue to use resources unnecessarily. Update `quick_test.js` as follows:

```js
const { Builder, Browser, By, Key } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );

  const input = driver.findElement(By.id("name"));
  input.sendKeys("Bob Smith");

  driver.sleep(1000).then(() => {
    input
      .getAttribute("value")
      .then((value) => {
        if (value !== "") {
          console.log("Form input filled out");
        } else {
          console.log("Text could not be entered");
        }
      })
      .finally(() => {
        driver.quit();
      });
  });
})();
```

Now when you run it, you should now see the test execute and the browser instance shut down again after the test is complete.

## Test best practices

There has been a lot written about best practices for writing tests. You can find some good background information at [Test Practices](https://www.selenium.dev/documentation/test_practices/). In general, you should make sure that your tests are:

1. Using good locator strategies: When you are [Interacting with the document](#interacting_with_the_document), make sure that you use locators and page objects that are unlikely to change — if you have a testable element that you want to perform a test on, make sure that it has a stable ID, or position on the page that can be selected using a CSS selector, which isn't going to just change with the next site iteration. You want to make your tests as non-brittle as possible, i.e. they won't just break when something changes.
2. Write atomic tests: Each test should test one thing only, making it easy to keep track of what test file is testing which criterion. The `duck_test.js` test we looked at above is pretty good, as it just tests a single thing — whether the title of a search results page is set correctly. We could work on giving it a better name so it is easier to work out what it does if we add more tests. Perhaps `results_page_title_set_correctly.js` would be slightly better?
3. Write autonomous tests: Each test should work on it's own, and not depend on other tests to work.

In addition, we should mention test results/reporting — we've been reporting results in our above examples using simple `console.log()` statements, but this is all done in JavaScript, so you can use whatever test running and reporting system you want, be it [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/), or some other tool. Lets work through a quick example:

1. Make a local copy of our [`mocha_test.js`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/selenium/mocha_test.js) example inside your project directory. Put it inside a subfolder called `test`. This example uses a long chain of promises to run all the steps required in our test — the promise-based methods WebDriver uses need to resolve for it to work properly.
2. Install the mocha test harness by running the following command inside your project directory:

   ```bash
   npm install --save-dev mocha
   ```

3. You can now run the test (and any others you put inside your `test` directory) using the following command:

   ```bash
   npx mocha --no-timeouts
   ```

4. You should include the `--no-timeouts` flag to make sure your tests don't end up failing because of Mocha's arbitrary timeout (which is 3 seconds).

> **Note:** [saucelabs-sample-test-frameworks](https://github.com/saucelabs-sample-test-frameworks) contains several useful examples showing how to set up different combinations of test/assertion tools.

## Running remote tests

It turns out that running tests on remote servers isn't that much more difficult than running them locally. You just need to create your driver instance, but with a few more features specified, including the capabilities of the browser you want to test on, the address of the server, and the user credentials you need (if any) to access it.

### BrowserStack

Let's create an example to show how to get a Selenium test running remotely on [BrowserStack](https://www.browserstack.com/automate):

1. Inside your project directory, create a new file called `bstack_duck_test.js`.
2. Give it the following contents:

   ```js
   const { Builder, By, Key } = require("selenium-webdriver");

   // Input capabilities
   const capabilities = {
     "bstack:options": {
       os: "OS X",
       osVersion: "Sonoma",
       browserVersion: "17.0",
       local: "false",
       seleniumVersion: "3.14.0",
       userName: "YOUR-USER-NAME",
       accessKey: "YOUR-ACCESS-KEY",
     },
     browserName: "Safari",
   };

   const driver = new Builder()
     .usingServer("http://hub-cloud.browserstack.com/wd/hub")
     .withCapabilities(capabilities)
     .build();

   (async function bStackGoogleTest() {
     try {
       await driver.get("https://duckduckgo.com/");
       await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
       await driver.sleep(2000);
       const title = await driver.getTitle();
       if (title === "webdriver at DuckDuckGo") {
         console.log("Test passed");
       } else {
         console.log("Test failed");
       }
     } finally {
       await driver.sleep(4000); // Delay long enough to see search page!
       await driver.quit();
     }
   })();
   ```

3. From your BrowserStack [Account & Profile details page](https://www.browserstack.com/accounts/profile/details), get your user name and access key (see _Username and Access Keys_).
4. Replace the `YOUR-USER-NAME` and `YOUR-ACCESS-KEY` placeholders in the code with your actual user name and access key values (and make sure to keep them secure).
5. Run your test with the following command:

   ```bash
   node bstack_google_test
   ```

   The test will be sent to BrowserStack, and the test result will be returned to your console. This shows the importance of including some kind of result reporting mechanism!

6. Now if you go back to the [BrowserStack Automate dashboard](https://automate.browserstack.com/dashboard/), you'll see your test listed, with details including a video recording of the test, and multiple detailed logs of information pertaining to it:
   ![BrowserStack automated results](bstack_automated_results.png)

> [!NOTE]
> The _Resources_ menu option on the Browserstack automation dashboard contains a wealth of useful information on using it to run automated tests. See [Selenium with NodeJS](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs) for node-specific information.

#### Filling out BrowserStack test details programmatically

You can use the BrowserStack REST API and some other capabilities to annotate your test with more details, such as whether it passed, why it passed, what project the test is part of, etc. BrowserStack doesn't know these details by default.

Let's update our `bstack_duck_test.js` demo, to show how these features work:

1. Install the [axios](https://www.npmjs.com/package/axios) module by running the following command inside your project directory:

   ```js
   npm install axios
   ```

2. Import the axios module so we can use it to send requests to the BrowserStack REST API. Add the following line at the very top of your code:

   ```js
   const axios = require("axios");
   ```

3. Now we'll update our `capabilities` object to include a project name — add the following line before the closing curly brace, remembering to add a comma at the end of the previous line (you can vary the build and project names to organize the tests in different windows in the BrowserStack automation dashboard):

   ```js
   project: "DuckDuckGo test 2";
   ```

4. Next we'll retrieve the `sessionId` of the current session, and use it (along with your `userName` and `accessKey`) to assemble the URL to send requests to, to update the BrowserStack data. Include the following lines just below the block that creates the `driver` object (which starts with `const driver = new Builder()`) :

   ```js
   let sessionId;
   let bstackURL;

   driver.session_.then((sessionData) => {
     sessionId = sessionData.id_;
     bstackURL = `https://${capabilities["bstack:options"].userName}:${capabilities["bstack:options"].accessKey}@www.browserstack.com/automate/sessions/${sessionId}.json`;
   });
   ```

5. Finally, update the `if ... else` block near the bottom of the code to send appropriate API calls to BrowserStack depending on whether the test passed or failed:

   ```js
   if (title === "webdriver at DuckDuckGo") {
     console.log("Test passed");
     axios.put(bstackURL, {
       status: "passed",
       reason: "DuckDuckGo results showed correct title",
     });
   } else {
     console.log("Test failed");
     axios.put(bstackURL, {
       status: "failed",
       reason: "DuckDuckGo results showed wrong title",
     });
   }
   ```

Once the test completes, we send an API call to BrowserStack to update the test with a passed or failed status, and a reason for the result.

If you now go back to your [BrowserStack Automate dashboard](https://automate.browserstack.com/dashboard/), you should see your test session as before, but with your custom data attached to it. It shows a status of "PASSED", and the REST API reported reason for the pass:

![BrowserStack Custom Results](bstack_custom_results.png)

### Sauce Labs

Let's look at an example that demonstrates getting Selenium tests to run remotely on Sauce Labs:

1. Inside your project directory, create a new file called `sauce_google_test.js`.
2. Give it the following contents:

   ```js
   const { Builder, By, Key } = require("selenium-webdriver");
   const username = "YOUR-USER-NAME";
   const accessKey = "YOUR-ACCESS-KEY";

   const driver = new Builder()
     .withCapabilities({
       browserName: "chrome",
       platform: "Windows XP",
       version: "43.0",
       username,
       accessKey,
     })
     .usingServer(
       `https://${username}:${accessKey}@ondemand.saucelabs.com:443/wd/hub`,
     )
     .build();

   driver.get("http://www.google.com");

   driver.findElement(By.name("q")).sendKeys("webdriver");

   driver.sleep(1000).then(() => {
     driver.findElement(By.name("q")).sendKeys(Key.TAB);
   });

   driver.findElement(By.name("btnK")).click();

   driver.sleep(2000).then(() => {
     driver.getTitle().then((title) => {
       if (title === "webdriver - Google Search") {
         console.log("Test passed");
       } else {
         console.log("Test failed");
       }
     });
   });

   driver.quit();
   ```

3. From your [Sauce Labs user settings](https://app.saucelabs.com/user-settings), get your user name and access key. Replace the `YOUR-USER-NAME` and `YOUR-ACCESS-KEY` placeholders in the code with your actual user name and access key values (and make sure you keep them secure).
4. Run your test with the following command:

   ```bash
   node sauce_google_test
   ```

   The test will be sent to Sauce Labs, and the test result will be returned to your console. This shows the importance of including some kind of result reporting mechanism!

5. Now if you go to your [Sauce Labs Automated Test dashboard](https://app.saucelabs.com/dashboard/tests) page, you'll see your test listed; from here you'll be able to see videos, screenshots, and other such data.
   ![Sauce Labs automated test](sauce_labs_automated_test.png)

> [!NOTE]
> Sauce Labs' [Platform Configurator](https://saucelabs.com/products/platform-configurator#/) is a useful tool for generating capability objects to feed to your driver instances, based on what browser/OS you want to test on.

> [!NOTE]
> For more useful details on testing with Sauce Labs and Selenium, check out [Getting Started with Selenium for Automated Website Testing](https://docs.saucelabs.com/web-apps/automated-testing/selenium/), and [Instant Selenium Node.js Tests](https://docs.saucelabs.com/web-apps/automated-testing/selenium/sample-scripts/#nodejs).

#### Filling in Sauce Labs test details programmatically

You can use the Sauce Labs API to annotate your test with more details, such as whether it passed, the name of the test, etc. Sauce Labs doesn't know these details by default!

To do this, you need to:

1. Install the Node Sauce Labs wrapper using the following command (if you've not already done it for this project):

   ```bash
   npm install saucelabs --save-dev
   ```

2. Require saucelabs — put this at the top of your `sauce_google_test.js` file, just below the previous variable declarations:

   ```js
   const SauceLabs = require("saucelabs");
   ```

3. Create a new instance of SauceLabs, by adding the following just below that:

   ```js
   const saucelabs = new SauceLabs({
     username: "YOUR-USER-NAME",
     password: "YOUR-ACCESS-KEY",
   });
   ```

   Again, replace the `YOUR-USER-NAME` and `YOUR-ACCESS-KEY` placeholders in the code with your actual user name and access key values (note that the saucelabs npm package rather confusingly uses `password`, not `accessKey`). Since you are using these twice now, you may want to create a couple of helper variables to store them in.

4. Below the block where you define the `driver` variable (just below the `build()` line), add the following block — this gets the correct driver `sessionID` that we need to write data to the job (you can see it action in the next code block):

   ```js
   driver.getSession().then((sessionid) => {
     driver.sessionID = sessionid.id_;
   });
   ```

5. Finally, replace the `driver.sleep(2000)` block near the bottom of the code with the following:

   ```js
   driver.sleep(2000).then(() => {
     driver.getTitle().then((title) => {
       let testPassed = false;
       if (title === "webdriver - Google Search") {
         console.log("Test passed");
         testPassed = true;
       } else {
         console.error("Test failed");
       }

       saucelabs.updateJob(driver.sessionID, {
         name: "Google search results page title test",
         passed: testPassed,
       });
     });
   });
   ```

Here we've set a `testPassed` variable to `true` or `false` depending on whether the test passed or fails, then we've used the `saucelabs.updateJob()` method to update the details.

If you now go back to your [Sauce Labs Automated Test dashboard](https://app.saucelabs.com/dashboard/tests) page, you should see your new job now has the updated data attached to it:

![Sauce Labs Updated Job info](sauce_labs_updated_job_info.png)

### Your own remote server

If you don't want to use a service like Sauce Labs or BrowserStack, you can always set up your own remote testing server. Let's look at how to do this.

1. The Selenium remote server requires Java to run. Download the latest JDK for your platform from the [Java SE downloads page](https://www.oracle.com/java/technologies/downloads/). Install it when it is downloaded.
2. Next, download the latest [Selenium standalone server](https://selenium-release.storage.googleapis.com/index.html) — this acts as a proxy between your script and the browser drivers. Choose the latest stable version number (i.e. not a beta), and from the list choose a file starting with "selenium-server-standalone". When this has downloaded, put it in a sensible place, like in your home directory. If you've not already added the location to your `PATH`, do so now (see the [Setting up Selenium in Node](#setting_up_selenium_in_node) section).
3. Run the standalone server by entering the following into a terminal on your server computer

   ```bash
   java -jar selenium-server-standalone-3.0.0.jar
   ```

   (update the `.jar` filename) so it matches exactly what file you've got.

4. The server will run on `http://localhost:4444/wd/hub` — try going there now to see what you get.

Now we've got the server running, let's create a demo test that will run on the remote selenium server.

1. Create a copy of your `google_test.js` file, and call it `google_test_remote.js`; put it in your project directory.
2. Update the line of code (which starts with `const driver = …`) like so

   ```js
   const driver = new Builder()
     .forBrowser(Browser.FIREFOX)
     .usingServer("http://localhost:4444/wd/hub")
     .build();
   ```

3. Run your test, and you should see it run as expected; this time however you will be running it on the standalone server:

   ```bash
   node google_test_remote.js
   ```

So this is pretty cool. We have tested this locally, but you could set this up on just about any server along with the relevant browser drivers, and then connect your scripts to it using the URL you choose to expose it at.

## Integrating Selenium with CI tools

As another point, it is also possible to integrate Selenium and related tools like LambdaTest, and Sauce Labs with continuous integration (CI) tools — this is useful, as it means you can run your tests via a CI tool, and only commit new changes to your code repository if the tests pass.

It is out of scope to look at this area in detail in this article, but we'd suggest getting started with Travis CI — this is probably the easiest CI tool to get started with and has good integration with web tools like GitHub and Node.

To get started, see for example:

- [Travis CI for complete beginners](https://docs.travis-ci.com/user/for-beginners)
- [Building a Node.js project](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/) (with Travis)
- [Using LambdaTest with Travis CI](https://www.lambdatest.com/support/docs/travis-ci-with-lambdatest/)
- [Using LambdaTest with CircleCI](https://www.lambdatest.com/support/docs/circleci-integration-with-lambdatest/)
- [Using LambdaTest with Jenkins](https://www.lambdatest.com/support/docs/jenkins-with-lambdatest/)
- [Using Sauce Labs with Travis CI](https://docs.travis-ci.com/user/sauce-connect/)

> [!NOTE]
> If you wish to perform continuous testing with **codeless automation** then you can use [Endtest](https://www.endtest.io/) or [TestingBot](https://testingbot.com/).

## Summary

This module should have proven fun, and should have given you enough of an insight into writing and running automated tests for you to get going with writing your own automated tests.

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
