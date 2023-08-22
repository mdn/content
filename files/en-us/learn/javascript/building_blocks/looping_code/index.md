---
title: Looping code
slug: Learn/JavaScript/Building_blocks/Looping_code
page-type: learn-module-chapter
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/conditionals","Learn/JavaScript/Building_blocks/Functions", "Learn/JavaScript/Building_blocks")}}

Programming languages are very useful for rapidly completing repetitive tasks, from multiple basic calculations to just about any other situation where you've got a lot of similar items of work to complete. Here we'll look at the loop structures available in JavaScript that handle such needs.

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
      <td>To understand how to use loops in JavaScript.</td>
    </tr>
  </tbody>
</table>

## Why are loops useful?

Loops are all about doing the same thing over and over again. Often, the code will be slightly different each time round the loop, or the same code will run but with different variables.

### Looping code example

Suppose we wanted to draw 100 random circles on a {{htmlelement("canvas")}} element (press the _Update_ button to run the example again and again to see different random sets):

```html hidden
<button>Update</button> <canvas></canvas>
```

```css hidden
html {
  width: 100%;
  height: inherit;
  background: #ddd;
}

canvas {
  display: block;
}

body {
  margin: 0;
}

button {
  position: absolute;
  top: 5px;
  left: 5px;
}
```

{{ EmbedLiveSample('Looping_code_example', '100%', 400) }}

Here's the JavaScript code that implements this example:

```js
const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
});

function random(number) {
  return Math.floor(Math.random() * number);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.arc(
      random(canvas.width),
      random(canvas.height),
      random(50),
      0,
      2 * Math.PI,
    );
    ctx.fill();
  }
}

btn.addEventListener("click", draw);
```

### With and without a loop

You don't have to understand all the code for now, but let's look at the part of the code that actually draws the 100 circles:

```js
for (let i = 0; i < 100; i++) {
  ctx.beginPath();
  ctx.fillStyle = "rgba(255,0,0,0.5)";
  ctx.arc(
    random(canvas.width),
    random(canvas.height),
    random(50),
    0,
    2 * Math.PI,
  );
  ctx.fill();
}
```

- `random(x)`, defined earlier in the code, returns a whole number between `0` and `x-1`.

You should get the basic idea — we are using a loop to run 100 iterations of this code, each one of which draws a circle in a random position on the page.
The amount of code needed would be the same whether we were drawing 100 circles, 1000, or 10,000.
Only one number has to change.

If we weren't using a loop here, we'd have to repeat the following code for every circle we wanted to draw:

```js
ctx.beginPath();
ctx.fillStyle = "rgba(255,0,0,0.5)";
ctx.arc(
  random(canvas.width),
  random(canvas.height),
  random(50),
  0,
  2 * Math.PI,
);
ctx.fill();
```

This would get very boring and difficult to maintain.

## Looping through a collection

Most of the time when you use a loop, you will have a collection of items and want to do something with every item.

One type of collection is the {{jsxref("Array")}}, which we met in the [Arrays](/en-US/docs/Learn/JavaScript/First_steps/Arrays) chapter of this course.
But there are other collections in JavaScript as well, including {{jsxref("Set")}} and {{jsxref("Map")}}.

### The for...of loop

The basic tool for looping through a collection is the {{jsxref("statements/for...of","for...of")}} loop:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

In this example, `for (const cat of cats)` says:

1. Given the collection `cats`, get the first item in the collection.
2. Assign it to the variable `cat` and then run the code between the curly brackets `{}`.
3. Get the next item, and repeat (2) until you've reached the end of the collection.

### map() and filter()

JavaScript also has more specialized loops for collections, and we'll mention two of them here.

You can use `map()` to do something to each item in a collection and create a new collection containing the changed items:

