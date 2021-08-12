---
title: 'Reason: CORS preflight channel did not succeed'
slug: Web/HTTP/CORS/Errors/CORSPreflightDidNotSucceed
tags:
- CORS
- CORSPreflightDidNotSucceed
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

<pre class="brush: html">Reason: CORS preflight channel did not succeed</pre>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>The {{Glossary("CORS")}} request requires  preflight, preflighting could not be
  performed. There are a couple of reasons why preflighting might fail:</p>

<ul>
  <li>A cross-site request has previously been performed that already did a preflight, and
    doing the preflight again is not permitted. Make sure your code only preflights once
    per connection.</li>
  <li>The preflight request suffered any kind of networking error that might ordinarily
    occur.</li>
</ul>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/HTTP/CORS/Errors">CORS errors</a></li>
  <li>Glossary: {{Glossary("CORS")}}</li>
  <li><a href="/en-US/docs/Web/HTTP/CORS">CORS introduction</a></li>
</ul>
