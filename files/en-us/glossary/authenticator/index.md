---
title: Authenticator
slug: Glossary/Authenticator
page-type: glossary-definition
---

{{GlossarySidebar}}

An **authenticator** is an entity that can perform the cryptographic operations needed to register and authenticate users, and securely store the cryptographic keys used in these operations.

An authenticator might be implemented in hardware or software. It may be integrated into the device, like the [Touch ID](https://en.wikipedia.org/wiki/Touch_ID) system in Apple devices or the [Windows Hello](https://en.wikipedia.org/wiki/Windows_10#System_security) system, or it might be a removable module like a [YubiKey](https://en.wikipedia.org/wiki/YubiKey).

The [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) makes authenticators available to websites as part of the [Credential Management API](/en-US/docs/Web/API/Credential_Management_API). This enables websites to use authenticators to generate {{glossary("credential", "credentials")}} based on {{glossary("public-key cryptography")}}, which can then be used to sign users into websites.

## See also

- Related glossary terms:
  - {{glossary("Authentication")}}
  - {{glossary("Credential")}}
