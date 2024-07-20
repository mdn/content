---
title: "Reason: CORS preflight channel did not succeed"
slug: Web/HTTP/CORS/Errors/CORSPreflightDidNotSucceed
page-type: http-cors-error
---

{{HTTPSidebar}}

## Reason

```plain
Reason: CORS preflight channel did not succeed
```

## What went wrong?

The {{Glossary("CORS")}} request requires preflight, preflighting could not be
performed. There are a couple of reasons why preflighting might fail:

- A cross-site request has previously been performed that already did a preflight, and
  doing the preflight again is not permitted. Make sure your code only preflights once
  per connection.
- The preflight request suffered any kind of networking error that might ordinarily
  occur.

## See also

- [CORS errors](/en-US/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS introduction](/en-US/docs/Web/HTTP/CORS)
