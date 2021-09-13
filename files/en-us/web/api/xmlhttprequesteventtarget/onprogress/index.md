---
title: XMLHttpRequestEventTarget.onprogress
slug: Web/API/XMLHttpRequestEventTarget/onprogress
tags:
  - Event Handler
  - Property
  - Reference
  - Web
  - XHR
  - XMLHttpRequestEventTarget
browser-compat: api.XMLHttpRequestEventTarget.onprogress
---
{{APIRef("XMLHttpRequest")}}

The **`XMLHttpRequestEventTarget.onprogress`** is the function called periodically with information when an {{domxref("XMLHttpRequest")}} before success completely.

## Syntax

```js
XMLHttpRequest.onprogress = callback;
```

### Values

- `callback` is the function to be called periodically before the request is completed.

### Event

- _`event.loaded`_  the amount of data currently transfered.
- _`event.total`_  the total amount of data to be transferred.

```js
XMLHttpRequest.onprogress = function (event) {
  event.loaded;
  event.total;
};
```

## Example

```js
var xmlhttp = new XMLHttpRequest(),
  method = 'GET',
  url = 'https://developer.mozilla.org/';

xmlhttp.open(method, url, true);
xmlhttp.onprogress = function () {
  //do something
};
xmlhttp.send();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
