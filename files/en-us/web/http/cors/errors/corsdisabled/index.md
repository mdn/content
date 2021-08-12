---
title: 'Reason: CORS disabled'
slug: Web/HTTP/CORS/Errors/CORSDisabled
tags:
- Authentication
- Authentication Article
- CORS
- Cross-Origin
- Disabled
- Errors
- HTTP
- HTTPS
- Messages
- Resource
- Same Origin
- Same-origin
- Security
- Sharing
- Validation
- secure
- troubleshooting
---
<div>{{HTTPSidebar}}</div>

<h2 id="Reason">Reason</h2>

<pre class="brush: html">Reason: CORS disabled</pre>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>A request that needs to use {{Glossary("CORS")}} was attempted, but CORS is disabled in
  the user's browser. When this happens, the user needs to turn CORS back on in their
  browser.</p>

<p>In Firefox, the preference that disables CORS is <code>content.cors.disable</code>.
  Setting this to <code>true</code> disables CORS, so whenever that's the case, CORS
  requests will always fail with this error.</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/HTTP/CORS/Errors">CORS errors</a></li>
  <li>Glossary: {{Glossary("CORS")}}</li>
  <li><a href="/en-US/docs/Web/HTTP/CORS">CORS introduction</a></li>
</ul>
