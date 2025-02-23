---
title: EXSLT
slug: Web/XML/EXSLT
page-type: landing-page
sidebar: xmlsidebar
---

EXSLT is a set of extensions to [XSLT](/en-US/docs/Web/XML/XSLT). There are a number of modules; those that are supported by Firefox are listed below:

## EXSLT modules

To use an EXSLT function, you need to declare the namespace the function is in, and then use the appropriate prefix when calling the function. For example, to use the regular expressions package:

```xml
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:regexp="http://exslt.org/regular-expressions">
  <xsl:template match="/">
    …
    <xsl:value-of select="regexp:replace(/root/@value, 'before', 'gi', 'AFTER')"/>
    …
  </xsl:template>

</xsl:stylesheet>
```

### Common

The EXSLT Common package provides basic functions that expand upon the capabilities of XSLT. The namespace for the Common package is `http://exslt.org/common`.

#### Functions

- [`exsl:node-set()`](/en-US/docs/Web/XML/EXSLT/exsl/node-set)
- [`exsl:object-type()`](/en-US/docs/Web/XML/EXSLT/exsl/object-type)

### Math

The EXSLT Math package provides functions for working with numeric values and comparing nodes. The namespace for the Math package is `http://exslt.org/math`.

#### Functions

- [`math:highest()`](/en-US/docs/Web/XML/EXSLT/math/highest)
- [`math:lowest()`](/en-US/docs/Web/XML/EXSLT/math/lowest)
- [`math:max()`](/en-US/docs/Web/XML/EXSLT/math/max)
- [`math:min()`](/en-US/docs/Web/XML/EXSLT/math/min)

### Regular expressions

The EXSLT Regular Expressions package provides functions that allow testing, matching, and replacing text using JavaScript style regular expressions.

The EXSLT Regular Expressions namespace is `http://exslt.org/regular-expressions`.

#### Functions

- [`regexp:match()`](/en-US/docs/Web/XML/EXSLT/regexp/match)
- [`regexp:replace()`](/en-US/docs/Web/XML/EXSLT/regexp/replace)
- [`regexp:test()`](/en-US/docs/Web/XML/EXSLT/regexp/test)

### Sets

The EXSLT Sets package offers functions that let you perform set manipulation. The namespace for these functions is `http://exslt.org/sets`.

#### Functions

- [`set:difference()`](/en-US/docs/Web/XML/EXSLT/set/difference)
- [`set:distinct()`](/en-US/docs/Web/XML/EXSLT/set/distinct)
- [`set:intersection()`](/en-US/docs/Web/XML/EXSLT/set/intersection)
- [`set:has-same-node()`](/en-US/docs/Web/XML/EXSLT/set/has-same-node)
- [`set:leading()`](/en-US/docs/Web/XML/EXSLT/set/leading)
- [`set:trailing()`](/en-US/docs/Web/XML/EXSLT/set/trailing)

### Strings

The EXSLT Strings package provides functions that allow the manipulation of strings. The namespace for the Strings package is `http://exslt.org/strings`.

#### Functions

- [`str:concat()`](/en-US/docs/Web/XML/EXSLT/str/concat)
- [`str:split()`](/en-US/docs/Web/XML/EXSLT/str/split)
- [`str:tokenize()`](/en-US/docs/Web/XML/EXSLT/str/tokenize)

## See also

- [EXSLT website](https://exslt.github.io/)
