---
title: AesGcmParams
slug: Web/API/AesGcmParams
tags:
  - API
  - AesGcmParams
  - Dictionary
  - Reference
  - Web Crypto API
---
{{ APIRef("Web Crypto API") }}

The **`AesGcmParams`** dictionary of the [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}}, or {{domxref("SubtleCrypto.unwrapKey()")}}, when using the [AES-GCM](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) algorithm.

For details of how to supply appropriate values for this parameter, see the specification for AES-GCM: [NIST SP800-38D](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf), in particular section 5.2.1.1 on Input Data.

## Properties

- `name`
  - : A {{domxref("DOMString")}}. This should be set to `AES-GCM`.
- `iv`
  - : A {{domxref("BufferSource")}} — the initialization vector. This must be unique for every encryption operation carried out with a given key. Put another way: never reuse an IV with the same key. The AES-GCM specification recommends that the IV should be 96 bits long, and typically contains bits from a random number generator. [Section 8.2 of the specification](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf#%5B%7B%22num%22%3A65%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C0%2C792%2Cnull%5D) outlines methods for constructing IVs. Note that the IV does not have to be secret, just unique: so it is OK, for example, to transmit it in the clear alongside the encrypted message.
- `additionalData` {{optional_inline}}

  - : A {{domxref("BufferSource")}}. This contains additional data that will not be encrypted but will be authenticated along with the encrypted data. If `additionalData` is given here then the same data must be given in the corresponding call to [`decrypt()`](/en-US/docs/Web/API/SubtleCrypto/decrypt):  if the data given to the `decrypt()` call does not match the original data, the decryption will throw an exception. This gives you a way to authenticate associated data without having to encrypt it.

    The bit length of `additionalData` must be smaller than `2^64 - 1`.

    The `additionalData` property is optional and may be omitted without compromising the security of the encryption operation.

- `tagLength` {{optional_inline}}

  - : A `Number`. This determines the size in bits of the authentication tag generated in the encryption operation and used for authentication in the corresponding decryption.

    According to the [Web Crypto specification](https://www.w3.org/TR/WebCryptoAPI/#dfn-AesGcmParams) this must have one of the following values: 32, 64, 96, 104, 112, 120, or 128. The AES-GCM specification recommends that it should be 96, 104, 112, 120 or 128, although 32 or 64 bits may be acceptable in some applications: [Appendix C of the specification](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf#%5B%7B%22num%22%3A92%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C0%2C792%2Cnull%5D) provides additional guidance here.

    `tagLength` is optional and defaults to 128 if it is not specified.

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
        {{ SpecName('Web Crypto API', '#dfn-AesGcmParams', 'SubtleCrypto.AesGcmParams') }}
      </td>
      <td>{{ Spec2('Web Crypto API') }}</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Browser compatibility

Browsers that support the "AES-GCM" algorithm for the {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}}, or {{domxref("SubtleCrypto.unwrapKey()")}} methods will support this type.

## See also

- {{domxref("SubtleCrypto.encrypt()")}}.
- {{domxref("SubtleCrypto.decrypt()")}}.
- {{domxref("SubtleCrypto.wrapKey()")}}.
- {{domxref("SubtleCrypto.unwrapKey()")}}.
