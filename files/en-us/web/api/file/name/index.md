---
title: File.name
slug: Web/API/File/name
tags:
  - API
  - File API
  - Files
  - Property
  - Reference
browser-compat: api.File.name
---
<div>{{APIRef("File API")}}</div>

<p>Returns the name of the file represented by a {{domxref("File")}} object. For security
  reasons, the path is excluded from this property.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var <var>name</var> = <var>file</var>.name;</pre>

<h2 id="Value">Value</h2>

<p>A string, containing the name of the file without path, such as "My Resume.rtf".</p>

<h2 id="Example">Example</h2>

<pre class="brush: html">&lt;input type="file" multiple onchange="processSelectedFiles(this)"&gt;

&lt;div id="output"&gt;&lt;/div&gt;
</pre>

<pre class="brush: js">const output = document.querySelector("#output");
function processSelectedFiles(fileInput) {
  let files = fileInput.files;
  output.textContent = "List of Selected Files:";
  
  for (let i = 0; i &lt; files.length; i++) {
    output.textContent += `\nFilename: ${files[i].name}`;
  }
}</pre>

<pre class="brush: css hidden">
#output{
  padding: 0.5em 0;
  white-space: pre;
}
</pre>

<h4 id="Result">Result</h4>

<p>{{ EmbedLiveSample('Example', 300, 100) }}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/File/Using_files_from_web_applications">Using files from web
      applications</a></li>
</ul>
