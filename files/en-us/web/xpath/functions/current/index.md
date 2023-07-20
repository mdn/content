---
title: current
slug: Web/XPath/Functions/current
page-type: xpath-function
---

{{XsltSidebar}}

The `current` function can be used to get the context node in an XSLT instruction.

### Syntax

```
current()
```

### Returns

A node-set containing only the current node.

### Notes

This function is an XSLT-specific addition to XPath. It is not a part of the core XPath function library.

For an outermost expression (an expression not occurring within another expression), the current node is always the same as the context node (which will be returned by the `.` or `self` syntax). The following two are semantically equivalent.

```xml
<xsl:value-of select="current()"/>
```

```xml
<xsl:value-of select="."/>
```

In an inner expression (e.g. in square brackets), the current node is still the same as it would have been in an outermost expression. Thus within all of the following three expressions the `current` function (not the entire expressions) returns the same node. Moreover, the latter two are semantically equivalent.

```xml
<xsl:value-of select="current()"/>
```

```xml
<xsl:value-of select="foo/bar[current() = X]"/>
```

```xml
<xsl:variable name="current" select="current()"/>
<xsl:value-of select="foo/bar[$current = X]"/>
```

And the next code is also semantically equivalent to the latter two, since the `.` occurs in an outermost expression.

```xml
<xsl:variable name="current" select="."/>
<xsl:value-of select="foo/bar[$current = X]"/>
```

But the `.` always relate to the narrowest context. Thus in

```xml
<xsl:value-of select="foo/bar[. = X]"/>
```

the `.` returns the `bar` node, which may be different from the current node.

### Defined

[XSLT 1.0 12.4](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-current)

### Gecko support

Supported.
