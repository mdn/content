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

The central interface is the {{domxref("CredentialsContainer")}}, which is accessed through the {{domxref("navigator.credentials")}} property and provides three main functions:

- {{domxref("CredentialsContainer.create", "create()")}}: create a new credential.
- {{domxref("CredentialsContainer.store", "store()")}}: store a new credential locally.
- {{domxref("CredentialsContainer.get", "get()")}}: retrieve a credential, which can then be used to log a user in.

The API supports four different types of credential, which are all represented as subclasses of {{domxref("Credential")}}:

| Type                    | Interface                                                                          |
| ----------------------- | ---------------------------------------------------------------------------------- |
| Password                | {{domxref("PasswordCredential")}}                                                  |
| Federated identity      | {{domxref("IdentityCredential")}}, {{domxref("FederatedCredential")}} (deprecated) |
| One-time password (OTP) | {{domxref("OTPCredential")}}                                                       |
| Web Authentication      | {{domxref("PublicKeyCredential")}}                                                 |

The guide page [Credential types](/en-US/docs/Web/API/Credential_Management_API/Credential_types) gives an overview of the different credential types and how they are used.

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
