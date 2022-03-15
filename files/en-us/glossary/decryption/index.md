---
title: Decryption
slug: Glossary/Decryption
tags:
  - Cryptography
  - Glossary
  - Privacy
  - Security
---
In {{glossary("cryptography")}}, **decryption** is the conversion of {{glossary("ciphertext")}} into {{glossary("Plaintext")}}.

Decryption is a cryptographic primitive: it transforms a ciphertext message into plaintext using a cryptographic algorithm called a {{glossary("cipher")}}. Like encryption, decryption in modern ciphers is performed using a specific algorithm and a secret, called the {{glossary("key")}}. Since the algorithm is often public, the key must stay secret if the encryption stays secure.

![The decryption primitive.](decryption.png)

Decryption is the reverse of {{glossary("encryption")}} and if the key stays secret, decryption without knowing the specific secret, decryption is mathematically hard to perform. How hard depends on the security of the cryptographic algorithm chosen and evolves with the progress of {{glossary("cryptanalysis")}}.

## See also

- [Encryption and Decryption](/en-US/docs/Encryption_and_Decryption)
