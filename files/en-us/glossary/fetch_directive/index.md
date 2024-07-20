---
title: Fetch directive
slug: Glossary/Fetch_directive
page-type: glossary-definition
---

{{GlossarySidebar}}

**{{Glossary("CSP")}} fetch directives** are used in a {{HTTPHeader("Content-Security-Policy")}} header and control locations from which certain resource types may be loaded. For instance, {{CSP("script-src")}} allows developers to allow trusted sources of script to execute on a page, while {{CSP("font-src")}} controls the sources of web fonts.

All fetch directives fall back to {{CSP("default-src")}}. That means, if a fetch directive is absent in the CSP header, the user agent will look for the `default-src` directive.

See [Fetch directives](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#fetch_directives) for a complete list.

## See also

- Related glossary terms:
  - {{Glossary("CSP")}}
  - {{Glossary("Reporting directive")}}
  - {{Glossary("Document directive")}}
  - {{Glossary("Navigation directive")}}
- Reference
  - <https://www.w3.org/TR/CSP/#directives-fetch>
  - {{HTTPHeader("Content-Security-Policy/upgrade-insecure-requests", "upgrade-insecure-requests")}}
  - {{HTTPHeader("Content-Security-Policy/block-all-mixed-content", "block-all-mixed-content")}}
  - {{HTTPHeader("Content-Security-Policy")}}
