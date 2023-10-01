---
title: translate
slug: Web/XPath/Functions/translate
page-type: xpath-function
---

{{XsltSidebar}}

The `translate` function evaluates a string and a set of characters to translate and returns the translated string.

### Syntax

```plain
translate(string, abc, XYZ)
```

### Arguments

- `string`
  - : The string to evaluate.
- `abc`
  - : The string of characters that will be replaced.
- `XYZ`
  - : The string of characters used for replacement. The first character in `XYZ` will replace every occurrence of the first character in `abc` that appears in `string`.

### Returns

The translated string.

### Notes

XPath notes that the translate function is not a sufficient solution for case conversion in all languages. A future version of XPath may provide additional functions for case conversion.

However, this is the closest we have at present to a function that can convert a string to uppercase or lowercase.

Example

```xml
<xsl:value-of select="translate('The quick brown fox.', 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')" />
```

Output

```plain
THE QUICK BROWN FOX.
```

- If `abc` is longer than `XYZ`, then every occurrence of characters in `abc` that do not have a corresponding character in `XYZ` will be removed.

Example

```xml
<xsl:value-of select="translate('The quick brown fox.', 'brown', 'red')" />
```

Output

```plain
The quick red fox.
```

- If `XYZ` contains more characters than `abc`, the extra characters are ignored.

### Defined

[XPath 1.0 4.2](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-translate)

### Gecko support

Supported.
