---
title: SVG API 
slug: Web/API/SVG_API
tags:
  - API
  - SVG
  - Guide
  - Overview
  - Reference
  - Web
---
{{DefaultAPISidebar("SVG")}}

SVG provides elements for circles, rectangles, and simple and complex curves. The elements' attribute values specify how these must be drawn. The **SVG API** is the subset of the **DOM** connecting these SVG elements and their attribute values to scripts or programming languages by representing them in memory. The SVG API thus provides methods that allow programmatic access to the SVG Elements and their attribute values.

The SVG API is a set of interfaces that have been categorized into the following broad categories:-
1. [The Element interfaces](#svg_element_interfaces) provide access to the properties of SVG elements and methods to manipulate them.
2. [The Static data type](#svg_data_type_interfaces) Interfaces provide access to element attribute values and methods to manipulate them.
3. For attributes that can be animated the [Animated data type interfaces](#svg_data_type_interfaces) provide read only access to the current animated value of an attribute.
4. [The Synchronized Multimedia Integration Language (SMIL) interfaces](#smil-related_interfaces)
5. [Others](#other_svg_interfaces)

## Interfaces

### SVG element interfaces

- {{DOMxRef("SVGAElement")}}
- {{DOMxRef("SVGAltGlyphElement")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGAltGlyphDefElement")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGAltGlyphItemElement")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGAnimationElement")}}
- {{DOMxRef("SVGAnimateElement")}}
- {{DOMxRef("SVGAnimateColorElement")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGAnimateMotionElement")}}
- {{DOMxRef("SVGAnimateTransformElement")}}
- {{DOMxRef("SVGCircleElement")}}
- {{DOMxRef("SVGClipPathElement")}}
- {{DOMxRef("SVGComponentTransferFunctionElement")}}
- {{DOMxRef("SVGCursorElement")}}
- {{DOMxRef("SVGDefsElement")}}
- {{DOMxRef("SVGDescElement")}}
- {{DOMxRef("SVGElement")}}
- {{DOMxRef("SVGEllipseElement")}}
- {{DOMxRef("SVGFEBlendElement")}}
- {{DOMxRef("SVGFEColorMatrixElement")}}
- {{DOMxRef("SVGFEComponentTransferElement")}}
- {{DOMxRef("SVGFECompositeElement")}}
- {{DOMxRef("SVGFEConvolveMatrixElement")}}
- {{DOMxRef("SVGFEDiffuseLightingElement")}}
- {{DOMxRef("SVGFEDisplacementMapElement")}}
- {{DOMxRef("SVGFEDistantLightElement")}}
- {{DOMxRef("SVGFEDropShadowElement")}}
- {{DOMxRef("SVGFEFloodElement")}}
- {{DOMxRef("SVGFEFuncAElement")}}
- {{DOMxRef("SVGFEFuncBElement")}}
- {{DOMxRef("SVGFEFuncGElement")}}
- {{DOMxRef("SVGFEFuncRElement")}}
- {{DOMxRef("SVGFEGaussianBlurElement")}}
- {{DOMxRef("SVGFEImageElement")}}
- {{DOMxRef("SVGFEMergeElement")}}
- {{DOMxRef("SVGFEMergeNodeElement")}}
- {{DOMxRef("SVGFEMorphologyElement")}}
- {{DOMxRef("SVGFEOffsetElement")}}
- {{DOMxRef("SVGFEPointLightElement")}}
- {{DOMxRef("SVGFESpecularLightingElement")}}
- {{DOMxRef("SVGFESpotLightElement")}}
- {{DOMxRef("SVGFETileElement")}}
- {{DOMxRef("SVGFETurbulenceElement")}}
- {{DOMxRef("SVGFilterElement")}}
- {{DOMxRef("SVGFilterPrimitiveStandardAttributes")}}
- {{DOMxRef("SVGFontElement")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGFontFaceElement")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGFontFaceFormatElement")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGFontFaceNameElement")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGFontFaceSrcElement")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGFontFaceUriElement")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGForeignObjectElement")}}
- {{DOMxRef("SVGGElement")}}
- {{DOMxRef("SVGGeometryElement")}}
- {{DOMxRef("SVGGlyphElement")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGGlyphRefElement")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGGradientElement")}}
- {{DOMxRef("SVGGraphicsElement")}}
- {{DOMxRef("SVGHatchElement")}} {{Experimental_Inline}}
- {{DOMxRef("SVGHatchpathElement")}} {{Experimental_Inline}}
- {{DOMxRef("SVGHKernElement")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGImageElement")}}
- {{DOMxRef("SVGLinearGradientElement")}}
- {{DOMxRef("SVGLineElement")}}
- {{DOMxRef("SVGMarkerElement")}} {{Experimental_Inline}}
- {{DOMxRef("SVGMaskElement")}}
- {{DOMxRef("SVGMetadataElement")}}
- {{DOMxRef("SVGMissingGlyphElement")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGMPathElement")}}
- {{DOMxRef("SVGPathElement")}}
- {{DOMxRef("SVGPatternElement")}}
- {{DOMxRef("SVGPolylineElement")}}
- {{DOMxRef("SVGPolygonElement")}}
- {{DOMxRef("SVGRadialGradientElement")}}
- {{DOMxRef("SVGRectElement")}}
- {{DOMxRef("SVGScriptElement")}}
- {{DOMxRef("SVGSetElement")}}
- {{DOMxRef("SVGStopElement")}}
- {{DOMxRef("SVGStyleElement")}}
- {{DOMxRef("SVGSVGElement")}}
- {{DOMxRef("SVGSwitchElement")}}
- {{DOMxRef("SVGSymbolElement")}}
- {{DOMxRef("SVGTextContentElement")}}
- {{DOMxRef("SVGTextElement")}}
- {{DOMxRef("SVGTextPathElement")}}
- {{DOMxRef("SVGTextPositioningElement")}}
- {{DOMxRef("SVGTitleElement")}}
- {{DOMxRef("SVGTRefElement")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGTSpanElement")}}
- {{DOMxRef("SVGUseElement")}}
- {{DOMxRef("SVGViewElement")}}
- {{DOMxRef("SVGVKernElement")}} {{Deprecated_Inline}}

### SVG data type interfaces

Here are the DOM APIs for data types used in the definitions of SVG properties and attributes.

#### Static type

- {{DOMxRef("SVGAngle")}}
- {{DOMxRef("SVGColor")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGICCColor")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGElementInstance")}}
- {{DOMxRef("SVGElementInstanceList")}}
- {{DOMxRef("SVGLength")}}
- {{DOMxRef("SVGLengthList")}}
- {{DOMxRef("SVGMatrix")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGNameList")}}
- {{DOMxRef("SVGNumber")}}
- {{DOMxRef("SVGNumberList")}}
- {{DOMxRef("SVGPaint")}}
- {{DOMxRef("SVGPathSeg")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegClosePath")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegMovetoAbs")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegMovetoRel")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegLinetoAbs")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegLinetoRel")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegCurvetoCubicAbs")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegCurvetoCubicRel")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegCurvetoQuadraticAbs")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegCurvetoQuadraticRel")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegArcAbs")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegArcRel")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegLinetoHorizontalAbs")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegLinetoHorizontalRel")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegLinetoVerticalAbs")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegLinetoVerticalRel")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegCurvetoCubicSmoothAbs")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegCurvetoCubicSmoothRel")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegCurvetoQuadraticSmoothAbs")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegCurvetoQuadraticSmoothRel")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPathSegList")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPoint")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPointList")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGPreserveAspectRatio")}}
- {{DOMxRef("SVGRect")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGStringList")}}
- {{DOMxRef("SVGTransform")}}
- {{DOMxRef("SVGTransformList")}}

#### Animated type

- {{DOMxRef("SVGAnimatedAngle")}}
- {{DOMxRef("SVGAnimatedBoolean")}}
- {{DOMxRef("SVGAnimatedEnumeration")}}
- {{DOMxRef("SVGAnimatedInteger")}}
- {{DOMxRef("SVGAnimatedLength")}}
- {{DOMxRef("SVGAnimatedLengthList")}}
- {{DOMxRef("SVGAnimatedNumber")}}
- {{DOMxRef("SVGAnimatedNumberList")}}
- {{DOMxRef("SVGAnimatedPathData")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGAnimatedPoints")}}
- {{DOMxRef("SVGAnimatedPreserveAspectRatio")}}
- {{DOMxRef("SVGAnimatedRect")}}
- {{DOMxRef("SVGAnimatedString")}}
- {{DOMxRef("SVGAnimatedTransformList")}}

### SMIL-related interfaces

- {{DOMxRef("ElementTimeControl")}}
- {{DOMxRef("TimeEvent")}}

### Other SVG interfaces

- {{DOMxRef("GetSVGDocument")}}
- {{DOMxRef("ShadowAnimation")}}
- {{DOMxRef("SVGColorProfileRule")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGCSSRule")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGDocument")}}
- {{DOMxRef("SVGException")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGFitToViewBox")}}
- {{DOMxRef("SVGLocatable")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGRenderingIntent")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGUnitTypes")}}
- {{DOMxRef("SVGUseElementShadowRoot")}}
- {{DOMxRef("SVGViewSpec")}} {{Deprecated_Inline}}
- {{DOMxRef("SVGZoomEvent")}} {{Deprecated_Inline}}

## Specifications

| Specification                                       |
| --------------------------------------------------- |
| [Scalable Vector Graphics (SVG) Full 1.2 Specification](https://www.w3.org/TR/SVG12/) |

## See also

- [Getting Started with SVG](/en-US/docs/Web/SVG)
