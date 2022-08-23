---
title: SVGStyleElement.type
slug: Web/API/SVGStyleElement/type
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - SVG
  - SVG DOM
  - Deprecated
browser-compat: api.SVGStyleElement.type
---
{{APIRef("SVG")}} {{Deprecated_Header}}

The **`SVGStyleElement.type`** property returns the type of the current style.
The value reflects the associated SVG `<style>` element's [`type`](/en-US/docs/Web/SVG/Element/style#type) attribute.

Authors should not use this property or rely on the value.

## Value

The permitted values are an empty string or a case-insensitive match for "text/css".

## Exceptions

SVG 1.1 defined that a {{domxref("DOMException")}} is raised with code `NO_MODIFICATION_ALLOWED_ERR` on an attempt to change the value of a read-only attribute.
This restriction was removed in SVG 2.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLStyleElement.type")}}
