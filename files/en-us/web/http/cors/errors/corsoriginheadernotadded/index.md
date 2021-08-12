---
title: 'Reason: CORS header ‘Origin’ cannot be added'
slug: Web/HTTP/CORS/Errors/CORSOriginHeaderNotAdded
tags:
- CORS
- CORSOriginHeaderNotAdded
- Cross-Origin
- Error
- HTTP
- HTTPS
- Messages
- Reasons
- Security
- console
- troubleshooting
---
<div>{{HTTPSidebar}}</div>

<h2 id="Reason">Reason</h2>

<pre class="brush: html">Reason: CORS header ‘Origin’ cannot be added</pre>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>The {{Glossary("user agent")}} was unable to add the required {{HTTPHeader("Origin")}}
  header to the {{Glossary("HTTP")}} request. All CORS requests must have an
  <code>Origin</code> header.</p>

<p>This can happen if the JavaScript code is running with enhanced privileges allowing it
  access to multiple domains' content, for example.</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/HTTP/CORS/Errors">CORS errors</a></li>
  <li>Glossary: {{Glossary("CORS")}}</li>
  <li><a href="/en-US/docs/Web/HTTP/CORS">CORS introduction</a></li>
</ul>
