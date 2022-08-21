---
title: DataTransfer
slug: Web/API/DataTransfer
page-type: web-api-interface
tags:
  - API
  - DataTransfer
  - HTML Drag and Drop API
  - Interface
  - NeedsMarkupWork
  - Reference
  - Web Development
  - drag and drop
browser-compat: api.DataTransfer
---
{{APIRef("HTML Drag and Drop API")}}

The **`DataTransfer`** object is used to hold the data that is being dragged during a drag and drop operation. It may hold one or more data items, each of one or more data types. For more information about drag and drop, see [HTML Drag and Drop API](/en-US/docs/Web/API/HTML_Drag_and_Drop_API).

This object is available from the {{domxref("DragEvent.dataTransfer","dataTransfer")}} property of all {{domxref("DragEvent","drag events")}}.

## Constructor

- {{domxref("DataTransfer.DataTransfer","DataTransfer()")}}
  - : Creates and returns a new `DataTransfer` object.

## Properties

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

> **Note:** All of the properties in this section are Gecko-specific.

- {{domxref("DataTransfer.mozCursor")}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Gives the drag cursor's state. This is primarily used to control the cursor during tab drags.
- {{domxref("DataTransfer.mozSourceNode")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : The {{ domxref("Node") }} over which the mouse cursor was located when the button was pressed to initiate the drag operation. This value is `null` for external drags or if the caller can't access the node.
- {{domxref("DataTransfer.mozUserCancelled")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : This property applies only to the `dragend` event, and is `true` if the user canceled the drag operation by pressing escape. It will be `false` in all other cases, including if the drag failed for any other reason, for instance due to a drop over an invalid location.

### Deprecated properties

- {{domxref("DataTransfer.mozItemCount")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gives the number of items in the drag operation. Removed in Firefox 71.

## Methods

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

> **Note:** All of the methods in this section are Gecko-specific.

- {{domxref("DataTransfer.addElement()")}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Sets the drag source to the given element.

### Deprecated methods

- {{domxref("DataTransfer.mozClearDataAt()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Removes the data associated with the given format for an item at the specified index. The index is in the range from zero to the number of items minus one. Removed in Firefox 71.
- {{domxref("DataTransfer.mozGetDataAt()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Retrieves the data associated with the given format for an item at the specified index, or null if it does not exist. The index should be in the range from zero to the number of items minus one. Removed in Firefox 71.
- {{domxref("DataTransfer.mozSetDataAt()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : A data transfer may store multiple items, each at a given zero-based index. `mozSetDataAt()` may only be called with an index argument less than `mozItemCount` in which case an existing item is modified, or equal to `mozItemCount` in which case a new item is added, and the `mozItemCount` is incremented by one. Removed in Firefox 71.
- {{domxref("DataTransfer.mozTypesAt()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Holds a list of the format types of the data that is stored for an item at the specified index. If the index is not in the range from 0 to the number of items minus one, an empty string list is returned. Removed in Firefox 71.

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
- [Dragging and Dropping Multiple Items](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
