---
title: <url>
slug: Web/CSS/url_value
page-type: css-type
spec-urls: https://drafts.csswg.org/css-values/#url-value
---

{{CSSRef}}

The **`<url>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) is a pointer to a resource. The resource could be an image, a video, a CSS file, a font file, an SVG feature etc.

## Syntax

```plain
<url> = <url()> | <src()>
```

### Values

The value is either of the following:

- [`<url()>`](/en-US/docs/Web/CSS/url_function)
  - : The `url()` function accepts only a URL literal string (with or without quotes).
- `<src()>`
  - : This function can accept a URL string or a [CSS variable](/en-US/docs/Web/CSS/var).

## Specifications

{{Specifications}}

## See also

- {{cssxref("url_function", "url()")}}
