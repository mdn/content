---
title: Accept-Language
slug: Web/HTTP/Headers/Accept-Language
tags:
- Accept-Language
- Content Negotiation
- HTTP
- HTTP Header
- Reference
- Request header
browser-compat: http.headers.Accept-Language
---
<div>{{HTTPSidebar}}</div>

<p>The <strong><code>Accept-Language</code></strong> request HTTP header advertises which
  languages the client is able to understand, and which locale variant is preferred. (By
  languages, we mean natural languages, such as English, and not programming languages.)
  Using <a href="/en-US/docs/Web/HTTP/Content_negotiation">content negotiation</a>, the
  server then selects one of the proposals, uses it and informs the client of its choice
  with the {{HTTPHeader("Content-Language")}} response header. Browsers set adequate
  values for this header according to their user interface language and even if a user can
  change it, this happens rarely (and is frowned upon as it leads to fingerprinting).</p>

<p>This header is a hint to be used when the server has no way of determining the language
  via another way, like a specific URL, that is controlled by an explicit user decision.
  It is recommended that the server never overrides an explicit decision. The content of
  the <code>Accept-Language</code> is often out of the control of the user (like when
  traveling and using an Internet Cafe in a different country); the user may also want to
  visit a page in another language than the locale of their user interface.</p>

<p>If the server cannot serve any matching language, it can theoretically send back a
  {{HTTPStatus("406")}} (Not Acceptable) error code. But, for a better user experience,
  this is rarely done and more common way is to ignore the <code>Accept-Language</code>
  header in this case.</p>

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
    <tr>
      <th scope="row">{{Glossary("CORS-safelisted request header")}}</th>
      <td>yes, with the additional restriction that values can only be <code>0-9</code>,
        <code>A-Z</code>, <code>a-z</code>, space or <code>*,-.;=</code>.</td>
    </tr>
  </tbody>
</table>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: html">Accept-Language: &lt;language&gt;
Accept-Language: *

// Multiple types, weighted with the {{glossary("quality values", "quality value")}} syntax:
Accept-Language: fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5</pre>

<h2 id="Directives">Directives</h2>

<dl>
  <dt><code>&lt;language&gt;</code></dt>
  <dd>
    <p>A language tag (which is sometimes referred to as a "locale identifier"). This
      consists of a 2-3 letter base language tag representing the language, optionally
      followed by additional subtags separated by <code>'-'</code>. The most common extra
      information is the country or region variant (like <code>'en-US'</code> or
      <code>'fr-CA'</code>) or the type of alphabet to use (like <code>'sr-Latn'</code>).
      Other variants like the type of orthography (<code>'de-DE-1996'</code>) are usually
      not used in the context of this header.</p>
  </dd>
  <dt><code>*</code></dt>
  <dd>Any language; <code>'*'</code> is used as a wildcard.</dd>
  <dt><code>;q=</code> (q-factor weighting)</dt>
  <dd>Any value placed in an order of preference expressed using a relative
    {{glossary("Quality values", "quality value")}} called <em>weight</em>.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<pre>Accept-Language: de

Accept-Language: de-CH

Accept-Language: en-US,en;q=0.5
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>HTTP <a href="/en-US/docs/Web/HTTP/Content_negotiation">content negotiation</a></li>
  <li>Header with the result of the content negotiation:
    {{HTTPHeader("Content-Language")}}</li>
  <li>Other similar headers: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept")}}</li>
</ul>
