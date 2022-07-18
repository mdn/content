---
title: Time to first byte
slug: Glossary/time_to_first_byte
tags:
  - Glossary
  - Performance
  - Reference
  - Web Performance
---
**Time to First Byte** (TTFB) refers to the time between the browser requesting a page and when it receives the first byte of information from the server.  This time includes [DNS](/en-US/docs/Glossary/DNS) lookup and establishing the connection using a [TCP](/en-US/docs/Glossary/TCP) handshake and [SSL](/en-US/docs/Glossary/SSL) handshake if the request is made over [https](/en-US/docs/Glossary/https).

TTFB is the time it takes between the start of the request and the start of the response, in milliseconds:

```
TTFB = responseStart - navigationStart
```

## See also

- [A typical HTTP session](/en-US/docs/Web/HTTP/Session)
- [PerformanceResourceTiming](/en-US/docs/Web/API/PerformanceResourceTiming)
- [PerformanceTiming](/en-US/docs/Web/API/PerformanceTiming)
