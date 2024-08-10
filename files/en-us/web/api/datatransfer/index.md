---
title: DataTransfer
slug: Web/API/DataTransfer
page-type: web-api-interface
browser-compat: api.DataTransfer
---

{{APIRef("HTML Drag and Drop API")}}

The **`DataTransfer`** object is used to hold any data transferred between contexts, such as a drag and drop operation, or clipboard read/write. It may hold one or more data items, each of one or more data types.

`DataTransfer` was primarily designed for the [HTML Drag and Drop API](/en-US/docs/Web/API/HTML_Drag_and_Drop_API), as the {{domxref("DragEvent.dataTransfer")}} property, and is still specified in the HTML drag-and-drop section, but it is now also used by other APIs, such as {{domxref("ClipboardEvent.clipboardData")}} and {{domxref("InputEvent.dataTransfer")}}. However, other APIs only use certain parts of its interface, ignoring properties such as `dropEffect`. Documentation of `DataTransfer` will primarily discuss its usage in drag-and-drop operations, and you should refer to the other APIs' documentation for usage of `DataTransfer` in those contexts.

## Constructor

- {{domxref("DataTransfer.DataTransfer","DataTransfer()")}}
  - : Creates and returns a new `DataTransfer` object.

## Instance properties

- {{domxref("DataTransfer.dropEffect")}}
  - : Gets the type of drag-and-drop operation currently selected or sets the operation to a new type. The value must be `none`, `copy`, `link` or `move`.
- {{domxref("DataTransfer.effectAllowed")}}
  - : Provides all of the types of operations that are possible. Must be one of `none`, `copy`, `copyLink`, `copyMove`, `link`, `linkMove`, `move`, `all` or `uninitialized`.
- {{domxref("DataTransfer.files")}} {{ReadOnlyInline}}
  - : Contains a list of all the local files available on the data transfer. If the drag operation doesn't involve dragging files, this property is an empty list.
- {{domxref("DataTransfer.items")}} {{ReadOnlyInline}}
  - : Gives a {{domxref("DataTransferItemList")}} object which is a list of all of the drag data.
- {{domxref("DataTransfer.types")}} {{ReadOnlyInline}}
  - : An array of strings giving the formats that were set in the {{domxref("HTMLElement/dragstart_event", "dragstart")}} event.

## Instance methods

- {{domxref("DataTransfer.addElement()")}} {{experimental_inline}} {{non-standard_inline}}
  - : Sets the drag source for the given element. This will be the element on which {{domxref("HTMLElement/drag_event", "drag")}} and {{domxref("HTMLElement/dragend_event", "dragend")}} events are fired, and not the default target (the node that was dragged). Firefox-specific.
- {{domxref("DataTransfer.clearData()")}}
  - : Remove the data associated with a given type. The type argument is optional. If the type is empty or not specified, the data associated with all types is removed. If data for the specified type does not exist, or the data transfer contains no data, this method will have no effect.
- {{domxref("DataTransfer.getData()")}}
  - : Retrieves the data for a given type, or an empty string if data for that type does not exist or the data transfer contains no data.
- {{domxref("DataTransfer.setData()")}}
  - : Set the data for a given type. If data for the type does not exist, it is added at the end, such that the last item in the types list will be the new format. If data for the type already exists, the existing data is replaced in the same position.
- {{domxref("DataTransfer.setDragImage()")}}
  - : Set the image to be used for dragging if a custom one is desired.

## Examples

Every method and property listed in this document has its own reference page and each reference page either directly includes an example of the interface or has a link to an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Drag and drop](/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Recommended Drag Types](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
