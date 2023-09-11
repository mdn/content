---
title: "PaymentRequest: canMakePayment() method"
short-title: canMakePayment()
slug: Web/API/PaymentRequest/canMakePayment
page-type: web-api-instance-method
browser-compat: api.PaymentRequest.canMakePayment
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

The {{domxref("PaymentRequest")}} method
**`canMakePayment()`** determines whether or not the request
is configured in a way that is compatible with at least one payment method supported
by the {{Glossary("user agent")}}.

You can call this before calling
{{domxref("PaymentRequest.show", "show()")}} to provide a streamlined user experience
when the user's browser can't handle any of the payment methods you accept.

For instance, you might call `canMakePayment()` to determine if the browser
will let the user pay using Payment Request API, and if it won't, you could fall back to
another payment method, or offer a list of methods that aren't handled by Payment
Request API (or even provide instructions for paying by mail or by phone).

## Syntax

```js-nolint
canMakePayment()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} to a boolean value that resolves to `true`
if the user agent supports any of the payment methods supplied when instantiating the
request using the {{domxref('PaymentRequest.PaymentRequest()','PaymentRequest')}}
constructor. If the payment can't be processed, the promise receives a value of
`false`.

> **Note:** If you call this too often, the browser may reject the
> returned promise with a `DOMException`.

## Examples

In the following example, is [excerpted from a demo](https://rsolomakhin.github.io/samples/paymentrequest/can-make-payment/) that asynchronously builds a `PaymentRequest` object for
both Apple Pay and Example Pay. It wraps the call to `canMakePayment()` in
feature detection, and calls an appropriate callback depending on the resolution of the
`Promise`.

```js
async function initPaymentRequest() {
  const details = {
    total: {
      label: "Total",
      amount: {
        currency: "USD",
        value: "0.00",
      },
    },
  };

  const supportsApplePay = new PaymentRequest(
    [{ supportedMethods: "https://apple.com/apple-pay" }],
    details,
  ).canMakePayment();

  // Supports Apple Pay?
  if (await supportsApplePay) {
    // show Apple Pay logo, for instance
    return;
  }

  // Otherwise, let's see if we can use Example Pay
  const supportsExamplePay = await new PaymentRequest(
    [{ supportedMethods: "https://example.com/pay" }],
    details,
  ).canMakePayment();

  if (supportsExamplePay) {
    // show Example Pay support
    return;
  }

  // Otherwise, make payments using HTML form element
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref('PaymentRequest.show','PaymentRequest.show()')}}
