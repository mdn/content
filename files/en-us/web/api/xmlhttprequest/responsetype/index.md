---
title: "XMLHttpRequest: responseType property"
short-title: responseType
slug: Web/API/XMLHttpRequest/responseType
page-type: web-api-instance-property
browser-compat: api.XMLHttpRequest.responseType
---

{{APIRef('XMLHttpRequest')}}

The {{domxref("XMLHttpRequest")}} property
**`responseType`** is an enumerated string value specifying
the type of data contained in the response.

It also lets the author change the
response type. If an empty string is set as the value of `responseType`, the
default value of `text` is used.

## Value

A string which specifies what type of data the response contains.
It can take the following values:

- `""`
  - : An empty `responseType` string is the same as `"text"`, the default type.
- `"arraybuffer"`
  - : The {{domxref("XMLHttpRequest.response", "response")}} is a JavaScript {{jsxref("ArrayBuffer")}} containing binary data.
- `"blob"`
  - : The `response` is a {{domxref("Blob")}} object containing the binary data.
- `"document"`
  - : The `response` is an {{Glossary("HTML")}} {{domxref("Document")}} or {{Glossary("XML")}} {{domxref("XMLDocument")}}, as appropriate based on the MIME type of the received data. See [HTML in XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest) to learn more about using XHR to fetch HTML content.
- `"json"`
  - : The `response` is a JavaScript object created by parsing the contents of received data as {{Glossary("JSON")}}.
- `"text"`
  - : The `response` is a text in a string.

> **Note:** When setting `responseType` to a particular value, the author should make
> sure that the server is actually sending a response compatible with that format. If
> the server returns data that is not compatible with the `responseType` that
> was set, the value of {{domxref("XMLHttpRequest.response", "response")}} will be
> `null`.

### Exceptions

- `InvalidAccessError` {{domxref("DOMException")}}
  - : An attempt was made to change the value of `responseType` on
    an `XMLHttpRequest` which is in synchronous mode but not in a
    {{domxref("Worker")}}. For additional details, see [Synchronous XHR restrictions](#synchronous_xhr_restrictions) below.

## Usage notes

### Synchronous XHR restrictions

You cannot change the value of `responseType` in a synchronous
`XMLHttpRequest` except when the request belongs to a {{domxref("Worker")}}.
This restriction is designed in part to help ensure that synchronous operations aren't
used for large transactions that block the browser's main thread, thereby bogging down
the user experience.

XHR requests are asynchronous by default; they are only placed in
synchronous mode by passing `false` as the value of the optional
`async` parameter when calling {{domxref("XMLHttpRequest.open", "open()")}}.

### Restrictions in Workers

Attempts to set the value of `responseType` to `document` are
ignored in a {{domxref("Worker")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [HTML in XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
- The response data: {{domxref("XMLHttpRequest.response", "response")}},
  {{domxref("XMLHttpRequest.responseText", "responseText")}}, and
  {{domxref("XMLHttpRequest.responseXML", "responseXML")}}
