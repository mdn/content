---
title: "BackgroundFetchRegistration: uploaded property"
short-title: uploaded
slug: Web/API/BackgroundFetchRegistration/uploaded
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.BackgroundFetchRegistration.uploaded
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`uploaded`** read-only property of the {{domxref("BackgroundFetchRegistration")}} interface returns the size in bytes successfully sent, initially `0`.

If the value of this property changes, the [progress](/en-US/docs/Web/API/BackgroundFetchRegistration/progress_event) event is fired at the associated {{domxref("BackgroundFetchRegistration")}} object.

## Value

A {{jsxref("number")}}.

## Examples

Logging this property to the console returns the number of bytes uploaded.

```js
console.log(bgFetch.uploaded);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
