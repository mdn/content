---
title: Indexed collections
slug: Web/JavaScript/Guide/Indexed_collections
tags:
  - Guide
  - JavaScript
  - l10n:priority
---
{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Regular_Expressions", "Web/JavaScript/Guide/Keyed_Collections")}}

This chapter introduces collections of data which are ordered by an index value. This includes arrays and array-like constructs such as {{jsxref("Array")}} objects and {{jsxref("TypedArray")}} objects.

An _array_ is an ordered list of values that you refer to with a name and an index.

For example, consider an array called `emp`, which contains employees' names indexed by their numerical employee number. So `emp[0]` would be employee number zero, `emp[1]` employee number one, and so on.

JavaScript does not have an explicit array data type. However, you can use the predefined `Array` object and its methods to work with arrays in your applications. The `Array` object has methods for manipulating arrays in various ways, such as joining, reversing, and sorting them. It has a property for determining the array length and other properties for use with regular expressions.

## Creating an array

The following statements create equivalent arrays:

```js
const arr1 = new Array(element0, element1, /* … ,*/ elementN);
const arr2 = Array(element0, element1, /* … ,*/ elementN);
const arr3 = [element0, element1, /* … ,*/ elementN];
```

`element0, element1, …, elementN` is a list of values for the array's elements. When these values are specified, the array is initialized with them as the array's elements. The array's `length` property is set to the number of arguments.

The bracket syntax is called an "array literal" or "array initializer." It's shorter than other forms of array creation, and so is generally preferred. See [Array literals](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) for details.

To create an array with non-zero length, but without any items, either of the following can be used:

```js
// This...
const arr1 = new Array(arrayLength);

// ...results in the same array as this
const arr2 = Array(arrayLength);

// This has exactly the same effect
const arr3 = [];
arr3.length = arrayLength;
```

> **Note:** In the above code, `arrayLength` must be a `Number`. Otherwise, an array with a single element (the provided value) will be created. Calling `arr.length` will return `arrayLength`, but the array doesn't contain any elements. A {{jsxref("Statements/for...in","for...in")}} loop will not find any property on the array.

In addition to a newly defined variable as shown above, arrays can also be assigned as a property of a new or an existing object:

```js
const obj = {};
// …
obj.prop = [element0, element1, /* … ,*/ elementN];

// OR
const obj = { prop: [element0, element1, /* … ,*/ elementN] };
```

If you wish to initialize an array with a single element, and the element happens to be a `Number`, you must use the bracket syntax. When a single `Number` value is passed to the `Array()` constructor or function, it is interpreted as an `arrayLength`, not as a single element.

```js
// This creates an array with only one element: the number 42.
const arr = [42];

// This creates an array with no elements and arr.length set to 42.
const arr = Array(42);

// This is equivalent to:
const arr = [];
arr.length = 42;
```

Calling `Array(N)` results in a `RangeError`, if `N` is a non-whole number whose fractional portion is non-zero. The following example illustrates this behavior.

```js
const arr = Array(9.3); // RangeError: Invalid array length
```

If your code needs to create arrays with single elements of an arbitrary data type, it is safer to use array literals. Alternatively, create an empty array first before adding the single element to it.

You can also use the {{jsxref("Array.of")}} static method to create arrays with single element.

```js
const wisenArray = Array.of(9.3); // wisenArray contains only one element 9.3
```

## Referring to array elements

Because elements are also properties, you can access the using [property accessors](/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors). Suppose you define the following array:

```js
const myArray = ['Wind', 'Rain', 'Fire'];
```

You can refer to the first element of the array as `myArray[0]`, the second element of the array as `myArray[1]`, etc… The index of the elements begins with zero.

> **Note:** You can also use [property accessors](/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors) to access other properties of the array, like with an object.
>
> ```js
> const arr = ['one', 'two', 'three'];
> arr[2]          // three
> arr['length']   // 3
> ```

## Populating an array

You can populate an array by assigning values to its elements. For example:

```js
const emp = [];
emp[0] = 'Casey Jones';
emp[1] = 'Phil Lesh';
emp[2] = 'August West';
```

> **Note:** If you supply a non-integer value to the array operator in the code above, a property will be created in the object representing the array, instead of an array element.
>
> ```js
> const arr = [];
> arr[3.4] = 'Oranges';
> console.log(arr.length); // 0
> console.log(Object.hasOwn(arr, 3.4)); // true
> ```

You can also populate an array when you create it:

```js
const myArray = new Array('Hello', myVar, 3.14159);
// OR
const myArray = ['Mango', 'Apple', 'Orange'];
```

### Understanding length

At the implementation level, JavaScript's arrays actually store their elements as standard object properties, using the array index as the property name.

The `length` property is special. Its value is always a positive integer greater than the index of the last element if one exists. (In the example below, `'Dusty'` is indexed at `30`, so `cats.length` returns `30 + 1`).

Remember, JavaScript Array indexes are 0-based: they start at `0`, not `1`. This means that the `length` property will be one more than the highest index stored in the array:

```js
const cats = [];
cats[30] = ['Dusty'];
console.log(cats.length); // 31
```

You can also assign to the `length` property.

Writing a value that is shorter than the number of stored items truncates the array. Writing `0` empties it entirely:

```js
const cats = ['Dusty', 'Misty', 'Twiggy'];
console.log(cats.length); // 3

cats.length = 2;
console.log(cats); // logs "Dusty, Misty" - Twiggy has been removed

cats.length = 0;
console.log(cats); // logs []; the cats array is empty

cats.length = 3;
console.log(cats); // logs [ <3 empty items> ]
```

### Iterating over arrays

A common operation is to iterate over the values of an array, processing each one in some way. The simplest way to do this is as follows:

```js
const colors = ['red', 'green', 'blue'];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

If you know that none of the elements in your array evaluate to `false` in a boolean context—if your array consists only of [DOM](/en-US/docs/Web/API/Document_Object_Model) nodes, for example—you can use a more efficient idiom:

```js
const divs = document.getElementsByTagName('div');
for (let i = 0, div; div = divs[i]; i++) {
  /* Process div in some way */
}
```

This avoids the overhead of checking the length of the array, and ensures that the `div` variable is reassigned to the current item each time around the loop for added convenience.

The {{jsxref("Array.forEach", "forEach()")}} method provides another way of iterating over an array:

```js
const colors = ['red', 'green', 'blue'];
colors.forEach((color) => console.log(color));
// red
// green
// blue
```

The function passed to `forEach` is executed once for every item in the array, with the array item passed as the argument to the function. Unassigned values are not iterated in a `forEach` loop.

Note that the elements of an array that are omitted when the array is defined are not listed when iterating by `forEach`, but _are_ listed when `undefined` has been manually assigned to the element:

```js
const sparseArray = ['first', 'second', , 'fourth'];

sparseArray.forEach((element) => {
  console.log(element);
});
// first
// second
// fourth

if (sparseArray[2] === undefined) {
  console.log('sparseArray[2] is undefined');  // true
}

const nonsparseArray = ['first', 'second', undefined, 'fourth'];

nonsparseArray.forEach((element) => {
  console.log(element);
});
// first
// second
// undefined
// fourth
```

Since JavaScript elements are saved as standard object properties, it is not advisable to iterate through JavaScript arrays using {{jsxref("Statements/for...in","for...in")}} loops, because normal elements and all enumerable properties will be listed.

### Array methods

The {{jsxref("Array")}} object has the following methods:

{{jsxref("Array.concat", "concat()")}} joins two or more arrays and returns a new array.

```js
let myArray = ['1', '2', '3'];
myArray = myArray.concat('a', 'b', 'c');
// myArray is now ["1", "2", "3", "a", "b", "c"]
```

{{jsxref("Array.join", "join(delimiter = ',')")}} joins all elements of an array into a string.

```js
const myArray = ['Wind', 'Rain', 'Fire'];
const list = myArray.join(' - '); // list is "Wind - Rain - Fire"
```

{{jsxref("Array.push", "push()")}} adds one or more elements to the end of an array and returns the resulting `length` of the array.

```js
const myArray = ['1', '2'];
myArray.push('3'); // myArray is now ["1", "2", "3"]
```

{{jsxref("Array.pop", "pop()")}} removes the last element from an array and returns that element.

```js
const myArray = ['1', '2', '3'];
const last = myArray.pop();
// myArray is now ["1", "2"], last = "3"
```

{{jsxref("Array.shift", "shift()")}} removes the first element from an array and returns that element.

```js
const myArray = ['1', '2', '3'];
const first = myArray.shift();
// myArray is now ["2", "3"], first is "1"
```

{{jsxref("Array.unshift", "unshift()")}} adds one or more elements to the front of an array and returns the new length of the array.

```js
const myArray = ['1', '2', '3'];
myArray.unshift('4', '5');
// myArray becomes ["4", "5", "1", "2", "3"]
```

{{jsxref("Array.slice", "slice(start_index, up_to_index)")}} extracts a section of an array and returns a new array.

```js
let myArray = ['a', 'b', 'c', 'd', 'e'];
myArray = myArray.slice(1, 4); // starts at index 1 and extracts all elements
                               // until index 3, returning [ "b", "c", "d"]
```

{{jsxref("Array.splice", "splice(index, count_to_remove, addElement1, addElement2, ...)")}} removes elements from an array and (optionally) replaces them. It returns the items which were removed from the array.

```js
const myArray = ['1', '2', '3', '4', '5'];
myArray.splice(1, 3, 'a', 'b', 'c', 'd');
// myArray is now ["1", "a", "b", "c", "d", "5"]
// This code started at index one (or where the "2" was),
// removed 3 elements there, and then inserted all consecutive
// elements in its place.
```

{{jsxref("Array.reverse", "reverse()")}} transposes the elements of an array, in place: the first array element becomes the last and the last becomes the first. It returns a reference to the array.

```js
const myArray = ['1', '2', '3'];
myArray.reverse();
// transposes the array so that myArray = ["3", "2", "1"]
```

{{jsxref("Array.sort", "sort()")}} sorts the elements of an array in place, and returns a reference to the array.

```js
const myArray = ['Wind', 'Rain', 'Fire'];
myArray.sort();
// sorts the array so that myArray = ["Fire", "Rain", "Wind"]
```

`sort()` can also take a callback function to determine how array elements are compared.

The `sort` method (and others below) that take a callback are known as _iterative methods_, because they iterate over the entire array in some fashion. Each one takes an optional second argument called `thisObject`. If provided, `thisObject` becomes the value of the `this` keyword inside the body of the callback function. If not provided, as with other cases where a function is invoked outside of an explicit object context, `this` will refer to the global object ([`window`](/en-US/docs/Web/API/Window)) when using arrow function as callback, or `undefined` when using normal function as callback.

The callback function is called with two arguments, that are array's elements.

The function below compares two values and returns one of three values:

For instance, the following will sort by the last letter of a string:

```js
const sortFn = (a, b) => {
  if (a[a.length - 1] < b[b.length - 1]) return -1;
  if (a[a.length - 1] > b[b.length - 1]) return 1;
  if (a[a.length - 1] === b[b.length - 1]) return 0;
}
myArray.sort(sortFn);
// sorts the array so that myArray = ["Wind","Fire","Rain"]
```

- if `a` is less than `b` by the sorting system, return `-1` (or any negative number)
- if `a` is greater than `b` by the sorting system, return `1` (or any positive number)
- if `a` and `b` are considered equivalent, return `0`.

{{jsxref("Array.indexOf", "indexOf(searchElement[, fromIndex])")}} searches the array for `searchElement` and returns the index of the first match.

```js
const a = ['a', 'b', 'a', 'b', 'a'];
console.log(a.indexOf('b')); // logs 1

// Now try again, starting from after the last match
console.log(a.indexOf('b', 2)); // logs 3
console.log(a.indexOf('z')); // logs -1, because 'z' was not found
```

{{jsxref("Array.lastIndexOf", "lastIndexOf(searchElement[, fromIndex])")}} works like `indexOf`, but starts at the end and searches backwards.

```js
const a = ['a', 'b', 'c', 'd', 'a', 'b'];
console.log(a.lastIndexOf('b')); // 5

// Now try again, starting from before the last match
console.log(a.lastIndexOf('b', 4)); // 1
console.log(a.lastIndexOf('z')); // -1
```

{{jsxref("Array.forEach", "forEach(callback[, thisObject])")}} executes `callback` on every array item and returns `undefined`.

```js
const a = ['a', 'b', 'c'];
a.forEach((element) => {
  console.log(element);
});
// logs each item in turn
```

{{jsxref("Array.map", "map(callback[, thisObject])")}} returns a new array of the return value from executing `callback` on every array item.

```js
const a1 = ['a', 'b', 'c'];
const a2 = a1.map((item) => item.toUpperCase());
console.log(a2); // logs ['A', 'B', 'C']
```

{{jsxref("Array.filter", "filter(callback[, thisObject])")}} returns a new array containing the items for which `callback` returned `true`.

```js
const a1 = ['a', 10, 'b', 20, 'c', 30];
const a2 = a1.filter((item) => typeof item === 'number');
console.log(a2); // logs [10, 20, 30]
```

{{jsxref("Array.every", "every(callback[, thisObject])")}} returns `true` if `callback` returns `true` for every item in the array.

```js
function isNumber(value) {
  return typeof value === 'number';
}
const a1 = [1, 2, 3];
console.log(a1.every(isNumber)); // logs true
const a2 = [1, '2', 3];
console.log(a2.every(isNumber)); // logs false
```

{{jsxref("Array.some", "some(callback[, thisObject])")}} returns `true` if `callback` returns `true` for at least one item in the array.

```js
function isNumber(value) {
  return typeof value === 'number';
}
const a1 = [1, 2, 3];
console.log(a1.some(isNumber)); // logs true
const a2 = [1, '2', 3];
console.log(a2.some(isNumber)); // logs true
const a3 = ['1', '2', '3'];
console.log(a3.some(isNumber)); // logs false
```

{{jsxref("Array.reduce", "reduce(callback[, initialValue])")}} applies `callback(accumulator, currentValue[, currentIndex[, array]])` for each value in the array for the purpose of reducing the list of items down to a single value. The `reduce` function returns the final value returned by `callback` function.

If `initialValue` is specified, then `callback` is called with `initialValue` as the first parameter value and the value of the first item in the array as the second parameter value.

If `initialValue` is _not_ specified, then `callback`'s first two parameter values will be the first and second elements of the array. On _every_ subsequent call, the first parameter's value will be whatever `callback` returned on the previous call, and the second parameter's value will be the next value in the array.

If `callback` needs access to the index of the item being processed, or access to the entire array, they are available as optional parameters.

```js
const a = [10, 20, 30];
const total = a.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total); // Prints 60
```

{{jsxref("Array.reduceRight", "reduceRight(callback[, initialValue])")}} works like `reduce()`, but starts with the last element.

`reduce` and `reduceRight` are the least obvious of the iterative array methods. They should be used for algorithms that combine two values recursively in order to reduce a sequence down to a single value.

## Sparse arrays

Arrays can contain "empty slots", which are not the same as slots filled with the value `undefined`. Empty slots can be created in one of the following ways:

```js
// Array constructor:
const a = Array(5); // [ <5 empty items> ]

