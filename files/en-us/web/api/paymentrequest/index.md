---
title: PaymentRequest
slug: Web/API/PaymentRequest
tags:
  - API
  - Commerce
  - Interface
  - Merchants
  - Money
  - Payment Request
  - Payment Request API
  - PaymentRequest
  - Payments
  - Reference
  - Secure context
browser-compat: api.PaymentRequest
---
{{securecontext_header}}{{APIRef("Payment Request API")}}

The [Payment Request API's](/en-US/docs/Web/API/Payment_Request_API) **`PaymentRequest`** interface is the primary access point into the API, and lets web content and apps accept payments from the end user on behalf of the operator of the site or the publisher of the app.

## Constructor

- {{domxref('PaymentRequest.PaymentRequest()','PaymentRequest()')}} {{securecontext_inline}}
  - : Creates a new `PaymentRequest` object.

## Properties

- {{domxref('PaymentRequest.id')}} {{readonlyinline}}{{securecontext_inline}}
  - : An unique identifier for a particular `PaymentRequest`, which can be set via `details.id`. When none is set, it defaults to a UUID.
- {{domxref('PaymentRequest.shippingAddress')}} {{readonlyinline}} {{securecontext_inline}}{{deprecated_inline}}
  - : If requested via payment options, returns the shipping address chosen by the user for the purposes of calculating shipping. This property is only populated if the constructor is called with the `requestShipping` flag set to true. Additionally, in some browsers, the parts of the address will be redacted for privacy until the user indicates they are ready to complete the transaction (i.e., they hit "Pay").
- {{domxref('PaymentRequest.shippingOption')}} {{readonlyinline}} {{securecontext_inline}}{{deprecated_inline}}
  - : Returns the identifier of the selected shipping option. This property is only populated if the constructor is called with the `requestShipping` flag set to true.
- {{domxref('PaymentRequest.shippingType')}} {{readonlyinline}} {{securecontext_inline}}{{deprecated_inline}}
  - : Returns the type of shipping used to fulfill the transaction. This will be one of `shipping`, `delivery`, `pickup`, or `null` if a value was not provided in the constructor.

## Methods

- {{domxref('PaymentRequest.canMakePayment()')}} {{securecontext_inline}}
  - : Indicates whether the `PaymentRequest` object can make a payment before calling `show()`.
- {{domxref('PaymentRequest.show()')}} {{securecontext_inline}}
  - : Causes the user agent to begin the user interaction for the payment request.
- {{domxref('PaymentRequest.abort()')}} {{securecontext_inline}}
  - : Causes the user agent to end the payment request and to remove any user interface that might be shown.

## Events

- {{domxref("PaymentRequest.merchantvalidation_event", "merchantvalidation")}} {{securecontext_inline}}
  - : With some payment handlers (e.g., Apple Pay), this event handler is called to handle the {{event("merchantvalidation")}} event, which is dispatched when the user agent requires that the merchant validate that the merchant or vendor requesting payment is legitimate.
    Also available using the {{domxref("PaymentRequest.onmerchantvalidation", "onmerchantvalidation")}} event handler property.
- {{domxref("PaymentRequest.paymentmethodchange_event", "paymentmethodchange")}} {{securecontext_inline}}
  - : With some payment handlers (e.g., Apple Pay), dispatched whenever the user changes payment instrument, like switching from a credit card to a debit card.
    Also available using the {{domxref("PaymentRequest.onpaymentmethodchange", "onpaymentmethodchange")}} event handler property.
- {{domxref("PaymentRequest.shippingaddresschange_event", "shippingaddresschange")}} {{securecontext_inline}}{{deprecated_inline}}
  - : Dispatched whenever the user changes their shipping address.
    Also available using the {{domxref("PaymentRequest.onshippingaddresschange", "onshippingaddresschange")}} event handler property.
- {{domxref("PaymentRequest.shippingoptionchange_event", "shippingoptionchange")}} {{securecontext_inline}}{{deprecated_inline}}
  - : Dispatched whenever the user changes a shipping option.
    Also available using the {{domxref("PaymentRequest.onshippingoptionchange", "onshippingoptionchange")}} event handler property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
