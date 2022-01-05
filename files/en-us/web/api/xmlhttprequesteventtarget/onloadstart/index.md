---
title: XMLHttpRequestEventTarget.onloadstart
slug: Web/API/XMLHttpRequestEventTarget/onloadstart
tags:
  - API
  - Event Handler
  - Property
  - Reference
  - Web
  - XMLHttpRequestEventTarget
browser-compat: api.XMLHttpRequestEventTarget.onloadstart
---
{{APIRef("XMLHttpRequest")}}

The **`XMLHttpRequestEventTarget.onloadstart`** is the function
called when an {{domxref("XMLHttpRequest")}} transaction starts transferring data.

## Syntax

```js
XMLHttpRequest.onloadstart = callback;
```

### Values

- `callback` is the function to be called when the transaction
  begins to transfer data.

## Example

```js
var xmlhttp = new XMLHttpRequest(),
  method = 'GET',
  url = 'https://developer.mozilla.org/';

xmlhttp.open(method, url, true);
xmlhttp.onloadstart = function () {
  console.log("Download underway");
};
xmlhttp.send();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
