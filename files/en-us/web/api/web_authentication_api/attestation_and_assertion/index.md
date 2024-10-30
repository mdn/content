---
title: Attestation and Assertion
slug: Web/API/Web_Authentication_API/Attestation_and_Assertion
page-type: guide
---

{{DefaultAPISidebar("Web Authentication API")}}

There are two different types of certificates used in WebAuthn for registration and authentication. They have similar names and similar purposes, but understanding the differences may be an initial point of confusion. The sections below describe attestation, which happens during registration, and assertion which happens during authentication.

## Attestation

When an authenticator registers a new key pair with a service, the authenticator signs the public key with an attestation certificate. The attestation certificate is built into the authenticator during manufacturing time and is specific to a device model. That is, all "Samsung Galaxy S8" phones, manufactured at a specific time or particular manufacturing run, have the same attestation certificate.

The attestation is returned through the WebAuthn API as the [AuthenticatorAttestationResponse](/en-US/docs/Web/API/AuthenticatorAttestationResponse). The attestation format contains two basic {{jsxref("ArrayBuffer")}} objects:

- **clientDataJSON** - An ArrayBuffer that contains a JSON representation of what the browser saw when being asked to authenticate.
- [attestationObject](/en-US/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) - Cryptographic attestation that a newly generated key pair was created by that authenticator. This contains:
  - [Authenticator data](/en-US/docs/Web/API/Web_Authentication_API/Authenticator_data) containing an `attestedCredentialData` field, which in turn contains the `credentialId` and `credentialPublicKey`. The `attestedCredentialData` is an optional field used in attestation. It is not included when used in the AuthenticatorAssertionResponse.
  - An attestation statement, which is optionally present depending on whether the relying party requests attestation. In general, relying parties aren't encouraged to request attestation, so it's more likely that this statement won't be present.

Different devices have different attestation formats. The [pre-defined attestation formats in WebAuthn](https://www.w3.org/TR/webauthn/#defined-attestation-formats) are:

- **Packed** - a generic attestation format that is commonly used by devices whose sole function is as a WebAuthn authenticator, such as security keys.
- **TPM** - the Trusted Platform Module (TPM) is a set of specifications from the Trusted Platform Group (TPG). This attestation format is commonly found in desktop computers and is used by Windows Hello as its preferred attestation format.
- **Android Key Attestation** - one of the features added in Android O was Android Key Attestation, which enables the Android operating system to attest to keys.
- **Android SafetyNet** -prior to Android Key Attestation, the only option for Android devices was to create Android SafetyNet attestations.
- **FIDO U2F** - security keys that implement the FIDO U2F standard use this format.
- **none** - browsers may prompt users whether they want a site to be allowed to see their attestation data and/or may remove attestation data from the authenticator's response if the `attestation` parameter in `navigator.credentials.create()` is set to `none`.

The purpose of attestation is to cryptographically prove that a newly generated key pair came from a specific device. This provides a root of trust for a newly generated key pair as well as being able to identify the attributes of a device being used (how the private key is protected; if / what kind of biometric is being used; whether a device has been certified; etc.). It should be noted that while attestation provides the capability for a root of trust, validating the root of trust is frequently not necessary. When registering an authenticator for a new account, typically a Trust On First Use (TOFU) model applies; and when adding an authenticator to an existing account, a user has already been authenticated and has established a secure session.

## Assertion

When a user chooses to log into a service, the server sends a challenge and the authenticator signs over it with a key pair previously registered to that service. This creates an assertion. Unlike the attestation, the format of the assertion is always the same regardless of the device being used.

The assertion is returned through the WebAuthn API as the [AuthenticatorAssertionResponse](/en-US/docs/Web/API/AuthenticatorAssertionResponse). The assertion format is fairly simple as it contains four basic ArrayBuffers:

- [clientDataJSON](/en-US/docs/Web/API/AuthenticatorResponse/clientDataJSON) - The same as in attestation. An ArrayBuffer that contains a JSON representation of what the browser saw when being asked to authenticate.
- [authenticatorData](/en-US/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) - data created and/or used by the authenticator (see also [authenticator data](/en-US/docs/Web/API/Web_Authentication_API/Authenticator_data)).
- **signature** - a signature over the clientDataJSON and authenticatorData that can be verified with the public key that was created during registration.
- **userHandle** - Optional. (Nullable) A user identifier. This may be a username, or a hash of a username, etc. Used by a service to give a scope to credentials. Maximum length of 64 bytes. Older authenticators (U2F) do not support this output.

It's important to highlight that the signature for assertion uses a different key pair than attestation. An assertion is signed using the key pair for a service, which was generated during registration. An attestation is signed using the attestation private key and attestation certificate that were burned into all models of the same device. (Except in the case of self-attestation.)
