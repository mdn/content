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
<div>{{JSRef}}</div>

<p>The JavaScript <strong><code>Array</code></strong> class is a global object that is used in the construction of arrays; which are high-level, list-like objects.</p>

<h2 id="Description">Description</h2>

<p>Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of a JavaScript array nor the types of its elements are fixed. Since an array's length can change at any time, and data can be stored at non-contiguous locations in the array, JavaScript arrays are not guaranteed to be dense; this depends on how the programmer chooses to use them. In general, these are convenient characteristics; but if these features are not desirable for your particular use, you might consider using typed arrays.</p>

<p>Arrays cannot use strings as element indexes (as in an <a href="https://en.wikipedia.org/wiki/Associative_array">associative array</a>) but must use integers. Setting or accessing via non-integers using <a href="/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#objects_and_properties">bracket notation</a> (or <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors">dot notation</a>) will not set or retrieve an element from the array list itself, but will set or access a variable associated with that array's <a href="/en-US/docs/Web/JavaScript/Data_structures#properties">object property collection</a>. The array's object properties and list of array elements are separate, and the array's <a href="/en-US/docs/Web/JavaScript/Guide/Indexed_collections#array_methods">traversal and mutation operations</a> cannot be applied to these named properties.</p>

<h3 id="Common_operations">Common operations</h3>

<p><strong>Create an Array</strong></p>

<pre class="brush: js">let fruits = ['Apple', 'Banana']

console.log(fruits.length)
// 2
</pre>

<p><strong>Access an Array item using the index position</strong></p>

<pre class="brush: js">let first = fruits[0]
// Apple

let last = fruits[fruits.length - 1]
// Banana
</pre>

<p><strong>Loop over an Array</strong></p>

<pre class="brush: js">fruits.forEach(function(item, index, array) {
  console.log(item, index)
})
// Apple 0
// Banana 1
</pre>

<p><strong>Add an item to the end of an Array</strong></p>

<pre class="brush: js">let newLength = fruits.push('Orange')
// ["Apple", "Banana", "Orange"]
</pre>

<p><strong>Remove an item from the end of an Array</strong></p>

<pre class="brush: js">let last = fruits.pop() // remove Orange (from the end)
// ["Apple", "Banana"]
</pre>

<p><strong>Remove an item from the beginning of an Array</strong></p>

<pre class="brush: js">let first = fruits.shift() // remove Apple from the front
// ["Banana"]
</pre>

<p><strong>Add an item to the beginning of an Array</strong></p>

<pre class="brush: js">let newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"]
</pre>

<p><strong>Find the index of an item in the Array</strong></p>

<pre class="brush: js">fruits.push('Mango')
// ["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf('Banana')
// 1
</pre>

<p><strong>Remove an item by index position</strong></p>

<pre class="brush: js">let removedItem = fruits.splice(pos, 1) // this is how to remove an item

// ["Strawberry", "Mango"]</pre>

<p><strong>Remove items from an index position</strong></p>

<pre class="brush: js">let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
console.log(vegetables)
// ["Cabbage", "Turnip", "Radish", "Carrot"]

let pos = 1
let n = 2

let removedItems = vegetables.splice(pos, n)
// this is how to remove items, <em>n</em> defines the number of items to be removed,
// starting at the index position specified by <em>pos</em> and progressing toward the end of array.

console.log(vegetables)
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems)
// ["Turnip", "Radish"]
</pre>

<p><strong>Copy an Array</strong></p>

<pre class="brush: js">let shallowCopy = fruits.slice() // this is how to make a copy
// ["Strawberry", "Mango"]
</pre>

<h3 id="Accessing_array_elements">Accessing array elements</h3>

<p>JavaScript arrays are zero-indexed. The first element of an array is at index <code>0</code>, and the last element is at the index value equal to the value of the array's {{jsxref("Array.length", "length")}} property minus <code>1</code>.</p>

<p>Using an invalid index number returns <code>undefined</code>.</p>

<pre class="brush: js">let arr = ['this is the first element', 'this is the second element', 'this is the last element']
console.log(arr[0])              // logs 'this is the first element'
console.log(arr[1])              // logs 'this is the second element'
console.log(arr[arr.length - 1]) // logs 'this is the last element'
</pre>

<p>Array elements are object properties in the same way that <code>toString</code> is a property (to be specific, however, <code>toString()</code> is a method). Nevertheless, trying to access an element of an array as follows throws a syntax error because the property name is not valid:</p>

<pre class="brush: js">console.log(arr.0) // a syntax error
</pre>

