---
title: DataTransfer.mozCursor
slug: Web/API/DataTransfer/mozCursor
page-type: web-api-instance-property
tags:
  - API
  - Non-standard
  - Property
  - Reference
  - drag and drop
  - Experimental
browser-compat: api.DataTransfer.mozCursor
---
{{APIRef("HTML Drag and Drop API")}}{{SeeCompatTable}}{{Non-standard_header}}

The **`DataTransfer.mozCursor`** property returns or sets the
drag cursor's state. This is primarily used to control the cursor during tab drags.

The possible values are:

- auto
  - : Uses the default system behavior.
- default
  - : Uses the default Gecko behavior, which is to set the cursor to an arrow during the
    drag operation.

> **Note:** If any value other than `default` is
> set, `auto` is assumed.

> **Note:** This property is currently only implemented on
> Windows.

> **Note:** This property is Gecko-specific.

## Value

A string representing one of the values listed above.

## Examples

This example shows the use of the `mozCursor` property.

```js
function drop_handler(event)
{
  const dragData = event.dataTransfer;
  console.log(`mozCursor = ${dragData.mozCursor}`);
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
