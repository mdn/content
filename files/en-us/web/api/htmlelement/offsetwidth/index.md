---
title: "HTMLElement: offsetWidth property"
short-title: offsetWidth
slug: Web/API/HTMLElement/offsetWidth
page-type: web-api-instance-property
browser-compat: api.HTMLElement.offsetWidth
---

{{ APIRef("HTML DOM") }}

The **`offsetWidth`** read-only property of the {{domxref("HTMLElement")}} interface returns the layout width of an element as an integer.

Typically, `offsetWidth` is a measurement in pixels of the element's CSS width, including any borders, padding, and vertical scrollbars (if rendered). It does not include the width of pseudo-elements such as `::before` or `::after`.

If the element is hidden (for example, by setting `style.display` on the element or one of its ancestors to `"none"`), then `0` is returned.

## Value

An integer.

## Examples

![An example element with large padding, border and margin. `offsetWidth` is the layout width of the element including its padding and border, and excluding its margin.](dimensions-offset.png)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Determining the dimensions of elements](/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- {{domxref("Element.clientWidth")}}
- {{domxref("Element.scrollWidth")}}
- {{domxref("HTMLElement.offsetHeight")}}
- {{domxref("HTMLElement.offsetLeft")}}
- {{domxref("HTMLElement.offsetTop")}}
- {{domxref("Element.getBoundingClientRect()")}}
