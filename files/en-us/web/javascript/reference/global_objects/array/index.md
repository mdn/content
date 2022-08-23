---
title: Array
slug: Web/JavaScript/Reference/Global_Objects/Array
tags:
  - Array
  - Class
  - Example
  - Global Objects
  - JavaScript
  - Reference
browser-compat: javascript.builtins.Array
---
{{JSRef}}

The **`Array`** object, as with arrays in other programming languages, enables [storing a collection of multiple items under a single variable name](/en-US/docs/Learn/JavaScript/First_steps/Arrays), and has members for [performing common array operations](#examples).

## Description

In JavaScript, arrays aren't [primitives](/en-US/docs/Glossary/Primitive) but are instead `Array` objects with the following core characteristics:

- **JavaScript arrays are resizable** and **can contain a mix of different [data types](/en-US/docs/Web/JavaScript/Data_structures)**. (When those characteristics are undesirable, use [typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays) instead.)

- **JavaScript arrays are not associative arrays** and so, [array elements cannot be accessed using arbitrary strings as indexes](#notes), but must be accessed using nonnegative integers (or their respective string form) as indexes.

- **JavaScript arrays are [zero-indexed](https://en.wikipedia.org/wiki/Zero-based_numbering)**: the first element of an array is at index `0`, the second is at index `1`, and so on — and the last element is at the value of the array's {{jsxref("Array.length", "length")}} property minus `1`.

- **JavaScript [array-copy operations](#copy_an_array) create [shallow copies](/en-US/docs/Glossary/Shallow_copy)**. (All standard built-in copy operations with _any_ JavaScript objects create shallow copies, rather than [deep copies](/en-US/docs/Glossary/Deep_copy)).

## Constructor

- {{jsxref("Array/Array", "Array()")}}
  - : Creates a new `Array` object.

## Static properties

- {{jsxref("Array/@@species", "get Array[@@species]")}}
  - : Returns the `Array` constructor.

## Static methods

- {{jsxref("Array.from()")}}
  - : Creates a new `Array` instance from an array-like object or iterable object.
- {{jsxref("Array.isArray()")}}
  - : Returns `true` if the argument is an array, or `false` otherwise.
- {{jsxref("Array.of()")}}
  - : Creates a new `Array` instance with a variable number of arguments, regardless of number or type of the arguments.

## Instance properties

- {{jsxref("Array.prototype.length")}}
  - : Reflects the number of elements in an array.
- {{jsxref("Array/@@unscopables", "Array.prototype[@@unscopables]")}}
  - : Contains property names that were not included in the ECMAScript standard prior to the ES2015 version and that are ignored for [`with`](/en-US/docs/Web/JavaScript/Reference/Statements/with) statement-binding purposes.

## Instance methods

- {{jsxref("Array.prototype.at()")}}
  - : Returns the array item at the given index. Accepts negative integers, which count back from the last item.
- {{jsxref("Array.prototype.concat()")}}
  - : Returns a new array that is the calling array joined with other array(s) and/or value(s).
- {{jsxref("Array.prototype.copyWithin()")}}
  - : Copies a sequence of array elements within an array.
- {{jsxref("Array.prototype.entries()")}}
  - : Returns a new [_array iterator_](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) object that contains the key/value pairs for each index in an array.
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
- {{jsxref("Array.prototype.group()")}} {{Experimental_Inline}}
  - : Groups the elements of an array into an object according to the strings returned by a test function.
- {{jsxref("Array.prototype.groupToMap()")}} {{Experimental_Inline}}
  - : Groups the elements of an array into a {{jsxref("Map")}} according to values returned by a test function.
- {{jsxref("Array.prototype.includes()")}}
  - : Determines whether the calling array contains a value, returning `true` or `false` as appropriate.
- {{jsxref("Array.prototype.indexOf()")}}
  - : Returns the first (least) index at which a given element can be found in the calling array.
- {{jsxref("Array.prototype.join()")}}
  - : Joins all elements of an array into a string.
- {{jsxref("Array.prototype.keys()")}}
  - : Returns a new [_array iterator_](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) that contains the keys for each index in the calling array.
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
- {{jsxref("Array.prototype.toString()")}}
  - : Returns a string representing the calling array and its elements. Overrides the {{jsxref("Object.prototype.toString()")}} method.
- {{jsxref("Array.prototype.unshift()")}}
  - : Adds one or more elements to the front of an array, and returns the new `length` of the array.
- {{jsxref("Array.prototype.values()")}}
  - : Returns a new [_array iterator_](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) object that contains the values for each index in the array.
- [`Array.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)
  - : Returns the [`values()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values) function by default.

## Examples

This section provides some examples of common array operations in JavaScript.

> **Note:** If you're not yet familiar with array basics, consider first reading [JavaScript First Steps: Arrays](/en-US/docs/Learn/JavaScript/First_steps/Arrays), which [explains what arrays are](/en-US/docs/Learn/JavaScript/First_steps/Arrays#what_is_an_array), and includes other examples of common array operations.

### Create an array

This example shows three ways to create new array: first using [array literal notation](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#array_literal_notation), then using the [`Array()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) constructor, and finally using [`String.prototype.split()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) to build the array from a string.

```js
// 'fruits' array created using array literal notation.
const fruits = ['Apple', 'Banana'];
console.log(fruits.length);
// 2

// 'fruits2' array created using the Array() constructor.
const fruits2 = new Array('Apple', 'Banana');
console.log(fruits2.length);
// 2

// 'fruits3' array created using String.prototype.split().
const fruits3 = 'Apple, Banana'.split(', ');
console.log(fruits3.length);
// 2
```

### Create a string from an array

This example uses the [`join()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) method to create a string from the `fruits` array.

```js
const fruits = ['Apple', 'Banana'];
const fruitsString = fruits.join(', ');
console.log(fruitsString);
// "Apple, Banana"
```

### Access an array item by its index

This example shows how to access items in the `fruits` array by specifying the index number of their position in the array.

```js
const fruits = ['Apple', 'Banana'];

// The index of an array's first element is always 0.
fruits[0]; // Apple

// The index of an array's second element is always 1.
fruits[1]; // Banana

// The index of an array's last element is always one
// less than the length of the array.
fruits[fruits.length - 1]; // Banana

// Using a index number larger than the array's length
// returns 'undefined'.
fruits[99]; // undefined
```

### Find the index of an item in an array

This example uses the [`indexOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) method to find the position (index) of the string `"Banana"` in the `fruits` array.

```js
const fruits = ['Apple', 'Banana'];
console.log(fruits.indexOf('Banana'));
// 1
```

### Check if an array contains a certain item

This example shows two ways to check if the `fruits` array contains `"Banana"` and `"Cherry"`: first with the [`includes()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) method, and then with the [`indexOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) method to test for an index value that's not `-1`.

```js
const fruits = ['Apple', 'Banana'];

fruits.includes('Banana'); // true
fruits.includes('Cherry'); // false

// If indexOf() doesn't return -1, the array contains the given item.
fruits.indexOf('Banana') !== -1; // true
fruits.indexOf('Cherry') !== -1; // false
```

### Append an item to an array

This example uses the [`push()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) method to append a new string to the `fruits` array.

```js
const fruits = ['Apple', 'Banana'];
const newLength = fruits.push('Orange');
console.log(fruits);
// ["Apple", "Banana", "Orange"]
console.log(newLength);
// 3
```

### Remove the last item from an array

This example uses the [`pop()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) method to remove the last item from the `fruits` array.

```js
const fruits = ['Apple', 'Banana', 'Orange'];
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
const fruits = ['Apple', 'Banana', 'Strawberry', 'Mango', 'Cherry'];
const start = -3;
const removedItems = fruits.splice(start);
console.log(fruits);
// ["Apple", "Banana"]
console.log(removedItems);
// ["Strawberry", "Mango", "Cherry"]
```

### Truncate an array down to just its first _N_ items

This example uses the [`splice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) method to truncate the `fruits` array down to just its first 2 items.

```js
const fruits = ['Apple', 'Banana', 'Strawberry', 'Mango', 'Cherry'];
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
const fruits = ['Apple', 'Banana'];
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
const fruits = ['Apple', 'Strawberry', 'Cherry', 'Banana', 'Mango'];
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
const fruits = ['Banana', 'Mango'];
const newLength = fruits.unshift('Strawberry');
console.log(fruits);
// ["Strawberry", "Banana", "Mango"]
console.log(newLength);
// 3
```

### Remove a single item by index

This example uses the [`splice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) method to remove the string `"Banana"` from the `fruits` array — by specifying the index position of `"Banana"`.

```js
const fruits = ['Strawberry', 'Banana', 'Mango'];
const start = fruits.indexOf('Banana');
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
const fruits = ['Apple', 'Banana', 'Strawberry', 'Mango'];
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
const fruits = ['Apple', 'Banana', 'Strawberry'];
const start = -2;
const deleteCount = 2;
const removedItems = fruits.splice(start, deleteCount, 'Mango', 'Cherry');
console.log(fruits);
// ["Apple", "Mango", "Cherry"]
console.log(removedItems);
// ["Banana", "Strawberry"]
```

### Iterate over an array

This example uses a [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop to iterate over the `fruits` array, logging each item to the console.

```js
const fruits = ['Apple', 'Mango', 'Cherry'];
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
const fruits = ['Apple', 'Mango', 'Cherry'];
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
const fruits = ['Apple', 'Banana', 'Strawberry'];
const moreFruits = ['Mango', 'Cherry'];
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
const fruits = ['Strawberry', 'Mango'];

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

You can also create deep copies using the [`structuredClone()`](/en-US/docs/Web/API/structuredClone) method, which has the advantage of allowing {{Glossary("transferable objects")}} in the source to be _transferred_ to the new copy, rather than just cloned.

Finally, it's important to understand that assigning an existing array to a new variable doesn't create a copy of either the array or its elements. Instead the new variable is just a reference, or alias, to the original array; that is, the original array's name and the new variable name are just two names for the exact same object (and so will always evaluate as [strictly equivalent](/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#strict_equality_using_)). Therefore, if you make any changes at all either to the value of the original array or to the value of the new variable, the other will change, too:

```js
const fruits = ['Strawberry', 'Mango'];
const fruitsAlias = fruits;
// 'fruits' and 'fruitsAlias' are the same object, strictly equivalent.
fruits === fruitsAlias // true
// Any changes to the 'fruits' array change 'fruitsAlias' too.
fruits.unshift('Apple', 'Banana');
console.log(fruits);
// ['Apple', 'Banana', 'Strawberry', 'Mango']
console.log(fruitsAlias);
// ['Apple', 'Banana', 'Strawberry', 'Mango']
```

### Grouping the elements of an array

The {{jsxref("Array.prototype.group()")}} methods can be used to group the elements of an array, using a test function that returns a string indicating the group of the current element.

Here we have a simple inventory array that contains "food" objects that have a `name` and a `type`.

```js
const inventory = [
  { name: 'asparagus', type: 'vegetables' },
  { name: 'bananas',  type: 'fruit' },
  { name: 'goat', type: 'meat' },
  { name: 'cherries', type: 'fruit' },
  { name: 'fish', type: 'meat' },
];
```

To use `group()`, you supply a callback function that is called with the current element, and optionally the current index and array, and returns a string indicating the group of the element.

The code below uses a arrow function to return the `type` of each array element (this uses [object destructuring syntax for function arguments](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#unpacking_fields_from_objects_passed_as_a_function_parameter) to unpack the `type` element from the passed object).
The result is an object that has properties named after the unique strings returned by the callback.
Each property is assigned an array containing the elements in the group.

```js
const result = inventory.group(({ type }) => type);
console.log(result.vegetables);
// expected output: Array [Object { name: "asparagus", type: "vegetables" }]
```

Note that the returned object references the _same_ elements as the original array (not {{glossary("deep copy","deep copies")}}).
Changing the internal structure of these elements will be reflected in both the original array and the returned object.

If you can't use a string as the key, for example, if the information to group is associated with an object that might change, then you can instead use {{jsxref("Array.prototype.groupToMap()")}}.
This is very similar to `group` except that it groups the elements of the array into a {{jsxref("Map")}} that can use an arbitrary value ({{Glossary("object")}} or {{Glossary("primitive")}}) as a key.

## Other examples

### Creating a two-dimensional array

The following creates a chessboard as a two-dimensional array of strings. The first move is made by copying the `'p'` in `board[6][4]` to `board[4][4]`. The old position at `[6][4]` is made blank.

```js
const board = [
  ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r'] ];

console.log(`${board.join('\n')}\n\n`);

// Move King's Pawn forward 2
board[4][4] = board[6][4];
board[6][4] = ' ';
console.log(board.join('\n'));
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
  values.push([
    2 ** x,
    2 * x ** 2,
  ]);
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

## Notes

`Array` objects cannot use arbitrary strings as element indexes (as in an [associative array](https://en.wikipedia.org/wiki/Associative_array)) but must use nonnegative integers (or their respective string form). Setting or accessing via non-integers will not set or retrieve an element from the array list itself, but will set or access a variable associated with that array's [object property collection](/en-US/docs/Web/JavaScript/Data_structures#properties). The array's object properties and list of array elements are separate, and the array's [traversal and mutation operations](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#array_methods) cannot be applied to these named properties.

Array elements are object properties in the same way that `toString` is a property (to be specific, however, `toString()` is a method). Nevertheless, trying to access an element of an array as follows throws a syntax error because the property name is not valid:

```js example-bad
console.log(arr.0); // a syntax error
```

JavaScript syntax requires properties beginning with a digit to be accessed using [bracket notation](/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#objects_and_properties) instead of [dot notation](/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors). It's also possible to quote the array indices (e.g., `years['2']` instead of `years[2]`), although usually not necessary.

The `2` in `years[2]` is coerced into a string by the JavaScript engine through an implicit `toString` conversion. As a result, `'2'` and `'02'` would refer to two different slots on the `years` object, and the following example could be `true`:

```js
console.log(years['2'] !== years['02']);
```

Only `years['2']` is an actual array index. `years['02']` is an arbitrary string property that will not be visited in array iteration.

### Relationship between length and numerical properties

A JavaScript array's {{jsxref("Array.length", "length")}} property and numerical properties are connected.

Several of the built-in array methods (e.g., {{jsxref("Array.join", "join()")}}, {{jsxref("Array.slice", "slice()")}}, {{jsxref("Array.indexOf", "indexOf()")}}, etc.) take into account the value of an array's {{jsxref("Array.length", "length")}} property when they're called.

Other methods (e.g., {{jsxref("Array.push", "push()")}}, {{jsxref("Array.splice", "splice()")}}, etc.) also result in updates to an array's {{jsxref("Array.length", "length")}} property.

```js
const fruits = [];
fruits.push('banana', 'apple', 'peach');
console.log(fruits.length); // 3
```

When setting a property on a JavaScript array when the property is a valid array index and that index is outside the current bounds of the array, the engine will update the array's {{jsxref("Array.length", "length")}} property accordingly:

```js
fruits[5] = 'mango';
console.log(fruits[5]);            // 'mango'
console.log(Object.keys(fruits));  // ['0', '1', '2', '5']
console.log(fruits.length);        // 6
```

Increasing the {{jsxref("Array.length", "length")}}.

```js
fruits.length = 10;
console.log(fruits);              // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length);       // 10
console.log(fruits[8]);           // undefined
```

Decreasing the {{jsxref("Array.length", "length")}} property does, however, delete elements.

```js
fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length);       // 2
```

This is explained further on the {{jsxref("Array.length")}} page.

### Creating an array using the result of a match

The result of a match between a {{jsxref("RegExp")}} and a string can create a JavaScript array that has properties and elements which provide information about the match. Such an array is returned by {{jsxref("RegExp.prototype.exec()")}} and {{jsxref("String.prototype.match()")}}.

For example:

```js
// Match one d followed by one or more b's followed by one d
// Remember matched b's and the following d
// Ignore case

const myRe = /d(b+)(d)/i;
const execResult = myRe.exec('cdbBdbsbz');

console.log(execResult.input); // 'cdbBdbsbz'
console.log(execResult.index); // 1
console.log(execResult); // Array(3) [ "dbBd", "bB", "d" ]
```

For more information about the result of a match, see the {{jsxref("RegExp.prototype.exec()")}} and {{jsxref("String.prototype.match()")}} pages.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- From the JavaScript Guide:

  - ["Indexing object properties"](/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#indexing_object_properties)
  - ["Indexed collections: `Array` object"](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#array_object)

- [Typed Arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
- [RangeError: invalid array length](/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
