---
title: Indexed collections
slug: Web/JavaScript/Guide/Indexed_collections
tags:
  - Guide
  - JavaScript
  - l10n:priority
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Regular_Expressions", "Web/JavaScript/Guide/Keyed_Collections")}}</div>

<p class="summary">This chapter introduces collections of data which are ordered by an index value. This includes arrays and array-like constructs such as {{jsxref("Array")}} objects and {{jsxref("TypedArray")}} objects.</p>

<h2 id="Array_object"><code>Array</code> object</h2>

<p>An <em><dfn>array</dfn></em> is an ordered list of values that you refer to with a name and an index.</p>

<p>For example, consider an array called <code>emp</code>, which contains employees' names indexed by their numerical employee number. So <code>emp[0]</code> would be employee number zero, <code>emp[1]</code> employee number one, and so on.</p>

<p>JavaScript does not have an explicit array data type. However, you can use the predefined <code>Array</code> object and its methods to work with arrays in your applications. The <code>Array</code> object has methods for manipulating arrays in various ways, such as joining, reversing, and sorting them. It has a property for determining the array length and other properties for use with regular expressions.</p>

<h3 id="Creating_an_array">Creating an array</h3>

<p>The following statements create equivalent arrays:</p>

<pre class="brush: js">let arr = new Array(<var>element0</var>, <var>element1</var>, ..., <var>elementN</var>)
let arr = Array(<var>element0</var>, <var>element1</var>, ..., <var>elementN</var>)
let arr = [<var>element0</var>, <var>element1</var>, ..., <var>elementN</var>]
</pre>

<p><code><var>element0</var>, <var>element1</var>, ..., <var>elementN</var></code> is a list of values for the array's elements. When these values are specified, the array is initialized with them as the array's elements. The array's <code>length</code> property is set to the number of arguments.</p>

<p>The bracket syntax is called an "array literal" or "array initializer." It's shorter than other forms of array creation, and so is generally preferred. See <a href="/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals">Array literals</a> for details.</p>

<p>To create an array with non-zero length, but without any items, either of the following can be used:</p>

<pre class="brush: js">// This...
let arr = new Array(<var>arrayLength</var>)

// ...results in the same array as this
let arr = Array(<var>arrayLength</var>)

// This has exactly the same effect
let arr = []
arr.length = <var>arrayLength</var>
</pre>

<div class="note">
<p><strong>Note:</strong> In the above code, <code><var>arrayLength</var></code> must be a <code>Number</code>. Otherwise, an array with a single element (the provided value) will be created. Calling <code>arr.length</code> will return <code><var>arrayLength</var></code>, but the array doesn't contain any elements. A {{jsxref("Statements/for...in","for...in")}} loop will not find any property on the array.</p>
</div>

<p>In addition to a newly defined variable as shown above, arrays can also be assigned as a property of a new or an existing object:</p>

<pre class="brush: js">let obj = {}
// ...
obj.prop = [element0, element1, ..., elementN]

// OR
let obj = {prop: [element0, element1, ...., elementN]}
</pre>

<p>If you wish to initialize an array with a single element, and the element happens to be a <code>Number</code>, you must use the bracket syntax. When a single <code>Number</code> value is passed to the <code>Array()</code> constructor or function, it is interpreted as an <code><var>arrayLength</var></code>, not as a single element.</p>

<pre class="brush: js">let arr = [42]       // Creates an array with only one element:
                     // the number 42.

let arr = Array(42)  // Creates an array with no elements
                     // and arr.length set to 42.
                     //
                     // This is equivalent to:
let arr = []
arr.length = 42
</pre>

<p>Calling <code>Array(<var>N</var>)</code> results in a <code>RangeError</code>, if <code><var>N</var></code> is a non-whole number whose fractional portion is non-zero. The following example illustrates this behavior.</p>

<pre class="brush: js">let arr = Array(9.3)   // RangeError: Invalid array length
</pre>

<p>If your code needs to create arrays with single elements of an arbitrary data type, it is safer to use array literals. Alternatively, create an empty array first before adding the single element to it.</p>

