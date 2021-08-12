---
title: 'Reason: Did not find method in CORS header ‘Access-Control-Allow-Methods’'
slug: Web/HTTP/CORS/Errors/CORSMethodNotFound
tags:
- CORS
- CORSMethodNotFound
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

<pre
  class="brush: html">Reason: Did not find method in CORS header ‘Access-Control-Allow-Methods’</pre>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>The HTTP method being used by the {{Glossary("CORS")}} request is not included in the
  list of methods specified by the response's
  {{HTTPHeader("Access-Control-Allow-Methods")}} header. This header specifies a
  comma-delineated list of the HTTP methods which may be used when using CORS to access
  the URL specified in the request; if the request is using any other method, this error
  occurs.</p>

<p>For example, if the response includes:</p>

<pre>Access-Control-Allow-Methods: GET,HEAD,POST</pre>

<p>Trying to use a {{HTTPMethod("PUT")}} request will fail with this error.</p>

<p>Make sure your code only uses the permitted HTTP methods when accessing the service.
</p>

<p><strong>Note:</strong> If the server includes any unrecognized or undefined method
  names in its <code>Access-Control-Allow-methods</code> header, a different error occurs:
  <code><a href="/en-US/docs/Web/HTTP/CORS/Errors/CORSInvalidAllowMethod">Reason: invalid token ‘xyz' in CORS header ‘Access-Control-Allow-Methods’</a></code>.
</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/HTTP/CORS/Errors">CORS errors</a></li>
  <li>Glossary: {{Glossary("CORS")}}</li>
  <li><a href="/en-US/docs/Web/HTTP/CORS">CORS introduction</a></li>
  <li><a href="/en-US/docs/Web/HTTP/Methods">HTTP request methods</a></li>
</ul>
