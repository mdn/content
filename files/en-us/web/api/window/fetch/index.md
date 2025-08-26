---
title: "Window: fetch() method"
short-title: fetch()
slug: Web/API/Window/fetch
page-type: web-api-instance-method
browser-compat: api.fetch
---

{{APIRef("Fetch API")}}

The **`fetch()`** method of the {{domxref("Window")}} interface starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

The promise resolves to the {{domxref("Response")}} object representing the response to your request.

A `fetch()` promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error.
A `fetch()` promise _does not_ reject if the server responds with HTTP status codes that indicate errors (`404`, `504`, etc.).
Instead, a `then()` handler must check the {{domxref("Response.ok")}} and/or {{domxref("Response.status")}} properties.

The `fetch()` method is controlled by the `connect-src` directive of [Content Security Policy](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) rather than the directive of the resources it's retrieving.

> [!NOTE]
> The `fetch()` method's parameters are identical to those of the {{domxref("Request.Request","Request()")}} constructor.

## Syntax

```js-nolint
fetch(resource)
fetch(resource, options)
```

### Parameters

- `resource`
  - : This defines the resource that you wish to fetch. This can either be:
    - A string or any other object with a {{Glossary("stringifier")}} — including a {{domxref("URL")}} object — that provides the URL of the resource you want to fetch. The URL may be relative to the base URL, which is the document's {{domxref("Node.baseURI", "baseURI")}} in a window context, or {{domxref("WorkerGlobalScope.location")}} in a worker context.
    - A {{domxref("Request")}} object.

- `options` {{optional_inline}}
  - : A {{domxref("RequestInit")}} object containing any custom settings that you want to apply to the request.

### Return value

A {{jsxref("Promise")}} that resolves to a {{domxref("Response")}} object.

### Exceptions

- `AbortError` {{domxref("DOMException")}}
  - : The request was aborted due to a call to the {{domxref("AbortController")}}
    {{domxref("AbortController.abort", "abort()")}} method.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if use of the [Topics API](/en-US/docs/Web/API/Topics_API) is specifically disallowed by a {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy), and a `fetch()` request was made with `browsingTopics: true`.
- {{jsxref("TypeError")}}
  - : Can occur for the following reasons:
    - The requested URL is invalid.
    - The requested URL includes credentials (username and password).
    - The {{domxref("RequestInit")}} object passed as the value of `options` included properties with invalid values.
    - The request is blocked by a permissions policy.
    - There is a network error (for example, because the device does not have connectivity).

## Examples

In our [Fetch Request example](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request) (see [Fetch Request live](https://mdn.github.io/dom-examples/fetch/fetch-request/)) we
create a new {{domxref("Request")}} object using the relevant constructor, then fetch it
using a `fetch()` call. Since we are fetching an image, we run
{{domxref("Response.blob()")}} on the response to give it the proper MIME type so it will be
handled properly, then create an Object URL of it and display it in an
{{htmlelement("img")}} element.

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

window
  .fetch(myRequest)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.blob();
  })
  .then((response) => {
    myImage.src = URL.createObjectURL(response);
  });
```

In our [Fetch Request with init example](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request-with-init) (see [Fetch Request init live](https://mdn.github.io/dom-examples/fetch/fetch-request-with-init/)) we do the same thing except that we pass in an _options_ object when we invoke `fetch()`.
In this case, we can set a {{HTTPHeader("Cache-Control")}} value to indicate what kind of cached responses we're okay with:

```js
const myImage = document.querySelector("img");
const reqHeaders = new Headers();

// A cached response is okay unless it's more than a week old
reqHeaders.set("Cache-Control", "max-age=604800");

const options = {
  headers: reqHeaders,
};

// Pass init as an "options" object with our headers.
const req = new Request("flowers.jpg", options);

fetch(req).then((response) => {
  // …
});
```

You could also pass the `init` object in with the `Request` constructor to get the same effect:

```js
const req = new Request("flowers.jpg", options);
```

You can also use an object literal as `headers` in `init`:

```js
const options = {
  headers: {
    "Cache-Control": "max-age=60480",
  },
};

const req = new Request("flowers.jpg", options);
```

The [Using fetch](/en-US/docs/Web/API/Fetch_API/Using_Fetch) article provides more examples of using `fetch()`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WorkerGlobalScope.fetch()")}}
- [Fetch API](/en-US/docs/Web/API/Fetch_API)
- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/Guides/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
