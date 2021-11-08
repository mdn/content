---
title: UUID
slug: Glossary/UUID
tags:
  - Glossary
  - Infrastructure
---
A **Universally Unique Identifier** (**UUID**) is a label used to uniquely identify a resource among all other resources of that type.

Computer systems generate UUIDs locally using very large random numbers seeded with timestamp information.
In theory the IDs may not be globally unique, but the probability of duplicates is vanishingly small.
If systems really need absolutely unique IDs then these might be allocated by a central authority.

The "version 4" UUID is a 128-bit value that is canonically represented as a 36-character string in the format `123e4567-e89b-12d3-a456-426614174000` (5 hex strings separated by hyphens).
Its formal definition can be found in: [RFC4122: A Universally Unique IDentifier (UUID) URN Namespace](https://www.rfc-editor.org/rfc/rfc4122#section-4.4).

## See also

- {{Interwiki("wikipedia", "UUID")}} on Wikipedia
- [`Crypto.randomUUID()`](/en-US/docs/Web/API/Crypto/randomUUID)