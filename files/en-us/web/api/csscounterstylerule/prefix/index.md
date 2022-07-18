---
title: CSSCounterStyleRule.prefix
slug: Web/API/CSSCounterStyleRule/prefix
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - prefix
  - CSSCounterStyleRule
browser-compat: api.CSSCounterStyleRule.prefix
---
{{DefaultAPISidebar("CSS Counter Styles")}}

The **`prefix`** property of the {{domxref("CSSCounterStyleRule")}} interface gets and sets the value of the {{cssxref("@counter-style/prefix","prefix")}} descriptor. If the descriptor does not have a value set, this attribute returns an empty string.

## Value

A string

## Examples

The following example shows a {{cssxref("@counter-style")}} rule. In JavaScript, `myRules[0]` is this `@counter-style` rule, returning `prefix` gives us the value "Chapter ".

```css
@counter-style chapters {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5" "6" "7" "8" "9";
  prefix: 'Chapter ';
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].prefix); // "Chapter "
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
