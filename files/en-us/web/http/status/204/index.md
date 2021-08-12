---
title: 204 No Content
slug: Web/HTTP/Status/204
tags:
- HTTP
- Reference
- Status code
- Success
browser-compat: http.status.204
---
<div>{{HTTPSidebar}}</div>

<p>The HTTP <strong><code>204 No Content</code></strong> success status response code
  indicates that a request has succeeded, but that the client doesn't need to navigate away
  from its current page.</p>

<p>This might be used, for example, when implementing "save and continue editing" functionality for a wiki site.
  In this case a {{HTTPMethod("PUT")}} request would be used to save the page, and the <code>204 No Content</code> response
  would be sent to indicate that the editor should not be replaced by some other page.</p>

<p>A 204 response is cacheable by default (an {{HTTPHeader("ETag")}} header is included in such a response).</p>


<h2 id="Status">Status</h2>

<pre class="brush: html">204 No Content</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="Compatibility_notes">Compatibility notes</h2>

<ul>
  <li>Although this status code is intended to describe a response with no body, servers
    may erroneously include data following the headers. The protocol allows user agents to
    vary in how they process such responses (<a
      href="https://github.com/httpwg/http11bis/issues/26">discussion regarding this
      specification text can be found here</a>). This is observable in persistent
    connections, where the invalid body may include a distinct response to a subsequent
    request.<br>
    <br>
    Apple Safari rejects any such data. Google Chrome and Microsoft Edge discard up to
    four invalid bytes preceding a valid response. Firefox tolerates in excess of a
    kilobyte of invalid data preceding a valid response.
  </li>
</ul>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/HTTP/Methods">HTTP request methods</a></li>
</ul>
