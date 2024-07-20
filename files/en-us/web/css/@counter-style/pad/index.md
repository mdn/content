---
title: pad
slug: Web/CSS/@counter-style/pad
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.counter-style.pad
---

{{CSSRef}}

The **`pad`** descriptor of the {{cssxref("@counter-style")}} at-rule is used to set a minimum length for marker representations.

## Syntax

```css
pad: 3 "0";
pad: "+" 5;
```

### Values

The descriptor accepts the following two values, which are separated by a space and can be specified in any order:

- {{cssxref("integer")}}

  - : Specifies the minimum length that all marker representations must reach. The value must be non-negative. In the case of the `pad` descriptor, this value is also known as the _pad length_.

- [`<symbol>`](/en-US/docs/Web/CSS/@counter-style/symbols#symbol)
  - : Specifies the symbol to be used for padding if the minimum length defined by the `<integer>` is not reached. In the case of the `pad` descriptor, this value is also known as the _padding symbol_.

## Description

Use the `pad` descriptor when you need the marker representations to be of a minimum length. If a marker representation is shorter than the specified pad length, then the marker representation will be padded with the specified padding symbol. Marker representations longer than the pad length are displayed without any additional padding.

The `pad` descriptor takes an `<integer>` for the minimum marker length and a `<symbol>` for the padding. A common use case of the `pad` descriptor is when you need a list to start numbering from `01` and go through `02`, `03`, `04`, and so on, instead of just `1`, `2`, `3`, and `4`. By specifying the `pad` descriptor as `pad: 2 "0"` in this case, the browser ensures to make the counter at least two characters long and adds a padding with `0` to reach the minimum two-character length where needed. Counters that are already two or more characters long in this example will be displayed normally, without padding.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Padding a counter

This example extends the `decimal` {{cssxref("@counter-style/system","system")}} to create a counter that is at least three characters long, padding shorter counters with `0` to reach that minimum length. A {{cssxref("@counter-style/suffix", "suffix")}} descriptor has been added to make the output more legible.

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
  <li>and so on</li>
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

- {{cssxref("@counter-style")}} descriptors: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, {{cssxref("@counter-style/fallback", "fallback")}}
- List style properties: {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}} function to create anonymous counter styles
- [CSS counter styles](/en-US/docs/Web/CSS/CSS_counter_styles) module
- [CSS lists and counters](/en-US/docs/Web/CSS/CSS_lists) module
