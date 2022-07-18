---
title: 'Test your skills: Object basics'
slug: Learn/JavaScript/Objects/Test_your_skills:_Object_basics
tags:
  - Beginner
  - JavaScript
  - Learn
  - Objects
  - test your skills
---
{{learnsidebar}}

The aim of this skill test is to assess whether you've understood our [JavaScript object basics](/en-US/docs/Learn/JavaScript/Objects/Basics) article.

> **Note:** You can try out solutions in the interactive editors below, however it may be helpful to download the code and use an online tool such as [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/) to work on the tasks.
>
> If you get stuck, then ask us for help — see the [Assessment or further help](#assessment_or_further_help) section at the bottom of this page.

> **Note:** In the examples below, if there is an error in your code it will be outputted into the results panel on the page, to help you try to figure out the answer (or into the browser's JavaScript console, in the case of the downloadable version).

## Object basics 1

In this task you are provided with an object literal, and your tasks are to

- Store the value of the `name` property inside the `catName` variable, using bracket notation.
- Run the `greeting()` method using dot notation (it will log the greeting to the browser's console).
- Update the `color` property value to `black`.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics1.html", '100%', 400)}}

> **Callout:**
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

> **Callout:**
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics2-download.html) to work in your own editor or in an online editor.

## Object basics 3

In this task, we want you to return to the `cat` object literal from Task 1. We want you to rewrite the `greeting()` method so that it logs `"Hello, said Bertie the Cymric."` to the browser's console, but in a way that will work across _any_ cat object of the same structure, regardless of its name or breed.

When you are done, write your own object called `cat2`, which has the same structure, exactly the same `greeting()` method, but a different `name`, `breed`, and `color`.

Call both `greeting()` methods to check that they log appropriate greetings to the console.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics3.html", '100%', 400)}}

> **Callout:**
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics3-download.html) to work in your own editor or in an online editor.

## Object basics 4

In the code you wrote for Task 3, the `greeting()` method is defined twice, once for each cat. This isn't ideal (specifically, it violates a principle in programming sometimes called [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) or "Don't Repeat Yourself").

In this task we want you to improve the code so `greeting()` is only defined once, and every `cat` instance gets its own `greeting()` method. Hint: you should use a JavaScript constructor to create `cat` instances.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics4.html", '100%', 400)}}

> **Callout:**
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/object-basics/object-basics4-download.html) to work in your own editor or in an online editor.

## Assessment or further help

You can practice these examples in the Interactive Editors above.

If you would like your work assessed, or are stuck and want to ask for help:

1. Put your work into an online shareable editor such as [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/). You can write the code yourself, or use the starting point files linked to in the above sections.
2. Write a post asking for assessment and/or help at the [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn/250). Your post should include:

    - A descriptive title such as "Assessment wanted for Object basics 1 skill test".
    - Details of what you have already tried, and what you would like us to do, e.g. if you are stuck and need help, or want an assessment.
    - A link to the example you want assessed or need help with, in an online shareable editor (as mentioned in step 1 above). This is a good practice to get into — it's very hard to help someone with a coding problem if you can't see their code.
    - A link to the actual task or assessment page, so we can find the question you want help with.
