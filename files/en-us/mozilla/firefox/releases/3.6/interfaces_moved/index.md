---
title: Interfaces moved in Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6/Interfaces_moved
tags:
  - DOM
  - Gecko
  - Gecko 1.9.2
  - Interfaces
  - XPCOM
---
{{FirefoxSidebar}}

These interfaces were moved to new locations in the tree in Gecko 1.9.2.
This is generally only interesting to people doing development on Mozilla itself.

## Moved DOM interfaces

The following interfaces were moved from `dom/public/idl/base/` to `dom/interfaces/base/`:

| From                       | To                       |
|----------------------------|--------------------------|
| `nsIBrowserDOMWindow`      | `nsIDOMBarProp`          |
| `nsIDOMCRMFObject`         | `nsIDOMChromeWindow`     |
| `nsIDOMClientInformation`  | `nsIDOMClientRect`       |
| `nsIDOMClientRectList`     | `nsIDOMConstructor`      |
| `nsIDOMCrypto`             | `nsIDOMHistory`          |
| `nsIDOMJSWindow`           | `nsIDOMLocation`         |
| `nsIDOMMimeType`           | `nsIDOMMimeTypeArray`    |
| `nsIDOMModalContentWindow` | `nsIDOMNSFeatureFactory` |
| `nsIDOMNavigator`          | `nsIDOMPkcs11`           |
| `nsIDOMPlugin`             | `nsIDOMPluginArray`      |
| `nsIDOMScreen`             | `nsIDOMWindow`           |
| `nsIDOMWindow2`            | `nsIDOMWindowCollection` |
| `nsIDOMWindowInternal`     | `nsIDOMWindowUtils`      |

The following interfaces moved from `dom/public/idl/core/` to `dom/interfaces/core/`:

| From                 | To                            |
|----------------------|-------------------------------|
| `nsIDOM3Attr`        | `nsIDOM3Document`             |
| `nsIDOM3Node`        | `nsIDOM3Text`                 |
| `nsIDOM3TypeInfo`    | `nsIDOMAttr`                  |
| `nsIDOMCDATASection` | `nsIDOMCharacterData`         |
| `nsIDOMComment`      | `nsIDOMDOMConfiguration`   |
| `nsIDOMDOMError`     | `nsIDOMDOMErrorHandler`       |
| `nsIDOMDOMException` | `nsIDOMDOMImplementation`     |
| `nsIDOMDOMLocator`   | `nsIDOMDOMStringList`         |
| `nsIDOMDocument`     | `nsIDOMDocumentFragment`      |
| `nsIDOMDocumentType` | `nsIDOMElement`               |
| `nsIDOMEntity`       | `nsIDOMEntityReference`       |
| `nsIDOMNSDocument`   | `nsIDOMNSEditableElement`     |
| `nsIDOMNSElement`    | `nsIDOMNameList`              |
| `nsIDOMNamedNodeMap` | `nsIDOMNode`                  |
| `nsIDOMNodeList`     | `nsIDOMNodeSelector`          |
| `nsIDOMNotation`     | `nsIDOMProcessingInstruction` |
| `nsIDOMText`         | `nsIDOMUserDataHandler`       |
| `nsIDOMXMLDocument`  |                               |

These interfaces moved from `dom/public/idl/css/` to `dom/interfaces/css/`:

| From                          | To                         |
|-------------------------------|----------------------------|
| `nsIDOMCSS2Properties`        | `nsIDOMCSSCharsetRule`     |
| `nsIDOMCSSFontFaceRule`       | `nsIDOMCSSImportRule`      |
| `nsIDOMCSSMediaRule`          | `nsIDOMCSSMozDocumentRule` |
| `nsIDOMCSSPageRule`           | `nsIDOMCSSPrimitiveValue`  |
| `nsIDOMCSSRule`               | `nsIDOMCSSRuleList`        |
| `nsIDOMCSSStyleDeclaration`   | `nsIDOMCSSStyleRule`       |
| `nsIDOMCSSStyleSheet`         | `nsIDOMCSSUnknownRule`     |
| `nsIDOMCSSValue`              | `nsIDOMCSSValueList`       |
| `nsIDOMCounter`               | `nsIDOMDocumentCSS`        |
| `nsIDOMElementCSSInlineStyle` | `nsIDOMNSCSS2Properties`   |
| `nsIDOMNSRGBAColor`           | `nsIDOMRGBColor`           |
| `nsIDOMRect`                  | `nsIDOMViewCSS`            |

