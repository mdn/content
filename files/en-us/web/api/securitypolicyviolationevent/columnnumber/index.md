---
title: SecurityPolicyViolationEvent.columnNumber
slug: Web/API/SecurityPolicyViolationEvent/columnNumber
tags:
- API
- CSP
- Experimental
- HTTP
- Property
- Reference
- Security
- SecurityPolicyViolationEvent
- columnNumber
browser-compat: api.SecurityPolicyViolationEvent.columnNumber
---
<div>{{APIRef("{{HTTPSidebar}}")}}{{ SeeCompatTable() }}</div>

<p>The <code><strong>columnNumber</strong></code> read-only property of the
  {{domxref("SecurityPolicyViolationEvent")}} interface is the column number in the
  document or worker at which the violation occurred.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">let <var>colNum</var> = <var>violationEventInstance</var>.columnNumber;</pre>

<h3 id="Value">Value</h3>

<p>A number representing the column number where the violation occurred.</p>

<h2 id="Example">Example</h2>

<pre class="brush: js">document.addEventListener("securitypolicyviolation", (e) =&gt; {
  console.log(e.columnNumber);
});</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/HTTP/CSP">Content Security Policy (CSP)</a></li>
</ul>
