---
title: Set() constructor
slug: Web/JavaScript/Reference/Global_Objects/Set/Set
tags:
- Constructor
- JavaScript
- Reference
- set
- Polyfill
browser-compat: javascript.builtins.Set.Set
---
<div>{{JSRef}}</div>

<p><span class="seoSummary">The <strong><code>Set</code> constructor</strong> lets you
    create <code>Set</code> objects that store unique values of any type, whether <a
      href="/en-US/docs/Glossary/Primitive">primitive values</a> or object
    references.</span></p>

<div>{{EmbedInteractiveExample("pages/js/set-prototype-constructor.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
new Set()
new Set(iterable)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>iterable</var></code> {{optional_inline}}</dt>
  <dd>
    <p>If an <a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...of">iterable
        object</a> is passed, all of its elements will be added to the new
      <code>Set</code>.</p>

    <p>If you don't specify this parameter, or its value is <code>null</code>, the new
      <code>Set</code> is empty.</p>
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A new <code>Set</code> object.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_the_Set_object">Using the <code>Set</code> object</h3>

<pre class="brush: js">let mySet = new Set()

mySet.add(1)           // Set [ 1 ]
mySet.add(5)           // Set [ 1, 5 ]
mySet.add(5)           // Set [ 1, 5 ]
mySet.add('some text') // Set [ 1, 5, 'some text' ]
let o = {a: 1, b: 2}
mySet.add(o)</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Set</code> is available in <a href="https://github.com/zloirock/core-js#set"><code>core-js</code></a></li>
  <li>{{jsxref("Set")}}</li>
</ul>
