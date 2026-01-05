---
title: "XMLHttpRequest: response property"
short-title: response
slug: Web/API/XMLHttpRequest/response
page-type: web-api-instance-property
browser-compat: api.XMLHttpRequest.response
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

The {{domxref("XMLHttpRequest")}}
**`response`** property returns the response's body content as
an {{jsxref("ArrayBuffer")}}, a {{domxref("Blob")}}, a {{domxref("Document")}},
a JavaScript {{jsxref("Object")}}, or a string, depending on the value
of the request's {{domxref("XMLHttpRequest.responseType", "responseType")}}
property.

## Value

An appropriate object based on the value of {{domxref("XMLHttpRequest.responseType", "responseType")}}.
You may attempt to request the data be provided in a specific format
by setting the value of `responseType` after calling
{{domxref("XMLHttpRequest.open", "open()")}} to initialize the request but before
calling {{domxref("XMLHttpRequest.send", "send()")}} to send the request to the server.

The value is `null` if the request is not yet complete or was unsuccessful,
with the exception that when reading text data using a `responseType` of
`"text"` or the empty string (`""`), the response can contain the
response so far while the request is still in the `LOADING`
{{domxref("XMLHttpRequest.readyState", "readyState")}} (3).

## Examples

This example presents a function, `load()`, which loads and processes a page
from the server. It works by creating an {{domxref("XMLHttpRequest")}} object and
creating a listener for {{domxref("XMLHttpRequest/readystatechange_event", "readystatechange")}} events such that when
`readyState` changes to `DONE` (4), the `response` is
obtained and passed into the callback function provided to `load()`.

The content is handled as raw text data (since nothing here is overriding the default
{{domxref("XMLHttpRequest.responseType", "responseType")}}).

```js
const url = "somePage.html"; // A local page

function load(url, callback) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      callback(xhr.response);
    }
  };

  xhr.open("GET", url, true);
  xhr.send("");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- Getting text and HTML/XML data: {{domxref("XMLHttpRequest.responseText")}} and
  {{domxref("XMLHttpRequest.responseXML")}}
