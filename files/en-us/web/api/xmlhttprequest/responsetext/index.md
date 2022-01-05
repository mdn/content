---
title: XMLHttpRequest.responseText
slug: Web/API/XMLHttpRequest/responseText
tags:
  - API
  - Fetching Text
  - Loading Text
  - Property
  - Read-only
  - Reference
  - XMLHttpRequest
  - responseText
browser-compat: api.XMLHttpRequest.responseText
---
{{draft}}{{APIRef('XMLHttpRequest')}}

The read-only {{domxref("XMLHttpRequest")}} property
**`responseText`** returns the text received from a server
following a request being sent.

## Syntax

```js
var resultText = XMLHttpRequest.responseText;
```

### Value

A {{domxref("DOMString")}} which contains either the textual data received using the
`XMLHttpRequest` or `null` if the request failed or
`""` if the request has not yet been sent by calling
{{domxref("XMLHttpRequest.send", "send()")}}.

While handling an asynchronous request, the value of `responseText` always
has the current content received from the server, even if it's incomplete because the
data has not been completely received yet.

You know the entire content has been received when the value of
{{domxref("XMLHttpRequest.readyState", "readyState")}} becomes
{{domxref("XMLHttpRequest.DONE", "XMLHttpRequest.DONE")}} (`4`), and
{{domxref("XMLHttpRequest.status", "status")}} becomes 200 (`"OK"`).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("XMLHttpRequest.responseType")}} is not set to either the empty
    string or `"text"`. Since the `responseText` property is
    only valid for text content, any other value is an error condition.

## Example

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', '/server', true);

// If specified, responseType must be empty string or "text"
xhr.responseType = 'text';

xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            console.log(xhr.response);
            console.log(xhr.responseText);
        }
    }
};

xhr.send(null);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
