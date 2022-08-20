---
title: PaymentResponse
slug: Web/API/PaymentResponse
page-type: web-api-interface
tags:
  - API
  - Interface
  - Payment Request
  - PaymentResponse
  - Reference
  - Secure context
browser-compat: api.PaymentResponse
---
{{SecureContext_Header}}{{APIRef("Payment Request API")}}

The **`PaymentResponse`** interface of the [Payment Request API](/en-US/docs/Web/API/Payment_Request_API) is returned after a user selects a payment method and approves a payment request.

{{InheritanceDiagram}}

## Properties

- {{domxref('PaymentResponse.details')}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Returns a JSON-serializable object that provides a payment method specific message used by the merchant to process the transaction and determine successful fund transfer. The contents of the object depend on the payment method being used. Developers need to consult whomever controls the URL for the expected shape of the details object.
- {{domxref('PaymentResponse.methodName')}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Returns the payment method identifier for the payment method that the user selected, for example, Visa, Mastercard, Paypal, etc.
- {{domxref('PaymentResponse.payerEmail')}} {{ReadOnlyInline}} {{SecureContext_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Returns the email address supplied by the user. This option is only present when the `requestPayerEmail` option is set to `true` in the `options` parameter of the {{domxref('PaymentRequest.PaymentRequest','PaymentRequest()')}} constructor.
- {{domxref('PaymentResponse.payerName')}} {{ReadOnlyInline}} {{SecureContext_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Returns the name supplied by the user. This option is only present when the `requestPayerName` option is set to true in the `options` parameter of the {{domxref('PaymentRequest.PaymentRequest','PaymentRequest()')}} constructor.
- {{domxref('PaymentResponse.payerPhone')}} {{ReadOnlyInline}} {{SecureContext_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Returns the phone number supplied by the user. This option is only present when the `requestPayerPhone` option is set to `true` in the `options` parameter of the {{domxref('PaymentRequest.PaymentRequest','PaymentRequest()')}} constructor.
- {{domxref('PaymentResponse.requestId')}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Returns the identifier of the {{domxref('PaymentRequest')}} that produced the current response. This is the same value supplied in the {{domxref('PaymentRequest.PaymentRequest','PaymentRequest()')}} constructor by `details.id`.
- {{domxref('PaymentResponse.shippingAddress')}} {{ReadOnlyInline}} {{SecureContext_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Returns the shipping Address supplied by the user. This option is only present when the `requestShipping` option is set to `true` in the `options` parameter of the {{domxref('PaymentRequest.PaymentRequest','PaymentRequest()')}} constructor.
- {{domxref('PaymentResponse.shippingOption')}} {{ReadOnlyInline}} {{SecureContext_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Returns the ID attribute of the shipping option selected by the user. This option is only present when the `requestShipping` option is set to `true` in the `options` parameter of the {{domxref('PaymentRequest.PaymentRequest','PaymentRequest()')}} constructor.

## Methods

- {{domxref('PaymentResponse.retry()')}} {{SecureContext_Inline}}
  - : If something is wrong with the payment response's data (and there is a recoverable error), this method allows a merchant to request that the user retry the payment. The method takes an object as argument, which is used to signal to the user exactly what is wrong with the payment response so they can try to correct any issues.
- {{domxref('PaymentResponse.complete()')}} {{SecureContext_Inline}}
  - : Notifies the user agent that the user interaction is over. This causes any remaining user interface to be closed. This method should only be called after the Promise returned by the {{domxref('PaymentRequest.show()')}} method.

## Events

Listen to this event using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `oneventname` property of this interface.

- [`payerdetailchange`](/en-US/docs/Web/API/PaymentResponse/payerdetailchange_event) {{SecureContext_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fired during a retry when the user makes changes to their personal information while filling out a payment request form. Allows the developer to revalidate any requested user data (e.g., the phone number or the email address) if it changes.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
