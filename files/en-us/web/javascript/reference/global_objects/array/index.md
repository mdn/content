---
title: Array
slug: Web/JavaScript/Reference/Global_Objects/Array
page-type: javascript-class
browser-compat: javascript.builtins.Array
---

{{JSRef}}

The **`Array`** object, as with arrays in other programming languages, enables [storing a collection of multiple items under a single variable name](/en-US/docs/Learn/JavaScript/First_steps/Arrays), and has members for [performing common array operations](#examples).

## Description

In JavaScript, arrays aren't [primitives](/en-US/docs/Glossary/Primitive) but are instead `Array` objects with the following core characteristics:

- **JavaScript arrays are resizable** and **can contain a mix of different [data types](/en-US/docs/Web/JavaScript/Data_structures)**. (When those characteristics are undesirable, use [typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) instead.)
- **JavaScript arrays are not associative arrays** and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
- **JavaScript arrays are [zero-indexed](https://en.wikipedia.org/wiki/Zero-based_numbering)**: the first element of an array is at index `0`, the second is at index `1`, and so on — and the last element is at the value of the array's {{jsxref("Array/length", "length")}} property minus `1`.
- **JavaScript [array-copy operations](#copy_an_array) create [shallow copies](/en-US/docs/Glossary/Shallow_copy)**. (All standard built-in copy operations with _any_ JavaScript objects create shallow copies, rather than [deep copies](/en-US/docs/Glossary/Deep_copy)).

### Array indices

`Array` objects cannot use arbitrary strings as element indexes (as in an [associative array](https://en.wikipedia.org/wiki/Associative_array)) but must use nonnegative integers (or their respective string form). Setting or accessing via non-integers will not set or retrieve an element from the array list itself, but will set or access a variable associated with that array's [object property collection](/en-US/docs/Web/JavaScript/Data_structures#properties). The array's object properties and list of array elements are separate, and the array's [traversal and mutation operations](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#array_methods) cannot be applied to these named properties.

Array elements are object properties in the same way that `toString` is a property (to be specific, however, `toString()` is a method). Nevertheless, trying to access an element of an array as follows throws a syntax error because the property name is not valid:

```js-nolint example-bad
arr.0; // a syntax error
```

JavaScript syntax requires properties beginning with a digit to be accessed using [bracket notation](/en-US/docs/Web/JavaScript/Guide/Working_with_objects#objects_and_properties) instead of [dot notation](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors). It's also possible to quote the array indices (e.g., `years['2']` instead of `years[2]`), although usually not necessary.

The `2` in `years[2]` is coerced into a string by the JavaScript engine through an implicit `toString` conversion. As a result, `'2'` and `'02'` would refer to two different slots on the `years` object, and the following example could be `true`:

```js
console.log(years["2"] !== years["02"]);
```

Only `years['2']` is an actual array index. `years['02']` is an arbitrary string property that will not be visited in array iteration.

### Relationship between length and numerical properties

A JavaScript array's {{jsxref("Array/length", "length")}} property and numerical properties are connected.

Several of the built-in array methods (e.g., {{jsxref("Array/join", "join()")}}, {{jsxref("Array/slice", "slice()")}}, {{jsxref("Array/indexOf", "indexOf()")}}, etc.) take into account the value of an array's {{jsxref("Array/length", "length")}} property when they're called.

Other methods (e.g., {{jsxref("Array/push", "push()")}}, {{jsxref("Array/splice", "splice()")}}, etc.) also result in updates to an array's {{jsxref("Array/length", "length")}} property.

```js
const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3
```

When setting a property on a JavaScript array when the property is a valid array index and that index is outside the current bounds of the array, the engine will update the array's {{jsxref("Array/length", "length")}} property accordingly:

```js
fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6
```

Increasing the {{jsxref("Array/length", "length")}} extends the array by adding empty slots without creating any new elements — not even `undefined`.

```js
fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined
```

Decreasing the {{jsxref("Array/length", "length")}} property does, however, delete elements.

```js
fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2
```

This is explained further on the {{jsxref("Array/length", "length")}} page.

### Array methods and empty slots

Empty slots in [sparse arrays](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) behave inconsistently between array methods. Generally, the older methods will skip empty slots, while newer ones treat them as `undefined`.

Among methods that iterate through multiple elements, the following do an [`in`](/en-US/docs/Web/JavaScript/Reference/Operators/in) check before accessing the index and do not conflate empty slots with `undefined`:

- {{jsxref("Array/concat", "concat()")}}
- {{jsxref("Array/copyWithin", "copyWithin()")}}
- {{jsxref("Array/every", "every()")}}
- {{jsxref("Array/filter", "filter()")}}
- {{jsxref("Array/flat", "flat()")}}
- {{jsxref("Array/flatMap", "flatMap()")}}
- {{jsxref("Array/forEach", "forEach()")}}
- {{jsxref("Array/indexOf", "indexOf()")}}
- {{jsxref("Array/lastIndexOf", "lastIndexOf()")}}
- {{jsxref("Array/map", "map()")}}
- {{jsxref("Array/reduce", "reduce()")}}
- {{jsxref("Array/reduceRight", "reduceRight()")}}
- {{jsxref("Array/reverse", "reverse()")}}
- {{jsxref("Array/slice", "slice()")}}
- {{jsxref("Array/some", "some()")}}
- {{jsxref("Array/sort", "sort()")}}
- {{jsxref("Array/splice", "splice()")}}

For exactly how they treat empty slots, see the page for each method.

These methods treat empty slots as if they are `undefined`:

- {{jsxref("Array/entries", "entries()")}}
- {{jsxref("Array/fill", "fill()")}}
- {{jsxref("Array/find", "find()")}}
- {{jsxref("Array/findIndex", "findIndex()")}}
- {{jsxref("Array/findLast", "findLast()")}}
- {{jsxref("Array/findLastIndex", "findLastIndex()")}}
- {{jsxref("Array/includes", "includes()")}}
- {{jsxref("Array/join", "join()")}}
- {{jsxref("Array/keys", "keys()")}}
- {{jsxref("Array/toLocaleString", "toLocaleString()")}}
- {{jsxref("Array/values", "values()")}}

### Copying methods and mutating methods

Some methods do not mutate the existing array that the method was called on, but instead return a new array. They do so by first constructing a new array and then populating it with elements. The copy always happens [_shallowly_](/en-US/docs/Glossary/Shallow_copy) — the method never copies anything beyond the initially created array. Elements of the original array(s) are copied into the new array as follows:

- Objects: the object reference is copied into the new array. Both the original and new array refer to the same object. That is, if a referenced object is modified, the changes are visible to both the new and original arrays.
- Primitive types such as strings, numbers and booleans (not {{jsxref("Global_Objects/String", "String")}}, {{jsxref("Global_Objects/Number", "Number")}}, and {{jsxref("Global_Objects/Boolean", "Boolean")}} objects): their values are copied into the new array.

Other methods mutate the array that the method was called on, in which case their return value differs depending on the method: sometimes a reference to the same array, sometimes the length of the new array.

The following methods create new arrays by accessing [`this.constructor[Symbol.species]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@species) to determine the constructor to use:

- {{jsxref("Array/concat", "concat()")}}
- {{jsxref("Array/filter", "filter()")}}
- {{jsxref("Array/flat", "flat()")}}
- {{jsxref("Array/flatMap", "flatMap()")}}
- {{jsxref("Array/map", "map()")}}
- {{jsxref("Array/slice", "slice()")}}
- {{jsxref("Array/splice", "splice()")}} (to construct the array of removed elements that's returned)

The following methods always create new arrays with the `Array` base constructor:

- {{jsxref("Array/toReversed", "toReversed()")}}
- {{jsxref("Array/toSorted", "toSorted()")}}
- {{jsxref("Array/toSpliced", "toSpliced()")}}
- {{jsxref("Array/with", "with()")}}

The following table lists the methods that mutate the original array, and the corresponding non-mutating alternative:

| Mutating method                                | Non-mutating alternative                                 |
| ---------------------------------------------- | -------------------------------------------------------- |
| {{jsxref("Array/copyWithin", "copyWithin()")}} | No one-method alternative                                |
| {{jsxref("Array/fill", "fill()")}}             | No one-method alternative                                |
| {{jsxref("Array/pop", "pop()")}}               | {{jsxref("Array/slice", "slice(0, -1)")}}                |
| {{jsxref("Array/push", "push(v1, v2)")}}       | {{jsxref("Array/concat", "concat([v1, v2])")}}           |
| {{jsxref("Array/reverse", "reverse()")}}       | {{jsxref("Array/toReversed", "toReversed()")}}           |
| {{jsxref("Array/shift", "shift()")}}           | {{jsxref("Array/slice", "slice(1)")}}                    |
| {{jsxref("Array/sort", "sort()")}}             | {{jsxref("Array/toSorted", "toSorted()")}}               |
| {{jsxref("Array/splice", "splice()")}}         | {{jsxref("Array/toSpliced", "toSpliced()")}}             |
| {{jsxref("Array/unshift", "unshift(v1, v2)")}} | {{jsxref("Array/toSpliced", "toSpliced(0, 0, v1, v2)")}} |

An easy way to change a mutating method into a non-mutating alternative is to use the [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) or {{jsxref("Array/slice", "slice()")}} to create a copy first:

```js-nolint
arr.copyWithin(0, 1, 2); // mutates arr
const arr2 = arr.slice().copyWithin(0, 1, 2); // does not mutate arr
const arr3 = [...arr].copyWithin(0, 1, 2); // does not mutate arr
```

### Iterative methods

Many array methods take a callback function as an argument. The callback function is called sequentially and at most once for each element in the array, and the return value of the callback function is used to determine the return value of the method. They all share the same signature:

```js-nolint
method(callbackFn, thisArg)
```

Where `callbackFn` takes three arguments:

- `element`
  - : The current element being processed in the array.
- `index`
  - : The index of the current element being processed in the array.
- `array`
  - : The array that the method was called upon.

What `callbackFn` is expected to return depends on the array method that was called.

The `thisArg` argument (defaults to `undefined`) will be used as the `this` value when calling `callbackFn`. The `this` value ultimately observable by `callbackFn` is determined according to [the usual rules](/en-US/docs/Web/JavaScript/Reference/Operators/this): if `callbackFn` is [non-strict](/en-US/docs/Web/JavaScript/Reference/Strict_mode#no_this_substitution), primitive `this` values are wrapped into objects, and `undefined`/`null` is substituted with [`globalThis`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis). The `thisArg` argument is irrelevant for any `callbackFn` defined with an [arrow function](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), as arrow functions don't have their own `this` {{glossary("binding")}}.

All iterative methods are [copying](#copying_methods_and_mutating_methods) and [generic](#generic_array_methods), although they behave differently with [empty slots](#array_methods_and_empty_slots).

The following methods are iterative:

- {{jsxref("Array/every", "every()")}}
- {{jsxref("Array/filter", "filter()")}}
- {{jsxref("Array/find", "find()")}}
- {{jsxref("Array/findIndex", "findIndex()")}}
- {{jsxref("Array/findLast", "findLast()")}}
- {{jsxref("Array/findLastIndex", "findLastIndex()")}}
- {{jsxref("Array/flatMap", "flatMap()")}}
- {{jsxref("Array/forEach", "forEach()")}}
- {{jsxref("Array/map", "map()")}}
- {{jsxref("Array/some", "some()")}}

In particular, {{jsxref("Array/every", "every()")}}, {{jsxref("Array/find", "find()")}}, {{jsxref("Array/findIndex", "findIndex()")}}, {{jsxref("Array/findLast", "findLast()")}}, {{jsxref("Array/findLastIndex", "findLastIndex()")}}, and {{jsxref("Array/some", "some()")}} do not always invoke `callbackFn` on every element — they stop iteration as soon as the return value is determined.

There are two other methods that take a callback function and run it at most once for each element in the array, but they have slightly different signatures from typical iterative methods (for example, they don't accept `thisArg`):

- {{jsxref("Array/reduce", "reduce()")}}
- {{jsxref("Array/reduceRight", "reduceRight()")}}

The {{jsxref("Array/sort", "sort()")}} method also takes a callback function, but it is not an iterative method. It mutates the array in-place, doesn't accept `thisArg`, and may invoke the callback multiple times on an index.

### Generic array methods

Array methods are always generic — they don't access any internal data of the array object. They only access the array elements through the `length` property and the indexed elements. This means that they can be called on array-like objects as well.

```js
const arrayLike = {
  0: "a",
  1: "b",
  length: 2,
};
console.log(Array.prototype.join.call(arrayLike, "+")); // 'a+b'
```

#### Normalization of the length property

The `length` property is [converted to an integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) and then clamped to the range between 0 and 2<sup>53</sup> - 1. `NaN` becomes `0`, so even when `length` is not present or is `undefined`, it behaves as if it has value `0`.

The language avoids setting `length` to an [unsafe integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER). All built-in methods will throw a {{jsxref("TypeError")}} if `length` will be set to a number greater than 2<sup>53</sup> - 1. However, because the {{jsxref("Array/length", "length")}} property of arrays throws an error if it's set to greater than 2<sup>32</sup> - 1, the safe integer threshold is usually not reached unless the method is called on a non-array object.

```js
Array.prototype.flat.call({}); // []
```

Some array methods set the `length` property of the array object. They always set the value after normalization, so `length` always ends as an integer.

```js
const a = { length: 0.7 };
Array.prototype.push.call(a);
console.log(a.length); // 0
```

#### Array-like objects

The term [_array-like object_](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) refers to any object that doesn't throw during the `length` conversion process described above. In practice, such object is expected to actually have a `length` property and to have indexed elements in the range `0` to `length - 1`. (If it doesn't have all indices, it will be functionally equivalent to a [sparse array](#array_methods_and_empty_slots).) Any integer index less than zero or greater than `length - 1` is ignored when an array method operates on an array-like object.

Many DOM objects are array-like — for example, [`NodeList`](/en-US/docs/Web/API/NodeList) and [`HTMLCollection`](/en-US/docs/Web/API/HTMLCollection). The [`arguments`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object is also array-like. You can call array methods on them even if they don't have these methods themselves.

```js
function f() {
  console.log(Array.prototype.join.call(arguments, "+"));
}

f("a", "b"); // 'a+b'
```

## Constructor

- {{jsxref("Array/Array", "Array()")}}
  - : Creates a new `Array` object.

## Static properties

- {{jsxref("Array/@@species", "Array[@@species]")}}
  - : Returns the `Array` constructor.

## Static methods

- {{jsxref("Array.from()")}}
  - : Creates a new `Array` instance from an iterable or array-like object.
- {{jsxref("Array.fromAsync()")}}
  - : Creates a new `Array` instance from an async iterable, iterable, or array-like object.
- {{jsxref("Array.isArray()")}}
  - : Returns `true` if the argument is an array, or `false` otherwise.
- {{jsxref("Array.of()")}}
  - : Creates a new `Array` instance with a variable number of arguments, regardless of number or type of the arguments.

## Instance properties

These properties are defined on `Array.prototype` and shared by all `Array` instances.

- {{jsxref("Object/constructor", "Array.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Array` instances, the initial value is the {{jsxref("Array/Array", "Array")}} constructor.
- {{jsxref("Array/@@unscopables", "Array.prototype[@@unscopables]")}}
  - : Contains property names that were not included in the ECMAScript standard prior to the ES2015 version and that are ignored for [`with`](/en-US/docs/Web/JavaScript/Reference/Statements/with) statement-binding purposes.

These properties are own properties of each `Array` instance.

- {{jsxref("Array/length", "length")}}
  - : Reflects the number of elements in an array.

## Instance methods

- {{jsxref("Array.prototype.at()")}}
  - : Returns the array item at the given index. Accepts negative integers, which count back from the last item.
- {{jsxref("Array.prototype.concat()")}}
  - : Returns a new array that is the calling array joined with other array(s) and/or value(s).
- {{jsxref("Array.prototype.copyWithin()")}}
  - : Copies a sequence of array elements within an array.
- {{jsxref("Array.prototype.entries()")}}
  - : Returns a new [_array iterator_](/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators) object that contains the key/value pairs for each index in an array.
- {{jsxref("Array.prototype.every()")}}
  - : Returns `true` if every element in the calling array satisfies the testing function.
- {{jsxref("Array.prototype.fill()")}}
  - : Fills all the elements of an array from a start index to an end index with a static value.
- {{jsxref("Array.prototype.filter()")}}
  - : Returns a new array containing all elements of the calling array for which the provided filtering function returns `true`.
- {{jsxref("Array.prototype.find()")}}
  - : Returns the value of the first element in the array that satisfies the provided testing function, or `undefined` if no appropriate element is found.
- {{jsxref("Array.prototype.findIndex()")}}
  - : Returns the index of the first element in the array that satisfies the provided testing function, or `-1` if no appropriate element was found.
- {{jsxref("Array.prototype.findLast()")}}
  - : Returns the value of the last element in the array that satisfies the provided testing function, or `undefined` if no appropriate element is found.
- {{jsxref("Array.prototype.findLastIndex()")}}
  - : Returns the index of the last element in the array that satisfies the provided testing function, or `-1` if no appropriate element was found.
- {{jsxref("Array.prototype.flat()")}}
  - : Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
- {{jsxref("Array.prototype.flatMap()")}}
  - : Returns a new array formed by applying a given callback function to each element of the calling array, and then flattening the result by one level.
- {{jsxref("Array.prototype.forEach()")}}
  - : Calls a function for each element in the calling array.
- {{jsxref("Array.prototype.includes()")}}
  - : Determines whether the calling array contains a value, returning `true` or `false` as appropriate.
- {{jsxref("Array.prototype.indexOf()")}}
  - : Returns the first (least) index at which a given element can be found in the calling array.
- {{jsxref("Array.prototype.join()")}}
  - : Joins all elements of an array into a string.
- {{jsxref("Array.prototype.keys()")}}
  - : Returns a new [_array iterator_](/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators) that contains the keys for each index in the calling array.
- {{jsxref("Array.prototype.lastIndexOf()")}}
  - : Returns the last (greatest) index at which a given element can be found in the calling array, or `-1` if none is found.
- {{jsxref("Array.prototype.map()")}}
  - : Returns a new array containing the results of invoking a function on every element in the calling array.
- {{jsxref("Array.prototype.pop()")}}
  - : Removes the last element from an array and returns that element.
- {{jsxref("Array.prototype.push()")}}
  - : Adds one or more elements to the end of an array, and returns the new `length` of the array.
- {{jsxref("Array.prototype.reduce()")}}
  - : Executes a user-supplied "reducer" callback function on each element of the array (from left to right), to reduce it to a single value.
- {{jsxref("Array.prototype.reduceRight()")}}
  - : Executes a user-supplied "reducer" callback function on each element of the array (from right to left), to reduce it to a single value.
- {{jsxref("Array.prototype.reverse()")}}
  - : Reverses the order of the elements of an array _in place_. (First becomes the last, last becomes first.)
- {{jsxref("Array.prototype.shift()")}}
  - : Removes the first element from an array and returns that element.
- {{jsxref("Array.prototype.slice()")}}
  - : Extracts a section of the calling array and returns a new array.
- {{jsxref("Array.prototype.some()")}}
  - : Returns `true` if at least one element in the calling array satisfies the provided testing function.
- {{jsxref("Array.prototype.sort()")}}
  - : Sorts the elements of an array in place and returns the array.
- {{jsxref("Array.prototype.splice()")}}
  - : Adds and/or removes elements from an array.
- {{jsxref("Array.prototype.toLocaleString()")}}
  - : Returns a localized string representing the calling array and its elements. Overrides the {{jsxref("Object.prototype.toLocaleString()")}} method.
- {{jsxref("Array.prototype.toReversed()")}}
  - : Returns a new array with the elements in reversed order, without modifying the original array.
- {{jsxref("Array.prototype.toSorted()")}}
  - : Returns a new array with the elements sorted in ascending order, without modifying the original array.
- {{jsxref("Array.prototype.toSpliced()")}}
  - : Returns a new array with some elements removed and/or replaced at a given index, without modifying the original array.
- {{jsxref("Array.prototype.toString()")}}
  - : Returns a string representing the calling array and its elements. Overrides the {{jsxref("Object.prototype.toString()")}} method.
- {{jsxref("Array.prototype.unshift()")}}
  - : Adds one or more elements to the front of an array, and returns the new `length` of the array.
- {{jsxref("Array.prototype.values()")}}
  - : Returns a new [_array iterator_](/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators) object that contains the values for each index in the array.
- {{jsxref("Array.prototype.with()")}}
  - : Returns a new array with the element at the given index replaced with the given value, without modifying the original array.
- [`Array.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)
  - : An alias for the [`values()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values) method by default.

## Examples

This section provides some examples of common array operations in JavaScript.

> **Note:** If you're not yet familiar with array basics, consider first reading [JavaScript First Steps: Arrays](/en-US/docs/Learn/JavaScript/First_steps/Arrays), which [explains what arrays are](/en-US/docs/Learn/JavaScript/First_steps/Arrays#what_is_an_array), and includes other examples of common array operations.

### Create an array

This example shows three ways to create new array: first using [array literal notation](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#array_literal_notation), then using the [`Array()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) constructor, and finally using [`String.prototype.split()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) to build the array from a string.

```js
// 'fruits' array created using array literal notation.
const fruits = ["Apple", "Banana"];
console.log(fruits.length);
// 2

// 'fruits2' array created using the Array() constructor.
const fruits2 = new Array("Apple", "Banana");
console.log(fruits2.length);
// 2

// 'fruits3' array created using String.prototype.split().
const fruits3 = "Apple, Banana".split(", ");
console.log(fruits3.length);
// 2
```

### Create a string from an array

This example uses the [`join()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) method to create a string from the `fruits` array.

```js
const fruits = ["Apple", "Banana"];
const fruitsString = fruits.join(", ");
console.log(fruitsString);
// "Apple, Banana"
```

### Access an array item by its index

This example shows how to access items in the `fruits` array by specifying the index number of their position in the array.

```js
const fruits = ["Apple", "Banana"];

// The index of an array's first element is always 0.
fruits[0]; // Apple

// The index of an array's second element is always 1.
fruits[1]; // Banana

// The index of an array's last element is always one
// less than the length of the array.
fruits[fruits.length - 1]; // Banana

// Using an index number larger than the array's length
// returns 'undefined'.
fruits[99]; // undefined
```

### Find the index of an item in an array

This example uses the [`indexOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) method to find the position (index) of the string `"Banana"` in the `fruits` array.

```js
const fruits = ["Apple", "Banana"];
console.log(fruits.indexOf("Banana"));
// 1
```

### Check if an array contains a certain item

This example shows two ways to check if the `fruits` array contains `"Banana"` and `"Cherry"`: first with the [`includes()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) method, and then with the [`indexOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) method to test for an index value that's not `-1`.

```js
const fruits = ["Apple", "Banana"];

fruits.includes("Banana"); // true
fruits.includes("Cherry"); // false

// If indexOf() doesn't return -1, the array contains the given item.
fruits.indexOf("Banana") !== -1; // true
fruits.indexOf("Cherry") !== -1; // false
```

### Append an item to an array

This example uses the [`push()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) method to append a new string to the `fruits` array.

```js
const fruits = ["Apple", "Banana"];
const newLength = fruits.push("Orange");
console.log(fruits);
// ["Apple", "Banana", "Orange"]
console.log(newLength);
// 3
```

### Remove the last item from an array

This example uses the [`pop()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) method to remove the last item from the `fruits` array.

```js
const fruits = ["Apple", "Banana", "Orange"];
const removedItem = fruits.pop();
console.log(fruits);
// ["Apple", "Banana"]
console.log(removedItem);
// Orange
```

> **Note:** `pop()` can only be used to remove the last item from an array. To remove multiple items from the end of an array, see the next example.

### Remove multiple items from the end of an array

This example uses the [`splice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) method to remove the last 3 items from the `fruits` array.

```js
const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
const start = -3;
const removedItems = fruits.splice(start);
console.log(fruits);
// ["Apple", "Banana"]
console.log(removedItems);
// ["Strawberry", "Mango", "Cherry"]
```

### Truncate an array down to just its first N items

This example uses the [`splice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) method to truncate the `fruits` array down to just its first 2 items.

```js
const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
const start = 2;
const removedItems = fruits.splice(start);
console.log(fruits);
// ["Apple", "Banana"]
console.log(removedItems);
// ["Strawberry", "Mango", "Cherry"]
```

### Remove the first item from an array

This example uses the [`shift()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) method to remove the first item from the `fruits` array.

```js
const fruits = ["Apple", "Banana"];
const removedItem = fruits.shift();
console.log(fruits);
// ["Banana"]
console.log(removedItem);
// Apple
```

> **Note:** `shift()` can only be used to remove the first item from an array. To remove multiple items from the beginning of an array, see the next example.

### Remove multiple items from the beginning of an array

This example uses the [`splice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) method to remove the first 3 items from the `fruits` array.

```js
const fruits = ["Apple", "Strawberry", "Cherry", "Banana", "Mango"];
const start = 0;
const deleteCount = 3;
const removedItems = fruits.splice(start, deleteCount);
console.log(fruits);
// ["Banana", "Mango"]
console.log(removedItems);
// ["Apple", "Strawberry", "Cherry"]
```

### Add a new first item to an array

This example uses the [`unshift()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) method to add, at index `0`, a new item to the `fruits` array — making it the new first item in the array.

```js
const fruits = ["Banana", "Mango"];
const newLength = fruits.unshift("Strawberry");
console.log(fruits);
// ["Strawberry", "Banana", "Mango"]
console.log(newLength);
// 3
```

### Remove a single item by index

This example uses the [`splice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) method to remove the string `"Banana"` from the `fruits` array — by specifying the index position of `"Banana"`.

```js
const fruits = ["Strawberry", "Banana", "Mango"];
const start = fruits.indexOf("Banana");
const deleteCount = 1;
const removedItems = fruits.splice(start, deleteCount);
console.log(fruits);
// ["Strawberry", "Mango"]
console.log(removedItems);
// ["Banana"]
```

### Remove multiple items by index

This example uses the [`splice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) method to remove the strings `"Banana"` and `"Strawberry"` from the `fruits` array — by specifying the index position of `"Banana"`, along with a count of the number of total items to remove.

```js
const fruits = ["Apple", "Banana", "Strawberry", "Mango"];
const start = 1;
const deleteCount = 2;
const removedItems = fruits.splice(start, deleteCount);
console.log(fruits);
// ["Apple", "Mango"]
console.log(removedItems);
// ["Banana", "Strawberry"]
```

### Replace multiple items in an array

This example uses the [`splice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) method to replace the last 2 items in the `fruits` array with new items.

```js
const fruits = ["Apple", "Banana", "Strawberry"];
const start = -2;
const deleteCount = 2;
const removedItems = fruits.splice(start, deleteCount, "Mango", "Cherry");
console.log(fruits);
// ["Apple", "Mango", "Cherry"]
console.log(removedItems);
// ["Banana", "Strawberry"]
```

### Iterate over an array

This example uses a [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop to iterate over the `fruits` array, logging each item to the console.

```js
const fruits = ["Apple", "Mango", "Cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}
// Apple
// Mango
// Cherry
```

But `for...of` is just one of many ways to iterate over any array; for more ways, see [Loops and iteration](/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration), and see the documentation for the [`every()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`filter()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [`flatMap()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap), [`map()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`reduce()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce), and [`reduceRight()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) methods — and see the next example, which uses the [`forEach()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method.

### Call a function on each element in an array

This example uses the [`forEach()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method to call a function on each element in the `fruits` array; the function causes each item to be logged to the console, along with the item's index number.

```js
const fruits = ["Apple", "Mango", "Cherry"];
fruits.forEach((item, index, array) => {
  console.log(item, index);
});
// Apple 0
// Mango 1
// Cherry 2
```

### Merge multiple arrays together

This example uses the [`concat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) method to merge the `fruits` array with a `moreFruits` array, to produce a new `combinedFruits` array. Notice that `fruits` and `moreFruits` remain unchanged.

```js
const fruits = ["Apple", "Banana", "Strawberry"];
const moreFruits = ["Mango", "Cherry"];
const combinedFruits = fruits.concat(moreFruits);
console.log(combinedFruits);
// ["Apple", "Banana", "Strawberry", "Mango", "Cherry"]

// The 'fruits' array remains unchanged.
console.log(fruits);
// ["Apple", "Banana", "Strawberry"]

// The 'moreFruits' array also remains unchanged.
console.log(moreFruits);
// ["Mango", "Cherry"]
```

### Copy an array

This example shows three ways to create a new array from the existing `fruits` array: first by using [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), then by using the [`from()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) method, and then by using the [`slice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) method.

```js
const fruits = ["Strawberry", "Mango"];

// Create a copy using spread syntax.
const fruitsCopy = [...fruits];
// ["Strawberry", "Mango"]

// Create a copy using the from() method.
const fruitsCopy2 = Array.from(fruits);
// ["Strawberry", "Mango"]

// Create a copy using the slice() method.
const fruitsCopy3 = fruits.slice();
// ["Strawberry", "Mango"]
```

All built-in array-copy operations ([spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.from()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [`Array.prototype.slice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), and [`Array.prototype.concat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)) create [shallow copies](/en-US/docs/Glossary/Shallow_copy). If you instead want a [deep copy](/en-US/docs/Glossary/Deep_copy) of an array, you can use {{jsxref("JSON.stringify()")}} to convert the array to a JSON string, and then {{jsxref("JSON.parse()")}} to convert the string back into a new array that's completely independent from the original array.

```js
const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits));
```

You can also create deep copies using the [`structuredClone()`](/en-US/docs/Web/API/structuredClone) method, which has the advantage of allowing [transferable objects](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects) in the source to be _transferred_ to the new copy, rather than just cloned.

Finally, it's important to understand that assigning an existing array to a new variable doesn't create a copy of either the array or its elements. Instead the new variable is just a reference, or alias, to the original array; that is, the original array's name and the new variable name are just two names for the exact same object (and so will always evaluate as [strictly equivalent](/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#strict_equality_using)). Therefore, if you make any changes at all either to the value of the original array or to the value of the new variable, the other will change, too:

```js
const fruits = ["Strawberry", "Mango"];
const fruitsAlias = fruits;
// 'fruits' and 'fruitsAlias' are the same object, strictly equivalent.
fruits === fruitsAlias; // true
// Any changes to the 'fruits' array change 'fruitsAlias' too.
fruits.unshift("Apple", "Banana");
console.log(fruits);
// ['Apple', 'Banana', 'Strawberry', 'Mango']
console.log(fruitsAlias);
// ['Apple', 'Banana', 'Strawberry', 'Mango']
```

### Creating a two-dimensional array

The following creates a chessboard as a two-dimensional array of strings. The first move is made by copying the `'p'` in `board[6][4]` to `board[4][4]`. The old position at `[6][4]` is made blank.

```js
const board = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"],
];

console.log(`${board.join("\n")}\n\n`);

// Move King's Pawn forward 2
board[4][4] = board[6][4];
board[6][4] = " ";
console.log(board.join("\n"));
```

Here is the output:

```plain
R,N,B,Q,K,B,N,R
P,P,P,P,P,P,P,P
 , , , , , , ,
 , , , , , , ,
 , , , , , , ,
 , , , , , , ,
p,p,p,p,p,p,p,p
r,n,b,q,k,b,n,r

R,N,B,Q,K,B,N,R
P,P,P,P,P,P,P,P
 , , , , , , ,
 , , , , , , ,
 , , , ,p, , ,
 , , , , , , ,
p,p,p,p, ,p,p,p
r,n,b,q,k,b,n,r
```

### Using an array to tabulate a set of values

```js
const values = [];
for (let x = 0; x < 10; x++) {
  values.push([2 ** x, 2 * x ** 2]);
}
console.table(values);
```

Results in

```plain
// The first column is the index
0  1    0
1  2    2
2  4    8
3  8    18
4  16   32
5  32   50
6  64   72
7  128  98
8  256  128
9  512  162
```

### Creating an array using the result of a match

The result of a match between a {{jsxref("RegExp")}} and a string can create a JavaScript array that has properties and elements which provide information about the match. Such an array is returned by {{jsxref("RegExp.prototype.exec()")}} and {{jsxref("String.prototype.match()")}}.

For example:

```js
// Match one d followed by one or more b's followed by one d
// Remember matched b's and the following d
// Ignore case

const myRe = /d(b+)(d)/i;
const execResult = myRe.exec("cdbBdbsbz");

console.log(execResult.input); // 'cdbBdbsbz'
console.log(execResult.index); // 1
console.log(execResult); // [ "dbBd", "bB", "d" ]
```

For more information about the result of a match, see the {{jsxref("RegExp.prototype.exec()")}} and {{jsxref("String.prototype.match()")}} pages.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
