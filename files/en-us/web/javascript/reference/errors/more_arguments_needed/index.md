---
title: 'TypeError: More arguments needed'
slug: Web/JavaScript/Reference/Errors/More_arguments_needed
tags:
- Error
- Errors
- JavaScript
- TypeError
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript exception "more arguments needed" occurs when there is an error with how
  a function is called. More arguments need to be provided.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">TypeError: argument is not an Object and is not null (Edge)
TypeError: Object.create requires at least 1 argument, but only 0 were passed
TypeError: Object.setPrototypeOf requires at least 2 arguments, but only 0 were passed
TypeError: Object.defineProperties requires at least 1 argument, but only 0 were passed
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("TypeError")}}.</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>There is an error with how a function is called. More arguments need to be provided.
</p>

<h2 id="Examples">Examples</h2>

<h3 id="Required_arguments_not_provided">Required arguments not provided</h3>

<p>The {{jsxref("Object.create()")}} method requires at least one argument and the
  {{jsxref("Object.setPrototypeOf()")}} method requires at least two arguments:</p>

<pre class="brush: js example-bad">var obj = Object.create();
// TypeError: Object.create requires at least 1 argument, but only 0 were passed

var obj = Object.setPrototypeOf({});
// TypeError: Object.setPrototypeOf requires at least 2 arguments, but only 1 were passed
</pre>

<p>You can fix this by setting {{jsxref("null")}} as the prototype, for example:</p>

<pre class="brush: js example-good">var obj = Object.create(null);

var obj = Object.setPrototypeOf({}, null);</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/JavaScript/Guide/Functions">Functions</a></li>
</ul>
