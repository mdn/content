---
title: PaymentRequestEvent()
slug: Web/API/PaymentRequestEvent/PaymentRequestEvent
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - Payment Request API
  - PaymentRequestEvent
  - Reference
  - Experimental
  - payment
browser-compat: api.PaymentRequestEvent.PaymentRequestEvent
---
{{APIRef("Payment Request API")}}{{SeeCompatTable}}

The **`PaymentRequestEvent`** constructor creates a new
{{domxref("PaymentRequestEvent")}} object which is a constructor for a
{{domxref("PaymentRequestEvent")}} which is the object passed to a payment handler when
a {{domxref("PaymentRequest")}} is made.

## Syntax

```js
new PaymentRequestEvent(type)
new PaymentRequestEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `paymentrequest`.
- `options` {{optional_inline}}
  - : An object that, in addition of the properties defined in {{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}}, can have the following properties:
    - `instrumentKey`
      - : A {{domxref("PaymentInstrument")}} object reflecting the payment instrument selected by the user
        or an empty string if the user has not registered or chosen a payment instrument.
    - `methodData`
      - : An array of {{domxref("PaymentMethodData")}} objects containing payment method identifiers for the payment methods
        that the web site accepts and any associated payment method specific data.
    - `modifiers`
      - : An array of objects containing changes to payment details.
    - `paymentRequestId`
      - : The ID of the {{domxref("PaymentRequest")}} object.
    - `paymentRequestOrigin`
      - : The origin where the {{domxref("PaymentRequest")}} object was initialized.
    - `topOrigin`
      - : The top-level origin where the {{domxref("PaymentRequest")}} object was initialized.
    - `total`
      - : The total amount being requested for payment.

## Return value

A new {{domxref("PaymentRequestEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