<p>There is nothing special about JavaScript arrays and the properties that cause this. JavaScript properties that begin with a digit cannot be referenced with dot notation and must be accessed using bracket notation.</p>

<p>For example, if you had an object with a property named <code>3d</code>, it can only be referenced using bracket notation.</p>

<pre class="brush: js">let years = [1950, 1960, 1970, 1980, 1990, 2000, 2010]
console.log(years.0)   // a syntax error
console.log(years[0])  // works properly
</pre>

<pre class="brush: js">renderer.3d.setTexture(model, 'character.png')     // a syntax error
renderer['3d'].setTexture(model, 'character.png')  // works properly
</pre>

<p>In the <code>3d</code> example, <code>'3d'</code> <em>had</em> to be quoted (because it begins with a digit). But it's also possible to quote the array indexes as well (e.g., <code>years['2']</code> instead of <code>years[2]</code>), although it's not necessary.</p>

<p>The <code>2</code> in <code>years[2]</code> is coerced into a string by the JavaScript engine through an implicit <code>toString</code> conversion. As a result, <code>'2'</code> and <code>'02'</code> would refer to two different slots on the <code>years</code> object, and the following example could be <code>true</code>:</p>

<pre class="brush: js">console.log(years['2'] != years['02'])
</pre>

<h3 id="Relationship_between_length_and_numerical_properties">Relationship between length and numerical properties</h3>

<p>A JavaScript array's {{jsxref("Array.length", "length")}} property and numerical properties are connected.</p>

<p>Several of the built-in array methods (e.g., {{jsxref("Array.join", "join()")}}, {{jsxref("Array.slice", "slice()")}}, {{jsxref("Array.indexOf", "indexOf()")}}, etc.) take into account the value of an array's {{jsxref("Array.length", "length")}} property when they're called.</p>

<p>Other methods (e.g., {{jsxref("Array.push", "push()")}}, {{jsxref("Array.splice", "splice()")}}, etc.) also result in updates to an array's {{jsxref("Array.length", "length")}} property.</p>

<pre class="brush: js">const fruits = []
fruits.push('banana', 'apple', 'peach')

console.log(fruits.length) // 3
</pre>

<p>When setting a property on a JavaScript array when the property is a valid array index and that index is outside the current bounds of the array, the engine will update the array's {{jsxref("Array.length", "length")}} property accordingly:</p>

<pre class="brush: js">fruits[5] = 'mango'
console.log(fruits[5])            // 'mango'
console.log(Object.keys(fruits))  // ['0', '1', '2', '5']
console.log(fruits.length)        // 6
</pre>

<p>Increasing the {{jsxref("Array.length", "length")}}.</p>

<pre class="brush: js">fruits.length = 10
console.log(fruits)              // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)) // ['0', '1', '2', '5']
console.log(fruits.length)       // 10
console.log(fruits[8])           // undefined
</pre>

<p>Decreasing the {{jsxref("Array.length", "length")}} property does, however, delete elements.</p>

<pre class="brush: js">fruits.length = 2
console.log(Object.keys(fruits)) // ['0', '1']
console.log(fruits.length)       // 2
</pre>

<p>This is explained further on the {{jsxref("Array.length")}} page.</p>

<h3 id="Creating_an_array_using_the_result_of_a_match">Creating an array using the result of a match</h3>

<p>The result of a match between a {{jsxref("RegExp")}} and a string can create a JavaScript array. This array has properties and elements which provide information about the match. Such an array is returned by {{jsxref("RegExp.exec()")}}, {{jsxref("String.match()")}}, and {{jsxref("String.replace()")}}.</p>

<p>To help explain these properties and elements, see this example and then refer to the table below:</p>

<pre class="brush: js">// Match one d followed by one or more b's followed by one d
// Remember matched b's and the following d
// Ignore case

const myRe = /d(b+)(d)/i
const myArray = myRe.exec('cdbBdbsbz')
</pre>

<p>The properties and elements returned from this match are as follows:</p>

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
   <td><code>input</code><br>
    {{ReadOnlyInline}}</td>
   <td>The original string against which the regular expression was matched.</td>
   <td><code>"cdbBdbsbz"</code></td>
  </tr>
  <tr>
   <td><code>index</code><br>
    {{ReadOnlyInline}}</td>
   <td>The zero-based index of the match in the string.</td>
   <td><code>1</code></td>
  </tr>
  <tr>
   <td><code>[0]</code><br>
    {{ReadOnlyInline}}</td>
   <td>The last matched characters.</td>
   <td><code>"dbBd"</code></td>
  </tr>
  <tr>
   <td><code>[1], ...[n]</code><br>
    {{ReadOnlyInline}}</td>
   <td>Elements that specify the parenthesized substring matches (if included) in the regular expression. The number of possible parenthesized substrings is unlimited.</td>
   <td><code>[1]: "bB"<br>
    [2]: "d"</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{jsxref("Array/Array", "Array()")}}</dt>
 <dd>Creates a new <code>Array</code> object.</dd>
