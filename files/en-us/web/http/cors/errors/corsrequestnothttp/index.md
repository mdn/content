---
title: 'Reason: CORS request not HTTP'
slug: Web/HTTP/CORS/Errors/CORSRequestNotHttp
tags:
  - CORS
  - CORSRequestNotHttp
  - Cross-Origin
  - Error
  - HTTP
  - HTTPS
  - Messages
  - Reasons
  - Security
  - console
  - troubleshooting
---
{{HTTPSidebar}}

## Reason

```
Reason: CORS request not HTTP
```

## What went wrong?

{{Glossary("CORS")}} requests may only use the HTTP or HTTPS URL scheme, but the URL specified by the request is of a different type.
This often occurs if the URL specifies a local file, using the `file:///` scheme.

To fix this problem, make sure you use HTTPS URLs when issuing requests involving CORS, such as {{domxref("XMLHttpRequest")}}, [Fetch](/en-US/docs/Web/API/Fetch_API) APIs, Web Fonts (`@font-face`), and [WebGL textures](/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL), and XSL stylesheets.

### Loading a local file

Local files from the same directory and subdirectories were historically treated as being from the [same origin](/en-US/docs/Web/Security/Same-origin_policy).
This meant that a file and all its resources could be loaded from a local directory or subdirectory during testing, without triggering a CORS error.

Unfortunately this had security implications, as noted in this advisory: [CVE-2019-11730](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730).
Many browsers, including Firefox and Chrome, now treat all local files as having _opaque origins_ (by default).
As a result, loading a local file with included local resources will now result in CORS errors.

Developers who need to perform local testing should now [set up a local server](/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server).
As all files are served from the same scheme and domain (`localhost`) they all have the same origin, and do not trigger cross-origin errors.

> **Note:** This change is in line with the [URL specification](https://url.spec.whatwg.org/#origin), which leaves the origin behavior for files to the implementation, but recommends that file origins are treated as opaque if in doubt.

## See also

- [CORS errors](/en-US/docs/Web/HTTP/CORS/Errors)
- [CORS introduction](/en-US/docs/Web/HTTP/CORS)
- [What is a URL?](/en-US/docs/Learn/Common_questions/What_is_a_URL)
