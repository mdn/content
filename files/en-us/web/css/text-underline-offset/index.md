---
title: text-underline-offset
slug: Web/CSS/text-underline-offset
page-type: css-property
browser-compat: css.properties.text-underline-offset
---

{{CSSRef}}

The **`text-underline-offset`** [CSS](/en-US/docs/Web/CSS) property sets the offset distance of an underline text decoration line (applied using {{cssxref("text-decoration")}}) from its original position.

{{EmbedInteractiveExample("pages/css/text-underline-offset.html")}}

`text-underline-offset` is not part of the {{cssxref('text-decoration')}} shorthand. While an element can have multiple `text-decoration` lines, `text-underline-offset` only impacts underlining, and **not** other possible line decoration options such as `overline` or `line-through`.

## Syntax

```css
/* Single keyword */
text-underline-offset: auto;

/* length */
text-underline-offset: 0.1em;
text-underline-offset: 3px;

/* percentage */
text-underline-offset: 20%;

/* Global values */
text-underline-offset: inherit;
text-underline-offset: initial;
text-underline-offset: revert;
text-underline-offset: revert-layer;
text-underline-offset: unset;
```

The `text-underline-offset` property is specified as a single value from the list below.

### Values

- `auto`
  - : The browser chooses the appropriate offset for underlines.
- `<length>`
  - : Specifies the offset of underlines as a {{cssxref('length')}}, overriding the font file suggestion and the browser default. It is recommended to use `em` units so the offset scales with the font size.
- `<percentage>`
  - : Specifies the offset of underlines as a {{cssxref('percentage')}} of **1 em** in the element's font. A percentage inherits as a relative value, and so therefore scales with changes in the font. For a given application of this property, the offset is constant across the whole box that the underline is applied to, even if there are child elements with different font sizes or vertical alignment.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Demonstration of text-underline-offset

```html
<p class="one-line">Here's some text with an offset wavy red underline!</p>
<br />
<p class="two-lines">
  This text has lines both above and below it. Only the bottom one is offset.
</p>
```

```css
p {
  text-decoration: underline wavy red;
  text-underline-offset: 1em;
}

.two-lines {
  text-decoration-color: purple;
  text-decoration-line: underline overline;
}
```

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("text-decoration")}}
- {{cssxref("text-decoration-thickness")}}
