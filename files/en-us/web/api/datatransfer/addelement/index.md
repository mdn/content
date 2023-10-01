---
title: "DataTransfer: addElement() method"
short-title: addElement()
slug: Web/API/DataTransfer/addElement
page-type: web-api-instance-method
status:
  - experimental
  - non-standard
browser-compat: api.DataTransfer.addElement
---

{{APIRef("HTML Drag and Drop API")}}{{SeeCompatTable}}{{Non-standard_header}}

The **`DataTransfer.addElement()`** method sets the drag source
to the given element. This element will be the element to which {{domxref("HTMLElement/drag_event", "drag")}} and
{{domxref("HTMLElement/dragend_event", "dragend")}} events are fired, and not the default target (the node that was
dragged).

> **Note:** This method is Firefox-specific.

## Syntax

```js-nolint
addElement(element)
```

### Parameters

- `element`
  - : The {{domxref("Element")}} to set as the drag source.

### Return value

None ({{jsxref("undefined")}}).

## Examples

This example shows the use of the `addElement()` method

```js
function change_drag_node(event, node) {
  const dt = event.dataTransfer;
  dt.addElement(node);
}
```

## Specifications

This method is not defined in any Web standard.

## Browser compatibility

{{Compat}}

## See also

- [Drag and drop](/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Recommended Drag Types](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
