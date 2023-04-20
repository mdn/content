---
title: "CSSNamespaceRule: prefix property"
short-title: prefix
slug: Web/API/CSSNamespaceRule/prefix
page-type: web-api-instance-property
browser-compat: api.CSSNamespaceRule.prefix
---

{{ APIRef("CSSOM") }}

The read-only **`prefix`** property of the {{domxref("CSSNamespaceRule")}} returns a string with the name of the prefix associated to this namespace. If there is no such prefix, it returns an empty string.

## Value

A string containing the prefix associated to this namespace. If there is no prefix an empty string.

## Examples

The stylesheet includes two namespace rules. The first has no prefix the second the prefix `svg`. Two `CSSNamespaceRule` objects will be returned. The value of the `prefix` property for the first will be an empty string, for the second `svg`.

```css
@namespace url(http://www.w3.org/1999/xhtml);
@namespace svg url(http://www.w3.org/2000/svg);
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].namespaceURI); // an empty string ""
console.log(myRules[1].namespaceURI); // "svg"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
