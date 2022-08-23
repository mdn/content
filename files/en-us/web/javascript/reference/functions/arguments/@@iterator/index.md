---
title: arguments[@@iterator]()
slug: Web/JavaScript/Reference/Functions/arguments/@@iterator
tags:
  - Functions
  - JavaScript
  - Property
  - arguments
browser-compat: javascript.functions.arguments.@@iterator
---
{{jsSidebar("Functions")}}

The initial value of the **`@@iterator`** property is the same
function object as the initial value of the {{jsxref("Array.prototype.values")}}
property.

## Syntax

```js
arguments[Symbol.iterator]()
```

## Examples

### Iteration using for...of loop

```js
function f() {
  for (const letter of arguments) {
    console.log(letter);
  }
}
f('w', 'y', 'k', 'o', 'p');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Array.prototype.values()")}}
