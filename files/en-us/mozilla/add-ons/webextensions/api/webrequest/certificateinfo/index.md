---
title: webRequest.CertificateInfo
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/CertificateInfo
page-type: webextension-api-type
browser-compat: webextensions.api.webRequest.CertificateInfo
---

{{AddonSidebar}}

An object describing a single [X.509 certificate](https://datatracker.ietf.org/doc/html/rfc5280).

The {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}} object returned from the {{WebExtAPIRef("webRequest.getSecurityInfo()")}} API includes a `certificates` property which is an array of these objects.

## Type

Values of this type are objects. They contain the following properties:

- `fingerprint`

  - : `Object`. An object with the following properties:

    - `sha1`
      - : `String`. SHA-1 hash of the certificate's DER encoding.
    - `sha256`
      - : `String`. SHA-256 hash of the certificate's DER encoding.

- `isBuiltInRoot`
  - : `Boolean`. `true` if the certificate is one of the trust roots installed in the browser, `false` otherwise.
- `issuer`

  - : `String`. The Distinguished Name of the entity that issued the certificate, formatted as a comma-separated list of Relative Distinguished Names, each of the form "type=value".

    For example: "CN=DigiCert SHA2 Secure Server CA,O=DigiCert Inc,C=US".

- `rawDER`
  - : `Array` of `Number`. If [`webRequest.getSecurityInfo()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/getSecurityInfo) was called with the `rawDER` option present and set to `true`, this will contain the DER encoding of the certificate.
- `serialNumber`
  - : `String`. The certificate's [serial number](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.2).
- `subject`

  - : `String`. The Distinguished Name of the entity to which the certificate was issued, formatted as a comma-separated list of Relative Distinguished Names, each of the form "type=value".

    For example: "CN=\*.cdn.mozilla.net,O=Mozilla Corporation,L=Mountain View,ST=California,C=US".

- `subjectPublicKeyInfoDigest`

  - : `Object`. An object containing the following properties:

    - `sha256`
      - : `String`. Base64 encoded SHA-256 hash of the DER-encoded [public key info](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.7).

- `validity`

  - : `Object`. Validity period for the certificate. An object containing the following properties:

    - `start`
      - : `Number`. The start of the certificate's validity period, in [milliseconds since the epoch](https://en.wikipedia.org/wiki/Unix_time).
    - `end`
      - : `Number`. The end of the certificate's validity period, in [milliseconds since the epoch](https://en.wikipedia.org/wiki/Unix_time).

## Browser compatibility

{{Compat}}

{{WebExtExamples}}
