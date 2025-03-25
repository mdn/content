---
title: "Test your skills: Advanced styling"
slug: Learn_web_development/Extensions/Forms/Test_your_skills:_Advanced_styling
page-type: learn-module-assessment
---

{{learnsidebar}}

The aim of this skill test is to assess whether you've understood our [Advanced form styling](/en-US/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) and [UI pseudo-classes](/en-US/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) articles.

> [!NOTE]
> You can try solutions in the interactive editors on this page or in an online editor such as [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/).
>
> If you get stuck, you can reach out to us in one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

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

> [!CALLOUT]
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

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/advanced-styling2-download.html) to work in your own editor or in an online editor.

## Advanced form styling 3

In our final task for this assessment series, we provide you with a feedback form that is already nicely-styled — you've already seen something similar if you've worked through our [UI pseudo-classes](/en-US/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) article, and now we want you to come up with your own solution.

What we'd like you to do is make use of some advanced pseudo-classes to provide some useful indicators of validity.

1. First of all, we want you to provide some specific styling to visually indicate which inputs have to be filled in — they cannot be left empty.
2. Second, we want you to provide a useful visual indicator of whether the data entered inside each input is valid or not.

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/advanced-styling3-download.html) to work in your own editor or in an online editor.
