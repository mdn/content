---
title: Element.className
slug: Web/API/Element/className
tags:
  - API
  - DOM
  - Gecko
  - Property
  - Reference
browser-compat: api.Element.className
---
{{APIRef("DOM")}}

The **`className`** property of the
{{domxref("Element")}} interface gets and sets the value of the [`class` attribute](/en-US/docs/Web/HTML/Global_attributes/class)
of the specified element.

## Syntax

```js
var cName = elementNodeReference.className;
elementNodeReference.className = cName;
```

- `cName` is a string variable representing the class or space-separated
  classes of the current element.

## Example

```js
let el = document.getElementById('item');

if (el.className === 'active'){
  el.className = 'inactive';
} else {
  el.className = 'active';
}
```

## Notes

The name `className` is used for this property instead of `class`
because of conflicts with the "class" keyword in many languages which are used to
manipulate the DOM.

`className` can also be an instance of {{domxref("SVGAnimatedString")}} if
the `element` is an {{domxref("SVGElement")}}. It is better to get/set the
`className` of an element using {{domxref("Element.getAttribute")}} and
{{domxref("Element.setAttribute")}} if you are dealing with SVG elements. However, take
into account that {{domxref("Element.getAttribute")}} returns
[`null`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
instead of `""` if the `element` has an empty [`class` attribute](/en-US/docs/Web/HTML/Global_attributes/class).

```js
elm.setAttribute('class', elm.getAttribute('class'))
```

> **Note:** The `class` is an **HTML Attribute**, while the
> `className` is a **DOM Property**.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("element.classList")}}
