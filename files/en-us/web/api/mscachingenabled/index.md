---
title: msCachingEnabled
slug: Web/API/msCachingEnabled
tags:
  - msCachingEnabled
---
<div>{{APIRef("HTML DOM")}}</div>

<p>{{Non-standard_header()}}</p>

<p>The <strong><code>msCachingEnabled</code></strong> method gets the current caching state for an <a href="/en-US/docs/Web/API/XMLHttpRequest">XMLHttpRequest</a>.</p>

<p>This proprietary method is specific to Internet Explorer and Microsoft Edge.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"> var cacheState = XMLHttpRequest.msCachingEnabled();
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><em>cacheState</em>[out, retval]</dt>
 <dd>Type = <strong>boolean</strong>. If true, <code>XMLHttpRequest </code>is cached to disk. If false, it is not written to disk.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>Type: <strong>boolean</strong>. If true, <code>XMLHttpRequest </code>is cached to disk. If false, it is not written to disk.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/msCaching">msCaching property</a></li>
 <li><a href="/en-US/docs/Web/API/Microsoft_Extensions">Microsoft API extensions </a></li>
</ul>
