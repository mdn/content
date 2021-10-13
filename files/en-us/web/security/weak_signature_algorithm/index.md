---
title: Weak signature algorithms
slug: Web/Security/Weak_Signature_Algorithm
tags:
  - Cryptography
  - Guide
  - Security
---
The strength of the hash algorithm used in {{Glossary("Signature/Security", "signing")}} a {{Glossary("Digital certificate", "digital certificate")}} is a critical element of the security of the certificate. This article provides some information about signature algorithms known to be weak, so you can avoid them when appropriate.

Weaknesses in hash algorithms can lead to situations in which attackers can create or obtain fraudulent certificates. As new attacks are found and improvements in available technology make attacks more feasible, the use of older algorithms is discouraged and support for them is eventually removed.

## SHA-1

SHA-1 certificates will no longer be treated as secure by major browser manufacturers beginning in 2017. Certificates employing more secure hash algorithms (such as SHA-256 or SHA-512) should be used instead.

## MD5

Support for MD5 based signatures was removed in early 2012.

## See also

- [Mozilla Security Blog post](https://blog.mozilla.org/security/2014/09/23/phasing-out-certificates-with-sha-1-based-signature-algorithms/) on the deprecation of SHA-1

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}
