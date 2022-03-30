---
title: Array.prototype.toSource()
slug: Web/JavaScript/Reference/Global_Objects/Array/toSource
tags:
  - Array
  - JavaScript
  - Method
  - Non-standard
  - Prototype
  - Reference
browser-compat: javascript.builtins.Array.toSource
---
{{JSRef}} {{deprecated_header}}

The **`toSource()`** method returns a string representing the
source code of the array.

## Syntax

```js
toSource()
```

### Return value

A string representing the source code of the array.

## Description

The `toSource` method returns the following values:

- For the built-in {{jsxref("Array")}} object, `toSource` returns the
  following string indicating that the source code is not available:

  ```js
    function Array() {
        [native code]
    }
    ```

- For instances of {{jsxref("Array")}}, `toSource` returns a string
  representing the source code.

This method is usually called internally by JavaScript and not explicitly in code. You
can call `toSource` while debugging to examine the contents of an array.

## Examples

### Examining the source code of an array

To examine the source code of an array:

```js
const alpha = new Array('a', 'b', 'c');

alpha.toSource();
//returns ['a', 'b', 'c']
```

## Specifications

Not part of any standard. Implemented in JavaScript 1.3.

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.prototype.toSource()")}}
- {{jsxref("Array.prototype.toString()")}}
