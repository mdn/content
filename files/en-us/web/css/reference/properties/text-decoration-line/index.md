---
title: text-decoration-line
slug: Web/CSS/Reference/Properties/text-decoration-line
page-type: css-property
browser-compat: css.properties.text-decoration-line
sidebar: cssref
---

The **`text-decoration-line`** [CSS](/en-US/docs/Web/CSS) property sets the kind of decoration that is used on text in an element, such as an underline or overline.

{{InteractiveExample("CSS Demo: text-decoration-line")}}

```css interactive-example-choice
text-decoration-line: none;
```

```css interactive-example-choice
text-decoration-line: underline;
```

```css interactive-example-choice
text-decoration-line: overline;
```

```css interactive-example-choice
text-decoration-line: line-through;
```

```css interactive-example-choice
text-decoration-line: grammar-error;
```

```css interactive-example-choice
text-decoration-line: spelling-error;
```

```css interactive-example-choice
text-decoration-line: underline overline;
```

```css interactive-example-choice
text-decoration-line: underline line-through;
```

```html interactive-example
<section id="default-example">
  <p>
    I'd far rather be
    <span class="transition-all" id="example-element">happy than right</span>
    any day.
  </p>
</section>
```

```css interactive-example
p {
  font: 1.5em sans-serif;
}
```

When setting multiple line-decoration properties at once, it may be more convenient to use the {{cssxref("text-decoration")}} shorthand property instead.

## Syntax

```css
/* Single keyword */
text-decoration-line: none;
text-decoration-line: underline;
text-decoration-line: overline;
text-decoration-line: line-through;
text-decoration-line: blink;
text-decoration-line: spelling-error;
text-decoration-line: grammar-error;

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
  - : The text blinks (alternates between visible and invisible). Conforming user agents may not blink the text. This value is **deprecated** in favor of [CSS animations](/en-US/docs/Web/CSS/Reference/Properties/animation).
- `spelling-error`
  - : Each line of text uses the user agents' method of highlighting spelling mistakes, which is a dotted red line in most browsers.
- `grammar-error`
  - : Each line of text uses the user agents' method of highlighting grammar mistakes, which is a dotted green line in most browsers.

> [!NOTE]
> When using `spelling-error` and `grammar-error` values, the browser disregards the other properties in the {{cssxref("text-decoration")}} shorthand (such as {{cssxref("text-underline-position")}}, `color`, or `stroke`).

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

{{EmbedLiveSample('basic_example',,90)}}

### Errors example

In this example, the first paragraph contains a spelling mistake and uses the browser's styling for spelling errors on the misspelled word. The second paragraph uses the browser's styling for grammar errors. There is no styling change in browsers that do not support these `text-decoration-line` values.

<!-- cSpell:ignore speling -->

```html
<p>This text contains a <span class="spelling">speling</span> mistake.</p>
<p class="grammar">This text contain grammatical errors.</p>
```

```css
.spelling {
  text-decoration-line: spelling-error;
}

.grammar {
  text-decoration-line: grammar-error;
}
```

{{EmbedLiveSample('errors_example',,90)}}

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
- {{cssxref("::spelling-error")}}
- {{cssxref("::grammar-error")}}
