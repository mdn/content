---
title: XMLHttpRequest.onreadystatechange
slug: Web/API/XMLHttpRequest/onreadystatechange
tags:
  - API
  - Event
  - Handler
  - Property
  - Reference
  - XHR
  - XMLHttpRequest
browser-compat: api.XMLHttpRequest.onreadystatechange
---
{{APIRef}}

An [event handler](/en-US/docs/Web/Events/Event_handlers) that is called whenever the `readyState`
attribute changes. The callback is called from the user interface thread. The
**`XMLHttpRequest.onreadystatechange`** property contains the
event handler to be called when the {{domxref("Document/readystatechange_event",
  "readystatechange")}} event is fired, that is every time the
{{domxref("XMLHttpRequest.readyState", "readyState")}} property of the
{{domxref("XMLHttpRequest")}} changes.

> **Warning:** This should not be used with synchronous requests and must
> not be used from native code.

## Syntax

```js
XMLHttpRequest.onreadystatechange = callback;
```

### Values

- `callback` is the function to be executed when the
  `readyState` changes.

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
