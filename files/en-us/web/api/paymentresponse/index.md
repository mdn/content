---
title: PaymentResponse
slug: Web/API/PaymentResponse
tags:
  - API
  - Experimental
  - Interface
  - Payment Request
  - PaymentResponse
  - Reference
  - Secure context
browser-compat: api.PaymentResponse
---
{{securecontext_header}}{{APIRef("Payment Request API")}}

The **`PaymentResponse`** interface of the [Payment Request API](/en-US/docs/Web/API/Payment_Request_API) is returned after a user selects a payment method and approves a payment request.

## Properties

- {{domxref('PaymentResponse.details')}} {{readonlyinline}} {{securecontext_inline}}
  - : Returns a JSON-serializable object that provides a payment method specific message used by the merchant to process the transaction and determine successful fund transfer. The contents of the object depend on the payment method being used. Developers need to consult whomever controls the URL for the expected shape of the details object.
- {{domxref('PaymentResponse.methodName')}} {{readonlyinline}} {{securecontext_inline}}
  - : Returns the payment method identifier for the payment method that the user selected, for example, Visa, Mastercard, Paypal, etc..
- {{domxref('PaymentResponse.payerEmail')}} {{readonlyinline}} {{securecontext_inline}}{{deprecated_inline}}
  - : Returns the email address supplied by the user. This option is only present when the `requestPayerEmail` option is set to `true` in the `options` parameter of the {{domxref('PaymentRequest.PaymentRequest','PaymentRequest()')}} constructor.
- {{domxref('PaymentResponse.payerName')}} {{readonlyinline}} {{securecontext_inline}}{{deprecated_inline}}
  - : Returns the name supplied by the user. This option is only present when the `requestPayerName` option is set to true in the `options` parameter of the {{domxref('PaymentRequest.PaymentRequest','PaymentRequest()')}} constructor.
- {{domxref('PaymentResponse.payerPhone')}} {{readonlyinline}} {{securecontext_inline}}{{deprecated_inline}}
  - : Returns the phone number supplied by the user. This option is only present when the `requestPayerPhone` option is set to `true` in the `options` parameter of the {{domxref('PaymentRequest.PaymentRequest','PaymentRequest()')}} constructor.
- {{domxref('PaymentResponse.requestId')}} {{readonlyinline}} {{securecontext_inline}}
  - : Returns the identifier of the {{domxref('PaymentRequest')}} that produced the current response. This is the same value supplied in the {{domxref('PaymentRequest.PaymentRequest','PaymentRequest()')}} constructor by `details.id`.
- {{domxref('PaymentResponse.shippingAddress')}} {{readonlyinline}} {{securecontext_inline}}{{deprecated_inline}}
  - : Returns the shipping Address supplied by the user. This option is only present when the `requestShipping` option is set to `true` in the `options` parameter of the {{domxref('PaymentRequest.PaymentRequest','PaymentRequest()')}} constructor.
- {{domxref('PaymentResponse.shippingOption')}} {{readonlyinline}} {{securecontext_inline}}{{deprecated_inline}}
  - : Returns the ID attribute of the shipping option selected by the user. This option is only present when the `requestShipping` option is set to `true` in the `options` parameter of the {{domxref('PaymentRequest.PaymentRequest','PaymentRequest()')}} constructor.

## Methods

- {{domxref('PaymentResponse.retry()')}} {{securecontext_inline}}
  - : If something is wrong with the payment response's data (and there is a recoverable error), this method allows a merchant to request that the user retry the payment. The method takes an object as argument, which is used to signal to the user exactly what is wrong with the payment response so they can try to correct any issues.
- {{domxref('PaymentResponse.complete()')}} {{securecontext_inline}}
  - : Notifies the user agent that the user interaction is over. This causes any remaining user interface to be closed. This method should only be called after the Promise returned by the {{domxref('PaymentRequest.show()')}} method.

## Events

Listen to this event using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `oneventname` property of this interface.

- [`payerdetailchange`](/en-US/docs/Web/API/PaymentResponse/payerdetailchange_event){{securecontext_inline}}{{deprecated_inline}}
  - : Fired during a retry when the user makes changes to their personal information while filling out a payment request form. Allows the developer to revalidate any requested user data (e.g., the phone number or the email address) if it changes.
    Also available via the [`onpayerdetailchange`](/en-US/docs/Web/API/PaymentResponse/onpayerdetailchange) property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
