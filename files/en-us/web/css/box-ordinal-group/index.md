---
title: box-ordinal-group
slug: Web/CSS/box-ordinal-group
tags:
  - CSS
  - CSS Property
  - Non-standard
  - Reference
  - recipe:css-property
browser-compat: css.properties.box-ordinal-group
---
{{CSSRef}}{{Non-standard_Header}}

> **Warning:** This is a property of the original CSS Flexible Box Layout Module draft, and has been replaced by a newer standard. See [flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) for information about the current standard.

The **`box-ordinal-group`** [CSS](/en-US/docs/Web/CSS) property assigns the flexbox's child elements to an ordinal group.

```css
/* <integer> values */
box-ordinal-group: 1;
box-ordinal-group: 5;

/* Global values */
box-ordinal-group: inherit;
box-ordinal-group: initial;
box-ordinal-group: unset;
```

Ordinal groups may be used in conjunction with the {{CSSxRef("box-direction")}} property to control the order in which the direct children of a box appear. When the computed `box-direction` is normal, a box will display its elements starting from the lowest numbered ordinal group and ensure that those elements appear to the left (for horizontal boxes) or at the top (for vertical boxes) of the container. Elements with the same ordinal group are flowed in the order they appear in the source document tree. In the reverse direction, the ordinal groups are examined in the same order, except the elements appear reversed.

## Syntax

The `box-ordinal-group` property is specified as any positive {{CSSxRef("&lt;integer&gt;")}}.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Basic usage example

In an older version of the spec, `box-ordinal-group` was included to allow you to change the display order of flex children inside a flex container:

```css
article:nth-child(1) {
  -webkit-box-ordinal-group: 2
  -moz-box-ordinal-group: 2
  box-ordinal-group: 2
}

article:nth-child(2) {
  -webkit-box-ordinal-group: 1
  -moz-box-ordinal-group: 1
  box-ordinal-group: 1
}
```

The modern flexbox equivalent is {{cssxref("order")}}.

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("box-flex")}}
- {{CSSxRef("box-flex-group")}}
- {{CSSxRef("box-pack")}}
