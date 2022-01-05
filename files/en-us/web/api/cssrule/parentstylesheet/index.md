---
title: CSSRule.parentStyleSheet
slug: Web/API/CSSRule/parentStyleSheet
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

## Syntax

```js
var stylesheet = cssRule.parentStyleSheet
```

### Values

- `stylesheet`
  - : A {{domxref("StyleSheet")}} object.

## Example

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules.parentStyleSheet);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
