---
title: Fetch API
slug: Web/API/Fetch_API
page-type: web-api-overview
browser-compat: api.fetch
---

{{DefaultAPISidebar("Fetch API")}}

The Fetch API provides an interface for fetching resources (including across the network). It is a more powerful and flexible replacement for {{DOMxRef("XMLHttpRequest")}}.

{{AvailableInWorkers}}

## Concepts and usage

The Fetch API uses {{DOMxRef("Request")}} and {{DOMxRef("Response")}} objects (and other things involved with network requests), as well as related concepts such as CORS and the HTTP Origin header semantics.

For making a request and fetching a resource, use the {{DOMxRef("fetch()")}} method. It is a global method in both {{DOMxRef("Window")}} and {{DOMxRef("WorkerGlobalScope", "Worker")}} contexts. This makes it available in pretty much any context you might want to fetch resources in.

The `fetch()` method takes one mandatory argument, the path to the resource you want to fetch. It returns a {{JSxRef("Promise")}} that resolves to the {{DOMxRef("Response")}} to that request — as soon as the server responds with headers — **even if the server response is an HTTP error status**. You can also optionally pass in an `init` options object as the second argument (see {{DOMxRef("Request")}}).

Once a {{DOMxRef("Response")}} is retrieved, there are a number of methods available to define what the body content is and how it should be handled.

You can create a request and response directly using the {{DOMxRef("Request.Request", "Request()")}} and {{DOMxRef("Response.Response", "Response()")}} constructors, but it's uncommon to do this directly. Instead, these are more likely to be created as results of other API actions (for example, {{DOMxRef("FetchEvent.respondWith()")}} from service workers).

Find out more about using the Fetch API features in [Using Fetch](/en-US/docs/Web/API/Fetch_API/Using_Fetch), and study concepts in [Fetch basic concepts](/en-US/docs/Web/API/Fetch_API/Basic_concepts).

## Fetch Interfaces

- {{DOMxRef("fetch()")}}
  - The `fetch()` method is used to fetch a resource. Learn more about making requests in the [Using Fetch guide](/en-US/docs/Web/API/Fetch_API/Using_Fetch).
  
- {{DOMxRef("Headers")}}
  - The `Headers` interface represents response/request headers, allowing you to query them and take different actions depending on the results. Explore header manipulation in the [Using Fetch guide](/en-US/docs/Web/API/Fetch_API/Using_Fetch).

- {{DOMxRef("Request")}}
  - The `Request` interface represents a resource request. Create and customize requests for your needs. See examples in the [Using Fetch guide](/en-US/docs/Web/API/Fetch_API/Using_Fetch).

- {{DOMxRef("Response")}}
  - The `Response` interface represents the response to a request. Learn how to handle different response scenarios in the [Using Fetch guide](/en-US/docs/Web/API/Fetch_API/Using_Fetch).

These interfaces play a crucial role in utilizing the Fetch API effectively. Refer to the linked guides for detailed information and practical examples.


## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Fetch](/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Service Worker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
- [Fetch polyfill](https://github.com/github/fetch)
- [Fetch basic concepts](/en-US/docs/Web/API/Fetch_API/Basic_concepts)
