---
title: RegExp.prototype.compile()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/compile
tags:
  - Deprecated
  - JavaScript
  - Method
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
browser-compat: javascript.builtins.RegExp.compile
---
{{JSRef}} {{deprecated_header}}

The deprecated **`compile()`**
method is used to (re-)compile a regular expression during execution of a script. It is
basically the same as the `RegExp` constructor.

## Syntax

```js
compile(pattern, flags)
```

### Parameters

- `pattern`
  - : The text of the regular expression.
- `flags`

  - : If specified, flags can have any combination of the following values:

    - `g`
      - : global match
    - `i`
      - : ignore case
    - `m`
      - : multiline; treat beginning and end characters (^ and $) as working over multiple
        lines (i.e., match the beginning or end of _each_ line (delimited by \n or
        \r), not only the very beginning or end of the whole input string)
    - `y`
      - : sticky; matches only from the index indicated by the `lastIndex`
        property of this regular expression in the target string (and does not attempt to
        match from any later indexes).

## Description

The `compile` method is deprecated. You can just use the
`RegExp` constructor to achieve the same effect.

## Examples

### Using `compile()`

The following example shows how to recompile a regular expression with a new pattern
and a new flag.

```js
const regexObj = new RegExp('foo', 'gi');
regexObj.compile('new foo', 'g');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("RegExp")}}
