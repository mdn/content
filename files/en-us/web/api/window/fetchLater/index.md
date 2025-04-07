---
title: "Window: fetchLater() method"
short-title: fetchLater()
slug: Web/API/Window/fetchlater
page-type: web-api-instance-method
browser-compat: api.Window.fetchLater
---

{{APIRef("fetchLater API")}}

The **`fetchLater()`** method of the {{domxref("Window")}} creates a deferred fetch and returns a {{domxref("FetchLaterResult")}}.

A `fetchLater()` request is sent once the page is navigated away from (i.e., destroyed or enters the bfcache), or after a provided `activateAfter` timeout — whichever is first.

`fetchLater()` does not return the result of the fetch (since it is often sent after the document has been destroyed) and the whole response will be ignored, including body and headers. Instead the return result is a {{domxref("FetchLaterResult")}} containg a single `activated` value stating whether the request has been sent yet or not.

## Syntax

```js-nolint
fetchLater(resource)
fetchLater(resource, options)
```

### Parameters

The `fetchLater()` method takes all the same parameters as {{domxref("fetch()")}}, but with one additional `activateAfter` option.

- `resource`

  - : This defines the resource that you wish to fetch. Identical to {{domxref("Fetch")}}, this can either be:

    - A string or any other object with a {{Glossary("stringifier")}} — including a {{domxref("URL")}} object — that provides the URL of the resource you want to fetch. The URL may be relative to the base URL, which is the document's {{domxref("Node.baseURI", "baseURI")}} in a window context.
    - A {{domxref("Request")}} object.

- `options` {{optional_inline}}

  - : A {{domxref("DeferredRequestInit")}} object containing any custom settings that you want to apply to the request, including an `activateAfter` timeout value after which the deferred result should be sent.

### Exceptions

- `QuotaExceededError` {{domxref("DOMException")}}
  - : Use of this feature was blocked due to exceeding the available quota. See [`Quotas`](/en-US/docs/Web/API/fetchLater_API/fetchLater_quotas) for more details.

### Return value

A {{domxref("FetchLaterResult")}} containing an `activated` property indicating if the request has been sent yet or not.

> [!NOTE]
> The response of the actual fetch request once it is sent, including the body and headers, is not made avaialble and will be ignored.

## Examples

The [`fetchLater()` quotas](/en-US/docs/Web/API/fetchLater_API/fetchLater_quotas) article provides examples of how the quotas are applied.

### Defer a `GET` request until page is naviagted away from or closed

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

### Update a pending request

In this example we use an {{domxref("AbortController")}} to cancel and recreate the request:

```js
let beaconResult = null;
let beaconAbort = null;

function updateBeacon(data) {
  const pending = !beaconResult || !beaconResult.activated;
  if (pending && beaconAbort) {
    beaconAbort.abort();
  }

  createBeacon(data);
}

function createBeacon(data) {
  if (beaconResult && beaconResult.activated) {
    // Avoid creating duplicated beacon if the previous one is still pending.
    return;
  }

  beaconAbort = new AbortController();
  beaconResult = fetchLater({
    url: data
    signal: beaconAbort.signal
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`fetchLater()` API](/en-US/docs/Web/API/fetchLater_API)
- [`fetchLater()` quotas](/en-US/docs/Web/API/fetchLater_API/fetchLater_quotas)
- {{domxref("Fetch API")}}
- {{domxref("FetchLaterResult")}}
- [Fetch API](/en-US/docs/Web/API/Fetch_API)
