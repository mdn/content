---
title: "Element: className property"
short-title: className
slug: Web/API/Element/className
page-type: web-api-instance-property
browser-compat: api.Element.className
---

{{APIRef("DOM")}}

The **`className`** property of the
{{domxref("Element")}} interface gets and sets the value of the [`class` attribute](/en-US/docs/Web/HTML/Global_attributes/class)
of the specified element.

## Value

A string variable representing the class or space-separated classes of the current element.

## Examples

```js
const el = document.getElementById("item");
el.className = el.className === "active" ? "inactive" : "active";
```

## Notes

The name `className` is used for this property instead of `class`
because of conflicts with the "class" keyword in many languages which are used to
manipulate the DOM.

`className` can also be an instance of {{domxref("SVGAnimatedString")}} if
the `element` is an {{domxref("SVGElement")}}. It is easier to get/set the
`class` attribute of an element using {{domxref("Element.getAttribute")}} and
{{domxref("Element.setAttribute")}} if you are dealing with SVG elements. However, take
into account that {{domxref("Element.getAttribute")}} returns
[`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null)
instead of `""` if the `element` has an empty [`class` attribute](/en-US/docs/Web/HTML/Global_attributes/class).

```js
elm.setAttribute("class", "my-class");
const myClass = elm.getAttribute("class");
```

> **Note:** `class` is the name of an **HTML Attribute**, while
> `className` is the name of a **DOM Property**.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("element.classList")}}
