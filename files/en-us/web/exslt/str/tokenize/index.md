---
title: str:tokenize()
slug: Web/EXSLT/str/tokenize
tags:
  - EXSLT
  - NeedsSpecTable
  - Reference
---
{{XSLTRef}}{{QuickLinksWithSubpages("/en-US/docs/Web/EXSLT")}}

`str:tokenize()` splits a string using a set of characters as delimiters that determine where the splits should occur, returning a node-set containing the resulting strings.

## Syntax

```js
str:tokenize(string, delimiters)
```

### Parameters

- `string`
  - : The string to tokenize.
- `delimiters`
  - : Each character in this string is used as a word separator while tokenizing.

### Returns

A node-set of `token` elements, each containing one token from the `string`.

## Example:

```js
str:tokenize('2007-09-14-03T11:40:23', '-T:')
```

Returns a node set like this:

```xml
<token>2007</token>
<token>09</token>
<token>14</token>
<token>11</token>
<token>40</token>
<token>23</token>
```

## Specifications

[EXSLT - STR:TOKENIZE](http://www.exslt.org/str/functions/tokenize/index.html)

## See also

- [`str:split()`](/en-US/docs/Web/EXSLT/str/split)
