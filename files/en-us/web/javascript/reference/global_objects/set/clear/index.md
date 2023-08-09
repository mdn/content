---
title: Set.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/Set/clear
page-type: javascript-instance-method
browser-compat: javascript.builtins.Set.clear
---

{{JSRef}}

The **`clear()`** method of {{jsxref("Set")}} instances removes all elements from this set.

{{EmbedInteractiveExample("pages/js/set-prototype-clear.html")}}

## Syntax

```js-nolint
clear()
```

### Return value

{{jsxref("undefined")}}.

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
console.log(mySet.has("bar")); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
