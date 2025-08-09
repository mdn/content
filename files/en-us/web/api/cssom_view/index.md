---
title: CSSOM view
slug: Web/API/CSSOM_view
page-type: web-api-overview
spec-urls: https://drafts.csswg.org/cssom-view/
---

{{DefaultAPISidebar("CSSOM view")}}

The **CSSOM view** module lets you manipulate the visual view of a document, including getting the position of element layout boxes, obtaining the width or height of the viewport through script, and also scrolling an element.

## Guides

- [Coordinate systems](/en-US/docs/Web/API/CSSOM_view/Coordinate_systems)
  - : The coordinate systems used to specify a position in a display context such as a window on a monitor, a viewport on a mobile device, or a position on a sheet of paper when printing.
- [Viewport concepts](/en-US/docs/Web/API/CSSOM_view/Viewport_concepts)
  - : The concept of the viewport — what it is, its impact in terms of CSS, SVG, and mobile devices — and the difference between the visual viewport and the layout viewport.

## Interfaces

- {{domxref("MediaQueryList")}}
- {{domxref("MediaQueryListEvent")}}
- {{domxref("Screen")}}
- {{domxref("CaretPosition")}}
- {{domxref("VisualViewport")}}

## Extensions to other interfaces

This module adds properties, methods, and events to interfaces defined in other specifications.

### Extensions to Window

- {{domxref("Window.devicePixelRatio", "devicePixelRatio")}}
- {{domxref("Window.innerHeight", "innerHeight")}}
- {{domxref("Window.innerWidth", "innerWidth")}}
- {{domxref("Window.matchMedia", "matchMedia()")}}
- {{domxref("Window.moveBy", "moveBy()")}}
- {{domxref("Window.moveTo", "moveTo()")}}
- {{domxref("Window.outerHeight", "outerHeight")}}
- {{domxref("Window.outerWidth", "outerWidth")}}
- `pageXOffset` (see {{domxref("Window.scrollX", "scrollX")}})
- `pageYOffset` (see {{domxref("Window.scrollY", "scrollY")}})
- {{domxref("Window.resizeBy", "resizeBy()")}}
- {{domxref("Window.resizeTo", "resizeTo()")}}
- {{domxref("Window.screen", "screen")}}
- {{domxref("Window.screenLeft", "screenLeft")}}
- {{domxref("Window.screenTop", "screenTop")}}
- {{domxref("Window.screenX", "screenX")}}
- {{domxref("Window.screenY", "screenY")}}
- {{domxref("Window.visualViewport", "visualViewport")}}
- {{domxref("Window.scroll", "scroll()")}}
- {{domxref("Window.scrollBy", "scrollBy()")}}
- {{domxref("Window.scrollTo", "scrollTo()")}}
- {{domxref("Window.scrollX", "scrollX")}}
- {{domxref("Window.scrollY", "scrollY")}}
- {{domxref("Window/resize_event", "resize")}} event

### Extensions to Document

- {{domxref("Document.elementFromPoint", "elementFromPoint()")}}
- {{domxref("Document.caretPositionFromPoint", "caretPositionFromPoint()")}}
- {{domxref("Document.scrollingElement", "scrollingElement")}}
- {{domxref("Document/scroll_event", "scroll")}} event
- {{domxref("Document/scrollend_event", "scrollend")}} event

### Extensions to Element

- {{domxref("Element.checkVisibility", "checkVisibility()")}}
- {{domxref("Element.clientHeight", "clientHeight")}}
- {{domxref("Element.clientLeft", "clientLeft")}}
- {{domxref("Element.clientTop", "clientTop")}}
- {{domxref("Element.clientWidth", "clientWidth")}}
- {{domxref("Element.currentCSSZoom", "currentCSSZoom")}}
- {{domxref("Element.getBoundingClientRect", "getBoundingClientRect()")}}
- {{domxref("Element.getClientRects", "getClientRects()")}}
- {{domxref("Element.scroll", "scroll()")}}
- {{domxref("Element.scrollBy", "scrollBy()")}}
- {{domxref("Element.scrollHeight", "scrollHeight")}}
- {{domxref("Element.scrollIntoView", "scrollIntoView()")}}
- {{domxref("Element.scrollLeft", "scrollLeft")}}
- {{domxref("Element.scrollTo", "scrollTo()")}}
- {{domxref("Element.scrollTop", "scrollTop")}}
- {{domxref("Element.scrollWidth", "scrollWidth")}}
- {{domxref("Element/scroll_event", "scroll")}} event
- {{domxref("Element/scrollend_event", "scrollend")}} event

### Extensions to HTMLElement

- {{domxref("HTMLElement.offsetHeight", "offsetHeight")}}
- {{domxref("HTMLElement.offsetLeft", "offsetLeft")}}
- {{domxref("HTMLElement.offsetParent", "offsetParent")}}
- {{domxref("HTMLElement.offsetTop", "offsetTop")}}
- {{domxref("HTMLElement.offsetWidth", "offsetWidth")}}

### Extensions to HTMLImageElement

- {{domxref("HTMLImageElement.x", "x")}}
- {{domxref("HTMLImageElement.y", "y")}}

### Extensions to Range

- {{domxref("Range.getBoundingClientRect", "getBoundingClientRect()")}}
- {{domxref("Range.getClientRects", "getClientRects()")}}

### Extensions to MouseEvent

- {{domxref("MouseEvent.clientX", "clientX")}}
- {{domxref("MouseEvent.clientY", "clientY")}}
- {{domxref("MouseEvent.offsetX", "offsetX")}}
- {{domxref("MouseEvent.offsetY", "offsetY")}}
- {{domxref("MouseEvent.pageX", "pageX")}}
- {{domxref("MouseEvent.pageY", "pageY")}}
- {{domxref("MouseEvent.screenY", "screenY")}}
- {{domxref("MouseEvent.x", "x")}}
- {{domxref("MouseEvent.y", "y")}}

This module defines geometric utility methods that apply to the {{domxref("Text")}}, {{domxref("Element")}}, {{domxref("CSSPseudoElement")}}, and {{domxref("Document")}} interfaces. These `GeometryUtils` features are not yet implemented in any browser.

## Specifications

{{Specifications}}

## See also

- [CSS Object Model (CSSOM)](/en-US/docs/Web/API/CSS_Object_Model) API
- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module
- [CSS overscroll behavior](/en-US/docs/Web/CSS/CSS_overscroll_behavior) module
- [CSS scroll snap](/en-US/docs/Web/CSS/CSS_scroll_snap) module
- {{glossary("Viewport")}}
- {{glossary("Layout viewport")}}
- {{glossary("Visual viewport")}}
- {{cssxref("zoom")}}
- {{glossary("CSSOM")}}
- {{glossary("CSS pixel")}}
- {{glossary("Scroll container")}}
- {{htmlelement("meta")}}
