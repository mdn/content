---
title: "Test your skills: Conditionals"
short-title: "Test: Conditionals"
slug: Learn_web_development/Core/Scripting/Test_your_skills/Conditionals
page-type: learn-module-assessment
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting/Loops", "Learn_web_development/Core/Scripting")}}

The aim of this skill test is to help you assess whether you've understood our [Making decisions in your code — conditionals](/en-US/docs/Learn_web_development/Core/Scripting/Conditionals) article.

> [!NOTE]
> To get help, read our [Test your skills](/en-US/docs/Learn_web_development#test_your_skills) usage guide. You can also reach out to us using one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Conditionals 1

In this task you are provided with two variables:

- `season` — contains a string that says what the current season is.
- `response` — begins uninitialized, but is later used to store a response that will be printed to the output panel.

To complete the task:

1. Create a conditional that checks whether `season` contains the string "summer", and if so assigns a string to `response` that gives the user an appropriate message about the season. If not, it should assign a generic string to `response` that tells the user we don't know what season it is.
2. Add another conditional that checks whether `season` contains the string "winter", and again assigns an appropriate string to `response`.

<!-- Code shared across examples -->

```html hidden live-sample___conditionals-1 live-sample___conditionals-2 live-sample___conditionals-3
<section></section>
```

```css hidden live-sample___conditionals-1 live-sample___conditionals-2 live-sample___conditionals-3
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

```js live-sample___conditionals-1
let season = "summer";
let response;

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = response;
section.appendChild(para1);
```

{{ EmbedLiveSample("conditionals-1", "100%", 60) }}

<details>
<summary>Click here to show the solution</summary>

Your finished JavaScript should look something like this:

```js
let season = "summer";
let response;

if (season === "summer") {
  response = "It's probably nice and warm where you are; enjoy the sun!";
} else if (season === "winter") {
  response = "I hope you are not too cold. Put some warm clothes on!";
} else {
  response =
    "I don't know what the season is where you are. Hope you are well.";
}

// Don't edit the code below here!
// ...
```

</details>

## Conditionals 2

For this task you are given three variables:

- `machineActive`: Contains an indicator of whether the answer machine is switched on or not (`true`/`false`).
- `score`: Contains your score in an imaginary game. This score is fed into the answer machine, which provides a response to indicate how well you did.
- `response`: Begins uninitialized, but is later used to store a response that will be printed to the output panel.

To complete the task:

1. Create an `if...else` structure that checks whether the machine is switched on and puts a message into the `response` variable if it isn't, telling the user to switch the machine on.
2. Inside the first `if...else`, nest another `if...else` that puts appropriate messages into the `response` variable depending on what the value of `score` is — if the machine is turned on. The different conditional tests (and resulting responses) are as follows:
   - Score of less than 0 or more than 100 — "This is not possible, an error has occurred."
   - Score of 0 to 19 — "That was a terrible score — total fail!"
   - Score of 20 to 39 — "You know some things, but it's a pretty bad score. Needs improvement."
   - Score of 40 to 69 — "You did a passable job, not bad!"
   - Score of 70 to 89 — "That's a great score, you really know your stuff."
   - Score of 90 to 100 — "What an amazing score! Did you cheat? Are you for real?"

After you've entered your code, try changing `machineActive` to `true`, and `score` to a few different values to see if it works.
Please note that, for the scope of this exercise, the `Your score is __` string will remain on the screen regardless of the `machineActive` variable's value.

```js live-sample___conditionals-2
let response;
let score = 75;
let machineActive = false;

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = `Your score is ${score}`;
para2.textContent = response;
section.appendChild(para1);
section.appendChild(para2);
```

{{ EmbedLiveSample("conditionals-2", "100%", 60) }}

<details>
<summary>Click here to show the solution</summary>

Your finished JavaScript should look something like this:

```js
let response;
let score = 75;
let machineActive = false;

if (machineActive) {
  if (score < 0 || score > 100) {
    response = "This is not possible, an error has occurred.";
  } else if (score >= 0 && score < 20) {
    response = "That was a terrible score — total fail!";
  } else if (score >= 20 && score < 40) {
    response =
      "You know some things, but it's a pretty bad score. Needs improvement.";
  } else if (score >= 40 && score < 70) {
    response = "You did a passable job, not bad!";
  } else if (score >= 70 && score < 90) {
    response = "That's a great score, you really know your stuff.";
  } else if (score >= 90 && score <= 100) {
    response = "What an amazing score! Did you cheat? Are you for real?";
  }
} else {
  response = "The machine is turned off. Turn it on to process your score.";
}

// Don't edit the code below here!
// ...
```

</details>

## Conditionals 3

For the final task you are given four variables:

- `machineActive`: Contains an indicator of whether the login machine is switched on or not (`true`/`false`).
- `pwd`: Contains the user's login password.
- `machineResult`: Begins uninitialized, but is later used to store a response that will be printed to the output panel, letting the user know whether the machine is switched on.
- `pwdResult`: Begins uninitialized, but is later used to store a response that will be printed to the output panel, letting the user know whether their login attempt was successful.

To complete the task:

1. Create an `if...else` structure that checks whether the machine is switched on and puts a message into the `machineResult` variable telling the user whether it is on or off.
2. If the machine is on, we also want a second conditional to run that checks whether the `pwd` is equal to `cheese`. If so, it should assign a string to `pwdResult` telling the user they logged in successfully. If not, it should assign a different string to `pwdResult` telling the user their login attempt was not successful. We'd like you to do this in a single line, using something that isn't an `if...else` structure.

```js live-sample___conditionals-3
let machineActive = true;
let pwd = "cheese";

let machineResult;
let pwdResult;

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = machineResult;
para2.textContent = pwdResult;
section.appendChild(para1);
section.appendChild(para2);
```

{{ EmbedLiveSample("conditionals-3", "100%", 60) }}

<details>
<summary>Click here to show the solution</summary>

Your finished JavaScript should look something like this:

```js
let machineActive = true;
let pwd = "cheese";

let machineResult;
let pwdResult;

if (machineActive) {
  machineResult = "Machine is active. Trying login.";
  pwdResult =
    pwd === "cheese"
      ? "Login successful."
      : "Password incorrect; login failed.";
} else {
  machineResult = "Machine is inactive. Activate and try logging in again.";
}

// Don't edit the code below here!
// ...
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting/Loops", "Learn_web_development/Core/Scripting")}}
