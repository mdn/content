---
title: "CSSCounterStyleRule: range property"
short-title: range
slug: Web/API/CSSCounterStyleRule/range
page-type: web-api-instance-property
browser-compat: api.CSSCounterStyleRule.range
---

{{APIRef("CSSOM")}}

The **`range`** property of the {{domxref("CSSCounterStyleRule")}} interface gets and sets the value of the {{cssxref("@counter-style/range","range")}} descriptor. If the descriptor does not have a value set, this attribute returns an empty string.

## Value

A string.

## Examples

The following example shows a {{cssxref("@counter-style")}} rule. In JavaScript, `myRules[0]` is this `@counter-style` rule, returning `range` gives us the value "2 4, 7 9".

```css
@counter-style range-multi-example {
  system: cyclic;
  symbols: "\25A0" "\25A1";
  range:
    2 4,
    7 9;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].range); // "2 4, 7 9"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
