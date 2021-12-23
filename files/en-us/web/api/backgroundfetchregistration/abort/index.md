---
title: BackgroundFetchRegistration.abort()
slug: Web/API/BackgroundFetchRegistration/abort
tags:
  - API
  - Method
  - Reference
  - abort
  - BackgroundFetchRegistration
browser-compat: api.BackgroundFetchRegistration.abort
---
{{DefaultAPISidebar("Background Fetch API")}}

The **`abort()`** method of the {{domxref("BackgroundFetchRegistration")}} interface aborts an active background fetch.

## Syntax

```js
let status = BackgroundFetchRegistration.abort();
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with `true` if the fetch is successfulled aborted.

## Examples

Use `abort()` to terminate a background fetch that is in progress.

```js
bgFetch.abort();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
