---
title: CSSRuleList.length
slug: Web/API/CSSRuleList/length
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - length
  - CSSRuleList
browser-compat: api.CSSRuleList.length
---
{{ APIRef("CSSOM") }}

The **`length`** property of the {{domxref("CSSRuleList")}} interface returns the number of {{domxref("CSSRule")}} objects in the list.

## Value

An integer.

## Examples

In the following example the number of items in the {{domxref("CSSRuleList")}} named `myRules` is printed to the console.

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules.length);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
