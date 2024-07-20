---
title: "DOMTokenList: supports() method"
short-title: supports()
slug: Web/API/DOMTokenList/supports
page-type: web-api-instance-method
browser-compat: api.DOMTokenList.supports
---

{{APIRef("DOM")}}

The **`supports()`** method of the {{domxref("DOMTokenList")}} interface
returns `true` if a given `token` is in the associated attribute's supported tokens.
This method is intended to support feature detection.

## Syntax

```js-nolint
supports(token)
```

### Parameters

- `token`
  - : A string containing the token to query for.

### Return value

A boolean value indicating whether the token was found.

## Example

```js
const iframe = document.getElementById("display");

if (iframe.sandbox.supports("an-upcoming-feature")) {
  // support code for mystery future feature
} else {
  // fallback code
}

if (iframe.sandbox.supports("allow-scripts")) {
  // instruct frame to run JavaScript
  //
  // (NOTE: This feature is well-supported; this is just an example!)
  //
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
