---
title: Federated identity
slug: Glossary/Federated_identity
page-type: glossary-definition
---

{{GlossarySidebar}}

A **federated identity** system is one in which an {{glossary("identity provider", "identity provider (IdP)")}} acts as an intermediary between users and {{glossary("relying party", "relying parties")}}, enabling a user to use a single set of {{glossary("credential", "credentials")}} to authenticate with a number of different relying parties.

Traditionally, on the web, a user will sign into a website with a username and a password, and the password is verified by the website against a (properly {{glossary("hash", "hashed")}} and {{glossary("salt", "salted")}}) copy stored on the website's backend.

In this model, if users have multiple accounts with different websites, they have to remember many passwords, and this encourages bad password practices such as using the same password for multiple accounts.

In a federated identity system, an identity provider:

- manages a user's credentials and can authenticate users
- is trusted by multiple websites to make assertions about a user's identity.

A user can then authenticate with the identity provider, which will return a token to the user's browser if authentication is successful. The user's browser will send the token to the website, which can verify that it was issued by the IdP. If the verification succeeds, the website can sign the user in.

Federated identity is often provided as a service by corporations: for example, users who have Google, Microsoft, or Facebook accounts can use them to sign in to many websites. Websites typically have to implement a process for verifying tokens that is specific to an identity provider. However, open standards such as [OpenID](https://en.wikipedia.org/wiki/OpenID), [OAuth](https://en.wikipedia.org/wiki/OAuth), and [SAML](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language) are widely used in the implementation of federated identity systems.

Although federated identity makes logging into multiple different accounts much easier for users and can greatly improve security, it can have serious implications for a user's privacy. If not carefully designed, a federated identity system can allow identity providers to track users across the web as they sign into multiple different sites. Early federated identity systems on the web were built on technologies such as third-party cookies, which are intrinsically privacy-invasive. As these technologies are being deprecated by browsers, new approaches are needed. The [Federated Credential Management (FedCM) API](/en-US/docs/Web/API/FedCM_API) provides a standardized privacy-preserving mechanism for federated identity on the web.

## See also

- Related glossary terms:
  - {{glossary("Relying party")}}
  - {{glossary("Identity provider")}}
- [Federated Credential Management (FedCM) API](/en-US/docs/Web/API/FedCM_API)