<p>In ES2015, you can use the {{jsxref("Array.of")}} static method to create arrays with single element.</p>

<pre class="brush: js">let wisenArray = Array.of(9.3)   // wisenArray contains only one element 9.3</pre>

<h3 id="Referring_to_array_elements">Referring to array elements</h3>

<p>Because elements are also properties, you can access the using <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors">property accessors</a>. Suppose you define the following array:</p>

<pre class="brush: js">let myArray = ['Wind', 'Rain', 'Fire']
</pre>

<p>You can refer to the first element of the array as <code>myArray[0]</code>, the second element of the array as <code>myArray[1]</code>, etc… The index of the elements begins with zero.</p>

<div class="note">
<p><strong>Note:</strong> You can also use <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors">property accessors</a> to access other properties of the array, like with an object.</p>

<pre class="brush: js">let arr = ['one', 'two', 'three']
arr[2]          // three
arr['length']   // 3
</pre>
</div>

<h3 id="Populating_an_array">Populating an array</h3>

<p>You can populate an array by assigning values to its elements. For example:</p>

<pre class="brush: js">let emp = []
emp[0] = 'Casey Jones'
emp[1] = 'Phil Lesh'
emp[2] = 'August West'
</pre>

<div class="note">
<p><strong>Note:</strong> If you supply a non-integer value to the array operator in the code above, a property will be created in the object representing the array, instead of an array element.</p>

<pre class="brush: js">let arr = []
arr[3.4] = 'Oranges'
console.log(arr.length)                 // 0
console.log(arr.hasOwnProperty(3.4))    // true
</pre>
</div>

<p>You can also populate an array when you create it:</p>

<pre class="brush: js">let myArray = new Array('Hello', myVar, 3.14159)
// OR
let myArray = ['Mango', 'Apple', 'Orange']
</pre>

<h3 id="Understanding_length">Understanding length</h3>

<p>At the implementation level, JavaScript's arrays actually store their elements as standard object properties, using the array index as the property name.</p>

<p>The <code>length</code> property is special. It always returns the index of the last element plus one. (In the example below, <code>'Dusty'</code> is indexed at <code>30</code>, so <code>cats.length</code> returns <code>30 + 1</code>).</p>

<p>Remember, JavaScript Array indexes are 0-based: they start at <code>0</code>, not <code>1</code>. This means that the <code>length</code> property will be one more than the highest index stored in the array:</p>

<pre class="brush: js">let cats = []
cats[30] = ['Dusty']
console.log(cats.length) // 31
</pre>

<p>You can also assign to the <code>length</code> property.</p>

<p>Writing a value that is shorter than the number of stored items truncates the array. Writing <code>0</code> empties it entirely:</p>

<pre class="brush: js">let cats = ['Dusty', 'Misty', 'Twiggy']
console.log(cats.length)  // 3

cats.length = 2
console.log(cats)  // logs "Dusty, Misty" - Twiggy has been removed

cats.length = 0
console.log(cats)  // logs []; the cats array is empty

cats.length = 3
console.log(cats)  // logs [ &lt;3 empty items&gt; ]
</pre>

<h3 id="Iterating_over_arrays">Iterating over arrays</h3>

<p>A common operation is to iterate over the values of an array, processing each one in some way. The simplest way to do this is as follows:</p>

<pre class="brush: js">let colors = ['red', 'green', 'blue']
for (let i = 0; i &lt; colors.length; i++) {
  console.log(colors[i])
}
</pre>

<p>If you know that none of the elements in your array evaluate to <code>false</code> in a boolean context—if your array consists only of <a href="/en-US/docs/Web/API/Document_Object_Model">DOM</a> nodes, for example—you can use a more efficient idiom:</p>

<pre class="brush: js">let divs = document.getElementsByTagName('div')
for (let i = 0, div; div = divs[i]; i++) {
  /* Process div in some way */
}
</pre>

<p>This avoids the overhead of checking the length of the array, and ensures that the <code><var>div</var></code> variable is reassigned to the current item each time around the loop for added convenience.</p>

<p>The {{jsxref("Array.forEach", "forEach()")}} method provides another way of iterating over an array:</p>

