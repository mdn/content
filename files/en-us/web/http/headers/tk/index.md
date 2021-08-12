---
title: Tk
slug: Web/HTTP/Headers/Tk
tags:
- DNT
- HTTP
- Reference
- Response
- header
- tracking
browser-compat: http.headers.Tk
---
<div>{{HTTPSidebar}}{{Deprecated_header}}</div>

<p>The <strong><code>Tk</code></strong> response header indicates the tracking status that
  applied to the corresponding request.</p>

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: html">Tk: !  (under construction)
Tk: ?  (dynamic)
Tk: G  (gateway or multiple parties)
Tk: N  (not tracking)
Tk: T  (tracking)
Tk: C  (tracking with consent)
Tk: P  (potential consent)
Tk: D  (disregarding DNT)
Tk: U  (updated)
</pre>

<h3 id="Directives">Directives</h3>

<dl>
  <dt>!</dt>
  <dd>Under construction. The origin server is currently testing its communication of
    tracking status.</dd>
  <dt>?</dt>
  <dd>Dynamic. The origin server needs more information to determine tracking status.</dd>
  <dt>G</dt>
  <dd>Gateway or multiple parties. The server is acting as a gateway to an exchange
    involving multiple parties.</dd>
  <dt>N</dt>
  <dd>Not tracking.</dd>
  <dt>T</dt>
  <dd>Tracking.</dd>
  <dt>C</dt>
  <dd>Tracking with consent. The origin server believes it has received prior consent for
    tracking this user, user agent, or device.</dd>
  <dt>P</dt>
  <dd>Potential consent. The origin server does not know, in real-time, whether it has
    received prior consent for tracking this user, user agent, or device, but promises not
    to use or share any <code>DNT:1</code> data until such consent has been determined,
    and further promises to delete or permanently de-identify within 48 hours any
    <code>DNT:1</code> data received for which such consent has not been received.</dd>
  <dt>D</dt>
  <dd>Disregarding DNT. The origin server is unable or unwilling to respect a tracking
    preference received from the requesting user agent.</dd>
  <dt>U</dt>
  <dd>Updated. The request resulted in a potential change to the tracking status
    applicable to this user, user agent, or device.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>A <code>Tk</code> header for a resource that claims not to be tracking would look like:
</p>

<pre>Tk: N</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{HTTPHeader("DNT")}} header</li>
  <li>{{domxref("Navigator.doNotTrack")}}</li>
</ul>
