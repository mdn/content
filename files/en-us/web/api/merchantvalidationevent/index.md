---
title: MerchantValidationEvent
slug: Web/API/MerchantValidationEvent
tags:
  - API
  - Commerce
  - Experimental
  - Interface
  - Merchant
  - Merchant Validation
  - Payment Request
  - Payment Request API
  - PaymentRequestUpdateEvent
  - Payments
  - Reference
  - Secure context
browser-compat: api.MerchantValidationEvent
---
{{deprecated_header}}{{non-standard_header}}{{securecontext_header}}

The **`MerchantValidationEvent`** interface of the [Payment Request API](/en-US/docs/Web/API/Payment_Request_API) enables a merchant to verify themselves as allowed to use a particular payment handler.

To learn more about merchant validation, see {{SectionOnPage("/en-US/docs/Web/API/Payment_Request_API/Concepts", "Merchant validation")}}.

## Constructor

- {{domxref("MerchantValidationEvent.MerchantValidationEvent()","MerchantValidationEvent()")}} {{securecontext_inline}}
  - : Creates a new `MerchantValidationEvent` object describing a {{event("merchantvalidation")}} event that will be sent to the payment handler to request that it validate the merchant.

## Properties

- {{domxref("MerchantValidationEvent.methodName")}} {{securecontext_inline}}
  - : A {{domxref("DOMString")}} providing a unique payment method identifier for the payment handler that's requiring validation. This may be either one of the standard payment method identifier strings or a URL that both identifies and handles requests for the payment handler, such as `https://apple.com/apple-pay`.
- {{domxref("MerchantValidationEvent.validationURL")}} {{securecontext_inline}}
  - : A {{domxref("USVString")}} specifying a URL from which the site or app can fetch payment handler specific validation information. Once this data is retrieved, the data (or a promise resolving to the validation data) should be passed into {{domxref("MerchantValidationEvent.complete", "complete()")}} to validate that the payment request is coming from an authorized merchant.

## Methods

- {{domxref("MerchantValidationEvent.complete()")}} {{securecontext_inline}}
  - : Pass the data retrieved from the URL specified by {{domxref("MerchantValidationEvent.validationURL", "validationURL")}} into `complete()` to complete the validation process for the {{domxref("PaymentRequest")}}.

## Browser compatibility

{{Compat}}
