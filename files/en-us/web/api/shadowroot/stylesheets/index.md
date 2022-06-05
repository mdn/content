---
title: ShadowRoot.styleSheets
slug: Web/API/ShadowRoot/styleSheets
page-type: web-api-instance-property
tags:
  - API
  - ShadowRoot
  - Property
  - Reference
  - Stylesheets
browser-compat: api.ShadowRoot.styleSheets
---
{{APIRef("CSSOM")}}

The **`styleSheets`** read-only property of the {{domxref("ShadowRoot")}} interface
returns a {{domxref('StyleSheetList')}} of {{domxref('CSSStyleSheet')}} objects, for stylesheets explicitly linked into or embedded in a shadow tree.

## Value

A {{domxref('StyleSheetList')}} of {{domxref('CSSStyleSheet')}} objects.

## Examples

```js
let customElem = document.querySelector('my-shadow-dom-element');
let shadow = customElem.shadowRoot;
let styleSheets = shadow.styleSheets;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
