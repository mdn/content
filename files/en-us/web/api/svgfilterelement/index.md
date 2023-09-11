---
title: SVGFilterElement
slug: Web/API/SVGFilterElement
page-type: web-api-interface
browser-compat: api.SVGFilterElement
---

{{APIRef("SVG")}}

The **`SVGFilterElement`** interface provides access to the properties of {{SVGElement("filter")}} elements, as well as methods to manipulate them.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("SVGFilterElement.href")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} that corresponds to the {{SVGAttr("href")}} or {{SVGAttr("xlink:href")}} {{deprecated_inline}} attribute of the given {{SVGElement("filter")}} element.
- {{domxref("SVGFilterElement.filterUnits")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} that corresponds to the {{SVGAttr("filterUnits")}} attribute of the given {{SVGElement("filter")}} element. Takes one of the constants defined in {{domxref("SVGUnitTypes")}}.
- {{domxref("SVGFilterElement.primitiveUnits")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} that corresponds to the {{SVGAttr("primitiveUnits")}} attribute of the given {{SVGElement("filter")}} element. Takes one of the constants defined in {{domxref("SVGUnitTypes")}}.
- {{domxref("SVGFilterElement.x")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} that corresponds to the {{SVGAttr("x")}} attribute on the given {{SVGElement("filter")}} element.
- {{domxref("SVGFilterElement.y")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} that corresponds to the {{SVGAttr("y")}} attribute of the given {{SVGElement("filter")}} element.
- {{domxref("SVGFilterElement.width")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} that corresponds to the {{SVGAttr("width")}} attribute of the given {{SVGElement("filter")}} element.
- {{domxref("SVGFilterElement.height")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} that corresponds to the {{SVGAttr("height")}} attribute of the given {{SVGElement("filter")}} element.
- {{domxref("SVGFilterElement.filterResX")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : An {{domxref("SVGAnimatedInteger")}} that contains the X component of the {{SVGAttr("filterRes")}} attribute of the given {{SVGElement("filter")}} element.
- {{domxref("SVGFilterElement.filterResY")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : An {{domxref("SVGAnimatedInteger")}} that contains the Y component of the {{SVGAttr("filterRes")}} attribute of the given {{SVGElement("filter")}} element.

## Instance methods

- {{domxref("SVGFilterElement.setFilterRes()")}} {{deprecated_inline}}
  - : Sets the values of the {{SVGAttr("filterRes")}} attribute.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("filter")}}
