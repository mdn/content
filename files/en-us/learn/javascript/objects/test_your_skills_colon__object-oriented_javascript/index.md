---
title: "Test your skills: Object-oriented JavaScript"
slug: Learn/JavaScript/Objects/Test_your_skills:_Object-oriented_JavaScript
page-type: learn-module-assessment
---

{{learnsidebar}}

The aim of this skill test is to assess whether you've understood our [Classes in JavaScript](/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript) article.

> **Note:** You can try out solutions in the interactive editors below, however it may be helpful to download the code and use an online tool such as [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/) to work on the tasks.
>
> If you get stuck, then ask us for help — see the [Assessment or further help](#assessment_or_further_help) section at the bottom of this page.

> **Note:** In the examples below, if there is an error in your code it will be outputted into the results panel on the page, to help you try to figure out the answer (or into the browser's JavaScript console, in the case of the downloadable version).

## OOJS 1

In this task we provide you with the start of a definition for a `Shape` class. It has three properties: `name`, `sides`, and `sideLength`. This class only models shapes for which all sides are the same length, like a square or an equilateral triangle.

We'd like you to:

- Add a constructor to this class. The constructor takes arguments for the `name`, `sides`, and `sideLength` properties, and initializes them.
- Add a new method `calcPerimeter()` method to the class, which calculates its perimeter (the length of the shape's outer edge) and logs the result to the console.
- Create a new instance of the `Shape` class called `square`. Give it a `name` of `square`, `4` `sides`, and a `sideLength` of `5`.
- Call your `calcPerimeter()` method on the instance, to see whether it logs the calculation result to the browser's console as expected.
- Create a new instance of `Shape` called `triangle`, with a `name` of `triangle`, `3` `sides` and a `sideLength` of `3`.
- Call `triangle.calcPerimeter()` to check that it works OK.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/oojs/oojs1.html", '100%', 400)}}

> **Callout:**
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/oojs/oojs1-download.html) to work in your own editor or in an online editor.

## OOJS 2

Next we'd like you to create a `Square` class that inherits from `Shape`, and adds a `calcArea()` method that calculates the square's area. Also set up the constructor so that the `name` property of `Square` object instances is automatically set to `square`, and the `sides` property is automatically set to `4`. When invoking the constructor, you should therefore just need to provide the `sideLength` property.

Create an instance of the `Square` class called `square` with appropriate property values, and call its `calcPerimeter()` and `calcArea()` methods to show that it works OK.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/oojs/oojs2.html", '100%', 400)}}

> **Callout:**
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/oojs/oojs2-download.html) to work in your own editor or in an online editor.

## Assessment or further help

You can practice these examples in the Interactive Editors above.

If you would like your work assessed, or are stuck and want to ask for help:

1. Put your work into an online shareable editor such as [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/). You can write the code yourself, or use the starting point files linked to in the above sections.
2. Write a post asking for assessment and/or help at the [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn/250). Your post should include:

   - A descriptive title such as "Assessment wanted for OOJS 1 skill test".
   - Details of what you have already tried, and what you would like us to do, e.g. if you are stuck and need help, or want an assessment.
   - A link to the example you want assessed or need help with, in an online shareable editor (as mentioned in step 1 above). This is a good practice to get into — it's very hard to help someone with a coding problem if you can't see their code.
   - A link to the actual task or assessment page, so we can find the question you want help with.
