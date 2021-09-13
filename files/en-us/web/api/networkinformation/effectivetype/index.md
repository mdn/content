---
title: NetworkInformation.effectiveType
slug: Web/API/NetworkInformation/effectiveType
tags:
- API
- Experimental
- Network Information API
- NetworkInformation
- Reference
- effectiveType
browser-compat: api.NetworkInformation.effectiveType
---
<p>{{SeeCompatTable}}{{APIRef("Network Information API")}}</p>

<p>The <strong><code>effectiveType</code></strong> read-only property of the
  {{domxref("NetworkInformation")}} interface returns the effective type of the connection
  meaning one of 'slow-2g', '2g', '3g', or '4g'. This value is determined using a
  combination of recently observed, round-trip time and downlink values.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var <em>effectiveType</em> = NetworkInformation.effectiveType</pre>

<h3 id="Value">Value</h3>

<p>A {{jsxref("String")}} containing one of 'slow-2g', '2g', '3g', or '4g'.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Glossary/Effective_connection_type">Effective Connection Type</a></li>
  <li>{{HTTPHeader("ECT")}}</li>
</ul>


