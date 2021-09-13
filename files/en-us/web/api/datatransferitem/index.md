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
<div>{{APIRef("HTML Drag and Drop API")}}</div>

<p>The <code><strong>DataTransferItem</strong></code> object represents one drag data item. During a <em>drag operation</em>, each {{domxref("DragEvent","drag event")}} has a {{domxref("DragEvent.dataTransfer","dataTransfer")}} property which contains a {{domxref("DataTransferItemList","list")}} of drag data items. Each item in the list is a <code>DataTransferItem</code> object.</p>

<p>This interface has no constructor.</p>

<h2 id="Properties">Properties</h2>

<dl>
 <dt>{{domxref("DataTransferItem.kind")}} {{readonlyInline}}</dt>
 <dd>The <em>kind</em> of drag data item, <code>string</code> or <code>file</code>.</dd>
 <dt>{{domxref("DataTransferItem.type")}} {{readonlyInline}}</dt>
 <dd>The drag data item's type, typically a MIME type.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<dl>
 <dt>{{domxref("DataTransferItem.getAsFile()")}}</dt>
 <dd>Returns the {{domxref("File")}} object associated with the drag data item (or null if the drag item is not a file).</dd>
 <dt>{{domxref("DataTransferItem.getAsFileSystemHandle()")}}</dt>
 <dd>Returns a {{domxref('FileSystemFileHandle')}} if the dragged item is a file, or a {{domxref('FileSystemDirectoryHandle')}} if the dragged item is a directory.</dd>
 <dt>{{domxref("DataTransferItem.getAsString()")}}</dt>
 <dd>Invokes the specified callback with the drag data item string as its argument.</dd>
 <dt>{{domxref("DataTransferItem.webkitGetAsEntry()")}} {{Non-standard_inline}}</dt>
 <dd>Returns an object based on {{domxref("FileSystemEntry")}} representing the selected file's entry in its file system. This will generally be either a {{domxref("FileSystemFileEntry")}} or {{domxref("FileSystemDirectoryEntry")}} object.</dd>
</dl>

<h2 id="Example">Example</h2>

<p>All of this interface's methods and properties have their own reference page, and each reference page has an example of its usage.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
