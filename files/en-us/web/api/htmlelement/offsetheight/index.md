---
title: HTMLElement.offsetHeight
slug: Web/API/HTMLElement/offsetHeight
tags:
  - API
  - CSSOM View
  - NeedsMarkupWork
  - NeedsNonDHMLImage
  - Property
  - Reference
browser-compat: api.HTMLElement.offsetHeight
---
{{ APIRef("HTML DOM") }}

The **`HTMLElement.offsetHeight`** read-only property returns
the height of an element, including vertical padding and borders, as an integer.

Typically, `offsetHeight` is a measurement in pixels of the element's CSS
height, including any borders, padding, and horizontal scrollbars (if rendered). It does
not include the height of pseudo-elements such as `::before` or
`::after`. For the document body object, the measurement includes total
linear content height instead of the element's CSS height. Floated elements extending
below other linear content are ignored.

If the element is hidden (for example, by setting `style.display` on the
element or one of its ancestors to `"none"`), then `0` is
returned.

> **Note:** This property will round the value to an integer. If you need a fractional value, use
> {{ domxref("element.getBoundingClientRect()") }}.

## Syntax

```js
var intElemOffsetHeight = element.offsetHeight;
```

`intElemOffsetHeight` is a variable storing an integer
corresponding to the `offsetHeight` pixel value of the element. The
`offsetHeight` property is read-only.

## Example

![](dimensions-offset.png)

The example image above shows a scrollbar and an `offsetHeight` which fits
on the window. However, non-scrollable elements may have large `offsetHeight`
values, much larger than the visible content. These elements are typically contained
within scrollable elements; consequently, these non-scrollable elements may be
completely or partly invisible, depending on the `scrollTop` setting of the
scrollable container.

## Specifications

{{Specifications}}

### Notes

`offsetHeight` is a property of the DHTML object model which was first
introduced by MSIE. It is sometimes referred to as an element's physical/graphical
dimensions, or an element's border-box height.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.clientHeight")}}
- {{domxref("Element.scrollHeight")}}
- {{domxref("HTMLElement.offsetWidth")}}
- [Determining
  the dimensions of elements](/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- [MSDN
  Measuring Element Dimension and Location](<https://docs.microsoft.com/en-us/previous-versions/hh781509(v=vs.85)>)
