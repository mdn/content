---
title: How to highlight a paragraph that comes after a heading
slug: Learn/CSS/Howto/Highlight_para_after_h1
page-type: learn-faq
---

{{LearnSidebar}}

In this guide you can find out how to highlight a paragraph that comes directly after a heading.

## Styling the first paragraph after a heading

A common pattern is to style the first paragraph in an article differently to the ones that come after it. Usually this first paragraph will come right after a heading, and if this is the case in your design you can use that combination of elements to target the paragraph.

## The adjacent sibling combinator

CSS has a group of [CSS Selectors](/en-US/docs/Web/CSS/CSS_selectors) which are referred to as **combinators**, because they select things based on a combination of selectors. In our case, we will use the [adjacent sibling combinator](/en-US/docs/Web/CSS/Adjacent_sibling_combinator). This combinator selects an element based on it being next to another element. In our HTML we have a {{htmlelement("Heading_Elements", "h1")}} followed by a {{htmlelement("p")}}. The `<p>` is an adjacent sibling of the `<h1>` so we can select it with `h1 + p`.

{{EmbedGHLiveSample("css-examples/howto/highlight_h1_plus_para.html", '100%', 800)}}

## See also

- [Learn CSS: Selectors.](/en-US/docs/Learn/CSS/Building_blocks/Selectors)
- [Learn CSS: Combinators.](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators)
