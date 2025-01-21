---
title: "PublicKeyCredential: getClientCapabilities() static method"
short-title: getClientCapabilities()
slug: Web/API/PublicKeyCredential/getClientCapabilities_static
page-type: web-api-static-method
browser-compat: api.PublicKeyCredential.getClientCapabilities_static
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`getClientCapabilities()`** static method of the {{domxref("PublicKeyCredential")}} interface returns a {{jsxref("Promise")}} that resolves with a {{jsxref("Map")}} that can be used to check whether or not particular WebAuthn Client capabilities and [extensions](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) are supported.

If the value of a given capability is present in the map, then `true` indicates that the capability is currently supported, and `false` indicates that it is not.
However if a key is not present for a particular capability, no assumptions can be made about the availability of the associated feature.

For an extension the assumptions are the same, but note that generally if an extension is implemented the value will be `true`.
Note however that even if the extension is supported by the client a particular authenticator may not support that extension, so RPs must not assume that this is a guarantee that the authenticator processing steps for that extension will be performed.
If the key is not present for an extension then a Relying Party (RP) can't assume that client processing steps for that extension will be carried out by this client or that the extension will be forwarded to the authenticator.

A WebAuthn Relying Party can evaluate these to offer appropriate workflows and experiences to users.

## Syntax

```js-nolint
PublicKeyCredential.getClientCapabilities()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to a {{jsxref("Map")}} of client capability strings and a boolean indicating whether or not the corresponding capability or extension is supported.

The client capability strings are:

- `conditionalCreate`
  - : The WebAuthn Client is capable of conditional mediation for registration ceremonies.
- `conditionalGet`
  - : The WebAuthn Client is capable of conditional mediation for authentication ceremonies.
    This capability is equivalent to isConditionalMediationAvailable() resolving to true.
- `hybridTransport`
  - : The WebAuthn Client supports usage of the hybrid transport.
- `passkeyPlatformAuthenticator`
  - : The WebAuthn Client supports usage of a passkey platform authenticator, locally and/or via hybrid transport.
- `userVerifyingPlatformAuthenticator`
  - : The WebAuthn Client supports usage of a user-verifying platform authenticator.
- `relatedOrigins`
  - : The WebAuthn Client supports Related Origin Requests.
- `signalAllAcceptedCredentials`
  - : The WebAuthn Client supports signalAllAcceptedCredentials().
- `signalCurrentUserDetails`
  - : The WebAuthn Client supports signalCurrentUserDetails().
- `signalUnknownCredential`
  - : The WebAuthn Client supports signalUnknownCredential().

The [web extension](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) strings are formatted by prefixing the [extension identifier](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#available_extensions) with the prefix `extension:`.
For example, the key `extension.appid` can be used to check if the [`appid` extension](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#appid) is supported.

### Exceptions

The returned {{jsxref("Promise")}} may be rejected with the following values:

- `NotAllowedError` {{domxref("DOMException")}}
  - : The Web Authentication API is not allowed in the current browsing context.
    For example, it might be blocked by a permission policy.

## Examples

<!--
```js
PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
  .then((available) => {
    if (available) {
      // We can proceed with the creation of a PublicKeyCredential
      // with this authenticator
    } else {
      // Use another kind of authenticator or a classical login/password
      // workflow
    }
  })
  .catch((err) => {
    // Something went wrong
    console.error(err);
  });
```

-->

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

<!--
## See also
-->
