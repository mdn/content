---
title: "XMLHttpRequest: setRequestHeader() method"
short-title: setRequestHeader()
slug: Web/API/XMLHttpRequest/setRequestHeader
page-type: web-api-instance-method
browser-compat: api.XMLHttpRequest.setRequestHeader
---

{{APIRef('XMLHttpRequest')}}

The {{domxref("XMLHttpRequest")}} method **`setRequestHeader()`** sets the value of an HTTP request header.
When using `setRequestHeader()`, you must call it after calling {{domxref("XMLHttpRequest.open", "open()")}}, but before calling {{domxref("XMLHttpRequest.send", "send()")}}.
If this method is called several times with the same header, the values are merged into one single request header.

Each time you call `setRequestHeader()` after the first time you call it, the specified text is appended to the end of the existing header's content.

If no {{HTTPHeader("Accept")}} header has been set using this, an `Accept` header with the type `"*/*"` is sent with the request when {{domxref("XMLHttpRequest.send", "send()")}} is called.

For security reasons, there are several {{Glossary("Forbidden_header_name", "forbidden header names")}} whose values are controlled by the user agent. Any attempt to set a value for one of those headers from frontend JavaScript code will be ignored without warning or error.

In addition, the [`Authorization`](/en-US/docs/Web/HTTP/Headers/Authorization) HTTP header may be added to a request, but will be removed if the request is redirected cross-origin.

> **Note:** For your custom fields, you may encounter a "**not allowed by Access-Control-Allow-Headers in preflight response**" exception when you send requests across domains.
> In this situation, you need to set up the {{HTTPHeader("Access-Control-Allow-Headers")}} in your response header at server side.

## Syntax

```js-nolint
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
