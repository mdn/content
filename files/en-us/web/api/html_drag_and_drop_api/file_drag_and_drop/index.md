---
title: File drag and drop
slug: Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
page-type: guide
tags:
  - Guide
  - drag and drop
  - drop zone
---
{{DefaultAPISidebar("HTML Drag and Drop API")}}

HTML Drag and Drop interfaces enable web applications to drag and drop files on a web page. This document describes how an application can accept one or more files that are dragged from the underlying platform's _file manager_ and dropped on a web page.

The main steps to drag and drop are to define a _drop zone_ (i.e. a target element for the file drop) and to define event handlers for the {{domxref("HTMLElement/drop_event", "drop")}} and {{domxref("HTMLElement/dragover_event", "dragover")}} events. These steps are described below, including example code snippets. The full source code is available in [MDN's drag-and-drop repository](https://github.com/mdn/dom-examples/tree/main/drag-and-drop) (pull requests and/or issues are welcome).

Note that {{domxref("HTML_Drag_and_Drop_API","HTML drag and drop")}} defines two different APIs to support dragging and dropping files. One API is the {{domxref("DataTransfer")}} interface and the second API is the {{domxref("DataTransferItem")}} and {{domxref("DataTransferItemList")}} interfaces. This example illustrates the use of both APIs (and does not use any Gecko specific interfaces).

## Define the drop _zone_

The _target element_ of the {{domxref("HTMLElement/drop_event", "drop")}} event needs an `ondrop` event handler. The following code snippet shows how this is done with a {{HTMLelement("div")}} element:

```html
<div id="drop_zone" ondrop="dropHandler(event);">
  <p>Drag one or more files to this <i>drop zone</i>.</p>
</div>
```

Typically, an application will include a {{domxref("HTMLElement/dragover_event", "dragover")}} event handler on the drop target element and that handler will turn off the browser's default drag behavior. To add this handler, you need to include a {{domxref("HTMLElement.dragover_event","ondragover")}} event handler:

```html
<div id="drop_zone" ondrop="dropHandler(event);" ondragover="dragOverHandler(event);">
  <p>Drag one or more files to this <i>drop zone</i>.</p>
</div>
```

Lastly, an application may want to style the drop target element to visually indicate the element is a drop zone. In this example, the drop target element uses the following styling:

```css
#drop_zone {
  border: 5px solid blue;
  width:  200px;
  height: 100px;
}
```

> **Note:** `dragstart` and `dragend` events are not fired when dragging a file into the browser from the OS.

## Process the drop

The {{domxref("HTMLElement/drop_event", "drop")}} event is fired when the user drops the file(s). In the following drop handler, if the browser supports {{domxref("DataTransferItemList")}} interface, the {{domxref("DataTransferItem.getAsFile","getAsFile()")}} method is used to access each file; otherwise the {{domxref("DataTransfer")}} interface's {{domxref("DataTransfer.files","files")}} property is used to access each file.

This example shows how to write the name of each dragged file to the console. In a _real_ application, an application may want to process a file using the {{domxref("File","File API")}}.

Note that in this example, any drag item that is not a file is ignored.

```js
function dropHandler(ev) {
  console.log('File(s) dropped');

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    [...ev.dataTransfer.items].forEach((item, i) => {
      // If dropped items aren't files, reject them
      if (item.kind === 'file') {
        const file = item.getAsFile();
        console.log(`… file[${i}].name = ${file.name}`);
      }
    });
  } else {
    // Use DataTransfer interface to access the file(s)
    [...ev.dataTransfer.files].forEach((file, i) => {
      console.log(`… file[${i}].name = ${file.name}`);
    });
  }
}
```

## Prevent the browser's default drag behavior

The following {{domxref("HTMLElement/dragover_event", "dragover")}} event handler calls {{domxref("Event.preventDefault","preventDefault()")}} to turn off the browser's default drag and drop handler.

```js
function dragOverHandler(ev) {
  console.log('File(s) in drop zone');

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
}
```

## See also

- [HTML Drag and Drop API](/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
