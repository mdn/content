---
title: "Test your skills: WAI-ARIA"
slug: Learn/Accessibility/WAI-ARIA_basics/Test_your_skills:_WAI-ARIA
page-type: learn-module-assessment
---

{{learnsidebar}}

The aim of this skill test is to assess whether you've understood our [WAI-ARIA basics](/en-US/docs/Learn/Accessibility/WAI-ARIA_basics) article.

> **Note:** You can try out solutions in the interactive editors below, however it may be helpful to download the code and use an online tool such as [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/) to work on the tasks.
>
> If you get stuck, then ask us for help — see the [Assessment or further help](#assessment_or_further_help) section at the bottom of this page.

## WAI-ARIA 1

In our first ARIA task, we present you with a section of non-semantic markup, which is obviously meant to be a list. Assuming you are not able to change the elements used, how can you allow screen reader users to recognize this as a list?

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/aria/aria1.html", '100%', 700)}}

> **Callout:**
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/aria/aria1-download.html) to work in your own editor or in an online editor.

## WAI-ARIA 2

In our second WAI-ARIA task, we present a simple search form, and we want you to add in a couple of WAI-ARIA features to improve its accessibility:

1. How can you allow the search form to be called out as a separate landmark on the page by screen readers, to make it easily findable?
2. How can you give the search input a suitable label, without explicitly adding a visible text label to the DOM?

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/aria/aria2.html", '100%', 700)}}

> **Callout:**
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/aria/aria2-download.html) to work in your own editor or in an online editor.

## WAI-ARIA 3

For this final WAI-ARIA task, we return to an example we previously saw in the [CSS and JavaScript skill test](/en-US/docs/Learn/Accessibility/CSS_and_JavaScript/Test_your_skills:_CSS_and_JavaScript_accessibility). As before, we have a simple app that presents a list of animal names. Clicking one of the animal names causes a further description of that animal to appear in a box below the list. Here, we are starting with a mouse- and keyboard-accessible version.

The problem we have now is that when the DOM changes to show a new description, screen readers cannot see what has changed. Can you update it so that description changes are announced by the screen reader?

> **Callout:**
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/js/aria/aria-js1-download.html) to work in your own editor or in an online editor.

## Assessment or further help

You can practice these examples in the Interactive Editors above.

If you would like your work assessed, or are stuck and want to ask for help:

1. Put your work into an online shareable editor such as [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/). You can write the code yourself, or use the starting point files linked to in the above sections.
2. Write a post asking for assessment and/or help at the [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn/250). Your post should include:

   - A descriptive title such as "Assessment wanted for WAI-ARIA 1 skill test".
   - Details of what you have already tried, and what you would like us to do, e.g. if you are stuck and need help, or want an assessment.
   - A link to the example you want assessed or need help with, in an online shareable editor (as mentioned in step 1 above). This is a good practice to get into — it's very hard to help someone with a coding problem if you can't see their code.
   - A link to the actual task or assessment page, so we can find the question you want help with.
