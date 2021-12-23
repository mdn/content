---
title: HmacKeyGenParams
slug: Web/API/HmacKeyGenParams
tags:
  - API
  - Dictionary
  - HmacKeyGenParams
  - Reference
  - Web Crypto API
---
{{ APIRef("Web Crypto API") }}

The **`HmacKeyGenParams`** dictionary of the [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.generateKey()")}}, when generating a key for the [HMAC](/en-US/docs/Web/API/SubtleCrypto/sign#hmac) algorithm.

## Properties

- `name`
  - : A {{domxref("DOMString")}}. This should be set to `HMAC`.
- `hash`
  - : A {{domxref("DOMString")}} representing the name of the [digest function](/en-US/docs/Web/API/SubtleCrypto/digest#supported_algorithms) to use. You can pass any of `SHA-1`, `SHA-256`, `SHA-384`, or `SHA-512` here.
- `length` {{optional_inline}}
  - : A `Number` — the length in bits of the key. If this is omitted, the length of the key is equal to the block size of the hash function you have chosen. Unless you have a good reason to use a different length, omit this property and use the default.

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
        {{ SpecName('Web Crypto API', '#dfn-HmacKeyGenParams', 'SubtleCrypto.HmacKeyGenParams') }}
      </td>
      <td>{{ Spec2('Web Crypto API') }}</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Browser compatibility

Browsers that support the "HMAC" algorithm for the {{domxref("SubtleCrypto.generateKey()")}} method will support this type.

## See also

- {{domxref("SubtleCrypto.generateKey()")}}.
