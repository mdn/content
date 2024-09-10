---
title: Authentication
slug: Glossary/Authentication
page-type: glossary-definition
---

{{GlossarySidebar}}

**Authentication** is in general the process of proving that some fact is genuine. More specifically, in web security, it is the process of verifying the claimed identity of some entity, such as a user. This then makes it possible to decide whether to grant the user the access that they are requesting, such as being signed into a particular account.

Authentication is typically performed by having a user present a user identifier along with a {{glossary("credential")}}, such as a password, a one-time SMS code, or an assertion signed with a private key. The system then checks the binding between the user identifier and the credential, so it can decide whether or not to authenticate the user.

Types of authentication information, also called _authentication factors_, are commonly presented in three categories:

- Something the user knows, such as a password.
- Something the user has, such as a phone.
- Something the user is, such as a thumbprint.

Multi-factor authentication (MFA) systems require the user to provide more than one factor: for example, a password combined with a one-time code sent to the user's phone.

## See also

- {{rfc("4949", "Internet Security Glossary")}}
