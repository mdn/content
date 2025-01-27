---
title: "PublicKeyCredential: getClientCapabilities() static method"
short-title: getClientCapabilities()
slug: Web/API/PublicKeyCredential/getClientCapabilities_static
page-type: web-api-static-method
browser-compat: api.PublicKeyCredential.getClientCapabilities_static
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`getClientCapabilities()`** static method of the {{domxref("PublicKeyCredential")}} interface returns a {{jsxref("Promise")}} that resolves with an object that can be used to check whether or not particular WebAuthn client capabilities and [extensions](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) are supported.

A web application can use the information to appropriately customize the user interface and workflows.

## Syntax

```js-nolint
PublicKeyCredential.getClientCapabilities()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to an object where the property names are the client capability strings, and the values are boolean values that indicate whether or not the corresponding capability or extension is supported.

The WebAuthn client capability strings are:

- `conditionalCreate`
  - : The client is capable of conditional mediation when creating/registering credentials.
- `conditionalGet`
  - : The client is capable of conditional mediation when authenticating credentials (using [`mediation=conditional`](/en-US/docs/Web/API/CredentialsContainer/get#conditional) in your [`get()`](/en-US/docs/Web/API/CredentialsContainer/get) call).
    This capability is equivalent to [`isConditionalMediationAvailable()`](/en-US/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static) resolving to `true`.
- `hybridTransport`
  - : The client supports usage of the [hybrid](/en-US/docs/Web/API/AuthenticatorAttestationResponse/getTransports#hybrid) transport.
- `passkeyPlatformAuthenticator`
  - : The client supports usage of a passkey platform authenticator, locally and/or via hybrid transport.
    These authenticators enable passwordless multi-factor authentication, providing proof of possession of a credential private key provide and requiring a second authentication mechanism such as a PIN or biometric check.
- `userVerifyingPlatformAuthenticator`
  - : The client supports usage of a user-verifying platform authenticator.
    These require user input for authorization.
- `relatedOrigins`
  - : The client supports [Related Origin Requests](https://web.dev/articles/webauthn-related-origin-requests).
    These clients allow a passkey to be used across multiple sites that have the same origin.
- `signalAllAcceptedCredentials`
  - : The client supports the [`PublicKeyCredential.signalAllAcceptedCredentials()`](/en-US/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static) static method.
- `signalCurrentUserDetails`
  - : The client supports the [`PublicKeyCredential.signalCurrentUserDetails()`](/en-US/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static) static method.
- `signalUnknownCredential`
  - : The client supports the [`PublicKeyCredential.signalUnknownCredential()`](/en-US/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static) static method.

The [web extension](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) strings are formatted by prefixing the [extension identifier](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#available_extensions) with the prefix `extension:`.
For example, the key `extension.appid` can be used to check if the [`appid` extension](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#appid) is supported.

### Exceptions

The returned {{jsxref("Promise")}} may be rejected with the following values:

- `NotAllowedError` {{domxref("DOMException")}}
  - : The Web Authentication API is not allowed in the current browsing context.
    For example, it might be blocked by a permission policy.

## Description

The method allows you to check if a given capability or extension is supported, and use the information offer an appropriate user experience.
For example, support for the `userVerifyingPlatformAuthenticator` capability indicates that biometrics such as a fingerprint sensor are allowed.
A web application could use this to display a fingerprint icon if the capability is supported, or a password input if it is not.
If biometric login is required, then it could instead provide notification that the site cannot authenticate using this browser or device.

If the value of a given capability is present in the map, then `true` indicates that the capability is currently supported, and `false` indicates that it is not.
However if a key is not present for a particular capability, no assumptions can be made about the availability of the associated feature.

For an extension the assumptions are the same, but note that generally if an extension is implemented the value will be `true`.
Note though, that even if the extension is supported by the client a particular authenticator may not support that extension, so RPs must not assume that this is a guarantee that the authenticator processing steps for that extension will be performed.
If the key is not present for an extension then a Relying Party (RP) can't assume that client processing steps for that extension will be carried out by this client or that the extension will be forwarded to the authenticator.

## Examples

### Check all capabilities

This example shows how iterate get the capabilities object and iterates its values.

```html hidden
<pre id="log"></pre>
<button id="reset" type="button">Reset</button>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}

const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

```css hidden
#log {
  height: 250px;
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
if (typeof PublicKeyCredential.getClientCapabilities === "function") {
  checkClientCapabilities();
} else {
  log(
    "PublicKeyCredential.getClientCapabilities() is not supported on this browser.",
  );
}
```

#### Result

{{EmbedLiveSample("Check all capabilities", "", "370")}}

### Test for user verifying platform authenticator

This example checks a single capability `userVerifyingPlatformAuthenticator`, and might then use the result to configure the user interface.

```html hidden
<pre id="log"></pre>
<button id="reset" type="button">Reset</button>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}

const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

```css hidden
#log {
  height: 130px;
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

{{EmbedLiveSample("Test for user verifying platform authenticator", "", "200")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API)
