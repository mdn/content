---
title: DataTransfer.addElement()
slug: Web/API/DataTransfer/addElement
tags:
  - API
  - Method
  - Non-standard
  - Reference
  - drag and drop
browser-compat: api.DataTransfer.addElement
---
{{APIRef("HTML Drag and Drop API")}}

{{Non-standard_header()}}

The **`DataTransfer.addElement()`** method sets the drag source
to the given element. This element will be the element to which {{event("drag")}} and
{{event("dragend")}} events are fired, and not the default target (the node that was
dragged).

> **Note:** This method is Firefox-specific.

## Syntax

```js
void dataTransfer.addElement(el);
```

### Arguments

- _el_
  - : The {{domxref("Element")}} to set as the drag source.

### Return value

None.

## Example

This example shows the use of the `addElement()` method

```js
function change_drag_node(event, node)
{
  var dt = event.dataTransfer;
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
- [Dragging and Dropping Multiple Items](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
