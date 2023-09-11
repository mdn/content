---
title: symbols()
slug: Web/CSS/symbols
page-type: css-function
browser-compat: css.properties.list-style-type.symbols
---

{{CSSRef}}

The **`symbols()`** CSS function lets you define counter styles inline, directly as the value of a property such as {{cssxref("list-style")}}. Unlike {{cssxref("@counter-style")}}, `symbols()` is _anonymous_ (i.e., it can only be used once). Although less powerful, it is shorter and easier to write than {{cssxref("@counter-style")}}.

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

- {{cssxref("@counter-style")}}
- {{cssxref("list-style-type")}} and the corresponding shorthand {{cssxref("list-style")}}.
