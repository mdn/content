---
title: PaymentRequestUpdateEvent.updateWith()
slug: Web/API/PaymentRequestUpdateEvent/updateWith
tags:
  - API
  - Change
  - Experimental
  - Method
  - Payment Change
  - Payment Details
  - Payment Request API
  - PaymentRequestUpdateEvent
  - Reference
  - Secure context
  - Web Payments
  - payment
  - updateWith
browser-compat: api.PaymentRequestUpdateEvent.updateWith
---
{{APIRef("Payment Request API")}}{{securecontext_header}}

The **`updateWith()`** method of the
{{domxref("PaymentRequestUpdateEvent")}} interface updates the details of an existing
{{domxref("PaymentRequest")}}.

## Syntax

```js
paymentRequestUpdateEvent.updateWith(details);
```

### Parameters

- `details`

  - : An object specifying the changes applied to the payment request:

    - `displayItems` {{optional_inline}}
      - : An array of {{domxref("PaymentItem")}} objects, each describing one line item for the payment request. These represent the line items on a receipt or invoice.
    - `error` {{optional_inline}}{{deprecated_inline}}
      - : A {{domxref("DOMString")}} specifying an error message to present to the user*.* When calling `updateWith()`, including `error` in the updated data causes the {{Glossary("user agent")}} to display the text as a general error message. For address field specific errors, use `shippingAddressErrors`.
    - `modifiers` {{optional_inline}}
      - : An array of {{domxref("PaymentDetailsModifier")}} objects, each describing a modifier for particular payment method identifiers. For example, you can use one to adjust the total payment amount based on the selected payment method ("5% cash discount!").
    - `shippingAddressErrors` {{optional_inline}}{{deprecated_inline}}
      - : An {{domxref("AddressErrors")}} object which includes an error message for each property of the shipping address that could not be validated.
    - `shippingOptions` {{optional_inline}}
      - : An array of {{domxref("PaymentShippingOption")}} objects, each describing one available shipping option from which the user may choose.
    - `total` {{optional_inline}}
      - : A {{domxref("PaymentItem")}} providing an updated total for the payment. Make sure this equals the sum of all of the items in `displayItems`. _This is not calculated automatically_. You must update this value yourself anytime the total amount due changes. This lets you have flexibility for how to handle things like tax, discounts, and other adjustments to the total price charged.

### Return value

`undefined`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
