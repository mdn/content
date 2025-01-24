---
title: "Test your skills: Math"
slug: Learn_web_development/Core/Scripting/Test_your_skills:_Math
page-type: learn-module-assessment
---

{{learnsidebar}}

The aim of the tests on this page is to assess whether you've understood the [Basic math in JavaScript — numbers and operators](/en-US/docs/Learn_web_development/Core/Scripting/Math) article.

> [!NOTE]
> You can try solutions in the interactive editors on this page or in an online editor such as [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/).
> If there is an error in your code, it will be logged into the results panel on this page or in the JavaScript console.
>
> If you get stuck, you can reach out to us in one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Math 1

Let's start out by testing your knowledge of basic math operators.
You will create four numeric values, add two together, subtract one from another, then multiply the results.
Finally, we need to write a check that proves that this value is an even number.

Try updating the live code below to recreate the finished example by following these steps:

1. Create four variables that contain numbers. Call the variables something sensible.
2. Add the first two variables together and store the result in another variable.
3. Subtract the fourth variable from the third and store the result in another variable.
4. Multiply the results from steps **2** and **3** and store the result in a variable called `finalResult`.
5. Check if `finalResult` is an even number using one of the [arithmetic operators](/en-US/docs/Learn_web_development/Core/Scripting/Math#arithmetic_operators). Store the result (`0` for even, `1` for odd) in a variable called `evenOddResult`.

To pass this test, `finalResult` should have a value of `48` and `evenOddResult` should have a value of `0`.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/math/math1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/math/math1-download.html) to work in your own editor or in an online editor.

## Math 2

In the second task, you are provided with two calculations with the results stored in the variables `result` and `result2`.
You need to take the calculations, multiply them, and format the result to two decimal places.

Try updating the live code below to recreate the finished example by following these steps:

1. Multiply `result` and `result2` and assign the result back to `result` (use assignment shorthand).
2. Format `result` so that it has two decimal places and store it in a variable called `finalResult`.
3. Check the data type of `finalResult` using `typeof`. If it's a `string`, convert it to a `number` type and store the result in a variable called `finalNumber`.

To pass this test, `finalNumber` should have a result of `4633.33`.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/math/math2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/math/math2-download.html) to work in your own editor or in an online editor.

## Math 3

In the final task for this article, we want you to write some tests.
There are three groups, each consisting of a statement and two variables.
For each one, write a test that proves or disproves the statement made.
Store the results of those tests in variables called `weightComparison`, `heightComparison`, and `pwdMatch`, respectively.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/math/math3.html", '100%', 550)}}

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/math/math3-download.html) to work in your own editor or in an online editor.
