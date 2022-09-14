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

The **`@@iterator`** method of the [`arguments`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object implements the [iterable protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) and allows `arguments` to be consumed by most syntaxes expecting iterables, such as the [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) and [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loops.

The initial value of this property is the same function object as the initial value of the {{jsxref("Array.prototype.values")}} property (and also the same as [`Array.prototype[@@iterator]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)).

{{js_property_attributes(1, 0, 1)}}

## Syntax

```js-nolint
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
