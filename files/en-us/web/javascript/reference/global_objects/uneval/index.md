---
title: uneval()
slug: Web/JavaScript/Reference/Global_Objects/uneval
tags:
- Function
- JavaScript
- Method
- Non-standard
- Deprecated
- Reference
- uneval
browser-compat: javascript.builtins.uneval
---
<p>{{JSSidebar("Objects")}}{{Non-standard_Header}}{{deprecated_header}}</p>

<p>The <code><strong>uneval()</strong></code> function creates a string representation of
  the source code of an Object.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">uneval(<var>object</var>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>object</var></code></dt>
  <dd>A JavaScript expression or statement.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A string representing the source code of <code><var>object</var></code>.</p>

<div class="note"><p><strong>Note:</strong> This will <em>not</em> return a JSON
  representation of <code><var>object</var></code>.</p></div>

<h2 id="Description">Description</h2>

<p><code>uneval()</code> is a top-level function and is not associated with any object.
</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_uneval">Using uneval</h3>

<pre class="brush:js">var a = 1;
uneval(a); // returns a String containing 1

var b = '1';
uneval(b); // returns a String containing "1"

uneval(function foo() {}); // returns "(function foo(){})"

var a = uneval(function foo() { return 'hi'; });
var foo = eval(a);
foo(); // returns "hi"
</pre>

<h2 id="Specifications">Specifications</h2>

<p><span class="pl-s">Not part of any standard.</span></p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{JSxRef("Global_Objects/eval", "eval()")}}</li>
  <li>{{JSxRef("JSON.stringify()")}}</li>
  <li>{{JSxRef("JSON.parse()")}}</li>
  <li>{{JSxRef("Object.toSource()")}}</li>
</ul>
