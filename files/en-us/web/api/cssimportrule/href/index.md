---
title: CSSImportRule.href
slug: Web/API/CSSImportRule/href
page-type: web-api-instance-property
tags:
  - API
  - CSSOM
  - Property
  - Reference
  - CSSImportRule
  - Read-only
browser-compat: api.CSSImportRule.href
---
{{APIRef("CSSOM")}}

The read-only **`href`** property of the
{{domxref("CSSImportRule")}} interface returns the URL specified by the
{{cssxref("@import")}} [at-rule](/en-US/docs/Web/CSS/At-rule).

The resolved URL will be the {{HTMLAttrxRef("href","link")}} attribute of the
associated stylesheet.

## Value

A string.

## Examples

The following stylesheet includes a single {{cssxref("@import")}} rule. Therefore the
first item in the list of CSS rules will be a `CSSImportRule`. The
`href` property returns the URL of the imported stylesheet.

```css
@import url("style.css") screen;
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].href); //returns style.css
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
