---
title: Cipher
slug: Glossary/Cipher
page-type: glossary-definition
---

{{GlossarySidebar}}

In {{glossary("cryptography")}}, a **cipher** is an algorithm that can {{glossary("encryption", "encrypt")}} {{glossary("plaintext")}} to make it unreadable, and to {{glossary("decryption", "decrypt")}} the encoded data back to plaintext again.

Ciphers were common long before the information age (e.g., [substitution ciphers](https://en.wikipedia.org/wiki/Substitution_cipher), [transposition ciphers](https://en.wikipedia.org/wiki/Transposition_cipher), and [permutation ciphers](https://en.wikipedia.org/wiki/Permutation_cipher)), but none of them were cryptographically secure except for the [one-time pad](https://en.wikipedia.org/wiki/One-time_pad).

In the modern age, ciphers have evolved dramatically. [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard), [RSA](<https://en.wikipedia.org/wiki/RSA_(cryptosystem)>) and [Blowfish](<https://en.wikipedia.org/wiki/Blowfish_(cipher)>) are examples of ciphers that are integral part of contemporary encryption standards and systems.

Modern ciphers are designed to withstand attacks discovered through {{glossary("cryptanalysis")}}. There is no guarantee that all attack methods have been discovered, so each algorithm is [recommended for different purposes](/en-US/docs/Web/API/SubtleCrypto#supported_algorithms) based on known classes of attacks.

Ciphers operate either as [block ciphers](https://en.wikipedia.org/wiki/Block_cipher) on successive blocks (or buffers) of data, or as [stream ciphers](https://en.wikipedia.org/wiki/Stream_cipher) on a continuous data flow (often of sound or video).

Ciphers are also classified according to how their {{glossary("key", "keys")}} are handled:

- {{Glossary("Symmetric-key cryptography", "symmetric key")}} algorithms use the same key to encode and decode a message. The key also must be sent securely if the message is to stay confidential.
- {{Glossary("Public-key cryptography", "asymmetric key")}} algorithms use one key for encryption and the other for decryption.

## See also

- [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API)
- [SubtleCrypto supported algorithms](/en-US/docs/Web/API/SubtleCrypto#supported_algorithms)
- Related glossary terms:
  - {{Glossary("Block cipher mode of operation")}}
  - {{Glossary("Ciphertext")}}
  - {{Glossary("Cipher suite")}}
  - {{Glossary("Cryptanalysis")}}
  - {{Glossary("Cryptography")}}
  - {{Glossary("Decryption")}}
  - {{Glossary("Encryption")}}
  - {{Glossary("Key")}}
  - {{Glossary("Plaintext")}}
  - {{Glossary("Public-key cryptography")}}
  - {{Glossary("Symmetric-key cryptography")}}
- [Cipher](https://en.wikipedia.org/wiki/Cipher) on Wikipedia
