---
title: "PublicKeyCredential: isUserVerifyingPlatformAuthenticatorAvailable() static method"
short-title: isUserVerifyingPlatformAuthenticatorAvailable()
slug: Web/API/PublicKeyCredential/isUserVerifyingPlatformAuthenticatorAvailable_static
page-type: web-api-static-method
browser-compat: api.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable_static
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`isUserVerifyingPlatformAuthenticatorAvailable()`** static method of the {{domxref("PublicKeyCredential")}} interface returns a {{jsxref("Promise")}} which resolves to `true` if a user-verifying platform authenticator is present.

A user-verifying platform authenticator is a kind of multi-factor authenticator that is part of the client device (it is generally not removable) and that involves an action from the user in order to identify them. Common user-verifying platform authenticators include:

- Touch ID or Face ID (macOS and iOS)
- Windows Hello (Windows)
- Device unlock (fingerprint, face, PIN, etc.) on Android

> **Note:** This method may only be used in top-level contexts and will not be available in an {{HTMLElement("iframe")}} for example.

## Syntax

```js-nolint
PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} which resolves to a boolean value indicating whether or
a not a user-verifying platform authenticator is available.

> **Note:** In earlier versions of the specification, the boolean also
> conveyed the consent of the user to disclose such an authenticator existed.

## Examples

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Windows Hello](https://docs.microsoft.com/windows-hardware/design/device-experiences/windows-hello)
- [Web Authentication and Windows Hello - MSDN Guide](https://docs.microsoft.com/archive/microsoft-edge/legacy/developer/) and especially the [special considerations mentioning `isUserVerifyingPlatformAuthenticator()`](https://docs.microsoft.com/archive/microsoft-edge/legacy/developer/#special-considerations-for-windows-hello)
