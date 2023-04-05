---
title: PublicKeyCredential.isConditionalMediationAvailable()
slug: Web/API/PublicKeyCredential/isConditionalMediationAvailable
page-type: web-api-static-method
browser-compat: api.PublicKeyCredential.isConditionalMediationAvailable
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`isConditionalMediationAvailable()`**
static method of the {{domxref("PublicKeyCredential")}} interface returns a
{{jsxref("Promise")}} which resolves to `true` if conditional mediation is available.

Conditional mediation means that the user has to explicitly select a credential to return to the requesting party. Discovered credentials are presented to the user in a non-modal dialog box along with an indication of the origin requesting credentials.

If the user makes a gesture outside of the dialog, it closes without resolving or rejecting the Promise and without causing a user-visible error condition. If the user selects a credential, that credential is returned to the caller. The prevent silent access flag (see {{domxref("CredentialsContainer.preventSilentAccess()")}}) is treated as being `true` regardless of its actual value: the conditional behavior always involves user mediation of some sort if applicable credentials are discovered.

If no credentials are discovered, the user agent can prompt the user to take action in a way that depends on the type of credential (e.g. to insert a device containing credentials).

## Syntax

```js-nolint
isConditionalMediationAvailable()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} which resolves to a boolean value indicating whether or not conditional mediation is available.

## Examples

```js
PublicKeyCredential.isConditionalMediationAvailable()
  .then((available) => {
    if (available) {
      // Continue with conditional mediation
    } else {
      // Use a code path that uses a different kind of conditional mediation
    }
  })
  .catch((err) => {
    // Something went wrong
    console.error(err);
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
