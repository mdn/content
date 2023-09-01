---
title: "NavigationPreloadManager: setHeaderValue() method"
short-title: setHeaderValue()
slug: Web/API/NavigationPreloadManager/setHeaderValue
page-type: web-api-instance-method
browser-compat: api.NavigationPreloadManager.setHeaderValue
---

{{APIRef("Service Workers API")}}

The **`setHeaderValue()`** method of the {{domxref("NavigationPreloadManager")}} interface sets the value of the {{HTTPHeader("Service-Worker-Navigation-Preload")}} header that will be sent with requests resulting from a {{domxref("fetch()")}} operation made during service worker navigation preloading.
It returns an empty {{jsxref("Promise")}} that resolves with `undefined`.

The presence of the {{HTTPHeader("Service-Worker-Navigation-Preload")}} header in preloading requests allows servers to configure the returned resource differently for preloading fetch requests than from normal fetch requests.
The default directive is set to `true`: this method allows the possibility of configuring multiple different responses to preload requests.

> **Note:** If a different response may result from setting this header, the server must set `Vary: Service-Worker-Navigation-Preload` to ensure that the different responses are cached.

## Syntax

```js-nolint
setHeaderValue(value)
```

### Parameters

- `value`
  - : An arbitrary string value, which the target server uses to determine what should returned for the requested resource.

### Return value

A {{jsxref("Promise")}} that resolves with {{jsxref('undefined')}}.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : There is no active worker associated with the registration to which this {{domxref("NavigationPreloadManager")}} belongs.

## Examples

The code below demonstrates how the value might be set.

```js
navigator.serviceWorker.ready
  .then((registration) =>
    registration.navigationPreload.setHeaderValue(newValue),
  )
  .then(() => console.log("Done!"))
  .catch((e) =>
    console.error(`NavigationPreloadManager not supported: ${e.message}`),
  );
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
