---
title: "CSSNamespaceRule: namespaceURI property"
short-title: namespaceURI
slug: Web/API/CSSNamespaceRule/namespaceURI
page-type: web-api-instance-property
browser-compat: api.CSSNamespaceRule.namespaceURI
---

{{ APIRef("CSSOM") }}

The read-only **`namespaceURI`** property of the {{domxref("CSSNamespaceRule")}} returns a string containing the text of the URI of the given namespace.

## Value

A string containing a URI.

## Examples

The stylesheet includes a namespace as the only rule. Therefore the first {{domxref("CSSRule")}} returned will be a `CSSNamespaceRule`. The value of the `namespaceURI` property will be `http://www.w3.org/1999/xhtml`.

```css
@namespace url(http://www.w3.org/1999/xhtml);
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].namespaceURI); // 'http://www.w3.org/1999/xhtml'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
