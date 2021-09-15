---
title: PublicKeyCredentialCreationOptions
slug: Web/API/PublicKeyCredentialCreationOptions
tags:
  - API
  - Dictionary
  - PublicKeyCredentialCreationOptions
  - Reference
  - Web Authentication API
  - WebAuthn
browser-compat: api.PublicKeyCredentialCreationOptions
---
{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`PublicKeyCredentialCreationOptions`** dictionary of the [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) holds options passed to {{domxref("CredentialsContainer.create()","navigators.credentials.create()")}} in order to create a {{domxref("PublicKeyCredential")}}.

## Properties

- {{domxref("PublicKeyCredentialCreationOptions.rp")}}
  - : An object describing the relying party which requested the credential creation.
- {{domxref("PublicKeyCredentialCreationOptions.user")}}
  - : An object describing the user account for which the credential is generated.
- {{domxref("PublicKeyCredentialCreationOptions.challenge")}}
  - : A {{domxref("BufferSource")}}, emitted by the relying party's server and used as a [cryptographic challenge](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication). This value will be signed by the authenticator and the signature will be sent back as part of {{domxref("AuthenticatorAttestationResponse.attestationObject")}}.
- {{domxref("PublicKeyCredentialCreationOptions.pubKeyCredParams")}}
  - : An {{jsxref("Array")}} of element which specify the desired features of the credential, including its type and the algorithm used for the cryptographic signature operations. This array is sorted by descending order of preference.
- {{domxref("PublicKeyCredentialCreationOptions.timeout")}} {{optional_inline}}
  - : A numerical hint, in milliseconds, which indicates the time the caller is willing to wait for the creation operation to complete. This hint may be overridden by the browser.
- {{domxref("PublicKeyCredentialCreationOptions.excludeCredentials")}} {{optional_inline}}
  - : An {{jsxref("Array")}} of descriptors for existing credentials. This is provided by the relying party to avoid creating new public key credentials for an existing user who already have some.
- {{domxref("PublicKeyCredentialCreationOptions.authenticatorSelection")}} {{optional_inline}}
  - : An object whose properties are criteria used to filter out the potential authenticators for the creation operation.
- {{domxref("PublicKeyCredentialCreationOptions.attestation")}} {{optional_inline}}
  - : A {{jsxref("String")}} which indicates how the attestation (for the authenticator's origin) should be transported.
- {{domxref("PublicKeyCredentialCreationOptions.extensions")}} {{optional_inline}}
  - : An object with several client extensions' inputs. Those extensions are used to request additional processing (e.g. dealing with legacy FIDO APIs credentials, prompting a specific text on the authenticator, etc.).

## Methods

None.

## Examples

```js
// some examples of COSE algorithms
const cose_alg_ECDSA_w_SHA256 = -7;
const cose_alg_ECDSA_w_SHA512 = -36;

var createCredentialOptions = {
    // Format of new credentials is publicKey
    publicKey: {
        // Relying Party
        rp: {
            name: "Example CORP",
            id: "login.example.com",
            icon: "https://login.example.com/login.ico"
        },
        // Cryptographic challenge from the server
        challenge: new Uint8Array(26),
        // User
        user: {
            id: new Uint8Array(16),
            name: "john.p.smith@example.com",
            displayName: "John P. Smith",
        },
        // Requested format of new keypair
        pubKeyCredParams: [{
            type: "public-key",
            alg: cose_alg_ECDSA_w_SHA256,
        }],
        // Timeout after 1 minute
        timeout: 60000,
        // Do not send the authenticator's origin attestation
        attestation: "none",
        extensions: {
          uvm: true,
          exts: true
        },
        // Filter out authenticators which are bound to the device
        authenticatorSelection:{
          authenticatorAttachment: "cross-platform",
          requireResidentKey: true,
          userVerification: "preferred"
        },
        // Exclude already existing credentials for the user
        excludeCredentials: [
          {
            type: "public-key",
            // the id for john.doe@example.com
            id  : new Uint8Array(26) /* this actually is given by the server */
          },
          {
            type: "public-key",
            // the id for john-doe@example.com
            id : new Uint8Array(26) /* another id */
          }
        ]
    }
};

// Create the new credential with the options above
navigator.credentials.create(createCredentialOptions)
  .then(function (newCredentialInfo) {
    var attestationResponse = newCredentialInfo.response;
    var clientExtensionsOutputs = newCredentialInfo.getClientExtensionsResults();

    // Send the response to the relying party server
    // it will verify the content and integrity before
    // creating a new credential

  }).catch(function (err) {
    // Deal with any error properly
    console.error(err);
  });;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PublicKeyRequestOptions")}}: the dictionary which provides option for the public key retrieval operation
