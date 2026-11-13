---
title: "`wrap-inside` CSS property"
short-title: wrap-inside
slug: Web/CSS/Reference/Properties/wrap-inside
page-type: css-property
browser-compat: css.properties.wrap-inside
sidebar: cssref
---

The **`wrap-inside`** [CSS](/en-US/docs/Web/CSS) property specifies whether line breaks are allowed inside an inline box, or should be avoided if possible.

{{InteractiveExample("CSS Demo: wrap-inside")}}

```css interactive-example-choice
wrap-inside: auto;
```

```css interactive-example-choice
wrap-inside: avoid;
```

```html interactive-example
<section id="default-example">
  <p>
    The conference takes place on
    <span id="example-element">Saturday 14 November</span> in the main hall.
  </p>
</section>
```

```css interactive-example
p {
  border: 2px dashed #999999;
  font-size: 1.5rem;
  text-align: left;
  width: 20ch;
}

#example-element {
  background-color: rgba(255, 193, 7, 0.3);
}
```

## Syntax

```css
/* Keyword values */
wrap-inside: auto;
wrap-inside: avoid;

/* Global values */
wrap-inside: inherit;
wrap-inside: initial;
wrap-inside: revert;
wrap-inside: revert-layer;
wrap-inside: unset;
```

### Values

- `auto`
  - : Lines can break at any allowed break point inside the box, as determined by the line-breaking rules in effect. This is the default.
- `avoid`
  - : Line breaks inside the box are avoided. The browser only breaks a line inside the box if there are no other valid break points in the line. If the text does break inside the box, the same line-breaking rules apply as for `auto`.

## Description

The `wrap-inside` property lets you keep the content of an inline box, such as a {{htmlelement("span")}}, together on one line where possible. This is useful for short phrases that read better when they aren't split across lines, such as names, dates, addresses, or product names.

When an inline box has `wrap-inside: avoid` set, the browser prefers to break the line before or after the box instead of inside it. If the box fits on the next line, the whole box moves to that line. If the box is too long to fit on any line, the browser still breaks inside it, so the content doesn't overflow.

This is different from setting {{cssxref("white-space", "white-space: nowrap")}} (or {{cssxref("text-wrap-mode", "text-wrap-mode: nowrap")}}) on the box, which prevents line breaks inside the box entirely, even if the content then overflows its container.

If boxes with `wrap-inside: avoid` are nested and the browser has to break inside them, it uses a break point in the outer box before it uses a break point in an inner box.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Keeping a phrase together

In this example, we have two boxes containing the same text. The date in each box is wrapped in a {{htmlelement("span")}} element. The first box uses the default value of `auto`, while the second box sets `wrap-inside: avoid` on the date.

#### HTML

```html
<div class="container">
  <p class="auto">
    The conference takes place on
    <span class="date">Saturday 14 November</span> in the main hall.
  </p>
  <p class="avoid">
    The conference takes place on
    <span class="date">Saturday 14 November</span> in the main hall.
  </p>
</div>
```

#### CSS

```css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

p {
  margin: 0;
  width: 200px;
  padding: 0.5rem;
  border: 2px dashed #999999;
  font-size: 1.25rem;
}

.date {
  background-color: #ffe4a1;
}

.avoid .date {
  wrap-inside: avoid;
}
```

#### Result

{{EmbedLiveSample("Keeping a phrase together", "", 200)}}

In the first box, the browser breaks lines wherever they fit, so the date may be split across two lines.

In the second box, the browser avoids breaking inside the date. Instead, it breaks the line before the date, so the whole date appears on one line.

### Comparing with `white-space: nowrap`

In this example, the highlighted phrase is too long to fit on one line. The first box sets `wrap-inside: avoid` on the phrase, while the second box sets `white-space: nowrap`.

#### HTML

```html
<div class="container">
  <p class="avoid">
    Our address is
    <span class="address">1234 Long Street, Springfield, Anytown</span>.
  </p>
  <p class="nowrap">
    Our address is
    <span class="address">1234 Long Street, Springfield, Anytown</span>.
  </p>
</div>
```

#### CSS

```css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

p {
  margin: 0;
  width: 150px;
  padding: 0.5rem;
  border: 2px dashed #999999;
  font-size: 1.25rem;
}

.address {
  background-color: #ffe4a1;
}

.avoid .address {
  wrap-inside: avoid;
}

.nowrap .address {
  white-space: nowrap;
}
```

#### Result

{{EmbedLiveSample("Comparing with white-space: nowrap", "", 200)}}

In the first box, the address can't fit on any line, so `wrap-inside: avoid` can't keep it together. The browser starts the address on a new line and breaks inside it only where it has to.

In the second box, `white-space: nowrap` prevents any line break inside the address, so it overflows the box.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("text-wrap-mode")}}
- {{cssxref("white-space")}}
- {{cssxref("word-break")}}
- {{cssxref("overflow-wrap")}}
- [Wrapping and breaking text](/en-US/docs/Web/CSS/Guides/Text/Wrapping_breaking_text)
- [CSS Text module](/en-US/docs/Web/CSS/Guides/Text)
