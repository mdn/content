---
title: "XMLHttpRequest: responseXML property"
short-title: responseXML
slug: Web/API/XMLHttpRequest/responseXML
page-type: web-api-instance-property
browser-compat: api.XMLHttpRequest.responseXML
---

{{APIRef('XMLHttpRequest')}}

The **`XMLHttpRequest.responseXML`** read-only property returns
a {{domxref("Document")}} containing the HTML or XML retrieved by the request; or
`null` if the request was unsuccessful, has not yet been sent, or if the data
can't be parsed as XML or HTML.

> **Note:** The name `responseXML` is an artifact of this
> property's history; it works for both HTML and XML.

Usually, the response is parsed as "`text/xml`". If the
{{domxref("XMLHttpRequest.responseType", "responseType")}} is set to
"`document`" and the request was made asynchronously, instead the response is
parsed as "`text/html`". `responseXML` is `null` for
any other types of data, as well as for [`data:` URLs](/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs).

If the server doesn't specify the {{HTTPHeader("Content-Type")}} as
"`text/xml`" or "`application/xml`", you can use
{{domxref("XMLHttpRequest.overrideMimeType()")}} to parse it as XML anyway.

This property isn't available to workers.

## Value

A {{domxref("Document")}} from parsing the XML or HTML received using
{{domxref("XMLHttpRequest")}}, or `null` if no data was received or if the
data is not XML/HTML.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("XMLHttpRequest.responseType", "responseType")}} isn't either
    `document` or an empty string.

## Examples

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/server");

// If specified, responseType must be empty string or "document"
xhr.responseType = "document";

// Force the response to be parsed as XML
xhr.overrideMimeType("text/xml");

xhr.onload = () => {
  if (xhr.readyState === xhr.DONE && xhr.status === 200) {
    console.log(xhr.response, xhr.responseXML);
  }
};

xhr.send();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XMLHttpRequest")}}
- {{domxref("XMLHttpRequest.response")}}
- {{domxref("XMLHttpRequest.responseType")}}
- [Parsing and serializing XML](/en-US/docs/Web/Guide/Parsing_and_serializing_XML)
- Parsing XML into a DOM tree: {{domxref("DOMParser")}}
- Serializing a DOM tree into XML: {{domxref("XMLSerializer")}} (specifically, the
  {{domxref("XMLSerializer.serializeToString", "serializeToString()")}} method)
