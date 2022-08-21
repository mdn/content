---
title: ALPN
slug: Glossary/ALPN
tags:
  - ALPN
  - Draft
  - Glossary
  - NeedsContent
  - TLS
---
**Application-Layer Protocol Negotiation** (**ALPN**) is a {{Glossary("TLS")}} extension (defined in [RFC 7301](https://www.rfc-editor.org/rfc/rfc7301)) for identifying what application-layer protocol is negotiating the encrypted connection, without requiring additional round trips to do so.

| Protocol                                       | Identification sequence                                |
| ---------------------------------------------- | ------------------------------------------------------ |
| {{Glossary("HTTP", "HTTP/1.1")}}               | `0x68 0x74 0x74 0x70 0x2F 0x31 0x2E 0x31` ("http/1.1") |
| {{Glossary("HTTP 2", "HTTP/2")}}   | `0x68 0x32` ("h2")                                     |
| HTTP/2 over cleartext {{Glossary("TCP")}} | `0x68 0x32 0x63` ("h2c")                               |

## See also

- [IANA registered ALPN identifiers](https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids)