```js
function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Here we pass a function into {{jsxref("Array.prototype.map()","cats.map()")}}, and `map()` calls the function once for each item in the array, passing in the item. It then adds the return value from each function call to a new array, and finally returns the new array. In this case the function we provide converts the item to uppercase, so the resulting array contains all our cats in uppercase:

```js-nolint
[ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

You can use {{jsxref("Array.prototype.filter()","filter()")}} to test each item in a collection, and create a new collection containing only items that match:

```js
function lCat(cat) {
  return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]
```

This looks a lot like `map()`, except the function we pass in returns a [boolean](/en-US/docs/Learn/JavaScript/First_steps/Variables#booleans): if it returns `true`, then the item is included in the new array.
Our function tests that the item starts with the letter "L", so the result is an array containing only cats whose names start with "L":

```js-nolint
[ "Leopard", "Lion" ]
```

Note that `map()` and `filter()` are both often used with _function expressions_, which we will learn about in the [Functions](/en-US/docs/Learn/JavaScript/Building_blocks/Functions) module.
Using function expressions we could rewrite the example above to be much more compact:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]
```

## The standard for loop

In the "drawing circles" example above, you don't have a collection of items to loop through: you really just want to run the same code 100 times.
In a case like that, you should use the {{jsxref("statements/for","for")}} loop.
This has the following syntax:

```js-nolint
for (initializer; condition; final-expression) {
  // code to run
}
```

Here we have:

1. The keyword `for`, followed by some parentheses.
2. Inside the parentheses we have three items, separated by semicolons:

   1. An **initializer** — this is usually a variable set to a number, which is incremented to count the number of times the loop has run.
      It is also sometimes referred to as a **counter variable**.
   2. A **condition** — this defines when the loop should stop looping.
      This is generally an expression featuring a comparison operator, a test to see if the exit condition has been met.
   3. A **final-expression** — this is always evaluated (or run) each time the loop has gone through a full iteration.
      It usually serves to increment (or in some cases decrement) the counter variable, to bring it closer to the point where the condition is no longer `true`.

3. Some curly braces that contain a block of code — this code will be run each time the loop iterates.

### Calculating squares

Let's look at a real example so we can visualize what these do more clearly.

```html hidden
<button id="calculate">Calculate</button>
<button id="clear">Clear</button>
<pre id="results"></pre>
```

```js
const results = document.querySelector("#results");

function calculate() {
  for (let i = 1; i < 10; i++) {
    const newResult = `${i} x ${i} = ${i * i}`;
    results.textContent += `${newResult}\n`;
  }
  results.textContent += "\nFinished!";
}

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => (results.textContent = ""));
```

This gives us the following output:

{{ EmbedLiveSample('Calculating squares', '100%', 250) }}

This code calculates squares for the numbers from 1 to 9, and writes out the result. The core of the code is the `for` loop that performs the calculation.

Let's break down the `for (let i = 1; i < 10; i++)` line into its three pieces:

1. `let i = 1`: the counter variable, `i`, starts at `1`. Note that we have to use `let` for the counter, because we're reassigning it each time we go round the loop.
2. `i < 10`: keep going round the loop for as long as `i` is smaller than `10`.
3. `i++`: add one to `i` each time round the loop.

Inside the loop, we calculate the square of the current value of `i`, that is: `i * i`. We create a string expressing the calculation we made and the result, and add this string to the output text. We also add `\n`, so the next string we add will begin on a new line. So:

1. During the first run, `i = 1`, so we will add `1 x 1 = 1`.
2. During the second run, `i = 2`, so we will add `2 x 2 = 4`.
3. And so on…
4. When `i` becomes equal to `10` we will stop running the loop and move straight to the next bit of code below the loop, printing out the `Finished!` message on a new line.

### Looping through collections with a for loop

You can use a `for` loop to iterate through a collection, instead of a `for...of` loop.

Let's look again at our `for...of` example above:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

We could rewrite that code like this:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}
```

In this loop we're starting `i` at `0`, and stopping when `i` reaches the length of the array.
Then inside the loop, we're using `i` to access each item in the array in turn.

This works just fine, and in early versions of JavaScript, `for...of` didn't exist, so this was the standard way to iterate through an array.
However, it offers more chances to introduce bugs into your code. For example:

- you might start `i` at `1`, forgetting that the first array index is zero, not 1.
- you might stop at `i <= cats.length`, forgetting that the last array index is at `length - 1`.

For reasons like this, it's usually best to use `for...of` if you can.

Sometimes you still need to use a `for` loop to iterate through an array.
For example, in the code below we want to log a message listing our cats:

```js
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (const cat of cats) {
  myFavoriteCats += `${cat}, `;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, Jasmine, "
```

The final output sentence isn't very well-formed:

```plain
My cats are called Pete, Biggles, Jasmine,
```

We'd prefer it to handle the last cat differently, like this:

```plain
My cats are called Pete, Biggles, and Jasmine.
```

But to do this we need to know when we are on the final loop iteration, and to do that we can use a `for` loop and examine the value of `i`:

```js
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    // We are at the end of the array
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."
```

## Exiting loops with break

