---
title: "WindowClient: navigate() method"
short-title: navigate()
slug: Web/API/WindowClient/navigate
page-type: web-api-instance-method
browser-compat: api.WindowClient.navigate
---

{{APIRef("Service Workers API")}}

The **`navigate()`** method of the {{domxref("WindowClient")}}
interface loads a specified URL into a controlled client page then returns a
{{jsxref("Promise")}} that resolves to the existing {{domxref("WindowClient")}}.

## Syntax

```js-nolint
navigate(url)
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
