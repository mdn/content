---
title: scroll-marker-group
slug: Web/CSS/scroll-marker-group
page-type: css-property
status:
  - experimental
browser-compat: css.properties.scroll-marker-group
---

{{CSSRef}}{{seecompattable}}

The **`scroll-marker-group`** [CSS](/en-US/docs/Web/CSS) property controls whether a {{glossary("scroll container")}} has a {{cssxref("::scroll-marker-group")}} pseudo-element generated, and if so, whether it is generated before _or_ after the container's child DOM elements.

## Syntax

```css
/* Single values */
scroll-marker-group: before;
scroll-marker-group: after;
scroll-marker-group: none;

/* Global values */
scroll-marker-group: inherit;
scroll-marker-group: initial;
scroll-marker-group: revert;
scroll-marker-group: revert-layer;
scroll-marker-group: unset;
```

### Values

- `after`

  - : The {{cssxref("::scroll-marker-group")}} pseudo-element is generated as a sibling of the scroll container's child DOM elements, immediately following them.

- `before`

  - : The `::scroll-marker-group` pseudo-element is generated as a sibling of the scroll container's child DOM elements, immediately preceding them, and any generated {{cssxref("::scroll-button()")}} pseudo-elements.

- `none`

  - : The scroll container does not have a generated `::scroll-marker-group` pseudo-element. This is the default value if the `scroll-marker-group` property is not explicitly set.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

See [Creating CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels) for full examples that use the `scroll-marker-group` property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("interactivity")}} property
- {{cssxref("::scroll-button()")}}, {{cssxref("::scroll-marker-group")}}, {{cssxref("::scroll-marker")}}, and {{cssxref("::column")}} pseudo-elements
- {{cssxref(":target-current")}} pseudo-class
- [Creating CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module
- [CSS Carousel Gallery](https://chrome.dev/carousel/) on chrome.dev (2025)
