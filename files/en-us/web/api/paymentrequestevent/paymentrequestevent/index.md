---
title: PaymentRequestEvent()
slug: Web/API/PaymentRequestEvent/PaymentRequestEvent
tags:
  - API
  - Constructor
  - Payment Request API
  - PaymentRequestEvent
  - Reference
  - payment
browser-compat: api.PaymentRequestEvent.PaymentRequestEvent
---
{{APIRef("Payment Request API")}}{{Non-standard_header}}

The **`PaymentRequestEvent`** constructor creates a new
{{domxref("PaymentRequestEvent")}} object which is a constructor for a
{{domxref("PaymentRequestEvent")}} which is the object passed to a payment handler when
a {{domxref("PaymentRequest")}} is made..

## Syntax

```js
var paymentRequestEvent = new PaymentRequestEventy(type, options)
```

### Parameters

- _type_
  - : Must always be `'PaymentRequest'`.
- _options_ {{optional_inline}}

  - : Options are as follows:

    - `instrumentKey`: A {{domxref("PaymentInstrument")}} object reflecting
      the payment instrument selected by the user or an empty string if the user has not
      registered or chosen a payment instrument.
    - `methodData`: An array of {{domxref("PaymentMethodData")}} objects
      containing payment method identifiers for the payment methods that the web site
      accepts and any associated payment method specific data.
    - `modifiers`: An array of objects containing changes to payment
      details.
    - `paymentRequestId`: The ID of the {{domxref("PaymentRequest")}}
      object.
    - `paymentRequestOrigin`: The origin where the
      {{domxref("PaymentRequest")}} object was initialized.
    - `topLeveOrigin`: The top-level origin where the
      {{domxref("PaymentRequest")}} object was initialized.
    - `total`: The total amount being requested for payment.

## Browser compatibility

{{Compat}}
