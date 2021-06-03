---
title: import.meta
slug: Web/JavaScript/Reference/Statements/import.meta
tags:
- JavaScript
- Language feature
- Modules
- Reference
- Statement
- import
- import.meta
browser-compat: javascript.statements.import_meta
---
<div>{{JSSidebar("Statements")}}</div>

<p>The <strong><code>import.meta</code></strong> object exposes context-specific metadata
  to a JavaScript module. It contains information about the module, like the module's URL.
</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">import.meta</pre>

<h2 id="Description">Description</h2>

<p>The syntax consists of the keyword {{JSxRef("Statements/import","import")}}, a dot, and
  the identifier <code>meta</code>. Normally the left-hand side of the dot is the object
  on which property access is performed, but here <code>import</code> is not really an
  object.</p>

<p>The <code>import.meta</code> object is created by the ECMAScript implementation, with a
  {{JSxRef("null")}} prototype. The object is extensible, and its properties are writable,
  configurable, and enumerable.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_import.meta">Using import.meta</h3>

<p>Given a module <code>my-module.js</code></p>

<pre class="brush: html">&lt;script type="module" src="my-module.js"&gt;&lt;/script&gt;
</pre>

<p>you can access meta information about the module using the <code>import.meta</code>
  object.</p>

<pre
  class="brush: js;">console.log(import.meta); // { url: "file:///home/user/my-module.js" }</pre>

<p>It returns an object with a <code>url</code> property indicating the base URL of the
  module. This will either be the URL from which the script was obtained, for external
  scripts, or the document base URL of the containing document, for inline scripts.</p>

<p>Note that this will include query parameters and/or hash (i.e., following the
  <code>?</code> or <code>#</code>).</p>

<p>For example, with the following HTML:</p>

<pre class="brush: html">&lt;script type="module"&gt;
import './index.mjs?someURLInfo=5';
&lt;/script&gt;</pre>

<p>..the following JavaScript file will log the `<code>someURLInfo</code> parameter:</p>

<pre class="brush: js">// index.mjs
new URL(import.meta.url).searchParams.get('someURLInfo'); // 5</pre>

<p>The same applies when a file imports another:</p>

<pre class="brush: js">// index.mjs
import './index2.mjs?someURLInfo=5';

// index2.mjs
new URL(import.meta.url).searchParams.get('someURLInfo'); // 5</pre>

<p>Note that while Node.js will pass on query parameters (or the hash) as in the latter
  example, as of Node 14.1.0, a URL with query parameters will err when loading in the
  form <code>node --experimental-modules index.mjs?someURLInfo=5</code> (it is treated as
  a file rather than a URL in this context).</p>

<p>Such file-specific argument passing may be complementary to that used in the
  application-wide <code>location.href</code> (with query strings or hash added after the
  HTML file path) (or on Node.js, through <code>process.argv</code>).</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{JSxRef("Statements/import", "import")}}</li>
  <li>{{JSxRef("Statements/export", "export")}}</li>
</ul>
