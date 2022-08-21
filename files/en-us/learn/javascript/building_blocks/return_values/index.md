---
title: Function return values
slug: Learn/JavaScript/Building_blocks/Return_values
tags:
  - Article
  - Beginner
  - CodingScripting
  - Functions
  - Guide
  - JavaScript
  - Learn
  - Return
  - Return values
  - l10n:priority
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Build_your_own_function","Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}

There's one last essential concept about functions for us to discuss — return values. Some functions don't return a significant value, but others do. It's important to understand what their values are, how to use them in your code, and how to make functions return useful values. We'll cover all of these below.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        <p>
          Basic computer literacy, a basic understanding of HTML and CSS,
          <a href="/en-US/docs/Learn/JavaScript/First_steps"
            >JavaScript first steps</a
          >,
          <a href="/en-US/docs/Learn/JavaScript/Building_blocks/Functions"
            >Functions — reusable blocks of code</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To understand function return values, and how to make use of them.
      </td>
    </tr>
  </tbody>
</table>

## What are return values?

**Return values** are just what they sound like — the values that a function returns when it has completed. You've already met return values a number of times, although you may not have thought about them explicitly.

Let's return to a familiar example (from a [previous article](/en-US/docs/Learn/JavaScript/Building_blocks/Functions#built-in_browser_functions) in this series):

```js
const myText = 'The weather is cold';
const newString = myText.replace('cold', 'warm');
console.log(newString); // Should print "The weather is warm"
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made
```

The [`replace()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) function is invoked on the `myText` string, and is passed two parameters:

1. the substring to find ('cold').
2. the string to replace it with ('warm').

When the function completes (finishes running), it returns a value, which is a new string with the replacement made. In the code above, the result of this return value is saved in the variable `newString`.

If you look at the [`replace()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) function MDN reference page, you'll see a section called [return value](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#return_value). It is very useful to know and understand what values are returned by functions, so we try to include this information wherever possible.

Some functions don't return any value. (In these cases, our reference pages list the return value as [`void`](/en-US/docs/Web/JavaScript/Reference/Operators/void) or [`undefined`](/en-US/docs/Glossary/undefined).) For example, in the [`displayMessage()`](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-stage-4.html#L50) function we built in the previous article, no specific value is returned when the function is invoked. It just makes a box appear somewhere on the screen — that's it!

Generally, a return value is used where the function is an intermediate step in a calculation of some kind. You want to get to a final result, which involves some values that need to be calculated by a function. After the function calculates the value, it can return the result so it can be stored in a variable; and you can use this variable in the next stage of the calculation.

### Using return values in your own functions

To return a value from a custom function, you need to use the [return](/en-US/docs/Web/JavaScript/Reference/Statements/return) keyword. We saw this in action recently in our [random-canvas-circles.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html) example. Our `draw()` function draws 100 random circles somewhere on an HTML {{htmlelement("canvas")}}:

```js
function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}
```

Inside each loop iteration, three calls are made to the `random()` function, to generate a random value for the current circle's _x-coordinate_, _y-coordinate_, and _radius_, respectively. The `random()` function takes one parameter — a whole number — and it returns a whole random number between `0` and that number. It looks like this:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

This could be written as follows:

```js
function random(number) {
  const result = Math.floor(Math.random() * number);
  return result;
}
```

But the first version is quicker to write, and more compact.

We are returning the result of the calculation `Math.floor(Math.random() * number)` each time the function is called. This return value appears at the point the function was called, and the code continues.

So when you execute the following:

```js
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
```

If the three `random()` calls returned the values `500`, `200`, and `35`, respectively, the line would actually be run as if it were this:

```js
ctx.arc(500, 200, 35, 0, 2 * Math.PI);
```

The function calls on the line are run first, and their return values substituted for the function calls, before the line itself is then executed.

## Active learning: our own return value function

Let's have a go at writing our own functions featuring return values.

