---
title: Report.url
slug: Web/API/Report/url
tags:
- API
- Experimental
- Property
- Reference
- Report
- Reporting API
- URL
browser-compat: api.Report.url
---
<div>{{APIRef("Reporting API")}}{{SeeCompatTable}}</div>

<p>The <code><strong>url</strong></code> read-only property of the {{domxref("Report")}}
  interface returns the URL of the document that generated the report.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">let reportURL = reportInstance.url
</pre>

<h3 id="Returns">Returns</h3>

<p>A string representing the URL of the document that generated the report.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">let options = {
  types: ['deprecation'],
  buffered: true
}

let observer = new ReportingObserver(function(reports, observer) {
  let firstReport = reports[0];
  // Log the URL of the document that generated the first report
  // e.g. "https://www.example.com/cats.html"
  console.log(firstReport.url);
}, options);
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Reporting_API">Reporting API</a></li>
</ul>
