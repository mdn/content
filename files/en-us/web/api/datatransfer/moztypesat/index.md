---
title: DataTransfer.mozTypesAt()
slug: Web/API/DataTransfer/mozTypesAt
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Non-standard
  - Reference
  - drag and drop
  - Deprecated
browser-compat: api.DataTransfer.mozTypesAt
---
{{APIRef("HTML Drag and Drop API")}}{{Deprecated_Header}}{{Non-standard_header}}

The **`DataTransfer.mozTypesAt()`** method returns a list of
the format types that are stored for an item at the specified index. If the index is not
in the range from 0 to the number of items minus one, an empty string list is returned.

> **Note:** This method is Firefox-specific.

## Syntax

```js
mozTypesAt(index)
```

### Parameters

- `index`
  - : A `unsigned long` that is the index of the data for which to retrieve the
    types.

### Return value

A list of data formats (which are strings). If the index
    is not in the range from 0 to the number of items minus one, an empty string list is
    returned.

## Examples

This example shows the use of the `mozTypesAt()` method in a
{{domxref("HTMLElement/drop_event", "drop")}} event handler.

```js
function drop_handler(event)
{
  const dt = event.dataTransfer;
  const count = dt.mozItemCount;
  output(`Items: ${count}\n`);

  for (let i = 0; i < count; i++) {
    output(` Item ${i}:\n`);
    const types = dt.mozTypesAt(i);
    for (let t = 0; t < types.length; t++) {
      output(`  ${types[t]}: `);
      try {
        const data = dt.mozGetDataAt(types[t], i);
        output(`(${typeof data}) : <${data}>\n`);
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