If you want to exit a loop before all the iterations have been completed, you can use the [break](/en-US/docs/Web/JavaScript/Reference/Statements/break) statement.
We already met this in the previous article when we looked at [switch statements](/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#switch_statements) — when a case is met in a switch statement that matches the input expression, the `break` statement immediately exits the switch statement and moves on to the code after it.

It's the same with loops — a `break` statement will immediately exit the loop and make the browser move on to any code that follows it.

Say we wanted to search through an array of contacts and telephone numbers and return just the number we wanted to find?
First, some simple HTML — a text {{htmlelement("input")}} allowing us to enter a name to search for, a {{htmlelement("button")}} element to submit a search, and a {{htmlelement("p")}} element to display the results in:

```html
<label for="search">Search by contact name: </label>
<input id="search" type="text" />
<button>Search</button>

<p></p>
```

Now on to the JavaScript:

```js
const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const searchName = input.value.toLowerCase();
  input.value = "";
  input.focus();
  para.textContent = "";
  for (const contact of contacts) {
    const splitContact = contact.split(":");
    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
      break;
    }
  }
  if (para.textContent === "") {
    para.textContent = "Contact not found.";
  }
});
```

{{ EmbedLiveSample('Exiting_loops_with_break', '100%', 100) }}

1. First of all, we have some variable definitions — we have an array of contact information, with each item being a string containing a name and phone number separated by a colon.
2. Next, we attach an event listener to the button (`btn`) so that when it is pressed some code is run to perform the search and return the results.
3. We store the value entered into the text input in a variable called `searchName`, before then emptying the text input and focusing it again, ready for the next search.
   Note that we also run the [`toLowerCase()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) method on the string, so that searches will be case-insensitive.
4. Now on to the interesting part, the `for...of` loop:

   1. Inside the loop, we first split the current contact at the colon character, and store the resulting two values in an array called `splitContact`.
   2. We then use a conditional statement to test whether `splitContact[0]` (the contact's name, again lower-cased with [`toLowerCase()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)) is equal to the inputted `searchName`.
      If it is, we enter a string into the paragraph to report what the contact's number is, and use `break` to end the loop.

5. After the loop, we check whether we set a contact, and if not we set the paragraph text to "Contact not found.".

