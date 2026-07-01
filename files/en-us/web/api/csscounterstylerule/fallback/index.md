---
title: "CSSCounterStyleRule: fallback property"
short-title: fallback
slug: Web/API/CSSCounterStyleRule/fallback
page-type: web-api-instance-property
browser-compat: api.CSSCounterStyleRule.fallback
---

{{APIRef("CSSOM")}}

The **`fallback`** property of the {{domxref("CSSCounterStyleRule")}} interface gets and sets the value of the {{cssxref("@counter-style/fallback","fallback")}} descriptor. If the descriptor does not have a value set, this attribute returns an empty string.

## Value

A string.

## Examples

The following example shows a {{cssxref("@counter-style")}} rule. In JavaScript, `myRules[0]` is this `@counter-style` rule, returning `fallback` gives us the value "disc".

```css
@counter-style box-corner {
  system: fixed;
  symbols: ◰ ◳ ◲ ◱;
  suffix: ": ";
  fallback: disc;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].fallback); // "disc"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
