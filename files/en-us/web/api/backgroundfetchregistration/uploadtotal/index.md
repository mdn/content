---
title: "BackgroundFetchRegistration: uploadTotal property"
short-title: uploadTotal
slug: Web/API/BackgroundFetchRegistration/uploadTotal
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.BackgroundFetchRegistration.uploadTotal
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

The **`uploadTotal`** read-only property of the {{domxref("BackgroundFetchRegistration")}} interface returns the total number of bytes to be sent to the server.

## Value

A {{jsxref("number")}}.

## Examples

Logging this property to the console returns the total number of this upload.

```js
console.log(bgFetch.uploadTotal);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
