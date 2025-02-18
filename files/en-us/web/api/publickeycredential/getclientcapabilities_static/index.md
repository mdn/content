---
title: "PublicKeyCredential: getClientCapabilities() static method"
short-title: getClientCapabilities()
slug: Web/API/PublicKeyCredential/getClientCapabilities_static
page-type: web-api-static-method
browser-compat: api.PublicKeyCredential.getClientCapabilities_static
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`getClientCapabilities()`** static method of the {{domxref("PublicKeyCredential")}} interface returns a {{jsxref("Promise")}} that resolves with an object that can be used to check whether or not particular WebAuthn client capabilities and [extensions](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) are supported.

A relying party (RP) can use this information to appropriately customize its sign-in and sign-up user interfaces and workflows.

## Syntax

```js-nolint
PublicKeyCredential.getClientCapabilities()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to an object where the property names are the client capability strings, and the values are boolean values that indicate whether or not the corresponding capability or extension is supported.

The WebAuthn client capability strings are:

- `"conditionalCreate"`
  - : The client is capable of creating [discoverable credentials](/en-US/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation).
- `"conditionalGet"`
  - : The client is capable of authenticating using [discoverable credentials](/en-US/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation).
    This capability is equivalent to [`isConditionalMediationAvailable()`](/en-US/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static) resolving to `true`.
- `"hybridTransport"`
  - : The client supports usage of the [hybrid](/en-US/docs/Web/API/AuthenticatorAttestationResponse/getTransports#hybrid) transport.
    This means that the client can use authenticators that rely on Bluetooth, NFC, or USB.
- `"passkeyPlatformAuthenticator"`
  - : The client allows usage of a passkey authenticator that supports multi-factor authentication mechanisms such as a PIN or biometric check.
    The authenticator can be part of the same platform (device) as the client, or connected via a hybrid transport such as Bluetooth or USB.
    The credentials are stored on the authenticator.
    See [Passkeys developer guide for relying parties](https://developers.google.com/identity/passkeys/developer-guides).
- `userVerifyingPlatformAuthenticator`
  - : The client has a platform authenticator (part of the same device) that supports multi-factor authentication mechanisms, such as a PIN or biometric check.
    The credentials may be stored on either the RP or the authenticator.
- `relatedOrigins`
  - : The client supports [Related Origin Requests](https://web.dev/articles/webauthn-related-origin-requests).
    These clients allow a passkey to be used across multiple sites that have the same origin.
- `signalAllAcceptedCredentials`
  - : The client supports the [`PublicKeyCredential.signalAllAcceptedCredentials()`](/en-US/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static) static method.
    If not supported, RP workflows will need to prompt the user to manually delete credentials on the authenticator.
- `signalCurrentUserDetails`
  - : The client supports the [`PublicKeyCredential.signalCurrentUserDetails()`](/en-US/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static) static method.
    If not supported, RP workflows will need to prompt the user to manually update user details on the authenticator.
- `signalUnknownCredential`
  - : The client supports the [`PublicKeyCredential.signalUnknownCredential()`](/en-US/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static) static method.
    If not supported, RP workflows will need to prompt the user to manually delete credentials from the authenticator.

The [web extension](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) strings are formatted by prefixing the [extension identifier](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#available_extensions) with the prefix `extension:`.
For example, the key `extension:appid` can be used to check if the [`appid` extension](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#appid) is supported.

### Exceptions

The returned {{jsxref("Promise")}} may be rejected with the following values:

- `NotAllowedError` {{domxref("DOMException")}}
  - : The Web Authentication API is not allowed in the current browsing context.
    For example, it might be blocked by a permission policy.

## Description

`getClientCapabilities()` allows you to check if a given capability or extension is supported, and use the information to offer an appropriate user experience.

For example, support for the `userVerifyingPlatformAuthenticator` capability indicates that biometrics such as a fingerprint sensor are allowed.
A web application could use this to display a fingerprint icon if the capability is supported, or a password input if it is not.
If biometric login is required, then it could instead provide notification that the site cannot authenticate using this browser or device.
Similarly, `conditionalGet` indicates that the client supports conditional mediation when signing in a user, which means the browser can provide auto-filled discoverable credentials in a login form (for example an autocompleting text field or a drop-down list), along with a sign-in button.

If the value of a given capability is present in the returned object, then `true` indicates that the capability is currently supported, and `false` indicates that it is not.
However, if a key is not present for a particular capability, no assumptions can be made about the availability of the associated feature.

For an extension the assumptions are the same.
Note though, that even if the extension is supported by the client a particular authenticator may not support that extension, so RPs must not assume that this is a guarantee that the authenticator processing steps for that extension will be performed.
If the key is not present for an extension, an RP can't assume that the client processing steps for that extension will be carried out by this client, or that the extension will be forwarded to the authenticator.

## Examples

### Check all capabilities

This example shows how to get the capabilities object and iterate its values.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css hidden
#log {
  height: 230px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

First we await `getClientCapabilities()` to get an object containing the capabilities.
We then iterate the object and log the result (logging code not shown):

```js
async function checkClientCapabilities() {
  const capabilities = await PublicKeyCredential.getClientCapabilities();

  if (capabilities) {
    log("Client Capabilities:");

    for (const [key, value] of Object.entries(capabilities)) {
      log(` ${key}: ${value}`);
    }
  }
}
```

Before calling the function we check that it is defined, and log the result.

```js
// Call the function to check capabilities.
if (PublicKeyCredential.getClientCapabilities) {
  checkClientCapabilities();
} else {
  log(
    "PublicKeyCredential.getClientCapabilities() is not supported on this browser.",
  );
}
```

#### Result

{{EmbedLiveSample("Check all capabilities", "", "280")}}

### Test for user verifying platform authenticator

This example checks a single capability, `userVerifyingPlatformAuthenticator`. A real application might use the result to configure the user interface.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css hidden
#log {
  height: 40px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

The code is similar to the previous example, except that we check a particular returned capability, and we use `try...catch` to catch the case where `getClientCapabilities()` is not supported.

```js
checkisUserVerifyingPlatformAuthenticatorAvailable();

async function checkisUserVerifyingPlatformAuthenticatorAvailable() {
  try {
    const capabilities = await PublicKeyCredential.getClientCapabilities();

    if (capabilities.userVerifyingPlatformAuthenticator) {
      log("Biometric login supported");
    } else {
      log("Biometric login not supported. Do password.");
    }
  } catch (error) {
    if (error instanceof TypeError) {
      log(
        "PublicKeyCredential.getClientCapabilities() is not supported on this browser.",
      );
    } else {
      log(`Unexpected error: ${error}`);
    }
  }
}
```

Note that here we log the result of a check.
In a real application we might update the user interface to show appropriate options for verifying the user.

#### Result

The log below displays either a string indicating the method is not supported, or one that indicates whether biometric or password login is supported.

{{EmbedLiveSample("Test for user verifying platform authenticator", "", "90")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API)