</dl>

<h2 id="Static_properties">Static properties</h2>

<dl>
 <dt>{{jsxref("Array/@@species", "get Array[@@species]")}}</dt>
 <dd>The constructor function is used to create derived objects.</dd>
</dl>

<h2 id="Static_methods">Static methods</h2>

<dl>
 <dt>{{jsxref("Array.from()")}}</dt>
 <dd>Creates a new <code>Array</code> instance from an array-like or iterable object.</dd>
 <dt>{{jsxref("Array.isArray()")}}</dt>
 <dd>Returns <code>true</code> if the argument is an array, or <code>false</code> otherwise.</dd>
 <dt>{{jsxref("Array.of()")}}</dt>
 <dd>Creates a new <code>Array</code> instance with a variable number of arguments, regardless of number or type of the arguments.</dd>
</dl>

<h2 id="Instance_properties">Instance properties</h2>

<dl>
 <dt>{{jsxref("Array.prototype.length")}}</dt>
 <dd>Reflects the number of elements in an array.</dd>
 <dt>{{jsxref("Array/@@unscopables", "Array.prototype[@@unscopables]")}}</dt>
 <dd>A symbol containing property names to exclude from a <a href="/en-US/docs/Web/JavaScript/Reference/Statements/with"><code>with</code></a> binding scope.</dd>
</dl>

<h2 id="Instance_methods">Instance methods</h2>

