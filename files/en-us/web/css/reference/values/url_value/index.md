---
title: <url>
slug: Web/CSS/Reference/Values/url_value
page-type: css-type
spec-urls: https://drafts.csswg.org/css-values/#url-value
sidebar: cssref
---

The **`<url>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/Reference/Values/Data_types) is a pointer to an absolute or relative resource. The resource could be an image, a video, a CSS file, a font file, an SVG feature, etc.

## Syntax

```plain
<url> = url( <link> )
```


### Values

The value is either of the following:

- [`<url()>`](/en-US/docs/Web/CSS/Reference/Values/url_function)
  - : The `url()` function accepts only a URL literal string (with or without quotes).

> [!NOTE]
> The [CSS values and units module](/en-US/docs/Web/CSS/Guides/Values_and_units) also introduces the `src()` function as a `<url>` value. Currently, no browser supports this feature.

## Description

The `<url>` data type, written with the [`url()`] function, represents a `URL`, which is a pointer to a resource. The internal or external resource can be an image, a video, a CSS file, a font file, an SVG feature etc. The URL may be absolute or relative.

### External resources and CORS

The ability to import external resources via the `<url>` value is implementation-defined and often restricted for security reasons.

Depending on the CSS property on which a `<url>` referencing external resources is applied, the resource may be subject to [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/HTTP/Guides/CORS) restrictions.

Some CSS properties, including {{cssxref("mask-image")}}, {{cssxref("filter")}}, {{cssxref("content")}}, and {{cssxref("border-image")}}, as well as {{cssxref("clip-path")}} when referring to {{htmlelement("svg")}} image elements, require successful CORS validation when loading external, cross-origin resources. If CORS validation fails, the resource is treated as though it failed to load.

Note that the `<url>` value type does not enforce CORS validation itself, but individual CSS properties do.

## Examples

## Specifications

{{Specifications}}

## See also

- {{cssxref("url_function", "url()")}}