<pre class="brush: js">let colors = ['red', 'green', 'blue']
colors.forEach(function(color) {
  console.log(color)
})
// red
// green
// blue
</pre>

<p>Alternatively, you can shorten the code for the forEach parameter with ES2015 Arrow Functions:</p>

<pre class="brush: js">let colors = ['red', 'green', 'blue']
colors.forEach(color =&gt; console.log(color))
// red
// green
// blue
</pre>

<p>The function passed to <code>forEach</code> is executed once for every item in the array, with the array item passed as the argument to the function. Unassigned values are not iterated in a <code>forEach</code> loop.</p>

<p>Note that the elements of an array that are omitted when the array is defined are not listed when iterating by <code>forEach</code>, but <em>are</em> listed when <code>undefined</code> has been manually assigned to the element:</p>

<pre class="brush: js">let array = ['first', 'second', , 'fourth']

array.forEach(function(element) {
  console.log(element)
})
// first
// second
// fourth

if (array[2] === undefined) {
  console.log('array[2] is undefined')  // true
}

array = ['first', 'second', undefined, 'fourth']

array.forEach(function(element) {
  console.log(element)
})
// first
// second
// undefined
// fourth
</pre>

<p>Since JavaScript elements are saved as standard object properties, it is not advisable to iterate through JavaScript arrays using {{jsxref("Statements/for...in","for...in")}} loops, because normal elements and all enumerable properties will be listed.</p>

<h3 id="Array_methods">Array methods</h3>

<p>The {{jsxref("Array")}} object has the following methods:</p>

<p>{{jsxref("Array.concat", "concat()")}} joins two or more arrays and returns a new array.</p>

<pre class="brush: js">let myArray = new Array('1', '2', '3')
myArray = myArray.concat('a', 'b', 'c')
// myArray is now ["1", "2", "3", "a", "b", "c"]
</pre>

<p>{{jsxref("Array.join", "join(delimiter = ',')")}} joins all elements of an array into a string.</p>

<pre class="brush: js">let myArray = new Array('Wind', 'Rain', 'Fire')
let list = myArray.join(' - ') // list is "Wind - Rain - Fire"
</pre>

<p>{{jsxref("Array.push", "push()")}} adds one or more elements to the end of an array and returns the resulting <code>length</code> of the array.</p>

<pre class="brush: js">let myArray = new Array('1', '2')
myArray.push('3')  // myArray is now ["1", "2", "3"]
</pre>

<p>{{jsxref("Array.pop", "pop()")}} removes the last element from an array and returns that element.</p>

<pre class="brush: js">let myArray = new Array('1', '2', '3')
let last = myArray.pop()
// myArray is now ["1", "2"], last = "3"
</pre>

<p>{{jsxref("Array.shift", "shift()")}} removes the first element from an array and returns that element.</p>

<pre class="brush: js">let myArray = new Array('1', '2', '3')
let first = myArray.shift()
// myArray is now ["2", "3"], first is "1"
</pre>

<p>{{jsxref("Array.unshift", "unshift()")}} adds one or more elements to the front of an array and returns the new length of the array.</p>

<pre class="brush: js">let myArray = new Array('1', '2', '3')
myArray.unshift('4', '5')
// myArray becomes ["4", "5", "1", "2", "3"]
</pre>

<p>{{jsxref("Array.slice", "slice(start_index, upto_index)")}} extracts a section of an array and returns a new array.</p>

<pre class="brush: js">let myArray = new Array('a', 'b', 'c', 'd', 'e')
myArray = myArray.slice(1, 4)  // starts at index 1 and extracts all elements
                               // until index 3, returning [ "b", "c", "d"]
</pre>

<p>{{jsxref("Array.splice", "splice(index, count_to_remove, addElement1, addElement2, ...)")}} removes elements from an array and (optionally) replaces them. It returns the items which were removed from the array.</p>

<pre class="brush: js">let myArray = new Array('1', '2', '3', '4', '5')
myArray.splice(1, 3, 'a', 'b', 'c', 'd')
// myArray is now ["1", "a", "b", "c", "d", "5"]
// This code started at index one (or where the "2" was),
// removed 3 elements there, and then inserted all consecutive
// elements in its place.
</pre>

