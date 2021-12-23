---
title: DataTransfer.mozTypesAt()
slug: Web/API/DataTransfer/mozTypesAt
tags:
  - API
  - Method
  - Non-standard
  - Reference
  - drag and drop
  - Deprecated
browser-compat: api.DataTransfer.mozTypesAt
---
{{APIRef("HTML Drag and Drop API")}}

{{deprecated_header}}{{Non-standard_header()}}

The **`DataTransfer.mozTypesAt()`** method returns a list of
the format types that are stored for an item at the specified index. If the index is not
in the range from 0 to the number of items minus one, an empty string list is returned.

> **Note:** This method is Firefox-specific.

## Syntax

```js
mozTypesAt(index);
```

### Arguments

- _index_
  - : A `unsigned long` that is the index of the data for which to retrieve the
    types.

### Return value

- {{interface("nsIVariant")}}
  - : A list of data formats (which are {{domxref("DOMString","strings")}}). If the index
    is not in the range from 0 to the number of items minus one, an empty string list is
    returned.

## Example

This example shows the use of the `mozTypesAt()` method in a
{{event("drop")}} event handler.

```js
function drop_handler(event)
{
  var dt = event.dataTransfer;
  var count = dt.mozItemCount;
  output("Items: " + count + "\n");

  for (var i = 0; i < count; i++) {
    output(" Item " + i + ":\n");
    var types = dt.mozTypesAt(i);
    for (var t = 0; t < types.length; t++) {
      output("  " + types[t] + ": ");
      try {
        var data = dt.mozGetDataAt(types[t], i);
        output("(" + (typeof data) + ") : <" + data + " >\n");
      } catch (ex) {
        output("<>\n");
        dump(ex);
      }
    }
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
