---
title: Public-key cryptography
slug: Glossary/Public-key_cryptography
page-type: glossary-definition
sidebar: glossarysidebar
---

Public-key cryptography — or _asymmetric cryptography_ — is a cryptographic system in which keys come in pairs. The transformation performed by one of the keys can only be undone with the other key. One key (the _private key_) is kept secret while the other is made public.

## Digital signatures

When used for {{glossary("digital signature", "digital signatures")}}, the private key is used to sign, and the public key is used to verify. This means that anyone can verify a signature, but only the owner of the corresponding private key could have generated it.

## Encryption

When used for {{glossary("encryption")}}, the public key is used to encrypt, and the private key is used to decrypt. This gives public-key encryption systems an advantage over symmetric encryption systems: The encryption key can be made public. Anyone can encrypt a message to the owner of the private key, but only the owner of the private key can decrypt it.

However, public-key encryption systems are typically much slower than symmetric algorithms, and the size of the messages they can encrypt is proportional to the size of the key, so they do not scale well for long messages.

As a result, it's common for an encryption system to use a symmetric algorithm to encrypt the messages, then a public-key system to encrypt the symmetric key. This arrangement can confer the benefits of both systems.

## Common public-key cryptosystems

Commonly used public-key cryptosystems are [RSA](https://en.wikipedia.org/wiki/RSA_cryptosystem) (for both signing and encryption), [DSA](https://en.wikipedia.org/wiki/Digital_Signature_Algorithm) (for signing) and [Diffie–Hellman](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) (for key agreement).

Elliptic-curve cryptography offers an alternative approach to these cryptographic systems with the benefit of using comparatively smaller key sizes, faster operations, and smaller storage and transmission.
Popular elliptic-curve algorithms include [Elliptic-curve Diffie–Hellman](https://en.wikipedia.org/wiki/Elliptic-curve_Diffie–Hellman) and [Elliptic Curve Digital Signature Algorithm](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm), which developers will often encounter abbreviated as **ECDH** and **ECDSA**.

## See also

- [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API)
- [SubtleCrypto supported algorithms](/en-US/docs/Web/API/SubtleCrypto#supported_algorithms)
- Related glossary terms:
  - {{Glossary("Symmetric-key cryptography")}}
- [Public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) on Wikipedia
