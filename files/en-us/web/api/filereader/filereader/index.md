---
title: FileReader()
slug: Web/API/FileReader/FileReader
tags:
  - API
  - Constructor
  - FileReader
  - Reference
browser-compat: api.FileReader.FileReader
---
<p>The <strong><code>FileReader()</code></strong> constructor creates a new FileReader.</p>

<p>For details about how to use <code>FileReader</code>, see <a href="/en-US/docs/Web/API/File/Using_files_from_web_applications">Using files from web applications</a>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">const reader = new FileReader();</pre>

<h3 id="Parameters">Parameters</h3>

<p>None.</p>

<h2 id="Example">Example</h2>

<p>The following code snippet shows creation of a <code><a href="/en-US/docs/Web/API/FileReader">FileReader</a></code> object using the <code>FileReader()</code> constructor and subsequent usage of the object:</p>

<pre class="brush: js">function printFile(file) {
  const reader = new FileReader();
  reader.onload = function(evt) {
    console.log(evt.target.result);
  };
  reader.readAsText(file);
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/File/Using_files_from_web_applications">Using files from web applications</a></li>
</ul>
