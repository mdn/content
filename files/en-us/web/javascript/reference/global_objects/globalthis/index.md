---
title: globalThis
slug: Web/JavaScript/Reference/Global_Objects/globalThis
tags:
  - JavaScript
  - Property
  - Reference
  - global
  - globalThis
  - this
  - Polyfill
browser-compat: javascript.builtins.globalThis
---
<div>{{jsSidebar("Objects")}}</div>

<p><span class="seoSummary">The global <code><strong>globalThis</strong></code> property contains the global <code>this</code> value, which is akin to the <a href="/en-US/docs/Glossary/Global_object">global object</a>.</span></p>

<div>{{EmbedInteractiveExample("pages/js/globalprops-globalthis.html","shorter")}}</div>

<p>{{JS_Property_Attributes(1, 0, 1)}}</p>

<h2 id="Description">Description</h2>

<p>Historically, accessing the global object has required different syntax in different JavaScript environments. On the web you can use {{domxref("Window.window", "window")}}, {{domxref("Window.self", "self")}}, or {{domxref("Window.frames", "frames")}} - but in <a href="/en-US/docs/Web/API/Worker">Web Workers</a> only <code>self</code> will work. In Node.js none of these work, and you must instead use <code>global</code>.<br>
 The <code>this</code> keyword could be used inside functions running in non–strict mode, but <code>this</code> will be <code>undefined</code> in Modules and inside functions running in strict mode. You can also use <code>Function('return this')()</code>, but environments that disable {{jsxref("Global_Objects/eval", "eval()")}}, like {{Glossary("CSP")}} in browsers, prevent use of {{jsxref("Function")}} in this way.</p>

<p>The <code>globalThis</code> property provides a standard way of accessing the global <code>this</code> value (and hence the global object itself) across environments. Unlike similar properties such as <code>window</code> and <code>self</code>, it's guaranteed to work in window and non-window contexts. In this way, you can access the global object in a consistent manner without having to know which environment the code is being run in. To help you remember the name, just remember that in global scope the <code>this</code> value is <code>globalThis</code>.</p>

<h3 id="HTML_and_the_WindowProxy">HTML and the WindowProxy</h3>

<p>In many engines <code>globalThis</code> will be a reference to the actual global object, but in web browsers, due to iframe and cross-window security considerations, it references a {{jsxref("Proxy")}} around the actual global object (which you can't directly access). This distinction is rarely relevant in common usage, but important to be aware of.</p>

<h3 id="Naming">Naming</h3>

<p>Several other popular name choices such as <code>self</code> and <code>global</code> were removed from consideration because of their potential to break compatibility with existing code. See the <a href="https://github.com/tc39/proposal-global/blob/master/NAMING.md">language proposal's "naming" document</a> for more details.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Search_for_the_global_across_environments">Search for the global across environments</h3>

<p>Prior to <code>globalThis</code>, the only reliable cross-platform way to get the global object for an environment was <code>Function('return this')()</code>. However, this causes <a href="/en-US/docs/Web/HTTP/CSP">CSP</a> violations in some settings, so <a href="https://github.com/paulmillr/es6-shim">es6-shim</a> uses a check like this, for example:</p>

<pre class="brush: js">var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};

var globals = getGlobal();

if (typeof globals.setTimeout !== 'function') {
  // no setTimeout in this environment!
}
</pre>

<p>With <code>globalThis</code> available, the additional search for the global across environments is not necessary anymore:</p>

<pre class="brush: js">if (typeof globalThis.setTimeout !== 'function') {
  // no setTimeout in this environment!
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>A polyfill of <code>globalThis</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-globalthis"><code>core-js</code></a></li>
 <li>{{jsxref("Operators/this", "this")}}</li>
</ul>
