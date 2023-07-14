---
title: lang
slug: Web/XPath/Functions/lang
page-type: xpath-function
---

{{XsltSidebar}}

The `lang` function determines whether the context node matches the given language and returns boolean true or false.

### Syntax

```
lang(string )
```

### Arguments

- `string`
  - : The language code or localization (language and country) code to be matched.

### Returns

`true` if the context node matches the given languages. Otherwise, `false`.

### Notes

- A node's language is determined by its `xml:lang` attribute. If the current node does not have an `xml:lang` attribute, then the value of the `xml:lang` attribute of the nearest ancestor that has an `xml:lang` attribute will determine the current node's language. If the language cannot be determined (no ancestor has an `xml:lang` attribute), this function will return false.

- If the given `string` does not specify a country code, this function will match nodes of that language with any country code. The converse is not true.

Given this fragment of XML:

```xml
<p xml:lang="en">I went up a floor.</p>
<p xml:lang="en-GB">I took the lift.</p>
<p xml:lang="en-US">I rode the elevator.</p>
```

And this part of an XSL template:

```xml
<xsl:value-of select="count(//p[lang('en')])" />
<xsl:value-of select="count(//p[lang('en-GB')])" />
<xsl:value-of select="count(//p[lang('en-US')])" />
<xsl:value-of select="count(//p[lang('de')])" />
```

The output might be:

```
3
1
1
0
```

### Defined

[XPath 1.0 4.3](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-lang)

### Gecko support

Supported.
