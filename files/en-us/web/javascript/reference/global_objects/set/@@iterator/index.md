---
title: Set.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Set/@@iterator
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Method
  - Prototype
  - Reference
  - set
browser-compat: javascript.builtins.Set.@@iterator
---
{{JSRef}}

The initial value of the **`@@iterator`** property is the same
function object as the initial value of the {{jsxref("Set.prototype.values()",
  "values")}} property.

{{EmbedInteractiveExample("pages/js/set-prototype-@@iterator.html")}}

## Syntax

```js
mySet[Symbol.iterator]
```

### Return value

The `Set` **iterator** function, which is the
{{jsxref("Set.prototype.values()", "values()")}} function by default.

## Examples

### Using \[@@iterator]\()

```js
const mySet = new Set();
mySet.add('0');
mySet.add(1);
mySet.add({});

const setIter = mySet[Symbol.iterator]();

console.log(setIter.next().value); // "0"
console.log(setIter.next().value); // 1
console.log(setIter.next().value); // Object
```

### Using \[@@iterator]\() with for..of

```js
const mySet = new Set();
mySet.add('0');
mySet.add(1);
mySet.add({});

for (const v of mySet) {
  console.log(v);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Set.prototype.entries()")}}
- {{jsxref("Set.prototype.keys()")}}
- {{jsxref("Set.prototype.values()")}}
