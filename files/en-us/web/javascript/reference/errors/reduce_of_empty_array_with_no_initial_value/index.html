---
title: 'TypeError: Reduce of empty array with no initial value'
slug: Web/JavaScript/Reference/Errors/Reduce_of_empty_array_with_no_initial_value
tags:
- Error
- JavaScript
- Reference
- TypeError
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript exception "reduce of empty array with no initial value" occurs when a
  reduce function is used.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">TypeError: reduce of empty array with no initial value
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>In JavaScript, there are several reduce functions:</p>

<ul>
  <li>{{jsxref("Array.prototype.reduce()")}}, {{jsxref("Array.prototype.reduceRight()")}}
    and</li>
  <li>{{jsxref("TypedArray.prototype.reduce()")}}, 
    {{jsxref("TypedArray.prototype.reduceRight()")}}).</li>
</ul>

<p>These functions optionally take an <code>initialValue</code> (which will be used as the
  first argument to the first call of the <code>callback</code>). However, if no initial
  value is provided, it will use the first element of the {{jsxref("Array")}} or
  {{jsxref("TypedArray")}} as the initial value. This error is raised when an empty array
  is provided because no initial value can be returned in that case.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Invalid_cases">Invalid cases</h3>

<p>This problem appears frequently when combined with a filter
  ({{jsxref("Array.prototype.filter()")}}, {{jsxref("TypedArray.prototype.filter()")}})
  which will remove all elements of the list. Thus leaving none to be used as the initial
  value.</p>

<pre
  class="brush: js example-bad">var ints = [0, -1, -2, -3, -4, -5];
ints.filter(x =&gt; x &gt; 0)         // removes all elements
    .reduce((x, y) =&gt; x + y)    // no more elements to use for the initial value.</pre>

<p>Similarly, the same issue can happen if there is a typo in a selector, or an unexpected
  number of elements in a list:</p>

<pre class="brush: js example-bad">var names = document.getElementsByClassName("names");
var name_list = Array.prototype.reduce.call(names, (acc, name) =&gt; acc + ", " + name);
</pre>

<h3 id="Valid_cases">Valid cases</h3>

<p>These problems can be solved in two different ways.</p>

<p>One way is to actually provide an <code>initialValue</code>  as the neutral element of
  the operator, such as 0 for the addition, 1 for a multiplication, or an empty string for
  a concatenation.</p>

<pre class="brush: js example-good">var ints = [0, -1, -2, -3, -4, -5];
ints.filter(x =&gt; x &gt; 0)         // removes all elements
    .reduce((x, y) =&gt; x + y, 0) // the initial value is the neutral element of the addition
</pre>

<p>Another way would be to handle the empty case, either before calling
  <code>reduce</code>, or in the callback after adding an unexpected dummy initial value.
</p>

<pre class="brush: js example-good">var names = document.getElementsByClassName("names");

var name_list1 = "";
if (names1.length &gt;= 1)
  name_list1 = Array.prototype.reduce.call(names, (acc, name) =&gt; acc + ", " + name);
// name_list1 == "" when names is empty.

var name_list2 = Array.prototype.reduce.call(names, (acc, name) =&gt; {
  if (acc == "") // initial value
    return name;
  return acc + ", " + name;
}, "");
// name_list2 == "" when names is empty.
</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Array.prototype.reduce()")}}</li>
  <li>{{jsxref("Array.prototype.reduceRight()")}}</li>
  <li>{{jsxref("TypedArray.prototype.reduce()")}}</li>
  <li>{{jsxref("TypedArray.prototype.reduceRight()")}}</li>
  <li>{{jsxref("Array")}}</li>
  <li>{{jsxref("TypedArray")}}</li>
  <li>{{jsxref("Array.prototype.filter()")}}</li>
  <li>{{jsxref("TypedArray.prototype.filter()")}}</li>
</ul>
