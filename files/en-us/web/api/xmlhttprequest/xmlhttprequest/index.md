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
```

### Parameters

None.

### Return value

A new {{domxref("XMLHttpRequest")}} object. The object must be prepared by at least
calling {{domxref("XMLHttpRequest.open", "open()")}} to initialize it before calling
{{domxref("XMLHttpRequest.send", "send()")}} to send the request to the server.

## Non-standard Firefox syntax

Firefox 16 added a non-standard parameter to the constructor that can enable anonymous
mode (see [Firefox bug 692677](https://bugzil.la/692677)). Setting the `mozAnon` flag to `true`
effectively resembles the [`AnonXMLHttpRequest()`](https://www.w3.org/TR/2012/WD-XMLHttpRequest-20120117/#dom-anonxmlhttprequest)
constructor described in older versions of the XMLHttpRequest specification.

```js
const request = new XMLHttpRequest(paramsDictionary);
```

### Parameters (non-standard)

- `objParameters`

  - : One flag you can set:

    - `mozAnon`
      - : Boolean: Setting this flag to `true` will cause the browser not to
        expose the {{Glossary("origin")}} and [user credentials](https://www.w3.org/TR/2012/WD-XMLHttpRequest-20120117/#user-credentials) when fetching resources. Most important, this means that
        {{Glossary("Cookie", "cookies")}} will not be sent unless explicitly added using
        setRequestHeader.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [HTML in XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
