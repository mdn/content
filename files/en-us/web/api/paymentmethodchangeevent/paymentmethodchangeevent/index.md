---
title: PaymentMethodChangeEvent
slug: Web/API/PaymentMethodChangeEvent/PaymentMethodChangeEvent
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
details about a {{event("paymentmethodchange")}} event.

## Syntax

```js
paymentMethodChangeEvent = new PaymentMethodChangeEvent(type, options);
```

### Parameters

- `type`
  - : A {{domxref("DOMString")}} which must contain the string
    `paymentmethodchange`, the name of the only type of event which uses the
    `PaymentMethodChangeEvent` interface.
- `options` {{optional_inline}}

  - : An optional {{domxref("PaymentMethodChangeEventInit")}} dictionary which may
    contain zero or more of the following properties:

    - `methodName` {{optional_inline}}
      - : A {{domxref("DOMString")}} containing the payment method identifier for the
        payment handler being used. This is an empty string by default.
    - `methodDetails` {{optional_inline}}
      - : An object providing payment method-specific information describing the changes
        made to the payment, or `null` if there is no additional information
        available or required. This is `null` by default.

### Return value

A newly-created {{domxref("PaymentMethodChangeEvent")}} object describing a change to
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
- [Using
  the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Payment processing
  concepts](/en-US/docs/Web/API/Payment_Request_API/Concepts)
