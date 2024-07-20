---
title: Salt
slug: Glossary/Salt
page-type: glossary-definition
---

{{GlossarySidebar}}

In cryptography, **salt** is random data added to a password before it is {{glossary("hash", "hashed")}}. This makes it impossible for an attacker to derive passwords from their hashes using precomputed tables of passwords and the corresponding hashes.

Passwords should never be stored in their plaintext form, because of the risk that an attacker might break into the database where they are stored. Typically, the password is hashed, and the resulting hash is stored. If the hash function is cryptographically secure, then even if an attacker can get access to the stored hashes, it is impractical for them to reverse the function.

To derive a password from a hash, attackers can look up the password corresponding to a hash in a precomputed table (also known as a [rainbow table](https://en.wikipedia.org/wiki/Rainbow_table)) mapping possible passwords to their hashes:

| Password | Hash        |
| -------- | ----------- |
| pa55w0rd | 56965E2A... |
| abcdef   | BEF57EC7... |
| letmein  | 1C8BFE8F... |

Although these tables may be very large, such attacks can be effective because table lookup is a fast operation.

Adding random salt to passwords before hashing them stops this attack from working because the hash is not calculated based on the password alone but on the password combined with the salt.

Unlike the password, the salt does not need to be kept secret: it can be stored alongside the salted and hashed password in the server's database.
