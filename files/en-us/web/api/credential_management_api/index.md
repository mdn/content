---
title: Credential Management API
slug: Web/API/Credential_Management_API
page-type: web-api-overview
browser-compat:
  - api.Credential
  - api.CredentialsContainer
  - api.FederatedCredential
  - api.PasswordCredential
spec-urls: https://w3c.github.io/webappsec-credential-management/
---

{{DefaultAPISidebar("Credential Management API")}}{{securecontext_header}}

The Credential Management API enables a website to create, store, and retrieve {{glossary("credential", "credentials")}}. A credential is an item which enables a system to make an {{glossary("authentication")}} decision: for example, to decide whether to sign a user into an account. We can think of it as a piece of evidence that a user presents to a website to demonstrate that they really are the person they are claiming to be.

## Concepts and usage

The central interface is the {{domxref("CredentialsContainer")}}, which is accessed through the {{domxref("navigator.credentials")}} property, and which provides three main functions:

- {{domxref("CredentialsContainer.create", "create()")}}: create a new credential.
- {{domxref("CredentialsContainer.store", "store()")}}: store a new credential locally.
- {{domxref("CredentialsContainer.get", "get()")}}: retrieve a credential, which can then be used to log a user in.

### Credential types

The API supports four different types of credential, which are all represented as subclasses of {{domxref("Credential")}}:

- Passwords ({{domxref("PasswordCredential")}})
- Federated identity credentials, which include:
  - a legacy type ({{domxref("FederatedCredential")}})
  - a replacement type ({{domxref("IdentityCredential")}})
- One-time password (OTP) credentials ({{domxref("OTPCredential")}})
- Web Authentication assertions ({{domxref("PublicKeyCredential")}})

![Class diagram showing the five different credential subclasses.](credential-types.svg)

Not all the `CredentialsContainer` functions are applicable to all the different types, and they operate in a different way for different types. In this section we'll introduce the different credential types and explain at a high level how they are used.

