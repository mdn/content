---
title: "ChapterInformation: artwork property"
short-title: artwork
slug: Web/API/ChapterInformation/artwork
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.ChapterInformation.artwork
---

{{APIRef("Media Session API")}}{{SeeCompatTable}}

The **`artwork`** read-only property of the
{{domxref("ChapterInformation")}} interface returns an {{jsxref("Array")}} of objects representing images associated with the chapter.

## Value

An {{jsxref("Array")}} of objects. Each object contains the following properties:

- `src`
  - : A string representing the URL from which the user agent fetches the image's data.
- `sizes`
  - : A string representing one or more sizes for the resource. Its value can be the keyword `any` (representing a scalable vector format such as SVG), or a space-separated list of tokens in the format `<width in pixels>x<height in pixels>` or `<width in pixels>X<height in pixels>`. If multiple sizes are provided, the user agent can load the size most appropriate for the current context, provided those sizes are available in the linked resource.
- `type`
  - : A string representing a {{Glossary("MIME type")}} hint that allows the user agent to ignore image types that it doesn't support. However, the user agent may still use MIME-type sniffing after downloading the image to determine its type.

## Examples

See the main {{domxref("ChapterInformation")}} page for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ChapterInformation")}}
