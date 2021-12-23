---
title: WindowClient.navigate()
slug: Web/API/WindowClient/navigate
tags:
  - API
  - Client
  - Experimental
  - Method
  - Navigate
  - Reference
  - Service Workers
  - WindowClient
browser-compat: api.WindowClient.navigate
---
{{APIRef("Service Workers API")}}

The **`navigate()`** method of the {{domxref("WindowClient")}}
interface loads a specified URL into a controlled client page then returns a
{{jsxref("Promise")}} that resolves to the existing {{domxref("WindowClient")}}.

## Syntax

```js
windowClient.navigate(url).then(function(windowClient) {
  // do something with your WindowClient after navigation
});
```

### Parameters

- `url`
  - : The location to navigate to.

### Return value

A {{jsxref("Promise")}} that resolves to the existing {{domxref("WindowClient")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
