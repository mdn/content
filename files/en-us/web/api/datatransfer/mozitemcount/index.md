---
title: DataTransfer.mozItemCount
slug: Web/API/DataTransfer/mozItemCount
tags:
  - API
  - Non-standard
  - Property
  - Reference
  - drag and drop
  - Deprecated
browser-compat: api.DataTransfer.mozItemCount
---
{{APIRef("HTML Drag and Drop API")}}

{{ Non-standard_header() }}{{deprecated_header}}

The **`DataTransfer.mozItemCount`** property returns the number
of items being dragged. This can be used, for example, to get the number of files being
dragged.

> **Note:** This property is Gecko-specific.

This property is {{readonlyInline}}.

## Syntax

```js
dataTransfer.mozItemCount;
```

### Return value

A `number` representing the number of items being dragged.

## Example

This example shows the use of the `mozItemCount` property.

```js
function drop_handler(event)
{
  var files = [];
  var dt = event.dataTransfer;
  for (var i = 0; i < dt.mozItemCount; i++)
    files.push(dt.mozGetDataAt("application/x-moz-file", i));
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
