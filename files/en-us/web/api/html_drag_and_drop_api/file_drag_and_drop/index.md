---
title: File drag and drop
slug: Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
page-type: guide
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

HTML Drag and Drop interfaces enable web applications to drag and drop files on a web page. This document describes how an application can accept one or more files that are dragged from the underlying platform's _file manager_ and dropped on a web page.

The main steps to drag and drop are to define a _drop zone_ (i.e., a target element for the file drop) and to define event handlers for the {{domxref("HTMLElement/drop_event", "drop")}} and {{domxref("HTMLElement/dragover_event", "dragover")}} events. These steps are described below, including example code snippets.

## Define the drop zone

The HTML defines the drop zone as a {{htmlelement("div")}}, and an output region ({{htmlelement("pre")}}) to be populated later.

```html live-sample___file-dnd
<div id="drop-zone">
  <p>Drag one or more files to this <i>drop zone</i>.</p>
</div>
<pre id="output"></pre>
```

As the _target element_, it listens to the {{domxref("HTMLElement/drop_event", "drop")}} event to process the dropped file.

```js live-sample___file-dnd
const dropZone = document.getElementById("drop-zone");
const output = document.getElementById("output");

dropZone.addEventListener("drop", dropHandler);
```

In order for the `drop` event to fire, the element must also cancel the {{domxref("HTMLElement/dragover_event", "dragover")}} event. Here, we cancel the event on `window` (which would also cancel the event fired on `dropZone` as it bubbles up), because we also want to listen for the `drop` event on `window` to prevent the default browser action of opening the file when it was not dropped into the drop zone.

```js live-sample___file-dnd
window.addEventListener("dragover", (e) => {
  e.preventDefault();
});
window.addEventListener("drop", (e) => {
  e.preventDefault();
});
```

Lastly, an application may want to style the drop target element to visually indicate the element is a drop zone. In this example, the drop target element uses the following styling:

```css live-sample___file-dnd
#drop-zone {
  border: 5px solid blue;
  width: 200px;
  height: 100px;
}
```

```css hidden live-sample___file-dnd
div {
  margin: 0em;
  padding: 2em;
}
```

> [!NOTE]
> {{domxref("HTMLElement/dragstart_event", "dragstart")}} and {{domxref("HTMLElement/dragend_event", "dragend")}} events are not fired when dragging a file into the browser from the OS. To detect when OS files are dragged into the browser, use {{domxref("HTMLElement/dragenter_event", "dragenter")}} and {{domxref("HTMLElement/dragleave_event", "dragleave")}}.
> This means that it is not possible to use {{domxref("DataTransfer.setDragImage","setDragImage()")}} to apply a custom drag image/cursor overlay when dragging files from the OS — because the drag data store can only be modified in the {{domxref("HTMLElement/dragstart_event", "dragstart")}} event. This also applies to {{domxref("DataTransfer.setData","setData()")}}.

## Process the drop

The {{domxref("HTMLElement/drop_event", "drop")}} event is fired when the user drops the file(s). In the following drop handler, the {{domxref("DataTransferItem.getAsFile","getAsFile()")}} method is used to access each file. This example shows how to write the name of each dragged file to the console. In a _real_ application, an application may want to process a file using the [File API](/en-US/docs/Web/API/File_API).

Note that in this example, any drag item that is not a file is ignored.

```js live-sample___file-dnd
function dropHandler(ev) {
  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
  let result = "";
  // Use DataTransferItemList interface to access the file(s)
  [...ev.dataTransfer.items].forEach((item, i) => {
    // If dropped items aren't files, reject them
    if (item.kind === "file") {
      const file = item.getAsFile();
      result += `• file[${i}].name = ${file.name}\n`;
    }
  });
  output.textContent = result;
}
```

## Result

{{EmbedLiveSample("file-dnd", "", 300)}}

## See also

- [HTML Drag and Drop API](/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