1. First of all, make a local copy of the [function-library.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-library.html) file from GitHub. This is a simple HTML page containing a text {{htmlelement("input")}} field and a paragraph. There's also a {{htmlelement("script")}} element, in which we have stored a reference to both HTML elements in two variables. This little page will allow you to enter a number into the text box, and display different numbers related to it in the paragraph below.
2. Let's add some useful functions to this `<script>` element. Below the two existing lines of [JavaScript](/en-US/docs/Web/JavaScript), add the following function definitions:

    ```js
    function squared(num) {
      return num * num;
    }

    function cubed(num) {
      return num * num * num;
    }

    function factorial(num) {
      if (num < 0) return undefined;
      if (num === 0) return 1;
      let x = num - 1;
      while (x > 1) {
        num *= x;
        x--;
      }
      return num;
    }
    ```

    The `squared()` and `cubed()` functions are fairly obvious — they return the square or cube of the number that was given as a parameter. The `factorial()` function returns the [factorial](https://en.wikipedia.org/wiki/Factorial) of the given number.

3. Next, we're going to include a way to print out information about the number entered into the text input. Enter the following event handler below the existing functions:

    ```js
    input.addEventListener('change', () => {
      const num = parseFloat(input.value);
      if (isNaN(num)) {
        para.textContent = 'You need to enter a number!';
      } else {
        para.textContent = `${num} squared is ${squared(num)}. `;
        para.textContent += `${num} cubed is ${cubed(num)}. `;
        para.textContent += `${num} factorial is ${factorial(num)}. `;
      }
    });
    ```

    Here we are adding a listener to the `change` event. It runs whenever the `change` event fires on the text input — that is, when a new value is entered into the text `input`, and submitted (e.g., enter a value, then un-focus the input by pressing <kbd>Tab</kbd> or <kbd>Return</kbd>). When this anonymous function runs, the value in the `input` is stored in the `num` constant.

    Next, we do a conditional test. If the entered value is not a number, an error message is printed to the paragraph. The test looks at whether the expression `isNaN(num)` returns `true`. The [`isNaN()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN) function to test whether the `num` value is not a number — if so, it returns `true`, and if not, it returns `false`.

    If the test returns `false`, the `num` value is a number. Therefore, a sentence is printed out inside the paragraph element that states the square, cube, and factorial values of the number. The sentence calls the `squared()`, `cubed()`, and `factorial()` functions to calculate the required values.

4. Save your code, load it in a browser, and try it out.

> **Note:** If you have trouble getting the example to work, feel free to check your code against the [finished version on GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-library-finished.html) ([see it running live](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-library-finished.html) also), or ask us for help.

## Now it's your turn!

At this point, we'd like you to have a go at writing out a couple of functions of your own and adding them to the library. How about the square or cube root of the number? Or the circumference of a circle with a given radius?

Some extra function related tips:

- Look at another example of writing _error handling_ into functions. It is generally a good idea to check that any necessary parameters are validated, and that any optional parameters have some kind of default value provided. This way, your program will be less likely to throw errors.
- Think about the idea of creating a _function library_. As you go further into your programming career, you'll start doing the same kinds of things over and over again. It is a good idea to create your own library of utility functions to do these sorts of things. You can copy them over to new code, or even just apply it to HTML pages wherever you need it.

## Test your skills!

You've reached the end of this article, but can you remember the most important information? You can find some further tests to verify that you've retained this information before you move on — see [Test your skills: Functions](/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Functions).

## Conclusion

So there we have it — functions are fun, very useful, and although there's a lot to talk about in regards to their syntax and functionality, they are fairly understandable.

If there is anything you didn't understand, feel free to read through the article again, or [contact us](/en-US/docs/Learn#contact_us) to ask for help.

## See also

- [Functions in-depth](/en-US/docs/Web/JavaScript/Reference/Functions) — a detailed guide covering more advanced functions-related information.
- [Callback functions in JavaScript](https://www.impressivewebs.com/callback-functions-javascript/) — a common JavaScript pattern is to pass a function into another function _as an argument_. It is then called inside the first function. This is a little beyond the scope of this course, but worth studying before too long.

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Build_your_own_function","Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}

## In this module

- [Making decisions in your code — conditionals](/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
- [Looping code](/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code)
- [Functions — reusable blocks of code](/en-US/docs/Learn/JavaScript/Building_blocks/Functions)
- [Build your own function](/en-US/docs/Learn/JavaScript/Building_blocks/Build_your_own_function)
- **Function return values**
- [Introduction to events](/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [Image gallery](/en-US/docs/Learn/JavaScript/Building_blocks/Image_gallery)
