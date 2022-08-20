---
title: Object.getOwnPropertyNames()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
tags:
  - ECMAScript 5
  - JavaScript
  - JavaScript 1.8.5
  - Method
  - Object
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Object.getOwnPropertyNames
---
{{JSRef}}

The **`Object.getOwnPropertyNames()`** method returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.

{{EmbedInteractiveExample("pages/js/object-getownpropertynames.html")}}

## Syntax

```js
Object.getOwnPropertyNames(obj)
```

### Parameters

- `obj`
  - : The object whose enumerable and non-enumerable properties are to be returned.

### Return value

An array of strings that corresponds to the properties found directly in the given object.

## Description

`Object.getOwnPropertyNames()` returns an array whose elements are strings corresponding to the enumerable and non-enumerable properties found directly in a given object `obj`. The ordering of the enumerable properties in the array is consistent with the ordering exposed by a {{jsxref("Statements/for...in", "for...in")}} loop (or by {{jsxref("Object.keys()")}}) over the properties of the object. The non-negative integer keys of the object (both enumerable and non-enumerable) are added in ascending order to the array first, followed by the string keys in the order of insertion.

In ES5, if the argument to this method is not an object (a primitive), then it will cause a {{jsxref("TypeError")}}. In ES2015, a non-object argument will be coerced to an object.

```js
Object.getOwnPropertyNames('foo');
// TypeError: "foo" is not an object (ES5 code)

Object.getOwnPropertyNames('foo');
// ["0", "1", "2", "length"]  (ES2015 code)
```

## Examples

### Using Object.getOwnPropertyNames()

```js
const arr = ['a', 'b', 'c'];
console.log(Object.getOwnPropertyNames(arr).sort()); // .sort() is an array method.
// logs ["0", "1", "2", "length"]

// Array-like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.getOwnPropertyNames(obj).sort()); // .sort() is an array method.
// logs ["0", "1", "2"]

// Logging property names and values using Array.forEach
Object.getOwnPropertyNames(obj).forEach((val, idx, array) => {
  console.log(`${val} -> ${obj[val]}`);
});
// logs
// 0 -> a
// 1 -> b
// 2 -> c

// non-enumerable property
const myObj = Object.create({}, {
  getFoo: {
    value() { return this.foo; },
    enumerable: false,
  }
});
myObj.foo = 1;

console.log(Object.getOwnPropertyNames(my_obj).sort());
// logs ["foo", "getFoo"]
```

If you want only the enumerable properties, see {{jsxref("Object.keys()")}} or use a {{jsxref("Statements/for...in", "for...in")}} loop (note that this will also return enumerable properties found along the prototype chain for the object unless the latter is filtered with {{jsxref("Object.hasOwn()", "hasOwn()")}}).

Items on the prototype chain are not listed:

```js
function ParentClass() {}
ParentClass.prototype.inheritedMethod = function () {};

function ChildClass() {
  this.prop = 5;
  this.method = function () {};
}
ChildClass.prototype = new ParentClass;
ChildClass.prototype.prototypeMethod = function () {};

console.log(Object.getOwnPropertyNames(new ChildClass()));
// ["prop", "method"]
```

### Get non-enumerable properties only

This uses the {{jsxref("Array.prototype.filter()")}} function to remove the enumerable keys (obtained with {{jsxref("Object.keys()")}}) from a list of all keys (obtained with `Object.getOwnPropertyNames()`) thus giving only the non-enumerable keys as output.

```js
const target = myObject;
const enumAndNonenum = Object.getOwnPropertyNames(target);
const enumOnly = new Set(Object.keys(target));
const nonenumOnly = enumAndNonenum.filter((key) => !enumOnly.has(key));

console.log(nonenumOnly);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Object.getOwnPropertyNames` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [Enumerability and ownership of properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Array.forEach()")}}
