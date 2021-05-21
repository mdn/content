---
title: 'TypeError: can''t delete non-configurable array element'
slug: Web/JavaScript/Reference/Errors/Non_configurable_array_element
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript exception "can't delete non-configurable array element" occurs when it
  was attempted to <a
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length#shortening_an_array">shorten
    the length</a> of an array, but one of the array's elements is <a
    href="/en-US/docs/Web/JavaScript/Data_structures#properties">non-configurable</a>.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">TypeError: can't delete non-configurable array element (Firefox)
TypeError: Cannot delete property '2' of [object Array] (Chrome)
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>It was attempted to <a
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length#shortening_an_array">shorten
    the length</a> of an array, but one of the array's elements is <a
    href="/en-US/docs/Web/JavaScript/Data_structures#properties">non-configurable</a>.
  When shortening an array, the elements beyond the new array length will be deleted,
  which failed in this situation.</p>

<p>The <code>configurable</code> attribute controls whether the property can be deleted
  from the object and whether its attributes (other than <code>writable</code>) can be
  changed.</p>

<p>Usually, properties in an object created by an <a
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#syntax">array
    initializer</a> are configurable. However, for example, when using
  {{jsxref("Object.defineProperty()")}}, the property isn't configurable by default.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Non-configurable_properties_created_by_Object.defineProperty">Non-configurable
  properties created by <code>Object.defineProperty</code></h3>

<p>The {{jsxref("Object.defineProperty()")}} creates non-configurable properties by
  default if you haven't specified them as configurable.</p>

<pre class="brush: js example-bad">"use strict";
var arr = [];
Object.defineProperty(arr, 0, {value: 0});
Object.defineProperty(arr, 1, {value: "1"});

arr.length = 1;
// TypeError: can't delete non-configurable array element
</pre>

<p>You will need to set the elements as configurable, if you intend to shorten the array.
</p>

<pre class="brush: js example-good">"use strict";
var arr = [];
Object.defineProperty(arr, 0, {value: 0, configurable: true});
Object.defineProperty(arr, 1, {value: "1", configurable: true});

arr.length = 1;
</pre>

<h3 id="Seal-ed_Arrays"><code>Seal</code>-ed Arrays</h3>

<p>The {{jsxref("Object.seal()")}} function marks all existing elements as
  non-configurable.</p>

<pre class="brush: js example-bad">"use strict";
var arr = [1,2,3];
Object.seal(arr);

arr.length = 1;
// TypeError: can't delete non-configurable array element
</pre>

<p>You either need to remove the {{jsxref("Object.seal()")}} call, or make a copy of it.
  In case of a copy, shortening the copy of the array does not modify the original array
  length.</p>

<pre class="brush: js example-good">"use strict";
var arr = [1,2,3];
Object.seal(arr);

// Copy the initial array to shorten the copy
var copy = Array.from(arr);
copy.length = 1;
// arr.length == 3
</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/JavaScript/Data_structures#properties">[[Configurable]]</a>
  </li>
  <li>{{jsxref("Array.length")}}</li>
  <li>{{jsxref("Object.defineProperty()")}}</li>
  <li>{{jsxref("Object.seal()")}}</li>
</ul>
