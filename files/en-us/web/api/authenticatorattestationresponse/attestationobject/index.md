---
title: "AuthenticatorAttestationResponse: attestationObject property"
short-title: attestationObject
slug: Web/API/AuthenticatorAttestationResponse/attestationObject
page-type: web-api-instance-property
browser-compat: api.AuthenticatorAttestationResponse.attestationObject
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`attestationObject`** property of the
{{domxref("AuthenticatorAttestationResponse")}} interface returns an
{{jsxref("ArrayBuffer")}} containing the new public key, as well as signature over the
entire `attestationObject` with a private key that is stored in the
authenticator when it is manufactured.

As part of the {{domxref("CredentialsContainer.create()")}} call, an authenticator will
create a new key pair as well as an `attestationObject` for that key pair. The public key
that corresponds to the private key that has created the attestation signature is well
known; however, there are various well known attestation public key chains for different
ecosystems (for example, Android or TPM attestations).

## Value

After decoding the [CBOR](https://datatracker.ietf.org/doc/html/rfc8949) encoded
`ArrayBuffer`, the resulting JavaScript object will contain the following
properties:

- `authData`

  - : The [Authenticator data](/en-US/docs/Web/API/Web_Authentication_API/Authenticator_data) for the operation. Note that in {{domxref("AuthenticatorAssertionResponse")}}, the `authenticatorData` is exposed as a property in a JavaScript object (see {{domxref("AuthenticatorAssertionResponse.authenticatorData")}}) while in {{domxref("AuthenticatorAttestationResponse")}}, the `authenticatorData` is a property in a [CBOR](https://datatracker.ietf.org/doc/html/rfc8949) map.

    The same {{domxref("AuthenticatorAssertionResponse.authenticatorData")}} field is used by both `AuthenticatorAttestationResponse` and by `AuthenticatorAssertionResponse`. When used in attestation, it contains an optional field, `attestedCredentialData`. This field is not included when used in the `AuthenticatorAssertionResponse`. The attestedCredentialData field contains the `credentialId` and `credentialPublicKey`.

- `fmt`

  - : A text string that indicates the format of the attStmt. The [WebAuthn specification defines a number of formats](https://www.w3.org/TR/webauthn/#defined-attestation-formats); however, formats may also be defined
    in other specifications and registered in an [IANA registry](https://www.w3.org/TR/webauthn/#sctn-att-fmt-reg). Formats
    defined by WebAuthn are:

    - `"packed"`
    - `"tpm"`
    - `"android-key"`
    - `"android-safetynet"`
    - `"fido-u2f"`
    - `"none"`

- `attStmt`
  - : An attestation statement that is of the format defined by `"fmt"`. For
    now, [see the WebAuthn specification for details on each format](https://www.w3.org/TR/webauthn/#defined-attestation-formats).

## Examples

See [Creating a public key credential using the WebAuthn API](/en-US/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential_using_the_webauthn_api) for a detailed example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CredentialsContainer.create()")}}: the method used to create a statement with
  a cryptographic `challenge` which signature by the authenticator is contained in `attStmt`,
  with the specified `attestation` transport option.
