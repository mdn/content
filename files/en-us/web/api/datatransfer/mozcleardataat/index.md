---
title: DataTransfer.mozClearDataAt()
slug: Web/API/DataTransfer/mozClearDataAt
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Non-standard
  - Reference
  - drag and drop
  - Deprecated
browser-compat: api.DataTransfer.mozClearDataAt
---
{{APIRef("HTML Drag and Drop API")}}{{Deprecated_Header}}{{Non-standard_header}}

The **`DataTransfer.mozClearDataAt()`** method removes the data
associated with the given format for an item at the specified index. The index must be
in the range from zero to the number of items minus one.

If the `format` argument is not provided, then the data associated with all
formats is removed. If the format is not found, then this method has no effect. If the
last format for the item is removed, the entire item is removed, reducing
{{domxref("DataTransfer.mozItemCount","mozItemCount")}} by one.

Removing the last format for a particular index removes that item
entirely, shifting the remaining items down and changing their indices.

> **Note:** This method is Gecko-specific.

## Syntax

```js
mozClearDataAt(index)
mozClearDataAt(type, index)
```

### Parameters

- `type`
  - : A string representing the type of the drag data to remove
    from the {{domxref("DataTransfer","drag data object")}}.
- `index`
  - : A `unsigned long` representing the index of the data to remove.

### Return value

None ({{jsxref("undefined")}}).

## Examples

This example shows the use of the `mozClearDataAt()` method in a
{{domxref("HTMLElement/dragend_event", "dragend")}} event handler.

```js
function dragend_handler(event)
{
  const dt = event.dataTransfer;
  // Remove a text/html item
  dt.mozClearDataAt("text/html", 1);
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
- [Dragging and Dropping Multiple Items](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
