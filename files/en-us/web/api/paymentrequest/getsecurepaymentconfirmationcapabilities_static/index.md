---
title: "PaymentRequest: getSecurePaymentConfirmationCapabilities() static method"
short-title: getSecurePaymentConfirmationCapabilities()
slug: Web/API/PaymentRequest/getSecurePaymentConfirmationCapabilities_static
page-type: web-api-static-method
status:
  - experimental
browser-compat: api.PaymentRequest.getSecurePaymentConfirmationCapabilities_static
---

{{securecontext_header}}{{APIRef("Payment Request API")}}{{SeeCompatTable}}

The **`getSecurePaymentConfirmationCapabilities()`** static method of the {{domxref("PaymentRequest")}} interface returns an object indicating which capabilities of the [Secure payment confirmation](/en-US/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation) feature are supported by the current browser.

## Syntax

```js-nolint
PaymentRequest.getSecurePaymentConfirmationCapabilities()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with an object where the property names are strings representing secure payment confirmation feature names, and the values are booleans representing whether the feature is available (`true`) or not (`false`).

Known features are as follows:

- `browserBoundKeyHardware`
  - : The Secure Payment Confirmation API is capable of using browser bound keys that are stored in hardware secure elements on the device. A browser-bound key is a public-private key pair that signs over the transaction details in addition to the [WebAuthn](/en-US/docs/Web/API/Web_Authentication_API) credential and is tied to a single device by the user agent.

> [!NOTE]
> The browser may choose to omit some or all capabilities from the object regardless if it is supported or not, for example to protect user privacy if abuse of the API is suspected.

## Examples

### Basic usage

```js
async function spcFeatures() {
  const features =
    await PaymentRequest.getSecurePaymentConfirmationCapabilities();
  for (const [key, value] of Object.entries(features)) {
    console.log(`${key}: ${value}`);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Secure Payment Confirmation](/en-US/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation)
