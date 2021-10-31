---
title: MerchantValidationEvent.complete()
slug: Web/API/MerchantValidationEvent/complete
tags:
  - API
  - Commerce
  - Merchant
  - Merchant Validation
  - MerchantValidationEvent
  - Method
  - Payment Request
  - Payment Request API
  - Payments
  - Reference
  - complete
browser-compat: api.MerchantValidationEvent.complete
---
{{deprecated_header}}{{non-standard_header}}{{securecontext_header}}

The {{domxref("MerchantValidationEvent")}} method **`complete()`** takes merchant-specific information previously received from the {{domxref("MerchantValidationEvent.validationURL", "validationURL")}} and uses it to validate the merchant.

All you have to do is call `complete()` from your handler for the {{event("merchantvalidation")}} event, passing in the data fetched from the `validationURL`.

## Syntax

```js
merchantValidationEvent.complete(validationData);
merchantValidationEvent.complete(merchantSessionPromise);
```

### Parameters

- `validationData` or `merchantSessionPromise`
  - : An object containing the data needed to complete the merchant validation process, or a {{jsxref("Promise")}} which resolves to the validation data.

### Return value

`undefined`.

### Exceptions

This exception may be passed into the rejection handler for the promise:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if the event did not come directly from the user agent, but was instead dispatched by other code. Another payment request is currently being processed, the current payment request is not currently being displayed to the user, or payment information is currently being updated.

## Example

In this example, we see the client-side code needed to support merchant validation for a payment request called `payRequest`:

```js
payRequest.onmerchantvalidation = event => {
  const validationDataPromise = getValidationData(event.validationURL);
  event.complete(validationDataPromise);
}

function getValidationData(url) {
  /* ...retrieve the validation data from the URL... */
}
```

This code sets up a handler for the {{event("merchantvalidation")}} event. The event handler calls a function, `getValidationData()`, which retrieves the data from the validation URL, then passes that data (or a promise to deliver the data) into `complete()`.

## Browser compatibility

{{Compat}}

## See also

- [Payment Request API](/en-US/docs/Web/API/Payment_Request_API)
- [Using the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Payment processing concepts](/en-US/docs/Web/API/Payment_Request_API/Concepts)
