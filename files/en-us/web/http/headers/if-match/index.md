---
title: If-Match
slug: Web/HTTP/Headers/If-Match
tags:
- Conditional Requests
- HTTP
- HTTP Header
- Reference
- Request header
browser-compat: http.headers.If-Match
---
<div>{{HTTPSidebar}}</div>

<p>The <strong><code>If-Match</code></strong> HTTP request header makes the request
  conditional. For {{HTTPMethod("GET")}} and {{HTTPMethod("HEAD")}} methods, the server
  will send back the requested resource only if it matches one of the listed
  <code>ETags</code>. For {{HTTPMethod("PUT")}} and other non-safe methods, it will only
  upload the resource in this case.</p>

<p>The comparison with the stored {{HTTPHeader("ETag")}} uses the <em>strong comparison
    algorithm</em>, meaning two files are considered identical byte to byte only. If a
  listed <code>ETag</code> has the <code>W/</code> prefix indicating a weak entity tag, it
  will never match under this comparison algorithm.</p>

<p>There are two common use cases:</p>

<ul>
  <li>For {{HTTPMethod("GET")}} and {{HTTPMethod("HEAD")}} methods, used in combination
    with a {{HTTPHeader("Range")}} header, it can guarantee that the new ranges requested
    comes from the same resource than the previous one. If it doesn't match, then a
    {{HTTPStatus("416")}} (Range Not Satisfiable) response is returned.</li>
  <li>For other methods, and in particular for {{HTTPMethod("PUT")}},
    <code>If-Match</code> can be used to prevent the <a
      href="https://www.w3.org/1999/04/Editing/#3.1">lost update problem</a>. It can check
    if the modification of a resource that the user wants to upload will not override
    another change that has been done since the original resource was fetched. If the
    request cannot be fulfilled, the {{HTTPStatus("412")}} (Precondition Failed) response
    is returned.</li>
</ul>

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
  </tbody>
</table>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: html">If-Match: &lt;etag_value&gt;
If-Match: &lt;etag_value&gt;, &lt;etag_value&gt;, …
</pre>

<h2 id="Directives">Directives</h2>

<dl>
  <dt>&lt;etag_value&gt;</dt>
  <dd>Entity tags uniquely representing the requested resources. They are a string of
    ASCII characters placed between double quotes (like <code>"675af34563dc-tr34"</code>).
    They may be prefixed by <code>W/</code> to indicate that they are "weak", i.e. that
    they represent the resource semantically, but not byte-for-byte. However, in an
    <strong><code>If-Match</code></strong> header, weak entity tags will never match.</dd>
  <dt><code>*</code></dt>
  <dd>The asterisk is a special value representing any resource.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<pre>If-Match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

If-Match: "67ab43", "54ed21", "7892dd"

If-Match: *
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{HTTPHeader("ETag")}}</li>
  <li>{{HTTPHeader("If-Unmodified-Since")}}</li>
  <li>{{HTTPHeader("If-Modified-Since")}}</li>
  <li>{{HTTPHeader("If-None-Match")}}</li>
  <li>{{HTTPStatus("416")}}<code> Range Not Satisfiable</code></li>
  <li>{{HTTPStatus("412")}}<code> Precondition Failed</code></li>
</ul>
