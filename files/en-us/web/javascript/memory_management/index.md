---
title: Memory Management
slug: Web/JavaScript/Memory_Management
tags:
  - Garbage collection
  - Guide
  - JavaScript
  - Performance
  - memory
---
<div>{{JsSidebar("Advanced")}}</div>

<p>Low-level languages like C, have manual memory management primitives such as <a href="https://pubs.opengroup.org/onlinepubs/009695399/functions/malloc.html">malloc()</a> and <a href="https://en.wikipedia.org/wiki/C_dynamic_memory_allocation#Overview_of_functions">free()</a>. In contrast, JavaScript automatically allocates memory when objects are created and frees it when they are not used anymore (<em>garbage collection</em>). This automaticity is a potential source of confusion: it can give developers the false impression that they don't need to worry about memory management.</p>

<h2 id="Memory_life_cycle">Memory life cycle</h2>

<p>Regardless of the programming language, the memory life cycle is pretty much always the same:</p>

<ol>
 <li>Allocate the memory you need</li>
 <li>Use the allocated memory (read, write)</li>
 <li>Release the allocated memory when it is not needed anymore</li>
</ol>

<p>The second part is explicit in all languages. The first and last parts are explicit in low-level languages but are mostly implicit in high-level languages like JavaScript.</p>

<h3 id="Allocation_in_JavaScript">Allocation in JavaScript</h3>

<h4 id="Value_initialization">Value initialization</h4>

<p>In order to not bother the programmer with allocations, JavaScript will automatically allocate memory when values are initially declared.</p>

<pre class="brush: js">var n = 123; // allocates memory for a number
var s = 'azerty'; // allocates memory for a string

var o = {
  a: 1,
  b: null
}; // allocates memory for an object and contained values

// (like object) allocates memory for the array and
// contained values
var a = [1, null, 'abra'];

function f(a) {
  return a + 2;
} // allocates a function (which is a callable object)

// function expressions also allocate an object
someElement.addEventListener('click', function() {
  someElement.style.backgroundColor = 'blue';
}, false);
</pre>

<h4 id="Allocation_via_function_calls">Allocation via function calls</h4>

<p>Some function calls result in object allocation.</p>

<pre class="brush: js">var d = new Date(); // allocates a Date object

var e = document.createElement('div'); // allocates a DOM element</pre>

<p>Some methods allocate new values or objects:</p>

<pre class="brush: js">var s = 'azerty';
var s2 = s.substr(0, 3); // s2 is a new string
// Since strings are immutable values,
// JavaScript may decide to not allocate memory,
// but just store the [0, 3] range.

var a = ['ouais ouais', 'nan nan'];
var a2 = ['generation', 'nan nan'];
var a3 = a.concat(a2);
// new array with 4 elements being
// the concatenation of a and a2 elements.
</pre>

<h3 id="Using_values">Using values</h3>

<p>Using values basically means reading and writing in allocated memory. This can be done by reading or writing the value of a variable or an object property or even passing an argument to a function.</p>

<h3 id="Release_when_the_memory_is_not_needed_anymore">Release when the memory is not needed anymore</h3>

<p>The majority of memory management issues occur at this phase. The most difficult aspect of this stage is determining when the allocated memory is no longer needed. </p>

<p>Low-level languages require the developer to manually determine at which point in the program the allocated memory is no longer needed and to release it.</p>

<p>Some high-level languages, such as JavaScript, utilize a form of automatic memory management known as <a href="https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)">garbage collection</a> (GC). The purpose of a garbage collector is to monitor memory allocation and determine when a block of allocated memory is no longer needed and reclaim it. This automatic process is an approximation since the general problem of determining whether or not a specific piece of memory is still needed is <a href="https://en.wikipedia.org/wiki/Decidability_%28logic%29">undecidable</a>.</p>

<h2 id="Garbage_collection">Garbage collection</h2>

<p>As stated above, the general problem of automatically finding whether some memory "is not needed anymore" is undecidable. As a consequence, garbage collectors implement a restriction of a solution to the general problem. This section will explain the concepts that are necessary for understanding the main garbage collection algorithms and their respective limitations.</p>

<h3 id="References">References</h3>

<p>The main concept that garbage collection algorithms rely on is the concept of <em>reference</em>. Within the context of memory management, an object is said to reference another object if the former has access to the latter (either implicitly or explicitly). For instance, a JavaScript object has a reference to its <a href="/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain">prototype</a> (implicit reference) and to its properties values (explicit reference).</p>

<p>In this context, the notion of an "object" is extended to something broader than regular JavaScript objects and also contain function scopes (or the global lexical scope).</p>

<h3 id="Reference-counting_garbage_collection">Reference-counting garbage collection</h3>

<p>This is the most naive garbage collection algorithm. This algorithm reduces the problem from determining whether or not an object is still needed to determining if an object still has any other objects referencing it. An object is said to be "garbage", or collectible if there are zero references pointing to it.</p>

<h4 id="Example">Example</h4>

<pre class="brush: js">var x = {
  a: {
    b: 2
  }
};
// 2 objects are created. One is referenced by the other as one of its properties.
// The other is referenced by virtue of being assigned to the 'x' variable.
// Obviously, none can be garbage-collected.

