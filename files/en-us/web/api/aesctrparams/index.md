---
title: AesCtrParams
slug: Web/API/AesCtrParams
page-type: web-api-interface
tags:
  - API
  - AesCtrParams
  - Dictionary
  - Reference
  - Web Crypto API
spec-urls: https://w3c.github.io/webcrypto/#dfn-AesCtrParams
---
{{ APIRef("Web Crypto API") }}

The **`AesCtrParams`** dictionary of the [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) represents the object that should be passed as the `algorithm` parameter into {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}}, or {{domxref("SubtleCrypto.unwrapKey()")}}, when using the [AES-CTR](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-ctr) algorithm.

AES is a block cipher, meaning that it splits the message into blocks and encrypts it a block at a time. In CTR mode, every time a block of the message is encrypted, an extra block of data is mixed in. This extra block is called the "counter block".

A given counter block value must never be used more than once with the same key:

- Given a message _n_ blocks long, a different counter block must be used for every block.
- If the same key is used to encrypt more than one message, a different counter block must be used for all blocks across all messages.

Typically this is achieved by splitting the initial counter block value into two concatenated parts:

- A [nonce](https://en.wikipedia.org/wiki/Cryptographic_nonce) (that is, a number that may only be used once). The nonce part of the block stays the same for every block in the message. Each time a new message is to be encrypted, a new nonce is chosen. Nonces don't have to be secret, but they must not be reused with the same key.
- A counter. This part of the block gets incremented each time a block is encrypted.

Essentially: the nonce should ensure that counter blocks are not reused from one message to the next, while the counter should ensure that counter blocks are not reused within a single message.

> **Note:** See [Appendix B of the NIST SP800-38A standard](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A70%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D) for more information.

## Properties

- `name`
  - : A string. This should be set to `AES-CTR`.
- `counter`
  - : An {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}} — the initial value of the counter block. This must be 16 bytes long (the AES block size). The rightmost `length` bits of this block are used for the counter, and the rest is used for the nonce. For example, if `length` is set to 64, then the first half of `counter` is the nonce and the second half is used for the counter.
- `length`
  - : A `Number` — the number of bits in the counter block that are used for the actual counter. The counter must be big enough that it doesn't wrap: if the message is `n` blocks and the counter is `m` bits long, then the following must be true: `n <= 2^m`. The [NIST SP800-38A](https://csrc.nist.gov/publications/detail/sp/800-38a/final) standard, which defines CTR, suggests that the counter should occupy half of the counter block (see [Appendix B.2](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A73%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D)), so for AES it would be 64.

## Examples

See the examples for {{domxref("SubtleCrypto.encrypt()")}} and {{domxref("SubtleCrypto.decrypt()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

Browsers that support the "AES-CTR" algorithm for the {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}}, or {{domxref("SubtleCrypto.unwrapKey()")}} methods will support this type.

## See also

- CTR mode is defined in section 6.5 of the [NIST SP800-38A standard](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A70%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D).
- {{domxref("SubtleCrypto.encrypt()")}}.
- {{domxref("SubtleCrypto.decrypt()")}}.
- {{domxref("SubtleCrypto.wrapKey()")}}.
- {{domxref("SubtleCrypto.unwrapKey()")}}.
