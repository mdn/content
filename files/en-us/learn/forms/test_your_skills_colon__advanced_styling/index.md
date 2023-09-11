---
title: "Test your skills: Advanced styling"
slug: Learn/Forms/Test_your_skills:_Advanced_styling
page-type: learn-module-assessment
---

{{learnsidebar}}

The aim of this skill test is to assess whether you've understood our [Advanced form styling](/en-US/docs/Learn/Forms/Advanced_form_styling) and [UI pseudo-classes](/en-US/docs/Learn/Forms/UI_pseudo-classes) articles.

> **Note:** You can try out solutions in the interactive editors below, however it may be helpful to download the code and use an online tool such as [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/) to work on the tasks.
>
> If you get stuck, then ask us for help — see the [Assessment or further help](#assessment_or_further_help) section at the bottom of this page.

## Advanced form styling 1

In our first advanced styling tasks, we want you to handle making a search input as consistent as possible across browsers — a trickier task than with standard text inputs, even on modern browsers.

We've already provided you with a basic reset to build upon.

1. First of all, try giving the search box a consistent width, height, padding, and border color across browsers.
2. You'll find that some browsers will not behave in terms of the form element's height. This is due to native OS styling being used in some cases. How can you remove this native styling?
3. Once you've removed the native styling, you'll need to add back one of the features it was providing, to keep the same look and feel we originally had. How do you do this?
4. One thing that is inconsistent across browsers (particularly looking at Safari here) is the position of the standard blue focus outline. How can you remove this?
5. There is a major problem with just getting rid of the blue focus outline. What is it? Can you add some kind of styling back in so that users can tell when the search box is being hovered or focused?
6. Another thing that commonly denotes a search box is a magnifying glass icon. We've made one available in the same directory as our HTML files — see [search-24px.png](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/search-24px.png) — plus a `<div>` element after the search input to help you attach it, should you need it. Can you figure out a sensible way to attach it, and can you use some CSS to get it to sit to the right of the search box, and be lined up vertically as well?

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/html/forms/tasks/advanced-styling/advanced-styling1.html", '100%', 700)}}

> **Callout:**
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/advanced-styling1-download.html) to work in your own editor or in an online editor.

## Advanced form styling 2

In our next task we provide you with a set of three radio buttons. We want you to give them custom styling.

We've already provided you with a basic reset to build upon.

1. First of all, get rid of their default styling.
2. Next, give the radio buttons a reasonable base style — the style they have when the page first loads. This can be anything you like, but you probably want to set a width and height (of somewhere between about 18 and 24 pixels), and a subtle border and/or background color.
3. Now give the radio buttons a different style for when they are selected.
4. Align the radio buttons nicely with the labels.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/html/forms/tasks/advanced-styling/advanced-styling2.html", '100%', 700)}}

> **Callout:**
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/advanced-styling2-download.html) to work in your own editor or in an online editor.

## Advanced form styling 3

In our final task for this assessment series, we provide you with a feedback form that is already nicely-styled — you've already seen something similar if you've worked through our [UI pseudo-classes](/en-US/docs/Learn/Forms/UI_pseudo-classes) article, and now we want you to come up with your own solution.

What we'd like you to do is make use of some advanced pseudo-classes to provide some useful indicators of validity.

1. First of all, we want you to provide some specific styling to visually indicate which inputs have to be filled in — they cannot be left empty.
2. Second, we want you to provide a useful visual indicator of whether the data entered inside each input is valid or not.

> **Callout:**
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/advanced-styling3-download.html) to work in your own editor or in an online editor.

## Assessment or further help

You can practice these examples in the Interactive Editors above.

If you would like your work assessed, or are stuck and want to ask for help:

1. Put your work into an online shareable editor such as [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/). You can write the code yourself, or use the starting point files linked to in the above sections.
2. Write a post asking for assessment and/or help at the [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn/250). Your post should include:

   - A descriptive title such as "Assessment wanted for Advanced form styling 1 skill test".
   - Details of what you have already tried, and what you would like us to do, e.g. if you are stuck and need help, or want an assessment.
   - A link to the example you want assessed or need help with, in an online shareable editor (as mentioned in step 1 above). This is a good practice to get into — it's very hard to help someone with a coding problem if you can't see their code.
   - A link to the actual task or assessment page, so we can find the question you want help with.
