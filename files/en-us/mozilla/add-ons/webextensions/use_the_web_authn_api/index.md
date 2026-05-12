---
title: Use Web Authn API in web extensions
slug: Mozilla/Add-ons/WebExtensions/Use_the_web_authn_api
page-type: guide
sidebar: addonsidebar
---

The [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) (WebAuthn) is a web standard that enables strong, phishing-resistant authentication using public-key cryptography. Instead of relying on passwords, WebAuthn enables users to authenticate with hardware security keys (e.g., YubiKeys), platform authenticators (e.g., fingerprint sensors, Face ID, Windows Hello), or passkeys synced across devices.

When a user registers with a website, the browser generates a public/private key pair bound to a Relying Party ID (RP ID). This ID is typically the site's domain. During authentication, the server challenges the user's authenticator, which signs the challenge with the private key, proving the user's identity without transmitting a shared secret.

## Common use cases

- Passwordless login on websites and apps: Users authenticate with a biometric or security key tap, eliminating the need for passwords.
- Two-factor authentication (2FA): WebAuthn serves as a strong second factor alongside a password, replacing SMS or TOTP codes.
- Passkey-based account recovery: Synced passkeys allow users to regain access across devices without fallback to less secure methods.
- Enterprise and government applications: Organizations use WebAuthn to enforce hardware-backed authentication for sensitive systems.

## WebAuthn in web extensions

Starting with Firefox 150 and Chrome 122, browser extensions can use the WebAuthn API and specify an RP ID for domains specified in the extension's [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions).

