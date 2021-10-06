---
title: HTTPS RR
slug: Glossary/https_rr
tags:
  - Glossary
  - HTTPS
  - HTTPS RR
  - Infrastructure
  - Security
---
<p><strong>HTTPS RR</strong> (<strong><em>HTTPS Resource Records</em></strong>) are a type of DNS record that delivers configuration information and parameters for how to access a service via {{Glossary("HTTPS")}}.</p>

<p>An <em>HTTPS RR</em> can be used to optimize the process of connecting to a service using HTTPS.
  Further, the presence of an <em>HTTPS RR</em> signals that all useful {{Glossary("HTTP")}} resources on the origin are reachable over HTTPS, which in turn means that a browser can safely upgrade connections to the domain from HTTP to HTTPS. </p>

<h3>See also</h3>

<ul>
  <li><a href="https://datatracker.ietf.org/doc/draft-ietf-dnsop-svcb-https/00/">Service binding and parameter specification via the DNS (DNS SVCB and HTTPS RRs)</a> (Draft IETF specification: draft-ietf-dnsop-svcb-https-00)</li>
  <li><a href="https://emilymstark.com/2020/10/24/strict-transport-security-vs-https-resource-records-the-showdown.html">Strict Transport Security vs. HTTPS Resource Records: the showdown</a> (Emily M. Stark blog)</li>
  <li>{{glossary("SSL")}}</li>
  <li>{{glossary("TLS")}}</li>
</ul>

