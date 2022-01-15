---
title: TOFU
slug: Glossary/TOFU
tags:
  - HTTP
  - SSH
  - Security
---
**Trust On First Use** **(TOFU**) is a security model in which a client needs to create a trust relationship with an unknown server. To do that, clients will look for identifiers (for example public keys) stored locally. If an identifier is found, the client can establish the connection. If no identifier is found, the client can prompt the user to determine if the client should trust the identifier.

TOFU is used in the SSH protocol, in [HTTP Public Key Pinning](/en-US/docs/Web/HTTP/Public_Key_Pinning) ({{Glossary("HPKP")}}) where the browsers will accept the first public key returned by the server, and in {{HTTPHeader("Strict-Transport-Security")}}  ({{Glossary("HSTS")}}) where a browser will obey the redirection rule.

## See also

- [HTTP Public Key Pinning](/en-US/docs/Web/HTTP/Public_Key_Pinning) ({{Glossary("HPKP")}})
- {{HTTPHeader("Public-Key-Pins")}}
- Wikipedia: [TOFU](https://en.wikipedia.org/wiki/Trust_on_first_use)
