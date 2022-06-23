---
title: 'Test your skills: Loops'
slug: Learn/JavaScript/Building_blocks/Test_your_skills:_Loops
tags:
  - Beginner
  - JavaScript
  - Learn
  - Loops
---
{{learnsidebar}}

This aim of this skill test is to assess whether you've understood our [Looping code](/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code) article.

> **Note:** You can try out solutions for the tasks below by downloading the code, putting it in an online tool such as [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/), then working on the tasks.
>
> If you get stuck, then ask us for help — see the [Assessment or further help](#assessment_or_further_help) section at the bottom of this page.

> **Note:** We didn't provide live editable versions of these tasks because of the risk of creating infinite loops and crashing the assessment page!

## DOM manipulation: considered useful

Some of the questions below require you to write some [DOM](/en-US/docs/Glossary/DOM) manipulation code to complete them — such as creating new HTML elements, setting their text contents to equal specific string values, and nesting them inside existing elements on the page — all via JavaScript.

We haven't explicitly taught this yet in the course, but you'll have seen some examples that make use of it, and we'd like you to do some research into what DOM APIs you need to successfully answer the questions. A good starting place is our [Manipulating documents](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents) tutorial.

## Loops 1

In our first looping task we want you start by creating a simple loop that goes through all the items in the provided `myArray` and prints them out on the screen inside list items (i.e., [`<li>`](/en-US/docs/Web/HTML/Element/li) elements), which are appended to the provided `list`.

> **Callout:**
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops1-download.html) to work in your own editor or in an online editor.

## Loops 2

In this next task, we want you to write a simple program that, given a name, searches an array of [objects](/en-US/docs/Glossary/Object) containing names and phone numbers (`phonebook`) and, if it finds the name, outputs the name and phone number into the paragraph (`para`) and then exits the loop before it has run its course.

If you haven't read about objects yet, don't worry! For now, all you need to know is how to access a member-value pair. You can read up on objects in the [JavaScript object basics](/en-US/docs/Learn/JavaScript/Objects/Basics) tutorial.

You are given three variables to begin with:

- `name` — contains a name to search for
- `para` — contains a reference to a paragraph, which will be used to report the results
- `phonebook` - contains the phonebook entries to search.

You should use a type of loop that you've not used in the previous task.

> **Callout:**
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops2-download.html) to work in your own editor or in an online editor.

## Loops 3

In this final task, you are provided with the following:

- `i` — starts off with a value of 500; intended to be used as an iterator.
- `para` — contains a reference to a paragraph, which will be used to report the results.
- `isPrime()` — a function that, when passed a number, returns `true` if the number is a prime number, and `false` if not.

You need to use a loop to go through the numbers 2 to 500 backwards (1 is not counted as a prime number), and run the provided `isPrime()` function on them. For each number that isn't a prime number, continue on to the next loop iteration. For each one that is a prime number, add it to the paragraph's `textContent` along with some kind of separator.

You should use a type of loop that you've not used in the previous two tasks.

> **Callout:**
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops3-download.html) to work in your own editor or in an online editor.

## Assessment or further help

If you would like your work assessed, or are stuck and want to ask for help:

1. Put your work into an online shareable editor such as [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/). You can write the code yourself, or use the starting point files linked to in the above sections.
2. Write a post asking for assessment and/or help at the [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn/250). Your post should include:

    - A descriptive title such as "Assessment wanted for Loops 1 skill test".
    - Details of what you have already tried, and what you would like us to do, e.g. if you are stuck and need help, or want an assessment.
    - A link to the example you want assessed or need help with, in an online shareable editor (as mentioned in step 1 above). This is a good practice to get into — it's very hard to help someone with a coding problem if you can't see their code.
    - A link to the actual task or assessment page, so we can find the question you want help with.
