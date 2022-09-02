---
title: box-direction
slug: Web/CSS/box-direction
tags:
  - CSS
  - Non-standard
  - Reference
  - recipe:css-property
  - Deprecated
browser-compat: css.properties.box-direction
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

> **Warning:** This is a property of the original CSS Flexible Box Layout Module draft, and has been replaced by a newer standard. The `-moz-box-direction` will only be used for XUL while the previous standard `box-direction` has been replaced by `flex-direction`. See [flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) for information about the current standard.

The **`box-direction`** [CSS](/en-US/docs/Web/CSS) property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).

```css
/* Keyword values */
box-direction: normal;
box-direction: reverse;

/* Global values */
box-direction: inherit;
box-direction: initial;
box-direction: revert;
box-direction: revert-layer;
box-direction: unset;
```

## Syntax

The `box-direction` property is specified as one of the keyword values listed below.

### Values

- `normal`
  - : The box lays out its contents from the start (the left or top edge).
- `reverse`
  - : The box lays out its contents from the end (the right or bottom edge).

## Notes

The edge of the box designated the _start_ for layout purposes depends on the box's orientation:

- For horizontal elements, the _start_ is the top edge.
- For vertical elements, the _start_ is the left edge.

The edge opposite to the start is designated the _end_.

If the direction is set using the element's `dir` attribute, then the style is ignored.

## Formal definition

{{cssinfo}}

## Formal syntax

```plain
box-direction =
  normal | reverse | inherit
```

## Examples

### Setting box direction

```css
.example {
  /* bottom-to-top layout */
  -moz-box-direction: reverse; /* Mozilla */
  -webkit-box-direction: reverse; /* WebKit */
  box-direction: reverse; /* As specified */
}
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("box-orient")}}
- {{CSSxRef("box-pack")}}
- {{CSSxRef("box-align")}}
- {{CSSxRef("flex-direction")}}
