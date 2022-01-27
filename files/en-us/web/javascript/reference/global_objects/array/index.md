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

The **`Array`** object represents an [array](https://en.wikipedia.org/wiki/Array_data_structure), and has members for [performing common array operations](#examples).

## Description

In JavaScript, arrays aren’t [primitives](/en-US/docs/Glossary/Primitive) but are instead `Array` objects with the following core characteristics:

- **JavaScript arrays are resizable** and **can contain a mix of different [data types](/en-US/docs/Web/JavaScript/Data_structures)**. (When those characteristics are undesirable, use [typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays) instead.)

- **JavaScript arrays are [zero-indexed](https://en.wikipedia.org/wiki/Zero-based_numbering)**: the first element of an array is at index `0`, the second is at index `1`, and so on — and the last element is at the value of the array's {{jsxref("Array.length", "length")}} property minus `1`.

- **JavaScript [array-copy operations](#copy_an_array) create [shallow copies](/en-US/docs/Glossary/Shallow_copy)**, not [deep copies](/en-US/docs/Glossary/Shallow_copy) (just as standard built-in copy operations with _any_ JavaScript objects create shallow copies, not deep copies).

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
  - : Returns the found `element` in the calling array, if some element in the array satisfies the testing function, or `undefined` if not found.
- {{jsxref("Array.prototype.findIndex()")}}
  - : Returns the found index in the calling array, if an element in the array satisfies the testing function, or `-1` if not found.
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
  - : Executes a user-supplied “reducer” callback function on each element of the array (from left to right), to reduce it to a single value.
- {{jsxref("Array.prototype.reduceRight()")}}
  - : Executes a user-supplied “reducer” callback function on each element of the array (from right to left), to reduce it to a single value.
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

This section provides some examples of common array operations in JavaScript. All the examples use an array of strings, named `fruits`, which is created in the first example.

### Create an array

This example shows two ways to create new array — first by using [array literal notation](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#array_literal_notation), and then by using the [`Array()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) constructor.

```js
// 'fruits' array created using array literal notation.
let fruits = ['Apple', 'Banana']
console.log(fruits.length)
// 2

// 'fruits' array created using the Array() constructor.
let fruits = new Array('Apple', 'Banana');
console.log(fruits.length)
// 2
```

### Access an array item by its index

This example shows how to access items in the `fruits` array by specifying the index number of their position in the array.

```js
// The index of an array’s first element is always 0.
fruits[0] // Apple

// The index of an array’s first element is always 1.
fruits[1] // Banana

// The index of an array’s last element is always one
// less than the length of the array.
fruits[fruits.length - 1] // Banana

// Using a index number larger than the array’s length
// returns 'undefined'.
fruits[99] // undefined
```

### Call a function on each element in an array

This example uses the [`forEach()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method to call a function on each element in the `fruits` array; the function causes each item to be logged to the console, along with the item’s index number.

```js
fruits.forEach(function(item, index, array) {
  console.log(item, index)
})
// Apple 0
// Banana 1
```

### Append an item to an array

This example uses the [`push()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) method to append a new string, "`Orange`" to the `fruits` array — changing the length of the array. The `forEach()` method returns the array’s new length, which gets assigned to the `newLength` variable.

```js
let newLength = fruits.push('Orange') // ["Apple", "Banana", "Orange"]
console.log(newLength)
// 3
```

### Remove the last item from an array

This example uses the [`pop()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) method to remove the last item ("`Orange`") from the `fruits` array.

```js
// Remove 'Orange' from the end of 'fruits'.
let last = fruits.pop() // ["Apple", "Banana"]
```

### Remove the first item from an array

This example uses the [`shift()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) method to remove the first item ("`Apple`") from the `fruits` array.

```js
// Remove 'Apple' from the front of 'fruits'.
let first = fruits.shift() // ["Banana"]
```

### Add a new first item to an array

This example uses the [`unshift()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) method to add, at index `0`, a new item ("`Strawberry`") to the `fruits` array — making it the new first item in the array.

```js
// Add 'Strawberry' to the front of 'fruits'.
let newLength = fruits.unshift('Strawberry') // ["Strawberry", "Banana"]
console.log(newLength)
// 2
```

### Find the index of an item in an array

This example uses the [`indexOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) method to find the position (index) of the string "`Banana`" in the `fruits` array, which gets assigned to the `pos` variable.

```js
fruits.push('Mango') // ["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf('Banana')
console.log(pos)
// 1
```

### Remove a single item by index

This example uses the [`splice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) method to remove the string "`Banana`" from the `fruits` array — by specifying the index position of "`Banana`", which the previous example assigned to the `pos` variable.

```js
// This is how to remove a single item.
let removedItem = fruits.splice(pos, 1)

console.log(fruits)
// ["Strawberry", "Mango"]
// So, 'fruits' has been changed in place.

// fruits.splice(pos, 1) returns an array of the items
// removed, which we assigned above to 'removedItem'.
console.log(removedItem)
// ['Banana']
```

### Remove multiple items by index

This example uses the [`splice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) method to remove the strings "`Banana`" and "`Strawberry`" from the `fruits` array — by specifying the index position of "`Banana`", along with a count of the number of total items to remove.

```js
let fruits = ['Apple', 'Banana', 'Strawberry', 'Mango']

let pos = 1
let n = 2

// This is how to remove multiple items: 'n' is the total
// number of items to remove, starting at the index
// position 'pos' and progressing toward the end of array.
let removedItems = fruits.splice(pos, n)

console.log(fruits)
// ["Apple", "Mango"]
// So, 'fruits' has been changed in place.

// fruits.splice(pos, 1) returns an array of the items
// removed, which we assigned above to 'removedItems'.
console.log(removedItems)
// ["Banana", "Strawberry"]
```

### Copy an array

This example shows three ways to create a new array from the existing `fruits` array: first by using [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), then by using the [`from()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) method, and then by using the [`slice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) method.

```js
let fruitsCopy

// Create a copy using spread syntax.
fruitsCopy = [...fruits]
// ["Strawberry", "Mango"]

// Create a copy using the from() method.
fruitsCopy = Array.from(fruits)
// ["Strawberry", "Mango"]

// Create a copy using the slice() method.
fruitsCopy = fruits.slice()
// ["Strawberry", "Mango"]
```

All built-in array-copy operations ([spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.from()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [`Array.prototype.slice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), and [`Array.prototype.concat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)) create [shallow copies](/en-US/docs/Glossary/Shallow_copy). If you instead want a [deep copy](/en-US/docs/Glossary/Shallow_copy) of an array, you can use {{jsxref("JSON.stringify()")}} to convert the array to a JSON string, and then {{jsxref("JSON.parse()")}} to convert the string back into a new array that’s completely independent from the original array.

```js
let deepCopy = JSON.parse(JSON.stringify(fruits));
```

Finally, it’s important to understand that assigning an existing array to a new variable doesn’t create a copy. Instead the new variable is just a reference, or alias, to the original; that is, the original array’s name and the new variable name are just two names for the exact same object — and so, if you make any changes at all either to value of the original array or to the value of the new variable, the other will change, too:

```js
let fruits = ['Strawberry', 'Mango']
let fruitsAlias = fruits;
// Any changes to the 'fruits' array change 'fruitsAlias' too.
fruits.unshift('Apple', 'Banana')
console.log(fruits);
// ['Apple', 'Banana', 'Strawberry', 'Mango']
console.log(fruitsAlias);
// ['Apple', 'Banana', 'Strawberry', 'Mango']
```

## Other examples

### Creating a two-dimensional array

The following creates a chessboard as a two-dimensional array of strings. The first move is made by copying the `'p'` in `board[6][4]` to `board[4][4]`. The old position at `[6][4]` is made blank.

```js
let board = [
  ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r'] ]

console.log(board.join('\n') + '\n\n')

// Move King's Pawn forward 2
board[4][4] = board[6][4]
board[6][4] = ' '
console.log(board.join('\n'))
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
values = []
for (let x = 0; x < 10; x++){
 values.push([
  2 ** x,
  2 * x ** 2
 ])
}
console.table(values)
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

### Notes

`Array` objects cannot use strings as element indexes (as in an [associative array](https://en.wikipedia.org/wiki/Associative_array)) but must use integers. Setting or accessing via non-integers using [bracket notation](/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#objects_and_properties) (or [dot notation](/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors)) will not set or retrieve an element from the array list itself, but will set or access a variable associated with that array's [object property collection](/en-US/docs/Web/JavaScript/Data_structures#properties). The array's object properties and list of array elements are separate, and the array's [traversal and mutation operations](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#array_methods) cannot be applied to these named properties.

Array elements are object properties in the same way that `toString` is a property (to be specific, however, `toString()` is a method). Nevertheless, trying to access an element of an array as follows throws a syntax error because the property name is not valid:

```js
console.log(arr.0) // a syntax error
```

There is nothing special about JavaScript arrays and the properties that cause this. JavaScript properties that begin with a digit cannot be referenced with dot notation and must be accessed using bracket notation.

For example, if you had an object with a property named `3d`, it can only be referenced using bracket notation.

```js
let years = [1950, 1960, 1970, 1980, 1990, 2000, 2010]
console.log(years.0)   // a syntax error
console.log(years[0])  // works properly
```

```js
renderer.3d.setTexture(model, 'character.png')     // a syntax error
renderer['3d'].setTexture(model, 'character.png')  // works properly
```

In the `3d` example, `'3d'` *had* to be quoted (because it begins with a digit). But it's also possible to quote the array indexes as well (e.g., `years['2']` instead of `years[2]`), although it's not necessary.

The `2` in `years[2]` is coerced into a string by the JavaScript engine through an implicit `toString` conversion. As a result, `'2'` and `'02'` would refer to two different slots on the `years` object, and the following example could be `true`:

```js
console.log(years['2'] != years['02'])
```

#### Relationship between length and numerical properties

A JavaScript array's {{jsxref("Array.length", "length")}} property and numerical properties are connected.

Several of the built-in array methods (e.g., {{jsxref("Array.join", "join()")}}, {{jsxref("Array.slice", "slice()")}}, {{jsxref("Array.indexOf", "indexOf()")}}, etc.) take into account the value of an array's {{jsxref("Array.length", "length")}} property when they're called.

Other methods (e.g., {{jsxref("Array.push", "push()")}}, {{jsxref("Array.splice", "splice()")}}, etc.) also result in updates to an array's {{jsxref("Array.length", "length")}} property.

```js
const fruits = []
fruits.push('banana', 'apple', 'peach')

console.log(fruits.length) // 3
```

When setting a property on a JavaScript array when the property is a valid array index and that index is outside the current bounds of the array, the engine will update the array's {{jsxref("Array.length", "length")}} property accordingly:

```js
fruits[5] = 'mango'
console.log(fruits[5])            // 'mango'
console.log(Object.keys(fruits))  // ['0', '1', '2', '5']
console.log(fruits.length)        // 6
```

Increasing the {{jsxref("Array.length", "length")}}.

```js
fruits.length = 10
console.log(fruits)              // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)) // ['0', '1', '2', '5']
console.log(fruits.length)       // 10
console.log(fruits[8])           // undefined
```

Decreasing the {{jsxref("Array.length", "length")}} property does, however, delete elements.

```js
fruits.length = 2
console.log(Object.keys(fruits)) // ['0', '1']
console.log(fruits.length)       // 2
```

This is explained further on the {{jsxref("Array.length")}} page.

#### Creating an array using the result of a match

The result of a match between a {{jsxref("RegExp")}} and a string can create a JavaScript array that has properties and elements which provide information about the match. Such an array is returned by {{jsxref("RegExp.exec()")}} and {{jsxref("String.match()")}}.

To help explain these properties and elements, see the following example and then refer to the table below:

```js
// Match one d followed by one or more b's followed by one d
// Remember matched b's and the following d
// Ignore case

const myRe = /d(b+)(d)/i
const myArray = myRe.exec('cdbBdbsbz')
```

The properties and elements returned from this match are as follows:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th class="header" scope="col">Property/Element</th>
      <th class="header" scope="col">Description</th>
      <th class="header" scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>input</code><br />{{ReadOnlyInline}}</td>
      <td>
        The original string against which the regular expression was matched.
      </td>
      <td><code>"cdbBdbsbz"</code></td>
    </tr>
    <tr>
      <td><code>index</code><br />{{ReadOnlyInline}}</td>
      <td>The zero-based index of the match in the string.</td>
      <td><code>1</code></td>
    </tr>
    <tr>
      <td><code>[0]</code><br />{{ReadOnlyInline}}</td>
      <td>The last matched characters.</td>
      <td><code>"dbBd"</code></td>
    </tr>
    <tr>
      <td><code>[1], ...[n]</code><br />{{ReadOnlyInline}}</td>
      <td>
        Elements that specify the parenthesized substring matches (if included)
        in the regular expression. The number of possible parenthesized
        substrings is unlimited.
      </td>
      <td>
        <code>[1]: "bB"<br />[2]: "d"</code>
      </td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- From the JavaScript Guide:

  - [“Indexing object properties”](/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#indexing_object_properties)
  - [“Indexed collections: `Array` object”](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#array_object)

- [Typed Arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
- [RangeError: invalid array length](/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
