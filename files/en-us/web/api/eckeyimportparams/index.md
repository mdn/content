---
title: EcKeyImportParams
slug: Web/API/EcKeyImportParams
page-type: web-api-interface
spec-urls: https://w3c.github.io/webcrypto/#dfn-EcKeyImportParams
---

{{ APIRef("Web Crypto API") }}

The **`EcKeyImportParams`** dictionary of the [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.importKey()")}} or {{domxref("SubtleCrypto.unwrapKey()")}}, when generating any elliptic-curve-based key pair: that is, when the algorithm is identified as either of [ECDSA](/en-US/docs/Web/API/SubtleCrypto/sign#ecdsa) or [ECDH](/en-US/docs/Web/API/SubtleCrypto/deriveKey#ecdh).

## Instance properties

- `name`
  - : A string. This should be set to `ECDSA` or `ECDH`, depending on the algorithm you want to use.
- `namedCurve`

  - : A string representing the name of the elliptic curve to use. This may be any of the following names for [NIST](https://www.nist.gov/)-approved curves:

    - `P-256`
    - `P-384`
    - `P-521`

## Examples

See the examples for {{domxref("SubtleCrypto.importKey()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

Browsers that support the "ECDH" or "ECDSA" algorithms for the {{domxref("SubtleCrypto.importKey()")}} or {{domxref("SubtleCrypto.wrapKey()")}} methods will support this type.

## See also

- {{domxref("SubtleCrypto.importKey()")}}.
- {{domxref("SubtleCrypto.unwrapKey()")}}.
