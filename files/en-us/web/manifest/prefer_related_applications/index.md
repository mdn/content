---
title: prefer_related_applications
slug: Web/Manifest/prefer_related_applications
page-type: web-manifest-member
status:
  - experimental
browser-compat: html.manifest.prefer_related_applications
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}{{SeeCompatTable}}

The `prefer_related_applications` member is a boolean value that specifies that applications listed in [`related_applications`](/en-US/docs/Web/Manifest/related_applications) should be preferred over the web application. If the `prefer_related_applications` member is set to `true`, the user agent might suggest installing one of the related applications instead of this web app.

If omitted, `prefer_related_applications` defaults to `false`.

## Syntax

```json
"prefer_related_applications": true
```

## Examples

```json
"prefer_related_applications": true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
