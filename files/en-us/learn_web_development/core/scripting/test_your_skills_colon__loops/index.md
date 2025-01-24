---
title: "Test your skills: Loops"
slug: Learn_web_development/Core/Scripting/Test_your_skills:_Loops
page-type: learn-module-assessment
---

{{learnsidebar}}

The aim of this skill test is to assess whether you've understood our [Looping code](/en-US/docs/Learn_web_development/Core/Scripting/Loops) article.

> [!NOTE]
> You can try solutions by downloading the code and putting it in an online editor such as [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/).
>
> If you get stuck, you can reach out to us in one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## DOM manipulation: considered useful

Some of the questions below require you to write some [DOM](/en-US/docs/Glossary/DOM) manipulation code to complete them — such as creating new HTML elements, setting their text contents to equal specific string values, and nesting them inside existing elements on the page — all via JavaScript.

We haven't explicitly taught this yet in the course, but you'll have seen some examples that make use of it, and we'd like you to do some research into what DOM APIs you need to successfully answer the questions. A good starting place is our [DOM scripting introduction](/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting) tutorial.

## Loops 1

In our first looping task we want you to start by creating a simple loop that goes through all the items in the provided `myArray` and prints them out on the screen inside list items (i.e., [`<li>`](/en-US/docs/Web/HTML/Element/li) elements), which are appended to the provided `list`.

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops1-download.html) to work in your own editor or in an online editor.

## Loops 2

In this next task, we want you to write a simple program that, given a name, searches an array of [objects](/en-US/docs/Glossary/Object) containing names and phone numbers (`phonebook`) and, if it finds the name, outputs the name and phone number into the paragraph (`para`) and then exits the loop before it has run its course.

If you haven't read about objects yet, don't worry! For now, all you need to know is how to access a member-value pair. You can read up on objects in the [JavaScript object basics](/en-US/docs/Learn_web_development/Core/Scripting/Object_basics) tutorial.

You are given three variables to begin with:

- `name` — contains a name to search for
- `para` — contains a reference to a paragraph, which will be used to report the results
- `phonebook` - contains the phonebook entries to search.

You should use a type of loop that you've not used in the previous task.

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops2-download.html) to work in your own editor or in an online editor.

## Loops 3

In this final task, you are provided with the following:

- `i` — starts off with a value of 500; intended to be used as an iterator.
- `para` — contains a reference to a paragraph, which will be used to report the results.
- `isPrime()` — a function that, when passed a number, returns `true` if the number is a prime number, and `false` if not.

You need to use a loop to go through the numbers 2 to 500 backwards (1 is not counted as a prime number), and run the provided `isPrime()` function on them. For each number that isn't a prime number, continue on to the next loop iteration. For each one that is a prime number, add it to the paragraph's `textContent` along with some kind of separator.

You should use a type of loop that you've not used in the previous two tasks.

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops3-download.html) to work in your own editor or in an online editor.
