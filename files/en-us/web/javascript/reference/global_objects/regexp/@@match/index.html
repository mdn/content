---
title: 'RegExp.prototype[@@match]()'
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@match
tags:
- JavaScript
- Method
- Prototype
- Reference
- RegExp
- Regular Expressions
- Polyfill
browser-compat: javascript.builtins.RegExp.@@match
---
<div>{{JSRef}}</div>

<p>The <strong><code>[@@match]()</code></strong> method retrieves the matches when
  matching a <em>string</em> against a <em>regular expression</em>.</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-prototype-@@match.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>regexp</var>[Symbol.match](<var>str</var>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>str</var></code></dt>
  <dd>A {{jsxref("String")}} that is a target of the match.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>An {{jsxref("Array")}} containing the entire match result and any parentheses-captured
  matched results, or {{jsxref("null")}} if there were no matches.</p>

<h2 id="Description">Description</h2>

<p>This method is called internally in {{jsxref("String.prototype.match()")}}.</p>

<p>For example, the following two examples return same result.</p>

<pre class="brush: js">'abc'.match(/a/);

/a/[Symbol.match]('abc');</pre>

<p>This method exists for customizing match behavior within <code>RegExp</code>
  subclasses.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Direct_call">Direct call</h3>

<p>This method can be used in <em>almost</em> the same way as
  {{jsxref("String.prototype.match()")}}, except the different <code>this</code> and the
  different arguments order.</p>

<pre class="brush: js">let re = /[0-9]+/g;
let str = '2016-01-02';
let result = re[Symbol.match](str);
console.log(result);  // ["2016", "01", "02"]
</pre>

<h3 id="Using_match_in_subclasses">Using <code>@@match</code> in subclasses</h3>

<p>Subclasses of {{jsxref("RegExp")}} can override the <code>[@@match]()</code> method to
  modify the default behavior.</p>

<pre class="brush: js">class MyRegExp extends RegExp {
  [Symbol.match](str) {
    let result = RegExp.prototype[Symbol.match].call(this, str);
    if (!result) return null;
    return {
      group(n) {
        return result[n];
      }
    };
  }
}

let re = new MyRegExp('([0-9]+)-([0-9]+)-([0-9]+)');
let str = '2016-01-02';
let result = str.match(re); // String.prototype.match calls re[@@match].
console.log(result.group(1)); // 2016
console.log(result.group(2)); // 01
console.log(result.group(3)); // 02
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>RegExp.prototype[@@match]</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-string-and-regexp"><code>core-js</code></a></li>
  <li>{{jsxref("String.prototype.match()")}}</li>
  <li>{{jsxref("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}</li>
  <li>{{jsxref("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}</li>
  <li>{{jsxref("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}}</li>
  <li>{{jsxref("RegExp.prototype.exec()")}}</li>
  <li>{{jsxref("RegExp.prototype.test()")}}</li>
</ul>
