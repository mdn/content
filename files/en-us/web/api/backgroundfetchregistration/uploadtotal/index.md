---
title: "BackgroundFetchRegistration: uploadTotal property"
short-title: uploadTotal
slug: Web/API/BackgroundFetchRegistration/uploadTotal
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.BackgroundFetchRegistration.uploadTotal
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`uploadTotal`** read-only property of the {{domxref("BackgroundFetchRegistration")}} interface returns the total number of bytes to be sent to the server.

## Value

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
