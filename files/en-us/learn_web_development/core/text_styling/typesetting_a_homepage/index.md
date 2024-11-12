---
title: "Challenge: Typesetting a community school homepage"
slug: Learn_web_development/Core/Text_styling/Typesetting_a_homepage
page-type: learn-module-assessment
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/CSS_layout", "Learn_web_development/Core/Text_styling")}}

In this challenge, we'll test your understanding of all the text styling techniques we've covered throughout this module by getting you to style the text for a community school's homepage. You might just have some fun along the way.

## Starting point

To start this challenge, you should:

- Go and grab the [HTML](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/index.html) and [CSS](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/style.css) files for the exercise, and the provided [external link icon](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/external-link-52.png).
- Make a copy of them on your local computer.

Alternatively, you could use an online editor such as [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/).
You could paste the HTML and fill in the CSS into one of these online editors, and use [this external link icon](https://mdn.github.io/learning-area/css/styling-text/typesetting-a-homepage-start/external-link-52.png) as a background image.

> [!NOTE]
> If you get stuck, you can reach out to us in one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Project brief

You've been provided with some raw HTML for the homepage of an imaginary community college, plus some CSS that styles the page into a three column layout and provides some other rudimentary styling. You're to write your CSS additions below the comment at the bottom of the CSS file to make sure it's easy to mark the bits you've done. Don't worry if some of the selectors are repetitious; we'll let you off in this instance.

Fonts:

- First of all, download a couple of free-to-use fonts. Because this is a college, the fonts should be chosen to give the page a fairly serious, formal, trustworthy feel: a serif site-wide font for the general body text, coupled with a sans-serif or slab serif for the headings might be nice.
- Use a suitable service to generate bulletproof `@font-face` code for these two fonts.
- Apply your body font to the whole page, and your heading font to your headings.

General text styling:

- Give the page a site-wide `font-size` of `10px`.
- Give your headings and other element types appropriate font-sizes defined using a suitable relative unit.
- Give your body text a suitable `line-height`.
- Center your top level heading on the page.
- Give your headings a little bit of `letter-spacing` to make them not too squashed, and allow the letters to breathe a bit.
- Give your body text some `letter-spacing` and `word-spacing`, as appropriate.
- Give the first paragraph after each heading in the `<section>` a little bit of text-indentation, say 20px.

Links:

- Give the link, visited, focus, and hover states some colors that go with the color of the horizontal bars at the top and bottom of the page.
- Make it so that links are underlined by default, but when you hover or focus them the underline disappears.
- Remove the default focus outline from ALL the links on the page.
- Give the active state a noticeably different styling so it stands out nicely, but make it still fit in with the overall page design.
- Make it so that _external_ links have the external link icon inserted next to them.

Lists:

- Make sure the spacing of your lists and list items works well with the styling of the overall page. Each list item should have the same `line-height` as a paragraph line, and each list should have the same spacing at its top and bottom as you have between paragraphs.
- Give your list items a nice bullet appropriate for the design of the page. It is up to you whether you choose a custom bullet image or something else.

Navigation menu:

- Style your navigation menu so that it harmonizes with the page.

## Hints and tips

- You don't need to edit the HTML in any way for this exercise.
- You don't necessarily have to make the nav menu look like buttons, but it needs to be a bit taller so that it doesn't look silly on the side of the page; also remember that you need to make this one a vertical nav menu.

## Example

The following screenshot shows an example of what the finished design could look like:

![A screenshot of the finished challenge design. The top heading reads 'St Huxley's Community College'. There is a red line separating the banner header from the content. The main content has three columns, two containing text, and a vertical navigation bar in the third column.](example2.png)

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/CSS_layout", "Learn_web_development/Core/Text_styling")}}
