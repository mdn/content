---
title: >-
  Reason: Credential is not supported if the CORS header
  ‘Access-Control-Allow-Origin’ is ‘*’
slug: Web/HTTP/CORS/Errors/CORSNotSupportingCredentials
tags:
  - CORS
  - CORSNotSupportingCredentials
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

<pre class="brush: html">Reason: Credential is not supported if the CORS header ‘Access-Control-Allow-Origin’ is ‘*’</pre>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>The {{Glossary("CORS")}} request was attempted with the credentials flag set, but the server is configured using the wildcard (<code>"*"</code>) as the value of {{HTTPHeader("Access-Control-Allow-Origin")}}, which doesn't allow the use of credentials.</p>

<p>To correct this problem on the client side, ensure that the credentials flag's value is <code>false</code> when issuing your CORS request.</p>

<ul>
 <li>If the request is being issued using {{domxref("XMLHttpRequest")}}, make sure you're not setting {{domxref("XMLHttpRequest.withCredentials", "withCredentials")}} to <code>true</code>.</li>
 <li>If using <a href="/en-US/docs/Web/API/Server-sent_events">Server-sent events</a>, make sure {{domxref("EventSource.withCredentials")}} is <code>false</code> (it's the default value).</li>
 <li>If using the <a href="/en-US/docs/Web/API/Fetch_API">Fetch API</a>, make sure {{domxref("Request.credentials")}} is <code>"omit"</code>.</li>
</ul>

<p>If, instead, you need to adjust the server's behavior, you'll need to change the value of <code>Access-Control-Allow-Origin</code> to grant access to the origin from which the client is loaded.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/HTTP/CORS/Errors">CORS errors</a></li>
 <li>Glossary: {{Glossary("CORS")}}</li>
 <li><a href="/en-US/docs/Web/HTTP/CORS">CORS introduction</a></li>
</ul>