<p>{{jsxref("Array.reverse", "reverse()")}} transposes the elements of an array, in place: the first array element becomes the last and the last becomes the first. It returns a reference to the array.</p>

<pre class="brush: js">let myArray = new Array('1', '2', '3')
myArray.reverse()
// transposes the array so that myArray = ["3", "2", "1"]
</pre>

<p>{{jsxref("Array.sort", "sort()")}} sorts the elements of an array in place, and returns a reference to the array.</p>

<pre class="brush: js">let myArray = new Array('Wind', 'Rain', 'Fire')
myArray.sort()
// sorts the array so that myArray = ["Fire", "Rain", "Wind"]
</pre>

<p><code>sort()</code> can also take a callback function to determine how array elements are compared.</p>

<p>The <code>sort</code> method (and others below) that take a callback are known as <em>iterative methods</em>, because they iterate over the entire array in some fashion. Each one takes an optional second argument called <code><var>thisObject</var></code>. If provided, <code><var>thisObject</var></code> becomes the value of the <code>this</code> keyword inside the body of the callback function. If not provided, as with other cases where a function is invoked outside of an explicit object context, <code>this</code> will refer to the global object (<a href="/en-US/docs/Web/API/Window" title="The Window interface represents a window containing a DOM document; the document property points to the DOM document loaded in that window."><code>window</code></a>) when using arrow function as callback, or <code>undefined</code> when using normal function as callback.</p>

<p>The callback function is called with two arguments, that are array's elements.</p>

<p>The function below compares two values and returns one of three values:</p>

<p>For instance, the following will sort by the last letter of a string:</p>

<pre class="brush: js">let sortFn = function(a, b) {
  if (a[a.length - 1] &lt; b[b.length - 1]) return -1;
  if (a[a.length - 1] &gt; b[b.length - 1]) return 1;
  if (a[a.length - 1] == b[b.length - 1]) return 0;
}
myArray.sort(sortFn)
// sorts the array so that myArray = ["Wind","Fire","Rain"]</pre>

<ul>
 <li>if <code><var>a</var></code> is less than <code><var>b</var></code> by the sorting system, return <code>-1</code> (or any negative number)</li>
 <li>if <code><var>a</var></code> is greater than <code><var>b</var></code> by the sorting system, return <code>1</code> (or any positive number)</li>
 <li>if <code><var>a</var></code> and <code><var>b</var></code> are considered equivalent, return <code>0</code>.</li>
</ul>

<p>{{jsxref("Array.indexOf", "indexOf(searchElement[, fromIndex])")}} searches the array for <code><var>searchElement</var></code> and returns the index of the first match.</p>

<pre class="brush: js">let a = ['a', 'b', 'a', 'b', 'a']
console.log(a.indexOf('b'))     // logs 1

// Now try again, starting from after the last match
console.log(a.indexOf('b', 2))  // logs 3
console.log(a.indexOf('z'))     // logs -1, because 'z' was not found
</pre>

<p>{{jsxref("Array.lastIndexOf", "lastIndexOf(searchElement[, fromIndex])")}} works like <code>indexOf</code>, but starts at the end and searches backwards.</p>

<pre class="brush: js">let a = ['a', 'b', 'c', 'd', 'a', 'b']
console.log(a.lastIndexOf('b'))     // logs 5

// Now try again, starting from before the last match
console.log(a.lastIndexOf('b', 4))  // logs 1
console.log(a.lastIndexOf('z'))     // logs -1
</pre>

<p>{{jsxref("Array.forEach", "forEach(callback[, thisObject])")}} executes <code><var>callback</var></code> on every array item and returns <code>undefined</code>.</p>

<pre class="brush: js">let a = ['a', 'b', 'c']
a.forEach(function(element) { console.log(element) })
// logs each item in turn
</pre>

<p>{{jsxref("Array.map", "map(callback[, thisObject])")}} returns a new array of the return value from executing <code><var>callback</var></code> on every array item.</p>

