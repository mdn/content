---
title: DataTransfer.mozSourceNode
slug: Web/API/DataTransfer/mozSourceNode
page-type: web-api-instance-property
tags:
  - API
  - Non-standard
  - Property
  - Reference
  - drag and drop
  - Experimental
browser-compat: api.DataTransfer.mozSourceNode
---
{{APIRef("HTML Drag and Drop API")}}{{SeeCompatTable}}{{Non-standard_header}}

The **`DataTransfer.mozSourceNode`** property is used to
determine the {{domxref("Node")}} over which the mouse cursor was located when the drag
operation was initiated (for example, when a {{HTMLElement("button")}} was clicked). For
external drags or if the calling function cannot reach the node, `null` is
returned.

> **Note:** This property is Firefox-specific.

This property is {{ReadOnlyInline}}.

## Value

A {{domxref("Node")}} representing `node` where the drag originated. Returns
`null` for external drags or if the node cannot be accessed.

## Examples

This example shows the use of the `mozSourceNode` property in the
{{domxref("HTMLElement/dragend_event", "dragend")}} event handler.

```js
function dragend_handler(event)
{
  const dragData = event.dataTransfer;
  const node = dragData.mozSourceNode;
  if (node) {
    console.log(`mozSourceNode = ${dragData.mozSourceNode}`);
  } else {
    console.log("mozSourceNode is null");
  }
}
```

## Specifications

This property is not defined in any Web standard.

## Browser compatibility

{{Compat}}

## See also

- [Drag and drop](/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Recommended Drag Types](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [Dragging and Dropping Multiple Items](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
