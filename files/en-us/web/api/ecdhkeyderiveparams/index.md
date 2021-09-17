---
title: EcdhKeyDeriveParams
slug: Web/API/EcdhKeyDeriveParams
tags:
  - API
  - Dictionary
  - EcdhKeyDeriveParams
  - Reference
  - Web Crypto API
---
{{ APIRef("Web Crypto API") }}

The **`EcdhKeyDeriveParams`** dictionary of the [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.deriveKey()")}},  when using the [ECDH](/en-US/docs/Web/API/SubtleCrypto/deriveKey#ecdh) algorithm.

ECDH enables two people who each have a key pair consisting of a public and a private key to derive a shared secret. They exchange public keys and use the combination of their private key and the other entity's public key to derive a secret key that they — and noone else — share.

The parameters for ECDH `deriveKey()` therefore include the other entity's public key, which is combined with this entity's private key to derive the shared secret.

## Properties

- `name`
  - : A {{domxref("DOMString")}}. This should be set to `ECDH`.
- `public`
  - : A {{domxref("CryptoKey")}} object representing the public key of the other entity.

## Examples

See the examples for {{domxref("SubtleCrypto.deriveKey()")}}.

## Specifications

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
    <tr>
      <td>
        {{ SpecName('Web Crypto API', '#dfn-EcdhKeyDeriveParams', 'SubtleCrypto.EcdhKeyDeriveParams') }}
      </td>
      <td>{{ Spec2('Web Crypto API') }}</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Browser compatibility

Browsers that support the "ECDH" algorithm for the {{domxref("SubtleCrypto.deriveKey()")}} method will support this type.

## See also

- {{domxref("SubtleCrypto.deriveKey()")}}.
