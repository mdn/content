---
title: Grid wrapper
slug: Web/CSS/Layout_cookbook/Grid_wrapper
page-type: guide
browser-compat: css.properties.grid-template-columns
---

{{CSSRef}}

The grid wrapper pattern is useful for aligning grid content within a central wrapper, while also allowing items to break out and align to the edge of the containing element or page when desired.

## Requirements

Items placed on the grid should be able to align to a horizontally-centered max-width wrapper and/or the outer edges of the grid.

## Recipe

{{EmbedGHLiveSample("css-examples/css-cookbook/grid-wrapper.html", '100%', 720)}}

> **Callout:**
>
> [Download this example](https://github.com/mdn/css-examples/blob/main/css-cookbook/grid-wrapper--download.html)

## Choices made

This recipe uses the CSS Grid {{cssxref("minmax", "minmax()")}} function to define the grid track sizes in the {{cssxref("grid-template-columns")}} property. For the central columns with a maximum width we can set a minimum value of 0 or greater and a maximum value that specifies the maximum size the column tracks will grow to. Using a numeric unit (pixels, ems, rems) will create a fixed maximum size for the central wrapper, whereas using percentage values or viewport units will mean this wrapper grows or shrinks in response to its context.

The outer two columns have a maximum size of `1fr`, meaning that they will each expand to fill the remaining available space in the grid container.

## Useful fallbacks or alternative methods

When using this recipe at page level it can be useful to set a `max-width` along with left and right `auto` {{cssxref("margin")}}s to center the content horizontally:

```css
.grid {
  max-width: 1200px;
  margin: 0 auto; /* horizontally centers the container */
}

/* Remove the max-width and margins if the browser supports Grid */
@supports (display: grid) {
  .grid {
    display: grid;
    /* Other grid code goes here */
    max-width: none;
    margin: 0;
  }
}
```

To "break out" a full-width item to the edge of the viewport you can then use this trick (courtesy of [Una Kravets](https://una.im/)):

```css
.item {
  width: 100vw;
  margin-left: 50%;
  transform: translate3d(-50%, 0, 0);
}
```

This gives a good approximation of the layout, only without the benefit of being able to align items easily on an exact grid.

## Accessibility concerns

Although Grid enables us to position items anywhere (within reason), it is important when placing items using CSS Grid that your underlying markup follows a logical order (see [CSS Grid layout and accessibility](/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility) for more details).

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("grid-template-columns")}}
- [CSS Grid Layout on MDN](/en-US/docs/Web/CSS/CSS_Grid_Layout)
- Article: [CSS Grid: More flexibility with minmax()](https://css-irl.info/more-flexibility-with-minmax/)
- Article: [Breaking Out with CSS Grid](https://rachelandrew.co.uk/archives/2017/06/01/breaking-out-with-css-grid-explained/)
