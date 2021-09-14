---
title: RsaHashedImportParams
slug: Web/API/RsaHashedImportParams
tags:
  - API
  - Dictionary
  - Reference
  - RsaHashedImportParams
  - Web Crypto API
---
{{ APIRef("Web Crypto API") }}

The **`RsaHashedImportParams`** dictionary of the [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.importKey()")}} or {{domxref("SubtleCrypto.unwrapKey()")}}, when importing any RSA-based key pair: that is, when the algorithm is identified as any of [RSASSA-PKCS1-v1_5](/en-US/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/en-US/docs/Web/API/SubtleCrypto/sign#rsa-pss), or [RSA-OAEP](/en-US/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep).

## Properties

- `name`
  - : A {{domxref("DOMString")}}. This should be set to `RSASSA-PKCS1-v1_5`, `RSA-PSS`, or `RSA-OAEP`, depending on the algorithm you want to use.
- `hash`

  - : A {{domxref("DOMString")}} representing the name of the [digest function](/en-US/docs/Web/API/SubtleCrypto#digest_algorithms) to use. This can be one of `SHA-256`, `SHA-384`, or `SHA-512`.

    > **Warning:** Although you can technically pass `SHA-1` here, this is strongly discouraged as it is considered vulnerable.

## Examples

See the examples for {{domxref("SubtleCrypto.importKey()")}}.

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
        {{ SpecName('Web Crypto API', '#dfn-RsaHashedImportParams', 'SubtleCrypto.RsaHashedImportParams') }}
      </td>
      <td>{{ Spec2('Web Crypto API') }}</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Browser compatibility

Browsers that support any RSA-based algorithm for the {{domxref("SubtleCrypto.importKey()")}} or {{domxref("SubtleCrypto.unwrapKey()")}} methods will support this type.

## See also

- {{domxref("SubtleCrypto.importKey()")}}.
- {{domxref("SubtleCrypto.unwrapKey()")}}.
