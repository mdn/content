---
title: Navigator.languages
slug: Web/API/Navigator/languages
tags:
  - API
  - Experimental
  - Navigator
  - Property
  - Read-only
  - Reference
  - languages
browser-compat: api.Navigator.languages
---
<p>{{APIRef("HTML DOM")}}{{SeeCompatTable}}</p>

<p>The <code><strong>Navigator.languages</strong></code> read-only property
  returns an array of {{domxref("DOMString")}}s representing the user's preferred
  languages. The language is described using <a
    href="https://datatracker.ietf.org/doc/html/bcp47">BCP 47</a> language tags. In the returned
  array they are ordered by preference with the most preferred language first.</p>

<p>The value of {{domxref("Navigator.language","navigator.language")}} is the
  first element of the returned array.</p>

<p>When its value changes, as the user's preferred languages are changed a
  {{event("languagechange")}} event is fired on the {{domxref("Window")}} object.</p>

<p>The <code>Accept-Language</code> HTTP header in every HTTP request from the user's
  browser uses the same value for the <code>navigator.languages</code> property except for
  the extra <code>qvalues</code> (quality values) field (e.g. <code>en-US;q=0.8</code>).
</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>preferredLanguages</em> = <em>globalObj</em>.navigator.languages
</pre>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">navigator.language   //"en-US"
navigator.languages  //["en-US", "zh-CN", "ja-JP"]
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("navigator.language")}}</li>
  <li>{{domxref("navigator")}}</li>
  <li>{{domxref("Window.onlanguagechange")}}</li>
</ul>
