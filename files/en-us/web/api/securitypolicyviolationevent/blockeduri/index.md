---
title: SecurityPolicyViolationEvent.blockedURI
slug: Web/API/SecurityPolicyViolationEvent/blockedURI
tags:
- API
- CSP
- Experimental
- HTTP
- Property
- Reference
- Security
- SecurityPolicyViolationEvent
browser-compat: api.SecurityPolicyViolationEvent.blockedURI
---
<div>{{APIRef("{{HTTPSidebar}}")}}{{ SeeCompatTable() }}</div>

<p>The <code><strong>blockedURI</strong></code> read-only property of the
  {{domxref("SecurityPolicyViolationEvent")}} interface is a {{domxref("USVString")}}
  representing the URI of the resource that was blocked because it violates a policy.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">let <var>blockedURI</var> = <var>violationEventInstance</var>.blockedURI;</pre>

<h3 id="Value">Value</h3>

<p>A {{domxref("USVString")}} representing the URI of the blocked resource.</p>

<h2 id="Example">Example</h2>

<pre class="brush: js">document.addEventListener("securitypolicyviolation", (e) =&gt; {
  console.log(e.blockedURI);
});</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/HTTP/CSP">Content Security Policy (CSP)</a></li>
</ul>
