---
title: PaymentRequestUpdateEvent()
slug: Web/API/PaymentRequestUpdateEvent/PaymentRequestUpdateEvent
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - Payment Request
  - Payment Request API
  - PaymentRequestUpdateEvent
  - Reference
  - Secure context
browser-compat: api.PaymentRequestUpdateEvent.PaymentRequestUpdateEvent
---
{{APIRef("Payment Request API")}}{{securecontext_header}}

The **`PaymentRequestUpdateEvent()`** constructor creates a new
{{domxref("PaymentRequestUpdateEvent")}} object which enables a web page to update the
details of a {{domxref("PaymentRequest")}} in response to a user action. Actual updates
are made by passing options to the
{{domxref('PaymentRequestUpdateEvent.updateWith','updateWith()')}} method.

## Syntax

```js
new PaymentRequestUpdateEvent()
```

### Parameters

None.

### Return value

A new `PaymentRequestUpdateEvent`

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
