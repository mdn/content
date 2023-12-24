---
title: "HTMLElement: draggable property"
short-title: draggable
slug: Web/API/HTMLElement/draggable
page-type: web-api-instance-property
browser-compat: api.HTMLElement.draggable
---

{{APIRef("HTML Drag and Drop API")}}

The **`draggable`** property of the {{domxref("HTMLElement")}} interface gets and sets a {{jsxref("Boolean")}} indicating if the element is draggable.

It reflects the value of the [`draggable`](/en-US/docs/Web/HTML/Global_attributes/popover) HTML global attribute.

## Value

A {{jsxref("Boolean")}}, `true` if the element is draggable, `false` otherwise.

## Examples

The following example shows how to control the element' draggable status via script:

```js
const draggableElement = document.querySelector('.draggable-element')
const notDraggableElement = document.querySelector('.not-draggable-element')

// enable the target element's draggable status
if (!draggableElement.draggable) {
  draggableElement.draggable = true
}

// disable the target element's draggable status
if (notDraggableElement.draggable) {
  notDraggableElement.draggable = false
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`draggable`](/en-US/docs/Web/HTML/Global_attributes#hidden) HTML global attribute
- [HTML Drag and Drop API](/en-US/docs/Web/API/HTML_Drag_and_Drop_API) landing page
