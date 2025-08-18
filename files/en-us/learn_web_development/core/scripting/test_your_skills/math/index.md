---
title: "Test your skills: Math"
short-title: "Test: Math"
slug: Learn_web_development/Core/Scripting/Test_your_skills/Math
page-type: learn-module-assessment
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}

The aim of the tests on this page is to help you assess whether you've understood the [Basic math in JavaScript — numbers and operators](/en-US/docs/Learn_web_development/Core/Scripting/Math) article.

> [!NOTE]
> To get help, read our [Test your skills](/en-US/docs/Learn_web_development#test_your_skills) usage guide. You can also reach out to us using one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Math 1

Let's start out by testing your knowledge of basic math operators.
You will create four numeric values, add two together, subtract one from another, then multiply the results.
Finally, you'll write a test to prove that this value is an even number.

To complete the task:

1. Create four variables that contain numbers. Call the variables something sensible.
2. Add the first two variables together and store the result in another variable.
3. Subtract the fourth variable from the third and store the result in another variable.
4. Multiply the results from steps **2** and **3** and store the result in a variable called `finalResult`.
5. Check if `finalResult` is an even number using one of the [arithmetic operators](/en-US/docs/Learn_web_development/Core/Scripting/Math#arithmetic_operators). Store the result (`0` for even, `1` for odd) in a variable called `evenOddResult`.

To pass this test, `finalResult` should have a value of `48` and `evenOddResult` should have a value of `0`.

<!-- Code shared across examples -->

```html hidden live-sample___math-1 live-sample___math-2 live-sample___math-3
<section></section>
```

```css hidden live-sample___math-1 live-sample___math-2 live-sample___math-3
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

```js live-sample___math-1
let finalResult;
let evenOddResult;

// Don't edit the code above here!

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
const finalResultCheck =
  finalResult === 48 ? `Yes, well done!` : `No, it is ${finalResult}`;
para1.textContent = `Is the finalResult 48? ${finalResultCheck}`;
const para2 = document.createElement("p");
const evenOddResultCheck =
  evenOddResult === 0
    ? "The final result is even!"
    : "The final result is odd. Hrm.";
para2.textContent = evenOddResultCheck;
section.appendChild(para1);
section.appendChild(para2);
```

{{ EmbedLiveSample("math-1", "100%", 80) }}

<details>
<summary>Click here to show the solution</summary>

Your finished JavaScript should look something like this:

```js
// ...
// Don't edit the code above here!

const number1 = 4;
const number2 = 8;
const number3 = 12;
const number4 = 8;

const additionResult = number1 + number2;
const subtractionResult = number3 - number4;

finalResult = additionResult * subtractionResult;

evenOddResult = finalResult % 2;

// Don't edit the code below here!
// ...
```

</details>

## Math 2

In the second task, you are provided with two calculations with the results stored in the variables `result` and `result2`.
You need to take the calculations, multiply them, and format the result to two decimal places.

To complete the task:

1. Multiply `result` and `result2` and assign the result back to `result` (use assignment shorthand).
2. Format `result` so that it has two decimal places and store it in a variable called `finalResult`.
3. Check the data type of `finalResult` using `typeof`. If it's a `string`, convert it to a `number` type and store the result in a variable called `finalNumber`.

To pass this test, `finalNumber` should have a result of `4633.33`. You might need to consider operator precedence and add or modify some parentheses to the input expressions to get the correct output.

```js live-sample___math-2
// Final result should be 4633.33

let result = 7 + 13 / 9 + 7;
let result2 = (100 / 2) * 6;

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `Your finalResult is ${finalResult}`;
const para2 = document.createElement("p");
const finalNumberCheck =
  isNaN(finalNumber) === false
    ? "finalNumber is a number type. Well done!"
    : `Oops! finalNumber is not a number.`;
para2.textContent = finalNumberCheck;
section.appendChild(para1);
section.appendChild(para2);
```

{{ EmbedLiveSample("math-2", "100%", 80) }}

<details>
<summary>Click here to show the solution</summary>

Your finished JavaScript should look something like this:

```js-nolint
// Final result should be 4633.33

let result = (7 + 13 / 9) + 7;
let result2 = 100 / 2 * 6;

result *= result2;

const finalResult = result.toFixed(2);

const finalNumber = Number(finalResult);

// Don't edit the code below here!
// ...
```

</details>

## Math 3

In the final task for this article, we want you to write some tests.

To complete the task:

1. There are three groups, each consisting of a statement and two variables. For each one, write a test that proves or disproves the statement made.
2. Store the results of those tests in variables called `weightComparison`, `heightComparison`, and `pwdMatch`, respectively.

```js live-sample___math-3
// Statement 1: The elephant weighs less than the mouse
const eleWeight = 1000;
const mouseWeight = 2;
// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;
// Statement 3: The two passwords match
const pwd1 = "stromboli";
const pwd2 = "stROmBoLi";

// Don't edit the code above here!

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
const para3 = document.createElement("p");
const weightTest = weightComparison
  ? "True — elephants do weigh less than mice!?"
  : "False — of course an elephant is heavier than a mouse!";
const heightTest = heightComparison
  ? "True — an ostrich is indeed taller than a duck!"
  : "False — apparently a duck is taller than an ostrich!?";
const pwdTest = pwdMatch
  ? "True — the passwords match."
  : "False — the passwords do not match; please check them";
para1.textContent = weightTest;
section.appendChild(para1);
para2.textContent = heightTest;
section.appendChild(para2);
para3.textContent = pwdTest;
section.appendChild(para3);
```

{{ EmbedLiveSample("math-3", "100%", 80) }}

<details>
<summary>Click here to show the solution</summary>

Your finished JavaScript should look something like this:

```js-nolint
// ...
// Don't edit the code above here!

const weightComparison = eleWeight < mouseWeight;
const heightComparison = ostrichHeight > duckHeight;
const pwdMatch = pwd1 === pwd2;

// Don't edit the code below here!
// ...
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}
