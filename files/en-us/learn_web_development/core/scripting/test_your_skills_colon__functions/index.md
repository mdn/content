---
title: "Test your skills: Functions"
slug: Learn_web_development/Core/Scripting/Test_your_skills:_Functions
page-type: learn-module-assessment
---

{{learnsidebar}}

The aim of this skill test is to assess whether you've understood our [Functions — reusable blocks of code](/en-US/docs/Learn_web_development/Core/Scripting/Functions), [Build your own function](/en-US/docs/Learn_web_development/Core/Scripting/Build_your_own_function), and [Function return values](/en-US/docs/Learn_web_development/Core/Scripting/Return_values) articles.

> [!NOTE]
> You can try solutions by downloading the code and putting it in an online editor such as [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/).
> If there is an error, it will be logged in the results panel on the page or into the browser's JavaScript console to help you.
>
> If you get stuck, you can reach out to us in one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## DOM manipulation: considered useful

Some of the questions below require you to write some [DOM](/en-US/docs/Glossary/DOM) manipulation code to complete them — such as creating new HTML elements, setting their text contents to equal specific string values, and nesting them inside existing elements on the page — all via JavaScript.

We haven't explicitly taught this yet in the course, but you'll have seen some examples that make use of it, and we'd like you to do some research into what DOM APIs you need to successfully answer the questions. A good starting place is our [DOM scripting introduction](/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting) tutorial.

## Functions 1

For the first task, you have to create a simple function — `chooseName()` — that prints a random name from the provided array (`names`) to the provided paragraph (`para`), and then run it once.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions1-download.html) to work in your own editor or in an online editor.

## Functions 2

For our second functions-related task, you need to create a function that draws a rectangle on the provided `<canvas>` (reference variable `canvas`, context available in `ctx`), based on the five provided input variables:

- `x` — the x coordinate of the rectangle.
- `y` — the y coordinate of the rectangle.
- `width` — the width of the rectangle.
- `height` — the height of the rectangle.
- `color` — the color of the rectangle.

You'll want to clear the canvas before drawing, so that when the code is updated in the case of the live version, you don't get lots of rectangles drawn on top of one another.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions2-download.html) to work in your own editor or in an online editor.

## Functions 3

In this task, you return to the problem posed in Task 1, with the aim of improving it. The three improvements we want you to make are:

1. Refactor the code that generates the random number into a separate function called `random()`, which takes as parameters two generic bounds that the random number should be between, and returns the result.
2. Update the `chooseName()` function so that it makes use of the random number function, takes the array to choose from as a parameter (making it more flexible), and returns the result.
3. Print the returned result into the paragraph (`para`)'s `textContent`.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions3-download.html) to work in your own editor or in an online editor.

## Functions 4

In this task, we have an array of names, and we're using {{jsxref("Array.filter()")}} to get an array of only names shorter than 5 characters. The filter is currently being passed a named function `isShort()` which checks the length of the name, returning `true` if the name is less than 5 characters long, and `false` otherwise.

We'd like you to change this into an arrow function. See how compact you can make it.

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/functions/functions4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/functions/functions4-download.html) to work in your own editor or in an online editor.