<pre class="brush: js">let a1 = ['a', 'b', 'c']
let a2 = a1.map(function(item) { return item.toUpperCase() })
console.log(a2) // logs ['A', 'B', 'C']
</pre>

<p>{{jsxref("Array.filter", "filter(callback[, thisObject])")}} returns a new array containing the items for which <code><var>callback</var></code> returned <code>true</code>.</p>

<pre class="brush: js">let a1 = ['a', 10, 'b', 20, 'c', 30]
let a2 = a1.filter(function(item) { return typeof item === 'number'; })
console.log(a2)  // logs [10, 20, 30]
</pre>

<p>{{jsxref("Array.every", "every(callback[, thisObject])")}} returns <code>true</code> if <code><var>callback</var></code> returns <code>true</code> for every item in the array.</p>

<pre class="brush: js">function isNumber(value) {
  return typeof value === 'number'
}
let a1 = [1, 2, 3]
console.log(a1.every(isNumber))  // logs true
let a2 = [1, '2', 3]
console.log(a2.every(isNumber))  // logs false
</pre>

<p>{{jsxref("Array.some", "some(callback[, thisObject])")}} returns <code>true</code> if <code><var>callback</var></code> returns <code>true</code> for at least one item in the array.</p>

<pre class="brush: js">function isNumber(value) {
  return typeof value === 'number'
}
let a1 = [1, 2, 3]
console.log(a1.some(isNumber))  // logs true
let a2 = [1, '2', 3]
console.log(a2.some(isNumber))  // logs true
let a3 = ['1', '2', '3']
console.log(a3.some(isNumber))  // logs false
</pre>

<p>{{jsxref("Array.reduce", "reduce(callback[, initialValue])")}} applies <code><var>callback</var>(<var>accumulator</var>, <var>currentValue</var>[, <var>currentIndex</var>[, <var>array</var>]])</code> for each value in the array for the purpose of reducing the list of items down to a single value.  The <code>reduce</code> function returns the final value returned by <code><var>callback</var></code> function. </p>

<p>If <code><var>initialValue</var></code> is specified, then <code><var>callback</var></code> is called with <code><var>initialValue</var></code> as the first parameter value and the value of the first item in the array as the second parameter value. </p>

<p>If <code><var>initialValue</var></code> is <em>not</em> specified, then <code><var>callback</var></code>'s first two parameter values will be the first and second elements of the array.  On <em>every</em> subsequent call, the first parameter's value will be whatever <code><var>callback</var></code> returned on the previous call, and the second parameter's value will be the next value in the array.</p>

<p>If <code><var>callback</var></code> needs access to the index of the item being processed, on access to the entire array, they are available as optional parameters.</p>

<pre class="brush: js">let a = [10, 20, 30]
let total = a.reduce(function(accumulator, currentValue) { return accumulator + currentValue }, 0)
console.log(total) // Prints 60
</pre>

<p>{{jsxref("Array.reduceRight", "reduceRight(callback[, initialValue])")}} works like <code>reduce()</code>, but starts with the last element.</p>

<p><code>reduce</code> and <code>reduceRight</code> are the least obvious of the iterative array methods. They should be used for algorithms that combine two values recursively in order to reduce a sequence down to a single value.</p>

<h3 id="Multi-dimensional_arrays">Multi-dimensional arrays</h3>

<p>Arrays can be nested, meaning that an array can contain another array as an element. Using this characteristic of JavaScript arrays, multi-dimensional arrays can be created.</p>

<p>The following code creates a two-dimensional array.</p>

<pre class="brush: js">let a = new Array(4)
for (let i = 0; i &lt; 4; i++) {
  a[i] = new Array(4)
  for (let j = 0; j &lt; 4; j++) {
    a[i][j] = '[' + i + ', ' + j + ']'
  }
}
</pre>

<p>This example creates an array with the following rows:</p>

<pre>Row 0: [0, 0] [0, 1] [0, 2] [0, 3]
Row 1: [1, 0] [1, 1] [1, 2] [1, 3]
Row 2: [2, 0] [2, 1] [2, 2] [2, 3]
Row 3: [3, 0] [3, 1] [3, 2] [3, 3]
</pre>

