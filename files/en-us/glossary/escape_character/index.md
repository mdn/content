---
title: Escape character
slug: Glossary/Escape_character
page-type: glossary-definition
---

{{GlossarySidebar}}

An **escape character** is a {{glossary("character")}} that causes one or more characters that follow it to be interpreted differently. This forms an **escape sequence**, which is often used to represent a character that has an alternative meaning when printed literally, such as the quote character in a string literal. Escape sequences can have other usages too, especially in [regular expressions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences).

- In JavaScript [regexes](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape), [string literals](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals), and [identifiers](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers), we can use the backslash (`\`) to escape characters like `\'`, `\"`, `\u0026`, etc.
- In CSS identifiers, we can use the backslash (`\`) to escape characters like `\\`, `\n`, `\26`, etc. See [escape characters](/en-US/docs/Web/CSS/ident#escaping_characters) for more information.
- In HTML text content and attribute values, we can use {{glossary("character reference", "character references")}} like `&lt;`, `&#60;`, or `&#x3C;`.
- In {{glossary("URL", "URLs")}}, we can use the percent sign (`%`) to escape characters like `%20`, `%3C`, `%3E`, etc.

## See also

- Related glossary terms:
  - {{glossary("Character")}}
  - {{glossary("Character reference")}}
  - {{glossary("Code point")}}
- [Escape character](https://en.wikipedia.org/wiki/Escape_character) on Wikipedia
- [Escape sequence](https://en.wikipedia.org/wiki/Escape_sequence) on Wikipedia