// Consecutive commas in array literal:
const b = [1, 2, , , 5]; // [ 1, 2, <2 empty items>, 5 ]

// Directly setting a slot with index greater than array.length:
const c = [1, 2];
c[4] = 5; // [ 1, 2, <2 empty items>, 5 ]

// Elongating an array by directly setting .length:
const d = [1, 2];
d.length = 5; // [ 1, 2, <3 empty items> ]

// Deleting an element:
const e = [1, 2, 3, 4, 5];
delete e[2]; // [ 1, 2, <1 empty item>, 4, 5 ]
```

In some operations, empty slots behave as if they are filled with `undefined`.

```js
const arr = [1, 2, , , 5]; // Create a sparse array

// Indexed access
console.log(arr[2]); // Logs "undefined"

// For...of
for (const i of arr) console.log(i);
// Logs "1 2 undefined undefined 5"

// Spreading
const another = [...arr]; // "another" is [ 1, 2, undefined, undefined, 5 ]
```

But in others (most notably array iteration methods), empty slots are skipped.

```js
const mapped = arr.map((i) => i + 1); // [ 2, 3, <2 empty items>, 6 ]
arr.forEach((i) => console.log(i)); // Logs "1 2 5"
const filtered = arr.filter(() => true); // [ 1, 2, 5 ]
const hasFalsy = arr.some((k) => !k); // false

