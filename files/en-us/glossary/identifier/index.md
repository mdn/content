---
title: Identifier
slug: Glossary/Identifier
page-type: glossary-definition
---

{{GlossarySidebar}}

An **identifier** is a sequence of characters in the code that identifies a {{glossary("variable")}}, {{glossary("function")}}, or {{glossary("property")}}. In most languages, identifiers are case-sensitive and not quoted.

In {{glossary("JavaScript")}}, identifiers can contain {{glossary("Unicode")}} letters, `$`, `_`, and digits (0-9), but may not start with a digit. An identifier differs from a string in that a {{glossary("string")}} is data, while an identifier is part of the code. In JavaScript, there is no way to convert identifiers to strings, but sometimes it is possible to parse strings into identifiers.

In {{glossary("CSS")}}, there are two identifier data types: {{cssxref("custom-ident")}} and {{cssxref("dashed-ident")}}. The CSS {{cssxref("ident")}} can start with a digit and can contain almost any character, but non-letter/digit ASCII characters such as `"`, `\`, and `*` need to be escaped. Emojis, which are valid as identifiers, do not need to be escaped.

## See also

- Related glossary terms:
  - {{glossary("Scope")}}
  - {{glossary("string")}}
  - {{glossary("Unicode")}}
- [Identifier](https://en.wikipedia.org/wiki/Identifier#In_computer_science) on Wikipedia
