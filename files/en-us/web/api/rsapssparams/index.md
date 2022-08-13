---
title: RsaPssParams
slug: Web/API/RsaPssParams
page-type: web-api-interface
tags:
  - API
  - Dictionary
  - Reference
  - RsaPssParams
  - Web Crypto API
spec-urls: https://w3c.github.io/webcrypto/#dfn-RsaPssParams
---
{{ APIRef("Web Crypto API") }}

The **`RsaPssParams`** dictionary of the [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.sign()")}} or {{domxref("SubtleCrypto.verify()")}}, when using the [RSA-PSS](/en-US/docs/Web/API/SubtleCrypto/sign#rsa-pss) algorithm.

## Properties

- `name`
  - : A string. This should be set to `RSA-PSS`.
- `saltLength`

  - : A `long` integer representing the length of the random salt to use, in bytes.

    [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) says that "Typical salt lengths" are either 0 or the length of the output of the [digest algorithm](/en-US/docs/Web/API/SubtleCrypto#supported_algorithms) that was selected when this key was [generated](/en-US/docs/Web/API/SubtleCrypto/generateKey). For example, if you use [SHA-256](/en-US/docs/Web/API/SubtleCrypto/digest#supported_algorithms) as the digest algorithm, this could be 32.

    The maximum size of `saltLength` is given by:

    ```js
    Math.ceil((keySizeInBits - 1)/8) - digestSizeInBytes - 2
    ```

    So for a key length of 2048 bits and a digest output size of 32 bytes, the maximum size would be 222.

## Examples

See the examples for {{domxref("SubtleCrypto.sign()")}} and {{domxref("SubtleCrypto.verify()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

Browsers that support the "RSA-PSS" algorithm for the {{domxref("SubtleCrypto.sign()")}} and {{domxref("SubtleCrypto.verify()")}} methods will support this type.

## See also

- [RFC 3447: RSASSA-PSS](https://datatracker.ietf.org/doc/html/rfc3447#section-8.1)
