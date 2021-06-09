---
title: Array.prototype.flat()
slug: Web/JavaScript/Reference/Global_Objects/Array/flat
tags:
- Array
- JavaScript
- Method
- Prototype
- Reference
- flat
- Polyfill
browser-compat: javascript.builtins.Array.flat
---
<div>{{JSRef}}</div>

<p>The <code><strong>flat()</strong></code> method creates a new array with all sub-array
  elements concatenated into it recursively up to the specified depth.</p>

<div>{{EmbedInteractiveExample("pages/js/array-flat.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">flat()
flat(depth)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>depth</code> {{optional_inline}}</dt>
  <dd>The depth level specifying how deep a nested array structure should be flattened.
    Defaults to 1.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A new array with the sub-array elements concatenated into it.</p>

<h2 id="Alternatives">Alternatives</h2>

<h3 id="reduce_and_concat">reduce and concat</h3>

<pre class="brush: js">const arr = [1, 2, [3, 4]];

// To flat single level array
arr.flat();
// is equivalent to
arr.reduce((acc, val) =&gt; acc.concat(val), []);
// [1, 2, 3, 4]

// or with decomposition syntax
const flattened = arr =&gt; [].concat(...arr);
</pre>

<h3 id="reduce_concat_isArray_recursivity">reduce + concat + isArray + recursivity</h3>

<pre class="brush: js">const arr = [1, 2, [3, 4, [5, 6]]];

// to enable deep level flatten use recursion with reduce and concat
function flatDeep(arr, d = 1) {
   return d &gt; 0 ? arr.reduce((acc, val) =&gt; acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : arr.slice();
};

flatDeep(arr, Infinity);
// [1, 2, 3, 4, 5, 6]
</pre>

<h3 id="Use_a_stack">Use a stack</h3>

<pre class="brush: js">// non recursive flatten deep using a stack
// note that depth control is hard/inefficient as we will need to tag EACH value with its own depth
// also possible w/o reversing on shift/unshift, but array OPs on the end tends to be faster
function flatten(input) {
  const stack = [...input];
  const res = [];
  while(stack.length) {
    // pop value from stack
    const next = stack.pop();
    if(Array.isArray(next)) {
      // push back array items, won't modify the original input
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  // reverse to restore input order
  return res.reverse();
}

const arr = [1, 2, [3, 4, [5, 6]]];
flatten(arr);
// [1, 2, 3, 4, 5, 6]
</pre>

<h3 id="Use_Generator_function">Use Generator function</h3>

<pre class="brush: js">function* flatten(array, depth) {
    if(depth === undefined) {
      depth = 1;
    }
    for(const item of array) {
        if(Array.isArray(item) &amp;&amp; depth &gt; 0) {
          yield* flatten(item, depth - 1);
        } else {
          yield item;
        }
    }
}

const arr = [1, 2, [3, 4, [5, 6]]];
const flattened = [...flatten(arr, Infinity)];
// [1, 2, 3, 4, 5, 6]
</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Flattening_nested_arrays">Flattening nested arrays</h3>

<pre class="brush: js">const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
</pre>

<h3 id="Flattening_and_array_holes">Flattening and array holes</h3>

<p>The flat method removes empty slots in arrays:</p>

<pre class="brush: js">const arr5 = [1, 2, , 4, 5];
arr5.flat();
// [1, 2, 4, 5]
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Array.prototype.flat</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-array"><code>core-js</code></a></li>
  <li>{{jsxref("Array.prototype.flatMap()")}}</li>
  <li>{{jsxref("Array.prototype.map()")}}</li>
  <li>{{jsxref("Array.prototype.reduce()")}}</li>
  <li>{{jsxref("Array.prototype.concat()")}}</li>
  <li><a href="https://github.com/behnammodi/polyfill/blob/master/array.polyfill.js">A polyfill</a></li>
</ul>
