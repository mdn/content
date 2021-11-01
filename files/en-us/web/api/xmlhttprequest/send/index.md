---
title: XMLHttpRequest.send()
slug: Web/API/XMLHttpRequest/send
tags:
  - AJAX
  - API
  - HTTP request
  - Method
  - NeedsContent
  - NeedsExample
  - Reference
  - XHR
  - XHR Request
  - XMLHttpRequest
  - send
browser-compat: api.XMLHttpRequest.send
---
{{APIRef('XMLHttpRequest')}}

The {{domxref("XMLHttpRequest")}} method
**`send()`** sends the request to the server.

If the
request is asynchronous (which is the default), this method returns as soon as the
request is sent and the result is delivered using events. If the request is synchronous,
this method doesn't return until the response has arrived.

`send()` accepts an optional parameter which lets you specify the request's
body; this is primarily used for requests such as {{HTTPMethod("PUT")}}. If the request
method is {{HTTPMethod("GET")}} or {{HTTPMethod("HEAD")}}, the `body`
parameter is ignored and the request body is set to `null`.

If no {{HTTPHeader("Accept")}} header has been set using the
{{domxref("XMLHttpRequest.setRequestHeader", "setRequestHeader()")}}, an
`Accept` header with the type `"*/*"` (any type) is sent.

## Syntax

```js
XMLHttpRequest.send(body)
```

### Parameters

- `body` {{optional_inline}}

  - : A body of data to be sent in the XHR request. This can be:

    - A {{domxref("Document")}}, in which case it is serialized before being sent.
    - An `XMLHttpRequestBodyInit`, which [per the
      Fetch spec](https://fetch.spec.whatwg.org/#typedefdef-xmlhttprequestbodyinit) can be a {{domxref("Blob")}}, {{domxref("BufferSource")}},
      {{domxref("FormData")}}, {{domxref("URLSearchParams")}}, or
      {{domxref("USVString")}} object.
    - `null`

    If no value is specified for the body, a default value of `null` is used.

The best way to send binary content (e.g. in file uploads) is by using an
{{domxref("ArrayBufferView")}} or {{domxref("Blob")}} in conjunction with the
`send()` method.

### Return value

`undefined`.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if `send()` has already been invoked for the request, and/or the request is complete.
- `NetworkError` {{domxref("DOMException")}}
  - : Thrown if the resource type to be fetched is a Blob, and the method is not `GET`.

## Example: GET

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', '/server', true);

xhr.onload = function () {
  // Request finished. Do processing here.
};

xhr.send(null);
// xhr.send('string');
// xhr.send(new Blob());
// xhr.send(new Int8Array());
// xhr.send(document);
```

## Example: POST

```js
var xhr = new XMLHttpRequest();
xhr.open("POST", '/server', true);

//Send the proper header information along with the request
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function() { // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        // Request finished. Do processing here.
    }
}
xhr.send("foo=bar&lorem=ipsum");
// xhr.send(new Int8Array());
// xhr.send(document);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using
  XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [HTML in
  XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
