---
title: "Test your skills: Conditionals"
slug: Learn_web_development/Core/Scripting/Test_your_skills:_Conditionals
page-type: learn-module-assessment
---

{{learnsidebar}}

The aim of this skill test is to assess whether you've understood our [Making decisions in your code — conditionals](/en-US/docs/Learn_web_development/Core/Scripting/Conditionals) article.

> [!NOTE]
> You can try solutions by downloading the code and putting it in an online editor such as [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/).
> If there is an error, it will be logged in the results panel on the page or into the browser's JavaScript console to help you.
>
> If you get stuck, you can reach out to us in one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Conditionals 1

In this task you are provided with two variables:

- `season` — contains a string that says what the current season is.
- `response` — begins uninitialized, but is later used to store a response that will be printed to the output panel.

We want you to create a conditional that checks whether `season` contains the string "summer", and if so assigns a string to `response` that gives the user an appropriate message about the season. If not, it should assign a generic string to `response` that tells the user we don't know what season it is.

To finish off, you should then add another test that checks whether `season` contains the string "winter", and again assigns an appropriate string to `response`.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals1.html", '100%', 400)}}

> [!CALLOUT]
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
Please note that, for the scope of this exercise, the `Your score is __` statement will remain on the screen regardless of the `machineActive`'s value.

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals2-download.html) to work in your own editor or in an online editor.

## Conditionals 3

For the final task you are given four variables:

- `machineActive` — contains an indicator of whether the login machine is switched on or not (`true`/`false`).
- `pwd` — Contains the user's login password.
- `machineResult` — begins uninitialized, but is later used to store a response that will be printed to the output panel, letting the user know whether the machine is switched on.
- `pwdResult` — begins uninitialized, but is later used to store a response that will be printed to the output panel, letting the user know whether their login attempt was successful.

We'd like you to create an `if...else` structure that checks whether the machine is switched on and puts a message into the `machineResult` variable telling the user whether it is on or off.

If the machine is on, we also want a second conditional to run that checks whether the `pwd` is equal to `cheese`. If so, it should assign a string to `pwdResult` telling the user they logged in successfully. If not, it should assign a different string to `pwdResult` telling the user their login attempt was not successful. We'd like you to do this in a single line, using something that isn't an `if...else` structure.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals3-download.html) to work in your own editor or in an online editor.
