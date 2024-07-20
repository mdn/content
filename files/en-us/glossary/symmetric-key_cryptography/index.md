---
title: Symmetric-key cryptography
slug: Glossary/Symmetric-key_cryptography
page-type: glossary-definition
---

{{GlossarySidebar}}

Symmetric-key cryptography is a term used for cryptographic algorithms that use the same key for encryption and for decryption. The key is usually called a "symmetric key" or a "secret key".

This is usually contrasted with {{Glossary("public-key cryptography")}}, in which keys are generated in pairs and the transformation made by one key can only be reversed using the other key.

Symmetric-key algorithms should be secure when used properly and are highly efficient, so they can be used to encrypt large amounts of data without having a negative effect on performance.

Most symmetric-key algorithms currently in use are block {{Glossary("Cipher", "ciphers")}}: this means that they encrypt data one block at a time. The size of each block is fixed and determined by the algorithm: for example AES uses 16-byte blocks. Block ciphers are always used with a _{{Glossary("Block cipher mode of operation", "mode")}}_, which specifies how to securely encrypt messages that are longer than the block size. For example, AES is a cipher, while CTR, CBC, and GCM are all modes. Using an inappropriate mode, or using a mode incorrectly, can completely undermine the security provided by the underlying cipher.

## See also

- [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API)
- [SubtleCrypto supported algorithms](/en-US/docs/Web/API/SubtleCrypto#supported_algorithms)
- Related glossary terms:
  - {{Glossary("Block cipher mode of operation")}}
  - {{Glossary("Cryptography")}}
  - {{Glossary("Cryptographic hash function")}}
