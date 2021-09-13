---
title: 'Location: replace()'
slug: Web/API/Location/replace
tags:
- API
- HTML-DOM
- Location
- Method
- Reference
browser-compat: api.Location.replace
---
<p>{{ APIRef("HTML DOM") }}</p>

<p>The <code><strong>replace()</strong></code> method of the {{DOMXref("Location")}}
  interface replaces the current resource with the one at the provided URL. The difference
  from the {{domxref("Location.assign","assign()")}} method is that after using
  <code>replace()</code> the current page will not be saved in session
  {{domxref("History")}}, meaning the user won't be able to use the <em>back</em> button
  to navigate to it.</p>

<p>If the assignment can't happen because of a security violation, a
  {{domxref("DOMException")}} of the <code>SECURITY_ERROR</code> type is thrown. This
  happens if the origin of the script calling the method is different from the origin of
  the page originally described by the {{domxref("Location")}} object, mostly when the
  script is hosted on a different domain.</p>

<p>If the provided URL is not valid, a {{domxref("DOMException")}} of the
  <code>SYNTAX_ERROR</code> type is thrown.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>object</em>.replace(<em>url</em>);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>url</code></dt>
  <dd>Is a {{domxref("DOMString")}} containing the URL of the page to navigate to.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<pre
  class="brush: js">// Navigate to the Location.reload article by replacing this page
window.location.replace('https://developer.mozilla.org/en-US/docs/Web/API/Location.reload');</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>The {{domxref("Location")}} interface it belongs to.</li>
  <li>Similar methods: {{domxref("Location.assign()")}} and
    {{domxref("Location.reload()")}}.</li>
</ul>
