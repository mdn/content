---
title: additive-symbols
slug: Web/CSS/@counter-style/additive-symbols
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.counter-style.additive-symbols
---

{{CSSRef}}

The **`additive-symbols`** descriptor of the {{cssxref('@counter-style')}} at-rule is used to specify counter symbols when the `@counter-style` {{cssxref('@counter-style/system', 'system')}} descriptor value is set as `additive`. The additive system is used to construct [sign-value numbering](https://en.wikipedia.org/wiki/Sign-value_notation) systems such as Roman numerals.

## Syntax

```css
/* Single tuple */
additive-symbols: 3 "*";

/* Comma-separated list of tuples */
additive-symbols:
  3 "0",
  2 "\2E\20",
  1 url(symbol.png);

/* Binary counter */
additive-symbols:
  2 "1",
  1 "0";

/* Etruscan counter */
additive-symbols:
  100 "𐌟",
  50 "𐌣",
  10 "𐌢",
  5 "𐌡",
  1 "𐌠";
```

## Description

The `additive-symbols` descriptor defines a comma-separated list of _additive tuples_. Each _additive tuple_ contains a space-separated non-negative integer and counter symbol. To be valid, the list must be in the descending order of integer. The integer and symbol are concatenated together to form the counter symbol.

When the `system` descriptor value is `cyclic`, `numeric`, `alphabetic`, `symbolic`, or `fixed`, use the {{cssxref('symbols')}} descriptor instead of `additive-symbols`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Specifying additive symbols

#### HTML

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
  <li value="109">109</li>
  <li>110</li>
</ul>
```

#### CSS

```css
@counter-style uppercase-roman {
  system: additive;
  additive-symbols:
    1000 M,
    900 CM,
    500 D,
    400 CD,
    100 C,
    90 XC,
    50 L,
    40 XL,
    10 X,
    9 IX,
    5 V,
    4 IV,
    1 I;
}

ul {
  list-style: uppercase-roman;
  padding-left: 5em;
}
```

#### Result

{{ EmbedLiveSample('Specifying_additive_symbols') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@counter-style")}} descriptors: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, {{cssxref("@counter-style/fallback", "fallback")}}
- List style properties: {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}} function to create anonymous counter styles
- [CSS counter styles](/en-US/docs/Web/CSS/CSS_counter_styles) module
