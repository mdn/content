---
title: regexp:test()
slug: Web/EXSLT/regexp/test
tags:
  - EXSLT
  - NeedsSpecTable
  - Reference
---
{{XSLTRef}}{{QuickLinksWithSubpages("/en-US/docs/Web/EXSLT")}}

`regexp:test()` tests to see whether a string matches a specified regular expression.

## Syntax

```js
regexp:test(testString, regExpString[, flagsString])
```

### Parameters

- `testString`
  - : The string to test.
- `regExpString`
  - : The JavaScript style regular expression to evaluate.
- `flagsString` {{optional_inline}}
  - : An optional string containing character flags.

The character flags are:

- `g`
  - : Global match. Has no effect for this function; it's allowed for consistency with other regexp functions.
- `i`
  - : Case insensitive match<. If this flag is specified, the match is performed in a case insensitive fashion.

### Returns

`true` if the specified regexp matches the test string.

## Specifications

[EXSLT - REGEXP:TEST](http://exslt.org/regexp/functions/test/index.html)
