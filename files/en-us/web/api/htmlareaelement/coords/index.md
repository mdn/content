---
title: "HTMLAreaElement: coords property"
short-title: coords
slug: Web/API/HTMLAreaElement/coords
page-type: web-api-instance-property
browser-compat: api.HTMLAreaElement.coords
---

{{APIRef("HTML DOM")}}

The **`coords`** property of the {{DOMxRef("HTMLAreaElement")}} interface specifies the coordinates of the element's shape as a list of floating-point numbers. It reflects the {{htmlelement("area")}} element's [`coords`](/en-US/docs/Web/HTML/Element/area#coords) attribute.

If the `shape` is `rect`, the shape is a rectangle and the string value's four comma separated numbers specify the coordinates of the top-left and bottom-right corners of the rectangle. For example, `0,0,200,20` defines the coordinates as `0,0`, which is the top-left of the image map, and `200,20`, which is 200px from the left and 20px from the top of the top-left corner of the image map.

If the `shape` is `circle`, the three comma-separated numbers represent the x and y coordinates of the circle's center and the radius.

If the shape is `poly`, the string consists of at least 6 comma-separated numbers representing at least 3 pairs of coordinates that define the vertices of the polygon.

For all coordinates, the origin is the top-left corner of the {{htmlelement("map")}} element's image.

## Value

A string; composed of a comma separated series of numbers.

## Examples

```js
const areaElement = document.getElementById("circleArea");
console.log(areaElement.coords);
areaElement.coords = "25,25,25";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMXref("HTMLAreaElement.shape")}}
- {{DOMXref("HTMLAreaElement.alt")}}
- {{DOMXref("HTMLMapElement")}}
- {{HTMLElement("area")}}
- {{HTMLElement("map")}}
- {{HTMLElement("a")}}
