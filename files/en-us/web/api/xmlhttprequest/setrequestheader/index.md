---
title: XMLHttpRequest.setRequestHeader()
slug: Web/API/XMLHttpRequest/setRequestHeader
page-type: web-api-instance-method
tags:
  - API
  - HTTP
  - HTTP Header
  - Method
  - NeedsExample
  - Reference
  - Request header
  - XHR
  - XHR Request
  - XMLHttpRequest
  - header
  - request
  - setRequestHeader
browser-compat: api.XMLHttpRequest.setRequestHeader
---
{{APIRef('XMLHttpRequest')}}

The {{domxref("XMLHttpRequest")}} method
**`setRequestHeader()`** sets the value of an HTTP request
header. When using `setRequestHeader()`, you must call it after calling
{{domxref("XMLHttpRequest.open", "open()")}}, but before calling
{{domxref("XMLHttpRequest.send", "send()")}}. If this method is called several times
with the same header, the values are merged into one single request header.

Each time you call `setRequestHeader()` after the first time you call it,
the specified text is appended to the end of the existing header's content.

If no {{HTTPHeader("Accept")}} header has been set using this, an `Accept`
header with the type `"*/*"` is sent with the request when
{{domxref("XMLHttpRequest.send", "send()")}} is called.

For security reasons, some headers can only be controlled by the user agent. These
headers include the {{Glossary("Forbidden_header_name", "forbidden header names", 1)}}
and {{Glossary("Forbidden_response_header_name", "forbidden response header names",
  1)}}.

> **Note:** For your custom fields, you may encounter a "**not
> allowed by Access-Control-Allow-Headers in preflight response**" exception
> when you send requests across domains. In this situation, you need to set up the
> {{HTTPHeader("Access-Control-Allow-Headers")}} in your response header at server side.

## Syntax

```js
setRequestHeader(header, value)
```

### Parameters

- `header`
  - : The name of the header whose value is to be set.
- `value`
  - : The value to set as the body of the header.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [HTML in XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
