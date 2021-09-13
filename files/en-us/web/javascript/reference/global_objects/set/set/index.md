---
title: Set() constructor
slug: Web/JavaScript/Reference/Global_Objects/Set/Set
tags:
  - Constructor
  - JavaScript
  - Reference
  - set
  - Polyfill
browser-compat: javascript.builtins.Set.Set
---
{{JSRef}}

The **`Set` constructor** lets you
create `Set` objects that store unique values of any type, whether [primitive values](/en-US/docs/Glossary/Primitive) or object
references.

{{EmbedInteractiveExample("pages/js/set-prototype-constructor.html")}}

## Syntax

```js
new Set()
new Set(iterable)
```

### Parameters

- `iterable` {{optional_inline}}

  - : If an [iterable
    object](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) is passed, all of its elements will be added to the new
    `Set`.

    If you don't specify this parameter, or its value is `null`, the new
    `Set` is empty.

### Return value

A new `Set` object.

## Examples

### Using the `Set` object

```js
let mySet = new Set()

mySet.add(1)           // Set [ 1 ]
mySet.add(5)           // Set [ 1, 5 ]
mySet.add(5)           // Set [ 1, 5 ]
mySet.add('some text') // Set [ 1, 5, 'some text' ]
let o = {a: 1, b: 2}
mySet.add(o)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `Set` is available in [`core-js`](https://github.com/zloirock/core-js#set)
- {{jsxref("Set")}}
