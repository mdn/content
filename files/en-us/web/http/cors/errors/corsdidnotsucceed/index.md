---
title: "Reason: CORS request did not succeed"
slug: Web/HTTP/CORS/Errors/CORSDidNotSucceed
page-type: http-cors-error
---

{{HTTPSidebar}}

## Reason

```plain
Reason: CORS request did not succeed
```

## What went wrong?

The {{Glossary("HTTP")}} request which makes use of CORS failed because the HTTP
connection failed at either the network or protocol level. The error is not directly
related to CORS, but is a fundamental network error of some kind.

In many cases, it is caused by a browser plugin (e.g. an ad blocker or privacy
protector) blocking the request.

Other possible causes include:

- Trying to access an `https` resource that has an invalid certificate will
  cause this error.
- Trying to access an `http` resource from a page with an
  `https` origin will also cause this error.
- As of Firefox 68, `https` pages are not permitted to access
  `http://localhost`, although this may be changed by [Bug 1488740](https://bugzil.la/1488740).
- The server did not respond to the actual request (even if it responded to the
  {{Glossary("Preflight request")}}). One scenario might be an HTTP service being
  developed that panicked without returning any data.

## See also

- [CORS errors](/en-US/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS introduction](/en-US/docs/Web/HTTP/CORS)
