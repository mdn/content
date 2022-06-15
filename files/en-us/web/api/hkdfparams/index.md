---
title: HkdfParams
slug: Web/API/HkdfParams
page-type: web-api-interface
tags:
  - API
  - Dictionary
  - HkdfParams
  - Reference
  - Web Crypto API
spec-urls: https://w3c.github.io/webcrypto/#dfn-HkdfParams
---
{{ APIRef("Web Crypto API") }}The **`HkdfParams`** dictionary of the [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.deriveKey()")}}, when using the [HKDF](/en-US/docs/Web/API/SubtleCrypto/deriveKey#hkdf) algorithm.

## Properties

- `name`
  - : A string. This should be set to `HKDF`.
- `hash`

  - : A string representing the [digest algorithm](/en-US/docs/Web/API/SubtleCrypto/digest#supported_algorithms) to use. This may be one of:

    - `SHA-1`
    - `SHA-256`
    - `SHA-384`
    - `SHA-512`

- `salt`
  - : An {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}}. The [HKDF specification](https://datatracker.ietf.org/doc/html/rfc5869) states that adding salt "adds significantly to the strength of HKDF". Ideally, the salt is a random or pseudo-random value with the same length as the output of the digest function. Unlike the input key material passed into `deriveKey()`, salt does not need to be kept secret.
- `info`
  - : An {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}} representing application-specific contextual information. This is used to bind the derived key to an application or context, and enables you to derive different keys for different contexts while using the same input key material. It's important that this should be independent of the input key material itself. This property is required but may be an empty buffer.

## Examples

See the examples for {{domxref("SubtleCrypto.deriveKey()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

Browsers that support the "HKDF" algorithm for the {{domxref("SubtleCrypto.deriveKey()")}} method will support this type.

## See also

- {{domxref("SubtleCrypto.deriveKey()")}}.
