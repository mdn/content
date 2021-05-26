---
title: Array.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/indexOf
tags:
- Array
- JavaScript
- Method
- Prototype
- Reference
- indexof
- Polyfill
browser-compat: javascript.builtins.Array.indexOf
---
<div>{{JSRef}}</div>

<p>The <code><strong>indexOf()</strong></code> method returns the first index at which a
  given element can be found in the array, or -1 if it is not present.</p>

<div>{{EmbedInteractiveExample("pages/js/array-indexof.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
indexOf(searchElement)
indexOf(searchElement, fromIndex)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>searchElement</var></code></dt>
  <dd>Element to locate in the array.</dd>
  <dt><code><var>fromIndex</var></code> {{optional_inline}}</dt>
  <dd>The index to start the search at. If the index is greater than or equal to the
    array's length, -1 is returned, which means the array will not be searched. If the
    provided index value is a negative number, it is taken as the offset from the end of
    the array. Note: if the provided index is negative, the array is still searched from
    front to back. If the provided index is 0, then the whole array will be searched.
    Default: 0 (entire array is searched).</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The first index of the element in the array; <strong>-1</strong> if not found.</p>

<h2 id="Description">Description</h2>

<p><code>indexOf()</code> compares <code><var>searchElement</var></code> to elements of
  the Array using <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality">strict
    equality</a> (the same method used by the <code>===</code> or triple-equals operator).
</p>

<div class="notecard note">
  <p><strong>Note:</strong> For the String method, see
    {{jsxref("String.prototype.indexOf()")}}.</p>
</div>

<h2 id="Examples">Examples</h2>

<h3 id="Using_indexOf">Using indexOf()</h3>

<p>The following example uses <code>indexOf()</code> to locate values in an array.</p>

<pre class="brush: js">var array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
</pre>

<h3 id="Finding_all_the_occurrences_of_an_element">Finding all the occurrences of an
  element</h3>

<pre class="brush: js">var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
</pre>

<h3 id="Finding_if_an_element_exists_in_the_array_or_not_and_updating_the_array">Finding
  if an element exists in the array or not and updating the array</h3>

<pre class="brush: js">function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('New veggies collection is : ' + veggies);
    } else if (veggies.indexOf(veggie) &gt; -1) {
        console.log(veggie + ' already exists in the veggies collection.');
    }
}

var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

updateVegetablesCollection(veggies, 'spinach');
// New veggies collection is : potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, 'spinach');
// spinach already exists in the veggies collection.
</pre>

<h2 id="Polyfill">Polyfill</h2>

<p><code>indexOf()</code> was added to the ECMA-262 standard in the 5th edition; as such
  it may not be present in all browsers. You can work around this by utilizing the
  following code at the beginning of your scripts. This will allow you to use
  <code>indexOf()</code> when there is still no native support. This algorithm matches the
  one specified in ECMA-262, 5th edition, assuming {{jsxref("Global_Objects/TypeError",
  "TypeError")}} and {{jsxref("Math.abs()")}} have their original values.</p>

<pre class="brush: js">// This version tries to optimize by only checking for "in" when looking for undefined and
// skipping the definitely fruitless NaN search. Other parts are merely cosmetic conciseness.
// Whether it is actually faster remains to be seen.
if (!Array.prototype.indexOf)
  Array.prototype.indexOf = (function(Object, max, min) {
    "use strict"
    return function indexOf(member, fromIndex) {
      if (this === null || this === undefined)
        throw TypeError("Array.prototype.indexOf called on null or undefined")

      var that = Object(this), Len = that.length &gt;&gt;&gt; 0, i = min(fromIndex | 0, Len)
      if (i &lt; 0) i = max(0, Len + i)
      else if (i &gt;= Len) return -1

      if (member === void 0) {        // undefined
        for (; i !== Len; ++i) if (that[i] === void 0 &amp;&amp; i in that) return i
      } else if (member !== member) { // NaN
        return -1 // Since NaN !== NaN, it will never be found. Fast-path it.
      } else                          // all else
        for (; i !== Len; ++i) if (that[i] === member) return i

      return -1 // if the value was not found, then return -1
    }
  })(Object, Math.max, Math.min)
</pre>

<p>However, if you are more interested in all the little technical bits defined by the
  ECMA standard, and are less concerned about performance or conciseness, then you may
  find this more descriptive polyfill to be more useful.</p>

<pre class="brush: js">// Production steps of ECMA-262, Edition 5, 15.4.4.14
// Reference: https://es5.github.io/#x15.4.4.14
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchElement, fromIndex) {
    "use strict";
    var k;

    // 1. Let o be the result of calling ToObject passing
    //    the this value as the argument.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var o = Object(this);

    // 2. Let lenValue be the result of calling the Get
    //    internal method of o with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = o.length &gt;&gt;&gt; 0;

    // 4. If len is 0, return -1.
    if (len === 0) {
      return -1;
    }

    // 5. If argument fromIndex was passed let n be
    //    ToInteger(fromIndex); else let n be 0.
    var n = fromIndex | 0;

    // 6. If n &gt;= len, return -1.
    if (n &gt;= len) {
      return -1;
    }

    // 7. If n &gt;= 0, then Let k be n.
    // 8. Else, n&lt;0, Let k be len - abs(n).
    //    If k is less than 0, then let k be 0.
    k = Math.max(n &gt;= 0 ? n : len - Math.abs(n), 0);

    // 9. Repeat, while k &lt; len
    for (; k &lt; len; k++) {
      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the
      //    HasProperty internal method of o with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      //    i.  Let elementK be the result of calling the Get
      //        internal method of o with the argument ToString(k).
      //   ii.  Let same be the result of applying the
      //        Strict Equality Comparison Algorithm to
      //        searchElement and elementK.
      //  iii.  If same is true, return k.
      if (k in o &amp;&amp; o[k] === searchElement)
        return k;
    }
    return -1;
  };
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Array.prototype.indexOf</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-array"><code>core-js</code></a></li>
  <li>{{jsxref("Array.prototype.lastIndexOf()")}}</li>
  <li>{{jsxref("TypedArray.prototype.indexOf()")}}</li>
  <li>{{jsxref("String.prototype.indexOf()")}}</li>
</ul>
