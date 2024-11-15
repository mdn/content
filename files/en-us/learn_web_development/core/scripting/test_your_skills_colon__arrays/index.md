---
title: "Test your skills: Arrays"
slug: Learn_web_development/Core/Scripting/Test_your_skills:_Arrays
page-type: learn-module-assessment
---

{{learnsidebar}}

The aim of this skill test is to assess whether you've understood our [Arrays](/en-US/docs/Learn_web_development/Core/Scripting/Arrays) article.

> [!NOTE]
> You can try solutions in the interactive editors on this page or in an online editor such as [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/).
>
> If you get stuck, you can reach out to us in one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Arrays 1

Let's start off with some basic array practice. In this task we'd like you to create an array of three items, stored inside a variable called `myArray`. The items can be anything you want — how about your favorite foods or bands?

Next, modify the first two items in the array using simple bracket notation and assignment. Then add a new item to the beginning of the array.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays1-download.html) to work in your own editor or in an online editor.

## Arrays 2

Now let's move on to another task. Here you are provided with a string to work with. We'd like you to:

1. Convert the string into an array, removing the `+` characters in the process. Save the result in a variable called `myArray`.
2. Store the length of the array in a variable called `arrayLength`.
3. Store the last item in the array in a variable called `lastItem`.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays2-download.html) to work in your own editor or in an online editor.

## Arrays 3

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

## Arrays 4

For this array task, we provide you with a starting array listing the names of some birds.

- Find the index of the `"Eagles"` item, and use that to remove the `"Eagles"` item.
- Make a new array from this one, called `eBirds`, that contains only birds from the original array whose names begin with the letter "E". Note that {{jsxref("String.prototype.startsWith()", "startsWith()")}} is a great way to check whether a string starts with a given character.

If it works, you should see `"Emus,Egrets"` appear in the page.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/arrays/arrays4.html", '100%', 400)}}

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/arrays/arrays4-download.html) to work in your own editor or in an online editor.
