---
title: CSSCounterStyleRule.additiveSymbols
slug: Web/API/CSSCounterStyleRule/additiveSymbols
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - additiveSymbols
  - CSSCounterStyleRule
browser-compat: api.CSSCounterStyleRule.additiveSymbols
---
{{DefaultAPISidebar("CSS Counter Styles")}}

The **`additiveSymbols`** property of the {{domxref("CSSCounterStyleRule")}} interface gets and sets the value of the {{cssxref("@counter-style/additive-symbols","additive-symbols")}} descriptor. If the descriptor does not have a value set, this attribute returns an empty string.

## Value

A string.

## Examples

The following example shows a {{cssxref("@counter-style")}} rule. In JavaScript, `myRules[0]` is this `@counter-style` rule, returning `additiveSymbols` gives us the value " V 5, IV 4, I 1".

```css
@counter-style additive-symbols-example {
  system: additive;
  additive-symbols: V 5, IV 4, I 1;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].additiveSymbols); // " V 5, IV 4, I 1"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
