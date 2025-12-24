---
title: "CSS: Cascading Style Sheets"
short-title: CSS
slug: Web/CSS
page-type: landing-page
sidebar: cssref
---

**Cascading Style Sheets** (**CSS**) is a [stylesheet](/en-US/docs/Web/API/StyleSheet) language used to describe the presentation of a document written in [HTML](/en-US/docs/Web/HTML) or [XML](/en-US/docs/Web/XML/Guides/XML_introduction) (including XML dialects such as [SVG](/en-US/docs/Web/SVG), [MathML](/en-US/docs/Web/MathML) or {{Glossary("XHTML")}}). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.

CSS is among the core languages of the **open web** and is standardized across web browsers according to [W3C specifications](https://www.w3.org/Style/CSS/#specs). Previously, the development of various parts of CSS specification was done synchronously, which allowed the versioning of the latest recommendations. You might have heard about CSS1, CSS2.1, or even CSS3. There will never be a CSS3 or a CSS4; rather, everything is now just "CSS" with individual CSS modules having version numbers.

After CSS 2.1, the scope of the specification increased significantly and the progress on different CSS modules started to differ so much, that it became more effective to [develop and release recommendations separately per module](https://www.w3.org/Style/CSS/current-work). Instead of versioning the CSS specification, W3C now periodically takes a snapshot of [the latest stable state of the CSS specification](https://www.w3.org/TR/css/) and individual modules progress. CSS modules now have version numbers, or levels, such as [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/).

## Beginner's tutorials

Our [learn web development core modules](/en-US/docs/Learn_web_development/Core) contain modern, up-to-date tutorials covering CSS fundamentals.

- [Your first website: Styling the content](/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)
  - : This article provides a brief tour of what CSS is and how to use it, aimed at people who are completely new to web development.
- [CSS styling basics](/en-US/docs/Learn_web_development/Core/Styling_basics)
  - : This module provides all the CSS fundamentals you'll need to start learning the technology effectively, including syntax, features, and techniques.
- [CSS text styling](/en-US/docs/Learn_web_development/Core/Text_styling)
  - : Here we look at CSS text fundamentals including setting font, boldness, italics, line and letter spacing, and drop shadows. We round off the module by looking at applying custom fonts to your page, and styling lists and links.
- [CSS layout](/en-US/docs/Learn_web_development/Core/CSS_layout)
  - : This module looks at floats, positioning, other modern layout tools, and building responsive designs that will adapt to different devices, screen sizes, and resolutions.

## Guides

CSS guides are organized by modules and are there to help you learn what you can achieve using CSS. Browse the complete list at [CSS guides](/en-US/docs/Web/CSS/Guides), which includes topics such as:

- [CSS syntax](/en-US/docs/Web/CSS/Guides/Syntax/Introduction) including declarations and rulesets.
- [Specificity](/en-US/docs/Web/CSS/Guides/Cascade/Specificity), [inheritance](/en-US/docs/Web/CSS/Guides/Cascade/Inheritance), and [cascade](/en-US/docs/Web/CSS/Guides/Cascade/Introduction)
- [Nesting](/en-US/docs/Web/CSS/Guides/Nesting), [scoping](/en-US/docs/Web/CSS/Guides/Scoping) and [shadow parts](/en-US/docs/Web/CSS/Guides/Shadow_parts)
- [Media](/en-US/docs/Web/CSS/Guides/Media_queries) and [container](/en-US/docs/Web/CSS/Guides/Containment) queries
- [Numeric](/en-US/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types) and [textual](/en-US/docs/Web/CSS/Guides/Values_and_units/Textual_data_types) data types
- [Box model](/en-US/docs/Web/CSS/Guides/Box_model/Introduction) and [margin collapse](/en-US/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- [Containing block](/en-US/docs/Web/CSS/Guides/Display/Containing_block)
- [Stacking](/en-US/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) and [block-formatting](/en-US/docs/Web/CSS/Guides/Display/Block_formatting_context) contexts
- [Property value processing](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing)
- [Shorthand properties](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
- [Flexible box](/en-US/docs/Web/CSS/Guides/Flexible_box_layout), [multi-column](/en-US/docs/Web/CSS/Guides/Multicol_layout) and [grid](/en-US/docs/Web/CSS/Guides/Grid_layout) layouts
- [Animations](/en-US/docs/Web/CSS/Guides/Animations/Using), [transitions](/en-US/docs/Web/CSS/Guides/Transitions/Using), and [transforms](/en-US/docs/Web/CSS/Guides/Transforms/Using)

## How to

- [CSS layout cookbook](/en-US/docs/Web/CSS/How_to/Layout_cookbook)
  - : Recipes for common layout patterns you might need to implement in your sites. These recipes provide code you can use as a starting point in your projects. These recipes also highlight the different ways layout specifications can be used and the choices you can make as a developer.

## Tools

- [Border-image generator](/en-US/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-image_generator)
  - : Generate CSS {{cssxref("border-image")}} values.
- [Border-radius generator](/en-US/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator)
  - : Generate CSS {{cssxref("border-radius")}} effects.
- [Box-shadow generator](/en-US/docs/Web/CSS/Guides/Backgrounds_and_borders/Box-shadow_generator)
  - : Add {{cssxref("box-shadow")}} effects to your CSS objects.
- [Color format converter](/en-US/docs/Web/CSS/Guides/Colors/Color_format_converter)
  - : Enter or pick a color and copy its corresponding value in any CSS {{cssxref("color_value", "color format")}}.
- [Color mixer](/en-US/docs/Web/CSS/Guides/Colors/Color_mixer)
  - : Mix two colors in any color space using the {{cssxref("color_value/color-mix", "color-mix()")}} function and copy the resulting color in any CSS color format.
- [Shape generator](/en-US/docs/Web/CSS/Guides/Shapes/Shape_generator)
  - : Define coordinates and syntax for {{cssxref("basic-shape")}} features.

You can also use the following resources:

- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/): To check if your CSS is valid. This is an invaluable debugging tool.
- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html): To view and edit a page's live CSS via the [Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) and the [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) tools.
- [Web Developer extension](https://addons.mozilla.org/en-US/firefox/addon/web-developer/): To track and edit live CSS on websites in Firefox.

## Reference

Browse the complete [CSS reference](/en-US/docs/Web/CSS/Reference) documentation.

- [CSS properties](/en-US/docs/Web/CSS/Reference/Properties)
  - : Reference for all CSS properties.
- [CSS selectors](/en-US/docs/Web/CSS/Reference/Selectors)
  - : Reference for CSS selectors, [combinators](/en-US/docs/Web/CSS/Reference/Selectors/Combinators), [pseudo-classes](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes), and [pseudo-elements](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements).
- [CSS at-rules](/en-US/docs/Web/CSS/Reference/At-rules)
  - : Reference for CSS at-rules including media queries.
- [CSS values](/en-US/docs/Web/CSS/Reference/Values)
  - : Reference for CSS keywords, [data types](/en-US/docs/Web/CSS/Reference/Values/Data_types), and [functions](/en-US/docs/Web/CSS/Reference/Values/Functions).

## See also

- Web languages to which CSS is often applied: [HTML](/en-US/docs/Web/HTML), [SVG](/en-US/docs/Web/SVG), [MathML](/en-US/docs/Web/MathML), {{Glossary("XHTML")}}, and [XML](/en-US/docs/Web/XML/Guides/XML_introduction).
- [Stack Overflow questions about CSS](https://stackoverflow.com/questions/tagged/css)
