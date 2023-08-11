---
title: JavaScript basics
slug: Learn/Getting_started_with_the_web/JavaScript_basics
page-type: learn-module-chapter
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}

JavaScript is a programming language that adds interactivity to your website. This happens in games, in the behavior of responses when buttons are pressed or with data entry on forms; with dynamic styling; with animation, etc.
This article helps you get started with JavaScript and furthers your understanding of what is possible.

## What is JavaScript?

{{Glossary("JavaScript")}} is a powerful programming language that can add interactivity to a website.
It was invented by Brendan Eich.

JavaScript is versatile and beginner-friendly.
With more experience, you'll be able to create games, animated 2D and 3D graphics, comprehensive database-driven apps, and much more!

JavaScript itself is relatively compact, yet very flexible. Developers have written a variety of tools on top of the core JavaScript language, unlocking a vast amount of functionality with minimum effort. These include:

- Browser Application Programming Interfaces ({{Glossary("API","APIs")}}) built into web browsers, providing functionality such as dynamically creating HTML and setting CSS styles; collecting and manipulating a video stream from a user's webcam, or generating 3D graphics and audio samples.
- Third-party APIs that allow developers to incorporate functionality in sites from other content providers, such as Twitter or Facebook.
- Third-party frameworks and libraries that you can apply to HTML to accelerate the work of building sites and applications.

It's outside the scope of this article—as a light introduction to JavaScript—to present the details of how the core JavaScript language is different from the tools listed above. You can learn more in MDN's [JavaScript learning area](/en-US/docs/Learn/JavaScript), as well as in other parts of MDN.

The section below introduces some aspects of the core language and offers an opportunity to play with a few browser API features too. Have fun!

## A "Hello world!" example

JavaScript is one of the most popular modern web technologies! As your JavaScript skills grow, your websites will enter a new dimension of power and creativity.

However, getting comfortable with JavaScript is more challenging than getting comfortable with HTML and CSS. You may have to start small, and progress gradually. To begin, let's examine how to add JavaScript to your page for creating a _Hello world!_ example. (_Hello world!_ is [the standard for introductory programming examples](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program).)

> **Warning:** If you haven't been following along with the rest of our course, [download this example code](https://codeload.github.com/mdn/beginner-html-site-styled/zip/refs/heads/gh-pages) and use it as a starting point.

1. Go to your test site and create a new folder named `scripts`. Within the scripts folder, create a new text document called `main.js`, and save it.
2. In your `index.html` file, enter this code on a new line, just before the closing `</body>` tag:

   ```html
   <script src="scripts/main.js"></script>
   ```

3. This is doing the same job as the {{htmlelement("link")}} element for CSS. It applies the JavaScript to the page, so it can have an effect on the HTML (along with the CSS, and anything else on the page).
4. Add this code to the `main.js` file:

   ```js
   const myHeading = document.querySelector("h1");
   myHeading.textContent = "Hello world!";
   ```

5. Make sure the HTML and JavaScript files are saved. Then load `index.html` in your browser. You should see something like this:

![Heading "hello world" above a firefox logo](hello-world.png)

> **Note:** The reason the instructions (above) place the {{htmlelement("script")}} element near the bottom of the HTML file is that **the browser reads code in the order it appears in the file**.
>
> If the JavaScript loads first and it is supposed to affect the HTML that hasn't loaded yet, there could be problems. Placing JavaScript near the bottom of an HTML page is one way to accommodate this dependency. To learn more about alternative approaches, see [Script loading strategies](/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#script_loading_strategies).

### What happened?

The heading text changed to _Hello world!_ using JavaScript. You did this by using a function called {{domxref("Document.querySelector", "querySelector()")}} to grab a reference to your heading, and then store it in a variable called `myHeading`. This is similar to what we did using CSS selectors. When you want to do something to an element, you need to select it first.

Following that, the code set the value of the `myHeading` variable's {{domxref("Node.textContent", "textContent")}} property (which represents the content of the heading) to _Hello world!_.

> **Note:** Both of the features you used in this exercise are parts of the [Document Object Model (DOM) API](/en-US/docs/Web/API/Document_Object_Model), which has the capability to manipulate documents.

## Language basics crash course

To give you a better understanding of how JavaScript works, let's explain some of the core features of the language. It's worth noting that these features are common to all programming languages. If you master these fundamentals, you have a head start on coding in other languages too!

> **Warning:** In this article, try entering the example code lines into your JavaScript console to see what happens. For more details on JavaScript consoles, see [Discover browser developer tools](/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools).

### Variables

{{Glossary("Variable", "Variables")}} are containers that store values. You start by declaring a variable with the [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) keyword, followed by the name you give to the variable:

