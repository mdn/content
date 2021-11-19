---
title: BackgroundFetchRegistration.result
slug: Web/API/BackgroundFetchRegistration/result
tags:
  - API
  - Property
  - Reference
  - result
  - BackgroundFetchRegistration
browser-compat: api.BackgroundFetchRegistration.result
---
{{DefaultAPISidebar("Background Fetch API")}}

The **`result`** read-only property of the {{domxref("BackgroundFetchRegistration")}} interface returns a string indicating whether the background fetch was successful or failed.

## Syntax

```js
let theResult = BackgroundFetchRegistration.result;
```

### Value

One of the following strings:

- `""`
  - : The fetch is active so there is no result.
- `"success"`
  - : The background fetch was successful.
- `"failure"`
  - : The background fetch failed. This only appears when there is no ability for the browser to retry.

## Examples

Logging {{domxref("BackgroundFetchRegistration.result")}} to the console returns a string indicating the status, or an empty string if the fetch is still active.

```js
console.log(bgFetch.result);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
