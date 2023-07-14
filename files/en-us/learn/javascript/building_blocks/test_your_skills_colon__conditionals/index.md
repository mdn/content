---
title: "Test your skills: Conditionals"
slug: Learn/JavaScript/Building_blocks/Test_your_skills:_Conditionals
page-type: learn-module-assessment
---

{{learnsidebar}}

The aim of this skill test is to assess whether you've understood our [Making decisions in your code — conditionals](/en-US/docs/Learn/JavaScript/Building_blocks/conditionals) article.

> **Note:** You can try out solutions in the interactive editors below, however it may be helpful to download the code and use an online tool such as [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/) to work on the tasks.
>
> If you get stuck, then ask us for help — see the [Assessment or further help](#assessment_or_further_help) section at the bottom of this page.

> **Note:** In the examples below, if there is an error in your code it will be outputted into the results panel on the page, to help you try to figure out the answer (or into the browser's JavaScript console, in the case of the downloadable version).

## Conditionals 1

In this task you are provided with two variables:

- `season` — contains a string that says what the current season is.
- `response` — begins uninitialized, but is later used to store a response that will be printed to the output panel.

We want you to create a conditional that checks whether `season` contains the string "summer", and if so assigns a string to `response` that gives the user an appropriate message about the season. If not, it should assign a generic string to `response` that tells the user we don't know what season it is.

To finish off, you should then add another test that checks whether `season` contains the string "winter", and again assigns an appropriate string to `response`.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals1.html", '100%', 400)}}

> **Callout:**
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals1-download.html) to work in your own editor or in an online editor.

## Conditionals 2

For this task you are given three variables:

- `machineActive` — contains an indicator of whether the answer machine is switched on or not (`true`/`false`)
- `score` — Contains your score in an imaginary game. This score is fed into the answer machine, which provides a response to indicate how well you did.
- `response` — begins uninitialized, but is later used to store a response that will be printed to the output panel.

You need to create an `if...else` structure that checks whether the machine is switched on and puts a message into the `response` variable if it isn't, telling the user to switch the machine on.

Inside the first `if...else`, you need to nest another `if...else` that puts appropriate messages into the `response` variable depending on what the value of score is — if the machine is turned on. The different conditional tests (and resulting responses) are as follows:

- Score of less than 0 or more than 100 — "This is not possible, an error has occurred."
- Score of 0 to 19 — "That was a terrible score — total fail!"
- Score of 20 to 39 — "You know some things, but it\\'s a pretty bad score. Needs improvement."
- Score of 40 to 69 — "You did a passable job, not bad!"
- Score of 70 to 89 — "That\\'s a great score, you really know your stuff."
- Score of 90 to 100 — "What an amazing score! Did you cheat? Are you for real?"

Try updating the live code below to recreate the finished example. After you've entered your code, try changing `machineActive` to `true`, to see if it works.

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals2.html", '100%', 400)}}

> **Callout:**
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals2-download.html) to work in your own editor or in an online editor.

## Conditionals 3

In this task you need to take the code you wrote for the second task, and rewrite the inner `if...else if...else` to use a `switch` statement instead.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals3.html", '100%', 400)}}

> **Callout:**
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals3-download.html) to work in your own editor or in an online editor.

## Conditionals 4

For the final task you are given four variables:

- `machineActive` — contains an indicator of whether the login machine is switched on or not (`true`/`false`).
- `pwd` — Contains the user's login password.
- `machineResult` — begins uninitialized, but is later used to store a response that will be printed to the output panel, letting the user know whether the machine is switched on.
- `pwdResult` — begins uninitialized, but is later used to store a response that will be printed to the output panel, letting the user know whether their login attempt was successful.

We'd like you to create an `if...else` structure that checks whether the machine is switched on and puts a message into the `machineResult` variable telling the user whether it is on or off.

If the machine is on, we also want a second conditional to run that checks whether the `pwd` is equal to `cheese`. If so, it should assign a string to `pwdResult` telling the user they logged in successfully. If not, it should assign a different string to `pwdResult` telling the user their login attempt was not successful. We'd like you to do this in a single line, using something that isn't an `if...else` structure.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals4.html", '100%', 400)}}

> **Callout:**
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals4-download.html) to work in your own editor or in an online editor.

## Assessment or further help

You can practice these examples in the Interactive Editors above.

If you would like your work assessed, or are stuck and want to ask for help:

1. Put your work into an online shareable editor such as [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/). You can write the code yourself, or use the starting point files linked to in the above sections.
2. Write a post asking for assessment and/or help at the [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn/250). Your post should include:

   - A descriptive title such as "Assessment wanted for Conditionals 1 skill test".
   - Details of what you have already tried, and what you would like us to do, e.g. if you are stuck and need help, or want an assessment.
   - A link to the example you want assessed or need help with, in an online shareable editor (as mentioned in step 1 above). This is a good practice to get into — it's very hard to help someone with a coding problem if you can't see their code.
   - A link to the actual task or assessment page, so we can find the question you want help with.
