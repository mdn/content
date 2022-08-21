---
title: PublicKeyCredentialRequestOptions
slug: Web/API/PublicKeyCredentialRequestOptions
page-type: web-api-interface
tags:
  - API
  - Dictionary
  - PublicKeyCredentialRequestOptions
  - Reference
  - Web Authentication API
  - WebAuthn
browser-compat: api.PublicKeyCredentialRequestOptions
---
{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`PublicKeyCredentialRequestOptions`** dictionary of the [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) holds the options passed to {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}} in order to fetch a given {{domxref("PublicKeyCredential")}}.

## Properties

- {{domxref("PublicKeyCredentialRequestOptions.challenge")}}
  - : An {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}}, emitted by the relying party's server and used as a [cryptographic challenge](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication). This value will be signed by the authenticator and the signature will be sent back as part of {{domxref("AuthenticatorAssertionResponse.signature")}}.
- {{domxref("PublicKeyCredentialRequestOptions.timeout")}} {{optional_inline}}
  - : A numerical hint, in milliseconds, which indicates the time the caller is willing to wait for the retrieval operation to complete. This hint may be overridden by the browser.
- {{domxref("PublicKeyCredentialRequestOptions.rpId")}} {{optional_inline}}
  - : A string which indicates the relying party's identifier (ex. `"login.example.org"`). If this option is not provided, the client will use the current origin's domain.
- {{domxref("PublicKeyCredentialRequestOptions.allowCredentials")}} {{optional_inline}}
  - : An {{jsxref("Array")}} of credentials descriptor which restricts the acceptable existing credentials for retrieval.
- {{domxref("PublicKeyCredentialRequestOptions.userVerification")}} {{optional_inline}}
  - : A string qualifying how the user verification should be part of the authentication process.
- {{domxref("PublicKeyCredentialRequestOptions.extensions")}} {{optional_inline}}
  - : An object with several client extensions' inputs. Those extensions are used to request additional processing (e.g. dealing with legacy FIDO APIs credentials, prompting a specific text on the authenticator, etc.).

## Methods

None.

## Examples

```js
const options = {
  challenge: new Uint8Array([/* bytes sent from the server */]),
  rpId: "example.com", /* will only work if the current domain
                         is something like foo.example.com */
  userVerification: "preferred",
  timeout: 60000,     // Wait for a minute
  allowCredentials: [
    {
      transports: "usb",
      type: "public-key",
      id: new Uint8Array(26) // actually provided by the server
    },
    {
      transports: "internal",
      type: "public-key",
      id: new Uint8Array(26) // actually provided by the server
    }
  ],
  extensions: {
    uvm: true,  // RP wants to know how the user was verified
    loc: false,
    txAuthSimple: "Could you please verify yourself?"
  }
};

navigator.credentials.get({ "publicKey": options })
    .then((credentialInfoAssertion) => {
    // send assertion response back to the server
    // to proceed with the control of the credential
}).catch((err) => {
     console.error(err);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PublicKeyCredentialCreationOptions")}}: the dictionary which provides option for the public key credential creation
