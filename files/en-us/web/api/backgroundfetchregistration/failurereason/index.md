---
title: BackgroundFetchRegistration.failureReason
slug: Web/API/BackgroundFetchRegistration/failureReason
tags:
  - API
  - Property
  - Reference
  - failureReason
  - BackgroundFetchRegistration
browser-compat: api.BackgroundFetchRegistration.failureReason
---
{{DefaultAPISidebar("Background Fetch API")}}

The **`failureReason`** read-only property of the {{domxref("BackgroundFetchRegistration")}} interface returns a string with a value that indicates a reason for a background fetch failure.

## Syntax

```js
let failureReason = BackgroundFetchRegistration.failureReason;
```

### Value

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

Logging {{domxref("BackgroundFetchRegistration.failureReason")}} to the console prints the reason the fetch failed, or an empty string if it was successful or has not yet completed.

```js
console.log(bgFetch.failureReason);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
