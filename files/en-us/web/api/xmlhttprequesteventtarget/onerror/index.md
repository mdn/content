---
title: XMLHttpRequestEventTarget.onerror
slug: Web/API/XMLHttpRequestEventTarget/onerror
tags:
  - API
  - Event Handler
  - Property
  - Reference
  - Web
  - XMLHttpRequestEventTarget
browser-compat: api.XMLHttpRequestEventTarget.onerror
---
{{APIRef("XMLHttpRequest")}}

The **`XMLHttpRequestEventTarget.onerror`** is the function
called when an {{domxref("XMLHttpRequest")}} transaction fails due to an error.

It's important to note that this is only called if there's an error at the
_network_ level. If the error only exists at the _application_ level
(e.g. an HTTP error code is sent), this method will not be called.

## Syntax

```js
XMLHttpRequest.onerror = callback;
```

### Values

- `callback` is the function to be executed when the request
  fails.

## Example

```js
var xmlhttp = new XMLHttpRequest(),
  method = 'GET',
  url = 'https://developer.mozilla.org/';

xmlhttp.open(method, url, true);
xmlhttp.onerror = function () {
  console.log("** An error occurred during the transaction");
};
xmlhttp.send();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
