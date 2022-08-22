---
title: CSSGroupingRule.cssRules
slug: Web/API/CSSGroupingRule/cssRules
page-type: web-api-instance-property
tags:
  - API
  - CSSOM
  - CSSGroupingRule
  - Property
  - Reference
browser-compat: api.CSSGroupingRule.cssRules
---
{{ APIRef("CSSOM") }}

The **`cssRules`** property of the
{{domxref("CSSGroupingRule")}} interface returns a {{domxref("CSSRuleList")}} containing
a collection of {{domxref("CSSRule")}} objects.

## Value

a {{domxref("CSSRuleList")}}.

## Examples

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
