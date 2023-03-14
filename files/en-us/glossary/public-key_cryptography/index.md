---
title: Public-key cryptography
slug: Glossary/Public-key_cryptography
page-type: glossary-definition
---

Public-key cryptography — or _asymmetric cryptography_ — is a cryptographic system in which keys come in pairs. The transformation performed by one of the keys can only be undone with the other key. One key (the _private key_) is kept secret while the other is made public.

When used for digital signatures, the private key is used to sign and the public key to verify. This means that anyone can verify a signature, but only the owner of the corresponding private key could have generated it.

When used for encryption, the public key is used to encrypt and the private key is used to decrypt. This gives public-key encryption systems an advantage over symmetric encryption systems in that the encryption key can be made public. Anyone could encrypt a message to the owner of the private key, but only the owner of the private key could decrypt it. However, they are typically much slower than symmetric algorithms and the size of message they can encrypt is proportional to the size of the key, so they do not scale well for long messages.

As a result, it's common for an encryption system to use a symmetric algorithm to encrypt the message, then a public-key system to encrypt the symmetric key. This arrangement can confer the benefits of both systems.

Commonly used public-key cryptosystems are RSA (for both signing and encryption), DSA (for signing) and Diffie-Hellman (for key agreement).

## See also

- [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API)![info](https://user-images.githubusercontent.com/22421714/225084651-31144313-c18f-4813-8f48-a50e0b78ae17.svg)
![info(0)](https://user-images.githubusercontent.com/22421714/225084709-0d40fec5-f943-42b9-8d65-f23fb2c8d766.svg)
![$ support mozilla org](https://user-images.githubusercontent.com/22421714/225084755-ea7f045e-10d0-4aba-86ef-16f58121a061.svg)
![info](https://user-images.githubusercontent.com/22421714/225084845-ec78df58-3224-4b22-9ac5-08a70f095763.svg)
[ublock-moje-zaloha_2022-11-02_06.18.58.txt](https://github.com/mdn/content/files/10971803/ublock-moje-zaloha_2022-11-02_06.18.58.txt)

- [MDN Web Docs Glossary](/en-US/docs/Glossary)

  - {{Glossary("Symmetric-key cryptography")}}
