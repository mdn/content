---
title: Decryption
slug: Glossary/Decryption
page-type: glossary-definition
---

{{GlossarySidebar}}

In {{glossary("cryptography")}}, **decryption** is the conversion of {{glossary("ciphertext")}} into {{glossary("Plaintext")}}.

Decryption is a cryptographic primitive: it transforms a ciphertext message into plaintext using a cryptographic algorithm called a {{glossary("cipher")}}. Like encryption, decryption in modern ciphers is performed by using a specific algorithm and a secret, called the {{glossary("key")}}. Since the algorithm is often public, the key must stay secret to ensure that the encryption is secure.

![The decryption primitive.](decryption.png)

Decryption is the reverse process of {{glossary("encryption")}} and if the key stays secret, decryption without knowing the specific secret, decryption is mathematically hard to perform, depending on the security of the cryptographic algorithm chosen and evolves with the progress of {{glossary("cryptanalysis")}}.

## See also

- {{glossary("Encryption")}}
- {{glossary("Cipher")}}
- {{glossary("Cryptography")}}
