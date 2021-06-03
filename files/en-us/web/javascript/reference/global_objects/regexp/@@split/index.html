---
title: 'RegExp.prototype[@@split]()'
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@split
tags:
- JavaScript
- Method
- Prototype
- Reference
- RegExp
- Regular Expressions
- Polyfill
browser-compat: javascript.builtins.RegExp.@@split
---
<div>{{JSRef}}</div>

<p>The <strong><code>[@@split]()</code></strong> method splits a {{jsxref("String")}}
  object into an array of strings by separating the string into substrings.</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-prototype-@@split.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><var>regexp</var>[Symbol.split](<var>str</var>[, <var>limit</var>])</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>str</var></code></dt>
  <dd>The target of the split operation.</dd>
  <dt><code><var>limit</var></code> {{optional_inline}}</dt>
  <dd>
    <p>Integer specifying a limit on the number of splits to be found. The
      <code>[@@split]()</code> method still splits on every match of <code>this</code>
      RegExp pattern (or, in the Syntax above, <code><var>regexp</var></code>), until the
      number of split items match the <code><var>limit</var></code> or the string falls
      short of <code>this</code> pattern.</p>
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>An {{jsxref("Array")}} containing substrings as its elements.</p>

<h2 id="Description">Description</h2>

<p>This method is called internally in {{jsxref("String.prototype.split()")}} if its
  <code>separator</code> argument is an object that has a <code>@@split</code> method,
  such as a {{jsxref("RegExp")}}. For example, the following two examples return the same
  result.</p>

<pre class="brush: js">'a-b-c'.split(/-/);

/-/[Symbol.split]('a-b-c');</pre>

<p>This method exists for customizing the behavior of <code>split()</code> in
  <code>RegExp</code> subclass.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Direct_call">Direct call</h3>

<p>This method can be used in almost the same way as
  {{jsxref("String.prototype.split()")}}, except the different <code>this</code> and the
  different order of arguments.</p>

<pre class="brush: js">let re = /-/g;
let str = '2016-01-02';
let result = re[Symbol.split](str);
console.log(result);  // ["2016", "01", "02"]
</pre>

<h3 id="Using_split_in_subclasses">Using @@split in subclasses</h3>

<p>Subclasses of {{jsxref("RegExp")}} can override the <code>[@@split]()</code> method to
  modify the default behavior.</p>

<pre class="brush: js">class MyRegExp extends RegExp {
  [Symbol.split](str, limit) {
    let result = RegExp.prototype[Symbol.split].call(this, str, limit);
    return result.map(x =&gt; "(" + x + ")");
  }
}

let re = new MyRegExp('-');
let str = '2016-01-02';
let result = str.split(re); // String.prototype.split calls re[@@split].
console.log(result); // ["(2016)", "(01)", "(02)"]
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>RegExp.prototype[@@split]</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-string-and-regexp"><code>core-js</code></a></li>
  <li>{{jsxref("String.prototype.split()")}}</li>
  <li>{{jsxref("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}</li>
  <li>{{jsxref("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}</li>
  <li>{{jsxref("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}</li>
  <li>{{jsxref("RegExp.prototype.exec()")}}</li>
  <li>{{jsxref("RegExp.prototype.test()")}}</li>
</ul>
