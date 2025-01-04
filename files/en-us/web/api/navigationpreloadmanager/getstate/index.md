---
title: "NavigationPreloadManager: getState() method"
short-title: getState()
slug: Web/API/NavigationPreloadManager/getState
page-type: web-api-instance-method
browser-compat: api.NavigationPreloadManager.getState
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`getState()`** method of the {{domxref("NavigationPreloadManager")}} interface returns a {{jsxref("Promise")}} that resolves to an object with properties that indicate whether preload is enabled and what value will be sent in the {{HTTPHeader("Service-Worker-Navigation-Preload")}} HTTP header.

## Syntax

```js-nolint
getState()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with an object that has the following properties:

- `enabled`
  - : `true` if preloading is enabled, and `false` otherwise.
- `headerValue`
  - : A string containing the value that will be sent in the `Service-Worker-Navigation-Preload` HTTP header following a preloading {{domxref("Window/fetch", "fetch()")}}.
    This defaults to `true` unless the value was changed using {{domxref("NavigationPreloadManager.setHeaderValue()")}}.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : There is no active worker associated with the registration to which this {{domxref("NavigationPreloadManager")}} belongs.

## Examples

The code below shows a request for the current state, made once the service worker is ready.

```js
navigator.serviceWorker.ready
  .then((registration) => registration.navigationPreload.getState())
  .then((state) => {
    console.log(state.enabled); // boolean
    console.log(state.headerValue); // string
  })
  .catch((e) =>
    console.error(`NavigationPreloadManager not supported: ${e.message}`),
  );
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
