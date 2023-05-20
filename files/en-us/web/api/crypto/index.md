---
title: Crypto
slug: Web/API/Crypto
page-type: web-api-interface
browser-compat: api.Crypto
---

{{APIRef("Web Crypto API")}}

The **`Crypto`** interface represents basic cryptography features available in the current context.
It allows access to a cryptographically strong random number generator and to cryptographic primitives.

{{AvailableInWorkers}}

The [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) is accessed through the global {{domxref("crypto_property", "crypto")}} property, which is a `Crypto` object.

## Instance properties

_This interface implements properties defined on {{domxref("Crypto/getRandomValues", "RandomSource")}}._

- {{domxref("Crypto.subtle")}} {{ReadOnlyInline}} {{SecureContext_inline}}
  - : Returns a {{domxref("SubtleCrypto")}} object providing access to common cryptographic primitives, like hashing, signing, encryption, or decryption.

## Instance methods

_This interface implements methods defined on {{domxref("Crypto/getRandomValues", "RandomSource")}}._

- {{domxref("Crypto.getRandomValues()")}}
  - : Fills the passed {{ jsxref("TypedArray") }} with cryptographically sound random values.
- {{domxref("Crypto.randomUUID()")}}
  - : Returns a randomly generated, 36 character long v4 UUID.

## Usage notes

You should avoid using the Web Crypto API on insecure contexts, even though the `Crypto` interface is present on insecure contexts, as is the {{domxref("crypto_property", "crypto")}} property.
In addition, the `Crypto` method {{domxref("Crypto.getRandomValues", "getRandomValues()")}} is available on insecure contexts, but the {{domxref("Crypto.subtle", "subtle")}} property is not.

In general, you probably should just treat `Crypto` as available only on secure contexts.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web security](/en-US/docs/Web/Security)
- [Secure contexts](/en-US/docs/Web/Security/Secure_Contexts)
- [Features restricted to secure contexts](/en-US/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
- [Transport Layer Security](/en-US/docs/Web/Security/Transport_Layer_Security)
- [Strict-Transport-Security](/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)
