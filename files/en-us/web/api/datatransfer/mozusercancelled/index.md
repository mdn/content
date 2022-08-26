---
title: DataTransfer.mozUserCancelled
slug: Web/API/DataTransfer/mozUserCancelled
page-type: web-api-instance-property
tags:
  - API
  - Non-standard
  - Property
  - Reference
  - drag and drop
  - Experimental
browser-compat: api.DataTransfer.mozUserCancelled
---
{{APIRef("HTML Drag and Drop API")}}{{SeeCompatTable}}{{Non-standard_header}}

The **`DataTransfer.mozUserCancelled`** property is used in the
{{domxref("HTMLElement/dragend_event", "dragend")}} event handler to determine if the user canceled the drag or not. If
the user canceled the event, the property returns `true` and returns
`false` otherwise. This property only applies to the {{domxref("HTMLElement/dragend_event", "dragend")}}
event.

> **Note:** This property is Firefox-specific.

This property is {{ReadOnlyInline}}.

## Value

A boolean value representing `true` if the user canceled the drag
event and returns `false` otherwise.

## Examples

This example shows the use of the `mozUserCancelled` property in the
{{domxref("HTMLElement/dragend_event", "dragend")}} event handler.

```js
function dragend_handler(event)
{
  const dragData = event.dataTransfer;
  console.log(`mozUserCancelled = ${dragData.mozUserCancelled}`);
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
