---
title: "PublicKeyCredential: isConditionalMediationAvailable() static method"
short-title: isConditionalMediationAvailable()
slug: Web/API/PublicKeyCredential/isConditionalMediationAvailable_static
page-type: web-api-static-method
browser-compat: api.PublicKeyCredential.isConditionalMediationAvailable_static
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`isConditionalMediationAvailable()`** static method of the {{domxref("PublicKeyCredential")}} interface returns a {{jsxref("Promise")}} which resolves to `true` if [conditional mediation](/en-US/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) is available.

## Syntax

```js-nolint
PublicKeyCredential.isConditionalMediationAvailable()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} which resolves to a boolean value indicating whether or not conditional mediation is available.

## Examples

Before invoking a conditional WebAuthn API call, check if:

- The browser supports the Web Authentication API.
- The browser supports WebAuthn conditional UI.

```js
// Availability of `window.PublicKeyCredential` means WebAuthn is usable.
if (
  window.PublicKeyCredential &&
  PublicKeyCredential.isConditionalMediationAvailable
) {
  // Check if conditional mediation is available.
  const isCMA = await PublicKeyCredential.isConditionalMediationAvailable();
  if (isCMA) {
    // Call WebAuthn authentication
    const publicKeyCredentialRequestOptions = {
      // Server generated challenge
      challenge: ****,
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

> [!NOTE]
> See [Sign in with a passkey through form autofill](https://web.dev/articles/passkey-form-autofill) for more information about using conditional mediation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
