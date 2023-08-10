---
title: "PublicKeyCredential: isConditionalMediationAvailable() static method"
short-title: isConditionalMediationAvailable()
slug: Web/API/PublicKeyCredential/isConditionalMediationAvailable
page-type: web-api-static-method
browser-compat: api.PublicKeyCredential.isConditionalMediationAvailable_static
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`isConditionalMediationAvailable()`** static method of the {{domxref("PublicKeyCredential")}} interface returns a {{jsxref("Promise")}} which resolves to `true` if conditional mediation is available.

Conditional mediation, if available, results in any discovered credentials being presented to the user in a non-modal dialog box along with an indication of the origin requesting credentials. This is requested by including `mediation: 'conditional'` in your `get()` call. In practice, this means autofilling available credentials; you need to include `autocomplete="webauthn"` on your form fields so that they will show the WebAuthn sign-in options.

A conditional `get()` call does not show the browser UI and remains pending until the user picks an account to sign-in with from available autofill suggestions:

- If the user makes a gesture outside of the dialog, it closes without resolving or rejecting the Promise and without causing a user-visible error condition.
- If the user selects a credential, that credential is returned to the caller.

The prevent silent access flag (see {{domxref("CredentialsContainer.preventSilentAccess()")}}) is treated as being `true` regardless of its actual value: the conditional behavior always involves user mediation of some sort if applicable credentials are discovered.

> **Note:** If no credentials are discovered, the non-modal dialog will not be visible, and the user agent can prompt the user to take action in a way that depends on the type of credential (for example, to insert a device containing credentials).

## Syntax

```js-nolint
isConditionalMediationAvailable()
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

> **Note:** See [Sign in with a passkey through form autofill](https://web.dev/passkey-form-autofill/) for more information about using conditional mediation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
