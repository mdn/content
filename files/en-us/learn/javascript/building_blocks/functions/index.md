---
title: Functions — reusable blocks of code
slug: Learn/JavaScript/Building_blocks/Functions
tags:
  - API
  - Article
  - Beginner
  - Browser
  - CodingScripting
  - Custom
  - Functions
  - Guide
  - JavaScript
  - Learn
  - Method
  - anonymous
  - invoke
  - l10n:priority
  - parameters
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Looping_code","Learn/JavaScript/Building_blocks/Build_your_own_function", "Learn/JavaScript/Building_blocks")}}

Another essential concept in coding is **functions**, which allow you to store a piece of code that does a single task inside a defined block, and then call that code whenever you need it using a single short command — rather than having to type out the same code multiple times. In this article we'll explore fundamental concepts behind functions such as basic syntax, how to invoke and define them, scope, and parameters.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic computer literacy, a basic understanding of HTML and CSS,
        <a href="/en-US/docs/Learn/JavaScript/First_steps"
          >JavaScript first steps</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To understand the fundamental concepts behind JavaScript functions.
      </td>
    </tr>
  </tbody>
</table>

## Where do I find functions?

In JavaScript, you'll find functions everywhere. In fact, we've been using functions all the way through the course so far; we've just not been talking about them very much. Now is the time, however, for us to start talking about functions explicitly, and really exploring their syntax.

Pretty much anytime you make use of a JavaScript structure that features a pair of parentheses — `()` — and you're **not** using a common built-in language structure like a [for loop](/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#the_standard_for_loop), [while or do...while loop](/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#while_and_do_..._while), or [if...else statement](/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#if_..._else_statements), you are making use of a function.

## Built-in browser functions

We've made use of functions built in to the browser a lot in this course. Every time we manipulated a text string, for example:

```js
let myText = 'I am a string';
let newString = myText.replace('string', 'sausage');
console.log(newString);
// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string
```

Or every time we manipulated an array:

```js
let myArray = ['I', 'love', 'chocolate', 'frogs'];
let madeAString = myArray.join(' ');
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string
```

Or every time we generated a random number:

```js
let myNumber = Math.random();
// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number
```

...we were using a function!

> **Note:** Feel free to enter these lines into your browser's JavaScript console to re-familiarize yourself with their functionality, if needed.

The JavaScript language has many built-in functions to allow you to do useful things without having to write all that code yourself. In fact, some of the code you are calling when you **invoke** (a fancy word for run, or execute) a built in browser function couldn't be written in JavaScript — many of these functions are calling parts of the background browser code, which is written largely in low-level system languages like C++, not web languages like JavaScript.

