---
title: Document Object Model (DOM)
slug: Web/API/Document_Object_Model
page-type: web-api-overview
spec-urls: https://dom.spec.whatwg.org/
---

{{DefaultAPISidebar("DOM")}}

The **Document Object Model** (**DOM**) connects web pages to scripts or programming languages by representing the structure of a document—such as the HTML representing a web page—in memory. Usually it refers to JavaScript, even though modeling HTML, SVG, or XML documents as objects are not part of the core JavaScript language.

The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree. With them, you can change the document's structure, style, or content.

Nodes can also have event handlers attached to them. Once an event is triggered, the event handlers get executed.

To learn more about what the DOM is and how it represents documents, see our article [Introduction to the DOM](/en-US/docs/Web/API/Document_Object_Model/Introduction).

## DOM interfaces

- {{DOMxRef("AbortController")}}
- {{DOMxRef("AbortSignal")}}
- {{DOMxRef("AbstractRange")}}
- {{DOMxRef("Attr")}}
- {{DOMxRef("CDATASection")}}
- {{DOMxRef("CharacterData")}}
- {{DOMxRef("Comment")}}
- {{DOMxRef("CustomEvent")}}
- {{DOMxRef("Document")}}
- {{DOMxRef("DocumentFragment")}}
- {{DOMxRef("DocumentType")}}
- {{DOMxRef("DOMError")}} {{Deprecated_Inline}}
- {{DOMxRef("DOMException")}}
- {{DOMxRef("DOMImplementation")}}
- {{DOMxRef("DOMParser")}}
- {{DOMxRef("DOMPoint")}}
- {{DOMxRef("DOMPointReadOnly")}}
- {{DOMxRef("DOMRect")}}
- {{DOMxRef("DOMTokenList")}}
- {{DOMxRef("Element")}}
- {{DOMxRef("Event")}}
- {{DOMxRef("EventTarget")}}
- {{DOMxRef("HTMLCollection")}}
- {{DOMxRef("MutationObserver")}}
- {{DOMxRef("MutationRecord")}}
- {{DOMxRef("NamedNodeMap")}}
- {{DOMxRef("Node")}}
- {{DOMxRef("NodeFilter")}}
- {{DOMxRef("NodeIterator")}}
- {{DOMxRef("NodeList")}}
- {{DOMxRef("ProcessingInstruction")}}
- {{DOMxRef("Range")}}
- {{DOMxRef("StaticRange")}}
- {{DOMxRef("Text")}}
- {{DOMxRef("TextDecoder")}}
- {{DOMxRef("TextEncoder")}}
- {{DOMxRef("TimeRanges")}}
- {{DOMxRef("TreeWalker")}}
- {{DOMxRef("XMLDocument")}}

### Obsolete DOM interfaces

The Document Object Model has been highly simplified. To achieve this, the following interfaces present in the different DOM level 3 or earlier specifications have been removed. It is uncertain whether some may be reintroduced in the future or not, but for the time being they should be considered obsolete and should be avoided:

- `DOMConfiguration`
- `DOMErrorHandler`
- `DOMImplementationList`
- `DOMImplementationRegistry`
- `DOMImplementationSource`
- `DOMLocator`
- `DOMObject`
- `DOMSettableTokenList`
- `DOMUserData`
- `ElementTraversal`
- `Entity`
- `EntityReference`
- `NameList`
- `Notation`
- `TypeInfo`
- `UserDataHandler`

## HTML DOM

A document containing HTML is described using the {{DOMxRef("Document")}} interface, which is extended by the HTML specification to include various HTML-specific features. In particular, the {{domxref("Element")}} interface is enhanced to become {{domxref("HTMLElement")}} and various subclasses, each representing one of (or a family of closely related) elements.

The HTML DOM API provides access to various browser features such as tabs and windows, CSS styles and stylesheets, browser history, and so forth. These interfaces are discussed further in [the HTML DOM API](/en-US/docs/Web/API/HTML_DOM_API) documentation.

## SVG interfaces

### SVG element interfaces

- {{DOMxRef("SVGAElement")}}
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

{{Specifications}}

## See also

- [DOM Examples](/en-US/docs/Web/API/Document_Object_Model/Examples)
- [CSS Object Model (CSSOM)](/en-US/docs/Web/API/CSS_Object_Model)
