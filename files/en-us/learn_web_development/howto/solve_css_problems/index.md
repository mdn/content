---
title: Solve common CSS problems
short-title: Common CSS problems
slug: Learn_web_development/Howto/Solve_CSS_problems
page-type: landing-page
sidebar: learn-how-to
---

This page rounds up questions and answers, and other material on the MDN site that can help you to solve common CSS problems.

## Styling boxes

- [How do I add a drop-shadow to an element?](/en-US/docs/Learn_web_development/Howto/Solve_CSS_problems/Add_a_shadow)
  - : Shadows can be added to boxes with the {{cssxref("box-shadow")}} property. This tutorial explains how it works and shows an example.
- [How do I fill a box with an image without distorting the image?](/en-US/docs/Learn_web_development/Howto/Solve_CSS_problems/Fill_a_box_with_an_image)
  - : The {{cssxref("object-fit")}} property provides different ways to fit an image into a box which has a different {{glossary("aspect ratio")}}, and you can find out how to use them in this tutorial.
- [Which methods can be used to style boxes?](/en-US/docs/Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes)
  - : A rundown of the different properties that might be useful when styling boxes using CSS.
- [How can I make elements semi-transparent?](/en-US/docs/Learn_web_development/Howto/Solve_CSS_problems/Make_box_transparent)
  - : The {{cssxref("opacity")}} property and color values with an alpha channel can be used for this; find out which one to use when.

### Box styling lessons and guides

- [The Box Model](/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model)
- [Styling backgrounds and borders](/en-US/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)

## CSS and text

- [How do I add a drop-shadow to text?](/en-US/docs/Learn_web_development/Howto/Solve_CSS_problems/Add_a_text_shadow)
  - : Shadows can be added to text with the {{cssxref("text-shadow")}} property. This tutorial explains how it works and shows an example.
- [How do I highlight the first line of a paragraph?](/en-US/docs/Learn_web_development/Howto/Solve_CSS_problems/Highlight_first_line)
  - : Find out how to target the first line of text in a paragraph with the {{cssxref("::first-line")}} pseudo-element.
- [How do I highlight the first paragraph in an article?](/en-US/docs/Learn_web_development/Howto/Solve_CSS_problems/Highlight_first_para)
  - : Find out how to target the first paragraph with the {{cssxref(":first-child")}} pseudo-class.
- [How do I highlight a paragraph only if it comes right after a heading?](/en-US/docs/Learn_web_development/Howto/Solve_CSS_problems/Highlight_para_after_h1)
  - : Combinators can help you to precisely target elements based on where they are in the document; this tutorial explains how to use them to apply CSS to a paragraph only if it immediately follows a heading.

### Text styling lessons and guides

- [How to style text](/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [How to customize a list of elements](/en-US/docs/Learn_web_development/Core/Text_styling/Styling_lists)
- [How to style links](/en-US/docs/Learn_web_development/Core/Text_styling/Styling_links)
- [CSS Selectors](/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)

## CSS Layout

- [How do I center an item?](/en-US/docs/Learn_web_development/Howto/Solve_CSS_problems/Center_an_item)
  - : Centering an item inside another box horizontally and vertically used to be tricky, however flexbox now makes it simple.

### Layout guides

- [Using CSS flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Using CSS multi-column layouts](/en-US/docs/Web/CSS/CSS_multicol_layout/Using_multicol_layouts)
- [Using CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Using CSS generated content](/en-US/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content)

> [!NOTE]
> We have a cookbook dedicated to [CSS Layout solutions](/en-US/docs/Web/CSS/Layout_cookbook), with fully working examples and explanations of common layout tasks. Also check out [Practical Positioning Examples](/en-US/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples), which shows how you can use positioning to create a tabbed info box, and a sliding hidden panel.
