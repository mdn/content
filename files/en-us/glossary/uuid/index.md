---
title: UUID
slug: Glossary/UUID
tags:
  - Glossary
  - Infrastructure
---
A **Universally Unique Identifier** (**UUID**) or **Globally Unique Identifier** (**GUID**) is a label used to uniquely identify a resource among all other resources of that type.

Computer systems typically generate UUIDs locally using very large random numbers, often seeded with date and/or timestamps.
In theory these IDs may not be globally unique, but with large enough identifiers the probability of duplicates is vanishingly small.
If systems really need absolutely unique IDs then these may be allocated by a central authority.

Many different UUID schemes have been defined, using different key lengths and mechanisms to reduce duplicate identifiers.
For example, the [`Crypto.randomUUID()`](/en-US/docs/Web/API/Crypto/randomUUID) interface returns a 36 byte "version 4 UUID" as defined in [RFC4122: A Universally Unique IDentifier (UUID) URN Namespace](https://www.rfc-editor.org/rfc/rfc4122#section-4.4).


## See also

- {{Interwiki("wikipedia", "UUID")}} on Wikipedia
