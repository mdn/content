---
title: flex-flow
slug: Web/CSS/flex-flow
page-type: css-shorthand-property
browser-compat: css.properties.flex-flow
---

{{CSSRef}}

The **`flex-flow`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) specifies the direction of a flex container, as well as its wrapping behavior.

{{EmbedInteractiveExample("pages/css/flex-flow.html")}}

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`flex-direction`](/en-US/docs/Web/CSS/flex-direction)
- [`flex-wrap`](/en-US/docs/Web/CSS/flex-wrap)

## Syntax

```css
/* flex-flow: <'flex-direction'> */
flex-flow: row;
flex-flow: row-reverse;
flex-flow: column;
flex-flow: column-reverse;

/* flex-flow: <'flex-wrap'> */
flex-flow: nowrap;
flex-flow: wrap;
flex-flow: wrap-reverse;

/* flex-flow: <'flex-direction'> and <'flex-wrap'> */
flex-flow: row nowrap;
flex-flow: column wrap;
flex-flow: column-reverse wrap-reverse;

/* Global values */
flex-flow: inherit;
flex-flow: initial;
flex-flow: revert;
flex-flow: revert-layer;
flex-flow: unset;
```

### Values

See {{cssxref("flex-direction")}} and {{cssxref("flex-wrap")}} for details on the values.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting column-reverse and wrap

In this example, the main-axis is the block direction with a reversed main-start and main-end. The flex items are allowed to wrap, creating new lines if needed.

```css
element {
  flex-flow: column-reverse wrap;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Basic concepts of flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ordering flex items](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
