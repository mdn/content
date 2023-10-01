---
title: "SVGGraphicsElement: getBBox() method"
short-title: getBBox()
slug: Web/API/SVGGraphicsElement/getBBox
page-type: web-api-instance-method
browser-compat: api.SVGGraphicsElement.getBBox
---

{{APIRef}}

The **`SVGGraphicsElement.getBBox()`** method allows us to determine
the coordinates of the smallest rectangle in which the object fits. The coordinates
returned are with respect to the current SVG space (after the application of all
geometry attributes on all the elements contained in the target element).

> **Note:** `getBBox()` must return the actual bounding box at
> the time the method was called—even in case the element has not yet been rendered. It
> also does not account for any transformation applied to the element or its parents.

> **Note:** `getBBox` returns different values than
> {{domxref("Element.getBoundingClientRect()", "getBoundingClientRect()")}}, as the
> latter returns value relative to the viewport

## Syntax

```js-nolint
getBBox()
getBBox(options)
```

### Parameters

- `options` {{experimental_inline}} {{optional_inline}}

  - : An options dictionary used to control which parts of the element are included in the
    bounding box. The available options are:

    - `fill`
      - : A boolean value indicating that the fill should be included in the bounding box,
        defaults to `true`.
    - `stroke`
      - : A boolean value indicating that the stroke should be included in the bounding
        box, defaults to `false`.
    - `markers`
      - : A boolean value indicating that the markers should be included in the bounding
        box, defaults to `false`.
    - `clipped`
      - : A boolean value indicating that the bounding box should be clipped, defaults to
        `false`.

### Return value

The returned value is a {{domxref("SVGRect")}} object, which defines the bounding box.
This value is irrespective of any transformation attribute applied to it or the parent
elements.

## Examples

### HTML

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <g id="group_text_1">
    <text x="5" y="16" transform="scale(2, 2)">Hello World!</text>
    <text x="8" y="32" transform="translate(0 20) scale(1.25 1)">
      Hello World Again!
    </text>
  </g>
  <!-- Shows BBox in green -->
  <rect id="rect_1" stroke="#00ff00" stroke-width="3" fill="none"></rect>
  <!-- Shows BoundingClientRect in red -->
  <rect id="rect_2" stroke="#ff0000" stroke-width="3" fill="none"></rect>
</svg>
```

### JavaScript

```js
const rectBBox = document.querySelector("#rect_1");
const rectBoundingClientRect = document.querySelector("#rect_2");
const groupElement = document.querySelector("#group_text_1");

const bboxGroup = groupElement.getBBox();
rectBBox.setAttribute("x", bboxGroup.x);
rectBBox.setAttribute("y", bboxGroup.y);
rectBBox.setAttribute("width", bboxGroup.width);
rectBBox.setAttribute("height", bboxGroup.height);

const boundingClientRectGroup = groupElement.getBoundingClientRect();
rectBoundingClientRect.setAttribute("x", boundingClientRectGroup.x);
rectBoundingClientRect.setAttribute("y", boundingClientRectGroup.y);
rectBoundingClientRect.setAttribute("width", boundingClientRectGroup.width);
rectBoundingClientRect.setAttribute("height", boundingClientRectGroup.height);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [getBBox in SVG Primer](https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html#getBBox)