> **Note:** Although we're describing all the credential types together here, the different credential types are defined in various different specifications, which extend the main Credential Management API specification.
>
> - [Credential Management API](https://w3c.github.io/webappsec-credential-management/) defines passwords and legacy federated credentials.
> - [Federated Credential Management API](https://fedidcg.github.io/FedCM/) defines the new federated credentials.
> - [WebOTP API](https://wicg.github.io/web-otp/) defines OTP credentials.
> - [Web Authentication API](https://w3c.github.io/webauthn/) defines Web Authentication assertions.

#### Passwords

> **Note:** Most browsers do not support this credential type and it is not widely used on the web. Instead, browsers automatically offer to store passwords in the password manager, and can automatically retrieve stored passwords to autofill [password input elements](/en-US/docs/Web/HTML/Element/input/password).

Modern browsers provide users with a password manager, which enables users to store the passwords they enter on websites, and later retrieve them when they need to log in again. Password managers can help with password security by remembering passwords for users and autofilling them, which allows users to choose stronger passwords.

In the Credential Management API, a password is represented by the {{domxref("PasswordCredential")}} interface. When a user successfully registers for or signs into your site, you can call the {{domxref("PasswordCredential.PasswordCredential()", "PasswordCredential()")}} constructor or {{domxref("CredentialsContainer.create", "navigator.credentials.create()")}} to create a `PasswordCredential` object from the credentials the user entered. You can then pass this into {{domxref("CredentialsContainer.store", "navigator.credentials.store()")}}, and the browser will ask the user if they want to store the password in the password manager.

When a user visits your site, you can call {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} to retrieve a stored password for your site, and use it to log the user in. Depending on the situation, you can log the user in silently or use the returned password to auto-fill a form field.

![Sequence diagram showing registration and login flowes with password credentials.](password-credential-flow.svg)

#### Federated identity credentials

In a {{glossary("federated identity")}} system, a separate entity acts as an intermediary between the user and the website which they are trying to sign into. This entity, called an {{glossary("identity provider")}} (IdP), manages the user's credentals and can authenticate users, and is trusted by the website to make assertions about a user's identity.

The user has an account with the IdP: when they need to sign into the website they authenticate with the IdP. The IdP then returns a token to the user's browser, which the browser delivers to the website. The website verifies the token and if verification succeeds, signs the user in.

Federated identity is often provided as a service by corporations: for example, users who have Google, Microsoft, or Facebook accounts can use them to sign into websites that support them.

Support for federated identity in the Credential Management API was originally provided through the {{domxref("FederatedCredential")}} interface. However, this mechanism depends on technologies such as third-party cookies, which are intrinsically privacy-invasive, and as these technologies have been deprecated by browsers, new approaches are needed.

The [Federated Credential Management API](https://fedidcg.github.io/FedCM/) defines a privacy-preserving mechanism for federated identity on the web. In this mechanism, you call {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} to request a federated identity credential, and this triggers a protocol exchange between the browser and the IdP.

If, in the course of this exchange, the user can be authenticated with the IdP, the browser returns an {{domxref("IdentityCredential")}} object in the fulfilment of the `Promise` returned from `get()`. The website front end code can send this to the server for verification.

Note that {{domxref("CredentialsContainer.create", "create()")}} and {{domxref("CredentialsContainer.store", "store()")}} are not used when working with the Federated Credential Management API.

#### One-time passwords

A one-time password (OTP) is an authentication technique in which the website has a means to send messages to a user (such as an email address or a phone number) and uses this to send a unique code to the user, who then must enter the code on the site to prove their control of the communications endpoint. Websites sometimes use this as a second authentication factor in addition to a password.

The {{domxref("OTPCredential")}} solves a specific usability problem in this exchange: when a user receives the code, they have to open a different application, find the message, then copy the code into a form on the website. This is awkward, especially on a mobile device, and especially when the device receiving the message is the same as the device being used to sign into the site.

In browsers that support the `OTPCredential` type, a website can call {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}}, asking for an OTP credential, then ask the server to send the message containing the code (only SMS is supported as a transport). The server must send a specially formatted SMS message, which the browser can read.

The browser then returns an `OTPCredential` object in the fulfilment of the `Promise` returned from `get()`, and this object contains the code. The website front end can then use the code to autofill an input element on the site, or submit the code to the server automatically.

Note that {{domxref("CredentialsContainer.create", "create()")}} and {{domxref("CredentialsContainer.store", "store()")}} are not used when working with OTP credentials.

#### Web Authentication assertions

The [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) (WebAuthn) enables users to log into websites by asking an _authenticator_ to generate digitally signed assertions about a user's identity.

An authenticator is an entity that is inside or attached to the user's device, and that can perform the cryptographic operations needed to register and authenticate users, and securely store the cryptographic keys used in these operations. An authenticator might be integrated into the device, like the [Touch ID](https://en.wikipedia.org/wiki/Touch_ID) system in Apple devices or the [Windows Hello](https://en.wikipedia.org/wiki/Windows_10#System_security) system, or it might be a removable module like a [Yubikey](https://en.wikipedia.org/wiki/YubiKey).

Instead of passwords, WebAuthn uses {{glossary("public-key cryptography")}} to authenticate users.

To register a user on a website using WebAuthn, call {{domxref("CredentialsContainer.create", "navigator.credentials.create()")}}, providing all the information needed to create a key pair. The authenticator may first ask the user to authenticate themselves, for example using a biometric reader. It will then generate a key pair and return the public key. This key pair is specific to the user and the website. The authenticator may also generate a signed _attestation_: this is a statement that the authenticator itself is (for example) a genuine Yubikey.

The website front end sends the public key and attestation to the server, which stores it with the rest of the new user's account information.

To sign a user into the website, the front end code first fetches a random number from the server, called a _challenge_. Then it calls {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}}, passing in the challenge and some other options. The authenticator may, again, first ask the user to authenticate themselves, and will then sign the challenge using the private key.

The browser then returns a `PublicKeyCredential` object in the fulfilment of the `Promise` returned from `get()`, and this object contains the signed challenge, which is called an _assertion_. The website front end then sends the assertion to the server, which checks the signature using the stored public key, and decides whether to log the user in.

Note that {{domxref("CredentialsContainer.store", "store()")}} is not used when working with WebAuthn: the key pair is created in the authenticator and the private key never leaves it.

## Interfaces

- {{domxref("Credential")}}
  - : Provides information about an entity as a prerequisite to a trust decision.
- {{domxref("CredentialsContainer")}}
  - : Exposes methods to request credentials and notify the user agent when interesting events occur such as successful sign in or sign out. This interface is accessible from `navigator.credentials`.
- {{domxref("FederatedCredential")}}
  - : Provides information about credentials from a federated identity provider, which is an entity that a website trusts to correctly authenticate a user, and which provides an API for that purpose. [OpenID Connect](https://openid.net/developers/specs/) is an example of such a framework.
- {{domxref("PasswordCredential")}}
  - : Provides information about a username/password pair.

### Extensions to other interfaces

- {{domxref("Navigator.credentials")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("CredentialsContainer")}} interface which exposes methods to request credentials and notify the user agent when interesting events occur such as successful sign in or sign out.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Web Authentication API", "", "", "nocode")}}
- {{domxref("WebOTP API", "", "", "nocode")}}
- {{domxref("FedCM API", "Federated Credential Management (FedCM) API", "", "nocode")}}
