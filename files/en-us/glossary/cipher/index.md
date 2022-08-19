---
title: Cipher
slug: Glossary/Cipher
tags:
  - Cryptography
  - Glossary
  - Privacy
  - Security
---
In {{glossary("cryptography")}}, a **cipher** is an algorithm that can {{glossary("encryption", "encode")}} {{glossary("Plaintext")}} to make it unreadable, and to {{glossary("decryption", "decode")}} it back.

Ciphers were common long before the information age (e.g., [substitution ciphers](https://en.wikipedia.org/wiki/Substitution_cipher), [transposition ciphers](https://en.wikipedia.org/wiki/Transposition_cipher), and [permutation ciphers](https://en.wikipedia.org/wiki/Permutation_cipher)), but none of them were cryptographically secure except for the [one-time pad](https://en.wikipedia.org/wiki/One-time_pad).

Modern ciphers are designed to withstand {{glossary("attack", "attacks")}} discovered by a {{glossary("cryptanalysis", "cryptanalyst")}}. There is no guarantee that all attack methods have been discovered, but each algorithm is judged against known classes of attacks.

Ciphers operate two ways, either as [block ciphers](https://en.wikipedia.org/wiki/Block_cipher) on successive blocks, or buffers, of data, or as [stream ciphers](https://en.wikipedia.org/wiki/Stream_cipher) on a continuous data flow (often of sound or video).

They also are classified according to how their {{glossary("key", "keys")}} are handled:

- [symmetric key](https://en.wikipedia.org/wiki/Symmetric_key_algorithm) algorithms use the same key to encode and decode a message. The key also must be sent securely if the message is to stay confidential.
- [asymmetric key](https://en.wikipedia.org/wiki/Asymmetric_key_algorithm) algorithms use a different key for encryption and decryption.

## See also

- [Cipher](https://en.wikipedia.org/wiki/Cipher) on Wikipedia
- [Encryption and Decryption](/en-US/docs/Archive/Security/Encryption_and_Decryption)
- [MDN Web Docs Glossary](/en-US/docs/Glossary)

  - {{Glossary("Block cipher mode of operation")}}
  - {{Glossary("Cipher")}}
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
