---
title: regexp:match()
slug: Web/EXSLT/regexp/match
page-type: exslt-function
---

{{XSLTRef}}{{QuickLinksWithSubpages("/en-US/docs/Web/EXSLT")}}

`regexp:match()` performs regular expression matching on a string, returning the submatches found as a result.

## Syntax

```js-nolint
regexp:match(targetString, regExpString[, flagsString])
```

### Parameters

- `targetString`
  - : The string to perform regular expression matching upon.
- `regExpString`
  - : The JavaScript style regular expression to evaluate.
- `flagsString` {{optional_inline}}
  - : An optional string containing character flags.

The character flags are:

- `g`
  - : Global match. The submatches from every match in the string are returned. If this flag isn't specified, only the submatches from the first match are returned.
- `i`
  - : Case insensitive match. If this flag is specified, the match is performed in a case insensitive fashion.

### Returns

A node set of `match` elements, each of which has the string value equal to a portion of the first parameter string as captured by the regular expression. If the match isn't a global one, the first match element has the value of the portion of the string matched by the entire regular expression.

For example:

```xml
<xsl:for-each select="regExp:match('https://developer.mozilla.org/en/docs/Firefox_3_for_developers',
                                   '(\w+):\/\/([^/:]+)(:\d*)?([^# ]*)')">
   Part <xsl:value-of select="position()" /> = <xsl:value-of select="." />
</xsl:for-each>
```

This code generates the following output:

```plain
Part 1 = https://developer.mozilla.org/en/docs/Firefox_3_for_developers
Part 2 = https
Part 3 = developer.mozilla.org
Part 4 =
Part 5 = /en/docs/Firefox_3_for_developers
```

## Specifications

[EXSLT - REGEXP:MATCH](https://exslt.github.io/regexp/functions/match/index.html)
