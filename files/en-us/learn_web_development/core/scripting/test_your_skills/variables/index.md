---
title: "Test your skills: Variables"
short-title: Variables
slug: Learn_web_development/Core/Scripting/Test_your_skills/Variables
page-type: learn-module-assessment
sidebar: learnsidebar
---

The aim of this skill test is to assess whether you've understood our [Storing the information you need — Variables](/en-US/docs/Learn_web_development/Core/Scripting/Variables) article.

> [!NOTE]
> For Tasks 1 and 2, you can try solutions in the interactive editors on this page or in an online editor such as [CodePen](https://codepen.io/) or [JSFiddle](https://jsfiddle.net/).
> If there is an error in your code, it will be logged into the results panel on this page or in the JavaScript console.
>
> If you get stuck, you can reach out to us in one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Interactive challenge

First of all, we are giving you a fun, interactive variables challenge created by our [learning partner](/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home).

Watch the embedded scrim, and complete the task on the timeline (the little ghost icon) by following the instructions and editing the code. When you are done, you can resume watching the scrim to check how the teacher's solution matches up with yours.

<scrim-inline url="https://scrimba.com/learn-javascript-c0v/~011" scrimtitle="Variables practice" survey="true"></scrim-inline>

## Task 1

To complete this task:

1. Click **"Play"** in the code block below to edit the example in the MDN Playground.
2. Add a new line to correct the value stored in the existing `myName` variable to your own name.

> [!CALLOUT]
>
> You can also [download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/variables/variables2-download.html) to work in your own editor or in an online editor.

If you make a mistake, you can clear your work using the _Reset_ button in the MDN Playground. If you get really stuck, you can view the solution below the live output.

<!-- Code shared across examples -->

```html hidden live-sample___variables-1 live-sample___variables-2
<section></section>
```

```css hidden live-sample___variables-1 live-sample___variables-2
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

```js live-sample___variables-1
let myName = "Paul";

// Don't edit the code above here!

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para = document.createElement("p");
para.textContent = myName;
section.appendChild(para);
```

{{ EmbedLiveSample("variables-1", "100%", 60) }}

<details>
<summary>Click here to show the solution</summary>

Your finished JavaScript should look something like this:

```js
// ...
// Don't edit the code above here!

myName = "Chris";

// Don't edit the code below here!
// ...
```

</details>

## Task 2

The final task for now — in this case you are provided with some existing code, which has two errors present in it. The results panel should be outputting the name `Chris`, and a statement about how old Chris will be in 20 years' time.

To complete this task:

1. Click **"Play"** in the code block below to edit the example in the MDN Playground.
2. Fix the problem and correct the output.

> [!CALLOUT]
>
> You can also [download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/variables/variables3-download.html) to work in your own editor or in an online editor.

If you make a mistake, you can clear your work using the _Reset_ button in the MDN Playground. If you get really stuck, you can view the solution below the live output.

```js live-sample___variables-2
// Fix the following code

const myName = "Default";
myName = "Chris";

let myAge = "42";

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = myName;
para2.textContent = `In 20 years, I will be ${myAge + 20}`;
section.appendChild(para1);
section.appendChild(para2);
```

{{ EmbedLiveSample("variables-2", "100%", 60) }}

<details>
<summary>Click here to show the solution</summary>

Your finished JavaScript should look something like this:

```js
// Turn the const into a let, so the value can be changed
let myName = "Default";
myName = "Chris";

// myAge needs to have a number datatype
let myAge = 42;

// Don't edit the code below here!
// ...
```

</details>
