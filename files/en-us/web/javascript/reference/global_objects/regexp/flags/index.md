---
title: RegExp.prototype.flags
slug: Web/JavaScript/Reference/Global_Objects/RegExp/flags
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
  - Polyfill
browser-compat: javascript.builtins.RegExp.flags
---
<div>{{JSRef}}</div>

<p>The <strong><code>flags</code></strong> property returns a string consisting of the <a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags">flags</a> of the current regular expression object.</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-prototype-flags.html")}}</div>


<p>{{JS_Property_Attributes(0, 0, 1)}}</p>

<h2 id="Description">Description</h2>

<p>Flags in the <code>flags</code> property are sorted alphabetically (from left to right, e.g. <code>"gimsuy"</code>).</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_flags">Using flags</h3>

<pre class="brush: js">/foo/ig.flags;   // "gi"
/bar/myu.flags;  // "muy"
</pre>

<h2 id="Polyfill">Polyfill</h2>

<pre class="brush: js">if (RegExp.prototype.flags === undefined) {
  Object.defineProperty(RegExp.prototype, 'flags', {
    configurable: true,
    get: function() {
      return this.toString().match(/[gimsuy]*$/)[0];
    }
  });
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>A polyfill of <code>RegExp.prototype.flags</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-string-and-regexp"><code>core-js</code></a></li>
 <li>{{JSxRef("RegExp.prototype.source")}}</li>
</ul>
