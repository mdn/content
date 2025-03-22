---
title: <url>
slug: Web/CSS/url_value
page-type: css-type
spec-urls: https://drafts.csswg.org/css-values/#url-value
---

{{CSSRef}}

The **`<url>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) is a pointer to a resource. The resource could be an image, a video, a CSS file, a font file, an SVG feature etc.

## Syntax

```plain
<url> = <url()>
```

### Values

The value is either of the following:

- [`<url()>`](/en-US/docs/Web/CSS/url_function)
  - : The `url()` function accepts only a URL literal string (with or without quotes).

> [!NOTE]
> The specification defines an alternative function called `src()` that accepts a URL string or a [CSS variable](/en-US/docs/Web/CSS/var). But no web browser has implemented the function yet.

## Specifications

{{Specifications}}

## See also

- {{cssxref("url_function", "url()")}}
