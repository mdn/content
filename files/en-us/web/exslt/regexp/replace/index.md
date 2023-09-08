---
title: regexp:replace()
slug: Web/EXSLT/regexp/replace
page-type: exslt-function
---

{{XSLTRef}}{{QuickLinksWithSubpages("/en-US/docs/Web/EXSLT")}}

`regexp:replace()` replaces the portions of a string that match a given regular expression with the contents of another string.

## Syntax

```plain
regexp:replace(originalString, regExpString, flagsString, replaceString)
```

### Parameters

- `originalString`
  - : The string perform a search-and-replace operation upon.
- `regExpString`
  - : The JavaScript style regular expression to evaluate.
- `flagsString`
  - : The string containing character flags.
- `replaceString`
  - : The string with which the matched substrings are to be replaced.

The character flags are:

- `g` - Global replace
  - : If this flag is specified, all occurrences of the regular expression within the `originalString` are replaced. Otherwise only the first occurrence is replaced.
- `i` - Case insensitive match
  - : If this flag is specified, the match is performed in a case insensitive fashion.

### Returns

The revised version of the string.

## Specifications

[EXSLT - REGEXP:REPLACE](https://exslt.github.io/regexp/functions/replace/index.html)
