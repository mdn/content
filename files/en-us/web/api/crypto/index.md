---
title: Crypto
slug: Web/API/Crypto
page-type: web-api-interface
browser-compat: api.Crypto
---

{{APIRef("Web Crypto API")}}{{AvailableInWorkers}}

The **`Crypto`** interface represents basic cryptography features available in the current context.
It allows access to a cryptographically strong random number generator and to cryptographic primitives.

The `Crypto` is available in windows using the {{domxref("Window.crypto")}} property and in workers using the {{domxref("WorkerGlobalScope.crypto")}} property.

## Instance properties

_This interface implements properties defined on {{domxref("Crypto/getRandomValues", "RandomSource")}}._

- {{domxref("Crypto.subtle")}} {{ReadOnlyInline}} {{SecureContext_inline}}
  - : Returns a {{domxref("SubtleCrypto")}} object providing access to common cryptographic primitives, like hashing, signing, encryption, or decryption.

## Instance methods

_This interface implements methods defined on {{domxref("Crypto/getRandomValues", "RandomSource")}}._

- {{domxref("Crypto.getRandomValues()")}}
  - : Fills the passed {{ jsxref("TypedArray") }} with cryptographically sound random values.
- {{domxref("Crypto.randomUUID()")}} {{SecureContext_inline}}
  - : Returns a randomly generated, 36 character long v4 UUID.

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
