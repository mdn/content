---
title: 'Feature-Policy: picture-in-picture'
slug: Web/HTTP/Headers/Feature-Policy/picture-in-picture
tags:
  - Directive
  - Feature-Policy
  - HTTP
  - Picture in picture
  - Reference
  - Experimental
browser-compat: http.headers.Feature-Policy.picture-in-picture
---
<p>{{HTTPSidebar}} {{SeeCompatTable}}</p>

<p>The HTTP {{HTTPHeader("Feature-Policy")}} header <code>picture-in-picture</code> directive controls whether the current document is allowed to play a video in a Picture-in-Picture mode via the corresponding API.</p>

<h2 id="Syntax">Syntax</h2>

<pre>Feature-Policy: picture-in-picture &lt;allowlist&gt;;</pre>

<dl>
  <dt>&lt;allowlist&gt;</dt>
  <dd>A list of origins for which the feature is allowed. See <a href="/en-US/docs/Web/HTTP/Headers/Feature-Policy#syntax"><code>Feature-Policy</code></a>.</dd>
</dl>

<h2 id="Default_policy">Default policy</h2>

<p>As of June 2019, the <a href="https://wicg.github.io/picture-in-picture/#feature-policy">spec draft</a> and <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=806249#c17">Google Chrome</a> set default allow list to <code>*</code>.</p>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Feature Policy')}}</td>
   <td>{{Spec2('Feature Policy')}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{HTTPHeader("Feature-Policy")}} header</li>
 <li><a href="/en-US/docs/Web/HTTP/Feature_Policy">Feature Policy</a></li>
 <li><a href="/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy">Using Feature Policy</a></li>
</ul>