```js
let myVariable;
```

A semicolon at the end of a line indicates where a statement ends. It is only required when you need to separate statements on a single line. However, some people believe it's good practice to have semicolons at the end of each statement. There are other rules for when you should and shouldn't use semicolons. For more details, see [Your Guide to Semicolons in JavaScript](https://www.codecademy.com/resources/blog/your-guide-to-semicolons-in-javascript/).

You can name a variable nearly anything, but there are some restrictions. (See [this section about naming rules](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variables).) If you are unsure, you can [check your variable name](https://mothereff.in/js-variables) to see if it's valid.

JavaScript is case sensitive. This means `myVariable` is not the same as `myvariable`. If you have problems in your code, check the case!

After declaring a variable, you can give it a value:

```js
myVariable = "Bob";
```

Also, you can do both these operations on the same line:

```js
let myVariable = "Bob";
```

You retrieve the value by calling the variable name:

```js
myVariable;
```

After assigning a value to a variable, you can change it later in the code:

```js
let myVariable = "Bob";
myVariable = "Steve";
```

Note that variables may hold values that have different [data types](/en-US/docs/Web/JavaScript/Data_structures):

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Variable</th>
      <th scope="col">Explanation</th>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{{Glossary("String")}}</th>
      <td>
        This is a sequence of text known as a string. To signify that the value
        is a string, enclose it in single or double quote marks.
      </td>
      <td><code>let myVariable = 'Bob';</code> or <br/><code>let myVariable = "Bob";</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Number")}}</th>
      <td>This is a number. Numbers don't have quotes around them.</td>
      <td><code>let myVariable = 10;</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Boolean")}}</th>
      <td>
        This is a True/False value. The words <code>true</code> and
        <code>false</code> are special keywords that don't need quote marks.
      </td>
      <td><code>let myVariable = true;</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Array")}}</th>
      <td>
        This is a structure that allows you to store multiple values in a single
        reference.
      </td>
      <td>
        <code>let myVariable = [1,'Bob','Steve',10];</code><br />Refer to each
        member of the array like this:<br /><code>myVariable[0]</code>,
        <code>myVariable[1]</code>, etc.
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Object")}}</th>
      <td>
        This can be anything. Everything in JavaScript is an object and can be
        stored in a variable. Keep this in mind as you learn.
      </td>
      <td>
        <code>let myVariable = document.querySelector('h1');</code><br />All of
        the above examples too.
      </td>
    </tr>
  </tbody>
</table>

So why do we need variables? Variables are necessary to do anything interesting in programming. If values couldn't change, then you couldn't do anything dynamic, like personalize a greeting message or change an image displayed in an image gallery.

### Comments

Comments are snippets of text that can be added along with code. The browser ignores text marked as comments. You can write comments in JavaScript just as you can in CSS:

```js
/*
Everything in between is a comment.
*/
```

If your comment contains no line breaks, it's an option to put it behind two slashes like this:

```js
// This is a comment
```

### Operators

An `{{Glossary("operator")}}` is a mathematical symbol that produces a result based on two values (or variables). In the following table, you can see some of the simplest operators, along with some examples to try in the JavaScript console.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Operator</th>
      <th scope="col">Explanation</th>
      <th scope="col">Symbol(s)</th>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Addition</th>
      <td>Add two numbers together or combine two strings.</td>
      <td><code>+</code></td>
      <td>
        <code>6 + 9;<br />'Hello ' + 'world!';</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Subtraction, Multiplication, Division</th>
      <td>These do what you'd expect them to do in basic math.</td>
      <td><code>-</code>, <code>*</code>, <code>/</code></td>
      <td>
        <code
>9 - 3;<br />8 * 2; // multiply in JS is an asterisk<br />9 / 3;</code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Assignment</th>
      <td>As you've seen already: this assigns a value to a variable.</td>
      <td><code>=</code></td>
      <td><code>let myVariable = 'Bob';</code></td>
    </tr>
    <tr>
      <th scope="row">Strict equality</th>
      <td>
        This performs a test to see if two values are equal and of the same data type. It returns a
        <code>true</code>/<code>false</code> (Boolean) result.
      </td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality"><code>===</code></a></td>
      <td>
        <code>let myVariable = 3;<br />myVariable === 4;</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Not, Does-not-equal</th>
      <td>
        This returns the logically opposite value of what it precedes. It turns
        a <code>true</code> into a <code>false</code>, etc.. When it is used
        alongside the Equality operator, the negation operator tests whether two
        values are <em>not</em> equal.
      </td>
      <td><code>!</code>, <code>!==</code></td>
      <td>
        <p>
          For "Not", the basic expression is <code>true</code>, but the
          comparison returns <code>false</code> because we negate it:
        </p>
        <p>
          <code>let myVariable = 3;<br />!(myVariable === 3);</code>
        </p>
        <p>
          "Does-not-equal" gives basically the same result with different
          syntax. Here we are testing "is <code>myVariable</code> NOT equal to
          3". This returns<code> false</code> because <code>myVariable</code> IS
          equal to 3:
        </p>
        <p>
          <code>let myVariable = 3;<br />myVariable !== 3;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>

There are a lot more operators to explore, but this is enough for now. See [Expressions and operators](/en-US/docs/Web/JavaScript/Reference/Operators) for a complete list.

> **Note:** Mixing data types can lead to some strange results when performing calculations. Be careful that you are referring to your variables correctly, and getting the results you expect. For example, enter `'35' + '25'` into your console. Why don't you get the result you expected? Because the quote marks turn the numbers into strings, so you've ended up concatenating strings rather than adding numbers. If you enter `35 + 25` you'll get the total of the two numbers.

### Conditionals

Conditionals are code structures used to test if an expression returns true or not. A very common form of conditionals is the `if...else` statement. For example:

```js
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}
```

The expression inside the `if ()` is the test. This uses the strict equality operator (as described above) to compare the variable `iceCream` with the string `chocolate` to see if the two are equal. If this comparison returns `true`, the first block of code runs. If the comparison is not true, the second block of code—after the `else` statement—runs instead.

### Functions

{{Glossary("Function", "Functions")}} are a way of packaging functionality that you wish to reuse. It's possible to define a body of code as a function that executes when you call the function name in your code. This is a good alternative to repeatedly writing the same code. You have already seen some uses of functions. For example:

```js
let myVariable = document.querySelector("h1");
```

```js
alert("hello!");
```

These functions, `document.querySelector` and `alert`, are built into the browser.

If you see something which looks like a variable name, but it's followed by parentheses— `()` —it is likely a function. Functions often take {{Glossary("Argument", "arguments")}}: bits of data they need to do their job. Arguments go inside the parentheses, separated by commas if there is more than one argument.

For example, the `alert()` function makes a pop-up box appear inside the browser window, but we need to give it a string as an argument to tell the function what message to display.

You can also define your own functions. In the next example, we create a simple function which takes two numbers as arguments and multiplies them:

```js
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}
```

Try running this in the console; then test with several arguments. For example:

```js
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);
```

> **Note:** The [`return`](/en-US/docs/Web/JavaScript/Reference/Statements/return) statement tells the browser to return the `result` variable out of the function so it is available to use. This is necessary because variables defined inside functions are only available inside those functions. This is called variable {{Glossary("Scope", "scoping")}}. (Read more about [variable scoping](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope).)

### Events

Real interactivity on a website requires event handlers. These are code structures that listen for activity in the browser, and run code in response. The most obvious example is handling the [click event](/en-US/docs/Web/API/Element/click_event), which is fired by the browser when you click on something with your mouse. To demonstrate this, enter the following into your console, then click on the current webpage:

```js
document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});
```

There are a number of ways to attach an event handler to an element.
Here we select the {{htmlelement("html")}} element. We then call its [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) function, passing in the name of the event to listen to (`'click'`) and a function to run when the event happens.

The function we just passed to `addEventListener()` here is called an _anonymous function_, because it doesn't have a name. There's an alternative way of writing anonymous functions, which we call an _arrow function_.
An arrow function uses `() =>` instead of `function ()`:

```js
document.querySelector("html").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});
```

## Supercharging our example website

With this review of JavaScript basics completed (above), let's add some new features to our example site.

Before going any further, delete the current contents of your `main.js` file — the bit you added earlier during the "Hello world!" example — and save the empty file. If you don't, the existing code will clash with the new code you are about to add.

### Adding an image changer

In this section, you will learn how to use JavaScript and DOM API features to alternate the display of one of two images. This change will happen as a user clicks the displayed image.

1. Choose an image you want to feature on your example site. Ideally, the image will be the same size as the image you added previously, or as close as possible.
2. Save this image in your `images` folder.
3. Rename the image _firefox2.png_.
4. Add the following JavaScript code to your `main.js` file.

   ```js
   const myImage = document.querySelector("img");

   myImage.onclick = () => {
     const mySrc = myImage.getAttribute("src");
     if (mySrc === "images/firefox-icon.png") {
       myImage.setAttribute("src", "images/firefox2.png");
     } else {
       myImage.setAttribute("src", "images/firefox-icon.png");
     }
   };
   ```

5. Save all files and load `index.html` in the browser. Now when you click the image, it should change to the other one.

This is what happened. You stored a reference to your {{htmlelement("img")}} element in `myImage`. Next, you made its `onclick` event handler property equal to a function with no name (an "anonymous" function). So every time this element is clicked:

1. The code retrieves the value of the image's `src` attribute.
2. The code uses a conditional to check if the `src` value is equal to the path of the original image:

   1. If it is, the code changes the `src` value to the path of the second image, forcing the other image to be loaded inside the {{htmlelement("img")}} element.
   2. If it isn't (meaning it must already have changed), the `src` value swaps back to the original image path, to the original state.

### Adding a personalized welcome message

Next, let's change the page title to a personalized welcome message when the user first visits the site. This welcome message will persist. Should the user leave the site and return later, we will save the message using the [Web Storage API](/en-US/docs/Web/API/Web_Storage_API). We will also include an option to change the user, and therefore, the welcome message.

1. In `index.html`, add the following line just before the {{htmlelement("script")}} element:

   ```html
   <button>Change user</button>
   ```

2. In `main.js`, place the following code at the bottom of the file, exactly as it is written. This takes references to the new button and the heading, storing each inside variables:

   ```js
   let myButton = document.querySelector("button");
   let myHeading = document.querySelector("h1");
   ```

3. Add the following function to set the personalized greeting. This won't do anything yet, but this will change soon.

   ```js
   function setUserName() {
     const myName = prompt("Please enter your name.");
     localStorage.setItem("name", myName);
     myHeading.textContent = `Mozilla is cool, ${myName}`;
   }
   ```

   The `setUserName()` function contains a [`prompt()`](/en-US/docs/Web/API/Window/prompt) function, which displays a dialog box, similar to `alert()`. This `prompt()` function does more than `alert()`, asking the user to enter data, and storing it in a variable after the user clicks _OK._ In this case, we are asking the user to enter a name. Next, the code calls on an API `localStorage`, which allows us to store data in the browser and retrieve it later. We use localStorage's `setItem()` function to create and store a data item called `'name'`, setting its value to the `myName` variable which contains the user's entry for the name. Finally, we set the `textContent` of the heading to a string, plus the user's newly stored name.

4. Add the following condition block. We could call this initialization code, as it structures the app when it first loads.

   ```js
   if (!localStorage.getItem("name")) {
     setUserName();
   } else {
     const storedName = localStorage.getItem("name");
     myHeading.textContent = `Mozilla is cool, ${storedName}`;
   }
   ```

   This first line of this block uses the negation operator (logical NOT, represented by the `!`) to check whether the `name` data exists. If not, the `setUserName()` function runs to create it. If it exists (that is, the user set a user name during a previous visit), we retrieve the stored name using `getItem()` and set the `textContent` of the heading to a string, plus the user's name, as we did inside `setUserName()`.

5. Put this `onclick` event handler (below) on the button. When clicked, `setUserName()` runs. This allows the user to enter a different name by pressing the button.

   ```js
   myButton.onclick = () => {
     setUserName();
   };
   ```

### A user name of null?

When you run the example and get the dialog box that prompts you to enter your user name, try pressing the _Cancel_ button. You should end up with a title that reads _Mozilla is cool, null_. This happens because—when you cancel the prompt—the value is set as [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null). _Null_ is a special value in JavaScript that refers to the absence of a value.

Also, try clicking _OK_ without entering a name. You should end up with a title that reads _Mozilla is cool,_ for fairly obvious reasons.

To avoid these problems, you could check that the user hasn't entered a blank name. Update your `setUserName()` function to this:

```js
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}
```

In human language, this means: If `myName` has no value, run `setUserName()` again from the start. If it does have a value (if the above statement is not true), then store the value in `localStorage` and set it as the heading's text.

## Conclusion

If you have followed all the instructions in this article, you should end up with a page that looks something like the image below. You can also [view our version](https://mdn.github.io/beginner-html-site-scripted/).

![Final look of HTML page after creating elements: a header, large centered logo, content, and a button](website-screen-scripted.png)

If you get stuck, you can compare your work with our [finished example code on GitHub](https://github.com/mdn/beginner-html-site-scripted/blob/gh-pages/scripts/main.js).

We have just scratched the surface of JavaScript. If you enjoyed playing, and wish to go further, take advantage of the resources listed below.

## See also

- [Dynamic client-side scripting with JavaScript](/en-US/docs/Learn/JavaScript)
  - : Dive into JavaScript in much more detail.
- [Learn JavaScript](https://learnjavascript.online/)
  - : This is an excellent resource for aspiring web developers! Learn JavaScript in an interactive environment, with short lessons and interactive tests, guided by an automated assessment. The first 40 lessons are free. The complete course is available for a small one-time payment.

{{PreviousMenuNext("Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}
