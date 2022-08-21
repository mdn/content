---
title: MerchantValidationEvent()
slug: Web/API/MerchantValidationEvent/MerchantValidationEvent
page-type: web-api-constructor
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
  - Deprecated
  - Reference
browser-compat: api.MerchantValidationEvent.MerchantValidationEvent
---
{{deprecated_header}}{{securecontext_header}}{{APIRef()}}

The **`MerchantValidationEvent()`** constructor creates a new {{domxref("MerchantValidationEvent")}} object. You should not have to create these events yourself; instead, just handle the {{domxref("PaymentRequest.merchantvalidation_event", "merchantvalidation")}} event.

## Syntax

```js
new MerchantValidationEvent(type)
new MerchantValidationEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers always set it to `merchantvalidation`.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `methodName` {{optional_inline}}
      - : A string containing the payment method identifier for the payment handler being used. This is an empty string by default.
    - `validationURL` {{optional_inline}}
      - : The URL from which to retrieve payment handler specific verification information used to validate the merchant. This is an empty string by default.

### Return value

A new {{domxref("MerchantValidationEvent")}} object providing the information
that needs to be delivered to the client-side code to present to the {{Glossary("user agent")}} by calling {{domxref("MerchantValidationEvent.complete", "complete()")}}.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the string specified as `validationURL` could not be parsed as a URL.
- {{jsxref("RangeError")}}
  - : Thrown if the specified `methodName` does not correspond to a known and supported merchant or is not a well-formed standard payment method identifier.

## Specifications

_This feature is deprecated and is not part of any specification._

## Browser compatibility

{{Compat}}

## See also

- [Payment Request API](/en-US/docs/Web/API/Payment_Request_API)
- [Using the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Payment processing concepts](/en-US/docs/Web/API/Payment_Request_API/Concepts)
