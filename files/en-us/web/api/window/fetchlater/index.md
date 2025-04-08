---
title: "Window: fetchLater() method"
short-title: fetchLater()
slug: Web/API/Window/fetchLater
page-type: web-api-instance-method
browser-compat: api.Window.fetchLater
---

{{APIRef("fetchLater API")}}

The **`fetchLater()`** method of the {{domxref("Window")}} interface creates a deferred fetch and returns a {{domxref("FetchLaterResult")}}.

A `fetchLater()` request is sent once the page is navigated away from (i.e., destroyed or enters the bfcache), or after a provided `activateAfter` timeout — whichever is first.

`fetchLater()` does not return the result of the fetch (since it is often sent after the document has been destroyed) and the whole response will be ignored, including body and headers. Instead the return result is a {{domxref("FetchLaterResult")}} containg a single `activated` value stating whether the request has been sent yet or not.

Requests whose body is a {{domxref("ReadableStream")}} cannot be deferred.

The `fetchLater()` method is controlled by the `connect-src` directive of [Content Security Policy](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) rather than the directive of the resources it's retrieving.

## Syntax

```js-nolint
fetchLater(resource)
fetchLater(resource, options)
```

### Parameters

The `fetchLater()` method takes all the same parameters as {{domxref("Window.fetch", "fetch()")}}, but with one additional `activateAfter` option.

- `resource`

  - : This defines the resource that you wish to fetch. Identical to {{domxref("Window.fetch", "fetch()")}}, this can either be:

    - A string or any other object with a {{Glossary("stringifier")}} — including a {{domxref("URL")}} object — that provides the URL of the resource you want to fetch. The URL may be relative to the base URL, which is the document's {{domxref("Node.baseURI", "baseURI")}} in a window context.
    - A {{domxref("Request")}} object.

- `options` {{optional_inline}}

  - : A {{domxref("DeferredRequestInit")}} object containing any custom settings that you want to apply to the request, including an `activateAfter` timeout value after which the deferred result should be sent.

### Exceptions

The [same exceptions for `fetch()`](/en-US/docs/Web/API/Window/fetch#exceptions) can we raised for `fetchLater()`, along with the following additional exceptions:

- `QuotaExceededError` {{domxref("DOMException")}}

  - : Use of this feature was blocked due to exceeding the available quota. See [`Quotas`](/en-US/docs/Web/API/fetchLater_API/fetchLater_quotas) for more details. Callers of `fetchLater()` should be defensive and catch `QuotaExceededError` errors in almost in all cases, especially if they are embedding third-party javascript.

- `RangeError` {{domxref("DOMException")}}

  - : Thrown when a negative `activateAfter` is provided.

- `TypeError` {{domxref("DOMException")}}
  - : In addition to the reasons for `fetch()`, this exception will also be thrown for a {{domxref("ReadableStream")}} request (which cannot be deferred) or for use of untrustworthy URLs (such as `http://`).

### Return value

A {{domxref("FetchLaterResult")}} containing an `activated` boolean property indicating if the request has been sent yet or not.

> [!NOTE]
> The response of the actual fetch request once it is sent, including the body and headers, is not made avaialble and will be ignored.

## Examples

The [`fetchLater()` quotas](/en-US/docs/Web/API/fetchLater_API/fetchLater_quotas) article provides examples of how the quotas are applied.

### Defer a `GET` request until page is navigated away from or closed

```js
fetchLater("/send_beacon");
```

### Defer a `POST` request for around one minute

In this example we create a {{domxref("Request")}}, and provide an `activateAfter` value to delay sending the request for 60,000 milliseconds (or one minute):

```js
fetchLater({
  url: '/send_beacon'
  method: 'POST'
  body: getBeaconData(),
}, {activateAfter: 60000 /* 1 minute */});
```

> [!NOTE]
> The actual sending time is unknown, as the browser may wait for a longer or shorter period of time, for example to optimize batching of deferred fetches.

### Defer a `POST` request for around one minute with a try/catch

The same example as above, but best practice is to enclose this is a try/catch:

```js
try {
  fetchLater({
    url: '/send_beacon'
    method: 'POST'
    body: getBeaconData(),
  }, {activateAfter: 60000 /* 1 minute */});
} catch (e) {
  if (e instanceOf QuotaExceededError) {
    // Handle the quota error
  } else {
    // Handle other errors
  }
}
```

### Defer a `POST` request for around one minute and create a function to check if sent

```js
const result = fetchLater("https://report.example.com", {
  method: "POST",
  body: JSON.stringify(myReport),
  activateAfter: 5000,
});

function check_if_fetched() {
  return result.activated;
}
```

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
  if (beaconResult && !beaconResult.activated) {
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

### Invalid examples

Any of the following calls to fetchLater() would throw:

```js
// Only potentially trustworthy urls are supported.
fetchLater("http://untrusted.example.com");

// The length of the deferred request has to be known when.
fetchLater("https://origin.example.com", { body: someDynamicStream });

// Deferred fetching only works on active windows.
const detachedWindow = iframe.contentWindow;
iframe.remove();
detachedWindow.fetchLater("https://origin.example.com");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`fetchLater()` API](/en-US/docs/Web/API/fetchLater_API)
- [`fetchLater()` quotas](/en-US/docs/Web/API/fetchLater_API/fetchLater_quotas)
- {{domxref("FetchLaterResult")}}
- [Fetch API](/en-US/docs/Web/API/Fetch_API)
