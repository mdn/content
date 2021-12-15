---
title: BackgroundFetchRegistration.uploadTotal
slug: Web/API/BackgroundFetchRegistration/uploadTotal
tags:
  - API
  - Property
  - Reference
  - uploadTotal
  - BackgroundFetchRegistration
browser-compat: api.BackgroundFetchRegistration.uploadTotal
---
{{DefaultAPISidebar("Background Fetch API")}}

The **`uploadTotal`** read-only property of the {{domxref("BackgroundFetchRegistration")}} interface returns the total number of bytes to be sent to the server.

## Syntax

```js
let uploadTotal = BackgroundFetchRegistration.uploadTotal;
```

### Value

A {{jsxref("number")}}.

## Examples

Logging {{domxref("BackgroundFetchRegistration.uploadTotal")}} to the console returns the uploadTotal.

```js
console.log(bgFetch.uploadTotal);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
