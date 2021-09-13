---
title: MerchantValidationEvent.methodName
slug: Web/API/MerchantValidationEvent/methodName
tags:
  - API
  - Commerce
  - Identifier
  - Merchant
  - MerchantValidationEvent
  - NeedsExample
  - Payment Method
  - Payment Method Identifier
  - Payment Request
  - Payment Request API
  - Property
  - Reference
  - Validation
  - methodName
  - payment
browser-compat: api.MerchantValidationEvent.methodName
---
{{deprecated_header}}{{non-standard_header}}{{securecontext_header}}

The {{domxref("MerchantValidationEvent")}} property
**`methodName`** is a read-only value which returns a string
indicating the payment method identifier which represents the payment handler that
requires merchant validation.

## Syntax

```js
methodID = merchantValidationEvent.methodName;
```

### Value

A read-only {{domxref("DOMString")}} which uniquely identifies the payment handler
which is requesting merchant validation. See
{{SectionOnPage("/en-US/docs/Web/API/Payment_Request_API/Concepts", "Merchant
  validation")}} for more information on the process.

## Browser compatibility

{{Compat}}

## See also

- [Payment Request API](/en-US/docs/Web/API/Payment_Request_API)
- [Using
  the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Payment processing
  concepts](/en-US/docs/Web/API/Payment_Request_API/Concepts)
