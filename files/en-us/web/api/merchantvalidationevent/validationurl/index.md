---
title: MerchantValidationEvent.validationURL
slug: Web/API/MerchantValidationEvent/validationURL
tags:
  - API
  - Commerce
  - Merchant
  - Merchant Validation
  - MerchantValidationEvent
  - NeedsExample
  - Payment Request
  - Payment Request API
  - Payments
  - Property
  - Reference
  - validationURL
browser-compat: api.MerchantValidationEvent.validationURL
---
{{deprecated_header}}{{non-standard_header}}{{securecontext_header}}

The {{domxref("MerchantValidationEvent")}} property
**`validationURL`** is a read-only string value providing the
URL from which to fetch the payment handler-specific data needed to validate the
merchant.

This data should be passed into the {{domxref("MerchantValidationEvent.complete",
  "complete()")}} method to let the user agent complete the transaction.

## Syntax

```js
validationURL = merchantValidationEvent.validationURL;
```

### Value

A read-only {{domxref("USVString")}} giving the URL from which to load payment handler
specific data needed to complete the merchant verification process. Once this has been
loaded, it should be passed into {{domxref("MerchantValidationEvent.complete",
  "complete()")}}, either directly or using a promise.

See {{SectionOnPage("/en-US/docs/Web/API/Payment_Request_API/Concepts", "Merchant
  validation")}} for more information on the merchant validation process.

## Browser compatibility

{{Compat}}

## See also

- [Payment Request API](/en-US/docs/Web/API/Payment_Request_API)
- [Using
  the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Payment processing
  concepts](/en-US/docs/Web/API/Payment_Request_API/Concepts)
