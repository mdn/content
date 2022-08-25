---
title: str:split()
slug: Web/EXSLT/str/split
tags:
  - EXSLT
  - NeedsSpecTable
  - Reference
---
{{XSLTRef}}{{QuickLinksWithSubpages("/en-US/docs/Web/EXSLT")}}

`str:split()` splits a string using a pattern string to determine where the splits should occur, returning a node-set containing the resulting strings.

## Syntax

```plain
str:split(string, pattern)
```

### Parameters

- `string`
  - : The string to split.
- `pattern`
  - : The pattern indicating where to split the string.

### Returns

A node-set of `token` elements, each containing one token from the `string`.

## Example

```plain
str:split('book, phone, computer, chair', ', ')
```

Returns a node set like:

```xml
<token>book</token>
<token>phone</token>
<token>computer</token>
<token>chair</token>
```

## Specifications

[EXSLT - STR:SPLIT](http://exslt.org/str/functions/split/index.html)

## See also

- [`str:tokenize()`](/en-US/docs/Web/EXSLT/str/tokenize)
