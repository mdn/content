---
title: "BackgroundFetchRegistration: result property"
short-title: result
slug: Web/API/BackgroundFetchRegistration/result
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.BackgroundFetchRegistration.result
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`result`** read-only property of the {{domxref("BackgroundFetchRegistration")}} interface returns a string indicating whether the background fetch was successful or failed.

If the value of this property changes, the [progress](/en-US/docs/Web/API/BackgroundFetchRegistration/progress_event) event is fired at the associated {{domxref("BackgroundFetchRegistration")}} object.

## Value

One of the following strings:

- `""`
  - : The fetch is active so there is no result.
- `"success"`
  - : The background fetch was successful.
- `"failure"`
  - : The background fetch failed. This only appears when there is no ability for the browser to retry.

## Examples

Logging this property to the console returns a string indicating the status, or an empty string if the fetch is still active.

```js
console.log(bgFetch.result);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
