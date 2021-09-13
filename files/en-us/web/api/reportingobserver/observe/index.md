---
title: ReportingObserver.observe()
slug: Web/API/ReportingObserver/observe
tags:
- API
- Experimental
- Method
- Reference
- Reporting API
- ReportingObserver
- observe
browser-compat: api.ReportingObserver.observe
---
<div>{{APIRef("Reporting API")}}{{SeeCompatTable}}</div>

<p>The <strong><code>observe()</code></strong> method of the
  {{domxref("ReportingObserver")}} interface instructs a reporting observer to start
  collecting reports in its report queue.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>reportingObserverInstance</em>.observe()
</pre>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">let options = {
  types: ['deprecation'],
  buffered: true
}

let observer = new ReportingObserver(function(reports, observer) {
  reportBtn.onclick = () =&gt; displayReports(reports);
}, options);

observer.observe()
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Reporting_API">Reporting API</a></li>
</ul>
