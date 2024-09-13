---
title: "TrustedHTML: toString() method"
short-title: toString()
slug: Web/API/TrustedHTML/toString
page-type: web-api-instance-method
browser-compat: api.TrustedHTML.toString
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

The **`toString()`** method of the {{domxref("TrustedHTML")}} interface returns a string which may safely inserted into an injection sink.

## Syntax

```js-nolint
toString()
```

### Parameters

None.

### Return value

A string containing the sanitized HTML.

## Examples

The constant `escaped` is an object created via the Trusted Types policy escapeHTMLPolicy. The `toString()` method returns a string to safely insert into a document.

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace(/</g, "&lt;"),
});

const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");
console.log(escaped.toString());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
