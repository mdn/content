---
title: CSSRule.parentStyleSheet
slug: Web/API/CSSRule/parentStyleSheet
page-type: web-api-instance-property
tags:
  - API
  - CSSOM
  - CSSRule
  - Property
  - Reference
browser-compat: api.CSSRule.parentStyleSheet
---
{{ APIRef("CSSOM") }}

The **`parentStyleSheet`** property of the
{{domxref("CSSRule")}} interface returns the {{domxref("StyleSheet")}} object in which
the current rule is defined.

## Value

A {{domxref("StyleSheet")}} object.

## Examples

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules.parentStyleSheet);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
