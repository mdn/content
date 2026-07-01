---
title: "SVGImageElement: crossOrigin property"
short-title: crossOrigin
slug: Web/API/SVGImageElement/crossOrigin
page-type: web-api-instance-property
browser-compat: api.SVGImageElement.crossOrigin
---

{{APIRef("SVG")}}

The **`crossOrigin`** property of the {{domxref("SVGImageElement")}} interface is a string which specifies the Cross-Origin Resource Sharing ({{Glossary("CORS")}}) setting to use when retrieving the image. It reflects the {{SVGAttr("crossorigin")}} content attribute of the given {{SVGElement("image")}} element.

## Value

A string which specifies the CORS mode used when fetching the image resource. Valid values are `"anonymous"` or `"use-credentials"`. If the `crossOrigin` property is set to any other value, it is the same as specifying `"anonymous"`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLImageElement.crossOrigin")}}
- {{domxref("HTMLMediaElement.crossOrigin")}}
