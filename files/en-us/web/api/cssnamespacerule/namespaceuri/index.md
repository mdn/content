---
title: CSSNamespaceRule.namespaceURI
slug: Web/API/CSSNamespaceRule/namespaceURI
tags:
  - API
  - CSSNamespaceRule
  - CSSOM
  - Property
  - Reference
  - namespaceURI
browser-compat: api.CSSNamespaceRule.namespaceURI
---
{{ APIRef("CSSOM") }}

The read-only **`namespaceURI`** property of the {{domxref("CSSNamespaceRule")}} returns a {{domxref("DOMString")}} containing the text of the URI of the given namespace.

## Syntax

```js
var namespaceURI = CSSNamespaceRule.namespaceURI
```

### Returns

A {{domxref("DOMString")}} containing a URI.

## Examples

The stylesheet includes a namespace as the only rule. Therefore the first {{domxref("CSSRule")}} returned will be a `CSSNamespaceRule`. The value of the `namespaceURI` property will be `http://www.w3.org/1999/xhtml`.

```css
@namespace url(http://www.w3.org/1999/xhtml);
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].namespaceURI); //http://www.w3.org/1999/xhtml
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
