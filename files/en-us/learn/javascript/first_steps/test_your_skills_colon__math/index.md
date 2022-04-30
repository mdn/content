---
title: 'Test your skills: Math'
slug: Learn/JavaScript/First_steps/Test_your_skills:_Math
tags:
  - Beginner
  - JavaScript
  - Learn
  - Math
  - test your skills
---
{{learnsidebar}}

This aim of this skill test is to assess whether you've understood our [Basic math in JavaScript — numbers and operators](/en-US/docs/Learn/JavaScript/First_steps/Math) article.

> **Note:** You can try out solutions in the interactive editors below, however it may be helpful to download the code and use an online tool such as [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/) to work on the tasks.
>
> If you get stuck, then ask us for help — see the [Assessment or further help](#assessment_or_further_help) section at the bottom of this page.

> **Note:** In the examples below, if there is an error in your code it will be outputted into the results panel on the page, to help you try to figure out the answer (or into the browser's JavaScript console, in the case of the downloadable version).

## Math 1

Let's start out by testing your knowledge of basic math operators. You will have to create four numeric values, then add the first two together, then subtract the fourth from the third, then multiply the two secondary results together to get a result of 48. Finally, we need to write a test that proves that this value is an even number.

So, try updating the live code below to recreate the finished example, following these steps:

1. Create four variables that contain numbers. Call the variables something sensible.
2. Add the first two variables together and store the result in another variable.
3. Subtract the fourth variable from the third and store the result in another variable.
4. Multiply the results from the last two steps together, storing the result in a variable called `finalResult`. The product should be 48. If it isn't, you'll have to adjust some of the initial input values.
5. Finally, write a calculation that checks whether `finalResult` is an even number. Store the result in a variable called `evenOddResult`.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/math/math1.html", '100%', 400)}}

> **Callout:**
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/math/math1-download.html) to work in your own editor or in an online editor.

## Math 2

In the second task you are already provided with two calculations, with the results stored in the variables `result` and `result2`. But these results aren't what we want; you'll need to take the calculations and change them to give us what we want.

What do we want? After multiplying the two results together and formatting the result to 2 decimal places, the final result should be 10.42.

Try updating the live code below to recreate the finished example, following these steps:

1. Write a calculation that multiplies `result` and `result2` together and assigns the result back to `result`. This will require assignment shorthand.
2. Write a line of code that takes result and formats it to 2 decimal places, storing the result of this in a variable called `finalResult`.
3. Check the data type of `finalResult` using `typeof`; you'll probably see that it is actually of `string` type! Write a line of code that converts it to a `number` type, storing the result in a variable called `finalNumber`.
4. The value of `finalNumber` needs to be `10.42`. Go back and update the original calculations you were provided with so that they give this final result. Don't update the numbers or the operators.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/math/math2.html", '100%', 400)}}

> **Callout:**
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/math/math2-download.html) to work in your own editor or in an online editor.

## Math 3

In the final task for this article, we want you to write some tests. You've got three groups, each consisting of a statement and two variables. For each one, write a test that proves or disproves the statement made. Store the results of those tests in variables called `weightComparison`, `heightComparison`, and `pwdMatch`, respectively.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/math/math3.html", '100%', 550)}}

> **Callout:**
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/math/math3-download.html) to work in your own editor or in an online editor.

## Assessment or further help

You can practice these examples in the Interactive Editors above.

If you would like your work assessed, or are stuck and want to ask for help:

1. Put your work into an online shareable editor such as [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/). You can write the code yourself, or use the starting point files linked to in the above sections.
2. Write a post asking for assessment and/or help at the [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn/250). Your post should include:

    - A descriptive title such as "Assessment wanted for Math 1 skill test".
    - Details of what you have already tried, and what you would like us to do, e.g. if you are stuck and need help, or want an assessment.
    - A link to the example you want assessed or need help with, in an online shareable editor (as mentioned in step 1 above). This is a good practice to get into — it's very hard to help someone with a coding problem if you can't see their code.
    - A link to the actual task or assessment page, so we can find the question you want help with.
