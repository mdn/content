---
title: SVGPathElement
slug: Web/API/SVGPathElement
page-type: web-api-interface
tags:
  - API
  - NeedsExample
  - Reference
  - SVG
  - SVG DOM
browser-compat: api.SVGPathElement
---
{{APIRef("SVG")}}

The **`SVGPathElement`** interface corresponds to the {{SVGElement("path")}} element.

{{InheritanceDiagram}}

> **Note:** In SVG 2 the `getPathSegAtLength()` and `createSVGPathSeg*` methods were removed and the `pathLength` property and the `getTotalLength()` and `getPointAtLength()` methods were moved to {{domxref("SVGGeometryElement")}}.

## Properties

_This interface inherits properties from its parent, {{domxref("SVGGeometryElement")}}._

## Methods

_This interface also inherits methods from its parent, {{domxref("SVGGeometryElement")}}._

- {{domxref("SVGPathElement.getPathSegAtLength()")}} {{deprecated_inline}}
  - : Returns an unsigned long representing the index within the {{domxref("SVGAnimatedPathData.pathSegList", "pathSegList")}} utilizing the user agent's distance-along-a-path algorithm.
- {{domxref("SVGPathElement.createSVGPathSegClosePath()")}} {{deprecated_inline}}
  - : Returns a stand-alone, parentless {{domxref("SVGPathSegClosePath")}} object.
- {{domxref("SVGPathElement.createSVGPathSegMovetoAbs()")}} {{deprecated_inline}}
  - : Returns a stand-alone, parentless {{domxref("SVGPathSegMovetoAbs")}} object.
- {{domxref("SVGPathElement.createSVGPathSegMovetoRel()")}} {{deprecated_inline}}
  - : Returns a stand-alone, parentless {{domxref("SVGPathSegMovetoRel")}} object.
- {{domxref("SVGPathElement.createSVGPathSegLinetoAbs()")}} {{deprecated_inline}}
  - : Returns a stand-alone, parentless {{domxref("SVGPathSegLinetoAbs")}} object.
- {{domxref("SVGPathElement.createSVGPathSegLinetoRel()")}} {{deprecated_inline}}
  - : Returns a stand-alone, parentless {{domxref("SVGPathSegLinetoRel")}} object.
- {{domxref("SVGPathElement.createSVGPathSegCurvetoCubicAbs()")}} {{deprecated_inline}}
  - : Returns a stand-alone, parentless {{domxref("SVGPathSegCurvetoCubicAbs")}} object.
- {{domxref("SVGPathElement.createSVGPathSegCurvetoCubicRel()")}} {{deprecated_inline}}
  - : Returns a stand-alone, parentless {{domxref("SVGPathSegCurvetoCubicRel")}} object.
- {{domxref("SVGPathElement.createSVGPathSegCurvetoQuadraticAbs()")}} {{deprecated_inline}}
  - : Returns a stand-alone, parentless {{domxref("SVGPathSegCurvetoQuadraticAbs")}} object.
- {{domxref("SVGPathElement.createSVGPathSegCurvetoQuadraticRel()")}} {{deprecated_inline}}
  - : Returns a stand-alone, parentless {{domxref("SVGPathSegCurvetoQuadraticRel")}} object.
- {{domxref("SVGPathElement.createSVGPathSegArcAbs()")}} {{deprecated_inline}}
  - : Returns a stand-alone, parentless {{domxref("SVGPathSegArcAbs")}} object.
- {{domxref("SVGPathElement.createSVGPathSegArcRel()")}} {{deprecated_inline}}
  - : Returns a stand-alone, parentless {{domxref("SVGPathSegArcRel")}} object.
- {{domxref("SVGPathElement.createSVGPathSegLinetoHorizontalAbs()")}} {{deprecated_inline}}
  - : Returns a stand-alone, parentless {{domxref("SVGPathSegLinetoHorizontalAbs")}} object.
- {{domxref("SVGPathElement.createSVGPathSegLinetoHorizontalRel()")}} {{deprecated_inline}}
  - : Returns a stand-alone, parentless {{domxref("SVGPathSegLinetoHorizontalRel")}} object.
- {{domxref("SVGPathElement.createSVGPathSegLinetoVerticalAbs()")}} {{deprecated_inline}}
  - : Returns a stand-alone, parentless {{domxref("SVGPathSegLinetoVerticalAbs")}} object.
- {{domxref("SVGPathElement.createSVGPathSegLinetoVerticalRel()")}} {{deprecated_inline}}
  - : Returns a stand-alone, parentless {{domxref("SVGPathSegLinetoVerticalRel")}} object.
- {{domxref("SVGPathElement.createSVGPathSegCurvetoCubicSmoothAbs()")}} {{deprecated_inline}}
  - : Returns a stand-alone, parentless {{domxref("SVGPathSegCurvetoCubicSmoothAbs")}} object.
- {{domxref("SVGPathElement.createSVGPathSegCurvetoCubicSmoothRel()")}} {{deprecated_inline}}
  - : Returns a stand-alone, parentless {{domxref("SVGPathSegCurvetoCubicSmoothRel")}} object.
- {{domxref("SVGPathElement.createSVGPathSegCurvetoQuadraticSmoothAbs()")}} {{deprecated_inline}}
  - : Returns a stand-alone, parentless {{domxref("SVGPathSegCurvetoQuadraticSmoothAbs")}} object.
- {{domxref("SVGPathElement.createSVGPathSegCurvetoQuadraticSmoothRel()")}} {{deprecated_inline}}
  - : Returns a stand-alone, parentless {{domxref("SVGPathSegCurvetoQuadraticSmoothRel")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("path")}} SVG Element
