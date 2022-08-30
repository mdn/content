---
title: DataTransfer.mozGetDataAt()
slug: Web/API/DataTransfer/mozGetDataAt
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Non-standard
  - Reference
  - drag and drop
  - Deprecated
browser-compat: api.DataTransfer.mozGetDataAt
---
{{APIRef("HTML Drag and Drop API")}}{{Deprecated_Header}}{{Non-standard_header}}

The **`DataTransfer.mozGetDataAt()`** method is used to
retrieve an item in the drag event's {{domxref("DataTransfer","data transfer")}} object,
based on a given `format` and `index`. This method returns
`null` if the specified item does not exist or if the index is not in the
range from zero to the number of items minus one.

> **Note:** This method is Gecko-specific.

## Syntax

```js
mozGetDataAt(index)
mozGetDataAt(type, index)
```

### Parameters

- `type`
  - : A string representing the type of the drag data to
    retrieve from the {{domxref("DataTransfer","drag data object")}}.
- `index`
  - : A `unsigned long` representing the index of the data to retrieve.

### Return value

- `nsIVariant`
  - : The data item requested. If the specified item does not exist, `null` is
    returned.

## Examples

This example shows the use of the `mozGetDataAt()` method in a
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