Bear in mind that some built-in browser functions are not part of the core JavaScript language — some are defined as part of browser APIs, which build on top of the default language to provide even more functionality (refer to [this early section of our course](/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#so_what_can_it_really_do) for more descriptions). We'll look at using browser APIs in more detail in a later module.

## Functions versus methods

Programmers call **functions** that are part of objects **methods**. You don't need to learn about the inner workings of structured JavaScript objects yet — you can wait until our later module that will teach you all about the inner workings of objects, and how to create your own. For now, we just wanted to clear up any possible confusion of method versus function — you are likely to meet both terms as you look at the available related resources across the Web.

The built-in code we've made use of so far come in both forms: **functions** and **methods.** You can check the full list of the built-in functions, as well as the built-in objects and their corresponding methods [here](/en-US/docs/Web/JavaScript/Reference/Global_Objects).

You've also seen a lot of **custom functions** in the course so far — functions defined in your code, not inside the browser. Anytime you saw a custom name with parentheses straight after it, you were using a custom function. In our [random-canvas-circles.html](https://mdn.github.io/learning-area/javascript/building-blocks/loops/random-canvas-circles.html) example (see also the full [source code](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/random-canvas-circles.html)) from our [loops article](/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code), we included a custom `draw()` function that looked like this:

```js
function draw() {
  ctx.clearRect(0,0,WIDTH,HEIGHT);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}
```

This function draws 100 random circles inside a {{htmlelement("canvas")}} element. Every time we want to do that, we can just invoke the function with this:

```js
draw();
```

rather than having to write all that code out again every time we want to repeat it. And functions can contain whatever code you like — you can even call other functions from inside functions. The above function for example calls the `random()` function three times, which is defined by the following code:

```js
function random(number) {
  return Math.floor(Math.random()*number);
}
```

We needed this function because the browser's built-in [Math.random()](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) function only generates a random decimal number between 0 and 1. We wanted a random whole number between 0 and a specified number.

## Invoking functions

You are probably clear on this by now, but just in case ... to actually use a function after it has been defined, you've got to run — or invoke — it. This is done by including the name of the function in the code somewhere, followed by parentheses.

```js
function myFunction() {
  alert('hello');
}

myFunction();
// calls the function once
```

> **Note:** This form of creating a function is also known as _function declaration_. It is always hoisted, so you can call function above function definition and it will work fine.

## Anonymous functions

You may see functions defined and invoked in slightly different ways. So far we have just created a function like so:

```js
function myFunction() {
  alert('hello');
}
```

But you can also create a function that doesn't have a name:

```js
function() {
  alert('hello');
}
```

This is called an **anonymous function** — it has no name! It also won't do anything on its own. You generally use an anonymous function along with an event handler, for example the following would run the code inside the function whenever the associated button is clicked:

```js
const myButton = document.querySelector('button');

myButton.onclick = function() {
  alert('hello');
}
```

The above example would require there to be a {{htmlelement("button")}} element available on the page to select and click. You've already seen this structure a few times throughout the course, and you'll learn more about and see it in use in the next article.

You can also assign an anonymous function to be the value of a variable, for example:

```js
const myGreeting = function() {
  alert('hello');
}
```

> **Note:** This form of creating a function is also known as _function expression_. Unlike function declaration, function expressions are not hoisted.

This function could now be invoked using:

```js
myGreeting();
```

This effectively gives the function a name; you can also assign the function to be the value of multiple variables, for example:

```js
let anotherGreeting = myGreeting;
```

This function could now be invoked using either of:

```js
myGreeting();
anotherGreeting();
```

But this would just be confusing, so don't do it! When creating functions, it is better to just stick to this form:

```js
function myGreeting() {
  alert('hello');
}
```

You will mainly use anonymous functions to just run a load of code in response to an event firing — like a button being clicked — using an event handler. Again, this looks something like this:

```js
myButton.onclick = function() {
  alert('hello');
  // I can put as much code
  // inside here as I want
}
```

## Function parameters

Some functions require **parameters** to be specified when you are invoking them — these are values that need to be included inside the function parentheses, which it needs to do its job properly.

> **Note:** Parameters are sometimes called arguments, properties, or even attributes.

As an example, the browser's built-in [Math.random()](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) function doesn't require any parameters. When called, it always returns a random number between 0 and 1:

```js
let myNumber = Math.random();
```

The browser's built-in string [replace()](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) function however needs two parameters — the substring to find in the main string, and the substring to replace that string with:

```js
let myText = 'I am a string';
let newString = myText.replace('string', 'sausage');
```

> **Note:** When you need to specify multiple parameters, they are separated by commas.

It should also be noted that sometimes parameters are optional — you don't have to specify them. If you don't, the function will generally adopt some kind of default behavior. As an example, the array [join()](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) function's parameter is optional:

```js
let myArray = ['I', 'love', 'chocolate', 'frogs'];
let madeAString = myArray.join(' ');
// returns 'I love chocolate frogs'
let madeAString = myArray.join();
// returns 'I,love,chocolate,frogs'
```

If no parameter is included to specify a joining/delimiting character, a comma is used by default.

## Function scope and conflicts

Let's talk a bit about {{glossary("scope")}} — a very important concept when dealing with functions. When you create a function, the variables and other things defined inside the function are inside their own separate **scope**, meaning that they are locked away in their own separate compartments, unreachable from code outside the functions.

The top level outside all your functions is called the **global scope**. Values defined in the global scope are accessible from everywhere in the code.

JavaScript is set up like this for various reasons — but mainly because of security and organization. Sometimes you don't want variables to be accessible from everywhere in the code — external scripts that you call in from elsewhere could start to mess with your code and cause problems because they happen to be using the same variable names as other parts of the code, causing conflicts. This might be done maliciously, or just by accident.

For example, say you have an HTML file that is calling in two external JavaScript files, and both of them have a variable and a function defined that use the same name:

```html
<!-- Excerpt from my HTML -->
<script src="first.js"></script>
<script src="second.js"></script>
<script>
  greeting();
</script>
```

```js
// first.js
let name = 'Chris';
function greeting() {
  alert('Hello ' + name + ': welcome to our company.');
}
```

```js
// second.js
let name = 'Zaptec';
function greeting() {
  alert('Our company is called ' + name + '.');
}
```

Both functions you want to call are called `greeting()`, but you can only ever access the `first.js` file's `greeting()` function (the second one is ignored). In addition, attempting to declare the `name` variable a second time with the `let` keyword in the `second.js` file results in an error.

> **Note:** You can see this example [running live on GitHub](https://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html) (see also the [source code](https://github.com/mdn/learning-area/tree/master/javascript/building-blocks/functions)).

Keeping parts of your code locked away in functions avoids such problems, and is considered the best practice.

It is a bit like a zoo. The lions, zebras, tigers, and penguins are kept in their own enclosures, and only have access to the things inside their enclosures — in the same manner as the function scopes. If they were able to get into other enclosures, problems would occur. At best, different animals would feel really uncomfortable inside unfamiliar habitats — a lion or tiger would feel terrible inside the penguins' watery, icy domain. At worst, the lions and tigers might try to eat the penguins!

![](mdn-mozilla-zoo.png)

The zoo keeper is like the global scope — they have the keys to access every enclosure, to restock food, tend to sick animals, etc.

### Active learning: Playing with scope

Let's look at a real example to demonstrate scoping.

1.  First, make a local copy of our [function-scope.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-scope.html) example. This contains two functions called `a()` and `b()`, and three variables — `x`, `y`, and `z` — two of which are defined inside the functions, and one in the global scope. It also contains a third function called `output()`, which takes a single parameter and outputs it in a paragraph on the page.
2.  Open the example up in a browser and in your text editor.
3.  Open the JavaScript console in your browser developer tools. In the JavaScript console, enter the following command:

    ```js
    output(x);
    ```

    You should see the value of variable `x` printed to the browser viewport.

4.  Now try entering the following in your console

    ```js
    output(y);
    output(z);
    ```

    Both of these should throw an error into the console along the lines of "[ReferenceError: y is not defined](/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined)". Why is that? Because of function scope — `y` and `z` are locked inside the `a()` and `b()` functions, so `output()` can't access them when called from the global scope.

5.  However, what about when it's called from inside another function? Try editing `a()` and `b()` so they look like this:

    ```js
    function a() {
      let y = 2;
      output(y);
    }

    function b() {
      let z = 3;
      output(z);
    }
    ```

    Save the code and reload it in your browser, then try calling the `a()` and `b()` functions from the JavaScript console:

    ```js
    a();
    b();
    ```

    You should see the `y` and `z` values printed in the browser viewport. This works fine, as the `output()` function is being called inside the other functions — in the same scope as the variables it is printing are defined in, in each case. `output()` itself is available from anywhere, as it is defined in the global scope.

6.  Now try updating your code like this:

    ```js
    function a() {
      let y = 2;
      output(x);
    }

    function b() {
      let z = 3;
      output(x);
    }
    ```

7.  Save and reload again, and try this again in your JavaScript console:

    ```js
    a();
    b();
    ```

    Both the `a()` and `b()` call should print the value of x to the browser viewport. These work fine because even though the `output()` calls are not in the same scope as `x` is defined in, `x` is a global variable so is available inside all code, everywhere.

8.  Finally, try updating your code like this:

    ```js
    function a() {
      let y = 2;
      output(z);
    }

    function b() {
      let z = 3;
      output(y);
    }
    ```

9.  Save and reload again, and try this again in your JavaScript console:

    ```js
    a();
    b();
    ```

    This time the `a()` and `b()` calls will throw that annoying [ReferenceError: _variable name_ is not defined](/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined) error into the console — this is because the `output()` calls and the variables they are trying to print are not in the same function scopes — the variables are effectively invisible to those function calls.

> **Note:** The same scoping rules do not apply to loop (e.g. `for() { ... }`) and conditional blocks (e.g. `if() { ... }`) — they look very similar, but they are not the same thing! Take care not to get these confused.

> **Note:** The [ReferenceError: "x" is not defined](/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined) error is one of the most common you'll encounter. If you get this error and you are sure that you have defined the variable in question, check what scope it is in.

### Functions inside functions

Keep in mind that you can call a function from anywhere, even inside another function.  This is often used as a way to keep code tidy — if you have a big complex function, it is easier to understand if you break it down into several sub-functions:

```js
function myBigFunction() {
  let myValue;

  subFunction1();
  subFunction2();
  subFunction3();
}

function subFunction1() {
  console.log(myValue);
}

function subFunction2() {
  console.log(myValue);
}

function subFunction3() {
  console.log(myValue);
}
```

Just make sure that the values being used inside the function are properly in scope. The example above would throw an error `ReferenceError: myValue is not defined`, because although the `myValue` variable is defined in the same scope as the function calls, it is not defined inside the function definitions — the actual code that is run when the functions are called. To make this work, you'd have to pass the value into the function as a parameter, like this:

```js
function myBigFunction() {
  let myValue = 1;

  subFunction1(myValue);
  subFunction2(myValue);
  subFunction3(myValue);
}

function subFunction1(value) {
  console.log(value);
}

function subFunction2(value) {
  console.log(value);
}

function subFunction3(value) {
  console.log(value);
}
```

## Test your skills!

You've reached the end of this article, but can you remember the most important information? You can find some further tests to verify that you've retained this information before you move on — see [Test your skills: Functions](/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Functions). These tests require skills that are covered in the next two articles, so you might want to read those first before trying it.

## Conclusion

This article has explored the fundamental concepts behind functions, paving the way for the next one in which we get practical and take you through the steps to building up your own custom function.

## See also

- [Functions detailed guide](/en-US/docs/Web/JavaScript/Guide/Functions) — covers some advanced features not included here.
- [Functions reference](/en-US/docs/Web/JavaScript/Reference/Functions)
- [Default parameters](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters), [Arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) — advanced concept references

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Looping_code","Learn/JavaScript/Building_blocks/Build_your_own_function", "Learn/JavaScript/Building_blocks")}}

## In this module

- [Making decisions in your code — conditionals](/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
- [Looping code](/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code)
- **Functions — reusable blocks of code**
- [Build your own function](/en-US/docs/Learn/JavaScript/Building_blocks/Build_your_own_function)
- [Function return values](/en-US/docs/Learn/JavaScript/Building_blocks/Return_values)
- [Introduction to events](/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [Image gallery](/en-US/docs/Learn/JavaScript/Building_blocks/Image_gallery)