// Property enumeration
const keys = Object.keys(arr); // [ '0', '1', '4' ]
for (const key in arr) console.log(key); // Logs "0 1 4"
// Spreading into an object uses property enumeration, not the array's iterator
const objectSpread = { ...arr }; // { '0': 1, '1': 2, '4': 5 }
```

## Multi-dimensional arrays

Arrays can be nested, meaning that an array can contain another array as an element. Using this characteristic of JavaScript arrays, multi-dimensional arrays can be created.

The following code creates a two-dimensional array.

```js
const a = new Array(4);
for (let i = 0; i < 4; i++) {
  a[i] = new Array(4);
  for (let j = 0; j < 4; j++) {
    a[i][j] = `[${i}, ${j}]`;
  }
}
```

This example creates an array with the following rows:

```
Row 0: [0, 0] [0, 1] [0, 2] [0, 3]
Row 1: [1, 0] [1, 1] [1, 2] [1, 3]
Row 2: [2, 0] [2, 1] [2, 2] [2, 3]
Row 3: [3, 0] [3, 1] [3, 2] [3, 3]
```

## Using arrays to store other properties

Arrays can also be used like objects, to store related information.

```js
const arr = [1, 2, 3];
arr.property = "value";
console.log(arr.property);  // Logs "value"
```

For example, when an array is the result of a match between a regular expression and a string, the array returns properties and elements that provide information about the match. An array is the return value of {{jsxref("Global_Objects/RegExp/exec","RegExp.exec()")}}, {{jsxref("Global_Objects/String/match","String.match()")}}, and {{jsxref("Global_Objects/String/split","String.split()")}}. For information on using arrays with regular expressions, see [Regular Expressions](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

## Working with array-like objects

Some JavaScript objects, such as the [`NodeList`](/en-US/docs/Web/API/NodeList) returned by [`document.getElementsByTagName()`](/en-US/docs/Web/API/Document/getElementsByTagName) or the {{jsxref("Functions/arguments","arguments")}} object made available within the body of a function, look and behave like arrays on the surface but do not share all of their methods. The `arguments` object provides a {{jsxref("Global_Objects/Function/length","length")}} attribute but does not implement the {{jsxref("Array.forEach", "forEach()")}} method, for example.

Array methods cannot be called directly on array-like objects.

```js example-bad
function printArguments() {
  arguments.forEach((item) => { // TypeError: arguments.forEach is not a function
    console.log(item);
  });
}
```

But you can call them indirectly using {{jsxref("Global_Objects/Function/call","Function.prototype.call()")}}.

```js example-good
function printArguments() {
  Array.prototype.forEach.call(arguments, (item) => {
    console.log(item);
  });
}
```

Array prototype methods can be used on strings as well, since they provide sequential access to their characters in a similar way to arrays:

```js
Array.prototype.forEach.call('a string', (chr) => {
  console.log(chr)
})
```

## Typed Arrays

[JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays) are array-like objects and provide a mechanism for accessing raw binary data. As you already know, {{jsxref("Array")}} objects grow and shrink dynamically and can have any JavaScript value. JavaScript engines perform optimizations so that these arrays are fast. However, as web applications become more and more powerful, adding features such as audio and video manipulation, access to raw data using [WebSockets](/en-US/docs/Web/API/WebSockets_API), and so forth, it has become clear that there are times when it would be helpful for JavaScript code to be able to quickly and easily manipulate raw binary data in typed arrays.

Typed array objects share many of the same methods as arrays with similar semantics. However, they are conceptually not arrays and don't have all array methods.

### Buffers and views: typed array architecture

To achieve maximum flexibility and efficiency, JavaScript typed arrays split the implementation into _buffers_ and _views_. A buffer (implemented by the {{jsxref("ArrayBuffer")}} object) is an object representing a chunk of data; it has no format to speak of, and offers no mechanism for accessing its contents. In order to access the memory contained in a buffer, you need to use a view. A view provides a _context_ — that is, a data type, starting offset, and number of elements — that turns the data into an actual typed array.

![A diagram showing how different typed arrays may be views of the same underlying buffer. Each one has a different element number and width.](typed_arrays.png)

### ArrayBuffer

The {{jsxref("ArrayBuffer")}} is a data type that is used to represent a generic, fixed-length binary data buffer. You can't directly manipulate the contents of an `ArrayBuffer`; instead, you create a typed array view or a {{jsxref("DataView")}} which represents the buffer in a specific format, and use that to read and write the contents of the buffer.

### Typed array views

Typed array views have self descriptive names and provide views for all the usual numeric types like `Int8`, `Uint32`, `Float64` and so forth. There is one special typed array view, {{jsxref("Uint8ClampedArray")}}, which clamps the values between `0` and `255`. This is useful for [Canvas data processing](/en-US/docs/Web/API/ImageData), for example.

For more information, see [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays) and the reference documentation for the different {{jsxref("TypedArray")}} objects.

{{PreviousNext("Web/JavaScript/Guide/Regular_Expressions", "Web/JavaScript/Guide/Keyed_Collections")}}
