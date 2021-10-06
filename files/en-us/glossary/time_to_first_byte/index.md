---
title: Time to first byte
slug: Glossary/time_to_first_byte
tags:
  - Glossary
  - Performance
  - Reference
  - Web Performance
---
<p><strong>Time to First Byte</strong> (TTFB) refers to the time between the browser requesting a page and when it receives the first byte of information from the server.  This time includes <a href="/en-US/docs/Glossary/DNS">DNS</a> lookup and establishing the connection using a <a href="/en-US/docs/Glossary/TCP">TCP</a> handshake and <a href="/en-US/docs/Glossary/SSL">SSL</a> handshake if the request is made over <a href="/en-US/docs/Glossary/https">https</a>.</p>

<p>TTFB is the time it takes between the start of the request and the start of the response, in milliseconds:</p>

<pre>TTFB = <a href="/en-US/docs/Web/API/PerformanceResourceTiming/responseStart">responseStart</a> - <a href="/en-US/docs/Web/API/PerformanceTiming/navigationStart">navigationStart</a></pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/HTTP/Session">A typical HTTP session</a></li>
 <li><a href="/en-US/docs/Web/API/PerformanceResourceTiming">PerformanceResourceTiming</a></li>
 <li><a href="/en-US/docs/Web/API/PerformanceTiming">PerformanceTiming</a></li>
</ul>
