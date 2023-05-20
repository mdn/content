---
title: "@charset"
slug: Web/CSS/@charset
page-type: css-at-rule
browser-compat: css.at-rules.charset
---

{{CSSRef}}

The **`@charset`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) specifies the character encoding used in the style sheet. It must be the first element in the style sheet and not be preceded by any character; as it is not a [nested statement](/en-US/docs/Web/CSS/Syntax#nested_statements), it cannot be used inside [conditional group at-rules](/en-US/docs/Web/CSS/At-rule#conditional_group_rules). If several `@charset` at-rules are defined, only the first one is used, and it cannot be used inside a `style` attribute on an HTML element or inside the {{ HTMLElement("style") }} element where the character set of the HTML page is relevant.

```css
@charset "utf-8";
```

This at-rule is useful when using non-ASCII characters in some CSS properties, like {{ cssxref("content") }}.

As there are several ways to define the character encoding of a style sheet, the browser will try the following methods in the following order (and stop as soon as one yields a result) :

1. The value of the [Unicode byte-order](https://en.wikipedia.org/wiki/Byte_order_mark) character placed at the beginning of the file.
2. The value given by the `charset` attribute of the `Content-Type:` HTTP header or the equivalent in the protocol used to serve the style sheet.
3. The `@charset` CSS at-rule.
4. Use the character encoding defined by the referring document: the `charset` attribute of the {{ HTMLElement("link") }} element. This method is obsolete and should not be used.
5. Assume that the document is UTF-8

## Syntax

```css
@charset "UTF-8";
@charset "iso-8859-15";
```

### Formal syntax

```
@charset "<charset>";
```

- _charset_
  - : A {{cssxref("&lt;string&gt;")}} denoting the character encoding to be used. It must be the name of a web-safe character encoding defined in the [IANA-registry](https://www.iana.org/assignments/character-sets/character-sets.xhtml), and must be double-quoted, following exactly one space character (U+0020), and immediately terminated with a semicolon. If several names are associated with an encoding, only the one marked with _preferred_ must be used.

## Examples

### Valid and invalid charset declarations

```css-nolint
@charset "UTF-8"; /* Set the encoding of the style sheet to Unicode UTF-8 */
@charset 'iso-8859-15'; /* Invalid, wrong quoting style used */
@charset  "UTF-8"; /* Invalid, more than one space */
 @charset "UTF-8"; /* Invalid, there is a character (a space) before the at-rule */
@charset UTF-8; /* Invalid, without ' or ", the charset is not a CSS {{cssxref("&lt;string&gt;")}} */
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Character set](/en-US/docs/Glossary/Character_set) glossary entry
- [Unicode](/en-US/docs/Glossary/Unicode) glossary entry
