---
title: Unicode
slug: Glossary/Unicode
page-type: glossary-definition
---

{{GlossarySidebar}}

Unicode is a standard {{Glossary("Character set","character set")}} that numbers and defines {{Glossary("Character","characters")}} from the world's different languages, writing systems, and symbols.

By assigning each character a number, programmers can create {{Glossary("Character encoding","character encodings")}}, to let computers store, process, and transmit any combination of languages in the same file or program.

Before Unicode, it was difficult and error-prone to mix languages in the same data. For example, one character set would store Japanese characters, and another would store the Arabic alphabet. If it was not clearly marked which parts of the data were in which character set, other programs and computers would display the text incorrectly, or damage it during processing. If you've ever seen text where characters like curly quotes (&ldquo;&rdquo;) were replaced with gibberish like `Ã‚Â£`, then you've seen this problem, known as [Mojibake](https://en.wikipedia.org/wiki/Mojibake).

The most common Unicode character encoding on the Web is {{Glossary("UTF-8")}}. Other encodings exist, like UTF-16 or the obsolete UCS-2, but UTF-8 is recommended.

## See also

- [Unicode](https://en.wikipedia.org/wiki/Unicode) on Wikipedia
- [The Unicode Standard: A Technical Introduction](https://www.unicode.org/standard/principles.html)
