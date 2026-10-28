---
title: "PublicKeyCredential: isConditionalMediationAvailable() static method"
short-title: isConditionalMediationAvailable()
slug: Web/API/PublicKeyCredential/isConditionalMediationAvailable_static
page-type: web-api-static-method
browser-compat: api.PublicKeyCredential.isConditionalMediationAvailable_static
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`isConditionalMediationAvailable()`** static method of the {{domxref("PublicKeyCredential")}} interface returns a {{jsxref("Promise")}} which resolves to `true` if the device supports [conditional get](/en-US/docs/Web/API/Web_Authentication_API#autofill_ui).

This method is equivalent to the object returned by {{domxref("PublicKeyCredential.getClientCapabilities()")}} containing a `true` value for its [`conditionalGet`](/en-US/docs/Web/API/PublicKeyCredential/getClientCapabilities_static#conditionalget) property, and developers are encouraged to prefer this API.

> [!NOTE]
> This method does **not** indicate whether [conditional create](/en-US/docs/Web/API/Web_Authentication_API#conditional_create) is supported. For this, check the value of [`conditionalCreate`](/en-US/docs/Web/API/PublicKeyCredential/getClientCapabilities_static#conditionalcreate) in the object returned by {{domxref("PublicKeyCredential.getClientCapabilities()")}}.

## Syntax

```js-nolint
PublicKeyCredential.isConditionalMediationAvailable()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} which resolves to a boolean value indicating whether or not conditional get is available.

### Exceptions

The returned {{jsxref("Promise")}} may be rejected with the following values:

- `SecurityError` {{domxref("DOMException")}}
  - : The RP domain is not valid.

## Examples

Before invoking a conditional WebAuthn API call, check if:

- The browser supports the Web Authentication API.
- The browser supports conditional get.

```js
// Availability of `window.PublicKeyCredential` means WebAuthn is usable.
if (
  window.PublicKeyCredential &&
  PublicKeyCredential.isConditionalMediationAvailable
) {
  // Check if conditional get is available.
  const isCMA = await PublicKeyCredential.isConditionalMediationAvailable();
  if (isCMA) {
    // Call WebAuthn authentication
    const publicKeyCredentialRequestOptions = {
      // Server generated challenge
      challenge: challengeFromServer,
      // The same RP ID as used during registration
      rpId: "example.com",
    };

    const credential = await navigator.credentials.get({
      publicKey: publicKeyCredentialRequestOptions,
      signal: abortController.signal,
      // Specify 'conditional' to activate conditional UI
      mediation: "conditional",
    });
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
