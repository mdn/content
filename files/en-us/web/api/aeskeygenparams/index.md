---
title: AesKeyGenParams
slug: Web/API/AesKeyGenParams
tags:
  - API
  - AesKeyGenParams
  - Dictionary
  - Reference
  - Web Crypto API
---
{{ APIRef("Web Crypto API") }}The **`AesKeyGenParams`** dictionary of the [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.generateKey()")}}, when generating an AES key: that is, when the algorithm is identified as any of [AES-CBC](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-cbc), [AES-CTR](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-GCM](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-gcm), or [AES-KW](/en-US/docs/Web/API/SubtleCrypto/wrapKey#aes-kw).

## Properties

- `name`
  - : A {{domxref("DOMString")}}. This should be set to `AES-CBC`,  `AES-CTR`, `AES-GCM`, or `AES-KW`, depending on the algorithm you want to use.
- `length`
  - : A `Number` — the length in bits of the key to generate. This must be one of: 128, 192, or 256.

## Examples

See the examples for {{domxref("SubtleCrypto.generateKey()")}}.

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
        {{ SpecName('Web Crypto API', '#dfn-AesKeyGenParams', 'SubtleCrypto.AesKeyGenParams') }}
      </td>
      <td>{{ Spec2('Web Crypto API') }}</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Browser compatibility

Browsers that support any of the AES-based algorithms for the {{domxref("SubtleCrypto.generateKey()")}} method will support this type.

## See also

- {{domxref("SubtleCrypto.generateKey()")}}.
