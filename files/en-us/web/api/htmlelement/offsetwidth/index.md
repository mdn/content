---
title: HTMLElement.offsetWidth
slug: Web/API/HTMLElement/offsetWidth
tags:
  - API
  - CSSOM View
  - NeedsMarkupWork
  - Property
  - Read-only
  - Reference
browser-compat: api.HTMLElement.offsetWidth
---
{{ APIRef("HTML DOM") }}

The **`HTMLElement.offsetWidth`** read-only property returns
the layout width of an element as an integer.

Typically, `offsetWidth` is a measurement in pixels of the element's CSS
width, including any borders, padding, and vertical scrollbars (if rendered). It does
not include the width of pseudo-elements such as `::before` or
`::after`.

If the element is hidden (for example, by setting `style.display` on the
element or one of its ancestors to `"none"`), then `0` is
returned.

## Syntax

```js
var intElemOffsetWidth = element.offsetWidth;
```

`intElemOffsetWidth` is a variable storing an integer corresponding to the
`offsetWidth` pixel value of the element. The `offsetWidth`
property is a read-only.

> **Note:** This property will round the value to an integer. If you need a fractional value, use
> {{ domxref("element.getBoundingClientRect()") }}.

## Example

![](dimensions-offset.png)

## Specifications

{{Specifications}}

### Notes

`offsetWidth` is a property of the DHTML object model which was first
introduced by MSIE. It is sometimes referred to as an element's physical/graphical
dimensions, or an element's border-box width.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.clientWidth")}}
- {{domxref("Element.scrollWidth")}}
- [Determining
  the dimensions of elements](/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
