---
title: 'Test your skills: Events'
slug: Learn/JavaScript/Building_blocks/Test_your_skills:_Events
tags:
  - Beginner
  - JavaScript
  - Learn
  - events
  - test your skills
---
{{learnsidebar}}

This aim of this skill test is to assess whether you've understood our [Introduction to events](/en-US/docs/Learn/JavaScript/Building_blocks/Events) article.

> **Note:** You can try out solutions in the interactive editors below, however it may be helpful to download the code and use an online tool such as [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/) to work on the tasks.
>
> If you get stuck, then ask us for help — see the [Assessment or further help](#assessment_or_further_help) section at the bottom of this page.

> **Note:** In the examples below, if there is an error in your code it will be outputted into the results panel on the page, to help you try to figure out the answer (or into the browser's JavaScript console, in the case of the downloadable version).

## DOM manipulation: considered useful

Some of the questions below require you to write some [DOM](/en-US/docs/Glossary/DOM) manipulation code to complete them — such as creating new HTML elements, setting their text contents to equal specific string values, and nesting them inside existing elements on the page — all via JavaScript.

We haven't explicitly taught this yet in the course, but you'll have seen some examples that make use of it, and we'd like you to do some research into what DOM APIs you need to successfully answer the questions. A good starting place is our [Manipulating documents](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents) tutorial.

## Events 1

In our first events-related task, you need to create a simple event handler that causes the text inside the button (`btn`) to change when it is clicked on, and change back when it is clicked again.

The HTML should not be changed; just the JavaScript.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/events/events1.html", '100%', 400)}}

> **Callout:**
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events1-download.html) to work in your own editor or in an online editor.

## Events 2

Now we'll look at keyboard events. To pass this assessment you need to build an event handler that moves the circle around the provided canvas when the WASD keys are pressed on the keyboard. The circle is drawn with the function `drawCircle()`, which takes the following parameters as inputs:

- `x` — the x coordinate of the circle.
- `y` — the y coordinate of the circle.
- `size` — the radius of the circle.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/events/events2.html", '100%', 650)}}

> **Callout:**
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events2-download.html) to work in your own editor or in an online editor.

## Events 3

In the next events-related task, you need to set an event listener on the `<button>`s' parent element (`<div class="button-bar"> … </div>`), which when invoked by clicking any of the buttons will set the background of the `button-bar` to the color contained in the button's `data-color` attribute.

We want you to solve this without looping through all the buttons and giving each one their own event listener.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/events/events3.html", '100%', 600)}}

> **Callout:**
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/events/events3-download.html) to work in your own editor or in an online editor.

## Assessment or further help

You can practice these examples in the Interactive Editors above.

If you would like your work assessed, or are stuck and want to ask for help:

1. Put your work into an online shareable editor such as [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/). You can write the code yourself, or use the starting point files linked to in the above sections.
2. Write a post asking for assessment and/or help at the [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn/250). Your post should include:

    - A descriptive title such as "Assessment wanted for Events 1 skill test".
    - Details of what you have already tried, and what you would like us to do, e.g. if you are stuck and need help, or want an assessment.
    - A link to the example you want assessed or need help with, in an online shareable editor (as mentioned in step 1 above). This is a good practice to get into — it's very hard to help someone with a coding problem if you can't see their code.
    - A link to the actual task or assessment page, so we can find the question you want help with.
