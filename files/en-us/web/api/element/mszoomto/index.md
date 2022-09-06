---
title: Element.msZoomTo()
slug: Web/API/Element/msZoomTo
page-type: web-api-instance-method
tags:
  - API
  - API:Microsoft Extensions
  - Method
  - Microsoft
  - Non-standard
  - Reference
  - msZoomTo
---
{{APIRef("Microsoft Extensions")}}{{Non-standard_header}}

The **`msZoomTo`** method scrolls and/or zooms an element to its specified coordinate with animation.

Zoomed elements can expose their zoom level through {{domxref("Element/msContentZoom_event", "msContentZoom")}} (i.e. scrollTop/Left). The zoom level can be reset with `msZoomTo`.

This proprietary method is specific to Internet Explorer and Microsoft Edge.

## Syntax

```js
msZoomTo(arguments)
```

### Parameters

- `arguments`
  - : An object. It has the following properties:

    - `contentX`
      - : The x-coordinate of the content that is the target of the scroll/zoom. If no value is specified, defaults to the current centerpoint of visible content, horizontally.

    - `contentY`
      - : The y-coordinate of the content that is the target of the scroll/zoom. If no value is specified, defaults to the current centerpoint of visible content, vertically.

    - `viewportX`
      - : The alignment point of the viewport. The scroll/zoom operation attempts to align this point with the contentX point.

        - `center`
          - : Default. Aligns the horizontal center of the viewport to the element's contentX value.
        - `left`
          - : Aligns the left-most point of the viewport to the element's contentX value.
        - `right`
          - : Aligns the right-most point of the viewport to the element's contentX value.
        - `integer`
          - : Aligns the specified x-coordinate of the viewport to the element's contentX value.

    - `viewportY`
      - : The alignment point of the viewport. The scroll/zoom operation attempts to align this point with the contentY point.
        - `middle`
          - : Default. Aligns the vertical center of the viewport to the element's contentY value.
        - `top`
          - : Aligns the top-most point of the viewport to the element's contentY value.
        - `bottom`
          - : Aligns the bottom-most point of the viewport to the element's contentY value.
        - `integer`
          - : Aligns the specified y-coordinate of the viewport to the element's contentY value.

    - `scaleFactor`
      - : Floating-point. The scale factor (msContentZoomFactor) to zoom to. If no value is specified, defaults to the current zoom level (no additional zoom occurs). This argument is ignored if the element is not zoomable.

    - `animate`
      - : The type of animation to use.
        - `default`: Uses the default animation.
        - `none`: No animation is used.

This method has no scrolling effect on non-scrollable elements and no zooming effect on non-zoomable elements (e.g., elements with "-ms-content-zooming: none").

This method has no effect if called from a parent document to scroll or zoom content hosted in an iframe.

### Return value

This method does not return a value.

## Examples

```js
/* Zooming in on an element while still keeping it centered in the viewport */
const args = {
    contentX: target.offsetLeft + target.offsetWidth/2,
    contentY: target.offsetTop + target.offsetHeight/2,
    scaleFactor: 2.0,
}
zoomer.msZoomTo(args);
```

## See also

- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
