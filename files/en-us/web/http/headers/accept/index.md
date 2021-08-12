---
title: Accept
slug: Web/HTTP/Headers/Accept
tags:
  - HTTP
  - HTTP Header
  - Reference
  - Request header
browser-compat: http.headers.Accept
---
<div>{{HTTPSidebar}}</div>

<p>The <strong><code>Accept</code></strong> request HTTP header advertises which content types, expressed as <a href="/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types">MIME types</a>, the client is able to understand. Using <a href="/en-US/docs/Web/HTTP/Content_negotiation">content negotiation</a>, the server then selects one of the proposals, uses it and informs the client of its choice with the {{HTTPHeader("Content-Type")}} response header. Browsers set adequate values for this header depending on the context where the request is done: when fetching a CSS stylesheet a different value is set for the request than when fetching an image, video or a script.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Header type</th>
   <td>{{Glossary("Request header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>no</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("CORS-safelisted request header")}}</th>
   <td>yes, with the additional restriction that values can't contain a <em>CORS-unsafe request header byte</em>: 0x00-0x1F (except 0x09 (HT)), <code>"():&lt;&gt;?@[\]{}</code>, and 0x7F (DEL).</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: html">Accept: &lt;MIME_type&gt;/&lt;MIME_subtype&gt;
Accept: &lt;MIME_type&gt;/*
Accept: */*

// Multiple types, weighted with the {{glossary("quality values", "quality value")}} syntax:
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, */*;q=0.8
</pre>

<h2 id="Directives">Directives</h2>

<dl>
 <dt><code>&lt;MIME_type&gt;/&lt;MIME_subtype&gt;</code></dt>
 <dd>A single, precise <a href="/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types">MIME type</a>, like <code>text/html</code>.</dd>
 <dt><code>&lt;MIME_type&gt;/*</code></dt>
 <dd>A MIME type, but without any subtype. <code>image/*</code> will match <code>image/png</code>, <code>image/svg</code>, <code>image/gif</code> and any other image types.</dd>
 <dt><code>*/*</code></dt>
 <dd>Any MIME type</dd>
 <dt><code>;q=</code> (q-factor weighting)</dt>
 <dd>Any value used is placed in an order of preference expressed using relative <a href="/en-US/docs/Glossary/Quality_values">quality value</a> called the <em>weight</em>.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<pre>Accept: text/html

Accept: image/*

// General default
Accept: */*

// Default for navigation requests
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>HTTP <a href="/en-US/docs/Web/HTTP/Content_negotiation">content negotiation</a></li>
 <li>Header with the result of the content negotiation: {{HTTPHeader("Content-Type")}}</li>
 <li>Other similar headers: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}</li>
</ul>
