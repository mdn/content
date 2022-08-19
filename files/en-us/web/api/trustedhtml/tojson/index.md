---
title: TrustedHTML.toJSON()
slug: Web/API/TrustedHTML/toJSON
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - toJSON
  - TrustedHTML
browser-compat: api.TrustedHTML.toJSON
---
{{DefaultAPISidebar("Trusted Types API")}}

The **`toJSON()`** method of the {{domxref("TrustedHTML")}} interface returns a JSON representation of the stored data.

## Syntax

```js
toJSON()
```

### Parameters

None.

### Return value

A string containing a JSON representation of the stored data.

## Examples

The constant `escaped` is an object created via the Trusted Types policy escapeHTMLPolicy. The `toString()` method returns a string to safely insert into a document.

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace(/>/g, "<")
});

const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");
console.log(escaped.toJSON());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
