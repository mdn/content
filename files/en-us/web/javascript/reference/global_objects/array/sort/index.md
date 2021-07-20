---
title: Array.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/Array/sort
tags:
- Array
- Array method
- JavaScript
- Method
- Prototype
- Sorting
browser-compat: javascript.builtins.Array.sort
---
<div>{{JSRef}}</div>

<p>The <code><strong>sort()</strong></code> method sorts the elements of an array <em><a
      href="https://en.wikipedia.org/wiki/In-place_algorithm">in place</a></em> and
  returns the sorted array. The default sort order is ascending, built upon converting the
  elements into strings, then comparing their sequences of UTF-16 code units values.</p>

<p>The time and space complexity of the sort cannot be guaranteed as it depends on the
  implementation.</p>

<div>{{EmbedInteractiveExample("pages/js/array-sort.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
// Functionless
sort()

// Arrow function
sort((firstEl, secondEl) => { ... } )

// Compare function
sort(compareFn)

// Inline compare function
sort(function compareFn(firstEl, secondEl) { ... })
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>compareFunction</code> {{optional_inline}}</dt>
 <dd>Specifies a function that defines the sort order. If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.
 <dl>
  <dt><code>firstEl</code></dt>
  <dd>The first element for comparison.</dd>
  <dt><code>secondEl</code></dt>
  <dd>The second element for comparison.</dd>
 </dl>
 </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The sorted array. Note that the array is sorted <em><a
      href="https://en.wikipedia.org/wiki/In-place_algorithm">in place</a></em>, and no
  copy is made.</p>

<h2 id="Description">Description</h2>

<p>If <code>compareFunction</code> is not supplied, all non-<code>undefined</code> array
  elements are sorted by converting them to strings and comparing strings in UTF-16 code
  units order. For example, "banana" comes before "cherry". In a numeric sort, 9 comes
  before 80, but because numbers are converted to strings, "80" comes before "9" in the
  Unicode order. All <code>undefined</code> elements are sorted to the end of the array.
</p>

<div class="notecard note">
  <p><strong>Note:</strong> In UTF-16, Unicode characters above <code>\uFFFF</code> are
    encoded as two surrogate code units, of the range
    <code>\uD800</code>-<code>\uDFFF</code>. The value of each code unit is taken
    separately into account for the comparison. Thus the character formed by the surrogate
    pair <code>\uD655\uDE55</code> will be sorted before the character
    <code>\uFF3A</code>.</p>
</div>

<p>If <code>compareFunction</code> is supplied, all non-<code>undefined</code> array
  elements are sorted according to the return value of the compare function (all
  <code>undefined</code> elements are sorted to the end of the array, with no call to
  <code>compareFunction</code>). If <code>a</code> and <code>b</code> are two elements
  being compared, then:</p>

<ul>
  <li>If <code>compareFunction(a, b)</code> returns a value &gt; than 0, sort <code>b</code> before <code>a</code>.</li>
  <li>If <code>compareFunction(a, b)</code> returns a value ≤ 0, leave <code>a</code> and <code>b</code> in the same order.
    <div class="notecard note">
      <p><strong>Note:</strong> The <a href="https://www.ecma-international.org/ecma-262/10.0/index.html#sec-intro">ECMAScript Standard, 10th edition</a> (2019)
        algorithm mandates stable sorting, which means elements that compare equal must remain in their original order with respect to each other.
        This behaviour may not be respected by older browsers.</p>
    </div>
  </li>
  <li><code>compareFunction(a, b)</code> must always return the same value when given a
    specific pair of elements <code>a</code> and <code>b</code> as its two arguments. If
    inconsistent results are returned, then the sort order is undefined.</li>
</ul>

<p>So, the compare function has the following form:</p>

<pre class="brush: js">function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
</pre>

<p>To compare numbers instead of strings, the compare function can subtract <code>b</code>
  from <code>a</code>. The following function will sort the array in ascending order (if
  it doesn't contain <code>Infinity</code> and <code>NaN</code>):</p>

<pre class="brush: js">function compareNumbers(a, b) {
  return a - b;
}
</pre>

<p>The <code>sort</code> method can be conveniently used with
  {{jsxref("Operators/function", "function expressions", "", 1)}}:</p>

<pre class="brush: js">var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]
</pre>

<p>ES2015 provides {{jsxref("Functions/Arrow_functions", "arrow function expressions", "",
  1)}} with even shorter syntax.</p>

<pre class="brush: js">let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) =&gt; a - b);
console.log(numbers);

// [1, 2, 3, 4, 5]</pre>

<p>Arrays of objects can be sorted by comparing the value of one of their properties.</p>

<pre class="brush: js">var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// sort by value
items.sort(function (a, b) {
  return a.value - b.value;
});

// sort by name
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA &lt; nameB) {
    return -1;
  }
  if (nameA &gt; nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Creating_displaying_and_sorting_an_array">Creating, displaying, and sorting an
  array</h3>

<p>The following example creates four arrays and displays the original array, then the
  sorted arrays. The numeric arrays are sorted without a compare function, then sorted
  using one.</p>

<pre class="brush: js">let stringArray = ['Blue', 'Humpback', 'Beluga'];
let numericStringArray = ['80', '9', '700'];
let numberArray = [40, 1, 5, 200];
let mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

stringArray.join(); // 'Blue,Humpback,Beluga'
stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']

numberArray.join(); // '40,1,5,200'
numberArray.sort(); // [1, 200, 40, 5]
numberArray.sort(compareNumbers); // [1, 5, 40, 200]

numericStringArray.join(); // '80,9,700'
numericStringArray.sort(); // [700, 80, 9]
numericStringArray.sort(compareNumbers); // [9, 80, 700]

mixedNumericArray.join(); // '80,9,700,40,1,5,200'
mixedNumericArray.sort(); // [1, 200, 40, 5, 700, 80, 9]
mixedNumericArray.sort(compareNumbers); // [1, 5, 9, 40, 80, 200, 700]
</pre>

<h3 id="Sorting_non-ASCII_characters">Sorting non-ASCII characters</h3>

<p>For sorting strings with non-ASCII characters, i.e. strings with accented characters
  (e, é, è, a, ä, etc.), strings from languages other than English, use
  {{jsxref("String.localeCompare")}}. This function can compare those characters so they
  appear in the right order.</p>

<pre class="brush: js">var items = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair'];
items.sort(function (a, b) {
  return a.localeCompare(b);
});

// items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']
</pre>

<h3 id="Sorting_with_map">Sorting with map</h3>

<p>The <code>compareFunction</code> can be invoked multiple times per element within the
  array. Depending on the <code>compareFunction</code>'s nature, this may yield a high
  overhead. The more work a <code>compareFunction</code> does and the more elements there
  are to sort, it may be more efficient to use <a
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">map</a> for
  sorting. The idea is to traverse the array once to extract the actual values used for
  sorting into a temporary array, sort the temporary array, and then traverse the
  temporary array to achieve the right order.</p>

<pre class="brush: js">// the array to be sorted
const data = ['delta', 'alpha', 'charlie', 'bravo'];

// temporary array holds objects with position and sort-value
const mapped = data.map((v, i) => {
  return { i, value: someSlowOperation(v) };
})

// sorting the mapped array containing the reduced values
mapped.sort((a, b) => {
  if (a.value &gt; b.value) {
    return 1;
  }
  if (a.value &lt; b.value) {
    return -1;
  }
  return 0;
});

const result = mapped.map(v => data[v.i]);
</pre>

<p>There is an open source library available called <a
    href="https://null.house/open-source/mapsort">mapsort</a> which applies this approach.
</p>

<h3 id="sort_stability">Sort stability</h3>

<p>Since version 10 (or EcmaScript 2019), the <a href="https://tc39.es/ecma262/#sec-array.prototype.sort">specification</a> dictates that <code>Array.prototype.sort</code> is stable.</p>
<p>For example, say you had a list of students alongside their grades. Note that the list of students is already pre-sorted by name in alphabetical order:</p>
<pre class="brush: js">const students = [
  { name: "Alex",   grade: 15 },
  { name: "Devlin", grade: 15 },
  { name: "Eagle",  grade: 13 },
  { name: "Sam",    grade: 14 },
];
</pre>

<p>After sorting this array by <code>grade</code> in ascending order:</p>

<pre class="brush: js">students.sort((firstItem, secondItem) => firstItem.grade - secondItem.grade);
</pre>

<p>The <code>students</code> variable will then have the following value:</p>

<pre class="brush: js">[
  { name: "Eagle",  grade: 13 },
  { name: "Sam",    grade: 14 },
  { name: "Alex",   grade: 15 }, // original maintained for similar grade (stable sorting)
  { name: "Devlin", grade: 15 }, // original maintained for similar grade (stable sorting)
];
</pre>

<p>It's important to note that students that have the same grade (for example, Alex and Devlin), will remain in the same order as before calling the sort. This is what a stable sorting algorithm guarantees.</p>

<p>Before version 10 (or EcmaScript 2019), sort stability was not guaranteed, meaning that you could end up with the following:</p>

<pre class="brush: js">[
  { name: "Eagle",  grade: 13 },
  { name: "Sam",    grade: 14 },
  { name: "Devlin", grade: 15 }, // original order not maintained
  { name: "Alex",   grade: 15 }, // original order not maintained
];
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Array.prototype.reverse()")}}</li>
  <li>{{jsxref("String.prototype.localeCompare()")}}</li>
  <li><a href="https://v8.dev/blog/array-sort">About the stability of the algorithm used
      by V8 engine</a></li>
  <li><a href="https://v8.dev/features/stable-sort">V8 sort stability</a></li>
  <li><a href="https://mathiasbynens.be/demo/sort-stability">Mathias Bynens' sort stability demo</a></li>
</ul>
