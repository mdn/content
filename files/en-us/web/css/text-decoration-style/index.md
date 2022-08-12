---
title: text-decoration-style
slug: Web/CSS/text-decoration-style
tags:
  - CSS
  - CSS Property
  - CSS Text Decoration
  - Layout
  - Reference
  - recipe:css-property
browser-compat: css.properties.text-decoration-style
---
{{CSSRef}}

The **`text-decoration-style`** [CSS](/en-US/docs/Web/CSS) property sets the style of the lines specified by {{ cssxref("text-decoration-line") }}. The style applies to all lines that are set with `text-decoration-line`.

{{EmbedInteractiveExample("pages/css/text-decoration-style.html")}}

If the specified decoration has a specific semantic meaning, like a line-through line meaning that some text has been deleted, authors are encouraged to denote this meaning using an HTML tag, like {{ HTMLElement("del") }} or {{ HTMLElement("s") }}. As browsers can disable styling in some cases, the semantic meaning won't disappear in such a situation.

When setting multiple line-decoration properties at once, it may be more convenient to use the {{cssxref("text-decoration")}} shorthand property instead.

## Syntax

```css
/* Keyword values */
text-decoration-style: solid;
text-decoration-style: double;
text-decoration-style: dotted;
text-decoration-style: dashed;
text-decoration-style: wavy;

/* Global values */
text-decoration-style: inherit;
text-decoration-style: initial;
text-decoration-style: revert;
text-decoration-style: revert-layer;
text-decoration-style: unset;
```

### Values

- solid
  - : Draws a single line.
- double
  - : Draws a double line.
- dotted
  - : Draws a dotted line.
- dashed
  - : Draws a dashed line.
- wavy
  - : Draws a wavy line.
- \-moz-none {{ non-standard_inline }}
  - : Draws no line. Use {{ cssxref("text-decoration-line") }}`: none` instead.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting a wavy underline

The following creates a red wavy underline:

#### CSS

```css
.wavy {
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: red;
}
```

#### HTML

```html
<p class="wavy">This text has a wavy red line beneath it.</p>
```

#### Results

{{ EmbedLiveSample('Setting_a_wavy_underline', '', '', '') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- When setting multiple line-decoration properties at once, it may be more convenient to use the {{cssxref("text-decoration")}} shorthand property instead.
- {{cssxref("text-decoration-line")}}
- {{cssxref("text-decoration-color")}}
- {{cssxref("text-decoration-thickness")}}
- {{cssxref("text-underline-offset")}}
