---
title: HTTPS RR
slug: Glossary/HTTPS_RR
page-type: glossary-definition
---

{{GlossarySidebar}}

**HTTPS RR** (**_HTTPS Resource Records_**) are a type of DNS record that delivers configuration information and parameters for how to access a service via {{Glossary("HTTPS")}}.

An _HTTPS RR_ can be used to optimize the process of connecting to a service using HTTPS.
Further, the presence of an _HTTPS RR_ signals that all useful {{Glossary("HTTP")}} resources on the origin are reachable over HTTPS, which in turn means that a browser can safely upgrade connections to the domain from HTTP to HTTPS.

### See also

- [Service binding and parameter specification via the DNS (DNS SVCB and HTTPS RRs)](https://datatracker.ietf.org/doc/draft-ietf-dnsop-svcb-https/00/) (Draft IETF specification: draft-ietf-dnsop-svcb-https-00)
- [Strict Transport Security vs. HTTPS Resource Records: the showdown](https://emilymstark.com/2020/10/24/strict-transport-security-vs-https-resource-records-the-showdown.html) (Emily M. Stark blog)
- {{glossary("SSL")}}
- {{glossary("TLS")}}
