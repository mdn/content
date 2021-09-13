---
title: Set
slug: Web/JavaScript/Reference/Global_Objects/Set
tags:
  - Class
  - ECMAScript 2015
  - Global Objects
  - JavaScript
  - Object
  - Reference
  - set
  - Polyfill
browser-compat: javascript.builtins.Set
---
{{JSRef}}

The **`Set`** object lets you store unique values of any type, whether {{Glossary("Primitive", "primitive values")}} or object references.

## Description

`Set` objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the `Set` **may only occur once**; it is unique in the `Set`'s collection.

### Value equality

Because each value in the `Set` has to be unique, the value equality will be checked. In an earlier version of ECMAScript specification, this was not based on the same algorithm as the one used in the `===` operator. Specifically, for `Set`s, `+0` (which is strictly equal to `-0`) and `-0` were different values. However, this was changed in the ECMAScript 2015 specification. See _"Key equality for -0 and 0"_ in the [browser compatibility](#browser_compatibility) table for details.

{{jsxref("NaN")}} and {{jsxref("undefined")}} can also be stored in a Set. All `NaN` values are equated (i.e. `NaN` is considered the same as `NaN`, even though `NaN !== NaN`).

### Performance

The `Set` [`has`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has) method checks if a value is in a `Set` object, using an approach that is, on average, quicker than testing most of the elements that have previously been added to the `Set` object. In particular, it is, on average, faster than the [`Array.prototype.includes`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) method when an `Array` object has a `length` equal to a `Set` object’s `size`.

## Constructor

- {{jsxref("Set/Set", "Set()")}}
  - : Creates a new `Set` object.

## Static properties

- {{jsxref("Set.@@species", "get Set[@@species]")}}
  - : The constructor function that is used to create derived objects.

## Instance properties

- {{jsxref("Set.prototype.size")}}
  - : Returns the number of values in the `Set` object.

## Instance methods

- {{jsxref("Set.add", "Set.prototype.add(<var>value</var>)")}}
  - : Appends `value` to the `Set` object. Returns the `Set` object with added value.
- {{jsxref("Set.prototype.clear()")}}
  - : Removes all elements from the `Set` object.
- {{jsxref("Set.delete", "Set.prototype.delete(<var>value</var>)")}}
  - : Removes the element associated to the `value` and returns a boolean asserting whether an element was successfully removed or not. `Set.prototype.has(value)` will return `false` afterwards.
- {{jsxref("Set.has", "Set.prototype.has(<var>value</var>)")}}
  - : Returns a boolean asserting whether an element is present with the given value in the `Set` object or not.

### Iteration methods

- {{jsxref("Set.prototype.@@iterator()", "Set.prototype[@@iterator]()")}}
  - : Returns a new iterator object that yields the **values** for each element in the `Set` object in insertion order.
- {{jsxref("Set.prototype.values()")}}
  - : Returns a new iterator object that yields the **values** for each element in the `Set` object in insertion order.
- {{jsxref("Set.prototype.keys()")}}
  - : An alias for {{jsxref("Set.prototype.values()")}}.
- {{jsxref("Set.prototype.entries()")}}

  - : Returns a new iterator object that contains **an array of `[value, value]`** for each element in the `Set` object, in insertion order.

    This is similar to the {{jsxref("Map")}} object, so that each entry's _key_ is the same as its _value_ for a `Set`.

- {{jsxref("Set.forEach", "Set.prototype.forEach(<var>callbackFn</var>[, <var>thisArg</var>])")}}
  - : Calls `callbackFn` once for each value present in the `Set` object, in insertion order. If a `thisArg` parameter is provided, it will be used as the `this` value for each invocation of `callbackFn`.

## Examples

### Using the Set object

```js
const mySet1 = new Set()

mySet1.add(1)           // Set [ 1 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add('some text') // Set [ 1, 5, 'some text' ]
const o = {a: 1, b: 2}
mySet1.add(o)

mySet1.add({a: 1, b: 2})   // o is referencing a different object, so this is okay

mySet1.has(1)              // true
mySet1.has(3)              // false, since 3 has not been added to the set
mySet1.has(5)              // true
mySet1.has(Math.sqrt(25))  // true
mySet1.has('Some Text'.toLowerCase()) // true
mySet1.has(o)       // true

mySet1.size         // 5

mySet1.delete(5)    // removes 5 from the set
mySet1.has(5)       // false, 5 has been removed

mySet1.size         // 4, since we just removed one value

console.log(mySet1)
// logs Set(4) [ 1, "some text", {…}, {…} ] in Firefox
// logs Set(4) { 1, "some text", {…}, {…} } in Chrome
```

### Iterating Sets

```js
// iterate over items in set
// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet1) console.log(item)

// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet1.keys()) console.log(item)

// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet1.values()) console.log(item)

// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
// (key and value are the same here)
for (let [key, value] of mySet1.entries()) console.log(key)

// convert Set object to an Array object, with Array.from
const myArr = Array.from(mySet1) // [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}]

// the following will also work if run in an HTML document
mySet1.add(document.body)
mySet1.has(document.querySelector('body')) // true

// converting between Set and Array
const mySet2 = new Set([1, 2, 3, 4])
mySet2.size                    // 4
[...mySet2]                    // [1, 2, 3, 4]

// intersect can be simulated via
const intersection = new Set([...mySet1].filter(x => mySet2.has(x)))

// difference can be simulated via
const difference = new Set([...mySet1].filter(x => !mySet2.has(x)))

// Iterate set entries with forEach()
mySet1.forEach(function(value) {
  console.log(value)
})

// 1
// 2
// 3
// 4
```

### Implementing basic set operations

```js
function isSuperset(set, subset) {
    for (let elem of subset) {
        if (!set.has(elem)) {
            return false
        }
    }
    return true
}

function union(setA, setB) {
    let _union = new Set(setA)
    for (let elem of setB) {
        _union.add(elem)
    }
    return _union
}

function intersection(setA, setB) {
    let _intersection = new Set()
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem)
        }
    }
    return _intersection
}

function symmetricDifference(setA, setB) {
    let _difference = new Set(setA)
    for (let elem of setB) {
        if (_difference.has(elem)) {
            _difference.delete(elem)
        } else {
            _difference.add(elem)
        }
    }
    return _difference
}

function difference(setA, setB) {
    let _difference = new Set(setA)
    for (let elem of setB) {
        _difference.delete(elem)
    }
    return _difference
}

// Examples
const setA = new Set([1, 2, 3, 4])
const setB = new Set([2, 3])
const setC = new Set([3, 4, 5, 6])

isSuperset(setA, setB)          // returns true
union(setA, setC)               // returns Set {1, 2, 3, 4, 5, 6}
intersection(setA, setC)        // returns Set {3, 4}
symmetricDifference(setA, setC) // returns Set {1, 2, 5, 6}
difference(setA, setC)          // returns Set {1, 2}
```

### Relation with Array objects

```js
let myArray = ['value1', 'value2', 'value3']

// Use the regular Set constructor to transform an Array into a Set
let mySet = new Set(myArray)

mySet.has('value1')     // returns true

// Use the spread operator to transform a set into an Array.
console.log([...mySet]) // Will show you exactly the same Array as myArray
```

### Remove duplicate elements from the array

```js
// Use to remove duplicate elements from the array

const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]

console.log([...new Set(numbers)])

// [2, 3, 4, 5, 6, 7, 32]
```

### Relation with Strings

```js
let text = 'India'

const mySet = new Set(text)  // Set(5) {'I', 'n', 'd', 'i', 'a'}
mySet.size  // 5

//case sensitive & duplicate omission
new Set("Firefox")  // Set(7) { "F", "i", "r", "e", "f", "o", "x" }
new Set("firefox")  // Set(6) { "f", "i", "r", "e", "o", "x" }
```

### Use Set to ensure the uniqueness of a list of values

```js
const array = Array
  .from(document.querySelectorAll('[id]'))
  .map(function(e) {
      return e.id
  });

const set = new Set(array);
console.assert(set.size == array.length);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `Set` is available in [`core-js`](https://github.com/zloirock/core-js#set)
- {{jsxref("Map")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
