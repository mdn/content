---
title: pad
slug: Web/CSS/@counter-style/pad
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.counter-style.pad
---

{{CSSRef}}

The **`pad`** descriptor can be used with custom counter style definitions when you need the marker representations to have a minimum length.

## Syntax

```css
pad: 3 "0";
```

### Values

- `<integer> && <symbol>`
  - : The `<integer>` specifies a minimum length that all counter representations must reach. The value must be non-negative. If the minimum length is not reached, the representation will be padded with the specified `<symbol>`.

## Description

If a marker representation is smaller than the specified pad length, then the marker will be padded with the specified pad symbol. Marker representations longer than the pad length are constructed as normal. Pad descriptor takes the minimum marker length as an integer and a symbol to be used for padding as the second parameter. A common usage of the pad descriptor is when you need your list to start numbering from 01 and go through 02, 03 and so on, instead of just 1, 2, 3…

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Padding a counter

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
@counter-style pad-example {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5";
  pad: 2 "0";
}

.list {
  list-style: pad-example;
}
```

#### Result

{{ EmbedLiveSample('Padding a counter') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}, the functional notation creating anonymous counter styles.
