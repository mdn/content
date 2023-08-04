---
title: border-inline-start
slug: Web/CSS/border-inline-start
page-type: css-shorthand-property
browser-compat: css.properties.border-inline-start
---

{{CSSRef}}

The **`border-inline-start`** [CSS](/en-US/docs/Web/CSS) property is a [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) for setting the individual logical inline-start border property values in a single place in the style sheet.

{{EmbedInteractiveExample("pages/css/border-inline-start.html")}}

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`border-inline-start-color`](/en-US/docs/Web/CSS/border-inline-start-color)
- [`border-inline-start-style`](/en-US/docs/Web/CSS/border-inline-start-style)
- [`border-inline-start-width`](/en-US/docs/Web/CSS/border-inline-start-width)

## Syntax

```css
border-inline-start: 1px;
border-inline-start: 2px dotted;
border-inline-start: medium dashed green;

/* Global values */
border-inline-start: inherit;
border-inline-start: initial;
border-inline-start: revert;
border-inline-start: revert-layer;
border-inline-start: unset;
```

The physical border to which `border-inline-start` maps depends on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, or {{cssxref("border-left")}} property depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

Related properties are {{cssxref("border-block-start")}}, {{cssxref("border-block-end")}}, and {{cssxref("border-inline-end")}}, which define the other borders of the element.

### Values

The `border-inline-start` is specified with one or more of the following, in any order:

- `<'border-width'>`
  - : The width of the border. See {{cssxref("border-width")}}.
- `<'border-style'>`
  - : The line style of the border. See {{cssxref("border-style")}}.
- {{CSSXref("&lt;color&gt;")}}
  - : The color of the border.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-rl;
  border-inline-start: 5px dashed blue;
}
```

{{EmbedLiveSample("Examples", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Logical Properties and Values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values)
- This property maps to one of the physical border properties: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, or {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
