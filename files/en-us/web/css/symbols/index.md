---
title: symbols()
slug: Web/CSS/symbols
page-type: css-function
browser-compat: css.properties.list-style-type.symbols
---

{{CSSRef}}

The **`symbols()`** CSS function enables defining counter styles inline, directly as a value of properties such as {{cssxref("list-style")}}, providing a less powerful but simpler alternative to the {{cssxref("@counter-style")}} method of defining a counter style.

Unlike {{cssxref("@counter-style")}}, which defines a reusable counter style, `symbols()` is _anonymous_ (i.e., it can only be used once). This function accepts strings and images as values. In comparison, the {{cssxref("@counter-style")}}'s [`symbols`](/en-US/docs/Web/CSS/@counter-style/symbols) descriptor also accepts identifiers.

## Syntax

```css
symbols() = symbols( <symbols-type>? [ <string> | <image> ]+ );
```

`<symbols-type>` can be one of the following:

- `cyclic`: The system cycles through the given values in the order of their definition, and returns to the start when it reaches the end.
- `numeric`: The system interprets the given values as the successive units of a place-value numbering system.
- `alphabetic`: The system interprets the given values as the digits of an alphabetic numbering system, like a place-value numbering system but without `0`.
- `symbolic`: The system cycles through the values, printing them an additional time at each cycle (one time for the first cycle, two times for the second, etc.).
- `fixed`: The system cycles through the given values once, then falls back to Arabic numerals.

## Formal syntax

{{CSSSyntax}}

## Examples

### HTML

```html
<ol>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ol>
```

### CSS

```css
ol {
  list-style: symbols(cyclic "*" "†" "‡");
}
```

### Result

{{EmbedLiveSample('Examples','100%',200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@counter-style")}} descriptors: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, {{cssxref("@counter-style/fallback", "fallback")}}
- List style properties: {{cssxref("list-style")}}, {{cssxref("list-style-type")}}
- [CSS counter styles](/en-US/docs/Web/CSS/CSS_counter_styles) module
- [CSS lists and counters](/en-US/docs/Web/CSS/CSS_lists) module
