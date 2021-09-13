---
title: MerchantValidationEvent()
slug: Web/API/MerchantValidationEvent/MerchantValidationEvent
tags:
  - API
  - Commerce
  - Constructor
  - Merchant Validation
  - MerchantValidationEvent
  - Merchants
  - Payment Request API
  - Payment Requests
  - Payments
  - Reference
browser-compat: api.MerchantValidationEvent.MerchantValidationEvent
---
{{deprecated_header}}{{non-standard_header}}{{securecontext_header}}

The **`MerchantValidationEvent()`** constructor creates a new {{domxref("MerchantValidationEvent")}} object. You should not have to create these events yourself; instead, just handle the {{event("merchantvalidation")}} event.

## Syntax

```js
merchantValidationEvent = new MerchantValidationEvent(type, options);
```

### Parameters

- `type`
  - : A {{domxref("DOMString")}} which must be `merchantvalidation`, the only type of event which uses the `MerchantValidationEvent` interface.
- `options` {{optional_inline}}

  - : An optional dictionary which may contain zero or more of the following properties:

    - `methodName` {{optional_inline}}
      - : A {{domxref("DOMString")}} containing the payment method identifier for the payment handler being used. This is an empty string by default.
    - `validationURL` {{optional_inline}}
      - : The URL from which to retrieve payment handler specific verification information used to validate the merchant. This is an empty string by default.

### Return value

A newly-created {{domxref("MerchantValidationEvent")}} providing the information that needs to be delivered to the client-side code to present to the {{Glossary("user agent")}} by calling {{domxref("MerchantValidationEvent.complete", "complete()")}}.

### Exceptions

- `TypeError`
  - : The string specified as `validationURL` could not be parsed as a URL.
- `RangeError`
  - : The specified `methodName` does not correspond to a known and supported merchant or is not a well-formed standard payment method identifier.

## Browser compatibility

{{Compat}}

## See also

- [Payment Request API](/en-US/docs/Web/API/Payment_Request_API)
- [Using the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Payment processing concepts](/en-US/docs/Web/API/Payment_Request_API/Concepts)
