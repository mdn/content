---
title: 'XMLHttpRequest: readystatechange event'
slug: Web/API/XMLHttpRequest/readystatechange_event
tags:
  - API
  - Event
  - Reference
  - XHR
  - XMLHttpRequest
browser-compat: api.XMLHttpRequest.readystatechange_event
---
{{APIRef}}

The `readystatechange` event is fired whenever the {{domxref("XMLHttpRequest.readyState", "readyState")}} property of the {{domxref("XMLHttpRequest")}} changes.

> **Warning:** This should not be used with synchronous requests and must
> not be used from native code.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('readystatechange', event => { })

onreadystatechange = event => { }
```

## Event type

A generic {{DOMxRef("Event")}} with no added properties.

## Examples

```js
const xhr = new XMLHttpRequest(),
    method = "GET",
    url = "https://developer.mozilla.org/";

xhr.open(method, url, true);
xhr.onreadystatechange = function () {
  // In local files, status is 0 upon success in Mozilla Firefox
  if(xhr.readyState === XMLHttpRequest.DONE) {
    var status = xhr.status;
    if (status === 0 || (status >= 200 && status < 400)) {
      // The request has been completed successfully
      console.log(xhr.responseText);
    } else {
      // Oh no! There has been an error with the request!
    }
  }
};
xhr.send();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
