---
title: Encryption
slug: Glossary/Encryption
page-type: glossary-definition
---

{{GlossarySidebar}}

In {{glossary("cryptography")}}, **encryption** is the conversion of {{glossary("plaintext")}} into a coded text or {{glossary("ciphertext")}}. A ciphertext is intended to be unreadable by unauthorized readers.

Encryption is a cryptographic primitive: it transforms a plaintext message into a ciphertext using a cryptographic algorithm called a {{glossary("cipher")}}. Encryption in modern ciphers is performed using a specific algorithm and a secret, called the {{glossary("key")}}. Since the algorithm is often public, the key must stay secret if the encryption stays secure.

![How encryption works.](encryption.png)

Without knowing the secret, the reverse operation, {{glossary("decryption")}}, is mathematically hard to perform. How hard depends on the security of the cryptographic algorithm chosen and evolves with the progress of {{glossary("cryptanalysis")}}.
