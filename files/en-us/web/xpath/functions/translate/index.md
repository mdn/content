---
title: translate
slug: Web/XPath/Functions/translate
tags:
  - XSLT
  - XSLT_Reference
---
{{ XsltRef() }}

The `translate` function evaluates a string and a set of characters to translate and returns the translated string.

### Syntax

    translate(string, abc, XYZ)

### Arguments

- _`string`_
  - : The string to evaluate.
- _`abc`_
  - : The string of characters that will be replaced.
- _`XYZ`_
  - : The string of characters used for replacement. The first character in _`XYZ`_ will replace every occurrence of the first character in _`abc`_ that appears in _`string`_.

### Returns

The translated string.

### Notes

XPath notes that the translate function is not a sufficient solution for case conversion in all languages. A future version of XPath may provide additional functions for case conversion.

However, this is the closest we have at present to a function that can convert a string to uppercase or lowercase.

Example

    <xsl:value-of select="translate('The quick brown fox.', 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')" />

Output

    THE QUICK BROWN FOX.

- If *`abc`* is longer than *`XYZ`*, then every occurrence of characters in *`abc`* that do not have a corresponding character in *`XYZ`* will be removed.

Example

    <xsl:value-of select="translate('The quick brown fox.', 'brown', 'red')" />

Output

    The quick red fdx.

- If *`XYZ`* contains more characters than *`abc`*, the extra characters are ignored.

### Defined

[XPath 1.0 4.2](https://www.w3.org/TR/xpath#function-translate)

### Gecko support

Supported.
