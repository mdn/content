---
title: CSSCounterStyleRule.fallback
slug: Web/API/CSSCounterStyleRule/fallback
tags:
  - API
  - Property
  - Reference
  - fallback
  - CSSCounterStyleRule
browser-compat: api.CSSCounterStyleRule.fallback
---
{{DefaultAPISidebar("CSS Counter Styles")}}

The **`fallback`** property of the {{domxref("CSSCounterStyleRule")}} interface gets and sets the value of the {{cssxref("@counter-style/fallback","fallback")}} descriptor. If the descriptor does not have a value set, this attribute returns an empty string.

## Syntax

```js
let fallback = CSSCounterStyleRule.fallback;
CSSCounterStyleRule.fallback = a;
```

### Value

A {{domxref("CSSOMString")}}.

## Examples

The following example shows a {{cssxref("@counter-style")}} rule. In JavaScript, `myRules[0]` is this `@counter-style` rule, returning `fallback` gives us the value "disc".

```css
@counter-style box-corner {
  system: fixed;
  symbols: ◰ ◳ ◲ ◱;
  suffix: ': ';
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
