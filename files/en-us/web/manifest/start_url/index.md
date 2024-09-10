---
title: start_url
slug: Web/Manifest/start_url
page-type: web-manifest-member
browser-compat: html.manifest.start_url
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}

The `start_url` manifest member is used to specify the URL that should be loaded when a web application is launched.

a string that represents the _start URL of the web application_ — the preferred URL that should be loaded when the user launches the web application (e.g., when the user taps on the web application's icon from a device's application menu or homescreen).

> [!NOTE]
> The `start_url` member is purely advisory, and a user agent may ignore it or allow the user to alter it at install time or afterwards.

## Syntax

```json
"start_url": "<url>"
```

### Keys

- `start_url`
  - : A string that represents the starting URL of a web app.
    The value must be same-origin with the document that references the manifest.
    If the `start_url` is relative, it is resolved against the manifest URL.
    If the `start_url` is unspecified or invalid (e.g., not a string, not a valid URL, or not same-origin with the document), the document URL is used as a fallback.

## Examples

### Specifying an absolute starting URL

```json
"start_url": "https://example.com"
```

### Specifying a relative starting URL

If the URL is relative, the manifest URL is used as the base URL to resolve it.

```json
"start_url": "../startpoint.html"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also
