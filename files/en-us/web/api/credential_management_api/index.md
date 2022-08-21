---
title: Credential Management API
slug: Web/API/Credential_Management_API
page-type: web-api-overview
tags:
  - API
  - Credential Management API
  - Landing
  - NeedsContent
  - Overview
  - Reference
  - credential management
browser-compat: api.Credential
---
{{DefaultAPISidebar("Credential Management API")}}

The Credential Management API lets a website store and retrieve password, public key, and federated credentials. These capabilities allow users to sign in without typing passwords, see the federated account they used to sign in to a site, and resume a session without the explicit sign-in flow of an expired session.

## Credential management concepts and usage

This API lets websites interact with a user agent's password system directly so that websites can deal in a uniform way with site credentials and user agents can provide better assistance with the management of their credentials. For example, user agents have a particularly hard time dealing with federated identity providers or esoteric sign-in mechanisms.

To address these problems, the Credential Management API provides ways for a website to store and retrieve different types of credentials. This gives users capabilities such as seeing the federated account they used to sign on to a site, or resuming a session without the explicit sign-in flow of an expired session.

> **Note:** This API is restricted to top-level contexts. Calls to `get()` and `store()` within an `<iframe>` element will resolve without effect.

### Subdomain-shared credentials

Later version of the spec allow credentials to be retrieved from a different subdomain. For example, a password stored in `login.example.com` may be used to log in to `www.example.com`. To take advantage of this, a password must be explicitly stored by calling {{domxref("CredentialsContainer.store()")}}. This is sometimes referred to as public suffix list (PSL) matching; however the spec only _recommends_ using PSL to determine the effective scope of a credential. It does not require it. Hence browsers may vary in their implementation.

## Interfaces

- {{domxref("Credential")}}
  - : Provides information about an entity as a prerequisite to a trust decision.
- {{domxref("CredentialsContainer")}}
  - : Exposes methods to request credentials and notify the user agent when interesting events occur such as successful sign in or sign out. This interface is accessible from `navigator.credentials`.
- {{domxref("FederatedCredential")}}
  - : Provides information about credentials from a federated identity provider, which is an entity that a website trusts to correctly authenticate a user, and which provides an API for that purpose. [OpenID Connect](https://openid.net/developers/specs/) is an example of such a framework.
- {{domxref("PasswordCredential")}}
  - : Provides information about a username/password pair.
- {{domxref("PublicKeyCredential")}}
  - : Provides a credential for logging in using a more secure system based on asymmetric cryptography instead of a password.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
