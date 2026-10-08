---
title: DNS over HTTPS (DoH)
slug: Glossary/DNS_over_HTTPS
page-type: glossary-definition
sidebar: glossarysidebar
---

**DNS over HTTPS** (**DoH**) is a protocol for performing {{Glossary("DNS")}} resolution over an encrypted {{Glossary("HTTPS")}} connection. Instead of sending queries and responses as plain text, DoH carries them inside HTTPS requests, which prevents on-path parties from reading or modifying the domain names a client looks up.

Traditional DNS traffic is unencrypted, so network operators and other observers can see which hostnames a user resolves and can tamper with the answers. By encrypting this traffic and reusing the standard HTTPS port (443), DoH improves the privacy and integrity of name resolution and makes DNS queries harder to single out from other web traffic.

## See also

- {{RFC(8484, "DNS Queries over HTTPS (DoH)")}}
- [DNS over HTTPS](https://en.wikipedia.org/wiki/DNS_over_HTTPS) on Wikipedia
- Related glossary terms:
  - {{glossary("DNS")}}
  - {{glossary("HTTPS")}}
  - {{glossary("TLS")}}
