---
title: Hash function
slug: Glossary/Hash_function
page-type: glossary-definition
sidebar: glossarysidebar
---

A **hash function** is a function that takes a variable-length input and produces a fixed-length output, also called a _digest_ (or just a "hash"). Hash functions should be quick to compute, and different inputs should as far as possible produce different outputs (this is called _collision-resistance_).

Hash functions have both {{glossary("cryptography", "cryptographic")}} and non-cryptographic uses. Outside cryptography, for example, hash functions can be used to generate the keys for an associative array such as a map or a dictionary.

The {{domxref("SubtleCrypto.digest()", "digest()")}} function of the {{domxref("SubtleCrypto")}} interface makes various hash functions available to web applications.

## Cryptographic hash functions

In cryptography, hash functions have many applications, including {{Glossary("digital signature", "digital signatures")}}, and {{Glossary("HMAC", "message authentication codes")}}.

Not all hash functions are appropriate for cryptography. To be used for cryptography, a hash function must be:

- quick to compute
- one-way: given the output, it should be impractical or impossible to regenerate the original input
- tamper-resistant: any change to the input leads to a different output
- collision-resistant: it should be impractical to find two different inputs that produce the same output

The hash functions most commonly used in cryptography are from the _SHA-2_ (Secure Hash Algorithm 2) family, whose names are `"SHA-"` followed by the length of the output digest in bits: for example, `"SHA-256"` and `"SHA-512"`.

SHA-2 is the successor to the SHA-1 algorithm, which is no longer considered secure and should not be used in cryptography. Note that the MD5 algorithm is also considered insecure.

## See also

- {{domxref("SubtleCrypto.digest()")}}
- [Hash function](https://en.wikipedia.org/wiki/Hash_function) on Wikipedia
- [Cryptographic hash function](https://en.wikipedia.org/wiki/Cryptographic_hash_function) on Wikipedia
- Related glossary terms:
  - {{Glossary("Symmetric-key cryptography")}}
