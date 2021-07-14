---
title: 'RegExp.prototype[@@replace]()'
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@replace
tags:
- JavaScript
- Method
- Prototype
- Reference
- RegExp
- Regular Expressions
- Polyfill
browser-compat: javascript.builtins.RegExp.@@replace
---
<div>{{JSRef}}</div>

<p>The <strong><code>[@@replace]()</code></strong> method replaces some or all matches of
  a <code>this</code> pattern in a string by a <code>replacement</code>, and returns the
  result of the replacement as a new string. The <code>replacement</code> can be a string
  or a function to be called for each match.</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-prototype-@@replace.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>regexp</var>[Symbol.replace](<var>str<var>, <var>newSubStr</var>|<var>function</var>)</var></var></pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>str</var></code></dt>
  <dd>A {{jsxref("String")}} that is a target of the replacement.</dd>
  <dt><code><var>newSubStr</var></code> (replacement)</dt>
  <dd>The {{jsxref("String")}} that replaces the substring. A number of special
    replacement patterns are supported; see the {{jsxref("String.prototype.replace",
    "Specifying a string as a parameter", "#Specifying_a_string_as_a_parameter", 1)}}
    section in {{jsxref("String.prototype.replace()")}} page.</dd>
  <dt><code><var>function</var></code> (replacement)</dt>
  <dd>A function to be invoked to create the new substring. The arguments supplied to this
    function are described in the {{jsxref("String.prototype.replace", "Specifying a
    function as a parameter", "#Specifying_a_function_as_a_parameter", 1)}} section in
    {{jsxref("String.prototype.replace()")}} page.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A new string with some or all matches of a pattern replaced by a replacement.</p>

<h2 id="Description">Description</h2>

<p>This method is called internally in {{jsxref("String.prototype.replace()")}} if the
  <code>pattern</code> argument is a {{jsxref("RegExp")}} object.  For example, following
  two examples return same result.</p>

<pre class="brush: js">'abc'.replace(/a/, 'A');

/a/[Symbol.replace]('abc', 'A');</pre>

<p>This method exists for customizing replace behavior in <code>RegExp</code> subclass.
</p>

<p>If pattern argument is <strong>not</strong> a {{jsxref("RegExp")}} object,
  {{jsxref("String.prototype.replace()")}} doesn't call this method, nor creates a
  {{jsxref("RegExp")}} object.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Direct_call">Direct call</h3>

<p>This method can be used in almost the same way as
  {{jsxref("String.prototype.replace()")}}, except the different <code>this</code> and the
  different arguments order.</p>

<pre class="brush: js">var re = /-/g;
var str = '2016-01-01';
var newstr = re[Symbol.replace](str, '.');
console.log(newstr);  // 2016.01.01
</pre>

<h3 id="Using_replace_in_subclasses">Using @@replace in subclasses</h3>

<p>Subclasses of {{jsxref("RegExp")}} can override the <code>[@@replace]()</code> method
  to modify the default behavior.</p>

<pre class="brush: js">class MyRegExp extends RegExp {
  constructor(pattern, flags, count) {
    super(pattern, flags);
    this.count = count;
  }
  [Symbol.replace](str, replacement) {
    // Perform @@replace |count| times.
    var result = str;
    for (var i = 0; i &lt; this.count; i++) {
      result = RegExp.prototype[Symbol.replace].call(this, result, replacement);
    }
    return result;
  }
}

var re = new MyRegExp('\\d', '', 3);
var str = '01234567';
var newstr = str.replace(re, '#'); // String.prototype.replace calls re[@@replace].
console.log(newstr); // ###34567</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>RegExp.prototype[@@replace]</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-string-and-regexp"><code>core-js</code></a></li>
  <li>{{jsxref("String.prototype.replace()")}}</li>
  <li>{{jsxref("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}</li>
  <li>{{jsxref("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}</li>
  <li>{{jsxref("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}}</li>
  <li>{{jsxref("RegExp.prototype.exec()")}}</li>
  <li>{{jsxref("RegExp.prototype.test()")}}</li>
</ul>
