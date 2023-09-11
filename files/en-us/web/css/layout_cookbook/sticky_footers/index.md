---
title: Sticky footers
slug: Web/CSS/Layout_cookbook/Sticky_footers
page-type: guide
browser-compat:
  - css.properties.grid-template-rows
  - css.properties.flex-direction
  - css.properties.flex-grow
  - css.properties.flex-shrink
---

{{CSSRef}}

A sticky footer pattern is one where the footer of your page "sticks" to the bottom of the viewport in cases where the content is shorter than the viewport height. We'll look at a couple of techniques for creating one in this recipe.

![A sticky footer pushed to the bottom of a box](cookbook-footer.png)

## Requirements

The Sticky footer pattern needs to meet the following requirements:

- Footer sticks to the bottom of the viewport when content is short.
- If the content of the page extends past the viewport bottom, the footer then sits below the content as normal.

## The recipe

{{EmbedGHLiveSample("css-examples/css-cookbook/sticky-footer.html", '100%', 720)}}

> **Callout:**
>
> [Download this example](https://github.com/mdn/css-examples/blob/main/css-cookbook/sticky-footer--download.html)

> **Note:** In this example and the following one we are using a wrapper set to `min-height: 100%` in order that our live example works. You could also achieve this for a full page by setting a {{cssxref("min-height")}} of `100vh` on the {{htmlelement("body")}} and then using it as your grid container.

## Choices made

In the above example we achieve the sticky footer using CSS Grid Layout. The `.wrapper` has a minimum height of `100%` which means it is as tall as the container it is in. We then create a single column grid layout with three rows, one row for each part of our layout.

Grid auto-placement will place our items in source order and so the header goes into the first auto sized track, the main content into the `1fr` track and the footer into the final auto sized track. The `1fr` track will take up all available space and so grows to fill the gap.

## Alternate method

If you need compatibility with browsers that do not support Grid Layout you can also use Flexbox to create a sticky footer.

{{EmbedGHLiveSample("css-examples/css-cookbook/sticky-footer-flexbox.html", '100%', 720)}}

The flexbox example starts out in the same way, but we use `display:flex` rather than `display:grid` on the `.wrapper`; we also set `flex-direction` to `column`. Then we set our main content to `flex-grow: 1` and the other two elements to `flex-shrink: 0` — this prevents them from shrinking smaller when content fills the main area.

## Browser compatibility

{{Compat}}

## Resources on MDN

- [Basic concepts of Grid Layout](/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
