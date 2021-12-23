---
title: DataTransfer.mozUserCancelled
slug: Web/API/DataTransfer/mozUserCancelled
tags:
  - API
  - Non-standard
  - Property
  - Reference
  - drag and drop
browser-compat: api.DataTransfer.mozUserCancelled
---
{{APIRef("HTML Drag and Drop API")}}

{{ Non-standard_header() }}

The **`DataTransfer.mozUserCancelled`** property is used in the
{{event("dragend")}} event handler to determine if the user canceled the drag or not. If
the user canceled the event, the property returns `true` and returns
`false` otherwise. This property only applies to the {{event("dragend")}}
event.

> **Note:** This property is Firefox-specific.

This property is {{readonlyInline}}.

## Syntax

```js
dataTransfer.mozUserCancelled;
```

### Return value

A boolean value representing `true` if the user canceled the drag
event and returns `false` otherwise.

## Example

This example shows the use of the `mozUserCancelled` property in the
{{event("dragend")}} event handler.

```js
function dragend_handler(event)
{
  var dragData = event.dataTransfer;
  console.log("mozUserCancelled = " + dragData.mozUserCancelled);
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
