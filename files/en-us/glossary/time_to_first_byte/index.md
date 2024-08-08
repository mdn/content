---
title: Time to first byte
slug: Glossary/Time_to_first_byte
page-type: glossary-definition
---

{{GlossarySidebar}}

**Time to First Byte** (TTFB) refers to the time between the browser requesting a page and when it receives the first byte of information from the server. This time includes {{Glossary("DNS")}} lookup and establishing the connection using a {{Glossary("TCP")}} handshake and {{Glossary("TLS")}} handshake if the request is made over {{Glossary("HTTPS")}}.

TTFB is the time it takes between the start of the request and the start of the response, in milliseconds:

```plain
TTFB = responseStart - navigationStart
```

## See also

- [A typical HTTP session](/en-US/docs/Web/HTTP/Session)
- [PerformanceResourceTiming](/en-US/docs/Web/API/PerformanceResourceTiming)
- [PerformanceTiming](/en-US/docs/Web/API/PerformanceTiming)
