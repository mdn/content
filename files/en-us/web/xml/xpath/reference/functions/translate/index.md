---
title: translate
slug: Web/XML/XPath/Reference/Functions/translate
page-type: xpath-function
sidebar: xmlsidebar
---

The `translate` function evaluates a string and a set of characters to translate and returns the translated string.

## Syntax

```plain
translate(string, abc, XYZ)
```

### Parameters

- `string`
  - : The string to evaluate.
- `abc`
  - : The string of characters that will be replaced.
- `XYZ`
  - : The string of characters used for replacement. The first character in `XYZ` will replace every occurrence of the first character in `abc` that appears in `string`.

### Return value

The translated string.

## Description

For every character in `string`, if `abc` contains that character, it is replaced with the character at the same index in `XYZ`. If `abc` does not contain that character, it is kept as-is.

- If `abc` is longer than `XYZ`, then the extra characters at the end of `abc` are mapped to the empty string (i.e., they are removed from the source string).
- If `XYZ` contains more characters than `abc`, the extra characters are ignored.
- If a character appears multiple times in `abc`, then the first occurrence determines the replacement character.

Note that these cases should be avoided. `translate()` is not a regexp or string replacement function. It is a character-by-character substitution function.

```xml example-bad
<xsl:value-of select="translate('The quick brown fox', 'brown', 'red')" />
```

This does not output `The quick red fox` as you might expect, but rather `The quick red fdx`.

## Examples

### Using `translate()` for case conversion

XPath notes that the translate function is not a sufficient solution for case conversion in all languages. A future version of XPath may provide additional functions for case conversion.

However, this is the closest we have at present to a function that can convert a string to uppercase or lowercase.

```xml
<xsl:value-of select="translate('The quick brown fox.', 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')" />
```

Output

```plain
THE QUICK BROWN FOX.
```

## Specifications

[XPath 1.0 4.2](https://www.w3.org/TR/xpath-10/#function-translate)

## Gecko support

Supported.
