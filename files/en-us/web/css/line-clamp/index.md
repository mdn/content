---
title: line-clamp
slug: Web/CSS/line-clamp
tags:
  - CSS
  - CSS Property
  - Reference
  - line-clamp
  - recipe:css-property
browser-compat: css.properties.line-clamp
---
{{CSSRef}}

The **`line-clamp`** [CSS](/en-US/docs/Web/CSS) property allows limiting the contents of a {{Glossary("block container")}} to the specified number of lines. It only works in combination with the {{cssxref("display")}} property set to `-webkit-box` or `-webkit-inline-box` and the {{cssxref("box-orient")}} or {{cssxref("-webkit-box-orient")}} property set to `vertical`.

In most cases, you will also want to set {{cssxref("overflow")}} to `hidden`, otherwise the contents won't be clipped but an ellipsis character (`…`) will still be shown after the specified number of lines.

When applied to anchor elements, the truncating can happen in the middle of the text, and not necessarily at the end.

> **Note:** This property is part of the [CSS Overflow Module Level 3](https://www.w3.org/TR/css-overflow-3/#propdef-line-clamp) specification and is meant to replace the {{cssxref("-webkit-line-clamp")}} property and avoid its issues.

## Syntax

```css
/* Keyword value */
line-clamp: none;

/* <integer> values */
line-clamp: 3;
line-clamp: 10;

/* Global values */
line-clamp: inherit;
line-clamp: initial;
line-clamp: unset;
```

### Values

- `none`
  - : Specifies that the content won't be clamped.
- {{cssxref("integer")}}
  - : Specifies the number of lines after which the content will be clamped. Must be greater than 0.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Truncating a paragraph

#### HTML

```html
<p>
  This paragraph has the <code>line-clamp</code> property set on it to <code>3</code>, which means that the text is clamped after three lines. An ellipsis character will be shown at the point where the text is clamped.
</p>
```

#### CSS

```css
p {
  width: 300px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  overflow: hidden;
}
```

#### Result

{{EmbedLiveSample("Truncating_a_paragraph", "100%", "130")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Line Clampin' (Truncating Multiple Line Text)](https://css-tricks.com/line-clampin/)
- {{cssxref("-webkit-line-clamp")}}
