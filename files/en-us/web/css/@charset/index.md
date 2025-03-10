---
title: "@charset"
slug: Web/CSS/@charset
page-type: css-at-rule
browser-compat: css.at-rules.charset
---

{{CSSRef}}

The **`@charset`** [CSS](/en-US/docs/Web/CSS) rule specifies the character encoding used in the style sheet. This syntax is useful when using non-{{Glossary("ASCII")}} characters in some CSS properties, like {{ cssxref("content") }}. Although the first character in `@charset` is the `@` symbol, it is not an [at-rule](/en-US/docs/Web/CSS/CSS_syntax/At-rule). It is a specific byte sequence that can only be placed at the very beginning of a stylesheet. No other characters, except the Unicode byte-order mark, are allowed before it. It also does not follow normal CSS syntax rules such as use of quotes or whitespace.

If a `@charset` is not recognized as the charset declaration, it is parsed as a normal at-rule. The [CSS syntax](/en-US/docs/Web/CSS/CSS_syntax) module deprecates this fallback behavior, defining it as an unrecognized legacy rule to be dropped when a stylesheet is grammar-checked.

As there are several ways to define the character encoding of a style sheet, the browser will try the following methods in the following order (and stop as soon as one yields a result):

1. The value of the [Unicode byte-order](https://en.wikipedia.org/wiki/Byte_order_mark) character placed at the beginning of the file.
2. The value given by the `charset` attribute of the `Content-Type:` HTTP header or the equivalent in the protocol used to serve the style sheet.
3. The `@charset` CSS declaration.
4. Use the character encoding defined by the referring document: the `charset` attribute of the {{ HTMLElement("link") }} element. This method is obsolete and should not be used.
5. Assume that the document is UTF-8.

## Syntax

```css
@charset "UTF-8";
@charset "iso-8859-15";
```

### Formal syntax

```plain
@charset "<charset>";
```

- _charset_
  - : A {{cssxref("&lt;string&gt;")}} denoting the character encoding to be used. It must be the name of a web-safe character encoding defined in the [IANA-registry](https://www.iana.org/assignments/character-sets/character-sets.xhtml), and must be double-quoted, following exactly one space character (U+0020), and immediately terminated with a semicolon. If several names are associated with an encoding, only the one marked with _preferred_ must be used.

## Examples

### Valid and invalid charset declarations

```css-nolint example-good
@charset "UTF-8"; /* Set the encoding of the style sheet to Unicode UTF-8 */
```

```css-nolint example-bad
@charset 'iso-8859-15'; /* Invalid, wrong quotes used */
@charset  "UTF-8"; /* Invalid, more than one space */
 @charset "UTF-8"; /* Invalid, there is a character (a space) before the declarations */
@charset UTF-8; /* Invalid, the charset is a CSS <string> and requires double-quotes */
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Character set](/en-US/docs/Glossary/Character_set) glossary entry
- [Unicode](/en-US/docs/Glossary/Unicode) glossary entry
