---
title: PerformanceServerTiming
slug: Web/API/PerformanceServerTiming
tags:
  - API
  - Interface
  - Reference
  - ServerTiming
browser-compat: api.PerformanceServerTiming
---
<div>{{APIRef("Resource Timing API")}} {{AvailableInWorkers}} {{securecontext_header}}</div>

<p>The <strong><code>PerformanceServerTiming</code></strong> interface surfaces server metrics that are sent with the response in the {{HTTPHeader("Server-Timing")}} HTTP header.</p>

<p>This interface is restricted to the same origin, but you can use the {{HTTPHeader("Timing-Allow-Origin")}} header to specify the domains that are allowed to access the server metrics. Note that this interface is only available in secure contexts (HTTPS) in some browsers.</p>

<h2 id="Properties">Properties</h2>

<dl>
 <dt>{{domxref('PerformanceServerTiming.description')}}{{readonlyInline}}</dt>
 <dd>A {{domxref("DOMString")}} value of the server-specified metric description, or an empty string.</dd>
 <dt>{{domxref('PerformanceServerTiming.duration')}}{{readonlyInline}}</dt>
 <dd>A double that contains the server-specified metric duration, or value <code>0.0</code>.</dd>
 <dt>{{domxref('PerformanceServerTiming.name')}}{{readonlyInline}}</dt>
 <dd>A {{domxref("DOMString")}} value of the server-specified metric name.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<dl>
 <dt>{{domxref('PerformanceServerTiming.toJSON()')}}</dt>
 <dd>Returns a {{domxref("DOMString")}} that is the JSON representation of the <code>PerformanceServerTiming</code> object.</dd>
</dl>

<h2 id="Example">Example</h2>

<p>Given a server that sends the {{HTTPHeader("Server-Timing")}} header, for example a node.js server like this:</p>

<pre class="brush: js">const http = require('http');

function requestHandler(request, response) {
  const headers = {
    'Server-Timing': `
      cache;desc="Cache Read";dur=23.2,
      db;dur=53,
      app;dur=47.2
    `.replace(/\n/g, '')
  };
  response.writeHead(200, headers);
  response.write('');
  return setTimeout(_ =&gt; {
   response.end();
 }, 1000)
};

http.createServer(requestHandler).listen(3000).on('error', console.error);</pre>

<p>The <code>PerformanceServerTiming</code> entries are now observable from JavaScript via the {{domxref("PerformanceResourceTiming.serverTiming")}} property:</p>

<pre class="brush: js">let entries = performance.getEntriesByType('resource');
console.log(entries[0].serverTiming);
// 0: PerformanceServerTiming {name: "cache", duration: 23.2, description: "Cache Read"}
// 1: PerformanceServerTiming {name: "db", duration: 53, description: ""}
// 2: PerformanceServerTiming {name: "app", duration: 47.2, description: ""}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{HTTPHeader("Server-Timing")}}</li>
 <li>{{domxref("PerformanceResourceTiming.serverTiming")}}</li>
</ul>