The following interfaces moved from `dom/public/idl/events/` to `dom/interfaces/events/`:

| From                        | To                         |
|-----------------------------|----------------------------|
| `nsIDOM3DocumentEvent`      | `nsIDOM3EventTarget`       |
| `nsIDOMBeforeUnloadEvent`   | `nsIDOMCommandEvent`       |
| `nsIDOMDataContainerEvent`  | `nsIDOMDataTransfer`       |
| `nsIDOMDocumentEvent`       | `nsIDOMDragEvent`          |
| `nsIDOMEvent`               | `nsIDOMEventGroup`         |
| `nsIDOMEventListener`       | `nsIDOMEventTarget`        |
| `nsIDOMKeyEvent`            | `nsIDOMMessageEvent`       |
| `nsIDOMMouseEvent`          | `nsIDOMMouseScrollEvent`   |
| `nsIDOMMutationEvent`       | `nsIDOMNSEvent`            |
| `nsIDOMNSEventTarget`       | `nsIDOMNSMouseEvent`       |
| `nsIDOMNSUIEvent`           | `nsIDOMNotifyPaintEvent`   |
| `nsIDOMPageTransitionEvent` | `nsIDOMPopupBlockedEvent`  |
| `nsIDOMProgressEvent`       | `nsIDOMSimpleGestureEvent` |
| `nsIDOMSmartCardEvent`      | `nsIDOMUIEvent`            |

These interfaces moved from `dom/public/idl/geolocation/` to `/dom/interfaces/geolocation/`:

| From                        | To                               |
|-----------------------------|----------------------------------|
| `nsIDOMGeoGeolocation`      | `nsIDOMGeoPosition`              |
| `nsIDOMGeoPositionCallback` | `nsIDOMGeoPositionCoords`        |
| `nsIDOMGeoPositionError`    | `nsIDOMGeoPositionErrorCallback` |
| `nsIDOMGeoPositionOptions`  | `nsIDOMNavigatorGeolocation`     |
| `nsIGeolocationProvider`    | `nsIGeolocationProvider`         |

These interfaces moved from `dom/public/idl/html/` to `/dom/interfaces/html/`:

