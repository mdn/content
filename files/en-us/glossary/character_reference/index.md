---
title: Character reference
slug: Glossary/Character_reference
page-type: glossary-definition
---

{{GlossarySidebar}}

An {{glossary("HTML")}} **character reference** is an {{glossary("escape character", "escape sequence")}} of {{glossary("character", "characters")}} that is used to represent another character in the rendered web page.

Character references are used as replacements for characters that are reserved in HTML, such as the less-than (`<`) and greater-than (`>`) symbols used by the HTML parser to identify element {{Glossary('tag','tags')}}, or `"` or `'` within attributes, which may be enclosed by those characters.
They can also be used for invisible characters that would otherwise be impossible to type, including non-breaking spaces, control characters like left-to-right and right-to-left marks, and for characters that are hard to type on a standard keyboard.

There are three types of character references:

- **Named character references**

  - : These use a name string between an ampersand (`&`) and a semicolon (`;`) to refer to the corresponding character.
    For example, `&lt;` is used for the less-than (`<`) symbol, and `&copy;` for the copyright symbol (`©`).
    The string used for the reference is often a {{glossary("Camel case","camel-cased")}} initialization or contraction of the character name.

- **Decimal numeric character references**

  - : These references start with `&#`, followed by one or more ASCII digits representing the base-ten integer that corresponds to the character's {{glossary("Unicode")}} {{glossary("code point")}}, and ending with `;`.
    For example, the decimal character reference for `<` is `&#60;`, because the Unicode code point for the symbol is `U+0003C`, and `3C` hexadecimal is 60 in decimal.

- **Hexadecimal numeric character reference**
  - : These references start with `&#x` or `&#X`, followed by one or more ASCII hex digits, representing the hexadecimal integer that corresponds to the character's Unicode code point, and ending with `;`.
    For example, the hexadecimal character reference for `<` is `&#x3C;` or `&#X3C;`, because the Unicode code point for the symbol is `U+0003C`.

A very small subset of useful named character references along with their unicode code points are listed below.

| Character | Named reference | Unicode code-point |
| --------- | --------------- | ------------------ |
| &         | `&amp;`         | U+00026            |
| <         | `&lt;`          | U+0003C            |
| >         | `&gt;`          | U+0003E            |
| "         | `&quot;`        | U+00022            |
| '         | `&apos;`        | U+00027            |
|           | `&nbsp;`        | U+000A0            |
| –         | `&ndash;`       | U+02013            |
| —         | `&mdash;`       | U+02014            |
| ©        | `&copy;`        | U+000A9            |
| ®        | `&reg;`         | U+000AE            |
| ™        | `&trade;`       | U+02122            |
| ≈         | `&asymp;`       | U+02248            |
| ≠         | `&ne;`          | U+02260            |
| £         | `&pound;`       | U+000A3            |
| €         | `&euro;`        | U+020AC            |
| °         | `&deg;`         | U+000B0            |

The full list of HTML named character references [can found in the HTML specification here](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references).

## See also

- Related glossary terms:
  - {{glossary("Character")}}
  - {{glossary("Escape character")}}
  - {{glossary("Code point")}}
  - {{glossary("Unicode")}}
