---
title: PaymentRequest.abort()
slug: Web/API/PaymentRequest/abort
page-type: web-api-instance-method
tags:
  - API
  - Payment Request API
  - PaymentRequest
  - Reference
  - Secure context
  - abort
browser-compat: api.PaymentRequest.abort
---
{{securecontext_header}}{{APIRef("Payment Request API")}}

The `PaymentRequest.abort()` method of the {{domxref('PaymentRequest')}}
interface causes the user agent to end the payment request and to remove any user
interface that might be shown.

## Syntax

```js
abort()
```

### Parameters

None.

### Return value

None ({{jsxref('undefined')}}).

## Examples

The following example sets up a timeout to clear the payment request that might have
been abandoned or neglected.

```js
const request = new PaymentRequest(supportedInstruments, details, options);

const paymentTimeout = setTimeout(() => {
  clearTimeout(paymentTimeout);
  request.abort().then(() => {
    print('Payment timed out after 20 minutes.');
  }).catch(() => {
    print('Unable to abort, because the user is currently in the process ' +
          'of paying.');
  });
}, 20 * 60 * 1000);  /* 20 minutes */
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref('PaymentRequest.abort','PaymentRequest.abort()')}}
