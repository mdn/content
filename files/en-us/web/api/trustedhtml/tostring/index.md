---
title: TrustedHTML.toString()
slug: Web/API/TrustedHTML/toString
tags:
  - API
  - Method
  - Reference
  - toString
  - TrustedHTML
browser-compat: api.TrustedHTML.toString
---
{{DefaultAPISidebar("Trusted Types API")}}

The **`toString()`** method of the {{domxref("TrustedHTML")}} interface returns a string which may safely inserted into an injection sink.

## Syntax

```js
var str = TrustedHTML.toString();
```

### Return value

A {{domxref("DOMString","string")}} containing the sanitized HTML.

## Examples

The constant `escaped` is an object created via the Trusted Types policy escapeHTMLPolicy. The `toString()` method returns a string to safely insert into a document.

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace(/\>/g, "<")
});

const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");
console.log(escaped.toString());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
