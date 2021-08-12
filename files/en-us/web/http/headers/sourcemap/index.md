---
title: SourceMap
slug: Web/HTTP/Headers/SourceMap
tags:
  - HTTP
  - HTTP Header
  - Reference
  - Response Header
  - header
browser-compat: http.headers.SourceMap
---
<div>{{HTTPSidebar}}</div>

<p>The <strong><code>SourceMap</code></strong> <a href="/en-US/docs/Web/HTTP">HTTP</a> response header links generated code to a <a href="/en-US/docs/Tools/Debugger/How_to/Use_a_source_map">source map</a>, enabling the browser to reconstruct the original source and present the reconstructed original in the debugger.</p>

<table class="properties">
	<tbody>
		<tr>
			<th scope="row">Header type</th>
			<td>{{Glossary("Response header")}}</td>
		</tr>
		<tr>
			<th scope="row">{{Glossary("Forbidden header name")}}</th>
			<td>no</td>
		</tr>
	</tbody>
</table>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: html">SourceMap: &lt;url&gt;
X-SourceMap: &lt;url&gt; (deprecated)
</pre>

<h3 id="Directives">Directives</h3>

<dl>
	<dt><code>&lt;url&gt;</code></dt>
	<dd>A relative (to the request URL) or absolute URL pointing to a source map file.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<pre>SourceMap: /path/to/file.js.map</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
	<tbody>
		<tr>
			<th scope="col">Specification</th>
			<th scope="col">Title</th>
		</tr>
		<tr>
			<td><a href="https://sourcemaps.info/spec.html">Draft document</a></td>
			<td>Source Map Revision 3 Proposal</td>
		</tr>
	</tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
	<li><a href="/en-US/docs/Tools/Debugger/How_to/Use_a_source_map">Firefox Developer Tools: using a source map</a></li>
</ul>
