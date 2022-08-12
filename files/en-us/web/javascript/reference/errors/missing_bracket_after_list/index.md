---
title: 'SyntaxError: missing ] after element list'
slug: Web/JavaScript/Reference/Errors/Missing_bracket_after_list
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
---
{{jsSidebar("Errors")}}

The JavaScript exception "missing ] after element list" occurs when there is an error
with the array initializer syntax somewhere. Likely there is a closing bracket
(`]`) or a comma (`,`) missing.

## Message

```
SyntaxError: missing ] after element list (Firefox)
SyntaxError: Unexpected token ';'. Expected either a closing ']' or a ',' following an array element. (Safari)
```

## Error type

{{jsxref("SyntaxError")}}.

## What went wrong?

There is an error with the array initializer syntax somewhere. Likely there is a
closing bracket (`]`) or a comma (`,`) missing.

## Examples

### Incomplete array initializer

```js example-bad
const list = [1, 2,

const instruments = [
  'Ukulele',
  'Guitar',
  'Piano'
};

const data = [{ foo: 'bar' } { bar: 'foo' }];
```

Correct would be:

```js example-good
const list = [1, 2];

const instruments = [
 'Ukulele',
 'Guitar',
 'Piano'
];

const data = [{ foo: 'bar' }, { bar: 'foo' }];
```

## See also

- {{jsxref("Array")}}
