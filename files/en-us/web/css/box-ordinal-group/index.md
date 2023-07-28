---
title: box-ordinal-group
slug: Web/CSS/box-ordinal-group
page-type: css-property
status:
  - deprecated
  - non-standard
browser-compat: css.properties.box-ordinal-group
---

{{CSSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

> **Warning:** This is a property of the original CSS Flexible Box Layout Module draft. It has been replaced in the specification. See [flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) for information about the current standard.

The **`box-ordinal-group`** [CSS](/en-US/docs/Web/CSS) property assigns the flexbox's child elements to an ordinal group.

Ordinal groups may be used in conjunction with the {{CSSxRef("box-direction")}} property to control the order in which the direct children of a box appear. When the computed `box-direction` is normal, a box will display its elements starting from the lowest numbered ordinal group and ensure that those elements appear to the left (for horizontal boxes) or at the top (for vertical boxes) of the container. Elements with the same ordinal group are flowed in the order they appear in the source document tree. In the reverse direction, the ordinal groups are examined in the same order, except the elements appear reversed.

## Syntax

```css
/* <integer> values */
box-ordinal-group: 1;
box-ordinal-group: 5;

/* Global values */
box-ordinal-group: inherit;
box-ordinal-group: initial;
box-ordinal-group: unset;
```

The `box-ordinal-group` property is specified as any positive {{CSSxRef("&lt;integer&gt;")}}.

## Formal definition

{{CSSInfo}}

## Formal syntax

```plain
box-ordinal-group =
  <integer>
```

## Examples

### Basic usage example

In an older version of the spec, `box-ordinal-group` was included to allow you to change the display order of flex children inside a flex container:

```css
article:nth-child(1) {
  -webkit-box-ordinal-group: 2;
  -moz-box-ordinal-group: 2;
  box-ordinal-group: 2;
}

article:nth-child(2) {
  -webkit-box-ordinal-group: 1;
  -moz-box-ordinal-group: 1;
  box-ordinal-group: 1;
}
```

The modern flexbox equivalent is {{cssxref("order")}}.

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
