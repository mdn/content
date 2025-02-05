---
title: line-clamp
slug: Web/CSS/line-clamp
page-type: css-property
browser-compat: css.properties.line-clamp
---

{{CSSRef}}

The **`line-clamp`** [CSS](/en-US/docs/Web/CSS) property allows limiting of the contents of a {{Glossary("block")}} to the specified number of lines.

> [!NOTE]
> For legacy support, the vendor-prefixed `-webkit-line-clamp` property only works in combination with the {{cssxref("display")}} property set to `-webkit-box` or `-webkit-inline-box` and the {{cssxref("box-orient", "-webkit-box-orient")}} property set to `vertical`. Despite these prefixed properties being deprecated, the co-dependency of these three properties is a fully specified behavior and will continue to be supported.

In most cases you will also want to set {{cssxref("overflow")}} to `hidden`, otherwise the contents won't be clipped but an ellipsis will still be shown after the specified number of lines.

When applied to anchor elements, the truncating can happen in the middle of the text, not necessarily at the end.

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
line-clamp: revert;
line-clamp: revert-layer;
line-clamp: unset;
```

### Values

- `none`
  - : This value specifies that the content won't be clamped.
- {{cssxref("integer")}}
  - : This value specifies the number of lines after which the content will be clamped. It must be greater than 0.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Truncating a paragraph

#### HTML

```html
<p>
  In this example the <code>-webkit-line-clamp</code> property is set to
  <code>3</code>, which means the text is clamped after three lines. An ellipsis
  will be shown at the point where the text is clamped.
</p>
```

#### CSS

```css
p {
  width: 300px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
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
