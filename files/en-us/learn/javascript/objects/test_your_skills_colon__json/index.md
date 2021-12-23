---
title: 'Test your skills: JSON'
slug: Learn/JavaScript/Objects/Test_your_skills:_JSON
tags:
  - Beginner
  - Example
  - JSON
  - JavaScript
---
{{learnsidebar}}

This aim of this skill test is to assess whether you've understood our [Working with JSON](/en-US/docs/Learn/JavaScript/Objects/JSON) article.

> **Note:** You can try out the solution in the interactive editor below. If you get stuck, then ask us for help — see the {{anch("Assessment or further help")}} section at the bottom of this page.

> **Note:** In the example below, if there is an error in your code it will be outputted into the results panel on the page, to help you try to figure out the answer (or into the browser's JavaScript console, in the case of the downloadable version).

## JSON 1

The one and only task in this article concerns accessing JSON data and using it in your page. JSON data about some mother cats and their kittens is available in [sample.json](https://github.com/mdn/learning-area/blob/master/javascript/oojs/tasks/json/sample.json). The JSON is loaded into the page as a text string and made available in the `catString` parameter of the `displayCatInfo()` function, called when the provided promise chain (which starts by fetching the JSON data) is fulfilled. Your task is to fill in the missing parts of the `displayCatInfo()` function to store:

- The names of the three mother cats, separated by commas, in the `motherInfo` variable.
- The total number of kittens, and how many are male and female, in the `kittenInfo` variable.

The values of these variables are then printed to the screen inside paragraphs.

Some hints/questions:

- The JSON data is provided as text inside the `displayCatInfo()` function. You'll need to parse it into JSON before you can get any data out of it.
- You'll probably want to use an outer loop to loop through the cats and add their names to the `motherInfo` variable string, and an inner loop to loop through all the kittens, add up the total of all/male/female kittens, and add those details to the `kittenInfo` variable string.
- The last mother cat name should have an "and" before it, and a full stop after it. How do you make sure this can work, no matter how many cats are in the JSON?
- Why are the `para1.textContent = motherInfo;` and `para2.textContent = kittenInfo;` lines inside the `displayCatInfo()` function, and not at the end of the script? This has something to do with async code.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/json/json1.html", '100%', 400)}}

> **Warning:** To answer this question, you'll need to write your code into the live code window above. The example won't work locally, or in an environment like CodePen or JSFiddle, because of something called _cross-origin security_. This basically means that you can't request a file from one origin using code on a different origin. In the live code editor above, both the JavaScript code and the requested JSON file are on the same origin (the code sits on a GitHub repo, and is embedded here in an [`<iframe>`](/en-US/docs/Web/HTML/Element/iframe)). If you put your code on CodePen for example, it would fail because the JSON it is requesting is not on the same origin. You can get around these restrictions using [CORS](/en-US/docs/Web/HTTP/CORS), but this is beyond the scope of what we are teaching here.

## Assessment or further help

You can practice these examples in the Interactive Editor above.

If you would like your work assessed, or are stuck and want to ask for help:

1.  Write a post asking for assessment and/or help at the [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn). Your post should include:

    - A descriptive title such as "Assessment wanted for JSON skill test".
    - Details of what you have already tried, and what you would like us to do, e.g. if you are stuck and need help, or want an assessment.
    - Your code.
    - A link to the actual task or assessment page, so we can find the question you want help with.
