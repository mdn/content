---
title: RsaOaepParams
slug: Web/API/RsaOaepParams
tags:
  - API
  - Dictionary
  - Reference
  - RsaOaepParams
  - Web Crypto API
---
{{ APIRef("Web Crypto API") }}

The **`RsaOaepParams`** dictionary of the [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}}, or {{domxref("SubtleCrypto.unwrapKey()")}}, when using the [RSA_OAEP](/en-US/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) algorithm.

## Properties

- `name`
  - : A {{domxref("DOMString")}}. This should be set to `RSA-OAEP`.
- `label` {{optional_inline}}

  - : A {{domxref("BufferSource")}} — an array of bytes that does not itself need to be encrypted but which should be bound to the ciphertext. A digest of the label is part of the input to the encryption operation.

    Unless your application calls for a label, you can just omit this argument and it will not affect the security of the encryption operation.

## Examples

See the examples for {{domxref("SubtleCrypto.encrypt()")}} and {{domxref("SubtleCrypto.decrypt()")}}.

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
        {{ SpecName('Web Crypto API', '#dfn-RsaOaepParams', 'SubtleCrypto.RsaOaepParams') }}
      </td>
      <td>{{ Spec2('Web Crypto API') }}</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Browser compatibility

Browsers that support the "RSA-OAEP" algorithm for the {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}}, or {{domxref("SubtleCrypto.unwrapKey()")}} methods will support this type.

## See also

- {{domxref("SubtleCrypto.encrypt()")}}.
- {{domxref("SubtleCrypto.decrypt()")}}.
- {{domxref("SubtleCrypto.wrapKey()")}}.
- {{domxref("SubtleCrypto.unwrapKey()")}}.
