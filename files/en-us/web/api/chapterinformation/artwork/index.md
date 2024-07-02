---
title: "ChapterInformation: artwork property"
short-title: artwork
slug: Web/API/ChapterInformation/artwork
page-type: web-api-instance-property
browser-compat: api.ChapterInformation.artwork
---

{{APIRef("Media Session API")}}

The **`artwork`** read-only property of the
{{domxref("ChapterInformation")}} interface returns an {{jsxref("Array")}} of objects representing images associated with the chapter.

## Value

An {{jsxref("Array")}} of objects. Each object contains the following properties:

- `src`
  - : The URL from which the user agent fetches the image's data.
- `sizes`
  - : Specifies the size of the resource in multiple sizes so the user agent can determine what size is most appropriate for different contexts.
- `type`
  - : The {{Glossary("MIME type")}} hint for the user agent that allows it to ignore images of types that it doesn't support. However, the user agent may still use MIME type sniffing after downloading the image to determine its type.

## Examples

See the main {{domxref("ChapterInformation")}} page for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ChapterInformation")}}
