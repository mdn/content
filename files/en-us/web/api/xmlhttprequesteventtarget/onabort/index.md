---
title: XMLHttpRequestEventTarget.onabort
slug: Web/API/XMLHttpRequestEventTarget/onabort
tags:
  - API
  - Event Handler
  - Property
  - Reference
  - Web
  - XHMLHttpRequestEventTarget
browser-compat: api.XMLHttpRequestEventTarget.onabort
---
{{APIRef("XMLHttpRequest")}}

The **`XMLHttpRequestEventTarget.onabort`** is the function
called when an {{domxref("XMLHttpRequest")}} transaction is aborted, such as when the
{{domxref("XMLHttpRequest.abort()")}} function is called.

## Syntax

```js
XMLHttpRequest.onabort = callback;
```

### Values

- `callback` is the function to be executed when the transaction
  is aborted.

## Example

```js
var xmlhttp = new XMLHttpRequest(),
  method = 'GET',
  url = 'https://developer.mozilla.org/';

xmlhttp.open(method, url, true);
xmlhttp.onabort = function () {
  console.log('** The request was aborted');
};
xmlhttp.send();
//..
xmlhttp.abort(); // This will invoke our onabort handler above
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
