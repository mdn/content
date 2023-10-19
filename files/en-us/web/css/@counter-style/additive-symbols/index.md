---
title: additive-symbols
slug: Web/CSS/@counter-style/additive-symbols
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.counter-style.additive-symbols
---

{{CSSRef}}

The **`additive-symbols`** descriptor of the {{cssxref('@counter-style')}} at-rule is used to specify counter symbols when {{cssxref('@counter-style/system', 'system: additive')}} is set as a `@counter-style` descriptor. The additive system is used to construct [sign-value numbering](https://en.wikipedia.org/wiki/Sign-value_notation) systems such as Roman numerals.

The `additive-symbols` descriptor defines a comma-separated list of _additive tuples_. Each _additive tuple_ contains a space-separated non-negative integer weight and counter symbol. To be valid, the list must be in descending weight order.

## Syntax

```css
additive-symbols: 3 "*";
additive-symbols:
  3 "0",
  2 "\2E\20",
  1 url(symbol.png);
/* binary counter */
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

When the `system` descriptor is `cyclic`, `numeric`, `alphabetic`, `symbolic`, or `fixed`, use the {{cssxref('symbols')}} descriptor instead of `additive-symbols`.

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

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- The {{cssxref("symbols", "symbols()")}}, functional notation is used for creating anonymous counter styles.
- [CSS counter styles](/en-US/docs/Web/CSS/CSS_counter_styles) module
