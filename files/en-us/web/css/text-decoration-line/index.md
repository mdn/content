---
title: text-decoration-line
slug: Web/CSS/text-decoration-line
page-type: css-property
browser-compat: css.properties.text-decoration-line
---

{{CSSRef}}

The **`text-decoration-line`** [CSS](/en-US/docs/Web/CSS) property sets the kind of decoration that is used on text in an element, such as an underline or overline.

{{EmbedInteractiveExample("pages/css/text-decoration-line.html")}}

When setting multiple line-decoration properties at once, it may be more convenient to use the {{cssxref("text-decoration")}} shorthand property instead.

## Syntax

```css
/* Single keyword */
text-decoration-line: none;
text-decoration-line: underline;
text-decoration-line: overline;
text-decoration-line: line-through;
text-decoration-line: blink;

/* Multiple keywords */
text-decoration-line: underline overline; /* Two decoration lines */
text-decoration-line: overline underline line-through; /* Multiple decoration lines */

/* Global values */
text-decoration-line: inherit;
text-decoration-line: initial;
text-decoration-line: revert;
text-decoration-line: revert-layer;
text-decoration-line: unset;
```

The `text-decoration-line` property is specified as `none`, or **one or more** space-separated values from the list below.

### Values

- `none`
  - : Produces no text decoration.
- `underline`
  - : Each line of text has a decorative line beneath it.
- `overline`
  - : Each line of text has a decorative line above it.
- `line-through`
  - : Each line of text has a decorative line going through its middle.
- `blink`
  - : The text blinks (alternates between visible and invisible). Conforming user agents may not blink the text. This value is **deprecated** in favor of [CSS animations](/en-US/docs/Web/CSS/animation).

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic example

```html
<p class="wavy">Here's some text with wavy red underline!</p>
<p class="both">This text has lines both above and below it.</p>
```

```css
.wavy {
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: red;
}

.both {
  text-decoration-line: underline overline;
}
```

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- When setting multiple line-decoration properties at once, it may be more convenient to use the {{cssxref("text-decoration")}} shorthand property instead, which also includes:
  - {{cssxref("text-decoration-style")}}
  - {{cssxref("text-decoration-color")}}
  - {{cssxref("text-decoration-thickness")}}
- {{cssxref("text-underline-offset")}}