| From                          | To                            |
|-------------------------------|-------------------------------|
| `nsIDOMHTMLAnchorElement`     | `nsIDOMHTMLAppletElement`     |
| `nsIDOMHTMLAreaElement`       | `nsIDOMHTMLAudioElement`      |
| `nsIDOMHTMLBRElement`         | `nsIDOMHTMLBaseElement`       |
| `nsIDOMHTMLBaseFontElement`   | `nsIDOMHTMLBodyElement`       |
| `nsIDOMHTMLButtonElement`     | `nsIDOMHTMLByteRanges`        |
| `nsIDOMHTMLCanvasElement`     | `nsIDOMHTMLCollection`        |
| `nsIDOMHTMLDListElement`      | `nsIDOMHTMLDirectoryElement`  |
| `nsIDOMHTMLDivElement`        | `nsIDOMHTMLDocument`          |
| `nsIDOMHTMLElement`           | `nsIDOMHTMLEmbedElement`      |
| `nsIDOMHTMLFieldSetElement`   | `nsIDOMHTMLFontElement`       |
| `nsIDOMHTMLFormElement`       | `nsIDOMHTMLFrameElement`      |
| `nsIDOMHTMLFrameSetElement`   | `nsIDOMHTMLHRElement`         |
| `nsIDOMHTMLHeadElement`       | `nsIDOMHTMLHeadingElement`    |
| `nsIDOMHTMLHtmlElement`       | `nsIDOMHTMLIFrameElement`     |
| `nsIDOMHTMLImageElement`      | `nsIDOMHTMLInputElement`      |
| `nsIDOMHTMLIsIndexElement`    | `nsIDOMHTMLLIElement`         |
| `nsIDOMHTMLLabelElement`      | `nsIDOMHTMLLegendElement`     |
| `nsIDOMHTMLLinkElement`       | `nsIDOMHTMLMapElement`        |
| `nsIDOMHTMLMediaElement`      | `nsIDOMHTMLMediaError`        |
| `nsIDOMHTMLMenuElement`       | `nsIDOMHTMLMetaElement`       |
| `nsIDOMHTMLModElement`        | `nsIDOMHTMLOListElement`      |
| `nsIDOMHTMLObjectElement`     | `nsIDOMHTMLOptGroupElement`   |
| `nsIDOMHTMLOptionElement`     | `nsIDOMHTMLOptionsCollection` |
| `nsIDOMHTMLParagraphElement`  | `nsIDOMHTMLParamElement`      |
| `nsIDOMHTMLPreElement`        | `nsIDOMHTMLQuoteElement`      |
| `nsIDOMHTMLScriptElement`     | `nsIDOMHTMLSelectElement`     |
| `nsIDOMHTMLSourceElement`     | `nsIDOMHTMLStyleElement`      |
| `nsIDOMHTMLTableCaptionElem`  | `nsIDOMHTMLTableCellElement`  |
| `nsIDOMHTMLTableColElement`   | `nsIDOMHTMLTableElement`      |
| `nsIDOMHTMLTableRowElement`   | `nsIDOMHTMLTableSectionElem`  |
| `nsIDOMHTMLTextAreaElement`   | `nsIDOMHTMLTimeRanges`        |
| `nsIDOMHTMLTitleElement`      | `nsIDOMHTMLUListElement`      |
| `nsIDOMHTMLVideoElement`      | `nsIDOMHTMLVoidCallback`      |
| `nsIDOMNSHTMLAnchorElement`   | `nsIDOMNSHTMLAnchorElement2`  |
| `nsIDOMNSHTMLAreaElement`     | `nsIDOMNSHTMLAreaElement2`    |
| `nsIDOMNSHTMLButtonElement`   | `nsIDOMNSHTMLDocument`        |
| `nsIDOMNSHTMLElement`         | `nsIDOMNSHTMLFormControlList` |
| `nsIDOMNSHTMLFormElement`     | `nsIDOMNSHTMLFrameElement`    |
| `nsIDOMNSHTMLHRElement`       | `nsIDOMNSHTMLImageElement`    |
| `nsIDOMNSHTMLInputElement`    | `nsIDOMNSHTMLOptionCollectn`  |
| `nsIDOMNSHTMLOptionElement`   | `nsIDOMNSHTMLSelectElement`   |
| `nsIDOMNSHTMLTextAreaElement` | `nsIDOMNSXBLFormControl`      |

The following interfaces were moved from `dom/public/idl/json/` to `dom/interfaces/json/`:

| From      | To        |
|-----------|-----------|
| `nsIJSON` | `nsIJSON` |

The following interfaces were moved from `dom/public/idl/ls/` to `dom/interfaces/load-save/`:

| From                        | To                         |
|-----------------------------|----------------------------|
| `nsIDOMDOMImplementationLS` | `nsIDOMLSException`        |
| `nsIDOMLSInput`             | `nsIDOMLSLoadEvent`        |
| `nsIDOMLSOutput`            | `nsIDOMLSParser`           |
| `nsIDOMLSParserFilter`      | `nsIDOMLSProgressEvent`    |
| `nsIDOMLSResourceResolver`  | `nsIDOMLSSerializer`       |
| `nsIDOMLSSerializerFilter`  | `nsIDOMLSSerializerFilter` |

The following interfaces moved from `dom/public/idl/offline/` to `dom/interfaces/offline/`:

| From                        | To                          |
|-----------------------------|-----------------------------|
| `nsIDOMLoadStatus`          | `nsIDOMLoadStatusEvent`     |
| `nsIDOMOfflineResourceList` | `nsIDOMOfflineResourceList` |

