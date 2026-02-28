---
title: <url>
slug: Web/CSS/Reference/Values/url_value
page-type: css-type
spec-urls: https://drafts.csswg.org/css-values/#url-value
sidebar: cssref
---

The **`<url>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/Reference/Values/Data_types) is a pointer to a resource. The resource could be an image, a video, a CSS file, a font file, an SVG feature etc.

## Syntax

```plain
<url> = <url()>
```

### Values

The value is either of the following:

- [`<url()>`](/en-US/docs/Web/CSS/Reference/Values/url_function)
  - : The `url()` function accepts only a URL literal string (with or without quotes).

> [!NOTE]
> The specification defines an alternative function called `src()` that accepts a URL string or a [CSS variable](/en-US/docs/Web/CSS/Reference/Values/var). But no web browser has implemented the function yet.

## Specifications

{{Specifications}}

## Cross-origin restrictions

When a `<url>` references an external resource, the resource is subject to [Cross-origin restrictions](/en-US/docs/Web/HTTP/Guides/CORS).
CORS applies depending on the CSS property that uses the `<url>` value. Certain CSS features require successful CORS validation when loading cross-origin resources.

Examples:

- mask-image
- filter
- clip-path (when referring to an external SVG)
- content
- border-image

If CORS validation fails, the resource is treated as though it failed to load. `<url>` does not enforce CORS itself, but the property does.

## `file:` URLs

Support for `file:` URLs varies across browsers. Many browsers restrict or block it. This is due to security concerns. The behavior is implementation-defined and should not be used in production.

## See also

- {{cssxref("url_function", "url()")}}
