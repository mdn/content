---
title: Fetch API
slug: Web/API/Fetch_API
page-type: web-api-overview
tags:
  - API
  - Fetch
  - Landing
  - Reference
  - Response
  - XMLHttpRequest
  - request
browser-compat: api.fetch
---
{{DefaultAPISidebar("Fetch API")}}

The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used {{DOMxRef("XMLHttpRequest")}}, but the new API provides a more powerful and flexible feature set.

{{AvailableInWorkers}}

## Concepts and usage

Fetch provides a generic definition of {{DOMxRef("Request")}} and {{DOMxRef("Response")}} objects (and other things involved with network requests). This will allow them to be used wherever they are needed in the future, whether it's for service workers, Cache API, and other similar things that handle or modify requests and responses, or any kind of use case that might require you to generate your responses programmatically (that is, the use of computer program or personal programming instructions).

It also defines related concepts such as CORS and the HTTP Origin header semantics, supplanting their separate definitions elsewhere.

For making a request and fetching a resource, use the {{DOMxRef("fetch()")}} method. It is implemented in multiple interfaces, specifically {{DOMxRef("Window")}} and {{DOMxRef("WorkerGlobalScope")}}. This makes it available in pretty much any context you might want to fetch resources in.

The `fetch()` method takes one mandatory argument, the path to the resource you want to fetch. It returns a {{JSxRef("Promise")}} that resolves to the {{DOMxRef("Response")}} to that request — as soon as the server responds with headers — **even if the server response is an HTTP error status**. You can also optionally pass in an `init` options object as the second argument (see {{DOMxRef("Request")}}).

Once a {{DOMxRef("Response")}} is retrieved, there are a number of methods available to define what the body content is and how it should be handled.

You can create a request and response directly using the {{DOMxRef("Request.Request", "Request()")}} and {{DOMxRef("Response.Response", "Response()")}} constructors, but it's uncommon to do this directly. Instead, these are more likely to be created as results of other API actions (for example, {{DOMxRef("FetchEvent.respondWith()")}} from service workers).

### Differences from jQuery

The `fetch` specification differs from `jQuery.ajax()` in three main ways:

- The Promise returned from `fetch()` **won't reject on HTTP error status** even if the response is an HTTP `404` or `500`. Instead, it will resolve normally (with `ok` status set to `false`), and it will only reject on network failure or if anything prevented the request from completing.
- `fetch()` **won't send cross-origin cookies** unless you set the _credentials_ [init option](/en-US/docs/Web/API/fetch#parameters) (to `include`).

  - In [April 2018](https://github.com/whatwg/fetch/pull/585), the spec changed the default credentials policy to `'same-origin'`. The following browsers shipped an outdated native fetch, and were updated in these versions: Firefox 61.0b13, Safari 12, Chrome 68.
  - If you are targeting older versions of these browsers, be sure to include `credentials: 'same-origin'` [init option](/en-US/docs/Web/API/fetch#parameters) on all API requests that may be affected by cookies/user login state.

> **Note:** Find out more about using the Fetch API features in [Using Fetch](/en-US/docs/Web/API/Fetch_API/Using_Fetch), and study concepts in [Fetch basic concepts](/en-US/docs/Web/API/Fetch_API/Basic_concepts).

### Aborting a fetch

Browsers have started to add experimental support for the {{DOMxRef("AbortController")}} and {{DOMxRef("AbortSignal")}} interfaces (aka The Abort API), which allow operations like Fetch and XHR to be aborted if they have not already completed. See the interface pages for more details.

## Fetch Interfaces

- {{DOMxRef("fetch()")}}
  - : The `fetch()` method used to fetch a resource.
- {{DOMxRef("Headers")}}
  - : Represents response/request headers, allowing you to query them and take different actions depending on the results.
- {{DOMxRef("Request")}}
  - : Represents a resource request.
- {{DOMxRef("Response")}}
  - : Represents the response to a request.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Fetch](/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
- [Fetch polyfill](https://github.com/github/fetch)
- [Fetch basic concepts](/en-US/docs/Web/API/Fetch_API/Basic_concepts)