These interfaces moved from `dom/public/idl/range/` to `dom/interfaces/range/`:

| From                  | To                     |
|-----------------------|------------------------|
| `nsIDOMDocumentRange` | `nsIDOMNSRange`        |
| `nsIDOMRange`         | `nsIDOMRangeException` |

This interface moved from `dom/public/idl/smil` to `dom/interfaces/smil/`:

| From                       | To                         |
|----------------------------|----------------------------|
| `nsIDOMElementTimeControl` | `nsIDOMElementTimeControl` |

The following interfaces moved from `dom/public/idl/storage/` to `dom/interfaces/storage/`:

| From                   | To                    |
|------------------------|-----------------------|
| `nsIDOMStorage`        | `nsIDOMStorageEvent`  |
| `nsIDOMStorageItem`    | `nsIDOMStorageList`   |
| `nsIDOMStorageManager` | `nsIDOMStorageWindow` |
| `nsIDOMToString`       | `nsIDOMToString`      |

The following interfaces moved from `dom/public/idl/stylesheets/` to `dom/interfaces/stylesheets/`:

| From                  | To                      |
|-----------------------|-------------------------|
| `nsIDOMDocumentStyle` | `nsIDOMLinkStyle`       |
| `nsIDOMMediaList`     | `nsIDOMNSDocumentStyle` |
| `nsIDOMStyleSheet`    | `nsIDOMStyleSheetList`  |

The following interfaces moved from `dom/public/idl/svg/` to `dom/interfaces/svg/`:

| From                               | To                          |
|------------------------------------|-----------------------------|
| `nsIDOMGetSVGDocument`             | `nsIDOMSVGAElement`         |
| `nsIDOMSVGAngle`                   | `nsIDOMSVGAnimPresAspRatio` |
| `nsIDOMSVGAnimTransformList`       | `nsIDOMSVGAnimateElement`   |
| `nsIDOMSVGAnimateTransformElement` | `nsIDOMSVGAnimatedAngle`    |
| `nsIDOMSVGAnimatedBoolean`         | `nsIDOMSVGAnimatedEnum`     |
| `nsIDOMSVGAnimatedInteger`         | `nsIDOMSVGAnimatedLength`   |
| `nsIDOMSVGAnimatedLengthList`      | `nsIDOMSVGAnimatedNumber`   |
| `nsIDOMSVGAnimatedNumberList`      | `nsIDOMSVGAnimatedPathData` |
| `nsIDOMSVGAnimatedPoints`          | `nsIDOMSVGAnimatedRect`     |
| `nsIDOMSVGAnimatedString`          | `nsIDOMSVGAnimationElement` |
| `nsIDOMSVGCircleElement`           | `nsIDOMSVGClipPathElement`  |
| `nsIDOMSVGDefsElement`             | `nsIDOMSVGDescElement`      |
| `nsIDOMSVGDocument`                | `nsIDOMSVGElement`          |
| `nsIDOMSVGEllipseElement`          | `nsIDOMSVGEvent`            |
| `nsIDOMSVGException`               | `nsIDOMSVGFilterElement`    |
| `nsIDOMSVGFilters`                 | `nsIDOMSVGFitToViewBox`     |
| `nsIDOMSVGForeignObjectElem`       | `nsIDOMSVGGElement`         |
| `nsIDOMSVGGradientElement`         | `nsIDOMSVGImageElement`     |
| `nsIDOMSVGLength`                  | `nsIDOMSVGLengthList`       |
| `nsIDOMSVGLineElement`             | `nsIDOMSVGLocatable`        |
| `nsIDOMSVGMarkerElement`           | `nsIDOMSVGMaskElement`      |
| `nsIDOMSVGMatrix`                  | `nsIDOMSVGMetadataElement`  |
| `nsIDOMSVGNumber`                  | `nsIDOMSVGNumberList`       |
| `nsIDOMSVGPathElement`             | `nsIDOMSVGPathSeg`          |
| `nsIDOMSVGPathSegList`             | `nsIDOMSVGPatternElement`   |
| `nsIDOMSVGPoint`                   | `nsIDOMSVGPointList`        |
| `nsIDOMSVGPolygonElement`          | `nsIDOMSVGPolylineElement`  |
| `nsIDOMSVGPresAspectRatio`         | `nsIDOMSVGRect`             |
| `nsIDOMSVGRectElement`             | `nsIDOMSVGSVGElement`       |
| `nsIDOMSVGScriptElement`           | `nsIDOMSVGSetElement`       |
| `nsIDOMSVGStopElement`             | `nsIDOMSVGStylable`         |
| `nsIDOMSVGStyleElement`            | `nsIDOMSVGSwitchElement`    |
| `nsIDOMSVGSymbolElement`           | `nsIDOMSVGTSpanElement`     |
| `nsIDOMSVGTextContentElement`      | `nsIDOMSVGTextElement`      |
| `nsIDOMSVGTextPathElement`         | `nsIDOMSVGTextPositionElem` |
| `nsIDOMSVGTitleElement`            | `nsIDOMSVGTransform`        |
| `nsIDOMSVGTransformList`           | `nsIDOMSVGTransformable`    |
| `nsIDOMSVGURIReference`            | `nsIDOMSVGUnitTypes`        |
| `nsIDOMSVGUseElement`              | `nsIDOMSVGViewSpec`         |
| `nsIDOMSVGZoomAndPan`              | `nsIDOMSVGZoomEvent`        |

