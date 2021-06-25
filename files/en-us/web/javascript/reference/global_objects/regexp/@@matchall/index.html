---
title: 'RegExp.prototype[@@matchAll]()'
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll
tags:
- JavaScript
- Method
- Prototype
- Reference
- RegExp
- Regular Expressions
- Polyfill
browser-compat: javascript.builtins.RegExp.@@matchAll
---
<div>{{JSRef}}</div>

<p>The <strong><code>[@@matchAll]</code></strong> method returns all matches of the
  regular expression against a string.</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-prototype-@@matchall.html", "taller")}}
</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>regexp</var>[Symbol.matchAll](<var>str</var>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>str</var></code></dt>
  <dd>A {{jsxref("String")}} that is a target of the match.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>An <a href="/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators">iterator</a>.
</p>

<h2 id="Description">Description</h2>

<p>This method is called internally in {{jsxref("String.prototype.matchAll()")}}. For
  example, the following two examples return same result.</p>

<pre class="brush: js">'abc'.matchAll(/a/);

/a/[Symbol.matchAll]('abc');</pre>

<p>This method exists for customizing the behavior of <code>matchAll()</code> in
  {{jsxref('RegExp')}} subclasses.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Direct_call">Direct call</h3>

<p>This method can be used in almost the same way as
  {{jsxref("String.prototype.matchAll()")}}, except for the different value of
  <code>this</code> and the different order of arguments.</p>

<pre class="brush: js">let re = /[0-9]+/g;
let str = '2016-01-02';
let result = re[Symbol.matchAll](str);

console.log(Array.from(result, x =&gt; x[0]));
// ["2016", "01", "02"]
</pre>

<h3 id="Using_matchAll_in_subclasses">Using @@matchAll in subclasses</h3>

<p>Subclasses of {{jsxref("RegExp")}} can override the <code>[@@matchAll]()</code> method
  to modify the default behavior.</p>

<p>For example, to return an {{jsxref("Array")}} instead of an <a
    href="/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators">iterator</a>:</p>

<pre class="brush: js">class MyRegExp extends RegExp {
  [Symbol.matchAll](str) {
    const result = RegExp.prototype[Symbol.matchAll].call(this, str);
    if (!result) {
      return null;
    } else {
      return Array.from(result);
    }
  }
}

const re = new MyRegExp('([0-9]+)-([0-9]+)-([0-9]+)', 'g');
const str = '2016-01-02|2019-03-07';
const result = str.matchAll(re);
console.log(result[0]); // [ "2016-01-02", "2016", "01", "02" ]
console.log(result[1]); // [ "2019-03-07", "2019", "03", "07" ]
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>RegExp.prototype[@@matchAll]</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-string-and-regexp"><code>core-js</code></a></li>
  <li>{{JSxRef("String.prototype.matchAll()")}}</li>
  <li>{{JSxRef("Symbol.matchAll")}}</li>
</ul>
