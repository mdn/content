---
title: additive-symbols
slug: Web/CSS/@counter-style/additive-symbols
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.counter-style.additive-symbols
---

{{CSSRef}}

The **`additive-symbols`** descriptor lets you specify symbols when the value of a counter {{cssxref('system')}} descriptor is `additive`. The `additive-symbols` descriptor defines _additive tuples_, each of which is a pair containing a symbol and a non-negative integer weight. The additive system is used to construct [sign-value numbering](https://en.wikipedia.org/wiki/Sign-value_notation) systems such as Roman numerals.

## Syntax

```css
additive-symbols: 3 "0";
additive-symbols:
  3 "0",
  2 "\2E\20";
additive-symbols:
  3 "0",
  2 url(symbol.png);
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
<ul class="list">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ul>
```

#### CSS

```css
@counter-style additive-symbols-example {
  system: additive;
  additive-symbols:
    V 5,
    IV 4,
    I 1;
}
.list {
  list-style: additive-symbols-example;
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
