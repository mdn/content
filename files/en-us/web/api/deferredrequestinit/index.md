---
title: DeferredRequestInit
slug: Web/API/DeferredRequestInit
page-type: web-api-interface
status:
  - experimental
browser-compat: api.Window.fetchLater
sidebar:
  - defaultapisidebar:
      - fetchLater API
---

{{SeeCompatTable}}

The **`DeferredRequestInit`** dictionary of the [`fetchLater()` API](/en-US/docs/Web/API/fetchLater_API) represents the set of options that can be used to configure a deferred fetch request.

The `DeferredRequestInit` object is passed directly into the {{domxref("window.fetchLater()")}} function call as the second argument.

## Instance properties

This dictionary extends the {{domxref("RequestInit")}} dictionary with the addition of the following properties:

- `activateAfter` {{optional_inline}}
  - : A {{ domxref("DOMHighResTimeStamp") }} indicating a timeout in milliseconds after which the fetch request should be sent. The fetch can be sent earlier on navigating away. The _actual_ sending time is unknown, as the browser may wait for a longer or shorter time, for example, to optimize the batching of deferred fetches. If the `activateAfter` property is not provided, the deferred fetch waits until the end of the page visit (including entering the [bfcache](/en-US/docs/Glossary/bfcache)).

### Exceptions

- `RangeError` {{domxref("DOMException")}}
  - : Raised when a negative `activateAfter` is provided.

## Examples

### Defer a `GET` request until the page is destroyed or enters the bfcache

In this example, no `DeferredRequestInit` object is provided and no timeout is used:

```js
fetchLater("/send_beacon");
```

### Defer a `POST` request for around 1 minute

In this example we create a {{domxref("Request")}}, and provide an `activateAfter` value to delay sending the request for 60,000 milliseconds (or one minute):

```js
fetchLater("/send_beacon", {
  method: "POST",
  body: getBeaconData(),
  activateAfter: 60000, // 1 minute
});
```

> [!NOTE]
> The actual sending time is unknown, as the browser may wait for a longer or shorter period of time, for example to optimize batching of deferred fetches.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Fetch](/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/Guides/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
