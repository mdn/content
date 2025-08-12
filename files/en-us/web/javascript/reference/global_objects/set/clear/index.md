---
title: Set.prototype.clear()
short-title: clear()
slug: Web/JavaScript/Reference/Global_Objects/Set/clear
page-type: javascript-instance-method
browser-compat: javascript.builtins.Set.clear
sidebar: jsref
---

The **`clear()`** method of {{jsxref("Set")}} instances removes all elements from this set.

{{InteractiveExample("JavaScript Demo: Set.prototype.clear()")}}

```js interactive-example
const set = new Set();
set.add(1);
set.add("foo");

console.log(set.size);
// Expected output: 2

set.clear();

console.log(set.size);
// Expected output: 0
```

## Syntax

```js-nolint
clear()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Using the clear() method

```js
const mySet = new Set();
mySet.add(1);
mySet.add("foo");

console.log(mySet.size); // 2
console.log(mySet.has("foo")); // true

mySet.clear();

console.log(mySet.size); // 0
console.log(mySet.has("foo")); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
