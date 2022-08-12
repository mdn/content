---
title: BackgroundFetchRegistration.abort()
slug: Web/API/BackgroundFetchRegistration/abort
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - abort
  - BackgroundFetchRegistration
  - Experimental
browser-compat: api.BackgroundFetchRegistration.abort
---
{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`abort()`** method of the {{domxref("BackgroundFetchRegistration")}} interface aborts an active background fetch.

## Syntax

```js
abort()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with `true` if the fetch is successfully aborted.

## Examples

Use `abort()` to terminate a background fetch that is in progress.

```js
bgFetch.abort();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
