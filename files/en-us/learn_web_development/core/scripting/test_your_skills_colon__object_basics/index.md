---
title: "Test your skills: Object basics"
slug: Learn_web_development/Core/Scripting/Test_your_skills:_Object_basics
page-type: learn-module-assessment
---

{{learnsidebar}}

The aim of this skill test is to assess whether you've understood our [JavaScript object basics](/en-US/docs/Learn_web_development/Core/Scripting/Object_basics) article.

> [!NOTE]
> You can try solutions in the interactive editors on this page or in an online editor such as [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/).
> If there is an error in your code, it will be logged into the results panel on this page or in the JavaScript console.
>
> If you get stuck, you can reach out to us in one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Object basics 1

In this task you are provided with an object literal, and your tasks are to

- Store the value of the `name` property inside the `catName` variable, using bracket notation.
- Run the `greeting()` method using dot notation (it will log the greeting to the browser's console).
- Update the `color` property value to `black`.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics1-download.html) to work in your own editor or in an online editor.

## Object basics 2

In our next task, we want you to have a go at creating your own object literal to represent one of your favorite bands. The required properties are:

- `name`: A string representing the band name.
- `nationality`: A string representing the country the band comes from.
- `genre`: What type of music the band plays.
- `members`: A number representing the number of members the band has.
- `formed`: A number representing the year the band formed.
- `split`: A number representing the year the band split up, or `false` if they are still together.
- `albums`: An array representing the albums released by the band. Each array item should be an object containing the following members:

  - `name`: A string representing the name of the album.
  - `released`: A number representing the year the album was released.

Include at least two albums in the `albums` array.

Once you've done this, you should then write a string to the variable `bandInfo`, which will contain a small biography detailing their name, nationality, years active, and style, and the title and release date of their first album.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics2-download.html) to work in your own editor or in an online editor.

## Object basics 3

In this task, we want you to return to the `cat` object literal from Task 1. We want you to rewrite the `greeting()` method so that it logs `"Hello, said Bertie the Cymric."` to the browser's console, but in a way that will work across _any_ cat object of the same structure, regardless of its name or breed.

When you are done, write your own object called `cat2`, which has the same structure, exactly the same `greeting()` method, but a different `name`, `breed`, and `color`.

Call both `greeting()` methods to check that they log appropriate greetings to the console.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics3-download.html) to work in your own editor or in an online editor.

## Object basics 4

In the code you wrote for Task 3, the `greeting()` method is defined twice, once for each cat. This isn't ideal (specifically, it violates a principle in programming sometimes called [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) or "Don't Repeat Yourself").

In this task we want you to improve the code so `greeting()` is only defined once, and every `cat` instance gets its own `greeting()` method. Hint: you should use a JavaScript constructor to create `cat` instances.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics4-download.html) to work in your own editor or in an online editor.
