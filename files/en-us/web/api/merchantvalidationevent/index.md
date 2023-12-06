---
title: MerchantValidationEvent
slug: Web/API/MerchantValidationEvent
page-type: web-api-interface
status:
  - deprecated
browser-compat: api.MerchantValidationEvent
---

{{APIRef("Payment Request API")}}{{Deprecated_Header}}{{SecureContext_Header}}

The **`MerchantValidationEvent`** interface of the [Payment Request API](/en-US/docs/Web/API/Payment_Request_API) enables a merchant to verify themselves as allowed to use a particular payment handler.

Learn more about [merchant validation](/en-US/docs/Web/API/Payment_Request_API/Concepts#merchant_validation).

## Constructor

- {{domxref("MerchantValidationEvent.MerchantValidationEvent()","MerchantValidationEvent()")}} {{SecureContext_Inline}} {{Deprecated_Inline}}
  - : Creates a new `MerchantValidationEvent` object describing a {{domxref("PaymentRequest.merchantvalidation_event", "merchantvalidation")}} event that will be sent to the payment handler to request that it validate the merchant.

## Instance properties

- {{domxref("MerchantValidationEvent.methodName")}} {{SecureContext_Inline}} {{Deprecated_Inline}}
  - : A string providing a unique payment method identifier for the payment handler that's requiring validation. This may be either one of the standard payment method identifier strings or a URL that both identifies and handles requests for the payment handler, such as `https://apple.com/apple-pay`.
- {{domxref("MerchantValidationEvent.validationURL")}} {{SecureContext_Inline}} {{Deprecated_Inline}}
  - : A string specifying a URL from which the site or app can fetch payment handler specific validation information. Once this data is retrieved, the data (or a promise resolving to the validation data) should be passed into {{domxref("MerchantValidationEvent.complete", "complete()")}} to validate that the payment request is coming from an authorized merchant.

## Instance methods

- {{domxref("MerchantValidationEvent.complete()")}} {{SecureContext_Inline}} {{Deprecated_Inline}}
  - : Pass the data retrieved from the URL specified by {{domxref("MerchantValidationEvent.validationURL", "validationURL")}} into `complete()` to complete the validation process for the {{domxref("PaymentRequest")}}.

## Browser compatibility

{{Compat}}
