---
title: "MathMLAnchorElement: target property"
short-title: target
slug: Web/API/MathMLAnchorElement/target
page-type: web-api-instance-property
browser-compat: api.MathMLAnchorElement.target
---

{{APIRef("MathML")}}

The **`target`** property of the {{domxref("MathMLAnchorElement")}} interface is a string that indicates where to display the linked resource.

It reflects the [`target`](/en-US/docs/Web/HTML/Reference/Elements/a#target) attribute of the [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element.

## Value

A string representing the target. Its value can be:

- The name of a {{HTMLElement("frame")}}.
- One of the [keyword with specific values](/en-US/docs/Web/HTML/Reference/Elements/a#target): `_blank`, `_self`, `_parent`, or `_top`.

## Examples

### Basic usage

Given this HTML:

```html
<a id="myAnchor" href="https://example.com" target="_blank"> ... </a>
```

you can get the `target` of the anchor like this:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.target; // returns '_blank'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The MathML [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element
