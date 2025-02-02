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

### Interfaces

- {{domxref("MediaQueryList")}}
- {{domxref("MediaQueryListEvent")}}
- {{domxref("Screen")}}
- {{domxref("CaretPosition")}}
- {{domxref("VisualViewport")}}

The following interfaces are not defined by this module but add some extensions.

- {{domxref("Window")}}
- {{domxref("Document")}}
- {{domxref("Element")}}
- {{domxref("HTMLElement")}}
- {{domxref("HTMLImageElement")}}
- {{domxref("Range")}}
- {{domxref("MouseEvent")}}
- {{domxref("Text")}}
- {{domxref("CSSPseudoElement")}}

## Guides

- [Coordinate systems](/en-US/docs/Web/CSS/CSSOM_view/Coordinate_systems)
  - : A guide to the coordinate systems used to specify the position of a location in a display context, whether that context is a window on a monitor, a viewport on a mobile device, or a position on a sheet of paper when printing.

## Related concepts

- {{glossary("CSSOM")}} glossary term

## Specifications

{{Specifications}}

## See also

- [CSS Object Model (CSSOM)](/en-US/docs/Web/API/CSS_Object_Model) as Web API
