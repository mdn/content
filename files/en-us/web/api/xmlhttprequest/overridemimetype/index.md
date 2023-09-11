---
title: "XMLHttpRequest: overrideMimeType() method"
short-title: overrideMimeType()
slug: Web/API/XMLHttpRequest/overrideMimeType
page-type: web-api-instance-method
browser-compat: api.XMLHttpRequest.overrideMimeType
---

{{APIRef('XMLHttpRequest')}}

The {{domxref("XMLHttpRequest")}} method
**`overrideMimeType()`** specifies a MIME type other than the
one provided by the server to be used instead when interpreting the data being
transferred in a request.

This may be used, for example, to force a stream to
be treated and parsed as `"text/xml"`, even if the server does not report it
as such. This method must be called before calling {{domxref("XMLHttpRequest.send",
  "send()")}}.

## Syntax

```js-nolint
overrideMimeType(mimeType)
```

### Parameters

- `mimeType`
  - : A string specifying the MIME type to use instead of the one
    specified by the server. If the server doesn't specify a type,
    `XMLHttpRequest` assumes `"text/xml"`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

This example specifies a MIME type of `"text/plain"`, overriding the
server's stated type for the data being received.

> **Note:** If the server doesn't provide a
> [`Content-Type`](/en-US/docs/Web/HTTP/Headers/Content-Type)
> header, {{domxref("XMLHttpRequest")}} assumes that the MIME type is
> `"text/xml"`. If the content isn't valid XML, an "XML Parsing Error: not
> well-formed" error occurs. You can avoid this by calling
> `overrideMimeType()` to specify a different type.

```js
// Interpret the received data as plain text

req = new XMLHttpRequest();
req.overrideMimeType("text/plain");
req.addEventListener("load", callback, false);
req.open("get", url);
req.send();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- {{domxref("XMLHttpRequest.responseType")}}
