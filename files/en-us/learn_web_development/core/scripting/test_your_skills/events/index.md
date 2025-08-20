---
title: "Test your skills: Events"
short-title: "Test: Events"
slug: Learn_web_development/Core/Scripting/Test_your_skills/Events
page-type: learn-module-assessment
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Event_bubbling","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}

The aim of this skill test is to help you assess whether you've understood our [Introduction to events](/en-US/docs/Learn_web_development/Core/Scripting/Events) article.

> [!NOTE]
> To get help, read our [Test your skills](/en-US/docs/Learn_web_development#test_your_skills) usage guide. You can also reach out to us using one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## DOM manipulation: considered useful

Some of the questions below require you to write some [DOM](/en-US/docs/Glossary/DOM) manipulation code to complete them — such as creating new HTML elements, setting their text contents to equal specific string values, and nesting them inside existing elements on the page — all via JavaScript.

We haven't explicitly taught this yet in the course, but you'll have seen some examples that make use of it, and we'd like you to do some research into what DOM APIs you need to successfully answer the questions. A good starting place is our [DOM scripting introduction](/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting) tutorial.

## Events 1

Our first events-related task involves a {{htmlelement("button")}} that, when clicked, updates its text label. The HTML should not be changed; just the JavaScript.

To complete the task, create an event listener that causes the text inside the button (`btn`) to change when it is clicked on, and change back when it is clicked again.

```css hidden live-sample___events-1
p {
  color: purple;
  margin: 0.5em 0;
}

* {
  box-sizing: border-box;
}

button {
  display: block;
  margin: 20px 0 20px 20px;
}

canvas {
  border: 1px solid black;
}
```

```html hidden live-sample___events-1
<button class="off">Machine is off</button>
```

```js live-sample___events-1
const btn = document.querySelector("button");

// Add your code here
```

{{ EmbedLiveSample("events-1", "100%", 80) }}

<details>
<summary>Click here to show the solution</summary>

Your finished JavaScript should look something like this:

```js
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  if (btn.className === "on") {
    btn.textContent = "Machine is off";
    btn.className = "off";
  } else {
    btn.textContent = "Machine is on";
    btn.className = "on";
  }
});
```

</details>

## Events 2

Now we'll look at keyboard events.

To complete this task, create an event listener that moves the circle around the provided canvas when the WASD keys are pressed on the keyboard. The circle is drawn with the function `drawCircle()`, which takes the following parameters as inputs:

- `x` — the x coordinate of the circle.
- `y` — the y coordinate of the circle.
- `size` — the radius of the circle.

> [!WARNING]
> When testing your code, you will have to focus on the canvas before trying out your keyboard commands (for example, click on it, or tab to it with the keyboard). Otherwise they won't work.

```html hidden live-sample___events-2
<canvas width="480" height="320" tabindex="0"> </canvas>
```

```css hidden live-sample___events-2
* {
  box-sizing: border-box;
}

canvas {
  border: 1px solid black;
}
```

```js live-sample___events-2
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function drawCircle(x, y, size) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

let x = 50;
let y = 50;
const size = 30;

drawCircle(x, y, size);
// Don't edit the code above here!

// Add your code here
```

{{ EmbedLiveSample("events-2", "100%", 350) }}

<details>
<summary>Click here to show the solution</summary>

Your finished JavaScript should look something like this:

```js
// ...
// Don't edit the code above here!

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "a":
      x -= 5;
      break;
    case "d":
      x += 5;
      break;
    case "w":
      y -= 5;
      break;
    case "s":
      y += 5;
      break;
  }

  drawCircle(x, y, size);
});
```

</details>

## Events 3

In the next events-related task tests your knowledge of event bubbling. We'd like you to set an event listener on the `<button>`s' parent element (`<div class="button-bar"> … </div>`) which, when invoked by clicking any of the buttons, will set the background of the `button-bar` to the color contained in the button's `data-color` attribute.

We want you to solve this without looping through all the buttons and giving each one their own event listener.

```html hidden live-sample___events-3
<div class="button-bar">
  <button data-color="red">Red</button>
  <button data-color="yellow">Yellow</button>
  <button data-color="green">Green</button>
  <button data-color="purple">Purple</button>
</div>
```

```css hidden live-sample___events-3
* {
  box-sizing: border-box;
}

html,
body,
.button-bar {
  height: 100%;
}

.button-bar {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

button {
  padding: 5px 10px;
}
```

```js live-sample___events-3
const buttonBar = document.querySelector(".button-bar");

// Add your code here
```

{{ EmbedLiveSample("events-3", "100%", 80) }}

<details>
<summary>Click here to show the solution</summary>

Your finished JavaScript should look something like this:

```js
const buttonBar = document.querySelector(".button-bar");

function setColor(e) {
  buttonBar.style.backgroundColor = e.target.getAttribute("data-color");
}

buttonBar.addEventListener("click", setColor);
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Event_bubbling","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}
