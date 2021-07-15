---
title: Keyed collections
slug: Web/JavaScript/Guide/Keyed_collections
tags:
  - Collections
  - Guide
  - JavaScript
  - Map
  - l10n:priority
  - set
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Indexed_Collections", "Web/JavaScript/Guide/Working_with_Objects")}}</div>

<p class="summary">This chapter introduces collections of data which are indexed by a key; <code>Map</code> and <code>Set</code> objects contain elements which are iterable in the order of insertion.</p>

<h2 id="Maps">Maps</h2>

<h3 id="Map_object">Map object</h3>

<p>ECMAScript 2015 introduces a new data structure to map values to values. A {{jsxref("Map")}} object is a simple key/value map and can iterate its elements in insertion order.</p>

<p>The following code shows some basic operations with a <code>Map</code>. See also the {{jsxref("Map")}} reference page for more examples and the complete API. You can use a {{jsxref("Statements/for...of","for...of")}} loop to return an array of <code>[<var>key<var>, <var>value</var>]</var></var></code> for each iteration.</p>

<pre class="brush: js">let sayings = new Map();
sayings.set('dog', 'woof');
sayings.set('cat', 'meow');
sayings.set('elephant', 'toot');
sayings.size; // 3
sayings.get('dog'); // woof
sayings.get('fox'); // undefined
sayings.has('bird'); // false
sayings.delete('dog');
sayings.has('dog'); // false

