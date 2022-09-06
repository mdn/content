---
title: 'CSS: Cascading Style Sheets'
slug: Web/CSS
tags:
  - CSS
  - Cascading Style Sheets
  - Design
  - Guide
  - Landing
  - Layout
  - Reference
  - Style Sheets
  - Styles
  - Stylesheets
  - l10n:priority
---
{{CSSRef}}

**Cascading Style Sheets** (**CSS**) is a [stylesheet](/en-US/docs/Web/API/StyleSheet) language used to describe the presentation of a document written in [HTML](/en-US/docs/Web/HTML) or [XML](/en-US/docs/Web/XML/XML_introduction) (including XML dialects such as [SVG](/en-US/docs/Web/SVG), [MathML](/en-US/docs/Web/MathML) or {{Glossary("XHTML")}}). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.

CSS is among the core languages of the **open web** and is standardized across Web browsers according to [W3C specifications](https://www.w3.org/Style/CSS/#specs). Previously, the development of various parts of CSS specification was done synchronously, which allowed the versioning of the latest recommendations. You might have heard about CSS1, CSS2.1, or even CSS3. There will never be a CSS3 or a CSS4; rather, everything is now CSS without a version number.

After CSS 2.1, the scope of the specification increased significantly and the progress on different CSS modules started to differ so much, that it became more effective to [develop and release recommendations separately per module](https://www.w3.org/Style/CSS/current-work). Instead of versioning the CSS specification, W3C now periodically takes a snapshot of [the latest stable state of the CSS specification](https://www.w3.org/TR/css/) and individual modules progress. CSS modules now have version numbers, or levels, such as [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/).

## Key resources

- CSS Introduction
  - : If you're new to web development, be sure to read our [CSS basics](/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics) article to learn what CSS is and how to use it.
- CSS Tutorials
  - : Our [CSS learning area](/en-US/docs/Learn/CSS) contains a wealth of tutorials to take you from beginner level to proficiency, covering all the fundamentals.
- CSS Reference
  - : Our [exhaustive CSS reference](/en-US/docs/Web/CSS/Reference) for seasoned Web developers describes every property and concept of CSS.

> **Callout:**
>
> #### Looking to become a front-end web developer?
>
> We have put together a course that includes all the essential information you need to
> work towards your goal.
>
> [**Get started**](/en-US/docs/Learn/Front-end_web_developer)

## Tutorials

Our [CSS Learning Area](/en-US/docs/Learn/CSS) features multiple modules that teach CSS from the ground up — no previous knowledge required.

- [CSS first steps](/en-US/docs/Learn/CSS/First_steps)
  - : CSS (Cascading Style Sheets) is used to style and layout web pages — for example, to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features. This module provides a gentle beginning to your path towards CSS mastery with the basics of how it works, what the syntax looks like, and how you can start using it to add styling to HTML.
- [CSS building blocks](/en-US/docs/Learn/CSS/Building_blocks)

  - : This module carries on where [CSS first steps](/en-US/docs/Learn/CSS/First_steps) left off — now you've gained familiarity with the language and its syntax, and got some basic experience with using it, it's time to dive a bit deeper. This module looks at the cascade and inheritance, all the selector types we have available, units, sizing, styling backgrounds and borders, debugging, and lots more.

    The aim here is to provide you with a toolkit for writing competent CSS and help you understand all the essential theory, before moving on to more specific disciplines like [text styling](/en-US/docs/Learn/CSS/Styling_text) and [CSS layout](/en-US/docs/Learn/CSS/CSS_layout).

- [CSS styling text](/en-US/docs/Learn/CSS/Styling_text)
  - : With the basics of the CSS language covered, the next CSS topic for you to concentrate on is styling text — one of the most common things you'll do with CSS. Here we look at text styling fundamentals, including setting font, boldness, italics, line and letter spacing, drop shadows, and other text features. We round off the module by looking at applying custom fonts to your page, and styling lists and links.
- [CSS layout](/en-US/docs/Learn/CSS/CSS_layout)
  - : At this point we've already looked at CSS fundamentals, how to style text, and how to style and manipulate the boxes that your content sits inside. Now it's time to look at how to place your boxes in the right place in relation to the viewport, and to each other. We have covered the necessary prerequisites so we can now dive deep into CSS layout, looking at different display settings, modern layout tools like flexbox, CSS grid, and positioning, and some of the legacy techniques you might still want to know about.
- [Use CSS to solve common problems](/en-US/docs/Learn/CSS/Howto)
  - : This module provides links to sections of content explaining how to use CSS to solve common problems when creating a web page.

## Reference

- [CSS reference](/en-US/docs/Web/CSS/Reference): This exhaustive reference for seasoned Web developers describes every property and concept of CSS.
- CSS key concepts:

  - The [syntax and forms of the language](/en-US/docs/Web/CSS/Syntax)
  - [Specificity](/en-US/docs/Web/CSS/Specificity), [inheritance](/en-US/docs/Web/CSS/inheritance), and [the Cascade](/en-US/docs/Web/CSS/Cascade)
  - [CSS units and values](/en-US/docs/Web/CSS/CSS_Values_and_Units) and [functional notations](/en-US/docs/Web/CSS/CSS_Functions)
  - [Box model](/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) and [margin collapse](/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - The [containing block](/en-US/docs/Web/CSS/Containing_block)
  - [Stacking](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) and [block-formatting](/en-US/docs/Web/Guide/CSS/Block_formatting_context) contexts
  - [Initial](/en-US/docs/Web/CSS/initial_value), [computed](/en-US/docs/Web/CSS/computed_value), [used](/en-US/docs/Web/CSS/used_value), and [actual](/en-US/docs/Web/CSS/actual_value) values
  - [CSS shorthand properties](/en-US/docs/Web/CSS/Shorthand_properties)
  - [CSS Flexible Box Layout](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
  - [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout)
  - [CSS selectors](/en-US/docs/Web/CSS/CSS_Selectors)
  - [Media queries](/en-US/docs/Web/CSS/Media_Queries)
  - [Animation](/en-US/docs/Web/CSS/animation)

## Cookbook

The [CSS layout cookbook](/en-US/docs/Web/CSS/Layout_cookbook) aims to bring together recipes for common layout patterns, things you might need to implement in your sites. In addition to providing code you can use as a starting point in your projects, these recipes highlight the different ways layout specifications can be used and the choices you can make as a developer.

## Tools for CSS development

- You can use the [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) to check if your CSS is valid. This is an invaluable debugging tool.
- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) lets you view and edit a page's live CSS via the [Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) and [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) tools.
- The [Web Developer extension](https://addons.mozilla.org/en-US/firefox/addon/web-developer/) for Firefox lets you track and edit live CSS on watched sites.

## Meta bugs

- Firefox: {{bug(1323667)}}

## See also

- [CSS demos](/en-US/docs/Web/Demos#css): Get a creative boost by exploring examples of the latest CSS technologies in action.
- Web languages to which CSS is often applied: [HTML](/en-US/docs/Web/HTML), [SVG](/en-US/docs/Web/SVG), [MathML](/en-US/docs/Web/MathML), {{Glossary("XHTML")}}, and [XML](/en-US/docs/Web/XML/XML_introduction).
- [Stack Overflow questions about CSS](https://stackoverflow.com/questions/tagged/css)
