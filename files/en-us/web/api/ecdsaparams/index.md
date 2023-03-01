---
title: EcdsaParams
slug: Web/API/EcdsaParams
page-type: web-api-interface
browser-compat:
  - api.SubtleCrypto.sign
  - api.SubtleCrypto.verify
---

{{ APIRef("Web Crypto API") }}

The **`EcdsaParams`** dictionary of the [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.sign()")}} or {{domxref("SubtleCrypto.verify()")}} when using the [ECDSA](/en-US/docs/Web/API/SubtleCrypto/sign#ecdsa) algorithm.

## Instance properties

- `name`
  - : A string. This should be set to `ECDSA`.
- `hash`

  - : A string. An identifier for the [digest algorithm](/en-US/docs/Web/API/SubtleCrypto/digest) to use. This should be one of the following:

    - `SHA-256`: selects the [SHA-256](/en-US/docs/Web/API/SubtleCrypto/digest#supported_algorithms) algorithm.
    - `SHA-384`: selects the [SHA-384](/en-US/docs/Web/API/SubtleCrypto/digest#supported_algorithms) algorithm.
    - `SHA-512`: selects the [SHA-512](/en-US/docs/Web/API/SubtleCrypto/digest#supported_algorithms) algorithm.

    > **Warning:** `SHA-1` is also supported here but the [SHA-1](/en-US/docs/Web/API/SubtleCrypto/digest#supported_algorithms) algorithm is considered vulnerable and should no longer be used.

## Examples

See the examples for {{domxref("SubtleCrypto.sign()")}} or {{domxref("SubtleCrypto.verify()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

Browsers that support the "ECDSA" algorithm for the {{domxref("SubtleCrypto.sign()")}} and {{domxref("SubtleCrypto.verify()")}} methods will support this type.

{{Compat}}

## See also

- {{domxref("SubtleCrypto.sign()")}} and {{domxref("SubtleCrypto.verify()")}}.
