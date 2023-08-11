---
title: "BackgroundFetchRegistration: failureReason property"
short-title: failureReason
slug: Web/API/BackgroundFetchRegistration/failureReason
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.BackgroundFetchRegistration.failureReason
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`failureReason`** read-only property of the {{domxref("BackgroundFetchRegistration")}} interface returns a string with a value that indicates a reason for a background fetch failure.

If the value of this property changes, the [progress](/en-US/docs/Web/API/BackgroundFetchRegistration/progress_event) event is fired at the associated {{domxref("BackgroundFetchRegistration")}} object.

## Value

One of the following strings:

- `""`
  - : The background fetch has not completed, or was successful.
- `"aborted"`
  - : The operation was cancelled by the user, or {{domxref("BackgroundFetchRegistration.abort()","abort()")}} was called.
- `"bad-status"`
  - : A response had a not-ok status (a status outside the range 200-299).
- `"fetch-error"`
  - : A fetch failed for other reasons, for example CORS, or a network failure.
- `"quota-exceeded"`
  - : Storage quota was reached during the operation.
- `"download-total-exceeded"`
  - : The provided `downloadTotal` was exceeded. This value was set when the background fetch was registered.

## Examples

Logging this property to the console prints the reason the fetch failed, or an empty string if it was successful or has not yet completed.

```js
console.log(bgFetch.failureReason);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
