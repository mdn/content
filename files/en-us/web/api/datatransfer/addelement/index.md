---
title: "DataTransfer: addElement() method"
short-title: addElement()
slug: Web/API/DataTransfer/addElement
page-type: web-api-instance-method
status:
  - experimental
  - non-standard
browser-compat: api.DataTransfer.addElement
---

{{APIRef("HTML Drag and Drop API")}}{{SeeCompatTable}}{{Non-standard_header}}

The **`addElement()`** method of the {{domxref("DataTransfer")}} interface sets the drag source to the given element. This element will be the element to which {{domxref("HTMLElement/drag_event", "drag")}} and {{domxref("HTMLElement/dragend_event", "dragend")}} events are fired, and not the default target (the node that was dragged).

During a drag operation, this method can only be used in the handler for the {{domxref("HTMLElement/dragstart_event", "dragstart")}} event, because that's the only time the drag operation's data store is writable. Calling it from any other drag event throws a `NoModificationAllowedError` {{domxref("DOMException")}}. See [Modifying the drag data store](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#modifying_the_drag_data_store) for details.

## Syntax

```js-nolint
addElement(element)
```

### Parameters

- `element`
  - : The {{domxref("Element")}} to set as the drag source.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if the drag data store is not in read/write mode.

## Examples

This example shows the use of the `addElement()` method

```js
function changeDragNode(event, node) {
  const dt = event.dataTransfer;
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
- [Working with the drag data store](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
