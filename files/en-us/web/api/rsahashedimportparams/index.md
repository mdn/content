---
title: RsaHashedImportParams
slug: Web/API/RsaHashedImportParams
page-type: web-api-interface
spec-urls: https://w3c.github.io/webcrypto/#dfn-RsaHashedImportParams
---

{{ APIRef("Web Crypto API") }}

The **`RsaHashedImportParams`** dictionary of the [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.importKey()")}} or {{domxref("SubtleCrypto.unwrapKey()")}}, when importing any RSA-based key pair: that is, when the algorithm is identified as any of [RSASSA-PKCS1-v1_5](/en-US/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/en-US/docs/Web/API/SubtleCrypto/sign#rsa-pss), or [RSA-OAEP](/en-US/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep).

## Instance properties

- `name`
  - : A string. This should be set to `RSASSA-PKCS1-v1_5`, `RSA-PSS`, or `RSA-OAEP`, depending on the algorithm you want to use.
- `hash`

  - : A string or an object containing a single property called `name` with a string value. It is an identifier for the [digest algorithm](/en-US/docs/Web/API/SubtleCrypto/digest) to use. This should be one of the following:

    - `SHA-256`: selects the [SHA-256](/en-US/docs/Web/API/SubtleCrypto/digest#supported_algorithms) algorithm.
    - `SHA-384`: selects the [SHA-384](/en-US/docs/Web/API/SubtleCrypto/digest#supported_algorithms) algorithm.
    - `SHA-512`: selects the [SHA-512](/en-US/docs/Web/API/SubtleCrypto/digest#supported_algorithms) algorithm.

    > **Warning:** `SHA-1` is also supported here but the [SHA-1](/en-US/docs/Web/API/SubtleCrypto/digest#supported_algorithms) algorithm is considered vulnerable and should no longer be used.

## Examples

See the examples for {{domxref("SubtleCrypto.importKey()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

Browsers that support any RSA-based algorithm for the {{domxref("SubtleCrypto.importKey()")}} or {{domxref("SubtleCrypto.unwrapKey()")}} methods will support this type.

## See also

- {{domxref("SubtleCrypto.importKey()")}}.
- {{domxref("SubtleCrypto.unwrapKey()")}}.
