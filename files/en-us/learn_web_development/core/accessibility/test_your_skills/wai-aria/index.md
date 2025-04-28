---
title: "Test your skills: WAI-ARIA"
short-title: WAI-ARIA
slug: Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA
page-type: learn-module-assessment
sidebar: learnsidebar
---

The aim of this skill test is to assess whether you've understood our [WAI-ARIA basics](/en-US/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) article.

> [!NOTE]
> You can try solutions in the interactive editors on this page or in an online editor such as [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/).
>
> If you get stuck, you can reach out to us in one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## WAI-ARIA 1

In our first ARIA task, we present you with a section of non-semantic markup, which is obviously meant to be a list. Assuming you are not able to change the elements used, how can you allow screen reader users to recognize this as a list?

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/aria/aria1.html", '100%', 700)}}

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/aria/aria1-download.html) to work in your own editor or in an online editor.

## WAI-ARIA 2

In our second WAI-ARIA task, we present a simple search form, and we want you to add in a couple of WAI-ARIA features to improve its accessibility:

1. How can you allow the search form to be called out as a separate landmark on the page by screen readers, to make it easily findable?
2. How can you give the search input a suitable label, without explicitly adding a visible text label to the DOM?

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/aria/aria2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/aria/aria2-download.html) to work in your own editor or in an online editor.

## WAI-ARIA 3

For this final WAI-ARIA task, we return to an example we previously saw in the [CSS and JavaScript skill test](/en-US/docs/Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript).
As before, we have an app that presents a list of animal names. Clicking one of the animal names causes a further description of that animal to appear in a box below the list. Here, we are starting with a mouse- and keyboard-accessible version.

The problem we have now is that when the DOM changes to show a new description, screen readers cannot see what has changed. Can you update it so that description changes are announced by the screen reader?

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/js/aria/aria-js1-download.html) to work in your own editor or in an online editor.
