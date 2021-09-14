---
title: RsaPssParams
slug: Web/API/RsaPssParams
tags:
  - API
  - Dictionary
  - Reference
  - RsaPssParams
  - Web Crypto API
---
{{ APIRef("Web Crypto API") }}

The **`RsaPssParams`** dictionary of the [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.sign()")}} or {{domxref("SubtleCrypto.verify()")}}, when using the [RSA-PSS](/en-US/docs/Web/API/SubtleCrypto/sign#rsa-pss) algorithm.

## Properties

- `name`
  - : A {{domxref("DOMString")}}. This should be set to `RSA-PSS`.
- `saltLength`

  - : A `long` integer representing the length of the random salt to use, in bytes.

    [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) says that "Typical salt lengths" are either 0 or the length of the output of the [digest algorithm](/en-US/docs/Web/API/SubtleCrypto#digest_algorithms) that was selected when this key was [generated](/en-US/docs/Web/API/SubtleCrypto/generateKey). For example, if you use [SHA-256](/en-US/docs/Web/API/SubtleCrypto#sha-256) as the digest algorithm, this could be 32.

    The maximum size of `saltLength` is given by:

    ```js
    Math.ceil((keySizeInBits - 1)/8) - digestSizeInBytes - 2
    ```

    So for a key length of 2048 bits and a digest output size of 32 bytes, the maximum size would be 222.

## Examples

See the examples for {{domxref("SubtleCrypto.sign()")}} and {{domxref("SubtleCrypto.verify()")}}.

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
        {{ SpecName('Web Crypto API', '#dfn-RsaPssParams', 'SubtleCrypto.RsaPssParams') }}
      </td>
      <td>{{ Spec2('Web Crypto API') }}</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Browser compatibility

Browsers that support the "RSA-PSS" algorithm for the {{domxref("SubtleCrypto.sign()")}} and {{domxref("SubtleCrypto.verify()")}} methods will support this type.

## See also

- [RFC 3447: RSASSA-PSS](https://datatracker.ietf.org/doc/html/rfc3447#section-8.1)
