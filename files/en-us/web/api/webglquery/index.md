---
title: WebGLQuery
slug: Web/API/WebGLQuery
tags:
  - API
  - Experimental
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGLQuery
---
<div>{{APIRef("WebGL")}}</div>

<p>The <strong><code>WebGLQuery</code></strong> interface is part of the <a href="/en-US/docs/Web/API/WebGL_API">WebGL 2</a> API and provides ways to asynchronously query for information. By default, occlusion queries and primitive queries are available.</p>

<p>Another kind of queries are disjoint timer queries, which allow you to measure performance and profiling of your GPU. Disjoint timer queries are available with the {{domxref("EXT_disjoint_timer_query")}} extension only.</p>

<p>When working with <code>WebGLQuery</code> objects, the following methods of the {{domxref("WebGL2RenderingContext")}} are useful:</p>

<ul>
 <li>{{domxref("WebGL2RenderingContext.createQuery()")}}</li>
 <li>{{domxref("WebGL2RenderingContext.deleteQuery()")}}</li>
 <li>{{domxref("WebGL2RenderingContext.isQuery()")}}</li>
 <li>{{domxref("WebGL2RenderingContext.beginQuery()")}}</li>
 <li>{{domxref("WebGL2RenderingContext.endQuery()")}}</li>
 <li>{{domxref("WebGL2RenderingContext.getQuery()")}}</li>
 <li>{{domxref("WebGL2RenderingContext.getQueryParameter()")}}</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Creating_a_WebGLQuery_object">Creating a <code>WebGLQuery</code> object</h3>

<p>in this example, <code>gl</code> must be a {{domxref("WebGL2RenderingContext")}}. <code>WebGLQuery</code> objects are not available in WebGL 1.</p>

<pre class="brush: js">var query = gl.createQuery();
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("EXT_disjoint_timer_query")}}</li>
</ul>
