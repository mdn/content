---
title: PaymentRequestEvent.openWindow()
slug: Web/API/PaymentRequestEvent/openWindow
tags:
  - API
  - Method
  - Payment Request API
  - PaymentRequestEvent
  - Reference
  - openWindow()
  - payment
browser-compat: api.PaymentRequestEvent.openWindow
---
{{APIRef("Payment Request API")}}{{SeeCompatTable}}

The **`openWindow`** property of the
{{domxref("PaymentRequestEvent")}} interface opens the specified URL in a new window, if
and only if the given URL is on the same origin as the calling page. It returns a
{{jsxref("Promise")}} that resolves with a reference to a {{domxref("WindowClient")}}.

## Syntax

```js
var aPromise = paymentRequestEvent.openWindow(url)
```

### Parameters

- url
  - : The URL to open in the new window. It must be on the same origin as the calling
    page.

### Return value

A {{jsxref("Promise")}} that resolves with a reference to a
{{domxref("WindowClient")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