var y = x;      // The 'y' variable is the second thing that has a reference to the object.

x = 1;          // Now, the object that was originally in 'x' has a unique reference
                //   embodied by the 'y' variable.

var z = y.a;    // Reference to 'a' property of the object.
                //   This object now has 2 references: one as a property,
                //   the other as the 'z' variable.

y = 'mozilla';  // The object that was originally in 'x' has now zero
                //   references to it. It can be garbage-collected.
                //   However its 'a' property is still referenced by
                //   the 'z' variable, so it cannot be freed.

z = null;       // The 'a' property of the object originally in x
                //   has zero references to it. It can be garbage collected.
</pre>

<h4 id="Limitation_Circular_references">Limitation: Circular references</h4>

<p>There is a limitation when it comes to circular references. In the following example, two objects are created with properties that reference one another, thus creating a cycle. They will go out of scope after the function call has completed. At that point they become unneeded and their allocated memory should be reclaimed. However, the reference-counting algorithm will not consider them reclaimable since each of the two objects has at least one reference pointing to them, resulting in neither of them being marked for garbage collection. Circular references are a common cause of memory leaks.</p>

<pre class="brush: js">function f() {
  var x = {};
  var y = {};
  x.a = y;        // x references y
  y.a = x;        // y references x

  return 'azerty';
}

f();
</pre>

<h4 id="Real-life_example">Real-life example</h4>

<p>Internet Explorer 6 and 7 are known to have reference-counting garbage collectors for DOM objects. Cycles are a common mistake that can generate memory leaks:</p>

<pre class="brush: js">var div;
window.onload = function() {
  div = document.getElementById('myDivElement');
  div.circularReference = div;
  div.lotsOfData = new Array(10000).join('*');
};
</pre>

<p>In the above example, the DOM element "myDivElement" has a circular reference to itself in the "circularReference" property. If the property is not explicitly removed or nulled, a reference-counting garbage collector will always have at least one reference intact and will keep the DOM element in memory even if it was removed from the DOM tree. If the DOM element holds a large amount of data (illustrated in the above example with the "lotsOfData" property), the memory consumed by this data will never be released and can lead to memory related issues such as the browser becoming increasingly slower.</p>

<h3 id="Mark-and-sweep_algorithm">Mark-and-sweep algorithm</h3>

<p>This algorithm reduces the definition of "an object is no longer needed" to "an object is unreachable".</p>

<p>This algorithm assumes the knowledge of a set of objects called <em>roots.</em> In JavaScript, the root is the global object. Periodically, the garbage collector will start from these roots, find all objects that are referenced from these roots, then all objects referenced from these, etc. Starting from the roots, the garbage collector will thus find all <em>reachable</em> objects and collect all non-reachable objects.</p>

<p>This algorithm is an improvement over the previous one since an object having zero references is effectively unreachable. The opposite does not hold true as we have seen with circular references.</p>

<p>As of 2012, all modern browsers ship a mark-and-sweep garbage-collector. All improvements made in the field of JavaScript garbage collection (generational/incremental/concurrent/parallel garbage collection) over the last few years are implementation improvements of this algorithm, but not improvements over the garbage collection algorithm itself nor its reduction of the definition of when "an object is no longer needed".</p>

<h4 id="Cycles_are_no_longer_a_problem">Cycles are no longer a problem</h4>

<p>In the first example above, after the function call returns, the two objects are no longer referenced by any resource that is reachable from the global object. Consequently, they will be found unreachable by the garbage collector and have their allocated memory reclaimed.</p>

<h4 id="Limitation_Releasing_memory_manually">Limitation: Releasing memory manually</h4>

<p>There are times when it would be convenient to manually decide when and what memory is released. In order to release the memory of an object, it needs to be made explicitly unreachable.</p>

<p>As of 2019, it is not possible to explicitly or programmatically trigger garbage collection in JavaScript.</p>

<h2 id="Node.js">Node.js</h2>

<p>Node.js offers additional options and tools for configuring and debugging memory issues that may not be available for JavaScript executed within a browser environment.</p>

<h4 id="V8_Engine_Flags">V8 Engine Flags</h4>

<p>The max amount of available heap memory can be increased with a flag:</p>

<p><code>node --<em>max-old-space-size=6000</em> index.js</code></p>

<p>We can also expose the garbage collector for debugging memory issues using a flag and the <a href="https://nodejs.org/en/docs/guides/debugging-getting-started/">Chrome Debugger</a>:</p>

<pre class="brush: bash">node --expose-gc --inspect index.js</pre>

<h4 id="See_also">See also</h4>

<ul>
 <li><a href="http://www.ibm.com/developerworks/web/library/wa-memleak/">IBM article on "Memory leak patterns in JavaScript" (2007)</a></li>
 <li><a href="https://msdn.microsoft.com/en-us/magazine/ff728624.aspx">Kangax article on how to register event handler and avoid memory leaks (2010)</a></li>
 <li><a href="/en-US/docs/Mozilla/Performance">Performance</a></li>
</ul>
