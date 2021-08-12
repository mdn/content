---
title: 'CSP: plugin-types'
slug: Web/HTTP/Headers/Content-Security-Policy/plugin-types
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - Flash
  - HTTP
  - Java
  - Plugin
  - Plugins
  - Security
browser-compat: http.headers.csp.Content-Security-Policy.plugin-types
---
<div>{{HTTPSidebar}}{{deprecated_header}}</div>

<p>The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
  <code><strong>plugin-types</strong></code> directive restricts the set of plugins that
  can be embedded into a document by limiting the types of resources which can be loaded.
</p>

<p>Instantiation of an {{HTMLElement("embed")}}, {{HTMLElement("object")}} or
  {{HTMLElement("applet")}} element will fail if:</p>

<ul>
  <li>the element to load does not declare a valid MIME type,</li>
  <li>the declared type does not match one of specified types in the
    <code>plugin-types</code> directive,</li>
  <li>the fetched resource does not match the declared type.</li>
</ul>

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Directive type</th>
      <td>{{Glossary("Document directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} fallback</th>
      <td>No. Not setting this allows anything.</td>
    </tr>
  </tbody>
</table>

<h2 id="Syntax">Syntax</h2>

<p>One or more <a href="/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types">MIME types</a> can
  be set for the <code>plugin-types</code> policy:</p>

<pre class="brush: html">Content-Security-Policy: plugin-types &lt;type&gt;/&lt;subtype&gt;;
Content-Security-Policy: plugin-types &lt;type&gt;/&lt;subtype&gt; &lt;type&gt;/&lt;subtype&gt;;
</pre>

<dl>
  <dt>&lt;type&gt;/&lt;subtype&gt;</dt>
  <dd>A valid <a
      href="/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types">MIME
      type</a>.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Disallowing_plugins">Disallowing plugins</h3>

<p>To disallow all plugins, the {{CSP("object-src")}} directive should be set to
  <code>'none'</code> which will disallow plugins. The <code>plugin-types</code> directive
  is only used if you are allowing plugins with <code>object-src</code> at all.</p>

<pre
  class="brush: html">&lt;meta http-equiv="Content-Security-Policy" content="object-src 'none'"&gt;</pre>

<h3 id="Allowing_Flash_content">Allowing Flash content</h3>

<p>The content security policy</p>

<pre
  class="brush: bash">Content-Security-Policy: plugin-types application/x-shockwave-flash</pre>

<p>will allow to load flash objects:</p>

<pre
  class="brush: html">&lt;object data="https://example.com/flash" type="application/x-shockwave-flash"&gt;&lt;/object&gt;</pre>

<h3 id="Allowing_Java_applets">Allowing Java applets</h3>

<p>To load an {{HTMLElement("applet")}} you must specify
  <code>application/x-java-applet</code>:</p>

<pre
  class="brush: bash">Content-Security-Policy: plugin-types application/x-java-applet</pre>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any current specification. Used to be defined in <a href="https://www.w3.org/TR/CSP2/#directive-plugin-types">CSP 2</a>.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{HTTPHeader("Content-Security-Policy")}}: {{CSP("object-src")}}</li>
  <li>{{HTMLElement("object")}}</li>
  <li>{{HTMLElement("embed")}}</li>
  <li>{{HTMLElement("applet")}}</li>
  <li>{{HTTPHeader("X-Content-Type-Options")}}</li>
</ul>
