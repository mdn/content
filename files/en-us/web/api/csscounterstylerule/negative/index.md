---
title: CSSCounterStyleRule.negative
slug: Web/API/CSSCounterStyleRule/negative
tags:
  - API
  - Property
  - Reference
  - negative
  - CSSCounterStyleRule
browser-compat: api.CSSCounterStyleRule.negative
---
{{DefaultAPISidebar("CSS Counter Styles")}}

The **`negative`** property of the {{domxref("CSSCounterStyleRule")}} interface gets and sets the value of the {{cssxref("@counter-style/negative","negative")}} descriptor. If the descriptor does not have a value set, this attribute returns an empty string.

## Syntax

```js
let negative = CSSCounterStyleRule.negative;
CSSCounterStyleRule.negative = a;
```

### Value

A {{domxref("CSSOMString")}}

## Examples

The following example shows a {{cssxref("@counter-style")}} rule. In JavaScript, `myRules[0]` is this `@counter-style` rule, returning `negative` gives us the value "-".

```css
@counter-style neg {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5" "6" "7" "8" "9";
  negative: "-";
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].negative); // "-"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
