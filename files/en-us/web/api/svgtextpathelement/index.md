---
title: SVGTextPathElement
slug: Web/API/SVGTextPathElement
page-type: web-api-interface
browser-compat: api.SVGTextPathElement
---

{{APIRef("SVG")}}

The **`SVGTextPathElement`** interface corresponds to the {{SVGElement("textPath")}} element.

{{InheritanceDiagram}}

## Instance properties

_This interface also inherits properties from its parent interface, {{domxref("SVGTextContentElement")}}._

- {{domxref("SVGTextPathElement.href")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} corresponding to the {{SVGAttr("href")}} or {{SVGAttr("xlink:href")}} attribute of the given element.
- {{domxref("SVGTextPathElement.startOffset")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the X component of the {{SVGAttr("startOffset")}} attribute of the given element.
- {{domxref("SVGTextPathElement.method")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("method")}} attribute of the given element. It takes one of the `TEXTPATH_METHODTYPE_*` constants defined on this interface.
- {{domxref("SVGTextPathElement.spacing")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("spacing")}} attribute of the given element. It takes one of the `TEXTPATH_SPACINGTYPE_*` constants defined on this interface.

## Instance methods

_This interface does not provide any specific methods, but implements those of its parent, {{domxref("SVGTextContentElement")}}._

## Static properties

- `TEXTPATH_METHODTYPE_UNKNOWN` (0)
  - : The type is not one of predefined types. It is invalid to attempt to define a new value of this type or to attempt to switch an existing value to this type.
- `TEXTPATH_METHODTYPE_ALIGN` (1)
  - : Corresponds to the value `align`.
- `TEXTPATH_METHODTYPE_STRETCH` (2)
  - : Corresponds to the value `stretch`.
- `TEXTPATH_SPACINGTYPE_UNKNOWN` (0)
  - : The type is not one of predefined types. It is invalid to attempt to define a new value of this type or to attempt to switch an existing value to this type.
- `TEXTPATH_SPACINGTYPE_AUTO` (1)
  - : Corresponds to the value `auto`.
- `TEXTPATH_SPACINGTYPE_EXACT` (2)
  - : Corresponds to the value `exact`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("textPath")}}
