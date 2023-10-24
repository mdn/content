---
title: pad
slug: Web/CSS/@counter-style/pad
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.counter-style.pad
---

{{CSSRef}}

The **`pad`** descriptor of the {{cssxref("@counter-style")}} at-rule can be used to ensure the marker representations has a minimum length.

## Syntax

```css
pad: 3 "0";
```

### Values

The descriptor takes two space separated values: the pad length as an `<integer>` and the padding `<symbol>`.

- {{cssxref("integer")}}

  - : The `<integer>` specifies a minimum length that all counter representations must reach. The value must be non-negative.

- {{cssxref("symbol")}}
  - : If the minimum length defined by the `<integer>` is not reached, the representation will be padded with the specified `<symbol>`.

## Description

The `pad` descriptor is used when you need the marker representations to be of a minimum length. If a marker representation is smaller than the specified pad length, then the marker will be padded with the specified pad symbol. Marker representations longer than the pad length are constructed as normal.

Pad descriptor takes the minimum marker length as an integer and a symbol to be used for padding as the second parameter. A common usage of the pad descriptor is when you need your list to start numbering from `01` and go through `02`, `03`, `04`, and so on, instead of just 1, 2, 3, 4. Using the descriptor `pad: 2 "0"` tells the browser to "make the counter at least two character long. If there aren't two characters, pad the counter with "0" until the minimum 2-character length is reached. For markers that are 2 or more character long, construct the marker normally, without padding."

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Padding a counter

This example extends the `decimal` {{cssxref("@counter-style/system","system")}}, to create a counter that is at least three characters long, padding shorter numbers with `0` until that minimum length is reached. A {{cssxref("@counter-style/suffix", "suffix")}} was added to make the output more legible.

#### HTML

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li value="40">Forty</li>
  <li>Forty-one</li>
  <li value="200">Two hundred</li>
  <li value="3000">Three thousand</li>
  <li>etc.</li>
</ul>
```

#### CSS

```css
@counter-style pad-example {
  system: extends decimal;
  suffix: ": ";
  pad: 3 "0";
}

ul {
  list-style: pad-example;
}
```

#### Result

{{ EmbedLiveSample('Padding a counter', '100', '200') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other {{cssxref("@counter-style")}} descriptors, including, {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, and {{cssxref("@counter-style/fallback", "fallback")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}, the functional notation creating anonymous counter styles.
