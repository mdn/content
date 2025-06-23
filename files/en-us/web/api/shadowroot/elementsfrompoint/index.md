---
title: "ShadowRoot: elementsFromPoint() method"
short-title: elementsFromPoint()
slug: Web/API/ShadowRoot/elementsFromPoint
page-type: web-api-instance-method
status:
  - non-standard
browser-compat: api.ShadowRoot.elementsFromPoint
---

{{APIRef("DOM")}}{{Non-standard_Header}}

The **`elementsFromPoint()`** method of the {{domxref("ShadowRoot")}} interface returns an array of all the shadow root elements at the specified coordinates (relative to the viewport). The elements are ordered from the topmost element (highest in the display z-order), to the bottommost element.

It operates in a similar way to the {{domxref("ShadowRoot.elementFromPoint")}} method. Some browsers return only the shadow root elements present at that location. Other browsers include elements outside of the [shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM), from the shadow DOM element in the topmost layer to the document root node, such as the {{htmlelement("html")}} or {{SVGElement("svg")}} root element. In these browsers, it operates similar to the {{domxref("Document.elementsFromPoint")}} method, but with the ability to cross the [shadow boundary](/en-US/docs/Glossary/Shadow_tree).

## Syntax

```js-nolint
elementsFromPoint(x, y)
```

### Parameters

- `x`
  - : The horizontal coordinate of a point, relative to the left edge of the current {{Glossary("viewport")}}.
- `y`
  - : The vertical coordinate of a point, relative to the top edge of the current viewport.

### Return value

An array of {{domxref('Element')}} objects.

## Examples

```js
const customElem = document.querySelector("my-custom-element");
const shadow = customElem.shadowRoot;
const elements = shadow.elementsFromPoint(20, 20);
const msg = elements.map((el) => el.localName).join(" < ");
if (msg) {
  console.log(msg);
} else {
  console.log("The custom element had no descendants at x: 20, y: 20.");
}
```

If `<my-custom-element>` is near the top left corner of the viewport, and contains a single `<div>`, the above may return either of the following, depending on the browser implementation:

```plain
div
div < my-custom-element < body < html
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("ShadowRoot.elementFromPoint()")}}
- {{DOMxRef("Document.elementsFromPoint()")}}
