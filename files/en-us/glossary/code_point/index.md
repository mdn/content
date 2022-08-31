---
title: Code point
slug: Glossary/Code_point
tags:
  - Glossary
---

A **code point** is a number assigned to represent an abstract character in a system for representing text (such as Unicode). In Unicode, a code point is expressed in the form "U+1234" where "1234" is the assigned number. For example, the character "A" is assigned a code point of U+0041.

Character encoding forms, such as UTF-8 and UTF-16, determine how a Unicode code point should be encoded as a sequence of bytes. Different encoding forms may encode the same code point as different byte sequences: for example, the Cyrillic character "Ф", whose code point is U+0424, is encoded as `0xd0a4` in UTF-8 and as `0x0424` in UTF-16.

## See also

- [The Unicode Standard: Code Points and Characters](https://www.unicode.org/versions/Unicode14.0.0/ch02.pdf#G25564)