for (let [key, value] of sayings) {
  console.log(key + ' goes ' + value);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0
</pre>

<h3 id="Object_and_Map_compared">Object and Map compared</h3>

<p>Traditionally, {{jsxref("Object", "objects", "", 1)}} have been used to map strings to values. Objects allow you to set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. <code>Map</code> objects, however, have a few more advantages that make them better maps.</p>

<ul>
 <li>The keys of an <code>Object</code> are {{jsxref("Global_Objects/String","Strings")}} or {{jsxref("Global_Objects/Symbol","Symbols")}}, where they can be of any value for a <code>Map</code>.</li>
 <li>You can get the <code>size</code> of a <code>Map</code> easily, while you have to manually keep track of size for an <code>Object</code>.</li>
 <li>The iteration of maps is in insertion order of the elements.</li>
 <li>An <code>Object</code> has a prototype, so there are default keys in the map. (This can be bypassed using <code>map = Object.create(null)</code>.)</li>
</ul>

<p>These three tips can help you to decide whether to use a <code>Map</code> or an <code>Object</code>:</p>

<ul>
 <li>Use maps over objects when keys are unknown until run time, and when all keys are the same type and all values are the same type.</li>
 <li>Use maps if there is a need to store primitive values as keys because object treats each key as a string whether it's a number value, boolean value or any other primitive value.</li>
 <li>Use objects when there is logic that operates on individual elements.</li>
</ul>

<h3 id="WeakMap_object">WeakMap object</h3>

<p>The {{jsxref("WeakMap")}} object is a collection of key/value pairs in which the <strong>keys are objects only</strong> and the values can be arbitrary values. The object references in the keys are held <em>weakly</em>, meaning that they are a target of garbage collection (GC) if there is no other reference to the object anymore. The <code>WeakMap</code> API is the same as the <code>Map</code> API.</p>

<p>One difference to <code>Map</code> objects is that <code>WeakMap</code> keys are not enumerable (i.e., there is no method giving you a list of the keys). If they were, the list would depend on the state of garbage collection, introducing non-determinism.</p>

<p>For more information and example code, see also "Why <em>Weak</em>Map?" on the {{jsxref("WeakMap")}} reference page.</p>

<p>One use case of <code>WeakMap</code> objects is to store private data for an object, or to hide implementation details. The following example is from Nick Fitzgerald's blog post <a href="http://fitzgeraldnick.com/weblog/53/">"Hiding Implementation Details with ECMAScript 6 WeakMaps"</a>. The private data and methods belong inside the object and are stored in the <code><var>privates</var></code> <code>WeakMap</code> object. Everything exposed on the instance and prototype is public; everything else is inaccessible from the outside world because <code><var>privates</var></code> is not exported from the module.</p>

<pre class="brush: js">const privates = new WeakMap();

function Public() {
  const me = {
    // Private data goes here
  };
  privates.set(this, me);
}

Public.prototype.method = function () {
  const me = privates.get(this);
  // Do stuff with private data in `me`...
};

module.exports = Public;</pre>

<h2 id="Sets">Sets</h2>

<h3 id="Set_object">Set object</h3>

<p>{{jsxref("Set")}} objects are collections of values. You can iterate its elements in insertion order. A value in a <code>Set</code> may only occur once; it is unique in the <code>Set</code>'s collection.</p>

<p>The following code shows some basic operations with a <code>Set</code>. See also the {{jsxref("Set")}} reference page for more examples and the complete API.</p>

<pre class="brush: js">let mySet = new Set();
mySet.add(1);
mySet.add('some text');
mySet.add('foo');

mySet.has(1); // true
mySet.delete('foo');
mySet.size; // 2

for (let item of mySet) console.log(item);
// 1
// "some text"
</pre>

<h3 id="Converting_between_Array_and_Set">Converting between Array and Set</h3>

<p>You can create an {{jsxref("Array")}} from a Set using {{jsxref("Array.from")}} or the <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax">spread syntax</a>. Also, the <code>Set</code> constructor accepts an <code>Array</code> to convert in the other direction.</p>

<div class="notecard note">
  <p><strong>Note:</strong> <code>Set</code> objects store <em>unique values</em>—so any duplicate elements from an Array are deleted when converting!</p>
</div>

<pre class="brush: js">Array.from(mySet);
[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);
</pre>

<h3 id="Array_and_Set_compared">Array and Set compared</h3>

<p>Traditionally, a set of elements has been stored in arrays in JavaScript in a lot of situations. The new <code>Set</code> object, however, has some advantages:</p>

<ul>
 <li>Deleting Array elements by value (<code>arr.splice(arr.indexOf(val), 1)</code>) is very slow.</li>
 <li><code>Set</code> objects let you delete elements by their value. With an array, you would have to <code>splice</code> based on an element's index.</li>
 <li>The value {{jsxref("NaN")}} cannot be found with <code>indexOf</code> in an array.</li>
 <li><code>Set</code> objects store unique values. You don't have to manually keep track of duplicates.</li>
</ul>

<h3 id="WeakSet_object">WeakSet object</h3>

<p>{{jsxref("WeakSet")}} objects are collections of objects. An object in the <code>WeakSet</code> may only occur once. It is unique in the <code>WeakSet</code>'s collection, and objects are not enumerable.</p>

<p>The main differences to the {{jsxref("Set")}} object are:</p>

<ul>
 <li>In contrast to <code>Sets</code>, <code>WeakSets</code> are <strong>collections of <em>objects only</em></strong>, and not of arbitrary values of any type.</li>
 <li>The <code>WeakSet</code> is <em>weak</em>: References to objects in the collection are held weakly. If there is no other reference to an object stored in the <code>WeakSet</code>, they can be garbage collected. That also means that there is no list of current objects stored in the collection.</li>
 <li><code>WeakSets</code> are not enumerable.</li>
</ul>

<p>The use cases of <code>WeakSet</code> objects are limited. They will not leak memory, so it can be safe to use DOM elements as a key and mark them for tracking purposes, for example.</p>

<h2 id="Key_and_value_equality_of_Map_and_Set">Key and value equality of Map and Set</h2>

<p>Both the key equality of <code>Map</code> objects and the value equality of <code>Set</code> objects, are based on the "<a href="https://tc39.github.io/ecma262/#sec-samevaluezero">same-value-zero algorithm</a>":</p>

<ul>
 <li>Equality works like the identity comparison operator <code>===</code>.</li>
 <li><code>-0</code> and <code>+0</code> are considered equal.</li>
 <li>{{jsxref("NaN")}} is considered equal to itself (contrary to <code>===</code>).</li>
</ul>

<p>{{PreviousNext("Web/JavaScript/Guide/Indexed_Collections", "Web/JavaScript/Guide/Working_with_Objects")}}</p>
