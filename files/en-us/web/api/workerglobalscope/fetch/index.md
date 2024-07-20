---
title: "WorkerGlobalScope: fetch() method"
short-title: fetch()
slug: Web/API/WorkerGlobalScope/fetch
page-type: web-api-instance-method
browser-compat: api.fetch
---

{{APIRef("Fetch API")}}

The **`fetch()`** method of the {{domxref("WorkerGlobalScope")}} interface starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

The promise resolves to the {{domxref("Response")}} object representing the response to your request.

A `fetch()` promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error.
A `fetch()` promise _does not_ reject if the server responds with HTTP status codes that indicate errors (`404`, `504`, etc.).
Instead, a `then()` handler must check the {{domxref("Response.ok")}} and/or {{domxref("Response.status")}} properties.

The `fetch()` method is controlled by the `connect-src` directive of [Content Security Policy](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) rather than the directive of the resources it's retrieving.

> **Note:** The `fetch()` method's parameters are identical to those of the {{domxref("Request.Request","Request()")}} constructor.

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
  - : The request was aborted due to a call to the {{domxref("AbortController")}} {{domxref("AbortController.abort", "abort()")}} method.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if use of the [Topics API](/en-US/docs/Web/API/Topics_API) is specifically disallowed by a {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy), and a `fetch()` request was made with `browsingTopics: true`.
- {{jsxref("TypeError")}}
  - : An error when the fetch operation could not be performed.
    See {{domxref("Window.fetch()")}} exceptions for a list of reasons why this error can occur.

## Examples

See {{domxref("Window.fetch", "fetch()")}} for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window.fetch()")}}
- [Fetch API](/en-US/docs/Web/API/Fetch_API)
- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
