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

When an inline box has `wrap-inside: avoid` set, the browser prefers to break the line before or after the box instead of inside it. If the box fits on the next line, the whole box moves to that line. If the box is too long to fit on any line, the browser still breaks inside it, at the same places it would with `auto`.

This is different from setting {{cssxref("white-space", "white-space: nowrap")}} (or {{cssxref("text-wrap-mode", "text-wrap-mode: nowrap")}}) on the box, which prevents line breaks inside the box entirely, even if the content then overflows its container.

If boxes with `wrap-inside: avoid` are nested and the browser has to break inside them, it uses a break point in the outer box before it uses a break point in an inner box.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example demonstrates how to use the `wrap-inside` property to keep a phrase on one line by avoiding line breaks inside it.

#### HTML

We include two boxes containing the same text. The date in each box is wrapped in a {{htmlelement("span")}} element. Each box has a different class, which we use to apply different `wrap-inside` values.

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

We set the paragraphs to be `20ch` wide, and give the dates a {{cssxref("background-color")}}. The first box uses the default value of `auto`, and the second box sets `wrap-inside: avoid` on the date. The other styles are hidden for brevity.

```css
p {
  width: 20ch;
}

.date {
  background-color: wheat;
}

.avoid .date {
  wrap-inside: avoid;
}
```

```css hidden
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

p {
  margin: 0;
  padding: 0.5rem;
  border: 2px dashed #999999;
  font-size: 1.25rem;
}
```

```css hidden
@layer no-support {
  @supports not (wrap-inside: avoid) {
    body::before {
      content: "Your browser doesn't support the wrap-inside property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
      margin-bottom: 1rem;
    }
  }
}
```

#### Result

{{EmbedLiveSample("Basic usage", "", 200)}}

In the first box, the browser breaks lines wherever they fit, so the date may be split across two lines.

In the second box, the browser avoids breaking inside the date. Instead, it breaks the line before the date, so the whole date appears on one line.

### Comparing with `white-space: nowrap`

This example demonstrates the effects of `wrap-inside: auto` and `wrap-inside: avoid` while comparing these to `white-space: nowrap`.

#### HTML

We include three paragraphs with identical content, including a phrase that is too long to fit on one line. The only difference between the paragraphs is their class names.

```html
<div class="container">
  <p class="default">
    Our address is
    <span class="address">123 Long Street, Springfield, Anytown</span>.
  </p>
  <p class="avoid">
    Our address is
    <span class="address">123 Long Street, Springfield, Anytown</span>.
  </p>
  <p class="nowrap">
    Our address is
    <span class="address">123 Long Street, Springfield, Anytown</span>.
  </p>
</div>
```

#### CSS

We set the paragraphs to be `20ch` wide, and give the address a {{cssxref("background-color")}}. The first box uses the default value of `auto`. The second box sets `wrap-inside: avoid` on the address, and the last box sets `white-space: nowrap` on the address. The other styles are hidden for brevity.

```css
p {
  width: 20ch;
}

.address {
  background-color: wheat;
}

.avoid .address {
  wrap-inside: avoid;
}

.nowrap .address {
  white-space: nowrap;
}
```

```css hidden
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

p {
  margin: 0;
  padding: 0.5rem;
  border: 2px dashed #999999;
  font-size: 1.25rem;
}
```

```css hidden
@layer no-support {
  @supports not (wrap-inside: avoid) {
    body::before {
      content: "Your browser doesn't support the wrap-inside property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
      margin-bottom: 1rem;
    }
  }
}
```

#### Result

{{EmbedLiveSample("Comparing with white-space: nowrap", "", 300)}}

In the first box, which uses the default value of `auto`, the browser breaks lines between words wherever needed, so the address starts on the first line.

In the second box, the address can't fit on any line, so `wrap-inside: avoid` can't keep it together. Instead, the browser starts the address on a new line, and only breaks inside it where it has to, so that it doesn't overflow the box.

In the last box, `white-space: nowrap` prevents any line break inside the address, so it overflows the box.

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
