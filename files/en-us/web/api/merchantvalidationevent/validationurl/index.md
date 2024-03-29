---
title: "MerchantValidationEvent: validationURL property"
short-title: validationURL
slug: Web/API/MerchantValidationEvent/validationURL
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.MerchantValidationEvent.validationURL
---

{{APIRef("Payment Request API")}}{{Deprecated_Header}}{{SecureContext_Header}}

The {{domxref("MerchantValidationEvent")}} property
**`validationURL`** is a read-only string value providing the
URL from which to fetch the payment handler-specific data needed to validate the
merchant.

This data should be passed into the {{domxref("MerchantValidationEvent.complete", "complete()")}} method to let the user agent complete the transaction.

## Value

A read-only string giving the URL from which to load payment handler
specific data needed to complete the merchant verification process. Once this has been
loaded, it should be passed into {{domxref("MerchantValidationEvent.complete", "complete()")}}, either directly or using a promise.

See [Merchant validation](/en-US/docs/Web/API/Payment_Request_API/Concepts#merchant_validation) to learn more about the process.

## Browser compatibility

{{Compat}}

## See also

- [Payment Request API](/en-US/docs/Web/API/Payment_Request_API)
- [Using the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Payment processing concepts](/en-US/docs/Web/API/Payment_Request_API/Concepts)
