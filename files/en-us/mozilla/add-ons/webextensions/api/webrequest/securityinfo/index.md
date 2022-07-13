---
title: webRequest.SecurityInfo
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/SecurityInfo
tags:
  - API
  - Add-ons
  - Reference
  - SecurityInfo
  - Type
  - WebExtensions
  - webRequest
browser-compat: webextensions.api.webRequest.SecurityInfo
---
{{AddonSidebar()}}

An object describing the security properties of a particular web request. An object of this type is returned from the {{WebExtAPIRef("webRequest.getSecurityInfo()")}} API.

If the request is not secured using [TLS](/en-US/docs/Glossary/TLS), then this object will contain only the property `state`, whose value will be `"insecure"`.

## Type

Values of this type are objects. They contain the following properties:

- `certificates`

  - : `Array` of {{WebExtAPIRef("webRequest.CertificateInfo", "CertificateInfo")}}. If {{WebExtAPIRef("webRequest.getSecurityInfo()")}} was called with the `certificateChain` option present and set to `true`, this will contain a `CertificateInfo` object for every certificate in the chain, from the server certificate up to and including the trust root.

    Otherwise it will contain a single `CertificateInfo` object, for the server certificate.

- `certificateTransparencyStatus` {{optional_inline}}

  - : `String`. Indicates the [Certificate Transparency](https://certificate.transparency.dev/) status for the connection. This may take any one of the following values:

    - "not_applicable"
    - "policy_compliant"
    - "policy_not_enough_scts"
    - "policy_not_diverse_scts"

- `cipherSuite` {{optional_inline}}
  - : `String`. Cipher suite used for the connection, formatted as per the [TLS specification](https://datatracker.ietf.org/doc/html/rfc5246#appendix-A.5): for example, "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256".
- `errorMessage` {{optional_inline}}

  - : `String`. If there was a problem with the TLS handshake (for example, the certificate had expired, or a trusted root could not be found, or a certificate was revoked) then `status` will be "broken" and the `errorMessage` property will contain a string describing the error, taken from Firefox's internal list of error codes.

    Note though that at present you can only call `getSecurityInfo()` in the `onHeaderReceived` listener, and the `onHeaderReceived` event is not fired when the handshake fails. So in practice this will never be set.

- `hsts` {{optional_inline}}
  - : `Boolean`. `true` if the host uses [Strict Transport Security](/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security), `false` otherwise.
- `isDomainMismatch` {{optional_inline}}
  - : `Boolean`. `true` if the server's domain name does not match the domain name in its certificate, `false` otherwise.
- `isExtendedValidation` {{optional_inline}}
  - : `Boolean`. `true` if the server has an [Extended Validation Certificate](https://en.wikipedia.org/wiki/Extended_Validation_Certificate), `false` otherwise.
- `isNotValidAtThisTime` {{optional_inline}}
  - : `Boolean`. `true` if the current time falls outside the server certificate's validity period (i.e. the certificate has expired or is not yet valid), `false` otherwise.
- `isUntrusted` {{optional_inline}}
  - : `Boolean`. `true` if a chain back to a trusted root certificate could not be constructed, `false` otherwise.
- `keaGroupName` {{optional_inline}}
  - : `String`. If `state` is "secure" this describes the key exchange algorithm used in this request.
- `protocolVersion` {{optional_inline}}

  - : `String`. Version of the TLS protocol used. One of:

    - "TLSv1"
    - "TLSv1.1"
    - "TLSv1.2"
    - "TLSv1.3"
    - "unknown" (if the version is not valid)

- `signatureSchemeName` {{optional_inline}}
  - : `String`. If `state` is "secure" this describes the signature scheme used in this request.
- `state`

  - : `String`. State of the connection. One of:

    - "broken": the TLS handshake failed (for example, the certificate had expired)
    - "insecure": the connection is not a TLS connection
    - "secure": the connection is a secure TLS connection
    - "weak": the connection is a TLS connection but is considered weak. You can examine `weaknessReasons` to find out the problem.

    Note though that at present you can only call `getSecurityInfo()` in the `onHeaderReceived` listener, and the `onHeaderReceived` event is not fired when the handshake fails. So in practice this will never be set to "broke".

- `weaknessReasons` {{optional_inline}}
  - : `String`. If `state` is "weak", this indicates the reason. Currently this may contain only a single value "cipher", indicating that the negotiated cipher suite is considered weak.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}
