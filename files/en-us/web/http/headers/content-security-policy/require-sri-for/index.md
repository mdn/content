---
title: 'CSP: require-sri-for'
slug: Web/HTTP/Headers/Content-Security-Policy/require-sri-for
tags:
  - CSP
  - Directive
  - HTTP
  - Reference
  - Security
  - Subresource Integrity
  - require-sri-for
  - Deprecated
  - Non-standard
browser-compat: http.headers.Content-Security-Policy.require-sri-for
---
{{deprecated_header}}{{Non-standard_header}}

The [HTTP](/en-US/docs/Web/HTTP) {{HTTPHeader("Content-Security-Policy")}}
**`require-sri-for`** directive instructs the client to require
the use of [Subresource Integrity](/en-US/docs/Web/Security/Subresource_Integrity) for scripts or styles on the page.

## Syntax

```http
Content-Security-Policy: require-sri-for script;
Content-Security-Policy: require-sri-for style;
Content-Security-Policy: require-sri-for script style;
```

- `script`
  - : Requires {{Glossary("SRI")}} for scripts.
- `style`
  - : Requires {{Glossary("SRI")}} for style sheets.
- `script style`
  - : Requires {{Glossary("SRI")}} for both, scripts and style sheets.

## Examples

If you set your site to require SRI for script and styles using this directive:

```http
Content-Security-Policy: require-sri-for script style
```

{{HTMLElement("script")}} elements like the following will be loaded as they use a
valid integrity attribute.

```html example-good
<script src="https://code.jquery.com/jquery-3.1.1.slim.js"
        integrity="sha256-5i/mQ300M779N2OVDrl16lbohwXNUdzL/R2aVUXyXWA="
        crossorigin="anonymous"></script>
```

However, scripts without integrity won't load anymore:

```html example-bad
<script src="https://code.jquery.com/jquery-3.1.1.slim.js"></script>
```

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- [Subresource Integrity](/en-US/docs/Web/Security/Subresource_Integrity)
