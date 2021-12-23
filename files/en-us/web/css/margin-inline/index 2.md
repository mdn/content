---
title: margin-inline
slug: Web/CSS/margin-inline
tags:
  - CSS
  - CSS Logical Property
  - CSS Property
  - Experimental
  - Reference
  - margin-inline
  - recipe:css-shorthand-property
browser-compat: css.properties.margin-inline
---
{{CSSRef}}

The **`margin-inline`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) is a shorthand property that defines both the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.

```css
/* <length> values */
margin-inline: 10px 20px;  /* An absolute length */
margin-inline: 1em 2em;    /* relative to the text size */
margin-inline: 5% 2%;      /* relative to the nearest block container's width */
margin-inline: 10px;       /* sets both start and end values */

/* Keyword values */
margin-inline: auto;

/* Global values */
margin-inline: inherit;
margin-inline: initial;
margin-inline: revert;
margin-inline: unset;
```

This property corresponds to the {{CSSxRef("margin-top")}} and {{CSSxRef("margin-bottom")}}, or the {{CSSxRef("margin-right")}} and {{CSSxRef("margin-left")}} properties, depending on the values defined for {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, and {{CSSxRef("text-orientation")}}.

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`margin-inline-start`](/en-US/docs/Web/CSS/margin-inline-start)
- [`margin-inline-end`](/en-US/docs/Web/CSS/margin-inline-end)

If 2 values are specified, the first value sets the start, the second value sets the end. If 1 value is specified, it sets both properties with the same value.

## Syntax

### Values

The `margin-inline` property takes the same values as the {{CSSxRef("margin-left")}} property.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting inline start and end margins

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
  margin-inline: 20px 40px;
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

{{EmbedLiveSample("Setting_inline_start_and_end_margins", 140, 240)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The mapped physical properties: {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}}, and {{CSSxRef("margin-left")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
