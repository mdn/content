---
title: "Window: fetchLater() method"
short-title: fetchLater()
slug: Web/API/Window/fetchLater
page-type: web-api-instance-method
browser-compat: api.Window.fetchLater
---

{{APIRef("fetchLater API")}}

The **`fetchLater()`** method of the {{domxref("Window")}} creates a deferred fetch and returns a {{domxref("FetchLaterResult")}}.

## Syntax

```js-nolint
fetchLater(resource)
fetchLater(resource, options)
```

### Parameters

- `resource`

  - : This defines the resource that you wish to fetch. Identical to {{domxref("Fetch")}}, this can either be:

    - A string or any other object with a {{Glossary("stringifier")}} — including a {{domxref("URL")}} object — that provides the URL of the resource you want to fetch. The URL may be relative to the base URL, which is the document's {{domxref("Node.baseURI", "baseURI")}} in a window context, or {{domxref("WorkerGlobalScope.location")}} in a worker context.
    - A {{domxref("Request")}} object.

- `options` {{optional_inline}}

  - : A {{domxref("DeferredRequestInit")}} object containing any custom settings that you want to apply to the request.

### Exceptions

- `QuotaExceededError` {{domxref("DOMException")}}
  - : Use of this feature was blocked due to exceeding the available quota. See [`Quotas`](/en-us/Web/Api/fetchLater_API#quotas) for more detail on exceptions.

### Return value

A {{domxref("FetchLaterResult")}}.

## Examples

The [Using fetch](/en-US/docs/Web/API/Fetch_API/Using_Fetch) article provides more examples of using `fetch()`.

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

## Browser compatibility

{{Compat}}

## See also

- {{domxref("fetchLater API")}}
- [Using the `fetchLater()` API](/en-US/docs/Web/API/fetchLater_API/Using_fetchLater)
- [`fetchLater()` quotas](/en-US/docs/Web/API/fetchLater_API/fetchLater_quotas)
- {{domxref("Fetch API")}}
- {{domxref("FetchLaterResult")}}
