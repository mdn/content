---
title: DataTransfer.mozSetDataAt()
slug: Web/API/DataTransfer/mozSetDataAt
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Non-standard
  - Reference
  - drag and drop
  - Deprecated
browser-compat: api.DataTransfer.mozSetDataAt
---
{{APIRef("HTML Drag and Drop API")}}{{Deprecated_Header}}{{Non-standard_header}}

The **`DataTransfer.mozSetDataAt()`** method is used to add
data to a specific index in the drag event's {{domxref("DataTransfer","data transfer")}}
object.

A data transfer may store multiple items, each at a given zero-based index.
`mozSetDataAt()` may only be called with an index argument less than
{{domxref("DataTransfer.mozItemCount","mozItemCount")}} in which case an existing item
is modified, or equal to {{domxref("DataTransfer.mozItemCount","mozItemCount")}} in
which case a new item is added, and the
{{domxref("DataTransfer.mozItemCount","mozItemCount")}} is incremented by one.

Data should be added in order of preference, with the most specific format added first
and the least specific format added last. If data of the given format already exists, it
is replaced in the same position as the old data.

The data should be either a string, a boolean value
or number type (which will be converted into a string) or an `nsISupports`.

> **Note:** This method is Firefox-specific.

## Syntax

```js
mozSetDataAt(data, index)
mozSetDataAt(type, data, index)
```

### Parameters

- `type`
  - : A string representing the type of the drag data to add to
    the {{domxref("DataTransfer","drag data object")}}.
- `data`
  - : A `nsIVariant` representing the data to add to the
    {{domxref("DataTransfer","drag data object")}}.
- `index`
  - : A `unsigned long` representing the index of the data to add.

### Return value

None ({{jsxref("undefined")}}).

## Examples

This example shows the use of the `mozSetDataAt()` method in a
{{domxref("HTMLElement/dragstart_event", "dragstart")}} handler.

```js
function dragstart_handler(event)
{
  const dt = event.dataTransfer;
  const idx = dt.mozItemCount;
  // Add two new items to the drag transfer
  if (idx >= 0) {
    dt.mozSetDataAt("text/uri-list","http://www.example.com/", idx);
    dt.mozSetDataAt("text/html", "Hello World", idx+1);
  }
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
