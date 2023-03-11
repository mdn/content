---
title: SVGNumber
slug: Web/API/SVGNumber
page-type: web-api-interface
browser-compat: api.SVGNumber
---

{{APIRef("SVG")}}

The **`SVGNumber`** interface corresponds to the {{cssxref("&lt;number&gt;")}} basic data type.

An `SVGNumber` object can be designated as read only, which means that attempts to modify the object will result in an exception being thrown.

## Instance properties

- {{domxref("SVGNumber.value")}}

  - : A float representing the number.

    Note: If the `SVGNumber` is read-only, a {{domxref("DOMException")}} with the code NO_MODIFICATION_ALLOWED_ERR is raised on an attempt to change the value.

## Instance methods

_This interface doesn't provide any specific methods._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
