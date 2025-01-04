---
title: Transport Layer Security (TLS)
slug: Glossary/TLS
page-type: glossary-definition
---

{{GlossarySidebar}}

**Transport Layer Security (TLS)**, formerly known as {{Glossary("SSL", "Secure Sockets Layer (SSL)")}}, is a {{Glossary("protocol")}} used by applications to communicate securely across a network, preventing tampering with and eavesdropping on email, web browsing, messaging, and other protocols. Both TLS and SSL are client / server protocols that ensure communication privacy by using cryptographic protocols to provide security over a network. When a server and client communicate using TLS, it ensures that no third party can eavesdrop or tamper with any message.

All modern browsers support the TLS protocol, requiring the server to provide a valid {{Glossary("Digital certificate", "digital certificate")}} confirming its identity in order to establish a secure connection. It is possible for both the client and server to mutually authenticate each other, if both parties provide their own individual digital certificates.

> [!NOTE]
> All major browsers began removing support for TLS 1.0 and 1.1 in early 2020; you'll need to make sure your web server supports TLS 1.2 or 1.3 going forward. From version 74 onwards, Firefox will return a [Secure Connection Failed](https://support.mozilla.org/en-US/kb/secure-connection-failed-firefox-did-not-connect) error when connecting to servers using the older TLS versions ([Firefox bug 1606734](https://bugzil.la/1606734)).

## See also

- [Transport Layer Security](https://en.wikipedia.org/wiki/Transport_Layer_Security) (Wikipedia)
- [RFC 8446](https://datatracker.ietf.org/doc/html/rfc8446) (The Transport Layer Security Protocol, Version 1.3)
- [RFC 5246](https://datatracker.ietf.org/doc/html/rfc5246) (The Transport Layer Security Protocol, Version 1.2)
- [Transport Layer Security](/en-US/docs/Web/Security/Transport_Layer_Security)
- [Transport Layer Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html) (OWASP)
- Related glossary terms:
  - {{Glossary("HTTPS")}}
  - {{Glossary("SSL")}}
