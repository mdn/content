---
title: "Challenge: Accessibility troubleshooting"
slug: Learn_web_development/Core/Accessibility/Accessibility_troubleshooting
page-type: learn-module-assessment
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Mobile","Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core/Accessibility")}}

In the challenge for this module, we present to you a simple site with a number of accessibility issues that you need to diagnose and fix.

## Starting point

To start this challenge, you should go and grab the [ZIP containing the files that comprise the example](https://raw.githubusercontent.com/mdn/learning-area/main/accessibility/assessment-start/assessment-files.zip). Decompress the contents into a new directory somewhere on your local computer.

Alternatively, you could use an online editor such as [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/).

The finished challenge site should look like so:

![Screenshot of the finished challenge site with good color contrast. The search input has placeholder text and a submit button that reads go, but no visible label.](assessment-site-finished.png)

You will see some differences/issues with the display of the starting state of the challenge — this is mainly due to the differences in the markup, which in turn cause some styling issues as the CSS is not applied properly. Don't worry — you'll be fixing these problems in the upcoming sections!

> [!NOTE]
> If you get stuck, you can reach out to us in one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Project brief

For this project, you are presented with a fictional nature site displaying a "factual" article about bears. As it stands, it has a number of accessibility issues — your task is to explore the existing site and fix them to the best of your abilities, answering the questions given below.

### Color

The text is difficult to read because of the current color scheme. Can you do a test of the current color contrast (text/background), report the results of the test, and then fix it by changing the assigned colors?

### Semantic HTML

1. The content is still not very accessible — report on what happens when you try to navigate it using a screen reader.
2. Can you update the article text to make it easier for screen reader users to navigate?
3. The navigation menu part of the site (wrapped in `<div class="nav"></div>`) could be made more accessible by putting it in a proper HTML semantic element. Which one should it be updated to? Make the update.

> [!NOTE]
> You'll need to update the CSS rule selectors that style the tags to their proper equivalents for the semantic headings. Once you add paragraph elements, you'll notice the styling looking better.

### The images

The images are currently inaccessible to screen reader users. Can you fix this?

### The audio player

1. The `<audio>` player isn't accessible to hearing impaired (deaf) people — can you add some kind of accessible alternative for these users?
2. The `<audio>` player isn't accessible to those using older browsers that don't support HTML audio. How can you allow them to still access the audio?

### The forms

1. The `<input>` element in the search form at the top could do with a label, but we don't want to add a visible text label that would potentially spoil the design and isn't really needed by sighted users. How can you add a label that is only accessible to screen readers?
2. The two `<input>` elements in the comment form have visible text labels, but they are not unambiguously associated with their labels — how do you achieve this? Note that you'll need to update some of the CSS rule as well.

### The show/hide comment control

The show/hide comment control button is not currently keyboard-accessible. Can you make it keyboard accessible, both in terms of focusing it using the tab key, and activating it using the return key?

### The table

The data table is not currently very accessible — it is hard for screen reader users to associate data rows and columns together, and the table also has no kind of summary to make it clear what it shows. Can you add some features to your HTML to fix this problem?

### Other considerations?

Can you list two more ideas for improvements that would make the website more accessible?

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Mobile","Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core/Accessibility")}}
