---
title: WorkerNavigator.language
slug: Web/API/WorkerNavigator/language
tags:
  - API
  - Language
  - WorkerNavigator
  - Property
  - Read-only
  - Reference
browser-compat: api.WorkerNavigator.language
---
<div>{{APIRef("HTML DOM")}}</div>

<p>The <strong><code>WorkerNavigator.language</code></strong> read-only property returns
  a string representing the preferred language of the user, usually the language of the
  browser UI.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">const <em>lang</em> = navigator.language
</pre>

<h3 id="Value">Value</h3>

<p>A {{domxref("DOMString")}}. <em><code>lang</code></em> stores a string representing the
  language version as defined in <a class="external"
    href="https://tools.ietf.org/rfc/bcp/bcp47.txt">BCP 47</a>. Examples of valid language
  codes include "en", "en-US", "fr", "fr-FR", "es-ES", etc.</p>

<p>Note that in Safari on iOS prior to 10.2, the country code returned is lowercase:
  "en-us", "fr-fr" etc.</p>

<h2 id="Example">Example</h2>

You can run this insert a web worker:

<pre class="brush: js">if (/^en\b/.test(navigator.language)) {
  doLangSelect(window.navigator.language);
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("WorkerNavigator.languages")}}</li>
  <li>{{domxref("WorkerNavigator")}}</li>
</ul>
