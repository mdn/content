---
title: 'Reason: invalid token ‘xyz’ in CORS header ‘Access-Control-Allow-Headers’'
slug: Web/HTTP/CORS/Errors/CORSInvalidAllowHeader
tags:
- CORS
- CORSInvalidAllowHeader
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
  class="brush: html">Reason: invalid token ‘xyz’ in CORS header ‘Access-Control-Allow-Headers’</pre>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>The response to the {{Glossary("CORS")}} request that was sent by the server includes
  an {{HTTPHeader("Access-Control-Allow-Headers")}} header which includes at least one
  invalid header name.</p>

<p>The <code>Access-Control-Allow-Headers</code> header is sent by the server in response
  to a {{Glossary("preflight request")}}; it lets the client know which <a
    href="/en-US/docs/Web/HTTP/Headers">HTTP headers</a> are permitted in CORS requests.
  If the client {{Glossary("user agent")}} finds among the comma-delineated values
  provided by the header any header name it does not recognize, this error occurs.</p>

<p>This is a problem that most likely can only be fixed on the server side, by modifying
  the server's configuration to no longer send the invalid or unknown header name with the
  <code>Access-Control-Allow-Headers</code> header. It may also be worth checking to
  ensure that the user agent or HTTP library you're using on the client is up-to-date.</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/HTTP/CORS/Errors">CORS errors</a></li>
  <li>Glossary: {{Glossary("CORS")}}</li>
  <li><a href="/en-US/docs/Web/HTTP/CORS">CORS introduction</a></li>
  <li><a href="/en-US/docs/Web/HTTP/Headers">HTTP headers</a></li>
</ul>