> **Note:** You can view the [full source code on GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/contact-search.html) too (also [see it running live](https://mdn.github.io/learning-area/javascript/building-blocks/loops/contact-search.html)).

## Skipping iterations with continue

The [continue](/en-US/docs/Web/JavaScript/Reference/Statements/continue) statement works similarly to `break`, but instead of breaking out of the loop entirely, it skips to the next iteration of the loop.
Let's look at another example that takes a number as an input, and returns only the numbers that are squares of integers (whole numbers).

The HTML is basically the same as the last example — a simple numeric input, and a paragraph for output.

```html
<label for="number">Enter number: </label>
<input id="number" type="number" />
<button>Generate integer squares</button>

<p>Output:</p>
```

The JavaScript is mostly the same too, although the loop itself is a bit different:

```js
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  para.textContent = "Output: ";
  const num = input.value;
  input.value = "";
  input.focus();
  for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }
    para.textContent += `${i} `;
  }
});
```

Here's the output:

{{ EmbedLiveSample('Skipping_iterations_with_continue', '100%', 100) }}

1. In this case, the input should be a number (`num`). The `for` loop is given a counter starting at 1 (as we are not interested in 0 in this case), an exit condition that says the loop will stop when the counter becomes bigger than the input `num`, and an iterator that adds 1 to the counter each time.
2. Inside the loop, we find the square root of each number using [Math.sqrt(i)](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt), then check whether the square root is an integer by testing whether it is the same as itself when it has been rounded down to the nearest integer (this is what [Math.floor()](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) does to the number it is passed).
3. If the square root and the rounded down square root do not equal one another (`!==`), it means that the square root is not an integer, so we are not interested in it. In such a case, we use the `continue` statement to skip on to the next loop iteration without recording the number anywhere.
4. If the square root is an integer, we skip past the `if` block entirely, so the `continue` statement is not executed; instead, we concatenate the current `i` value plus a space at the end of the paragraph content.

> **Note:** You can view the [full source code on GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/integer-squares.html) too (also [see it running live](https://mdn.github.io/learning-area/javascript/building-blocks/loops/integer-squares.html)).

## while and do...while

`for` is not the only type of loop available in JavaScript. There are actually many others and, while you don't need to understand all of these now, it is worth having a look at the structure of a couple of others so that you can recognize the same features at work in a slightly different way.

First, let's have a look at the [while](/en-US/docs/Web/JavaScript/Reference/Statements/while) loop. This loop's syntax looks like so:

```js-nolint
initializer
while (condition) {
  // code to run

  final-expression
}
```

This works in a very similar way to the `for` loop, except that the initializer variable is set before the loop, and the final-expression is included inside the loop after the code to run, rather than these two items being included inside the parentheses.
The condition is included inside the parentheses, which are preceded by the `while` keyword rather than `for`.

The same three items are still present, and they are still defined in the same order as they are in the for loop.
This is because you must have an initializer defined before you can check whether or not the condition is true.
The final-expression is then run after the code inside the loop has run (an iteration has been completed), which will only happen if the condition is still true.

Let's have a look again at our cats list example, but rewritten to use a while loop:

```js
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."
```

> **Note:** This still works just the same as expected — have a look at it [running live on GitHub](https://mdn.github.io/learning-area/javascript/building-blocks/loops/while.html) (also view the [full source code](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/while.html)).

The [do...while](/en-US/docs/Web/JavaScript/Reference/Statements/do...while) loop is very similar, but provides a variation on the while structure:

```js-nolint
initializer
do {
  // code to run

  final-expression
} while (condition)
```

In this case, the initializer again comes first, before the loop starts. The keyword directly precedes the curly braces containing the code to run and the final expression.

The main difference between a `do...while` loop and a `while` loop is that _the code inside a `do...while` loop is always executed at least once_. That's because the condition comes after the code inside the loop. So we always run that code, then check to see if we need to run it again. In `while` and `for` loops, the check comes first, so the code might never be executed.

Let's rewrite our cat listing example again to use a `do...while` loop:

```js
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

let i = 0;

do {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
} while (i < cats.length);

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."
```

> **Note:** Again, this works just the same as expected — have a look at it [running live on GitHub](https://mdn.github.io/learning-area/javascript/building-blocks/loops/do-while.html) (also view the [full source code](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/do-while.html)).

> **Warning:** With while and do...while — as with all loops — you must make sure that the initializer is incremented or, depending on the case, decremented, so the condition eventually becomes false.
> If not, the loop will go on forever, and either the browser will force it to stop, or it will crash. This is called an **infinite loop**.

## Active learning: Launch countdown

In this exercise, we want you to print out a simple launch countdown to the output box, from 10 down to Blastoff.
Specifically, we want you to:

- Loop from 10 down to 0. We've provided you with an initializer — `let i = 10;`.
- For each iteration, create a new paragraph and append it to the output `<div>`, which we've selected using `const output = document.querySelector('.output');`.
  In comments, we've provided you with three code lines that need to be used somewhere inside the loop:

  - `const para = document.createElement('p');` — creates a new paragraph.
  - `output.appendChild(para);` — appends the paragraph to the output `<div>`.
  - `para.textContent =` — makes the text inside the paragraph equal to whatever you put on the right-hand side, after the equals sign.

- Different iteration numbers require different text to be put in the paragraph for that iteration (you'll need a conditional statement and multiple `para.textContent =` lines):

  - If the number is 10, print "Countdown 10" to the paragraph.
  - If the number is 0, print "Blast off!" to the paragraph.
  - For any other number, print just the number to the paragraph.

- Remember to include an iterator! However, in this example we are counting down after each iteration, not up, so you **don't** want `i++` — how do you iterate downwards?

> **Note:** If you start typing the loop (for example (while(i>=0)), the browser might get stuck because you have not yet entered the end condition. So be careful with this. You can start writing your code in a comment to deal with this issue and remove the comment after you finish.

If you make a mistake, you can always reset the example with the "Reset" button.
If you get really stuck, press "Show solution" to see a solution.

```html hidden
<h2>Live output</h2>
<div class="output" style="height: 410px;overflow: auto;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>
<textarea id="code" class="playable-code" style="height: 300px;width: 95%">
let output = document.querySelector('.output');
output.innerHTML = '';

// let i = 10;

// const para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
let code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

let jsSolution = `const output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;

while (i >= 0) {
  const para = document.createElement('p');
  if (i === 10) {
    para.textContent = \`Countdown \${i}\`;
  } else if (i === 0) {
    para.textContent = 'Blast off!';
  } else {
    para.textContent = i;
  }

  output.appendChild(para);

  i--;
}`;

let solutionEntry = jsSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;
  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );

  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = () => {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Launch_countdown', '100%', 900) }}

## Active learning: Filling in a guest list

In this exercise, we want you to take a list of names stored in an array and put them into a guest list. But it's not quite that easy — we don't want to let Phil and Lola in because they are greedy and rude, and always eat all the food! We have two lists, one for guests to admit, and one for guests to refuse.

Specifically, we want you to:

- Write a loop that will iterate through the `people` array.
- During each loop iteration, check if the current array item is equal to "Phil" or "Lola" using a conditional statement:

  - If it is, concatenate the array item to the end of the `refused` paragraph's `textContent`, followed by a comma and a space.
  - If it isn't, concatenate the array item to the end of the `admitted` paragraph's `textContent`, followed by a comma and a space.

We've already provided you with:

- `refused.textContent +=` — the beginnings of a line that will concatenate something at the end of `refused.textContent`.
- `admitted.textContent +=` — the beginnings of a line that will concatenate something at the end of `admitted.textContent`.

Extra bonus question — after completing the above tasks successfully, you will be left with two lists of names, separated by commas, but they will be untidy — there will be a comma at the end of each one.
Can you work out how to write lines that slice the last comma off in each case, and add a full stop to the end?
Have a look at the [Useful string methods](/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods) article for help.

If you make a mistake, you can always reset the example with the "Reset" button.
If you get really stuck, press "Show solution" to see a solution.

```html hidden
<h2>Live output</h2>
<div class="output" style="height: 100px;overflow: auto;">
  <p class="admitted">Admit:</p>
  <p class="refused">Refuse:</p>
</div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>
<textarea id="code" class="playable-code" style="height: 400px;width: 95%">
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here

// refused.textContent += ;
// admitted.textContent += ;

</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
let code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

const jsSolution = `
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for (const person of people) {
  if (person === 'Phil' || person === 'Lola') {
    refused.textContent += \`\${person}, \`;
  } else {
    admitted.textContent += \`\${person}, \`;
  }
}

refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';`;

let solutionEntry = jsSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;
  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );

  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = () => {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Filling_in_a_guest_list', '100%', 680) }}

## Which loop type should you use?

If you're iterating through an array or some other object that supports it, and don't need access to the index position of each item, then `for...of` is the best choice. It's easier to read and there's less to go wrong.

For other uses, `for`, `while`, and `do...while` loops are largely interchangeable.
They can all be used to solve the same problems, and which one you use will largely depend on your personal preference — which one you find easiest to remember or most intuitive.
We would recommend `for`, at least to begin with, as it is probably the easiest for remembering everything — the initializer, condition, and final-expression all have to go neatly into the parentheses, so it is easy to see where they are and check that you aren't missing them.

Let's have a look at them all again.

First `for...of`:

```js-nolint
for (const item of array) {
  // code to run
}
```

`for`:

```js-nolint
for (initializer; condition; final-expression) {
  // code to run
}
```

`while`:

```js-nolint
initializer
while (condition) {
  // code to run

  final-expression
}
```

and finally `do...while`:

```js-nolint
initializer
do {
  // code to run

  final-expression
} while (condition)
```

> **Note:** There are other loop types/features too, which are useful in advanced/specialized situations and beyond the scope of this article. If you want to go further with your loop learning, read our advanced [Loops and iteration guide](/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration).

## Test your skills!

You've reached the end of this article, but can you remember the most important information? You can find some further tests to verify that you've retained this information before you move on — see [Test your skills: Loops](/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Loops).

## Conclusion

This article has revealed to you the basic concepts behind, and different options available when looping code in JavaScript.
You should now be clear on why loops are a good mechanism for dealing with repetitive code and raring to use them in your own examples!

If there is anything you didn't understand, feel free to read through the article again, or [contact us](/en-US/docs/Learn#contact_us) to ask for help.

## See also

- [Loops and iteration in detail](/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [for...of reference](/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [for statement reference](/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [while](/en-US/docs/Web/JavaScript/Reference/Statements/while) and [do...while](/en-US/docs/Web/JavaScript/Reference/Statements/do...while) references
- [break](/en-US/docs/Web/JavaScript/Reference/Statements/break) and [continue](/en-US/docs/Web/JavaScript/Reference/Statements/continue) references

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/conditionals","Learn/JavaScript/Building_blocks/Functions", "Learn/JavaScript/Building_blocks")}}
