---
title: How to highlight the first line of a paragraph
slug: Learn/CSS/Howto/Highlight_first_line
tags:
  - Basic
  - Beginner
  - CSS
  - CSS:Getting_Started
  - Guide
  - Web
---
{{LearnSidebar}}

In this guide you will find out how to highlight the first line of text in a paragraph, even if you don't know how long that line will be.

## Styling the first line of text

You would like to make the first line of a paragraph larger and bold. Wrapping a `<span>` around the first line means that you can style it however, if the first line becomes shorter due to a smaller viewport size, the styled text will wrap onto the next line.

## Using a pseudo-element

A {{cssxref("pseudo-elements", "pseudo-element")}} can take the place of the `<span>`; however, it is more flexible — the exact content selected by a pseudo-element is calculated once the browser has rendered the content, so it will work even if the viewport size changes.

In this case we need to use the {{cssxref("::first-line")}} pseudo-element. It selects the first formatted line of each paragraph, meaning that you can style it as you require.

{{EmbedGHLiveSample("css-examples/howto/highlight_first_line.html", '100%', 750)}}

> **Note:** All pseudo-elements act in this way. They behave as if you had inserted an element into the document, but they do so dynamically based on the content as it displays at runtime.

## Combining pseudo-elements with other selectors

In the example above, the pseudo-element selects the first line of every paragraph. To select only the first line of the first paragraph, you can combine it with another selector. That could be a class, or in this case the {{cssxref(":first-child")}} {{cssxref("pseudo-classes", "pseudo-class")}}. This allows us to select the first line of the first-child of `.wrapper`.

{{EmbedGHLiveSample("css-examples/howto/highlight_first_line2.html", '100%', 700)}}

## See also

- The {{cssxref("pseudo-elements", "pseudo-elements")}} reference page.
- [Learn CSS: Pseudo-classes and pseudo-elements.](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
