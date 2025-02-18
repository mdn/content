---
title: "XMLHttpRequest: XMLHttpRequest() constructor"
short-title: XMLHttpRequest()
slug: Web/API/XMLHttpRequest/XMLHttpRequest
page-type: web-api-constructor
browser-compat: api.XMLHttpRequest.XMLHttpRequest
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

The **`XMLHttpRequest()`** constructor
creates a new {{domxref("XMLHttpRequest")}}.

## Syntax

```js-nolint
new XMLHttpRequest()
// Non-standard
new XMLHttpRequest(options)
```

### Parameters

There are no standard parameters. However, Firefox allows a non-standard parameter:

- `options` {{non-standard_inline}}
  - : An object that can contain the following flag:
    - `mozAnon`
      - : A boolean. When setting this flag to `true` will cause the browser not to expose the {{Glossary("origin")}} and user credentials when fetching resources. Most important, this means that {{Glossary("Cookie", "cookies")}} will not be sent unless explicitly added using `setRequestHeader`.

### Return value

A new {{domxref("XMLHttpRequest")}} object. The object must be prepared by at least
calling {{domxref("XMLHttpRequest.open", "open()")}} to initialize it before calling
{{domxref("XMLHttpRequest.send", "send()")}} to send the request to the server.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [HTML in XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
