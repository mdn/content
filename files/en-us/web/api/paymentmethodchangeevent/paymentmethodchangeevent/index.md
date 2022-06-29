---
title: PaymentMethodChangeEvent()
slug: Web/API/PaymentMethodChangeEvent/PaymentMethodChangeEvent
page-type: web-api-constructor
tags:
  - API
  - Commerce
  - Interface
  - Payment Method
  - Payment Request API
  - PaymentMethodChangeEvent
  - Reference
  - payment
browser-compat: api.PaymentMethodChangeEvent.PaymentMethodChangeEvent
---
{{securecontext_header}}{{APIRef("Payment Request API")}}

The **`PaymentMethodChangeEvent()`**
constructor creates a new {{domxref("PaymentMethodChangeEvent")}} object providing
details about a {{domxref("PaymentRequest.paymentmethodchange_event", "paymentmethodchange")}} event.

## Syntax

```js
new PaymentMethodChangeEvent(type)
new PaymentMethodChangeEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `paymentmethodchange`.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_,
    can have the following properties:
    - `methodName` {{optional_inline}}
      - : A string containing the payment method identifier for the
        payment handler being used. This is an empty string by default.
    - `methodDetails` {{optional_inline}}
      - : An object providing payment method-specific information describing the changes
        made to the payment, or `null` if there is no additional information
        available or required. This is `null` by default.

### Return value

A new {{domxref("PaymentMethodChangeEvent")}} object describing a change to
the options specified for the payment method given in the `methodName`
property.

The type of the `methodDetails` property depends on the payment method. For
example, if `methodName` is `https://example.com/pay`, indicating that the
Example Pay payment method is being used for validation, the shape of `methodDetails`
is defined by the payment method.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Payment Request API](/en-US/docs/Web/API/Payment_Request_API)
- [Using the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Payment processing concepts](/en-US/docs/Web/API/Payment_Request_API/Concepts)
