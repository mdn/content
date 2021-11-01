---
title: DataTransfer.files
slug: Web/API/DataTransfer/files
tags:
  - API
  - HTML DOM
  - Property
  - Reference
  - drag and drop
browser-compat: api.DataTransfer.files
---
{{APIRef("HTML Drag and Drop API")}}

The **`DataTransfer.files`** property is a
{{domxref("FileList","list of the files")}} in the drag operation. If the operation
includes no files, the list is empty.

This feature can be used to drag files from a user's _desktop_ to the browser.

## Syntax

```js
dataTransfer.files;
```

### Return value

A {{domxref("FileList","list")}} of the files in a drag operation, one list item for
each file in the operation. If the drag operation had no files, the list is empty.

## Example

There are two live examples of this interface:

- Firefox only: <https://jsfiddle.net/9C2EF/>
- All browsers: [https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?html,js,output)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
