---
title: 'Reason: CORS request not HTTP'
slug: Web/HTTP/CORS/Errors/CORSRequestNotHttp
tags:
- CORS
- CORSRequestNotHttp
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

<pre class="brush: html">Reason: CORS request not HTTP</pre>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>{{Glossary("CORS")}} requests may only use the HTTPS URL scheme, but the URL specified
  by the request is of a different type. This often occurs if the URL specifies a local
  file, using a <code>file:///</code> URL.</p>

<p>To fix this problem, make sure you use HTTPS URLs when issuing requests involving CORS,
  such as {{domxref("XMLHttpRequest")}}, <a href="/en-US/docs/Web/API/Fetch_API">Fetch</a>
  APIs, Web Fonts (<code>@font-face</code>), and <a
    href="/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL">WebGL
    textures</a>, and XSL stylesheets.</p>

<h3 id="Local_File_Security_in_Firefox_68">Local File Security in Firefox 68</h3>

<p>When a user opened a page using a <code>file:///</code> URI in Firefox 67 and earlier,
  the origin of the page was defined as the directory from which the page was opened.
  Resources in the same directory and its subdirectories were treated as having the same
  origin for purposes of the CORS same-origin rule.</p>

<p>In response to <a
    href="https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730">CVE-2019-11730</a>,
  Firefox 68 and later define the origin of a page opened using a <code>file:///</code>
  URI as unique. Therefore, other resources in the same directory or its subdirectories no
  longer satisfy the CORS same-origin rule. This new behavior is enabled by default using
  the <code>privacy.file_unique_origin</code> preference.</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/HTTP/CORS/Errors">CORS errors</a></li>
  <li>Glossary: {{Glossary("CORS")}}</li>
  <li><a href="/en-US/docs/Web/HTTP/CORS">CORS introduction</a></li>
  <li><a href="/en-US/docs/Learn/Common_questions/What_is_a_URL">What is a URL?</a></li>
</ul>
