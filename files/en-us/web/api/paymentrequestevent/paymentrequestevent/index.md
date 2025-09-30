---
title: "PaymentRequestEvent: PaymentRequestEvent() constructor"
short-title: PaymentRequestEvent()
slug: Web/API/PaymentRequestEvent/PaymentRequestEvent
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.PaymentRequestEvent.PaymentRequestEvent
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

The **`PaymentRequestEvent`** constructor creates a new {{domxref("PaymentRequestEvent")}} object instance.

## Syntax

```js-nolint
new PaymentRequestEvent(type)
new PaymentRequestEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `paymentrequest`.
- `options` {{optional_inline}}
  - : An object that, in addition of the properties defined in {{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}}, can have the following properties:
    - `methodData`
      - : An array of `PaymentMethodData` objects (see [`methodData` > Value](/en-US/docs/Web/API/PaymentRequestEvent/methodData#value)) containing payment method identifiers for the payment methods
        that the website accepts and any associated payment method-specific data.
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

### Return value

A new {{domxref("PaymentRequestEvent")}} object.

## Examples

A developer would not use this constructor manually. A new `PaymentRequestEvent` object is constructed when a handler is invoked as a result of the {{domxref("ServiceWorkerGlobalScope.paymentrequest_event", "paymentrequest")}} event firing.

```js
self.addEventListener("paymentrequest", (e) => {
  // …
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web-based payment apps overview](https://web.dev/articles/web-based-payment-apps-overview)
- [Setting up a payment method](https://web.dev/articles/setting-up-a-payment-method)
- [Life of a payment transaction](https://web.dev/articles/life-of-a-payment-transaction)
- [Using the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Payment processing concepts](/en-US/docs/Web/API/Payment_Request_API/Concepts)
