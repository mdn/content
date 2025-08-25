---
title: "PaymentRequest: securePaymentConfirmationAvailability() static method"
short-title: securePaymentConfirmationAvailability()
slug: Web/API/PaymentRequest/securePaymentConfirmationAvailability_static
page-type: web-api-static-method
browser-compat: api.PaymentRequest.securePaymentConfirmationAvailability_static
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

The **`securePaymentConfirmationAvailability()`** static method of the {{domxref("PaymentRequest")}} interface indicates whether the [Secure payment confirmation](/en-US/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation) (SPC) feature is available.

## Syntax

```js-nolint
securePaymentConfirmationAvailability()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with an enumerated value indicating whether SPC is available, and if not, a reason for non-availability.

Possible values are:

- `available`
  - : SPC is available in the calling frame. This doesn't guarantee that an [SPC-compatible credential](/en-US/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation#creating_a_credential) is available to authenticate against.
- `unavailable-unknown-reason`
  - : SPC is not available in the calling frame, for an unknown reason. The browser may return this result instead of a more specific reason, in order to protect user privacy.
- `unavailable-feature-not-enabled`
  - : SPC is not available in the calling frame because it is not enabled.
- `unavailable-no-permission-policy`
  - : SPC is not available in the calling frame, because it is blocked by a [`payment`](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/payment) [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy).
- `unavailable-no-user-verifying-platform-authenticator`
  - : SPC is not available in the calling frame, because there is no user-verifying platform authenticator available ({{domxref("PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()")}} can also be used to discern this information).

## Examples

```js
async function spcSupport() {
  const support = await PaymentRequest.securePaymentConfirmationAvailability();
  if (support === "available") {
    // Commence SPC payment flow
  } else {
    // Fallback to traditional flows
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Secure Payment Confirmation](/en-US/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation)
