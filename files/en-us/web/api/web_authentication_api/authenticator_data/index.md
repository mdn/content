---
title: Authenticator data
slug: Web/API/Web_Authentication_API/Authenticator_data
page-type: guide
---

{{DefaultAPISidebar("Web Authentication API")}}

The authenticator data structure contains information from the authenticator about the processing of a credential creation or authentication request — such as the Relying Party ID Hash (`rpIdHash`), a signature counter, test of user presence, user verification flags, and any extensions processed by the authenticator. This page explains what is contained in the data structure.

## Accessing authenticator data

Authenticator data is made available to the browser as an {{jsxref("ArrayBuffer")}}, and can be accessed in multiple ways. The two most convenient are:

- In the {{domxref("AuthenticatorAssertionResponse.authenticatorData", "PublicKeyCredential.response.authenticatorData")}} property made available on the {{domxref("PublicKeyCredential")}} returned from a successful {{domxref("CredentialsContainer.create", "navigator.credentials.create()")}} (credential creation) call.
- Via the {{domxref("AuthenticatorAttestationResponse.getAuthenticatorData", "PublicKeyCredential.response.getAuthenticatorData()")}} method made available on the {{domxref("PublicKeyCredential")}} returned from a successful {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} (authentication) call.

## Data structure

An authenticator data {{jsxref("ArrayBuffer")}} is at least 37 bytes in length, and contains the following fields:

- **rpIdHash** (32 bytes)
  - : The SHA-256 hash of the [Relying Party ID](https://w3c.github.io/webauthn/#relying-party-identifier) that the credential is scoped to. The server will ensure that this hash matches the SHA256 hash of its own relying party ID in order to prevent phishing or other man-in-the-middle attacks.
- **flags** (1 bytes)

  - : A bitfield that indicates various attributes that were asserted by the authenticator. The bits are as follows, where Bit 0 is the least significant bit and all bits not specifically mentioned below are "reserved for future use":

    - Bit 0, User Presence (UP): If set (i.e., to `1`), the authenticator validated that the user was present through some Test of User Presence (TUP), such as touching a button on the authenticator.
    - Bit 2, User Verification (UV): If set, the authenticator verified the actual user through a biometric, PIN, or other method.
    - Bit 3, Backup Eligibility (BE): If set, the public key credential source used by the authenticator to generate an assertion is backup-eligible. This means that it can be backed up in some fashion (for example via cloud or local network sync) and as such may become present on an authenticator other than its generating authenticator. Backup-eligible credential sources are therefore also known as multi-device credentials.
    - Bit 4, Backup State (BS): If set, the public key credential source is currently backed up (see Bit 3 for context).
    - Bit 6, Attested Credential Data (AT): If set, the attested credential data will immediately follow the first 37 bytes of this `authenticatorData`.
    - Bit 7, Extension Data (ED): If set, extension data is present. Extension data will follow attested credential data if it is present, or will immediately follow the first 37 bytes of the `authenticatorData` if no attested credential data is present.

- **signCount** (4 bytes)
  - : A signature counter, if supported by the authenticator (set to 0 otherwise). Servers may optionally use this counter to detect authenticator cloning.
- **attestedCredentialData** (variable length)

  - : The credential that was created. This is only present during a {{domxref("CredentialsContainer.create", "navigator.credentials.create()")}} call. This is a sequence of bytes with the following format:

    - **AAGUID** (16 bytes): The Authenticator Attestation Globally Unique Identifier, a unique number that identifies the model of the authenticator (not the specific instance of the authenticator). A relying party can use this to find out the characteristics of the authenticator by looking up its metadata statement via the [FIDO metadata service](https://fidoalliance.org/metadata/). This is relevant in certain situations such as enterprise deployments or where regulatory requirements dictate a certain type of authenticator be used; it should be ignored otherwise.

    - **_credentialIdLength_** (2 bytes): The length of the credential ID that immediately follows these bytes.
    - **_credentialId_** (variable length): A unique identifier for this credential so that it can be requested for future authentications. The credential is "_credentialIdLength_" bytes long.
    - **credentialPublicKey** (variable length): A [COSE](https://datatracker.ietf.org/doc/html/rfc8152)-encoded public key. This public key will be stored on the server associated with a user's account and be used for future authentications. Relying parties can retrieve the DER-encoded form of it without parsing the COSE-encoded authenticator data via the {{domxref("AuthenticatorAttestationResponse.getPublicKey()")}} method.

- **extensions** (variable length)

  - : An optional [CBOR](https://datatracker.ietf.org/doc/html/rfc7049) map containing the response outputs from extensions processed by the authenticator

    Extensions are optional and different browsers may recognize different extensions. Processing extensions is always optional for the browser: if a browser does not recognize a given extension, it will just ignore it. For information on using extensions, and which ones are supported by which browsers, see [Web Authentication extensions](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

    > [!NOTE]
    > The authenticator data only contains the results from extensions processed by the authenticator. The results from extensions processed by the browser (client) can be accessed via {{domxref("PublicKeyCredential.getClientExtensionResults")}}.

## See also

[Authenticator data definition in the WebAuthn specification](https://w3c.github.io/webauthn/#sctn-authenticator-data)
