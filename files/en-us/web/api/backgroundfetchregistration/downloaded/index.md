---
title: BackgroundFetchRegistration.downloaded
slug: Web/API/BackgroundFetchRegistration/downloaded
tags:
  - API
  - Property
  - Reference
  - downloaded
  - BackgroundFetchRegistration
browser-compat: api.BackgroundFetchRegistration.downloaded
---
{{APIRef("Background Fetch API")}}

The **`downloaded`** read-only property of the {{domxref("BackgroundFetchRegistration")}} interface returns the size in bytes that has been downloaded, initially `0`.

If the value of this property changes, the  [progress](/en-US/docs/Web/API/BackgroundFetchRegistration/progress_event) event is fired at the associated {{domxref("BackgroundFetchRegistration")}} object.

## Value

A {{jsxref("number")}}.

## Examples

Logging this property to the console returns the number of bytes downloaded.

```js
console.log(bgFetch.downloaded);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
