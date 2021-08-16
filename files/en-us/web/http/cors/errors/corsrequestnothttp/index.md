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

{{Glossary("CORS")}} requests may only use the HTTPS URL scheme, but the URL specified
by the request is of a different type. This often occurs if the URL specifies a local
file, using a `file:///` URL.

To fix this problem, make sure you use HTTPS URLs when issuing requests involving CORS,
such as {{domxref("XMLHttpRequest")}}, [Fetch](/en-US/docs/Web/API/Fetch_API)
APIs, Web Fonts (`@font-face`), and [WebGL
textures](/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL), and XSL stylesheets.

### Local File Security in Firefox 68

When a user opened a page using a `file:///` URI in Firefox 67 and earlier,
the origin of the page was defined as the directory from which the page was opened.
Resources in the same directory and its subdirectories were treated as having the same
origin for purposes of the CORS same-origin rule.

In response to [CVE-2019-11730](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730),
Firefox 68 and later define the origin of a page opened using a `file:///`
URI as unique. Therefore, other resources in the same directory or its subdirectories no
longer satisfy the CORS same-origin rule. This new behavior is enabled by default using
the `privacy.file_unique_origin` preference.

## See also

- [CORS errors](/en-US/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS introduction](/en-US/docs/Web/HTTP/CORS)
- [What is a URL?](/en-US/docs/Learn/Common_questions/What_is_a_URL)
