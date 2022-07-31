---
title: UUID
slug: Glossary/UUID
tags:
  - Glossary
  - Infrastructure
---
A **Universally Unique Identifier** (**UUID**) is a label used to uniquely identify a resource among all other resources of that type.

Computer systems generate UUIDs locally using very large random numbers.
In theory the IDs may not be globally unique, but the probability of duplicates is vanishingly small.
If systems really need absolutely unique IDs then these might be allocated by a central authority.

UUIDs are 128-bit values that are canonically represented as a 36-character string in the format `123e4567-e89b-12d3-a456-426614174000` (5 hex strings separated by hyphens).
There are a number of versions that differ slightly in the way they are calculated; for example, the inclusion of temporal information.

The formal definition can be found in: [RFC4122: A Universally Unique IDentifier (UUID) URN Namespace](https://www.rfc-editor.org/rfc/rfc4122).

## See also

- [UUID](https://en.wikipedia.org/wiki/UUID) on Wikipedia
- [`Crypto.randomUUID()`](/en-US/docs/Web/API/Crypto/randomUUID)
