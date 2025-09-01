---
title: File drag and drop
slug: Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
page-type: guide
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

As mentioned on [the landing page](/en-US/docs/Web/API/HTML_Drag_and_Drop_API#concepts_and_usage), the Drag and Drop API simultaneously models three use cases: dragging elements within a page, dragging data out of a page, and dragging data into a page. This tutorial demonstrates the third use case: dragging data into a page. We will be implementing a basic drop zone that admits dropping image files from the user's operation system file explorer and displays them on the page. For users who can't or don't want to use drag & drop, we also provide the alternative functionality of file selection via an `<input>` element.

## Basic page layout

Because we want to allow normal `<input>` file selection as well, it makes sense for the drop zone to be backed by an `<input>` element so that we can simultaneously drag into it and click on it. We take advantage of a common trick, which is to make the `<input>` invisible, and use its associated {{HTMLElement("label")}} to interact with the user instead, because `<label>` elements are much easier to style. We also add the elements for previewing the dropped images.

```html live-sample___file-dnd
<label id="drop-zone">
  Drop images here, or click to upload.
  <input type="file" id="file-input" multiple accept="image/*" />
</label>
<ul id="preview"></ul>
<button id="clear-btn">Clear</button>
```

We style the label element to visually indicate the element is a drop zone, and hide the file input.

```css live-sample___file-dnd
body {
  font-family: "Arial", sans-serif;
}

#drop-zone {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  max-width: 100%;
  height: 200px;
  padding: 1em;
  border: 1px solid #cccccc;
  border-radius: 4px;
  color: slategray;
  cursor: pointer;
}

#file-input {
  display: none;
}

#preview {
  width: 500px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  list-style: none;
  padding: 0;
}

#preview li {
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin: 0;
  width: 100%;
  height: 100px;
}

#preview img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
```

By virtue of us using the `<label>` and `<input>` elements, no additional JavaScript is needed to implement the file selection UX. We now focus on file dropping and the subsequent processing of the dropped files.

## Declaring the drop target

Our drop target is the `<label>` element. As the _target element_, it listens to the {{domxref("HTMLElement/drop_event", "drop")}} event to process the dropped file.

```js live-sample___file-dnd
const dropZone = document.getElementById("drop-zone");

dropZone.addEventListener("drop", dropHandler);
```

For file dropping, the browser may process them by default (such as opening or downloading the file) even when the file is not dropped into a valid drop target. To prevent this behavior, we also need to listen for the `drop` event on `window` and cancel it. We take care to only handle the event only if a file is being dragged; if it's something else, such as a link, we still use the default behavior. If the dragged item is a non-image file, we still handle the event, but provide feedback to the user that it is not allowed.

```js live-sample___file-dnd
window.addEventListener("drop", (e) => {
  if ([...e.dataTransfer.items].some((item) => item.kind === "file")) {
    e.preventDefault();
  }
});
```

In order for the `drop` event to fire, the element must also cancel the {{domxref("HTMLElement/dragover_event", "dragover")}} event. Because we are listening for `drop` on `window`, we need to cancel the `dragover` event for the whole `window` as well. We also set {{domxref("DataTransfer.dropEffect")}} to `none` if the file is not an image or not dragged to the correct place.

```js live-sample___file-dnd
dropZone.addEventListener("dragover", (e) => {
  const fileItems = [...e.dataTransfer.items].filter(
    (item) => item.kind === "file",
  );
  if (fileItems.length > 0) {
    e.preventDefault();
    if (fileItems.some((item) => item.type.startsWith("image/"))) {
      e.dataTransfer.dropEffect = "copy";
    } else {
      e.dataTransfer.dropEffect = "none";
    }
  }
});

window.addEventListener("dragover", (e) => {
  const fileItems = [...e.dataTransfer.items].filter(
    (item) => item.kind === "file",
  );
  if (fileItems.length > 0) {
    e.preventDefault();
    if (!dropZone.contains(e.target)) {
      e.dataTransfer.dropEffect = "none";
    }
  }
});
```

> [!NOTE]
> {{domxref("HTMLElement/dragstart_event", "dragstart")}} and {{domxref("HTMLElement/dragend_event", "dragend")}} events are not fired when dragging a file into the browser from the OS. To detect when OS files are dragged into the browser, use {{domxref("HTMLElement/dragenter_event", "dragenter")}} and {{domxref("HTMLElement/dragleave_event", "dragleave")}}.
> This means that it is not possible to use {{domxref("DataTransfer.setDragImage","setDragImage()")}} to apply a custom drag image/cursor overlay when dragging files from the OS — because the drag data store can only be modified in the {{domxref("HTMLElement/dragstart_event", "dragstart")}} event. This also applies to {{domxref("DataTransfer.setData","setData()")}}.

## Processing the drop

Now we implement the `dropHandler` by using the {{domxref("DataTransferItem.getAsFile","getAsFile()")}} method to access each file. Then your application can decide how to process this file using the [File API](/en-US/docs/Web/API/File_API). Here we just display them on the page; in practice, you probably want to eventually upload them to the server as well.

```js live-sample___file-dnd
const preview = document.getElementById("preview");

function displayImages(files) {
  for (const file of files) {
    if (file.type.startsWith("image/")) {
      const li = document.createElement("li");
      const img = document.createElement("img");
      img.src = URL.createObjectURL(file);
      img.alt = file.name;
      li.appendChild(img);
      li.appendChild(document.createTextNode(file.name));
      preview.appendChild(li);
    }
  }
}

function dropHandler(ev) {
  ev.preventDefault();
  const files = [...ev.dataTransfer.items]
    .map((item) => item.getAsFile())
    .filter((file) => file);
  displayImages(files);
}
```

## Adding the same behavior to the input

The above is the whole data flow for the drag and drop; now we need to wire the `displayImages()` function to the file input as well.

```js live-sample___file-dnd
const fileInput = document.getElementById("file-input");
fileInput.addEventListener("change", (e) => {
  displayImages(e.target.files);
});
```

## Clear button

Finally we add a way to clear the preview area. We use {{domxref("URL.revokeObjectURL_static","URL.revokeObjectURL()")}} to release the memory used by the image objects.

```js live-sample___file-dnd
const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", () => {
  for (const img of preview.querySelectorAll("img")) {
    URL.revokeObjectURL(img.src);
  }
  preview.textContent = "";
});
```

## Result

{{EmbedLiveSample("file-dnd", "", 500)}}

## See also

- [HTML Drag and Drop API](/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
