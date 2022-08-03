---
title: counter()
slug: Web/CSS/counter
tags:
  - CSS
  - CSS Counter
  - CSS Function
  - Function
  - Reference
browser-compat: css.types.counter
---
{{CSSRef}}

The **`counter()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) returns a string representing the current value of the named counter, if there is one.
It is generally used in the {{CSSxRef("content")}} property of [pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements), but can theoretically be used anywhere a [`<string>`](/en-US/docs/Web/CSS/string) value is supported.

```css
/* Simple usage */
counter(countername);

/* changing the counter display */
counter(countername, upper-roman)
```

A [counter](/en-US/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters) has no visible effect by itself.
The `counter()` function (and {{cssxref("counters", "counters()")}} function) is what makes it useful by returning developer defined strings (or images).

## Syntax

### Values

- {{cssxref("&lt;custom-ident&gt;")}}
  - : A name identifying the counter, which is the same case-sensitive name used for the {{cssxref("counter-reset")}} and {{cssxref("counter-increment")}}. The name cannot start with two dashes and can't be `none`, `unset`, `initial`, or `inherit`.
- `<counter-style>`
  - : A {{cssxref("&lt;list-style-type&gt;")}} name, {{cssxref("&lt;@counter-style&gt;")}} name or {{cssxref("symbols", "symbols()")}} function, where a counter style name is a `numeric`, `alphabetic`, or `symbolic` simple predefined counter style, a complex longhand east Asian or Ethiopic predefined counter style, or other [predefined counter style](/en-US/docs/Web/CSS/CSS_Counter_Styles). If omitted, the counter-style defaults to `decimal`.

### Formal syntax

{{CSSSyntax}}

## Examples

### default value compared to upper Roman

#### HTML

```html
<ol>
  <li></li>
  <li></li>
  <li></li>
</ol>
```

#### CSS

```css
ol {
  counter-reset: listCounter;
}
li {
  counter-increment: listCounter;
}
li::after {
  content: "[" counter(listCounter) "] == ["
               counter(listCounter, upper-roman) "]";
}
```

#### Result

{{EmbedLiveSample("default_value_compared_to_upper_Roman", "100%", 150)}}

### _decimal-leading-zero_ compared to lower-alpha

#### HTML

```html
<ol>
  <li></li>
  <li></li>
  <li></li>
</ol>
```

#### CSS

```css
ol {
  counter-reset: count;
}
li {
  counter-increment: count;
}
li::after {
  content: "[" counter(count, decimal-leading-zero) "] == ["
               counter(count, lower-alpha) "]";
}
```

#### Result

{{EmbedLiveSample("decimal-leading-zero_compared_to_lower-alpha", "100%", 150)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS Counters](/en-US/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters)
- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("counter-increment")}}
- {{cssxref("@counter-style")}}
- CSS [`counters()`](/en-US/docs/Web/CSS/counters) function
