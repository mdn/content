---
title: String.raw()
slug: Web/JavaScript/Reference/Global_Objects/String/raw
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.raw
---
<div>{{JSRef}}</div>

<p>The static <strong><code>String.raw()</code></strong> method
    is a tag function of <a
      href="/en-US/docs/Web/JavaScript/Reference/Template_literals">template literals</a>.
    This is <em>similar</em> to the <code>r</code> prefix in Python, or the <code>@</code>
    prefix in C# for string literals. (But it is not <em>identical</em>; see explanations
    in <a href="https://bugs.chromium.org/p/v8/issues/detail?id=5016">this issue</a>.)
    It's used to get the raw string form of template literals, that is, substitutions (e.g.
    <code>${foo}</code>) are processed, but escapes (e.g. <code>\n</code>) are not.</p>

<div>{{EmbedInteractiveExample("pages/js/string-raw.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">String.raw(callSite, ...substitutions)

String.raw`templateString`
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>callSite</var></code></dt>
  <dd>Well-formed template call site object, like
    <code>{ raw: ['foo', 'bar', 'baz'] }</code>.</dd>
  <dt><code><var>...substitutions</var></code></dt>
  <dd>Contains substitution values.</dd>
  <dt><code><var>templateString</var></code></dt>
  <dd>A {{jsxref("template_literals", "template literal", "", 1)}}, optionally with
    substitutions (<code>${...}</code>).</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The raw string form of a given template literal.</p>

<h3 id="Exceptions">Exceptions</h3>

<dl>
  <dt>{{jsxref("TypeError")}}</dt>
  <dd>A {{jsxref("TypeError")}} is thrown if the first argument is not a well-formed
    object.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>In most cases, <code>String.raw()</code> is used with template literal. The first
  syntax mentioned above is only rarely used, because the JavaScript engine will call this
  with proper arguments for you, (just like with other <a
    href="/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_template_literals">tag
    functions</a>).</p>

<p><code>String.raw()</code> is the only built-in tag function of template literals. It
  works just like the default template function and performs concatenation. You can even
  re-implement it with normal JavaScript code.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_String.raw">Using String.raw()</h3>

<pre class="brush: js">String.raw`Hi\n${2+3}!`;
// 'Hi\\n5!', the character after 'Hi'
// is not a newline character,
// '\' and 'n' are two characters.

String.raw`Hi\u000A!`;
// 'Hi\\u000A!', same here, this time we will get the
//  \, u, 0, 0, 0, A, 6 characters.
// All kinds of escape characters will be ineffective
// and backslashes will be present in the output string.
// You can confirm this by checking the .length property
// of the string.

let name = 'Bob';
String.raw`Hi\n${name}!`;
// 'Hi\\nBob!', substitutions are processed.

// Normally you would not call String.raw() as a function,
// but to simulate `foo${2 + 3}bar${'Java' + 'Script'}baz` you can do:
String.raw({
  raw: ['foo', 'bar', 'baz']
}, 2 + 3, 'Java' + 'Script'); // 'foo5barJavaScriptbaz'
// Notice the first argument is an object with a 'raw' property,
// whose value is an iterable representing the separated strings
// in the template literal.
// The rest of the arguments are the substitutions.

// The first argument’s 'raw' value can be any iterable, even a string!
// For example, 'test' is treated as ['t', 'e', 's', 't'].
// The following is equivalent to
// `t${0}e${1}s${2}t`:
String.raw({ raw: 'test' }, 0, 1, 2); // 't0e1s2t'
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>String.raw</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-string-and-regexp"><code>core-js</code></a></li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Template_literals">Template literals</a>
  </li>
  <li>{{jsxref("String")}}</li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Lexical_grammar">Lexical grammar</a>
  </li>
</ul>
