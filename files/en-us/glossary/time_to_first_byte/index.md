---
title: Time to first byte
slug: Glossary/Time_to_first_byte
page-type: glossary-definition
---

{{GlossarySidebar}}

**Time to First Byte** (TTFB) refers to the time between the browser requesting a page and when it receives the first byte of information from the server. This time includes {{Glossary("DNS")}} lookup and establishing the connection using a {{Glossary("TCP")}} handshake and {{Glossary("TLS")}} handshake if the request is made over {{Glossary("HTTPS")}}.

TTFB is the time it takes between the start of the request and the start of the response, in milliseconds. This can be measured using the `{{domxref("PerformanceResourceTiming.requestStart", "requestStart")}}` attribute of {{domxref("PerformanceNavigationTiming")}}:

```javascript
const ttfb = performance.getEntriesByType("navigation")[0].responseStart;
```

> [!NOTE]
> For sites using {{HTTPStatus("103", "103 Early Hints")}}, TTFB is typically the _first bytes_ (after any redirects) — and so, the 103 interim response. Site owners wishing to measure the time until the final response should use `{{domxref("PerformanceResourceTiming.finalResponseHeadersStart", "finalResponseHeadersStart")}}`, where supported.

## See also

- [A typical HTTP session](/en-US/docs/Web/HTTP/Session)
- [PerformanceResourceTiming](/en-US/docs/Web/API/PerformanceResourceTiming)
- [PerformanceNavigationTiming](/en-US/docs/Web/API/PerformanceNavigationTiming)
