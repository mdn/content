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

The JavaScript **`Array`** class is a global object that is used in the construction of arrays; which are high-level, list-like objects.

## Description

Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of a JavaScript array nor the types of its elements are fixed. Since an array's length can change at any time, and data can be stored at non-contiguous locations in the array, JavaScript arrays are not guaranteed to be dense; this depends on how the programmer chooses to use them. In general, these are convenient characteristics; but if these features are not desirable for your particular use, you might consider using typed arrays.

Arrays cannot use strings as element indexes (as in an [associative array](https://en.wikipedia.org/wiki/Associative_array)) but must use integers. Setting or accessing via non-integers using [bracket notation](/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#objects_and_properties) (or [dot notation](/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors)) will not set or retrieve an element from the array list itself, but will set or access a variable associated with that array's [object property collection](/en-US/docs/Web/JavaScript/Data_structures#properties). The array's object properties and list of array elements are separate, and the array's [traversal and mutation operations](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#array_methods) cannot be applied to these named properties.

### Common operations

**Create an Array**

```js
let fruits = ['Apple', 'Banana']

console.log(fruits.length)
// 2
```

**Access an Array item using the index position**

```js
let first = fruits[0]
// Apple

let last = fruits[fruits.length - 1]
// Banana
```

**Loop over an Array**

```js
fruits.forEach(function(item, index, array) {
  console.log(item, index)
})
// Apple 0
// Banana 1
```

**Add an item to the end of an Array**

```js
let newLength = fruits.push('Orange')
// ["Apple", "Banana", "Orange"]
```

**Remove an item from the end of an Array**

```js
let last = fruits.pop() // remove Orange (from the end)
// ["Apple", "Banana"]
```

**Remove an item from the beginning of an Array**

```js
let first = fruits.shift() // remove Apple from the front
// ["Banana"]
```

**Add an item to the beginning of an Array**

```js
let newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"]
```

**Find the index of an item in the Array**

```js
fruits.push('Mango')
// ["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf('Banana')
// 1
```

**Remove an item by index position**

```js
let removedItem = fruits.splice(pos, 1) // this is how to remove an item

// ["Strawberry", "Mango"]
```

**Remove items from an index position**

```js
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
console.log(vegetables)
// ["Cabbage", "Turnip", "Radish", "Carrot"]

let pos = 1
let n = 2

let removedItems = vegetables.splice(pos, n)
// this is how to remove items, n defines the number of items to be removed,
// starting at the index position specified by pos and progressing toward the end of array.

console.log(vegetables)
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems)
// ["Turnip", "Radish"]
```

**Copy an Array**

```js
let shallowCopy = fruits.slice() // this is how to make a copy
// ["Strawberry", "Mango"]
```

### Accessing array elements

JavaScript arrays are zero-indexed. The first element of an array is at index `0`, and the last element is at the index value equal to the value of the array's {{jsxref("Array.length", "length")}} property minus `1`.

Using an invalid index number returns `undefined`.

```js
let arr = ['this is the first element', 'this is the second element', 'this is the last element']
console.log(arr[0])              // logs 'this is the first element'
console.log(arr[1])              // logs 'this is the second element'
console.log(arr[arr.length - 1]) // logs 'this is the last element'
```

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

In the `3d` example, `'3d'` *had* to be quoted (because it begins with a digit). But it's also possible to quote the array indexes as well (e.g., `years['2']` instead of `years[2]`), although it's not necessary.

The `2` in `years[2]` is coerced into a string by the JavaScript engine through an implicit `toString` conversion. As a result, `'2'` and `'02'` would refer to two different slots on the `years` object, and the following example could be `true`:

```js
console.log(years['2'] != years['02'])
```

### Relationship between length and numerical properties

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

### Creating an array using the result of a match

The result of a match between a {{jsxref("RegExp")}} and a string can create a JavaScript array. This array has properties and elements which provide information about the match. Such an array is returned by {{jsxref("RegExp.exec()")}} and {{jsxref("String.match()")}}.

To help explain these properties and elements, see this example and then refer to the table below:

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

## Constructor

- {{jsxref("Array/Array", "Array()")}}
  - : Creates a new `Array` object.

## Static properties

- {{jsxref("Array/@@species", "get Array[@@species]")}}
  - : The constructor function is used to create derived objects.

## Static methods

- {{jsxref("Array.from()")}}
  - : Creates a new `Array` instance from an array-like or iterable object.
- {{jsxref("Array.isArray()")}}
  - : Returns `true` if the argument is an array, or `false` otherwise.
- {{jsxref("Array.of()")}}
  - : Creates a new `Array` instance with a variable number of arguments, regardless of number or type of the arguments.

## Instance properties

- {{jsxref("Array.prototype.length")}}
  - : Reflects the number of elements in an array.
- {{jsxref("Array/@@unscopables", "Array.prototype[@@unscopables]")}}
  - : A symbol containing property names to exclude from a [`with`](/en-US/docs/Web/JavaScript/Reference/Statements/with) binding scope.

## Instance methods

- {{jsxref("Array.prototype.at()")}}{{Experimental_Inline}}
  - : Returns the array item at the given index. Accepts negative integers, which count back from the last item.
- {{jsxref("Array.prototype.concat()")}}
  - : Returns a new array that is this array joined with other array(s) and/or value(s).
- {{jsxref("Array.prototype.copyWithin()")}}
  - : Copies a sequence of array elements within the array.
- {{jsxref("Array.prototype.entries()")}}
  - : Returns a new _array iterator_ object that contains the key/value pairs for each index in the array.
- {{jsxref("Array.prototype.every()")}}
  - : Returns `true` if every element in this array satisfies the testing function.
- {{jsxref("Array.prototype.fill()")}}
  - : Fills all the elements of an array from a start index to an end index with a static value.
- {{jsxref("Array.prototype.filter()")}}
  - : Returns a new array containing all elements of the calling array for which the provided filtering function returns `true`.
- {{jsxref("Array.prototype.find()")}}
  - : Returns the found `element` in the array, if some element in the array satisfies the testing function, or `undefined` if not found.
- {{jsxref("Array.prototype.findIndex()")}}
  - : Returns the found index in the array, if an element in the array satisfies the testing function, or `-1` if not found.
- {{jsxref("Array.prototype.flat()")}}
  - : Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. 
- {{jsxref("Array.prototype.flatMap()")}}
  - : Returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level.
- {{jsxref("Array.prototype.forEach()")}}
  - : Calls a function for each element in the array.
- {{jsxref("Array.prototype.includes()")}}
  - : Determines whether the array contains a value, returning `true` or `false` as appropriate.
- {{jsxref("Array.prototype.indexOf()")}}
  - : Returns the first (least) index of an element within the array equal to an element, or `-1` if none is found.
- {{jsxref("Array.prototype.join()")}}
  - : Joins all elements of an array into a string.
- {{jsxref("Array.prototype.keys()")}}
  - : Returns a new _array iterator_ that contains the keys for each index in the array.
- {{jsxref("Array.prototype.lastIndexOf()")}}
  - : Returns the last (greatest) index of an element within the array equal to an element, or `-1` if none is found.
- {{jsxref("Array.prototype.map()")}}
  - : Returns a new array containing the results of calling a function on every element in this array.
- {{jsxref("Array.prototype.pop()")}}
  - : Removes the last element from an array and returns that element.
- {{jsxref("Array.prototype.push()")}}
  - : Adds one or more elements to the end of an array, and returns the new `length` of the array.
- {{jsxref("Array.prototype.reduce()")}}
  - : Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.
- {{jsxref("Array.prototype.reduceRight()")}}
  - : Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.
- {{jsxref("Array.prototype.reverse()")}}
  - : Reverses the order of the elements of an array _in place_. (First becomes the last, last becomes first.)
- {{jsxref("Array.prototype.shift()")}}
  - : Removes the first element from an array and returns that element.
- {{jsxref("Array.prototype.slice()")}}
  - : Extracts a section of the calling array and returns a new array.
- {{jsxref("Array.prototype.some()")}}
  - : Returns `true` if at least one element in this array satisfies the provided testing function.
- {{jsxref("Array.prototype.sort()")}}
  - : Sorts the elements of an array in place and returns the array.
- {{jsxref("Array.prototype.splice()")}}
  - : Adds and/or removes elements from an array.
- {{jsxref("Array.prototype.toLocaleString()")}}
  - : Returns a localized string representing the array and its elements. Overrides the {{jsxref("Object.prototype.toLocaleString()")}} method.
- {{jsxref("Array.prototype.toString()")}}
  - : Returns a string representing the array and its elements. Overrides the {{jsxref("Object.prototype.toString()")}} method.
- {{jsxref("Array.prototype.unshift()")}}
  - : Adds one or more elements to the front of an array, and returns the new `length` of the array.
- {{jsxref("Array.prototype.values()")}}
  - : Returns a new _array iterator_ object that contains the values for each index in the array.
- {{jsxref("Array.prototype.@@iterator()", "Array.prototype[@@iterator]()")}}
  - : Returns a new _array iterator_ object that contains the values for each index in the array.

## Examples

### Creating an array

The following example creates an array, `msgArray`, with a length of `0`, then assigns values to `msgArray[0]` and `msgArray[99]`, changing the `length` of the array to `100`.

```js
let msgArray = []
msgArray[0] = 'Hello'
msgArray[99] = 'world'

if (msgArray.length === 100) {
  console.log('The length is 100.')
}
```

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
0	1	0
1	2	2
2	4	8
3	8	18
4	16	32
5	32	50
6	64	72
7	128	98
8	256	128
9	512	162
```

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
