---
title: "Test your skills: Strings"
slug: Learn/JavaScript/First_steps/Test_your_skills:_Strings
page-type: learn-module-assessment
---

{{learnsidebar}}

The aim of this skill test is to assess whether you've understood our [Handling text — strings in JavaScript](/en-US/docs/Learn/JavaScript/First_steps/Strings) and [Useful string methods](/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods) articles.

> **Note:** You can try out solutions in the interactive editors below, however it may be helpful to download the code and use an online tool such as [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/) to work on the tasks.
>
> If you get stuck, then ask us for help — see the [Assessment or further help](#assessment_or_further_help) section at the bottom of this page.

> **Note:** In the examples below, if there is an error in your code it will be outputted into the results panel on the page, to help you try to figure out the answer (or into the browser's JavaScript console, in the case of the downloadable version).

## Strings 1

In our first strings task, we start off small. You already have half of a famous quote inside a variable called `quoteStart`; we would like you to:

1. Look up the other half of the quote, and add it to the example inside a variable called `quoteEnd`.
2. Concatenate the two strings together to make a single string containing the complete quote. Save the result inside a variable called `finalQuote`.

You'll find that you get an error at this point. Can you fix the problem with `quoteStart`, so that the full quote displays correctly?

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings1.html", '100%', 400)}}

> **Callout:**
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings1-download.html) to work in your own editor or in an online editor.

## Strings 2

In this task you are provided with two variables, `quote` and `substring`, which contain two strings. We would like you to:

1. Retrieve the length of the quote, and store it in a variable called `quoteLength`.
2. Find the index position where `substring` appears in `quote`, and store that value in a variable called `index`.
3. Use a combination of the variables you have and available string properties/methods to trim down the original quote to "I do not like green eggs and ham.", and store it in a variable called `revisedQuote`.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings2.html", '100%', 400)}}

> **Callout:**
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings2-download.html) to work in your own editor or in an online editor.

## Strings 3

In the next string task, you are given the same quote that you ended up with in the previous task, but it is somewhat broken! We want you to fix and update it, like so:

1. Change the casing to correct sentence case (all lowercase, except for upper case first letter). Store the new quote in a variable called `fixedQuote`.
2. In `fixedQuote`, replace "green eggs and ham" with another food that you really don't like.
3. There is one more small fix to do — add a full stop onto the end of the quote, and save the final version in a variable called `finalQuote`.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings3.html", '100%', 400)}}

> **Callout:**
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings3-download.html) to work in your own editor or in an online editor.

## Strings 4

In the final string task, we have given you the name of a theorem, two numeric values, and an incomplete string (the bits that need adding are marked with asterisks (`*`)). We want you to change the value of the string as follows:

1. Change it from a regular string literal into a template literal.
2. Replace the four asterisks with four template literal placeholders. These should be:

   1. The name of the theorem.
   2. The two number values we have.
   3. The length of the hypotenuse of a right-angled triangle, given that the two other side lengths are the same as the two values we have. You'll need to look up how to calculate this from what you have. Do the calculation inside the placeholder.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings4.html", '100%', 400)}}

> **Callout:**
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/strings4-download.html) to work in your own editor or in an online editor.

## Assessment or further help

You can practice these examples in the Interactive Editors above.

If you would like your work assessed, or are stuck and want to ask for help:

1. Put your work into an online shareable editor such as [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/). You can write the code yourself, or use the starting point files linked to in the above sections.
2. Write a post asking for assessment and/or help at the [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn/250). Your post should include:

   - A descriptive title such as "Assessment wanted for Strings 1 skill test".
   - Details of what you have already tried, and what you would like us to do, e.g. if you are stuck and need help, or want an assessment.
   - A link to the example you want assessed or need help with, in an online shareable editor (as mentioned in step 1 above). This is a good practice to get into — it's very hard to help someone with a coding problem if you can't see their code.
   - A link to the actual task or assessment page, so we can find the question you want help with.
