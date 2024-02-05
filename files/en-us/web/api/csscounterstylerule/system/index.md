---
title: "CSSCounterStyleRule: system property"
short-title: system
slug: Web/API/CSSCounterStyleRule/system
page-type: web-api-instance-property
browser-compat: api.CSSCounterStyleRule.system
---

{{DefaultAPISidebar("CSS Counter Styles")}}

The **`system`** property of the {{domxref("CSSCounterStyleRule")}} interface gets and sets the value of the {{cssxref("@counter-style/system", "system")}} descriptor. If the descriptor does not have a value set, this attribute returns an empty string.

## Value

A string

## Examples

The following example shows a {{cssxref("@counter-style")}} rule. In JavaScript, `myRules[0]` is this `@counter-style` rule, returning `system` gives us the value "fixed".

```css
@counter-style box-corner {
  system: fixed;
  symbols: ◰ ◳ ◲ ◱;
  suffix: ": ";
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].system); // "fixed"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
