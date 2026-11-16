---
title: "CSSCounterStyleRule: pad property"
short-title: pad
slug: Web/API/CSSCounterStyleRule/pad
page-type: web-api-instance-property
browser-compat: api.CSSCounterStyleRule.pad
---

{{APIRef("CSSOM")}}

The **`pad`** property of the {{domxref("CSSCounterStyleRule")}} interface gets and sets the value of the {{cssxref("@counter-style/pad", "pad")}} descriptor. If the descriptor does not have a value set, this attribute returns an empty string.

## Value

A string.

## Examples

The following example shows a {{cssxref("@counter-style")}} rule. In JavaScript, `myRules[0]` is this `@counter-style` rule, returning `pad` gives us the value "0".

```css
@counter-style box-corner {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5";
  pad: 2 "0";
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].pad); // "0"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
