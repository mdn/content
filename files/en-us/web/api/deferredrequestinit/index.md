---
title: DeferredRequestInit
slug: Web/API/DeferredRequestInit
page-type: web-api-interface
---

{{DefaultAPISidebar("fetchLater API")}}

The **`DeferredRequestInit`** dictionary of the [fetchLater() API](/en-US/docs/Web/API/fetchLater_API) represents the set of options that can be used to configure a deferred fetch request.

The `DeferredRequestInit` object is pass directly into the {{DOMxRef("Window.fetchLater()")}} function call as the second argument.

## Instance properties

This dictionary extends the {{DOMxRef("RequestInit")}} dictionary with the addition of the following properties:

- `activateAfter` {{optional_inline}}

  - : A {{ domxref("DOMHighResTimeStamp") }} indicating a timeout after which the fetch request should be sent. The fetch can be sent earlier on navigating away. NOTE: The actual sending time is unknown, as the browser may wait for a longer or shorter period of time, e.g., to optimize batching of deferred fetches. If the `activateAfter` property is not provided the deferred fetch waits until the end of the page visit (including entering the bfcache).

## Examples

### Defer a `GET` request until page is destroyed or enters the bfcache

```js
fetchLater("/send_beacon");
```

### Defer a `POST` request for around 1 minute

In this example we create a {{domxref("Request")}}, passing the same set of options into its constructor, and then pass the request into `fetch()`:

```js
fetchLater({
  url: '/send_beacon'
  method: 'POST'
  body: getBeaconData(),
}, {activateAfter: 60000 /* 1 minute */});
```

> [!NOTE]
> The actual sending time is unknown, as the browser may wait for a longer or shorter period of time, for example to optimize batching of deferred fetches.

## Specifications

{{Specifications}}

## See also

- [Using Fetch](/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/Guides/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
