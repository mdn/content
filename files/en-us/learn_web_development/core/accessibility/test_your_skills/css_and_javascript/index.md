---
title: "Test your skills: CSS and JavaScript accessibility"
short-title: CSS and JavaScript
slug: Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript
page-type: learn-module-assessment
sidebar: learnsidebar
---

The aim of this skill test is to assess whether you've understood our [CSS and JavaScript accessibility best practices](/en-US/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript) article.

> [!NOTE]
> You can try solutions in the interactive editors on this page or in an online editor such as [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/).
>
> If you get stuck, you can reach out to us in one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## CSS accessibility 1

In the first task you are presented with a list of links. However, their accessibility is pretty bad — there is no way to really tell that they are links, or to tell which one the user is focussed on.

We'd like you to assume that the existing ruleset with the `a` selector is supplied by some CMS, and that you can't change it — instead, you need to create new rules to make the links look and behave like links, and for the user to be able to tell where they are in the list.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/css/css-a11y1.html", '100%', 700)}}

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/css/css-a11y1-download.html) to work in your own editor or in an online editor.

## CSS accessibility 2

In this next task you are presented with a simple bit of content — just headings and paragraphs. There are accessibility issues with the colors and sizing of the text; we'd like you to:

1. Explain what the problems are, and what the guidelines are that state the acceptable values for color and sizing.
2. Select new values for the color and font-size that fix the problem.
3. Update the CSS with these new values to fix the problem.
4. Test the code to make sure the problem is now fixed. Explain what tools or methods you used to select the new values and test the code.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/css/css-a11y2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/css/css-a11y2-download.html) to work in your own editor or in an online editor.

## JavaScript accessibility 1

In our final task here, you have some JavaScripting to do. We have an app that presents a list of animal names. Clicking one of the animal names causes a further description of that animal to appear in a box below the list.

But it is not very accessible — in its current state you can only operate it with the mouse. We'd like you to add to the HTML and JavaScript to make it keyboard accessible too.

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/js/js/js1-download.html) to work in your own editor or in an online editor.