The IDL files for DOM workers have moved as well, from `dom/public/idl/threads/` to `dom/interfaces/threads/`:

| From                                               | To                  |
|----------------------------------------------------|---------------------|
| `nsIDOMWorkers.idl` (contains multiple interfaces) | `nsIDOMWorkers.idl` |

The following IDL files have moved from `dom/public/idl/traversal/` to `dom/interfaces/traversal/`:

| From                      | To                 |
|---------------------------|--------------------|
| `nsIDOMDocumentTraversal` | `nsIDOMNodeFilter` |
| `nsIDOMNodeIterator`      | `nsIDOMTreeWalker` |

The following IDL files have moved from `dom/public/idl/views/` to `dom/interfaces/views/`:

| From                 | To                   |
|----------------------|----------------------|
| `nsIDOMAbstractView` | `nsIDOMDocumentView` |

The following IDL files have moved from `dom/public/idl/xbl/` to `dom/interfaces/xbl/`:

| From                | To                  |
|---------------------|---------------------|
| `nsIDOMDocumentXBL` | `nsIDOMDocumentXBL` |

The following IDL files have moved from `dom/public/idl/xpath/` to `dom/interfaces/xpath/`:

| From                      | To                      |
|---------------------------|-------------------------|
| `nsIDOMNSXPathExpression` | `nsIDOMXPathEvaluator`  |
| `nsIDOMXPathException`    | `nsIDOMXPathExpression` |
| `nsIDOMXPathNSResolver`   | `nsIDOMXPathNamespace`  |
| `nsIDOMXPathResult`       | `nsIDOMXPathResult`     |

The following IDL files have moved from `dom/public/idl/xul/` to `dom/interfaces/xul/`:

| From                          | To                           |
|-------------------------------|------------------------------|
| `nsIDOMXULButtonElement`      | `nsIDOMXULCheckboxElement`   |
| `nsIDOMXULCommandDispatcher`  | `nsIDOMXULCommandEvent`      |
| `nsIDOMXULContainerElement`   | `nsIDOMXULControlElement`    |
| `nsIDOMXULDescriptionElement` | `nsIDOMXULDocument`          |
| `nsIDOMXULElement`            | `nsIDOMXULImageElement`      |
| `nsIDOMXULLabelElement`       | `nsIDOMXULLabeledControlEl`  |
| `nsIDOMXULMenuListElement`    | `nsIDOMXULMultSelectCntrlEl` |
| `nsIDOMXULPopupElement`       | `nsIDOMXULSelectCntrlEl`     |
| `nsIDOMXULSelectCntrlItemEl`  | `nsIDOMXULTextboxElement`    |
| `nsIDOMXULTreeElement`        | `nsIDOMXULTreeElement`       |
