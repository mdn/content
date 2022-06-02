---
title: RsaHashedKeyGenParams
slug: Web/API/RsaHashedKeyGenParams
page-type: web-api-interface
tags:
  - API
  - Dictionary
  - Reference
  - RsaHashedKeyGenParams
  - Web Crypto API
spec-urls: https://w3c.github.io/webcrypto/#dfn-RsaHashedKeyGenParams
---
{{ APIRef("Web Crypto API") }}

The **`RsaHashedKeyGenParams`** dictionary of the [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.generateKey()")}}, when generating any RSA-based key pair: that is, when the algorithm is identified as any of [RSASSA-PKCS1-v1_5](/en-US/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/en-US/docs/Web/API/SubtleCrypto/sign#rsa-pss), or [RSA-OAEP](/en-US/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep).

## Properties

- `name`
  - : A string. This should be set to `RSASSA-PKCS1-v1_5`, `RSA-PSS`, or `RSA-OAEP`, depending on the algorithm you want to use.
- `modulusLength`
  - : A `Number`. The length in bits of the RSA modulus. This should be at least 2048: see for example see [SP 800-131A Rev. 2](https://csrc.nist.gov/publications/detail/sp/800-131a/rev-2/final). Some organizations are now recommending that it should be 4096.
- `publicExponent`
  - : A {{jsxref("Uint8Array")}}. The public exponent. Unless you have a good reason to use something else, specify 65537 here (`[0x01, 0x00, 0x01]`).
- `hash`

  - : A string representing the name of the [digest function](/en-US/docs/Web/API/SubtleCrypto/digest) to use. You can pass any of `SHA-256`, `SHA-384`, or `SHA-512` here.

    > **Warning:** Although you can technically pass `SHA-1` as a value here, this is strongly discouraged as SHA-1 is considered vulnerable.

## Examples

See the examples for {{domxref("SubtleCrypto.generateKey()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

Browsers that support any RSA-based algorithm for the {{domxref("SubtleCrypto.generateKey()")}} method will support this type.

## See also

- {{domxref("SubtleCrypto.generateKey()")}}.
