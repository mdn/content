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

These interfaces were moved to new locations in the tree in Gecko 1.9.2. This is generally only interesting to people doing development on Mozilla itself.

## Moved DOM interfaces

The following interfaces were moved from `dom/public/idl/base/` to `dom/interfaces/base/`:

<table>
  <tbody>
    <tr>
      <td>{{ interface("nsIBrowserDOMWindow") }}</td>
      <td>{{ interface("nsIDOMBarProp") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMCRMFObject") }}</td>
      <td>{{ interface("nsIDOMChromeWindow") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMClientInformation") }}</td>
      <td>{{ interface("nsIDOMClientRect") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMClientRectList") }}</td>
      <td>{{ interface("nsIDOMConstructor") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMCrypto") }}</td>
      <td>{{ interface("nsIDOMHistory") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMJSWindow") }}</td>
      <td>{{ interface("nsIDOMLocation") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMMimeType") }}</td>
      <td>{{ interface("nsIDOMMimeTypeArray") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMModalContentWindow") }}</td>
      <td>{{ interface("nsIDOMNSFeatureFactory") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMNavigator") }}</td>
      <td>{{ interface("nsIDOMPkcs11") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMPlugin") }}</td>
      <td>{{ interface("nsIDOMPluginArray") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMScreen") }}</td>
      <td>{{ interface("nsIDOMWindow") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMWindow2") }}</td>
      <td>{{ interface("nsIDOMWindowCollection") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMWindowInternal") }}</td>
      <td>{{ interface("nsIDOMWindowUtils") }}</td>
    </tr>
  </tbody>
</table>

The following interfaces moved from `dom/public/idl/core/` to `dom/interfaces/core/`:

<table>
  <tbody>
    <tr>
      <td>{{ interface("nsIDOM3Attr") }}</td>
      <td>{{ interface("nsIDOM3Document") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOM3Node") }}</td>
      <td>{{ interface("nsIDOM3Text") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOM3TypeInfo") }}</td>
      <td>{{ interface("nsIDOMAttr") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMCDATASection") }}</td>
      <td>{{ interface("nsIDOMCharacterData") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMComment") }}</td>
      <td>{{ interface("nsIDOMDOMConfiguration") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMDOMError") }}</td>
      <td>{{ interface("nsIDOMDOMErrorHandler") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMDOMException") }}</td>
      <td>{{ interface("nsIDOMDOMImplementation") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMDOMLocator") }}</td>
      <td>{{ interface("nsIDOMDOMStringList") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMDocument") }}</td>
      <td>{{ interface("nsIDOMDocumentFragment") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMDocumentType") }}</td>
      <td>{{ interface("nsIDOMElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMEntity") }}</td>
      <td>{{ interface("nsIDOMEntityReference") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMNSDocument") }}</td>
      <td>{{ interface("nsIDOMNSEditableElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMNSElement") }}</td>
      <td>{{ interface("nsIDOMNameList") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMNamedNodeMap") }}</td>
      <td>{{ interface("nsIDOMNode") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMNodeList") }}</td>
      <td>{{ interface("nsIDOMNodeSelector") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMNotation") }}</td>
      <td>{{ interface("nsIDOMProcessingInstruction") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMText") }}</td>
      <td>{{ interface("nsIDOMUserDataHandler") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMXMLDocument") }}</td>
      <td></td>
    </tr>
  </tbody>
</table>

These interfaces moved from `dom/public/idl/css/` to `dom/interfaces/css/`:

<table>
  <tbody>
    <tr>
      <td>{{ interface("nsIDOMCSS2Properties") }}</td>
      <td>{{ interface("nsIDOMCSSCharsetRule") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMCSSFontFaceRule") }}</td>
      <td>{{ interface("nsIDOMCSSImportRule") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMCSSMediaRule") }}</td>
      <td>{{ interface("nsIDOMCSSMozDocumentRule") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMCSSPageRule") }}</td>
      <td>{{ interface("nsIDOMCSSPrimitiveValue") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMCSSRule") }}</td>
      <td>{{ interface("nsIDOMCSSRuleList") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMCSSStyleDeclaration") }}</td>
      <td>{{ interface("nsIDOMCSSStyleRule") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMCSSStyleSheet") }}</td>
      <td>{{ interface("nsIDOMCSSUnknownRule") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMCSSValue") }}</td>
      <td>{{ interface("nsIDOMCSSValueList") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMCounter") }}</td>
      <td>{{ interface("nsIDOMDocumentCSS") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMElementCSSInlineStyle") }}</td>
      <td>{{ interface("nsIDOMNSCSS2Properties") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMNSRGBAColor") }}</td>
      <td>{{ interface("nsIDOMRGBColor") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMRect") }}</td>
      <td>{{ interface("nsIDOMViewCSS") }}</td>
    </tr>
  </tbody>
</table>

The following interfaces moved from `dom/public/idl/events/` to `dom/interfaces/events/`:

<table>
  <tbody>
    <tr>
      <td>{{ interface("nsIDOM3DocumentEvent") }}</td>
      <td>{{ interface("nsIDOM3EventTarget") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMBeforeUnloadEvent") }}</td>
      <td>{{ interface("nsIDOMCommandEvent") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMDataContainerEvent") }}</td>
      <td>{{ interface("nsIDOMDataTransfer") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMDocumentEvent") }}</td>
      <td>{{ interface("nsIDOMDragEvent") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMEvent") }}</td>
      <td>{{ interface("nsIDOMEventGroup") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMEventListener") }}</td>
      <td>{{ interface("nsIDOMEventTarget") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMKeyEvent") }}</td>
      <td>{{ interface("nsIDOMMessageEvent") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMMouseEvent") }}</td>
      <td>{{ interface("nsIDOMMouseScrollEvent") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMMutationEvent") }}</td>
      <td>{{ interface("nsIDOMNSEvent") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMNSEventTarget") }}</td>
      <td>{{ interface("nsIDOMNSMouseEvent") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMNSUIEvent") }}</td>
      <td>{{ interface("nsIDOMNotifyPaintEvent") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMPageTransitionEvent") }}</td>
      <td>{{ interface("nsIDOMPopupBlockedEvent") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMProgressEvent") }}</td>
      <td>{{ interface("nsIDOMSimpleGestureEvent") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSmartCardEvent") }}</td>
      <td>{{ interface("nsIDOMUIEvent") }}</td>
    </tr>
  </tbody>
</table>

These interfaces moved from `dom/public/idl/geolocation/` to `/dom/interfaces/geolocation/`:

<table>
  <tbody>
    <tr>
      <td>{{ interface("nsIDOMGeoGeolocation") }}</td>
      <td>{{ interface("nsIDOMGeoPosition") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMGeoPositionCallback") }}</td>
      <td>{{ interface("nsIDOMGeoPositionCoords") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMGeoPositionError") }}</td>
      <td>{{ interface("nsIDOMGeoPositionErrorCallback") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMGeoPositionOptions") }}</td>
      <td>{{ interface("nsIDOMNavigatorGeolocation") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIGeolocationProvider") }}</td>
    </tr>
  </tbody>
</table>

These interfaces moved from `dom/public/idl/html/` to `/dom/interfaces/html/`:

<table>
  <tbody>
    <tr>
      <td>{{ interface("nsIDOMHTMLAnchorElement") }}</td>
      <td>{{ interface("nsIDOMHTMLAppletElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLAreaElement") }}</td>
      <td>{{ interface("nsIDOMHTMLAudioElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLBRElement") }}</td>
      <td>{{ interface("nsIDOMHTMLBaseElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLBaseFontElement") }}</td>
      <td>{{ interface("nsIDOMHTMLBodyElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLButtonElement") }}</td>
      <td>{{ interface("nsIDOMHTMLByteRanges") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLCanvasElement") }}</td>
      <td>{{ interface("nsIDOMHTMLCollection") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLDListElement") }}</td>
      <td>{{ interface("nsIDOMHTMLDirectoryElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLDivElement") }}</td>
      <td>{{ interface("nsIDOMHTMLDocument") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLElement") }}</td>
      <td>{{ interface("nsIDOMHTMLEmbedElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLFieldSetElement") }}</td>
      <td>{{ interface("nsIDOMHTMLFontElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLFormElement") }}</td>
      <td>{{ interface("nsIDOMHTMLFrameElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLFrameSetElement") }}</td>
      <td>{{ interface("nsIDOMHTMLHRElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLHeadElement") }}</td>
      <td>{{ interface("nsIDOMHTMLHeadingElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLHtmlElement") }}</td>
      <td>{{ interface("nsIDOMHTMLIFrameElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLImageElement") }}</td>
      <td>{{ interface("nsIDOMHTMLInputElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLIsIndexElement") }}</td>
      <td>{{ interface("nsIDOMHTMLLIElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLLabelElement") }}</td>
      <td>{{ interface("nsIDOMHTMLLegendElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLLinkElement") }}</td>
      <td>{{ interface("nsIDOMHTMLMapElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLMediaElement") }}</td>
      <td>{{ interface("nsIDOMHTMLMediaError") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLMenuElement") }}</td>
      <td>{{ interface("nsIDOMHTMLMetaElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLModElement") }}</td>
      <td>{{ interface("nsIDOMHTMLOListElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLObjectElement") }}</td>
      <td>{{ interface("nsIDOMHTMLOptGroupElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLOptionElement") }}</td>
      <td>{{ interface("nsIDOMHTMLOptionsCollection") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLParagraphElement") }}</td>
      <td>{{ interface("nsIDOMHTMLParamElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLPreElement") }}</td>
      <td>{{ interface("nsIDOMHTMLQuoteElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLScriptElement") }}</td>
      <td>{{ interface("nsIDOMHTMLSelectElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLSourceElement") }}</td>
      <td>{{ interface("nsIDOMHTMLStyleElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLTableCaptionElem") }}</td>
      <td>{{ interface("nsIDOMHTMLTableCellElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLTableColElement") }}</td>
      <td>{{ interface("nsIDOMHTMLTableElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLTableRowElement") }}</td>
      <td>{{ interface("nsIDOMHTMLTableSectionElem") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLTextAreaElement") }}</td>
      <td>{{ interface("nsIDOMHTMLTimeRanges") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLTitleElement") }}</td>
      <td>{{ interface("nsIDOMHTMLUListElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMHTMLVideoElement") }}</td>
      <td>{{ interface("nsIDOMHTMLVoidCallback") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMNSHTMLAnchorElement") }}</td>
      <td>{{ interface("nsIDOMNSHTMLAnchorElement2") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMNSHTMLAreaElement") }}</td>
      <td>{{ interface("nsIDOMNSHTMLAreaElement2") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMNSHTMLButtonElement") }}</td>
      <td>{{ interface("nsIDOMNSHTMLDocument") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMNSHTMLElement") }}</td>
      <td>{{ interface("nsIDOMNSHTMLFormControlList") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMNSHTMLFormElement") }}</td>
      <td>{{ interface("nsIDOMNSHTMLFrameElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMNSHTMLHRElement") }}</td>
      <td>{{ interface("nsIDOMNSHTMLImageElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMNSHTMLInputElement") }}</td>
      <td>{{ interface("nsIDOMNSHTMLOptionCollectn") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMNSHTMLOptionElement") }}</td>
      <td>{{ interface("nsIDOMNSHTMLSelectElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMNSHTMLTextAreaElement") }}</td>
      <td>{{ interface("nsIDOMNSXBLFormControl") }}</td>
    </tr>
  </tbody>
</table>

The following interfaces were moved from `dom/public/idl/json/` to `dom/interfaces/json/`:

<table>
  <tbody>
    <tr>
      <td>{{ interface("nsIJSON") }}</td>
    </tr>
  </tbody>
</table>

The following interfaces were moved from `dom/public/idl/ls/` to `dom/interfaces/load-save/`:

<table>
  <tbody>
    <tr>
      <td>{{ interface("nsIDOMDOMImplementationLS") }}</td>
      <td>{{ interface("nsIDOMLSException") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMLSInput") }}</td>
      <td>{{ interface("nsIDOMLSLoadEvent") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMLSOutput") }}</td>
      <td>{{ interface("nsIDOMLSParser") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMLSParserFilter") }}</td>
      <td>{{ interface("nsIDOMLSProgressEvent") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMLSResourceResolver") }}</td>
      <td>{{ interface("nsIDOMLSSerializer") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMLSSerializerFilter") }}</td>
    </tr>
  </tbody>
</table>

The following interfaces moved from `dom/public/idl/offline/` to `dom/interfaces/offline/`:

<table>
  <tbody>
    <tr>
      <td>{{ interface("nsIDOMLoadStatus") }}</td>
      <td>{{ interface("nsIDOMLoadStatusEvent") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMOfflineResourceList") }}</td>
    </tr>
  </tbody>
</table>

These interfaces moved from `dom/public/idl/range/` to `dom/interfaces/range/`:

<table>
  <tbody>
    <tr>
      <td>{{ interface("nsIDOMDocumentRange") }}</td>
      <td>{{ interface("nsIDOMNSRange") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMRange") }}</td>
      <td>{{ interface("nsIDOMRangeException") }}</td>
    </tr>
  </tbody>
</table>

This interface moved from `dom/public/idl/smil` to `dom/interfaces/smil/`:

<table>
  <tbody>
    <tr>
      <td>{{ interface("nsIDOMElementTimeControl") }}</td>
    </tr>
  </tbody>
</table>

The following interfaces moved from `dom/public/idl/storage/` to `dom/interfaces/storage/`:

<table>
  <tbody>
    <tr>
      <td>{{ interface("nsIDOMStorage") }}</td>
      <td>{{ interface("nsIDOMStorageEvent") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMStorageItem") }}</td>
      <td>{{ interface("nsIDOMStorageList") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMStorageManager") }}</td>
      <td>{{ interface("nsIDOMStorageWindow") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMToString") }}</td>
    </tr>
  </tbody>
</table>

The following interfaces moved from `dom/public/idl/stylesheets/` to `dom/interfaces/stylesheets/`:

<table>
  <tbody>
    <tr>
      <td>{{ interface("nsIDOMDocumentStyle") }}</td>
      <td>{{ interface("nsIDOMLinkStyle") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMMediaList") }}</td>
      <td>{{ interface("nsIDOMNSDocumentStyle") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMStyleSheet") }}</td>
      <td>{{ interface("nsIDOMStyleSheetList") }}</td>
    </tr>
  </tbody>
</table>

The following interfaces moved from `dom/public/idl/svg/` to `dom/interfaces/svg/`:

<table>
  <tbody>
    <tr>
      <td>{{ interface("nsIDOMGetSVGDocument") }}</td>
      <td>{{ interface("nsIDOMSVGAElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGAngle") }}</td>
      <td>{{ interface("nsIDOMSVGAnimPresAspRatio") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGAnimTransformList") }}</td>
      <td>{{ interface("nsIDOMSVGAnimateElement") }}</td>
    </tr>
    <tr>
      <td>
        {{ interface("nsIDOMSVGAnimateTransformElement") }}
      </td>
      <td>{{ interface("nsIDOMSVGAnimatedAngle") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGAnimatedBoolean") }}</td>
      <td>{{ interface("nsIDOMSVGAnimatedEnum") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGAnimatedInteger") }}</td>
      <td>{{ interface("nsIDOMSVGAnimatedLength") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGAnimatedLengthList") }}</td>
      <td>{{ interface("nsIDOMSVGAnimatedNumber") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGAnimatedNumberList") }}</td>
      <td>{{ interface("nsIDOMSVGAnimatedPathData") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGAnimatedPoints") }}</td>
      <td>{{ interface("nsIDOMSVGAnimatedRect") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGAnimatedString") }}</td>
      <td>{{ interface("nsIDOMSVGAnimationElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGCircleElement") }}</td>
      <td>{{ interface("nsIDOMSVGClipPathElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGDefsElement") }}</td>
      <td>{{ interface("nsIDOMSVGDescElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGDocument") }}</td>
      <td>{{ interface("nsIDOMSVGElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGEllipseElement") }}</td>
      <td>{{ interface("nsIDOMSVGEvent") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGException") }}</td>
      <td>{{ interface("nsIDOMSVGFilterElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGFilters") }}</td>
      <td>{{ interface("nsIDOMSVGFitToViewBox") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGForeignObjectElem") }}</td>
      <td>{{ interface("nsIDOMSVGGElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGGradientElement") }}</td>
      <td>{{ interface("nsIDOMSVGImageElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGLength") }}</td>
      <td>{{ interface("nsIDOMSVGLengthList") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGLineElement") }}</td>
      <td>{{ interface("nsIDOMSVGLocatable") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGMarkerElement") }}</td>
      <td>{{ interface("nsIDOMSVGMaskElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGMatrix") }}</td>
      <td>{{ interface("nsIDOMSVGMetadataElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGNumber") }}</td>
      <td>{{ interface("nsIDOMSVGNumberList") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGPathElement") }}</td>
      <td>{{ interface("nsIDOMSVGPathSeg") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGPathSegList") }}</td>
      <td>{{ interface("nsIDOMSVGPatternElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGPoint") }}</td>
      <td>{{ interface("nsIDOMSVGPointList") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGPolygonElement") }}</td>
      <td>{{ interface("nsIDOMSVGPolylineElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGPresAspectRatio") }}</td>
      <td>{{ interface("nsIDOMSVGRect") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGRectElement") }}</td>
      <td>{{ interface("nsIDOMSVGSVGElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGScriptElement") }}</td>
      <td>{{ interface("nsIDOMSVGSetElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGStopElement") }}</td>
      <td>{{ interface("nsIDOMSVGStylable") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGStyleElement") }}</td>
      <td>{{ interface("nsIDOMSVGSwitchElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGSymbolElement") }}</td>
      <td>{{ interface("nsIDOMSVGTSpanElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGTextContentElement") }}</td>
      <td>{{ interface("nsIDOMSVGTextElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGTextPathElement") }}</td>
      <td>{{ interface("nsIDOMSVGTextPositionElem") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGTitleElement") }}</td>
      <td>{{ interface("nsIDOMSVGTransform") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGTransformList") }}</td>
      <td><code>nsIDOMSVGTransformable</code></td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGURIReference") }}</td>
      <td>{{ interface("nsIDOMSVGUnitTypes") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGUseElement") }}</td>
      <td>{{ interface("nsIDOMSVGViewSpec") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMSVGZoomAndPan") }}</td>
      <td>{{ interface("nsIDOMSVGZoomEvent") }}</td>
    </tr>
  </tbody>
</table>

The IDL files for DOM workers have moved as well, from `dom/public/idl/threads/` to `dom/interfaces/threads/`:

<table>
  <tbody>
    <tr>
      <td><code>nsIDOMWorkers.idl</code> (contains multiple interfaces)</td>
    </tr>
  </tbody>
</table>

The following IDL files have moved from `dom/public/idl/traversal/` to `dom/interfaces/traversal/`:

<table>
  <tbody>
    <tr>
      <td>{{ interface("nsIDOMDocumentTraversal") }}</td>
      <td>{{ interface("nsIDOMNodeFilter") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMNodeIterator") }}</td>
      <td>{{ interface("nsIDOMTreeWalker") }}</td>
    </tr>
  </tbody>
</table>

The following IDL files have moved from `dom/public/idl/views/` to `dom/interfaces/views/`:

<table>
  <tbody>
    <tr>
      <td>{{ interface("nsIDOMAbstractView") }}</td>
      <td>{{ interface("nsIDOMDocumentView") }}</td>
    </tr>
  </tbody>
</table>

The following IDL files have moved from `dom/public/idl/xbl/` to `dom/interfaces/xbl/`:

<table>
  <tbody>
    <tr>
      <td>{{ interface("nsIDOMDocumentXBL") }}</td>
    </tr>
  </tbody>
</table>

The following IDL files have moved from `dom/public/idl/xpath/` to `dom/interfaces/xpath/`:

<table>
  <tbody>
    <tr>
      <td>{{ interface("nsIDOMNSXPathExpression") }}</td>
      <td>{{ interface("nsIDOMXPathEvaluator") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMXPathException") }}</td>
      <td>{{ interface("nsIDOMXPathExpression") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMXPathNSResolver") }}</td>
      <td>{{ interface("nsIDOMXPathNamespace") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMXPathResult") }}</td>
    </tr>
  </tbody>
</table>

The following IDL files have moved from `dom/public/idl/xul/` to `dom/interfaces/xul/`:

<table>
  <tbody>
    <tr>
      <td>{{ interface("nsIDOMXULButtonElement") }}</td>
      <td>{{ interface("nsIDOMXULCheckboxElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMXULCommandDispatcher") }}</td>
      <td>{{ interface("nsIDOMXULCommandEvent") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMXULContainerElement") }}</td>
      <td>{{ interface("nsIDOMXULControlElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMXULDescriptionElement") }}</td>
      <td>{{ interface("nsIDOMXULDocument") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMXULElement") }}</td>
      <td>{{ interface("nsIDOMXULImageElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMXULLabelElement") }}</td>
      <td>{{ interface("nsIDOMXULLabeledControlEl") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMXULMenuListElement") }}</td>
      <td>{{ interface("nsIDOMXULMultSelectCntrlEl") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMXULPopupElement") }}</td>
      <td>{{ interface("nsIDOMXULSelectCntrlEl") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMXULSelectCntrlItemEl") }}</td>
      <td>{{ interface("nsIDOMXULTextboxElement") }}</td>
    </tr>
    <tr>
      <td>{{ interface("nsIDOMXULTreeElement") }}</td>
    </tr>
  </tbody>
</table>
