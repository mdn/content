---
title: CSSOM view
slug: Web/CSS/CSSOM_view
page-type: css-module
spec-urls: https://drafts.csswg.org/cssom-view/
---

{{CSSRef}}

The **CSSOM view** module lets you manipulate the visual view of a document, including getting the position of element layout boxes, obtaining the width or height of the viewport through script, and also scrolling an element.

## Reference

### Events

- {{domxref("Window")}} events:
  - {{domxref("Window/resize_event", "resize")}}
- {{domxref("VisualViewport")}} events:
  - {{domxref("VisualViewport/resize_event", "resize")}}
  - {{domxref("VisualViewport/scroll_event", "scroll")}}
  - {{domxref("VisualViewport/scrollend_event", "scrollend")}}
- {{domxref("Document")}} events
  - {{domxref("Document/scroll_event", "scroll")}}
  - {{domxref("Document/scrollend_event", "scrollend")}}
- {{domxref("Element")}} events
  - {{domxref("Element/scroll_event", "scroll")}}
  - {{domxref("Element/scrollend_event", "scrollend")}}
- {{domxref("MediaQueryList")}} events
  - {{domxref("MediaQueryList/change_event", "change")}}

### Glossary

- {{glossary("Viewport")}}
- {{glossary("Layout viewport")}}
- {{glossary("Visual viewport")}}

### Interfaces

- {{domxref("MediaQueryList")}}
- {{domxref("MediaQueryListEvent")}}
- {{domxref("Screen")}}
- {{domxref("CaretPosition")}}
- {{domxref("VisualViewport")}}

### Interface extensions

This module adds properties and methods to interfaces defined in other specifications.

- {{domxref("Window")}}
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
- {{domxref("Document")}}
  - {{domxref("Document.elementFromPoint", "elementFromPoint()")}}
  - {{domxref("Document.caretPositionFromPoint", "caretPositionFromPoint()")}}
  - {{domxref("Document.scrollingElement", "scrollingElement")}}
- {{domxref("Element")}}
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
- {{domxref("HTMLElement")}}
  - {{domxref("HTMLElement.offsetHeight", "offsetHeight")}}
  - {{domxref("HTMLElement.offsetLeft", "offsetLeft")}}
  - {{domxref("HTMLElement.offsetParent", "offsetParent")}}
  - {{domxref("HTMLElement.offsetTop", "offsetTop")}}
  - {{domxref("HTMLElement.offsetWidth", "offsetWidth")}}
- {{domxref("HTMLImageElement")}}
  - {{domxref("HTMLImageElement.x", "x")}}
  - {{domxref("HTMLImageElement.y", "y")}}
- {{domxref("Range")}}
  - {{domxref("Range.getBoundingClientRect", "getBoundingClientRect()")}}
  - {{domxref("Range.getClientRects", "getClientRects()")}}
- {{domxref("MouseEvent")}}
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

## Guides

- [Coordinate systems](/en-US/docs/Web/CSS/CSSOM_view/Coordinate_systems)
  - : The coordinate systems used to specify a position in a display context such as a window on a monitor, a viewport on a mobile device, or a position on a sheet of paper when printing.
- [Viewport concepts](/en-US/docs/Web/CSS/CSSOM_view/Viewport_concepts)
  - : The concept of the viewport — what it is, its impact in terms of CSS, SVG, and mobile devices — and the difference between the visual viewport and the layout viewport.

## Related concepts

- {{cssxref("zoom")}}
- {{glossary("CSSOM")}}
- {{glossary("CSS pixel")}}
- {{glossary("Scroll container")}}
- {{htmlelement("meta")}}

## Specifications

{{Specifications}}

## See also

- [CSS Object Model (CSSOM)](/en-US/docs/Web/API/CSS_Object_Model) API
- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module
- [CSS overscroll behavior](/en-US/docs/Web/CSS/CSS_overscroll_behavior) module
- [CSS scroll snap](/en-US/docs/Web/CSS/CSS_scroll_snap) module
