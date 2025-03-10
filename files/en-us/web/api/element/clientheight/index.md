---
title: "Element: clientHeight property"
short-title: clientHeight
slug: Web/API/Element/clientHeight
page-type: web-api-instance-property
browser-compat: api.Element.clientHeight
---

{{APIRef("DOM")}}

The **`Element.clientHeight`** read-only property is zero for
elements with no CSS or inline layout boxes; otherwise, it's the inner height of an
element in pixels. It includes padding but excludes borders, margins, and horizontal
scrollbars (if present).

`clientHeight` can be calculated as: CSS `height` + CSS
`padding` - height of horizontal scrollbar (if present).

When `clientHeight` is used on the root element (the
`<html>` element), (or on `<body>` if the document is
in quirks mode), the viewport's height (excluding any scrollbar) is returned.

> [!NOTE]
> This property will round the value to an integer. If you need
> a fractional value, use {{ domxref("element.getBoundingClientRect()") }}.

## Value

A number.

## Examples

![How clientHeight property determines the inner height of an element considering the height and padding](dimensions-client.png)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLElement.offsetHeight")}}
- {{domxref("Element.scrollHeight")}}
- [Determining the dimensions of elements](/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
