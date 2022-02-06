---
title: <an-plus-b>
slug: Web/CSS/an-plus-b
tags:
  - CSS
  - CSS Data Type
  - Data Type
  - Layout
  - Reference
  - Web
browser-compat: css.types.an-plus-b
---
{{CSSRef}}

The **`<an-plus-b>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) represents elements in a list whose indices match those found in a custom pattern of numbers. It can also be read as the *An*+*B*th element of a list. It is commonly used with the {{Cssxref(":nth-child")}}, {{Cssxref(":nth-of-type")}}, {{Cssxref(":nth-last-child")}}, and {{Cssxref(":nth-last-of-type")}} [pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes) as their only argument.

## Syntax

The `<an-plus-b>` data type consists of the expression `An+B`, where:

- `A` is an {{Cssxref("&lt;integer&gt;")}} step size,
- `B` is an {{Cssxref("&lt;integer&gt;")}} offset,
- `n` is all nonnegative integers, starting from 0.

> **Note:** The `A` and `B` values are optional and can be omitted from the data type.

## Examples

### Example selectors

- `2n+1`
  - : Represents the odd elements in a group of siblings: 1, 3, 5, etc.
- `2n`
  - : Represents the even elements in a group of siblings: 2, 4, 6, etc.
- `n+7`
  - : Represents the seventh and all following elements: **7** \[=0+7], **8** \[=1+7], **9** \[=2+7], **etc.**
- `-n+3`
  - : Represents the first three elements. \[=-0+3, -1+3, -2+3]
- `n`
  - : Represents all elements in a group of siblings.

### Detailed example

#### HTML

```html
<h3><code>span:nth-child(2n+1)</code></h3>
<p>Children 1, 3, 5, and 7 are selected.</p>
<div class="first">
  <span>Span 1!</span>
  <span>Span 2</span>
  <span>Span 3!</span>
  <span>Span 4</span>
  <span>Span 5!</span>
  <span>Span 6</span>
  <span>Span 7!</span>
</div>

<br>

<h3><code>span:nth-child(2n)</code></h3>
<p>Children 2, 4, 6, and 8 are selected.</p>
<div class="second">
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
</div>

<br>

<h3><code>span:nth-child(n+3)</code></h3>
<p>The third and all following children are selected.</p>
<div class="third">
  <span>Span</span>
  <span>Span</span>
  <span>Span!</span>
  <span>Span!</span>
  <span>Span!</span>
  <span>Span!</span>
  <span>Span!</span>
</div>

<br>

<h3><code>span:nth-child(-n+2)</code></h3>
<p>The first two children are selected.</p>
<div class="fourth">
  <span>Span!</span>
  <span>Span!</span>
  <span>Span</span>
  <span>Span</span>
  <span>Span</span>
  <span>Span</span>
  <span>Span</span>
</div>
```

#### CSS

```css
html {
  font-family: sans-serif;
}

span {
  padding: 5px;
  border: 1px solid green;
  display: inline-block;
  margin-bottom: 3px;
}

.first span:nth-child(2n+1),
.second span:nth-child(2n),
.third span:nth-child(n+3),
.fourth span:nth-child(-n+2) {
  background-color: lime;
}
```

#### Result

{{EmbedLiveSample('Detailed_example', 550, 550)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref(":nth-child")}}, {{Cssxref(":nth-of-type")}}, {{Cssxref(":nth-last-child")}}, {{Cssxref(":nth-last-of-type")}}
