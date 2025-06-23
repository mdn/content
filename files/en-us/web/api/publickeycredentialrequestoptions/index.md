---
title: PublicKeyCredentialRequestOptions
slug: Web/API/PublicKeyCredentialRequestOptions
page-type: web-api-interface
spec-urls: https://w3c.github.io/webauthn/#dictdef-publickeycredentialrequestoptions
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`PublicKeyCredentialRequestOptions`** dictionary represents the object passed to {{domxref("CredentialsContainer.get()")}} as the value of the `publicKey` option.

It is used to request a {{domxref("PublicKeyCredential")}} provided by an {{glossary("authenticator")}} that supports the [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API).

## Instance properties

- `allowCredentials` {{optional_inline}}

  - : An array of objects used to restrict the list of acceptable credentials. An empty array indicates that any credential is acceptable.

    Each object in the array will contain the following properties:

    - `id`

      - : An {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, or {{jsxref("DataView")}} representing the ID of the public key credential to retrieve. This value is mirrored by the {{domxref("PublicKeyCredential.rawId", "rawId")}} property of the {{domxref("PublicKeyCredential")}} object returned by a successful `get()` call.

    - `transports`

      - : An array of strings providing hints as to the methods the client could use to communicate with the relevant authenticator of the public key credential to retrieve. Possible transports are: `"ble"`, `"hybrid"`, `"internal"`, `"nfc"`, and `"usb"`.

        > [!NOTE]
        > This value is mirrored by the return value of the {{domxref("AuthenticatorAttestationResponse.getTransports", "PublicKeyCredential.response.getTransports()")}} method of the {{domxref("PublicKeyCredential")}} object returned by the `create()` call that originally created the credential.
        > At that point, it should be stored by the app for later use.

    - `type`

      - : A string defining the type of the public key credential to retrieve. This can currently take a single value, `"public-key"`, but more values may be added in the future. This value is mirrored by the {{domxref("Credential.type", "type")}} property of the {{domxref("PublicKeyCredential")}} object returned by a successful `get()` call.

    This value defaults to an empty array.

- `challenge`

  - : An {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, or {{jsxref("DataView")}} originating from the relying party's server and used as a [cryptographic challenge](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication). This value will be signed by the authenticator and the signature will be sent back as part of the {{domxref("AuthenticatorAssertionResponse.signature")}} (available in the {{domxref("PublicKeyCredential.response", "response")}} property of the {{domxref("PublicKeyCredential")}} object returned by a successful `get()` call).

- `extensions` {{optional_inline}}

  - : An object containing properties representing the input values for any requested extensions. These extensions are used to specific additional processing by the client or authenticator during the authentication process. Examples include dealing with legacy FIDO API credentials, and evaluating outputs from a pseudo-random function (PRF) associated with a credential.

    Extensions are optional and different browsers may recognize different extensions. Processing extensions is always optional for the client: if a browser does not recognize a given extension, it will just ignore it. For information on using extensions, and which ones are supported by which browsers, see [Web Authentication extensions](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

- `hints` {{optional_inline}}

  - : An array of strings providing hints as to what authentication UI the user-agent should provide for the user.

    The values can be any of the following:

    - `"security-key"`
      - : Authentication requires a separate dedicated physical device to provide the key.
    - `"client-device"`
      - : The user authenticates using their own device, such as a phone.
    - `"hybrid"`
      - : Authentication relies on a combination of authorization/authentication methods, potentially relying on both user and server-based mechanisms.

- `rpId` {{optional_inline}}

  - : A string that specifies the relying party's identifier (for example `"login.example.org"`). For security purposes:

    - The calling web app verifies that `rpId` matches the relying party's origin.
    - The authenticator verifies that `rpId` matches the `rpId` of the credential used for the authentication ceremony.

    This value defaults to the current origin's domain.

- `timeout` {{optional_inline}}

  - : A numerical hint, in milliseconds, indicating the time the relying party is willing to wait for the retrieval operation to complete. This hint may be overridden by the browser.

- `userVerification` {{optional_inline}}

  - : A string specifying the relying party's requirements for user verification of the authentication process. This verification is initiated by the authenticator, which will request the user to provide an available factor (for example a PIN or a biometric input of some kind).

    The value can be one of the following:

    - `"required"`
      - : The relying party requires user verification, and the operation will fail if it does not occur.
    - `"preferred"`
      - : The relying party prefers user verification if possible, but the operation will not fail if it does not occur.
    - `"discouraged"`
      - : The relying party does not want user verification, in the interests of making user interaction as smooth as possible.

    This value defaults to `"preferred"`.

## Specifications

{{Specifications}}
