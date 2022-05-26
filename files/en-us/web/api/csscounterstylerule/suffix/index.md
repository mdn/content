---
title: CSSCounterStyleRule.suffix
slug: Web/API/CSSCounterStyleRule/suffix
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - suffix
  - CSSCounterStyleRule
browser-compat: api.CSSCounterStyleRule.suffix
---
{{DefaultAPISidebar("CSS Counter Styles")}}

The **`suffix`** property of the {{domxref("CSSCounterStyleRule")}} interface gets and sets the value of the {{cssxref("@counter-style/suffix","suffix")}} descriptor. If the descriptor does not have a value set, this attribute returns an empty string.

## Value

A string

## Examples

The following example shows a {{cssxref("@counter-style")}} rule. In JavaScript, `myRules[0]` is this `@counter-style` rule, returning `suffix` gives us the value ": ".

```css
@counter-style box-corner {
  system: fixed;
  symbols: ◰ ◳ ◲ ◱;
  suffix: ': ';
  negative: "-";
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].suffix); // ": "
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
