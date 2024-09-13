---
title: Digital signature
slug: Glossary/Digital_signature
page-type: glossary-definition
---

{{GlossarySidebar}}

A **digital signature** is an object that can be used to {{glossary("authentication", "authenticate")}} the author of a document or message.

Digital signatures are usually based on {{glossary("public-key cryptography")}}, in which a key is created as a pair of keys, with the property that, if some input is encrypted with one key, it can only be decrypted with the other key, and vice versa.

The creator of the key pair makes one of the keys public and keeps the other one private. To sign a document, the key pair's owner creates a {{glossary("hash")}} of the document and encrypts it with the private key.

The document and signature are sent to the verifier, who hashes the document, retrieves the public key, and decrypts the signature: if this matches the hash, then the signature has been verified, and the verifier can be confident that it was created by an entity with access to the private key.

The security of a digital signature system depends (among other things) on:

- The private key's owner keeping it safe: if other entities can access the private key, they can impersonate the owner.

- The public key used by the verifier being the genuine counterpart of the owner's private key: if an attacker could trick the verifier into trusting the wrong public key, they could impersonate the owner.

Verifiers often use {{glossary("digital certificate", "digital certificates")}} to check that public keys are genuine.

## See also

- Related glossary terms:
  - {{glossary("Digital certificate")}}
  - {{glossary("Hash")}}
  - {{glossary("Public-key cryptography")}}
