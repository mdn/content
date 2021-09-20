---
title: DataTransfer.mozGetDataAt()
slug: Web/API/DataTransfer/mozGetDataAt
tags:
  - API
  - Method
  - Non-standard
  - Reference
  - drag and drop
  - Deprecated
browser-compat: api.DataTransfer.mozGetDataAt
---
{{APIRef("HTML Drag and Drop API")}}

{{ Non-standard_header() }}{{deprecated_header}}

The **`DataTransfer.mozGetDataAt()`** method is used to
retrieve an item in the drag event's {{domxref("DataTransfer","data transfer")}} object,
based on a given `format` and `index`. This method returns
`null` if the specified item does not exist or if the index is not in the
range from zero to the number of items minus one.

> **Note:** This method is Gecko-specific.

## Syntax

```js
nsIVariant dataTransfer.mozGetDataAt([type], index);
```

### Arguments

- _type_
  - : A {{domxref("DOMString","string")}} representing the type of the drag data to
    retrieve from the {{domxref("DataTransfer","drag data object")}}.
- _index_
  - : A `unsigned long` representing the index of the data to retrieve.

### Return value

- {{interface("nsIVariant")}}
  - : The data item requested. If the specified item does not exist, `null` is
    returned.

## Example

This example shows the use of the `mozGetDataAt()` method in a
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
