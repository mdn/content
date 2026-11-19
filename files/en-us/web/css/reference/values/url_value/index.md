---
title: "`<url>` CSS type"
short-title: <url>
slug: Web/CSS/Reference/Values/url_value
page-type: css-type
spec-urls: https://drafts.csswg.org/css-values/#url-value
sidebar: cssref
---

The **`<url>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/Reference/Values/Data_types) is a pointer to a resource.

## Properties

The `<url>` data type is a accepted as a value for the following CSS properties:

- {{cssxref("backdrop-filter")}}
- {{cssxref("background")}}
- {{cssxref("background-image")}}
- {{cssxref("background-tbd")}}
- {{cssxref("bookmark-label")}}
- {{cssxref("border-image")}}
- {{cssxref("border-image-source")}}
- {{cssxref("clip-path")}}
- {{cssxref("content")}}
- {{cssxref("cue")}}
- {{cssxref("cue-after")}}
- {{cssxref("cue-before")}}
- {{cssxref("cursor")}}
- {{cssxref("fill")}}
- {{cssxref("fill-image")}}
- {{cssxref("filter")}}
- {{cssxref("list-style")}}
- {{cssxref("list-style-image")}}
- {{cssxref("marker")}}
- {{cssxref("marker-end")}}
- {{cssxref("marker-mid")}}
- {{cssxref("marker-start")}}
- {{cssxref("mask")}}
- {{cssxref("mask-border")}}
- {{cssxref("mask-border-source")}}
- {{cssxref("mask-image")}}
- {{cssxref("offset")}}
- {{cssxref("offset-path")}}
- {{cssxref("shape-inside")}}
- {{cssxref("shape-outside")}}
- {{cssxref("stroke")}}
- {{cssxref("stroke-image")}}

## Syntax

```plain
<url> = url()
```

### Values

The value may be an absolute or relative URL or a data {{glossary("URI")}}.

- [`<url()>`](/en-US/docs/Web/CSS/Reference/Values/url_function)
  - : The `url()` function accepts a URL, which may be written as a quoted string or as an unquoted URL token.

> [!NOTE]
> The [CSS values and units module](/en-US/docs/Web/CSS/Guides/Values_and_units) also introduces the `src()` function as a `<url>` value. Currently, no browser supports this feature.

## Description

The `<url>` data type, written with the [`url()`](/en-US/docs/Web/CSS/Reference/Values/url_function) function, represents a `URL`, which is a pointer to an internal or external resource, or a data URI representation of the resource. The resource can be an image, a video, a CSS file, a font file, an SVG feature, etc. The URL may be absolute or relative.

```css
/* Relative URL */
url("styles.css")
url("assets/icon.svg")
url("../assets/image.png")

/* Absolute URL */
url("http://example.com/fonts/myFont.woff2")
url("https://example.com/images/background.jpg")

/* Data URL */
url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10h60' stroke='%2300F' stroke-width='5'/%3E%3Cpath d='M10 20h60' stroke='%230F0' stroke-width='5'/%3E%3C/svg%3E")
url("data:image/png;base64,iVBORw0KGgoAAA...")
```

### External resources and CORS

The ability to import external resources via the `<url>` value is implementation-defined and often restricted for security reasons.

Depending on the CSS property on which a `<url>` referencing external resources is applied, the resource may be subject to [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/HTTP/Guides/CORS) restrictions.

Some CSS properties, including {{cssxref("mask-image")}}, {{cssxref("filter")}}, as well as {{cssxref("clip-path")}} and a few others when referring to {{SVGElement("svg")}} image elements, may require successful CORS validation when they cause external, cross-origin resources to be fetched in CORS mode. If CORS validation fails, the resource may be blocked and therefore not used for rendering.

Note that the `<url>` value type does not enforce CORS validation itself, but individual CSS properties do.

When opening an HTML file directly with `file://`, resources may fail because CORS rules apply locally. Modern browsers treat `file://` as a unique origin, meaning cross-file resources can get blocked. In this case, an [HTTP server](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) may be hosted to avoid CORS errors. The security behavior of `file://` URLs also varies depending on the browser and the operating system's file permissions.

## Examples

### Data URI

This example demonstrates including a data URI to include an SVG as a background image.

#### HTML

Our HTML includes a single element that will with style with CSS:

```html
<p>This has a background image</p>
```

#### CSS

We provide some basic styles, then set use the `url()` function as the {{cssxref("background-image")}} property value to define an SVG as the background image.

```css
p {
  font: 2rem sans-serif;
  border: 1px dashed;

  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'M5%2C100L100%2C100%20L100%2C5L5%2C5z'%20fill%3D'pink'%2F%3E%3C%2Fsvg%3E");
}
```

The SVG is the markup`<svg xmlns="http://www.w3.org/2000/svg"><path d="M5,100L100,100 L100,5L5,5z" fill="pink"/></svg>` escaped. Note the `xmlns` attribute is necessary when including SVGs as background and border images.

#### Result

{{EmbedLiveSample("Data URI", "100%", "100")}}

## Specifications

{{Specifications}}

## See also

- {{cssxref("url_function", "url()")}}
