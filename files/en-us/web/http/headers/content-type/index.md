---
title: Content-Type
slug: Web/HTTP/Headers/Content-Type
tags:
  - Content-Type
  - HTTP
  - HTTP header
  - Representation header
  - Reference
browser-compat: http.headers.Content-Type
---
<div>{{HTTPSidebar}}</div>

<p>The <strong><code>Content-Type</code></strong> representation header is used to indicate the original {{Glossary("MIME type","media type")}} of the resource (prior to any content encoding applied for sending).</p>

<p>In responses, a <code>Content-Type</code> header tells the client what the content type of the returned content actually is. Browsers will do MIME sniffing in some cases and will not necessarily follow the value of this header; to prevent this behavior, the header {{HTTPHeader("X-Content-Type-Options")}} can be set to <code>nosniff</code>.</p>

<p>In requests, (such as {{HTTPMethod("POST")}} or {{HTTPMethod("PUT")}}), the client tells the server what type of data is actually sent.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Header type</th>
   <td>{{Glossary("Representation header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>no</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("CORS-safelisted response header")}}</th>
   <td>yes</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("CORS-safelisted request header")}}</th>
   <td>yes, with the additional restriction that values can't contain a <em>CORS-unsafe request header byte</em>: 0x00-0x1F (except 0x09 (HT)), <code>"():&lt;&gt;?@[\]{}</code>, and 0x7F (DEL).<br>
    It also needs to have a MIME type of its parsed value (ignoring parameters) of either <code>application/x-www-form-urlencoded</code>, <code>multipart/form-data</code>, or <code>text/plain</code>.</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: html">Content-Type: text/html; charset=UTF-8
Content-Type: multipart/form-data; boundary=something
</pre>

<h2 id="Directives">Directives</h2>

<dl>
 <dt><code>media-type</code></dt>
 <dd>The <a href="/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types">MIME type</a> of the resource or the data.</dd>
 <dt>charset</dt>
 <dd>The character encoding standard.</dd>
 <dt>boundary</dt>
 <dd>For multipart entities the <code>boundary</code> directive is required, which consists of 1 to 70 characters from a set of characters known to be very robust through email gateways, and not ending with white space. It is used to encapsulate the boundaries of the multiple parts of the message. Often, the header boundary is prepended with two dashes and the final boundary has two dashes appended at the end.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Content-Type_in_HTML_forms"><code>Content-Type</code> in HTML forms</h3>

<p>In a {{HTTPMethod("POST")}} request, resulting from an HTML form submission, the <code>Content-Type</code> of the request is specified by the <code>enctype</code> attribute on the {{HTMLElement("form")}} element.</p>

<pre class="brush: html">&lt;form action="/" method="post" enctype="multipart/form-data"&gt;
  &lt;input type="text" name="description" value="some text"&gt;
  &lt;input type="file" name="myFile"&gt;
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
</pre>

<p>The request looks something like this (less interesting headers are omitted here):</p>

<pre>POST /foo HTTP/1.1
Content-Length: 68137
Content-Type: multipart/form-data; boundary=---------------------------974767299852498929531610575

-----------------------------974767299852498929531610575
Content-Disposition: form-data; name="description"

some text
-----------------------------974767299852498929531610575
Content-Disposition: form-data; name="myFile"; filename="foo.txt"
Content-Type: text/plain

(content of the uploaded file foo.txt)
-----------------------------974767299852498929531610575--
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{HTTPHeader("Accept")}}</li>
 <li>{{HTTPHeader("Content-Disposition")}}</li>
 <li>{{HTTPStatus("206")}} Partial Content</li>
 <li>{{HTTPHeader("X-Content-Type-Options")}}</li>
</ul>
