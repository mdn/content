---
title: Endianness
slug: Glossary/Endianness
tags:
  - Coding
  - CodingScripting
  - Glossary
---
**Endian** and **endianness** (or "byte-order") describe how computers organize the bytes that make up numbers.

Each memory storage location has an index or address. Every byte can store an 8-bit number (i.e. between `0x00` and `0xff`), so you must reserve more than one byte to store a larger number. By far the most common _ordering_ of multiple bytes in one number is the **little-endian**, which is used on all Intel processors. Little-endian means storing bytes in order of least-to-most-significant (where the least significant byte takes the first or lowest address), comparable to a common European way of writing dates (e.g., 31 December 2050).

Naturally, **big-endian** is the opposite order, comparable to an ISO date (2050-12-31). Big-endian is also often called "network byte order", because Internet standards usually require data to be stored big-endian, starting at the standard UNIX socket level and going all the way up to standardized Web binary data structures. Also, older Mac computers using 68000-series and PowerPC microprocessors formerly used big-endian.

Examples with the number `0x12345678` (i.e. 305 419 896 in decimal):

- _little-endian_: `0x78 0x56 0x34 0x12`
- _big-endian_: `0x12 0x34 0x56 0x78`
- _mixed-endian_ (historic and very rare): `0x34 0x12 0x78 0x56`

## See also

- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- [Typed Arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
- [Endianness](https://en.wikipedia.org/wiki/Endianness) (Wikipedia)
- {{Glossary("Data structure")}} (Glossary)