<h3 id="Using_arrays_to_store_other_properties">Using arrays to store other properties</h3>

<p>Arrays can also be used like objects, to store related information.</p>

<pre class="brush: js">const arr = [1, 2, 3];
arr.property = &quot;value&quot;;
console.log(arr.property);  // Logs &quot;value&quot;
</pre>

<h3 id="Arrays_and_regular_expressions">Arrays and regular expressions</h3>

<p>When an array is the result of a match between a regular expression and a string, the array returns properties and elements that provide information about the match. An array is the return value of {{jsxref("Global_Objects/RegExp/exec","RegExp.exec()")}}, {{jsxref("Global_Objects/String/match","String.match()")}}, and {{jsxref("Global_Objects/String/split","String.split()")}}. For information on using arrays with regular expressions, see <a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">Regular Expressions</a>.</p>

<h3 id="Working_with_array-like_objects">Working with array-like objects</h3>

<p>Some JavaScript objects, such as the <a href="/en-US/docs/Web/API/NodeList" title="NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll()."><code>NodeList</code></a> returned by <a href="/en-US/docs/Web/API/Document/getElementsByTagName" title="returns an HTMLCollection of elements with the given tag name."><code>document.getElementsByTagName()</code></a> or the {{jsxref("Functions/arguments","arguments")}} object made available within the body of a function, look and behave like arrays on the surface but do not share all of their methods. The <code>arguments</code> object provides a {{jsxref("Global_Objects/Function/length","length")}} attribute but does not implement the {{jsxref("Array.forEach", "forEach()")}} method, for example.</p>

<p>Array methods cannot be called directly on array-like objects.</p>

<pre class="brush: js example-bad">function printArguments() {
  arguments.forEach(function(item) {  // TypeError: arguments.forEach is not a function
    console.log(item);
  });
}
</pre>

<p>But you can call them indirectly using {{jsxref("Global_Objects/Function/call","Function.prototype.call()")}}.</p>

<pre class="brush: js example-good">function printArguments() {
  Array.prototype.forEach.call(arguments, function(item) {
    console.log(item);
  });
}
</pre>

<p>Array prototype methods can be used on strings as well, since they provide sequential access to their characters in a similar way to arrays:</p>

<pre class="brush: js">Array.prototype.forEach.call('a string', function(chr) {
  console.log(chr)
})
</pre>

<h2 id="Typed_Arrays">Typed Arrays</h2>

<p><a href="/en-US/docs/Web/JavaScript/Typed_arrays">JavaScript typed arrays</a> are array-like objects and provide a mechanism for accessing raw binary data. As you already know, {{jsxref("Array")}} objects grow and shrink dynamically and can have any JavaScript value. JavaScript engines perform optimizations so that these arrays are fast. However, as web applications become more and more powerful, adding features such as audio and video manipulation, access to raw data using <a href="/en-US/docs/Web/API/WebSockets_API">WebSockets</a>, and so forth, it has become clear that there are times when it would be helpful for JavaScript code to be able to quickly and easily manipulate raw binary data in typed arrays.</p>

<h3 id="Buffers_and_views_typed_array_architecture">Buffers and views: typed array architecture</h3>

<p>To achieve maximum flexibility and efficiency, JavaScript typed arrays split the implementation into <strong>buffers</strong> and <strong>views</strong>. A buffer (implemented by the {{jsxref("ArrayBuffer")}} object) is an object representing a chunk of data; it has no format to speak of, and offers no mechanism for accessing its contents. In order to access the memory contained in a buffer, you need to use a view. A view provides a <strong>context </strong>— that is, a data type, starting offset, and number of elements — that turns the data into an actual typed array.</p>

<p><img alt="Typed arrays in an ArrayBuffer" src="typed_arrays.png"></p>

<h3 id="ArrayBuffer">ArrayBuffer</h3>

<p>The {{jsxref("ArrayBuffer")}} is a data type that is used to represent a generic, fixed-length binary data buffer. You can't directly manipulate the contents of an <code>ArrayBuffer</code>; instead, you create a typed array view or a {{jsxref("DataView")}} which represents the buffer in a specific format, and use that to read and write the contents of the buffer.</p>

