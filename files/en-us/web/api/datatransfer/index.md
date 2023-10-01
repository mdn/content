---
title: DataTransfer
slug: Web/API/DataTransfer
page-type: web-api-interface
browser-compat: api.DataTransfer
---

{{APIRef("HTML Drag and Drop API")}}

The **`DataTransfer`** object is used to hold the data that is being dragged during a drag and drop operation. It may hold one or more data items, each of one or more data types. For more information about drag and drop, see [HTML Drag and Drop API](/en-US/docs/Web/API/HTML_Drag_and_Drop_API).

This object is available from the {{domxref("DragEvent.dataTransfer","dataTransfer")}} property of all {{domxref("DragEvent","drag events")}}.

## Constructor

- {{domxref("DataTransfer.DataTransfer","DataTransfer()")}}
  - : Creates and returns a new `DataTransfer` object.

## Instance properties

### Standard properties

- {{domxref("DataTransfer.dropEffect")}}
  - : Gets the type of drag-and-drop operation currently selected or sets the operation to a new type. The value must be `none`, `copy`, `link` or `move`.
- {{domxref("DataTransfer.effectAllowed")}}
  - : Provides all of the types of operations that are possible. Must be one of `none`, `copy`, `copyLink`, `copyMove`, `link`, `linkMove`, `move`, `all` or `uninitialized`.
- {{domxref("DataTransfer.files")}}
  - : Contains a list of all the local files available on the data transfer. If the drag operation doesn't involve dragging files, this property is an empty list.
- {{domxref("DataTransfer.items")}} {{ReadOnlyInline}}
  - : Gives a {{domxref("DataTransferItemList")}} object which is a list of all of the drag data.
- {{domxref("DataTransfer.types")}} {{ReadOnlyInline}}
  - : An array of strings giving the formats that were set in the {{domxref("HTMLElement/dragstart_event", "dragstart")}} event.

### Gecko properties

{{SeeCompatTable}}

## Instance methods

### Standard methods

- {{domxref("DataTransfer.clearData()")}}
  - : Remove the data associated with a given type. The type argument is optional. If the type is empty or not specified, the data associated with all types is removed. If data for the specified type does not exist, or the data transfer contains no data, this method will have no effect.
- {{domxref("DataTransfer.getData()")}}
  - : Retrieves the data for a given type, or an empty string if data for that type does not exist or the data transfer contains no data.
- {{domxref("DataTransfer.setData()")}}
  - : Set the data for a given type. If data for the type does not exist, it is added at the end, such that the last item in the types list will be the new format. If data for the type already exists, the existing data is replaced in the same position.
- {{domxref("DataTransfer.setDragImage()")}}
  - : Set the image to be used for dragging if a custom one is desired.

### Gecko methods

{{Non-standard_Header}}

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
