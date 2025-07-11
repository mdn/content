---
title: "Test your skills: Arrays"
short-title: Arrays
slug: Learn_web_development/Core/Scripting/Test_your_skills/Arrays
page-type: learn-module-assessment
sidebar: learnsidebar
---

The aim of this skill test is to assess whether you've understood our [Arrays](/en-US/docs/Learn_web_development/Core/Scripting/Arrays) article.

> [!NOTE]
> For Tasks 1–4, you can try solutions in the interactive editors on this page or in an online editor such as [CodePen](https://codepen.io/) or [JSFiddle](https://jsfiddle.net/).
> If you get stuck, you can reach out to us in one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Interactive challenge

First of all, we are giving you a fun, interactive arrays challenge created by our [learning partner](/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home).

Watch the embedded scrim, and complete the task on the timeline (the little ghost icon) by following the instructions and editing the code. When you are done, you can resume watching the scrim to check how the teacher's solution matches up with yours.

<scrim-inline url="https://scrimba.com/learn-javascript-c0v/~05e" scrimtitle="Render images from an array" survey="true"></scrim-inline>

> [!NOTE]
> This task is somewhat of a stretch goal, given that it relies on JavaScript features you've not yet explicitly covered during the course. Give it your best shot, and search online for information on anything you are not sure about.

## Task 1

This task gives you some basic array practice:

1. Click **"Play"** in the code block below to edit the example in the MDN Playground.
2. Create an array of three items, and store it in a variable called `myArray`. The items can be anything you want — how about your favorite foods or bands?
3. Next, modify the first two items in the array using bracket notation and assignment.
4. Finally, add a new item to the beginning of the array.

> [!CALLOUT]
>
> You can also [download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays1-download.html) to work in your own editor or in an online editor.

If you make a mistake, you can clear your work using the _Reset_ button in the MDN Playground. If you get really stuck, you can view the solution below the live output.

<!-- Code shared across examples -->

```html hidden live-sample___arrays-1 live-sample___arrays-2 live-sample___arrays-3 live-sample___arrays-4
<section></section>
```

```css hidden live-sample___arrays-1 live-sample___arrays-2 live-sample___arrays-3 live-sample___arrays-4
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

```js live-sample___arrays-1
// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `Array: ${myArray}`;
section.appendChild(para1);
```

{{ EmbedLiveSample("arrays-1", "100%", 60) }}

<details>
<summary>Click here to show the solution</summary>

Your finished JavaScript should look something like this:

```js
const myArray = ["cats", "dogs", "chickens"];

myArray[0] = "horses";
myArray[1] = "pigs";

myArray.unshift("crocodiles");

// Don't edit the code below here!
// ...
```

</details>

## Task 2

Now let's move on to another task. Here you are provided with a string to work with.

To complete the task:

1. Click **"Play"** in the code block below to edit the example in the MDN Playground.
2. Convert the string into an array, removing the `+` characters in the process. Save the result in a variable called `myArray`.
3. Store the length of the array in a variable called `arrayLength`.
4. Store the last item in the array in a variable called `lastItem`.

> [!CALLOUT]
>
> You can also [download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays2-download.html) to work in your own editor or in an online editor.

If you make a mistake, you can clear your work using the _Reset_ button in the MDN Playground. If you get really stuck, you can view the solution below the live output.

```js live-sample___arrays-2
const myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `Array: ${myArray}`;
const para2 = document.createElement("p");
para2.textContent = `The length of the array is ${arrayLength}.`;
const para3 = document.createElement("p");
para3.textContent = `The last item in the array is "${lastItem}".`;
section.appendChild(para1);
section.appendChild(para2);
section.appendChild(para3);
```

{{ EmbedLiveSample("arrays-2", "100%", 60) }}

<details>
<summary>Click here to show the solution</summary>

Your finished JavaScript should look something like this:

```js
const myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";

let myArray = myString.split("+");

let arrayLength = myArray.length;

let lastItem = myArray[arrayLength - 1];

// Don't edit the code below here!
// ...
```

</details>

## Task 3

For this array task, we provide you with a starting array, and you will work in somewhat the opposite direction. You need to:

1. Click **"Play"** in the code block below to edit the example in the MDN Playground.
2. Remove the last item in the array.
3. Add two new names to the end of the array.
4. Iterate over each item in the array and add its index number after the name inside parentheses, for example `Ryu (0)`. Note that we don't teach how to do this in the Arrays article, so you'll have to do some research.
5. Finally, join the array items together in a single string called `myString`, with a separator of `"-"`.

> [!CALLOUT]
>
> You can also [download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays3-download.html) to work in your own editor or in an online editor.

If you make a mistake, you can clear your work using the _Reset_ button in the MDN Playground. If you get really stuck, you can view the solution below the live output.

```js live-sample___arrays-3
const myArray = [
  "Ryu",
  "Ken",
  "Chun-Li",
  "Cammy",
  "Guile",
  "Sakura",
  "Sagat",
  "Juri",
];

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = myString;
section.appendChild(para1);
```

{{ EmbedLiveSample("arrays-3", "100%", 60) }}

<details>
<summary>Click here to show the solution</summary>

Your finished JavaScript should look something like this:

```js
const myArray = [
  "Ryu",
  "Ken",
  "Chun-Li",
  "Cammy",
  "Guile",
  "Sakura",
  "Sagat",
  "Juri",
];

myArray.pop();

myArray.push("Zangief");
myArray.push("Ibuki");

myArray.forEach((element, index) => {
  const newElement = `${element} (${index})`;
  myArray[index] = newElement;
});

const myString = myArray.join(" - ");

// Don't edit the code below here!
// ...
```

</details>

## Task 4

For this array task, we provide you with a starting array listing the names of some birds.

To complete the task:

1. Click **"Play"** in the code block below to edit the example in the MDN Playground.
2. Find the index of the `"Eagles"` item, and use that to remove the `"Eagles"` item.
3. Make a new array from this one, called `eBirds`, that contains only birds from the original array whose names begin with the letter "E". Note that {{jsxref("String.prototype.startsWith()", "startsWith()")}} is a great way to check whether a string starts with a given character.

If it works, you should see `"Emus,Egrets"` appear in the page.

> [!CALLOUT]
>
> You can also [download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays4-download.html) to work in your own editor or in an online editor.

If you make a mistake, you can clear your work using the _Reset_ button in the MDN Playground. If you get really stuck, you can view the solution below the live output.

```js live-sample___arrays-4
const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = eBirds;
section.appendChild(para1);
```

{{ EmbedLiveSample("arrays-4", "100%", 60) }}

<details>
<summary>Click here to show the solution</summary>

Your finished JavaScript should look something like this:

```js
const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

const eaglesIndex = birds.indexOf("Eagles");
birds.splice(eaglesIndex, 1);

function startsWithE(bird) {
  return bird.startsWith("E");
}
const eBirds = birds.filter(startsWithE);

// Don't edit the code below here!
// ...
```

</details>
