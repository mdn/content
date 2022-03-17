---
title: uneval()
slug: Web/JavaScript/Reference/Global_Objects/uneval
tags:
  - Function
  - JavaScript
  - Method
  - Non-standard
  - Deprecated
  - Reference
  - uneval
browser-compat: javascript.builtins.uneval
---
{{JSSidebar("Objects")}}{{Non-standard_Header}}{{deprecated_header}}

The **`uneval()`** function creates a string representation of
the source code of an Object.

## Syntax

```js
uneval(object)
```

### Parameters

- `object`
  - : A JavaScript expression or statement.

### Return value

A string representing the source code of `object`.

> **Note:** This will _not_ return a JSON
> representation of `object`.

## Description

`uneval()` is a top-level function and is not associated with any object.

## Examples

### Using uneval

```js
var a = 1;
uneval(a); // returns a String containing 1

var b = '1';
uneval(b); // returns a String containing "1"

uneval(function foo() {}); // returns "(function foo(){})"

var a = uneval(function foo() { return 'hi'; });
var foo = eval(a);
foo(); // returns "hi"
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{JSxRef("Global_Objects/eval", "eval()")}}
- {{JSxRef("JSON.stringify()")}}
- {{JSxRef("JSON.parse()")}}
- {{JSxRef("Object.toSource()")}}
