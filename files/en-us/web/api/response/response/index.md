---
title: Response()
slug: Web/API/Response/Response
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - Fetch
  - Reference
  - Response
browser-compat: api.Response.Response
---
{{APIRef("Fetch")}}

The **`Response()`** constructor creates a new {{domxref("Response")}} object.

## Syntax

```js
new Response()
new Response(body)
new Response(body, options)
```

### Parameters

- `body` {{optional_inline}}

  - : An object defining a body for the response. This can be `null` (which is
    the default value), or one of:

    - {{domxref("Blob")}}
    - {{jsxref("ArrayBuffer")}}
    - {{jsxref("TypedArray")}}
    - {{jsxref("DataView")}}
    - {{domxref("FormData")}}
    - {{domxref("ReadableStream")}}
    - {{domxref("URLSearchParams")}}
    - {{jsxref("String")}}
    - string literal

- `options` {{optional_inline}}

  - : An options object containing any custom settings that you want to apply to the
    response, or an empty object (which is the default value). The possible options are:

    - `status`
      - : The status code for the response, e.g., `200`.
    - `statusText`
      - : The status message associated with the status code,
        e.g., `OK`.
    - `headers`
      - : Any headers you want to add to your response, contained
        within a {{domxref("Headers")}} object or object literal of
        {{jsxref("String")}} key/value pairs (see [HTTP headers](/en-US/docs/Web/HTTP/Headers) for a reference).

## Examples

In our [Fetch Response example](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (see [Fetch Response live](https://mdn.github.io/dom-examples/fetch/fetch-response/))
we create a new `Response` object using the constructor, passing it a new {{domxref("Blob")}} as a body, and an init object containing a custom `status` and `statusText`:

```js
const myBlob = new Blob();
const myOptions = { status: 200, statusText: 'SuperSmashingGreat!' };
const myResponse = new Response(myBlob, myOptions);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
