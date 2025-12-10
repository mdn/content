---
title: Passkeys
slug: Web/Security/Authentication/Passkeys
page-type: guide
sidebar: security
---

Passkeys enable websites to authenticate users without the user having to enter any passwords or other secret codes on the site itself. They're considered the most secure authentication method available to websites, mostly because they are resistant to [phishing](/en-US/docs/Web/Security/Attacks/Phishing) attacks. We recommend that sites should adopt passkeys as their preferred authentication method, and phase out the use of passwords.

Instead of a shared secret, passkeys depend on {{glossary("Public-key cryptography", "public key cryptography")}}. A passkey is a cryptographic key pair that's specific to a particular user's account on a particular website. The private key is stored on the user's device, and the public key is stored in the website's server. When the user signs in, the device uses the private key to {{glossary("digital signature", "digitally sign")}} an assertion about the user's identity. The website's server can use the public key to verify the signature, and sign the user in.

## Overview

### Authenticators

Passkeys rely on an entity in or attached to the user's device, that's called an _authenticator_ or sometimes a _passkey provider_. An authenticator is the entity that
generates and stores passkeys, and can generate the digital signatures used to authenticate users.

An authenticator might be integrated into the device's operating system, like the [Touch ID](https://en.wikipedia.org/wiki/Touch_ID) system in Apple devices or the [Windows Hello](https://en.wikipedia.org/wiki/Windows_10#System_security) system, or it might be a removable module like a [YubiKey](https://en.wikipedia.org/wiki/YubiKey), or it might be an app the user installs, like [Bitwarden](https://bitwarden.com/) or [LastPass](https://www.lastpass.com/).

### Registration

When the user registers on a site, the site's front-end code first asks its server for a _challenge_: this is a random value generated on the server, that the server will later use to ensure that the resulting passkey was generated in response to this request.

Next, the user will authenticate themselves to the authenticator, for example using a {{glossary("biometric")}} such as a fingerprint.

The authenticator then creates a passkey for the account. It stores the private key locally and returns the public key, challenge, and some additional information, all {{glossary("digital signature", "digitally signed")}} with either the private key or a key belonging to the authenticator.

The site's front-end code sends this to the server, which verifies the challenge, and then stores the public key server-side, along with the user's account information.

![Overview of user registration with passkeys.](passkeys-register.svg)

### Sign in

When the user tries to sign in, the site's front-end code again asks the server for a challenge value.

Next, the browser finds the passkey associated with the current site, and the authenticator which stores this passkey will ask the user to authenticate themselves.

The authenticator will then use the passkey to digitally sign the challenge. This signed challenge is called an _assertion_.

The front-end code sends the assertion to the server, which verifies the signature using the public key it stored. If verification is successful, then the user can be signed in.

![Overview of user sign-in with passkeys.](passkeys-sign-in.svg)

### Security features of passkeys

We can note some features of this design that make it inherently more secure than passwords:

- The user never has to remember any secret or enter any secret on the site.
- The server doesn't have to store any secrets: if an attacker steals the user's public key, they can't do anything damaging with it.
- When the user tries to sign in, the browser will only look for passkeys that are associated with the current site. This means that, for example, front-end code served from a phishing site like `https://examp1e.com` is not able to get assertions that were signed with a key associated with `https://example.com`.

## The WebAuthn API

In our overview, we've described the website's front-end code interacting with the authenticator, but like any other interaction a website has with the device, this interaction is mediated by the browser via a Web API, in this case the [Web Authentication API (WebAuthn)](/en-US/docs/Web/API/Web_Authentication_API).

In turn, WebAuthn is an extension of the [Credential Management API](/en-US/docs/Web/API/Credential_Management_API), which is a framework for managing {{glossary("credential", "credentials")}} for various authentication methods, including passwords and federated identity, as well as passkeys.

The two main APIs are:

- {{domxref("CredentialsContainer.create()")}}, which you can use to create a new passkey when a user registers on your site.
- {{domxref("CredentialsContainer.get()")}}, which you can use to generate an assertion from the user's stored passkey, when the user signs into your site.

### Creating a new passkey

To create a new passkey, the website's front-end code calls {{domxref("CredentialsContainer.create()")}}. Options include:

- **Attestation preferences**: Whether the site is interested in authenticator [attestation](#attestation), and if so, what form the attestation should take.

- **Authenticator preferences**: What type of authenticator to use, and whether the authenticator needs to authenticate the user before creating the passkey.

- **Challenge**: The challenge generated by the website's server.

- **Website information**: A human readable name and ID for the website that will be associated with the new passkey. The ID determines the [scope](#passkey_scope) of the resulting passkey.

- **User information**: Information about the user that will be associated with the new passkey, including a human-readable display name, an account identifier, and a human-readable account identifier such as an email address or username.

The authenticator may first ask the user to authenticate themselves to the device, most often using a biometric such as a fingerprint, and will then generate a new {{glossary("Public-key cryptography", "cryptographic key pair")}}. It stores the private key and returns a {{domxref("PublicKeyCredential")}} object to the caller.

The `PublicKeyCredential` object contains an {{domxref("AuthenticatorAttestationResponse")}} object, which in turn contains a {{glossary("digital signature", "digitally signed")}} copy of the public key, as well as the challenge and other information about the passkey.

The website's front-end code sends the signed object to the server, which should verify the signature and challenge value before storing the public key and creating the user account.

#### Attestation

The security of passkeys depends on the reliability of the authenticators used. For example, if an authenticator does not protect the private keys it stores, then an attacker could steal the keys and impersonate users. In _attestation_, an authenticator provides verifiable evidence to the relying website about its origin, and about the data it produces (such as key pairs or signed assertions). This can help a website decide whether it wants to rely on the authenticator to authenticate its users.

To implement attestation, the authenticator contains a key pair called an _attestation key_, which was built into the device at manufacturing time, and which is {{glossary("digital certificate", "certified")}} as belonging to the organization that made this authenticator. For example, the certificate could state that this authenticator was produced by "Acme Authenticator Incorporated".

When the authenticator creates a new passkey, it signs the resulting object with its attestation key. The relying website verifies the signature and the associated certificate, and then has evidence that the passkey was made by an authenticator produced by "Acme Authenticator Incorporated".

Not all authenticators support attestation, and relying websites can indicate that they are not interested in attestation. In these situations, the object returned by a call to {{domxref("CredentialsContainer.create()")}} may not be signed at all, or it may be signed using the passkey itself (this is referred to as _self attestation_.

#### Passkey scope

By default, the ID is the domain for the calling document's {{glossary("origin")}}, but the caller may specify any {{glossary("registrable domain")}} that is a suffix of the origin: so for example, a page at `https://auth.example.com` may specify an ID of `example.com`.

### Using a passkey

## Transferring passkeys

## Migrating from passwords
