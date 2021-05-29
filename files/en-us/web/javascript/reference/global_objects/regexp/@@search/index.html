---
title: 'RegExp.prototype[@@search]()'
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@search
tags:
- JavaScript
- Method
- Prototype
- Reference
- RegExp
- Regular Expressions
- Polyfill
browser-compat: javascript.builtins.RegExp.@@search
---
<div>{{JSRef}}</div>

<p>The <strong><code>[@@search]()</code></strong> method executes a search for a match
  between a <code>this</code> regular expression and a string.</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-prototype-@@search.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>regexp</var>[Symbol.search](<var>str</var>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>str</var></code></dt>
  <dd>A {{jsxref("String")}} that is a target of the search.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<dl>
  <dt>integer</dt>
  <dd>If successful, <code>[@@search]()</code> returns the index of the first match of the
    regular expression inside the string. Otherwise, it returns -1.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>This method is called internally in {{jsxref("String.prototype.search()")}}. For
  example, the following two examples return the same result.</p>

<pre class="brush: js">'abc'.search(/a/);

/a/[Symbol.search]('abc');</pre>

<p>This method exists for customizing the search behavior in <code>RegExp</code>
  subclasses.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Direct_call">Direct call</h3>

<p>This method can be used in almost the same way as
  {{jsxref("String.prototype.search()")}}, except the different <code>this</code> and the
  different arguments order.</p>

<pre class="brush: js">var re = /-/g;
var str = '2016-01-02';
var result = re[Symbol.search](str);
console.log(result);  // 4
</pre>

<h3 id="Using_search_in_subclasses">Using @@search in subclasses</h3>

<p>Subclass of {{jsxref("RegExp")}} can override <code>[@@search]()</code> method to
  modify the behavior.</p>

<pre class="brush: js">class MyRegExp extends RegExp {
  constructor(str) {
    super(str)
    this.pattern = str;
  }
  [Symbol.search](str) {
    return str.indexOf(this.pattern);
  }
}

var re = new MyRegExp('a+b');
var str = 'ab a+b';
var result = str.search(re); // String.prototype.search calls re[@@search].
console.log(result); // 3
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>RegExp.prototype[@@search]</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-string-and-regexp"><code>core-js</code></a></li>
  <li>{{jsxref("String.prototype.search()")}}</li>
  <li>{{jsxref("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}</li>
  <li>{{jsxref("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}</li>
  <li>{{jsxref("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}}</li>
  <li>{{jsxref("RegExp.prototype.exec()")}}</li>
  <li>{{jsxref("RegExp.prototype.test()")}}</li>
</ul>
