---
title: "Test your skills: Arrays"
short-title: Arrays
slug: Learn_web_development/Core/Scripting/Test_your_skills/Arrays
page-type: learn-module-assessment
sidebar: learnsidebar
---

The aim of this skill test is to assess whether you've understood our [Arrays](/en-US/docs/Learn_web_development/Core/Scripting/Arrays) article.

> [!NOTE]
> For Tasks 1–4, you can try solutions in the interactive editors on this page or in an online editor such as [CodePen](https://codepen.io/) or [JSFiddle](https://jsfiddle.net/).
> If you get stuck, you can reach out to us in one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Interactive challenge

First of all, we are giving you a fun, interactive arrays challenge created by our [learning partner](/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home).

Watch the embedded scrim, and complete the task on the timeline (the little ghost icon) by following the instructions and editing the code. When you are done, you can resume watching the scrim to check how the teacher's solution matches up with yours.

<scrim-inline url="https://scrimba.com/learn-javascript-c0v/~05e" scrimtitle="Render images from an array" survey="true"></scrim-inline>

> [!NOTE]
> This task is somewhat of a stretch goal, given that it relies on JavaScript features you've not yet explicitly covered during the course. Give it your best shot, and search online for information on anything you are not sure about.

## Task 1

This task gives you some basic array practice. Create an array of three items, and store it in a variable called `myArray`. The items can be anything you want — how about your favorite foods or bands?

Next, modify the first two items in the array using simple bracket notation and assignment. Then add a new item to the beginning of the array.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays1-download.html) to work in your own editor or in an online editor.

## Task 2

Now let's move on to another task. Here you are provided with a string to work with. We'd like you to:

1. Convert the string into an array, removing the `+` characters in the process. Save the result in a variable called `myArray`.
2. Store the length of the array in a variable called `arrayLength`.
3. Store the last item in the array in a variable called `lastItem`.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays2-download.html) to work in your own editor or in an online editor.

## Task 3

For this array task, we provide you with a starting array, and you will work in somewhat the opposite direction. You need to:

1. Remove the last item in the array.
2. Add two new names to the end of the array.
3. Go over each item in the array and add its index number after the name inside parentheses, for example `Ryu (0)`. Note that we don't teach how to do this in the Arrays article, so you'll have to do some research.
4. Finally, join the array items together in a single string called `myString`, with a separator of `"-"`.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays3-download.html) to work in your own editor or in an online editor.

## Task 4

For this array task, we provide you with a starting array listing the names of some birds.

- Find the index of the `"Eagles"` item, and use that to remove the `"Eagles"` item.
- Make a new array from this one, called `eBirds`, that contains only birds from the original array whose names begin with the letter "E". Note that {{jsxref("String.prototype.startsWith()", "startsWith()")}} is a great way to check whether a string starts with a given character.

If it works, you should see `"Emus,Egrets"` appear in the page.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays4-download.html) to work in your own editor or in an online editor.
