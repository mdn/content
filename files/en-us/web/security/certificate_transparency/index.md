---
title: Certificate Transparency
slug: Web/Security/Certificate_Transparency
tags:
  - Security
  - Web
---
**Certificate Transparency** is an open framework designed to protect against and monitor for certificate mis-issuances. It's defined in [RFC 9162](https://www.rfc-editor.org/rfc/rfc9162). With certificate transparency, newly-issued certificates are 'logged' to publicly-run, often independent _CT logs_ — which maintain an append-only, cryptographically-assured record of issued TLS certificates.

In this way, certificate authorities (CAs) can be subject to much greater public scrutiny and oversight. Potentially malicious certificates, such as those that violate the CA/B Forum _Baseline Requirements_, can be detected and revoked much more quickly. Browser vendors and root store maintainers are also empowered to make more informed decisions regarding problematic CAs that they may decide to distrust.

## Background

CT logs are built upon the foundation of the _Merkle tree_ data structure. Nodes are labelled with the _cryptographic hashes_ of their child nodes. Leaf nodes contain hashes of actual pieces of data. The label of the root node therefore depends on all other nodes in the tree.

In the context of certificate transparency, the data hashed by the leaf nodes are the certificates that have been issued by the various different CAs operating today. Certificate inclusion can be verified via an _audit proof_ which can be generated and verified efficiently, in logarithmic O(log n) time.

Certificate transparency initially came about in 2013 against a backdrop of CA compromises (DigiNotar breach in 2011), questionable decisions (Trustwave subordinate root incident in 2012) and technical issuance issues (weak, 512-bit certificate issuance by Digicert Sdn Bhd of Malaysia).

## Implementation

When certificates are submitted to a CT log, a _signed certificate timestamp_ (SCT) is generated and returned. This serves as a proof that the certificate has been submitted and will be added to the log.

The specification states that compliant servers _must_ provide a number of these SCTs to TLS clients when they connect. This can be accomplished via a number of different mechanisms:

- X.509v3 certificate extension which embeds signed certificate timestamps directly into the leaf certificate
- A TLS extension of type `signed_certificate_timestamp` sent during the handshake
- OCSP stapling (that is, the `status_request` TLS extension) and providing a `SignedCertificateTimestampList` with one or more SCTs

With the X.509 certificate extension, the included SCTs are decided by the issuing CA. There should be no need for web servers to be modified if this mechanism is used.

With the latter methods, servers will need to be updated to send the required data. The advantage is that the server operator can customize the CT log sources providing the SCTs sent via the TLS extension/stapled OCSP response.

## Browser Requirements

Google Chrome requires CT log inclusion for all certificates issues with a notBefore date of after 30 April 2018. Users will be prevented from visiting sites using non-compliant TLS certificates. Chrome had previously required CT inclusion for _Extended Validation_ (EV) and Symantec-issued certificates.

Apple [requires](https://support.apple.com/en-gb/HT205280) a varying number of SCTs in order for Safari and other servers to trust server certificates.

Firefox [does not](https://bugzilla.mozilla.org/show_bug.cgi?id=1281469) currently check or require the use of CT logs for sites that users visit.

The [Expect-CT header](/en-US/docs/Web/HTTP/Headers/Expect-CT) can be used to request that a browser _always_ enforces the requirement for certificate transparency (e.g. in Chrome, even if the certificate was issued with a notBefore date prior to April).
