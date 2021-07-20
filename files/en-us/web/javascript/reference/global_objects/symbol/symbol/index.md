---
title: Symbol() constructor
slug: Web/JavaScript/Reference/Global_Objects/Symbol/Symbol
tags:
- Constructor
- JavaScript
- Reference
- Symbol
- Polyfill
browser-compat: javascript.builtins.Symbol.Symbol
---
<div>{{JSRef}}</div>

<p>The <code>Symbol()</code> constructor returns a value of type <strong>symbol</strong>,
  but is incomplete as a constructor because it does not support the syntax
  "<code>new Symbol()</code>" and it is not intended to be subclassed. It may be used as
  the value of an
  <code><a href="/en-US/docs/Web/JavaScript/Reference/Classes/extends">extends</a></code>
  clause of a <code>class</code> definition but a
  <code><a href="/en-US/docs/Web/JavaScript/Reference/Operators/super">super</a></code>
  call to it will cause an exception.</p>

<div>{{EmbedInteractiveExample("pages/js/symbol-constructor.html", "taller")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
Symbol()
Symbol(description)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>description</var></code> {{optional_inline}}</dt>
  <dd>A string. A description of the symbol which can be used for debugging but not to
    access the symbol itself.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Creating_symbols">Creating symbols</h3>

<p>To create a new primitive symbol, you write <code>Symbol()</code> with an optional
  string as its description:</p>

<pre class="brush: js">let sym1 = Symbol()
let sym2 = Symbol('foo')
let sym3 = Symbol('foo')
</pre>

<p>The above code creates three new symbols. Note that <code>Symbol("foo")</code> does not
  coerce the string <code>"foo"</code> into a symbol. It creates a new symbol each time:
</p>

<pre class="brush: js">Symbol('foo') === Symbol('foo')  // false
</pre>

<h3 id="new_Symbol...">new Symbol(...)</h3>

<p>The following syntax with the {{jsxref("Operators/new", "new")}} operator will throw a
  {{jsxref("TypeError")}}:</p>

<pre class="brush: js">let sym = new Symbol()  // TypeError
</pre>

<p>This prevents authors from creating an explicit <code>Symbol</code> wrapper object
  instead of a new symbol value and might be surprising as creating explicit wrapper
  objects around primitive data types is generally possible (for example,
  <code>new Boolean</code>, <code>new String</code> and <code>new Number</code>).</p>

<p>If you really want to create a <code>Symbol</code> wrapper object, you can use the
  <code>Object()</code> function:</p>

<pre class="brush: js">let sym    = Symbol('foo');
let symObj = Object(sym);
typeof sym    // =&gt; "symbol"
typeof symObj // =&gt; "object"
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Symbol</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-symbol"><code>core-js</code></a></li>
  <li><a href="/en-US/docs/Glossary/Symbol">Glossary: Symbol data type</a></li>
</ul>
