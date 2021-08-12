---
title: DNT
slug: Web/HTTP/Headers/DNT
tags:
- DNT
- HTTP
- Reference
- header
browser-compat: http.headers.DNT
---
<div>{{HTTPSidebar}}{{Deprecated_header}}</div>

<p>The <strong><code>DNT</code></strong> (<strong>D</strong>o <strong>N</strong>ot
  <strong>T</strong>rack) request header indicates the user's tracking preference. It lets
  users indicate whether they would prefer privacy rather than personalized content.</p>

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: html">DNT: 0
DNT: 1
DNT: null
</pre>

<h2 id="Directives">Directives</h2>

<dl>
  <dt>0</dt>
  <dd>The user prefers to allow tracking on the target site.</dd>
  <dt>1</dt>
  <dd>The user prefers not to be tracked on the target site.</dd>
  <dt>null</dt>
  <dd>The user has not specified a preference about tracking.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Reading_Do_Not_Track_status_from_JavaScript">Reading Do Not Track status from
  JavaScript</h3>

<p>The user's DNT preference can also be read from JavaScript using the
  {{domxref("Navigator.doNotTrack")}} property:</p>

<pre class="brush: js">navigator.doNotTrack; // "0" or "1"</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("Navigator.doNotTrack")}}</li>
  <li>{{HTTPHeader("Tk")}} header</li>
  <li><a href="https://en.wikipedia.org/wiki/Do_Not_Track">Do Not Track on Wikipedia</a>
  </li>
  <li><a
      href="https://www.eff.org/deeplinks/2011/02/what-does-track-do-not-track-mean">What
      Does the "Track" in "Do Not Track" Mean? – EFF</a></li>
  <li><a href="https://donottrack.us/">donottrack.us</a></li>
  <li>DNT browser settings help:
    <ul>
      <li><a href="https://www.mozilla.org/en-US/firefox/dnt/">Firefox</a></li>
      <li><a href="https://support.google.com/chrome/answer/2790761">Chrome</a></li>
    </ul>
  </li>
</ul>
