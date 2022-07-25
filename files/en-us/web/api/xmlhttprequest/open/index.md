---
title: XMLHttpRequest.open()
slug: Web/API/XMLHttpRequest/open
page-type: web-api-instance-method
tags:
  - API
  - HTTP
  - Method
  - NeedsExample
  - Reference
  - XHR
  - XMLHttpRequest
  - open
browser-compat: api.XMLHttpRequest.open
---
{{APIRef('XMLHttpRequest')}}

The {{domxref("XMLHttpRequest")}} method **`open()`**
initializes a newly-created request, or re-initializes an existing one.

> **Note:** Calling this method for an already active request
> (one for which `open()` has already been called) is the equivalent of calling
> {{domxref("XMLHttpRequest.abort", "abort()")}}.

## Syntax

```js
open(method, url)
open(method, url, async)
open(method, url, async, user)
open(method, url, async, user, password)
```

### Parameters

- `method`
  - : The [HTTP request method](/en-US/docs/Web/HTTP/Methods) to use, such as
    `"GET"`, `"POST"`, `"PUT"`, `"DELETE"`,
    etc. Ignored for non-HTTP(S) URLs.
- `url`
  - : A string representing the URL to send the request to.
- `async` {{optional_inline}}

  - : An optional Boolean parameter, defaulting to `true`, indicating whether
    or not to perform the operation asynchronously. If this value is `false`,
    the `send()` method does not return until the response is received. If
    `true`, notification of a completed transaction is provided using event
    listeners. This _must_ be true if the `multipart` attribute is
    `true`, or an exception will be thrown.

    > **Note:** Synchronous requests on the main thread can
    > be easily disruptive to the user experience and should be avoided; in fact, many
    > browsers have deprecated synchronous XHR support on the main thread entirely.
    > Synchronous requests are permitted in {{domxref("Worker")}}s.

- `user` {{optional_inline}}
  - : The optional user name to use for authentication purposes; by default, this is the
    `null` value.
- `password` {{optional_inline}}
  - : The optional password to use for authentication purposes; by default, this is the
    `null` value.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- Related {{domxref("XMLHttpRequest")}} methods:
  {{domxref("XMLHttpRequest.setRequestHeader",
    "setRequestHeader()")}}, {{domxref("XMLHttpRequest.send", "send()")}}, and
  {{domxref("XMLHttpRequest.abort", "abort()")}}
