---
title: margin-block
slug: Web/CSS/margin-block
tags:
  - CSS
  - CSS Logical Property
  - CSS Property
  - Reference
  - margin-block
  - recipe:css-shorthand-property
browser-compat: css.properties.margin-block
---
{{CSSRef}}

The **`margin-block`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.

{{EmbedInteractiveExample("pages/css/margin-block.html")}}

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("margin-block-start")}}
- {{cssxref("margin-block-end")}}

## Syntax

```css
/* <length> values */
margin-block: 10px 20px;  /* An absolute length */
margin-block: 1em 2em;    /* relative to the text size */
margin-block: 5% 2%;      /* relative to the nearest block container's width */
margin-block: 10px;       /* sets both start and end values */

/* Keyword values */
margin-block: auto;

/* Global values */
margin-block: inherit;
margin-block: initial;
margin-block: revert;
margin-block: revert-layer;
margin-block: unset;
```

This property corresponds to the {{CSSxRef("margin-top")}} and {{CSSxRef("margin-bottom")}}, or the {{CSSxRef("margin-right")}} and {{CSSxRef("margin-left")}} properties, depending on the values defined for {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, and {{CSSxRef("text-orientation")}}.

The `margin-block` property may be specified using one or two values.

- When **one** value is specified, it applies the same margin to **both start and end**.
- When **two** values are specified, the first margin applies to the **start**, the second to the **end**.

### Values

The `margin-block` property takes the same values as the {{CSSxRef("margin", "", "#values")}} property.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting block start and end margins

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: auto;
  border: 1px solid green;
}

p {
  margin: 0;
  margin-block: 20px 40px;
  background-color: tan;
}

.verticalExample {
  writing-mode: vertical-rl;
}
```

#### HTML

```html
<div>
  <p>Example text</p>
</div>
<div class="verticalExample">
  <p>Example text</p>
</div>
```

#### Result

{{EmbedLiveSample("Setting_block_start_and_end_margins", 140, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The mapped physical properties: {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}}, and {{CSSxRef("margin-left")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