<h3 id="Typed_array_views">Typed array views</h3>

<p>Typed array views have self descriptive names and provide views for all the usual numeric types like <code>Int8</code>, <code>Uint32</code>, <code>Float64</code> and so forth. There is one special typed array view, {{jsxref("Uint8ClampedArray")}}, which clamps the values between <code>0</code> and <code>255</code>. This is useful for <a href="/en-US/docs/Web/API/ImageData">Canvas data processing</a>, for example.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th class="header" scope="col">Type</th>
   <th class="header" scope="col">Value Range</th>
   <th class="header" scope="col">Size in bytes</th>
   <th class="header" scope="col">Description</th>
   <th class="header" scope="col">Web IDL type</th>
   <th class="header" scope="col">Equivalent C type</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{jsxref("Int8Array")}}</td>
   <td><code>-128</code> to <code>127</code></td>
   <td>1</td>
   <td>8-bit two's complement signed integer</td>
   <td><code>byte</code></td>
   <td><code>int8_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Uint8Array")}}</td>
   <td><code>0</code> to <code>255</code></td>
   <td>1</td>
   <td>8-bit unsigned integer</td>
   <td><code>octet</code></td>
   <td><code>uint8_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Uint8ClampedArray")}}</td>
   <td><code>0</code> to <code>255</code></td>
   <td>1</td>
   <td>8-bit unsigned integer (clamped)</td>
   <td><code>octet</code></td>
   <td><code>uint8_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Int16Array")}}</td>
   <td><code>-32768</code> to <code>32767</code></td>
   <td>2</td>
   <td>16-bit two's complement signed integer</td>
   <td><code>short</code></td>
   <td><code>int16_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Uint16Array")}}</td>
   <td><code>0</code> to <code>65535</code></td>
   <td>2</td>
   <td>16-bit unsigned integer</td>
   <td><code>unsigned short</code></td>
   <td><code>uint16_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Int32Array")}}</td>
   <td><code>-2147483648</code> to <code>2147483647</code></td>
   <td>4</td>
   <td>32-bit two's complement signed integer</td>
   <td><code>long</code></td>
   <td><code>int32_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Uint32Array")}}</td>
   <td><code>0</code> to <code>4294967295</code></td>
   <td>4</td>
   <td>32-bit unsigned integer</td>
   <td><code>unsigned long</code></td>
   <td><code>uint32_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Float32Array")}}</td>
   <td><code>1.2E-38</code> to <code>3.4E38</code></td>
   <td>4</td>
   <td>32-bit IEEE floating point number (7 significant digits e.g., <code>1.1234567</code>)</td>
   <td><code>unrestricted float</code></td>
   <td><code>float</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Float64Array")}}</td>
   <td><code>5E-324</code> to <code>1.8E308</code></td>
   <td>8</td>
   <td>64-bit IEEE floating point number (16 significant digits e.g., <code>1.123...15</code>)</td>
   <td><code>unrestricted double</code></td>
   <td><code>double</code></td>
  </tr>
  <tr>
   <td>{{jsxref("BigInt64Array")}}</td>
   <td><code>-2^63</code> to <code>2^63 - 1</code></td>
   <td>8</td>
   <td>64-bit two's complement signed integer</td>
   <td><code>bigint</code></td>
   <td><code>int64_t (signed long long)</code></td>
  </tr>
  <tr>
   <td>{{jsxref("BigUint64Array")}}</td>
   <td><code>0</code> to <code>2^64 - 1</code></td>
   <td>8</td>
   <td>64-bit unsigned integer</td>
   <td><code>bigint</code></td>
   <td><code>uint64_t (unsigned long long)</code></td>
  </tr>
 </tbody>
</table>

<p>For more information, see <a href="/en-US/docs/Web/JavaScript/Typed_arrays">JavaScript typed arrays</a> and the reference documentation for the different {{jsxref("TypedArray")}} objects.</p>

<p>{{PreviousNext("Web/JavaScript/Guide/Regular_Expressions", "Web/JavaScript/Guide/Keyed_Collections")}}</p>
