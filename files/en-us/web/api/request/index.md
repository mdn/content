---
title: Request
slug: Web/API/Request
page-type: web-api-interface
browser-compat: api.Request
---

{{APIRef("Fetch API")}}

The **`Request`** interface of the [Fetch API](/en-US/docs/Web/API/Fetch_API) represents a resource request.

You can create a new `Request` object using the {{domxref("Request.Request","Request()")}} constructor, but you are more likely to encounter a `Request` object being returned as the result of another API operation, such as a service worker {{domxref("FetchEvent.request")}}.

## Constructor

- {{domxref("Request.Request","Request()")}}
  - : Creates a new `Request` object.

## Instance properties

- {{domxref("Request.body")}} {{ReadOnlyInline}}
  - : A {{domxref("ReadableStream")}} of the body contents.
- {{domxref("Request.bodyUsed")}} {{ReadOnlyInline}}
  - : Stores `true` or `false` to indicate whether or not the body has been used in a request yet.
- {{domxref("Request.cache")}} {{ReadOnlyInline}}
  - : Contains the cache mode of the request (e.g., `default`, `reload`, `no-cache`).
- {{domxref("Request.credentials")}} {{ReadOnlyInline}}
  - : Contains the credentials of the request (e.g., `omit`, `same-origin`, `include`). The default is `same-origin`.
- {{domxref("Request.destination")}} {{ReadOnlyInline}}
  - : Returns a string describing the request's destination. This is a string indicating the type of content being requested.
- {{domxref("Request.headers")}} {{ReadOnlyInline}}
  - : Contains the associated {{domxref("Headers")}} object of the request.
- {{domxref("Request.integrity")}} {{ReadOnlyInline}}
  - : Contains the [subresource integrity](/en-US/docs/Web/Security/Subresource_Integrity) value of the request (e.g., `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).
- {{domxref("Request.method")}} {{ReadOnlyInline}}
  - : Contains the request's method (`GET`, `POST`, etc.)
- {{domxref("Request.mode")}} {{ReadOnlyInline}}
  - : Contains the mode of the request (e.g., `cors`, `no-cors`, `same-origin`, `navigate`.)
- {{domxref("Request.redirect")}} {{ReadOnlyInline}}
  - : Contains the mode for how redirects are handled. It may be one of `follow`, `error`, or `manual`.
- {{domxref("Request.referrer")}} {{ReadOnlyInline}}
  - : Contains the referrer of the request (e.g., `client`).
- {{domxref("Request.referrerPolicy")}} {{ReadOnlyInline}}
  - : Contains the referrer policy of the request (e.g., `no-referrer`).
- {{domxref("Request.signal")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("AbortSignal")}} associated with the request
- {{domxref("Request.url")}} {{ReadOnlyInline}}
  - : Contains the URL of the request.

## Instance methods

- {{domxref("Request.arrayBuffer()")}}
  - : Returns a promise that resolves with an {{jsxref("ArrayBuffer")}} representation of the request body.
- {{domxref("Request.blob()")}}
  - : Returns a promise that resolves with a {{domxref("Blob")}} representation of the request body.
- {{domxref("Request.clone()")}}
  - : Creates a copy of the current `Request` object.
- {{domxref("Request.formData()")}}
  - : Returns a promise that resolves with a {{domxref("FormData")}} representation of the request body.
- {{domxref("Request.json()")}}
  - : Returns a promise that resolves with the result of parsing the request body as {{JSxRef("JSON")}}.
- {{domxref("Request.text()")}}
  - : Returns a promise that resolves with a text representation of the request body.

> **Note:** The request body functions can be run only once; subsequent calls will reject with TypeError showing that the body stream has already used.

## Examples

In the following snippet, we create a new request using the `Request()` constructor (for an image file in the same directory as the script), then return some property values of the request:

```js
const request = new Request("https://www.mozilla.org/favicon.ico");

const url = request.url;
const method = request.method;
const credentials = request.credentials;
```

You could then fetch this request by passing the `Request` object in as a parameter to a {{domxref("fetch()")}} call, for example:

```js
fetch(request)
  .then((response) => response.blob())
  .then((blob) => {
    image.src = URL.createObjectURL(blob);
  });
```

In the following snippet, we create a new request using the `Request()` constructor with some initial data and body content for an API request which need a body payload:

```js
const request = new Request("https://example.com", {
  method: "POST",
  body: '{"foo": "bar"}',
});

const url = request.url;
const method = request.method;
const credentials = request.credentials;
const bodyUsed = request.bodyUsed;
```

> **Note:** The body can only be a {{domxref("Blob")}}, an {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, a {{jsxref("DataView")}}, a {{domxref("FormData")}}, a {{domxref("URLSearchParams")}}, a {{domxref("ReadableStream")}}, or a {{jsxref("String")}} object, as well as a string literal, so for adding a JSON object to the payload you need to stringify that object.

You could then fetch this API request by passing the `Request` object in as a parameter to a {{domxref("fetch()")}} call, for example and get the response:

```js
fetch(request)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Something went wrong on API server!");
    }
  })
  .then((response) => {
    console.debug(response);
    // …
  })
  .catch((error) => {
    console.error(error);
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