Ordinarily, the [`rp`](/en-US/docs/Web/API/PublicKeyCredentialCreationOptions#rp) ID passed to {{domxref("CredentialsContainer.create()", "navigator.credentials.create()")}} and [`rpId`](/en-US/docs/Web/API/PublicKeyCredentialRequestOptions#rpid) passed to {{domxref("CredentialsContainer.get()", "navigator.credentials.get()")}} in their `publicKey` object must match the calling page's domain (or a parent domain). The methods reject calls from other origins. However, a web extension can call these APIs and specify an RP ID for any domain covered by its host permissions.

This mechanism enables extensions to act as WebAuthn clients on behalf of web services, creating and retrieving credentials tied to those services' domains.

### Extension origin and server-side validation

When an app, web page, or extension creates a WebAuthn credential, the relying party server is expected to validate the credential response, including the `origin` field in `clientDataJSON`. On regular web pages, the origin is the site's domain (e.g., `https://example.com`). In extensions, the origin takes a browser-specific form:

| Browser | Origin format             | Example                                                                            |
| ------- | ------------------------- | ---------------------------------------------------------------------------------- |
| Chrome  | `chrome-extension://<id>` | `chrome-extension://mabekielmoibbmlepeohhncklpnjmcpk`                              |
| Firefox | `moz-extension://<hash>`  | `moz-extension://ngpncaopklanhjklijieoihgbhbgknjjdklmlpagjoaobbpmknfgmhgghbadgoai` |

The Firefox extension origin for WebAuthn is a SHA-256 hash of the extension ID, with each byte encoded by adding 97 to its value, producing lowercase characters `a` through `p`. This origin is stable and deterministic. It's the same for all users of an extension, unlike the random `moz-extension://uuid` URLs used normally. This deterministic extension origin enables relying party servers to allowlist the extension.

You can extract the origin from a credential response on any browser like this:

```js
let clientData = JSON.parse(
  new TextDecoder().decode(publicKeyCredential.response.clientDataJSON),
);
console.log(clientData.origin);
// Chrome:  chrome-extension://mabekielmoibbmlepeohhncklpnjmcpk
// Firefox: moz-extension://ngpncaopklanhjklijieoihgbhbgknjjdklmlpagjoaobbpmknfgmhgghbadgoai
```

## Setting up WebAuthn in a web extension

This guide walks through building an extension that creates and retrieves WebAuthn credentials. It does this by enabling your extension to supply the JSON that defines the RP ID from a domain the extension has host permission for.

### Configure the manifest

In your extension's `manifest.json` file, declare `host_permissions` for the domain or domains whose RP ID you want to use. This setting grants the extension permission to run content scripts on those domains, which is the prerequisite for asserting the domain as an RP ID.

```json
{
  "manifest_version": 3,
  "name": "WebAuthn Extension",
  "version": "1.0",
  "description": "Registers and authenticates WebAuthn credentials.",
  "action": {
    "default_popup": "popup.html"
  },
  "host_permissions": ["https://*/*"]
}
```

> [!NOTE]
> The broad `"https://*/*"` pattern grants access to all HTTPS domains. For your extension, set this to the domains it needs (e.g., `"https://example.com/*"`).
> This example uses an extension popup. However, due to a known issue, the flow does not work as the popup closes when the prompt for credentials appears. A workaround is to open the page in a new tab. See [Firefox bug 2026687](https://bugzil.la/2026687).

### Collect WebAuthn options

Add a mechanism to enter the registration JSON. In this case, a pop-up; you could also use an extension page. This example uses a simple `popup.html` with a `textarea` for the JSON input and two buttons: one for registration and one for authentication.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>WebAuthn Extension</title>
  </head>
  <body>
    <h1>WebAuthn</h1>
    <textarea id="optionsText" placeholder="Enter options JSON here"></textarea>
    <button id="registerButton">Register (navigator.credentials.create)</button>
    <button id="authButton">Authenticate (navigator.credentials.get)</button>
    <script src="popup.js"></script>
  </body>
</html>
```

### Register the credentials

In your extension script, parse the options JSON and call `navigator.credentials.create()` with `publicKey` in the {{domxref("PublicKeyCredential")}} format. The key detail is that you set `rp.id` to a domain covered by your extension's host permissions, even though your extension is not running on that domain.

Binary fields, such as `challenge` and `user.id`, must be passed as typed arrays or `ArrayBuffer` instances. If your JSON input uses base64-encoded strings, the {{jsxref("Uint8Array.fromBase64")}} method can be used to convert them.

You can then add code to register the credentials:

```js
// Registration
async function register(optionsJSON) {
  const options = JSON.parse(optionsJSON);
  options.challenge = Uint8Array.fromBase64(options.challenge);
  options.user.id = Uint8Array.fromBase64(options.user.id);
  const credential = await navigator.credentials.create({ publicKey: options });
  console.log("Credential created:", credential);
  return credential;
}
```

The JSON you use to perform the registration, with `rp.id` set to an external domain, looks something like this:

```json
{
  "rp": {
    "name": "Example Corp",
    "id": "example.com"
  },
  "user": {
    "id": "dXNlcjEyMw==",
    "name": "user@example.com",
    "displayName": "Example User"
  },
  "challenge": "cmFuZG9tQ2hhbGxlbmdl",
  "pubKeyCredParams": [{ "type": "public-key", "alg": -7 }]
}
```

### Authenticate the credential

To authenticate the credentials, call `navigator.credentials.get()` with the `rpId` in the JSON set to the target domain. Again, you need to convert binary fields, such as `challenge`, from the base64-encoded string as used in the example, to `Uint8Array` instances before asserting:

```js
async function authenticate(optionsJSON) {
  const options = JSON.parse(optionsJSON);
  options.challenge = Uint8Array.fromBase64(options.challenge);
  if (Array.isArray(options?.allowCredentials)) {
    for (const ac of options.allowCredentials) {
      ac.id = Uint8Array.fromBase64(ac.id);
    }
  }
  const assertion = await navigator.credentials.get({ publicKey: options });

  const clientDataJSON = new TextDecoder().decode(
    assertion.response.clientDataJSON,
  );
  console.log("Client data:", clientDataJSON);
  // The origin field in clientDataJSON will be the extension's origin
  // (chrome-extension://... or moz-extension://...)

  return assertion;
}
```

The JSON you use to perform the assertion, with `rpId` set to an external domain, looks something like this:

```json
{
  "rpId": "example.com",
  "challenge": "YXV0aENoYWxsZW5nZQ==",
  "allowCredentials": [
    {
      "type": "public-key",
      "id": "Y3JlZGVudGlhbElk"
    }
  ]
}
```

### Server-side considerations

When your relying party server validates a WebAuthn response originating from an extension, it must accept the **extension origin** in addition to regular web origins. Parse `clientDataJSON` and check the `origin` field:

- For Chrome extensions: `chrome-extension://<extension-id>`
- For Firefox extensions: `moz-extension://<sha256-hash>` (using the `a`–`p` encoding described in [Extension origin and server-side validation](#extension_origin_and_server-side_validation)).

Your server's origin allowlist must include these values for end-to-end authentication.
