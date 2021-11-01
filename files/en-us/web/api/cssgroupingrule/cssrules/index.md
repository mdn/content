---
title: CSSGroupingRule.cssRules
slug: Web/API/CSSGroupingRule/cssRules
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

## Syntax

```js
let cssRules = cssGroupingRule.cssRules;
```

### Value

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
