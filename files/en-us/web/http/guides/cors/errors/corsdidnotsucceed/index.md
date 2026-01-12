---
title: "Reason: CORS request did not succeed"
slug: Web/HTTP/Guides/CORS/Errors/CORSDidNotSucceed
page-type: http-cors-error
sidebar: http
---

## Reason

```plain
Reason: CORS request did not succeed
```

## What went wrong?

The {{Glossary("HTTP")}} request which makes use of CORS failed because the HTTP connection failed at either the network or protocol level. The error is not directly related to CORS, but is a fundamental network error of some kind.

In many cases, it is caused by a browser plugin (e.g., an ad blocker or privacy protector) blocking the request.

## How to fix

- Check DevTools > Network to see whether the request failed due to DNS resolution, a timeout,
  a connection being refused, or a TLS handshake error.
- Disable browser extensions or try a private browsing window, as ad blockers, firewalls,
  and privacy tools can block network requests.
- Fix certificate or {{Glossary("TLS")}} issues, such as expired or invalid certificates.
- Avoid mixed content: if the page is loaded over HTTPS, requests to HTTP resources can fail.
  Serve the API over HTTPS instead.
- Confirm that the server is responding correctly and that the endpoint returns a response.

If you are using `localhost`, ensure that the correct scheme and port are used and that the service is running.


Other possible causes include:

- Trying to access an `https` resource that has an invalid certificate will cause this error.
- Trying to access an `http` resource from a page with an `https` origin will also cause this error.
- From Firefox 68 to Firefox 84, `https` pages were not permitted to access `http://localhost`.
  This has been changed with [Bug 1488740](https://bugzil.la/1488740).
- The server did not respond to the actual request (even if it responded to the {{Glossary("Preflight request")}}).
  One scenario might be an HTTP service being developed that panicked without returning any data.
- The window is in "Private Browsing" mode (which may have security requirements that could block a CORS request).

## See also

- [CORS errors](/en-US/docs/Web/HTTP/Guides/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS introduction](/en-US/docs/Web/HTTP/Guides/CORS)
