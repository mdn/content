---
title: XMLHttpRequest.response
slug: Web/API/XMLHttpRequest/response
tags:
  - AJAX
  - API
  - Fetching Content
  - Fetching Data
  - Loading Data
  - Property
  - Read-only
  - Reading Data
  - Reference
  - Response
  - Server
  - XMLHttpRequest
browser-compat: api.XMLHttpRequest.response
---
{{APIRef('XMLHttpRequest')}}

The {{domxref("XMLHttpRequest")}}
**`response`** property returns the response's body content as
an {{jsxref("ArrayBuffer")}}, {{domxref("Blob")}}, {{domxref("Document")}},
JavaScript {{jsxref("Object")}}, or {{domxref("DOMString")}}, depending on the value
of the request's {{domxref("XMLHttpRequest.responseType", "responseType")}}
property.

## Syntax

```js
var body = XMLHttpRequest.response;
```

### Value

An appropriate object based on the value of {{domxref("XMLHttpRequest.responseType",
  "responseType")}}. You may attempt to request the data be provided in a specific format
by setting the value of `responseType` after calling
{{domxref("XMLHttpRequest.open", "open()")}} to initialize the request but before
calling {{domxref("XMLHttpRequest.send", "send()")}} to send the request to the server.

The value is `null` if the request is not yet complete or was unsuccessful,
with the exception that when reading text data using a `responseType` of
`"text"` or the empty string (`""`), the response can contain the
response so far while the request is still in the `LOADING`
{{domxref("XMLHttpRequest.readyState", "readyState")}} (3).

## Example

This example presents a function, `load()`, which loads and processes a page
from the server. It works by creating an {{domxref("XMLHttpRequest")}} object and
creating a listener for {{event("readystatechange")}} events such that when
`readyState` changes to `DONE` (4), the `response` is
obtained and passed into the callback function provided to `load()`.

The content is handled as raw text data (since nothing here is overriding the default
{{domxref("XMLHttpRequest.responseType", "responseType")}}).

```js
var url = 'somePage.html'; //A local page

function load(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      callback(xhr.response);
    }
  }

  xhr.open('GET', url, true);
  xhr.send('');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using
  XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- Getting text and HTML/XML data: {{domxref("XMLHttpRequest.responseText")}} and
  {{domxref("XMLHttpRequest.responseXML")}}
