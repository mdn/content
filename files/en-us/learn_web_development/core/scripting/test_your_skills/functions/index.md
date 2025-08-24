---
title: "Test your skills: Functions"
short-title: "Test: Functions"
slug: Learn_web_development/Core/Scripting/Test_your_skills/Functions
page-type: learn-module-assessment
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Return_values","Learn_web_development/Core/Scripting/Events", "Learn_web_development/Core/Scripting")}}

The aim of this skill test is to help you assess whether you've understood our [Functions — reusable blocks of code](/en-US/docs/Learn_web_development/Core/Scripting/Functions), [Build your own function](/en-US/docs/Learn_web_development/Core/Scripting/Build_your_own_function), and [Function return values](/en-US/docs/Learn_web_development/Core/Scripting/Return_values) articles.

> [!NOTE]
> To get help, read our [Test your skills](/en-US/docs/Learn_web_development#test_your_skills) usage guide. You can also reach out to us using one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## DOM manipulation: considered useful

Some of the questions below require you to write some [DOM](/en-US/docs/Glossary/DOM) manipulation code to complete them — such as creating new HTML elements, setting their text contents to equal specific string values, and nesting them inside existing elements on the page — all via JavaScript.

We haven't explicitly taught this yet in the course, but you'll have seen some examples that make use of it, and we'd like you to do some research into what DOM APIs you need to successfully answer the questions. A good starting place is our [DOM scripting introduction](/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting) tutorial.

## Interactive challenge

First of all, we are giving you a fun, interactive challenge involving function return values, created by our [learning partner](/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home).

Watch the embedded scrim, and complete the task on the timeline (the little ghost icon) by following the instructions and editing the code. When you are done, you can resume watching the scrim to check how the teacher's solution matches up with yours.

<scrim-inline url="https://scrimba.com/learn-javascript-c0v/~02h" scrimtitle="Returning values in functions" survey="true"></scrim-inline>

## Task 1

To complete our first functions task:

1. Define a function—`chooseName()`—that prints a random name from the provided array (`names`) into the provided paragraph (`para`).
2. Call the `chooseName()` function once.

<!-- Code shared across examples -->

```html hidden live-sample___functions-1 live-sample___functions-3 live-sample___functions-4
<p></p>
```

```css hidden live-sample___functions-1 live-sample___functions-3 live-sample___functions-4
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

```js live-sample___functions-1
const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.querySelector("p");

// Don't edit the code above here!

// Add your code here
```

{{ EmbedLiveSample("functions-1", "100%", 60) }}

<details>
<summary>Click here to show the solution</summary>

Your finished JavaScript should look something like this:

```js
// ...
// Don't edit the code above here!

function chooseName() {
  const randomNumber = Math.floor(Math.random() * names.length);
  const choice = names[randomNumber];
  para.textContent = choice;
}

chooseName();
```

</details>

## Task 2

This task requires you to create a function that draws a rectangle on the provided `<canvas>` (reference variable `canvas`, context available in `ctx`), based on the five provided input variables:

- `x` — the x coordinate of the rectangle.
- `y` — the y coordinate of the rectangle.
- `width` — the width of the rectangle.
- `height` — the height of the rectangle.
- `color` — the color of the rectangle.

```html hidden live-sample___functions-2
<canvas width="240" height="160"></canvas>
```

```css hidden live-sample___functions-2
canvas {
  border: 1px solid black;
}
```

```js live-sample___functions-2
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = "blue";

// Don't edit the code above here!

// Add your code here
```

{{ EmbedLiveSample("functions-2", "100%", 180) }}

<details>
<summary>Click here to show the solution</summary>

Your finished JavaScript should look something like this:

```js
// ...
// Don't edit the code above here!

function drawSquare(x, y, width, height, color) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

drawSquare(x, y, width, height, color);
```

</details>

## Task 3

In this task, you return to the problem posed in Task 1, with the aim of making three improvements to it.

To complete the task:

1. Refactor the code that generates the random number into a separate function called `random()`, which takes as parameters two generic bounds that the random number should be between, and returns the result.
2. Update the `chooseName()` function so that it makes use of the random number function, takes the array to choose from as a parameter (making it more flexible), and returns the result.
3. Print the returned result into the paragraph (`para`)'s `textContent`.

```js live-sample___functions-3
const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.querySelector("p");

// Don't edit the code above here!

// Update the code below here

function chooseName() {
  const randomNumber = Math.floor(Math.random() * names.length);
  const choice = names[randomNumber];
  para.textContent = choice;
}

chooseName();
```

{{ EmbedLiveSample("functions-3", "100%", 60) }}

<details>
<summary>Click here to show the solution</summary>

Your finished JavaScript should look something like this:

```js
// ...
// Don't edit the code above here!

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function chooseItem(array) {
  const choice = array[random(0, array.length)];
  return choice;
}

para.textContent = chooseItem(names);
```

</details>

## Task 4

In this task, we have an array of names, and we're using {{jsxref("Array.filter()")}} to get an array containing only the names shorter than 5 characters. The filter is currently being passed a named function `isShort()`. This checks the length of the name, returning `true` if the name is less than 5 characters long, and `false` otherwise.

To complete the task, update the code so that the functionality inside `isShort()` is instead included directly inside the `filter()` call as an arrow function. See how compact you can make it.

```js live-sample___functions-4
const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.querySelector("p");

// Don't edit the code above here!

// Update the code below here

function isShort(name) {
  return name.length < 5;
}

const shortNames = names.filter(isShort);
para.textContent = shortNames;
```

{{ EmbedLiveSample("functions-4", "100%", 60) }}

<details>
<summary>Click here to show the solution</summary>

Your finished JavaScript should look something like this:

```js
// ...
// Don't edit the code above here!

// Update the code below here

const shortNames = names.filter((name) => name.length < 5);
para.textContent = shortNames;
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Return_values","Learn_web_development/Core/Scripting/Events", "Learn_web_development/Core/Scripting")}}
