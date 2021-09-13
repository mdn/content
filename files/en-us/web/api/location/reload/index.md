---
title: 'Location: reload()'
slug: Web/API/Location/reload
tags:
- API
- HTML DOM
- Location
- Method
- Reference
browser-compat: api.Location.reload
---
<div>{{ APIRef("HTML DOM") }}</div>

<p>The <code><strong>location.reload()</strong></code> method reloads the current URL, like the Refresh button.</p>

<p>The reload may be blocked and a <code>SECURITY_ERROR</code> {{domxref("DOMException")}}
  thrown. This happens if the {{Glossary("origin")}} of the script calling
  <code>location.reload()</code> differs from the origin of the page that owns the
  {{domxref("Location")}} object. See <a
    href="/en-US/docs/Web/Security/Same-origin_policy">Same-origin policy</a> for more
  information.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">location.reload();
</pre>

<h2 id="location.reload_has_no_parameter">location.reload() has no parameter</h2>

<p>Firefox supports a non-standard <a href="https://searchfox.org/mozilla-central/source/dom/base/Location.cpp#551"><code>forceGet</code> boolean parameter</a> for <code>location.reload()</code>, to tell Firefox to bypass its cache and force-reload the current document. However, in all other browsers, any parameter you specify in a <code>location.reload()</code> call will be ignored and have no effect of any kind.</p>

<p>You may, though, come across instances of <code>location.reload(true)</code> in existing code that was written with the assumption the force-reload effect occurs in all browsers. A GitHub "<code>location.reload(true)</code>" search returns <a href="https://github.com/search?q=%22location.reload%28true%29%22&type=code">several hundred thousand results</a>. So there’s a lot of existing code which has it.</p>

<p>The history of it is: some version of Netscape Navigator added support for it, which apparently eventually got picked up in Firefox. And at one point the W3C Web APIs Working Group <a href="https://www.w3.org/2005/06/tracker/webapi/issues/69">took up an issue</a> to consider adding it to the specification for <code>location.reload()</code>. However, it was never actually added.</p>

<p>So a boolean parameter is not part of the current specification for <code>location.reload()</code> — and in fact has <em>never</em> been part of any specification for <code>location.reload()</code> ever published.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>The {{domxref("Location")}} interface it belongs to.</li>
  <li>Similar methods: {{domxref("Location.assign()")}} and
    {{domxref("Location.replace()")}}.</li>
</ul>
