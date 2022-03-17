---
title: Entity
slug: Glossary/Entity
tags:
  - CodingScripting
  - Composing
  - Glossary
  - HTML
---
An {{glossary("HTML")}} **entity** is a piece of text ("string") that begins with an ampersand (`&`) and ends with a semicolon (`;`) . Entities are frequently used to display reserved characters (which would otherwise be interpreted as HTML code), and invisible characters (like non-breaking spaces). You can also use them in place of other characters that are difficult to type with a standard keyboard.

> **Note:** Many characters have memorable entities. For example, the entity for the copyright symbol (`©`) is `&copy;`. For less memorable characters, such as `&#8212;` or `&#x2014;`, you can use a [reference chart](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references) or [decoder tool](https://mothereff.in/html-entities).

## Reserved characters

Some special characters are reserved for use in HTML, meaning that your browser will parse them as HTML code. For example, if you use the less-than (`<`) sign, the browser interprets any text that follows as a {{Glossary('tag')}}.

To display these characters as text, replace them with their corresponding character entities, as shown in the following table.

| Character | Entity   | Note                                                                                 |
| --------- | -------- | ------------------------------------------------------------------------------------ |
| &         | `&amp;`  | Interpreted as the beginning of an entity or character reference.                    |
| <         | `&lt;`   | Interpreted as the beginning of a {{Glossary('tag')}}                           |
| >         | `&gt;`   | Interpreted as the ending of a {{Glossary('tag')}}                              |
| "         | `&quot;` | Interpreted as the beginning and end of an {{Glossary('attribute')}}'s value. |

## See also

- [Official list of character entities](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references)
