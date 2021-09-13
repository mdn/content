---
title: DataTransferItem
slug: Web/API/DataTransferItem
tags:
  - API
  - DataTransferItem
  - HTML DOM
  - HTML Drag and Drop API
  - Interface
  - Reference
  - drag and drop
browser-compat: api.DataTransferItem
---
{{APIRef("HTML Drag and Drop API")}}

The **`DataTransferItem`** object represents one drag data item. During a _drag operation_, each {{domxref("DragEvent","drag event")}} has a {{domxref("DragEvent.dataTransfer","dataTransfer")}} property which contains a {{domxref("DataTransferItemList","list")}} of drag data items. Each item in the list is a `DataTransferItem` object.

This interface has no constructor.

## Properties

- {{domxref("DataTransferItem.kind")}} {{readonlyInline}}
  - : The _kind_ of drag data item, `string` or `file`.
- {{domxref("DataTransferItem.type")}} {{readonlyInline}}
  - : The drag data item's type, typically a MIME type.

## Methods

- {{domxref("DataTransferItem.getAsFile()")}}
  - : Returns the {{domxref("File")}} object associated with the drag data item (or null if the drag item is not a file).
- {{domxref("DataTransferItem.getAsFileSystemHandle()")}}
  - : Returns a {{domxref('FileSystemFileHandle')}} if the dragged item is a file, or a {{domxref('FileSystemDirectoryHandle')}} if the dragged item is a directory.
- {{domxref("DataTransferItem.getAsString()")}}
  - : Invokes the specified callback with the drag data item string as its argument.
- {{domxref("DataTransferItem.webkitGetAsEntry()")}} {{Non-standard_inline}}
  - : Returns an object based on {{domxref("FileSystemEntry")}} representing the selected file's entry in its file system. This will generally be either a {{domxref("FileSystemFileEntry")}} or {{domxref("FileSystemDirectoryEntry")}} object.

## Example

All of this interface's methods and properties have their own reference page, and each reference page has an example of its usage.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
