---
title: 'TypeError: X.prototype.y called on incompatible type'
slug: Web/JavaScript/Reference/Errors/Called_on_incompatible_type
tags:
- Error
- Errors
- JavaScript
- TypeError
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript exception "called on incompatible target (or object)" occurs when a
  function (on a given object), is called with a <code>this</code> not corresponding to
  the type expected by the function.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">TypeError: 'this' is not a Set object (Edge)
TypeError: Function.prototype.toString called on incompatible object (Firefox)
TypeError: Function.prototype.bind called on incompatible target (Firefox)
TypeError: Method Set.prototype.add called on incompatible receiver undefined (Chrome)
TypeError: Bind must be called on a function (Chrome)
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>When this error is thrown, a function (on a given object), is called with a
  <code>this</code> not corresponding to the type expected by the function.</p>

<p>This issue can arise when using the {{jsxref("Function.prototype.call()")}} or
  {{jsxref("Function.prototype.apply()")}} methods, and providing a <code>this</code>
  argument which does not have the expected type.</p>

<p>This issue can also happen when providing a function that is stored as a property of an
  object as an argument to another function. In this case, the object that stores the
  function won't be the <code>this</code> target of that function when it is called by the
  other function. To work-around this issue, you will either need to provide a lambda
  which is making the call, or use the {{jsxref("Function.prototype.bind()")}} function to
  force the <code>this</code> argument to the expected object.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Invalid_cases">Invalid cases</h3>

<pre class="brush: js example-bad">var mySet = new Set;
['bar', 'baz'].forEach(mySet.add);
// mySet.add is a function, but "mySet" is not captured as this.

var myFun = function () {
  console.log(this);
};
['bar', 'baz'].forEach(myFun.bind);
// myFun.bind is a function, but "myFun" is not captured as this.

</pre>

<h3 id="Valid_cases">Valid cases</h3>

<pre class="brush: js example-good">var mySet = new Set;
['bar', 'baz'].forEach(mySet.add.bind(mySet));
// This works due to binding "mySet" as this.

var myFun = function () {
  console.log(this);
};
['bar', 'baz'].forEach(x =&gt; myFun.bind(x));
// This works using the "bind" function. It creates a lambda forwarding the argument.

</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Function.prototype.call()")}}</li>
  <li>{{jsxref("Function.prototype.apply()")}}</li>
  <li>{{jsxref("Function.prototype.bind()")}}</li>
</ul>