<dl>
 <dt>{{jsxref("Array.prototype.at()")}}{{Experimental_Inline}}</dt>
 <dd>Returns the array item at the given index. Accepts negative integers, which count back from the last item.</dd>
 <dt>{{jsxref("Array.prototype.concat()")}}</dt>
 <dd>Returns a new array that is this array joined with other array(s) and/or value(s).</dd>
 <dt>{{jsxref("Array.prototype.copyWithin()")}}</dt>
 <dd>Copies a sequence of array elements within the array.</dd>
 <dt>{{jsxref("Array.prototype.entries()")}}</dt>
 <dd>Returns a new <code>Array Iterator</code> object that contains the key/value pairs for each index in the array.</dd>
 <dt>{{jsxref("Array.prototype.every()")}}</dt>
 <dd>Returns <code>true</code> if every element in this array satisfies the testing function.</dd>
 <dt>{{jsxref("Array.prototype.fill()")}}</dt>
 <dd>Fills all the elements of an array from a start index to an end index with a static value.</dd>
 <dt>{{jsxref("Array.prototype.filter()")}}</dt>
 <dd>Returns a new array containing all elements of the calling array for which the provided filtering function returns <code>true</code>.</dd>
 <dt>{{jsxref("Array.prototype.find()")}}</dt>
 <dd>Returns the found <code><var>element</var></code> in the array, if some element in the array satisfies the testing function, or <code>undefined</code> if not found.</dd>
 <dt>{{jsxref("Array.prototype.findIndex()")}}</dt>
 <dd>Returns the found index in the array, if an element in the array satisfies the testing function, or <code>-1</code> if not found.</dd>
 <dt>{{jsxref("Array.prototype.forEach()")}}</dt>
 <dd>Calls a function for each element in the array.</dd>
 <dt>{{jsxref("Array.prototype.includes()")}}</dt>
 <dd>Determines whether the array contains a value, returning <code>true</code> or <code>false</code> as appropriate.</dd>
 <dt>{{jsxref("Array.prototype.indexOf()")}}</dt>
 <dd>Returns the first (least) index of an element within the array equal to an element, or <code>-1</code> if none is found.</dd>
 <dt>{{jsxref("Array.prototype.join()")}}</dt>
 <dd>Joins all elements of an array into a string.</dd>
 <dt>{{jsxref("Array.prototype.keys()")}}</dt>
 <dd>Returns a new <code>Array Iterator</code> that contains the keys for each index in the array.</dd>
 <dt>{{jsxref("Array.prototype.lastIndexOf()")}}</dt>
 <dd>Returns the last (greatest) index of an element within the array equal to an element, or <code>-1</code> if none is found.</dd>
 <dt>{{jsxref("Array.prototype.map()")}}</dt>
 <dd>Returns a new array containing the results of calling a function on every element in this array.</dd>
 <dt>{{jsxref("Array.prototype.pop()")}}</dt>
 <dd>Removes the last element from an array and returns that element.</dd>
 <dt>{{jsxref("Array.prototype.push()")}}</dt>
 <dd>Adds one or more elements to the end of an array, and returns the new <code>length</code> of the array.</dd>
 <dt>{{jsxref("Array.prototype.reduce()")}}</dt>
 <dd>Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.</dd>
 <dt>{{jsxref("Array.prototype.reduceRight()")}}</dt>
 <dd>Apply a function against an accumulator&gt; and each value of the array (from right-to-left) as to reduce it to a single value.</dd>
 <dt>{{jsxref("Array.prototype.reverse()")}}</dt>
 <dd>Reverses the order of the elements of an array <em>in place</em>. (First becomes the last, last becomes first.)</dd>
 <dt>{{jsxref("Array.prototype.shift()")}}</dt>
 <dd>Removes the first element from an array and returns that element.</dd>
 <dt>{{jsxref("Array.prototype.slice()")}}</dt>
 <dd>Extracts a section of the calling array and returns a new array.</dd>
 <dt>{{jsxref("Array.prototype.some()")}}</dt>
 <dd>Returns <code>true</code> if at least one element in this array satisfies the provided testing function.</dd>
 <dt>{{jsxref("Array.prototype.sort()")}}</dt>
 <dd>Sorts the elements of an array in place and returns the array.</dd>
 <dt>{{jsxref("Array.prototype.splice()")}}</dt>
 <dd>Adds and/or removes elements from an array.</dd>
 <dt>{{jsxref("Array.prototype.toLocaleString()")}}</dt>
 <dd>Returns a localized string representing the array and its elements. Overrides the {{jsxref("Object.prototype.toLocaleString()")}} method.</dd>
 <dt>{{jsxref("Array.prototype.toString()")}}</dt>
 <dd>Returns a string representing the array and its elements. Overrides the {{jsxref("Object.prototype.toString()")}} method.</dd>
 <dt>{{jsxref("Array.prototype.unshift()")}}</dt>
 <dd>Adds one or more elements to the front of an array, and returns the new <code>length</code> of the array.</dd>
 <dt>{{jsxref("Array.prototype.values()")}}</dt>
 <dd>Returns a new <code>Array Iterator</code> object that contains the values for each index in the array.</dd>
 <dt>{{jsxref("Array.prototype.@@iterator()", "Array.prototype[@@iterator]()")}}</dt>
 <dd>Returns a new <code>Array Iterator</code> object that contains the values for each index in the array.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Creating_an_array">Creating an array</h3>

<p>The following example creates an array, <code><var>msgArray</var></code>, with a length of <code>0</code>, then assigns values to <code>msgArray[0]</code> and <code>msgArray[99]</code>, changing the <code>length</code> of the array to <code>100</code>.</p>

<pre class="brush: js">let msgArray = []
msgArray[0] = 'Hello'
msgArray[99] = 'world'

if (msgArray.length === 100) {
  console.log('The length is 100.')
}
</pre>

<h3 id="Creating_a_two-dimensional_array">Creating a two-dimensional array</h3>

<p>The following creates a chessboard as a two-dimensional array of strings. The first move is made by copying the <code>'p'</code> in <code>board[6][4]</code> to <code>board[4][4]</code>. The old position at <code>[6][4]</code> is made blank.</p>

<pre class="brush: js">let board = [
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
</pre>

<p>Here is the output:</p>

<pre class="brush: plain">R,N,B,Q,K,B,N,R
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
</pre>

<h3 id="Using_an_array_to_tabulate_a_set_of_values">Using an array to tabulate a set of values</h3>

<pre class="brush: js">values = []
for (let x = 0; x &lt; 10; x++){
 values.push([
  2 ** x,
  2 * x ** 2
 ])
}
console.table(values)</pre>

<p>Results in</p>

<pre class="brush: plain">// The first column is the index
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
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>From the JavaScript Guide:
  <ul>
   <li><a href="/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#indexing_object_properties">“Indexing object properties”</a></li>
   <li><a href="/en-US/docs/Web/JavaScript/Guide/Indexed_collections#array_object">“Indexed collections: <code>Array</code> object”</a></li>
  </ul>
 </li>
 <li><a href="/en-US/docs/Web/JavaScript/Typed_arrays">Typed Arrays</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_array_length">RangeError: invalid array length</a></li>
</ul>
