---
title: CSSCounterStyleRule.system
slug: Web/API/CSSCounterStyleRule/system
tags:
  - API
  - Property
  - Reference
  - system
  - CSSCounterStyleRule
browser-compat: api.CSSCounterStyleRule.system
---
{{DefaultAPISidebar("CSS Counter Styles")}}

The **`system`** property of the {{domxref("CSSCounterStyleRule")}} interface gets and sets the value of the {{cssxref("@counter-style/system", "system")}} descriptor. If the descriptor does not have a value set, this attribute returns an empty string.

## Syntax

```js
let system = CSSCounterStyleRule.system;
CSSCounterStyleRule.system = a;
```

### Value

A {{domxref("CSSOMString")}}

## Examples

The following example shows a {{cssxref("@counter-style")}} rule. In JavaScript, `myRules[0]` is this `@counter-style` rule, returning `system` gives us the value "fixed".

```css
@counter-style box-corner {
  system: fixed;
  symbols: ◰ ◳ ◲ ◱;
  suffix: ': ';
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
