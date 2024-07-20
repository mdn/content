---
title: "BackgroundFetchRegistration: downloadTotal property"
short-title: downloadTotal
slug: Web/API/BackgroundFetchRegistration/downloadTotal
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.BackgroundFetchRegistration.downloadTotal
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

The **`downloadTotal`** read-only property of the {{domxref("BackgroundFetchRegistration")}} interface returns the total size in bytes of this download. This is set when the background fetch was registered, or `0` if not set.

## Value

A {{jsxref("number")}}.

## Examples

Logging this property to the console returns the total size in bytes of this download.

```js
console.log(bgFetch.downloadTotal);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
