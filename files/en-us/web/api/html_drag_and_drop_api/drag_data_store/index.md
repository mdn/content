---
title: Working with the drag data store
slug: Web/API/HTML_Drag_and_Drop_API/Drag_data_store
page-type: guide
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

The {{domxref("DragEvent")}} interface has a {{domxref("DragEvent.dataTransfer","dataTransfer")}} property, which is a {{domxref("DataTransfer")}} object. {{domxref("DataTransfer")}} objects represent the main context of the drag operation, and it stays consistent across the firing of different events. It includes the [drag data](/en-US/docs/Web/API/HTML_Drag_and_Drop_API#drag_data_store), drag image, drop effect, etc. This article focuses on the _data store_ part of the `dataTransfer`.

## DataTransfer, DataTransferItem, and DataTransferItemList

Fundamentally, the drag data store is a list of items, represented as a {{domxref("DataTransferItemList")}} of {{domxref("DataTransferItem")}} objects. Each item can be one of two [kinds](/en-US/docs/Web/API/DataTransferItem/kind):

- `string`: its payload is a string, retrievable with {{domxref("DataTransferItem.getAsString", "getAsString()")}}.
- `file`: its payload is a file object, retrievable with {{domxref("DataTransferItem.getAsFile", "getAsFile()")}} (or {{domxref("DataTransferItem.getAsFileSystemHandle", "getAsFileSystemHandle()")}} or {{domxref("DataTransferItem.webkitGetAsEntry", "webkitGetAsEntry()")}}, if more complex file system operations are needed).

Furthermore the item is also identified by a [type](/en-US/docs/Web/API/DataTransferItem/type), which by convention is in the form of a [MIME type](/en-US/docs/Web/HTTP/Guides/MIME_types). This type can instruct the consumer about how the payload should be parsed or decoded. For all text items, the list can only have one item of each type, so the list, in effect, contains two disjoint collections: a list of files with potentially duplicate types, and a {{jsxref("Map")}} of text items keyed by their type. Generally, the files list represents multiple files being dragged. The text map _does not_ represent multiple resources being transferred, but the same resource encoded in different ways, so that the receiving end can choose the most appropriate supported interpretation. The text items are intended to be sorted in descending order of preference.

This list is accessible via the {{domxref("DataTransfer.items")}} property.

The HTML Drag and Drop API went through multiple iterations, resulting in two coexisting ways to manage the data store. Before the `DataTransferItemList` and `DataTransferItem` interfaces, the "old way" used the following properties on `DataTransfer`:

- {{domxref("DataTransfer.types", "types")}}: contains the `type` properties of the _text items_ in the list, plus the value `"files"` if there are any _file items_.
- {{domxref("DataTransfer.setData", "setData()")}}, {{domxref("DataTransfer.getData", "getData()")}}, {{domxref("DataTransfer.clearData", "clearData()")}}: provide access to the _text items_ in the list using the "type-to-payload mapping" model.
- {{domxref("DataTransfer.files", "files")}}: provides access to the _file items_ in the list

You may see that the types of the _file items_ are not directly exposed. They are still accessible, but only via the {{domxref("Blob.type", "type")}} property of each {{domxref("File")}} object in the `files` list, so if you can't read the files, then you can't know their types either (see [reading the drag data store](#reading_the_drag_data_store) for when the store is readable). It is now recommended to just use the `items` property because it provides a more flexible and consistent interface.

Another key difference between the {{domxref("DataTransfer")}} and {{domxref("DataTransferItem")}} interfaces is that the former uses the synchronous {{domxref("DataTransfer.getData","getData()")}} method to access the text payload, but the latter instead uses the asynchronous {{domxref("DataTransferItem.getAsString","getAsString()")}} method.

## Modifying the drag data store

For the default-draggable items such as images, links, and selections, the drag data is already defined by the browser; for custom draggable elements defined using the `draggable` attribute, you must define the drag data yourself. The only time to make any modifications to the data store is within the {{domxref("HTMLElement/dragstart_event", "dragstart")}} handler—for the `dataTransfer` of any other drag event, the data store is unmodifiable.

To add text data to the drag data store, the "new way" uses the {{domxref("DataTransferItemList.add()")}} method, while the "old way" uses the {{domxref("DataTransfer.setData()")}} method.

```js
function dragstartHandler(ev) {
  // New way: add(data, type)
  ev.dataTransfer.items.add(ev.target.innerText, "text/plain");
  // Old way: setData(type, data)
  ev.dataTransfer.setData("text/html", ev.target.outerHTML);
}

const p1 = document.getElementById("p1");
p1.addEventListener("dragstart", dragstartHandler);
```

For both methods, if they are called when the data store is unmodifiable, nothing happens. If a text item with the same type already exists, `add()` throws an error while `setData()` overwrites the existing item.

To add file data to the drag data store, the "new way" still uses the {{domxref("DataTransferItemList.add()")}} method. Because the "old way" stores file items in the {{domxref("DataTransfer.files")}} property, which is a read-only {{domxref("FileList")}}, there's no direct equivalent.

```js
function dragstartHandler(ev) {
  // New way: add(data)
  ev.dataTransfer.items.add(new File([blob], "image.png"));
}

const p1 = document.getElementById("p1");
p1.addEventListener("dragstart", dragstartHandler);
```

Note that when adding file data, `add()` ignores the `type` parameter and uses the {{domxref("Blob.type", "type")}} property of the `File` object.

> [!NOTE]
> Read/write protection is done on a [per-job](/en-US/docs/Web/JavaScript/Reference/Execution_model#job_queue_and_event_loop) basis, which means only the _synchronous code_ within the `dragstart` handler can modify the data store. If you try to access the data store after an asynchronous operation, you will no longer have write permissions. For example, this does not work:
>
> ```js example-bad
> function dragstartHandler(ev) {
>   canvas.toBlob((blob) => {
>     ev.dataTransfer.items.add(new File([blob], "image.png"));
>   });
> }
> ```

Removing data is similar, using the {{domxref("DataTransferItemList.remove()")}}, {{domxref("DataTransferItemList.clear()")}}, or {{domxref("DataTransfer.clearData()")}} methods.

## Reading the drag data store

The only time you can _read_ from the data store, apart from the `dragstart` event when you have full access to the data store, is during the {{domxref("HTMLElement/drop_event", "drop")}} event, allowing the drop target to retrieve the data.

To read text data from the drag data store, the "new way" uses the {{domxref("DataTransferItemList")}} object, while the "old way" uses the {{domxref("DataTransfer.getData()")}} method. The new way is more convenient for looping through all items, while the old way is more convenient for accessing a specific type.

```js
function dropHandler(ev) {
  // New way: loop through items
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "string") {
      item.getAsString((data) => {
        // Do something with data
      });
    }
  }
  // Old way: getData(type)
  const data = ev.dataTransfer.getData("text/plain");
}

const p1 = document.getElementById("p1");
p1.addEventListener("drop", dropHandler);
```

To read file data from the drag data store, the "new way" still uses the {{domxref("DataTransferItemList")}} object, while the "old way" uses the {{domxref("DataTransfer.files")}} property.

```js
function dropHandler(ev) {
  // New way: loop through items
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "file") {
      const file = item.getAsFile(); // A File object
    }
  }
  // Old way: loop through files
  for (const file of ev.dataTransfer.files) {
    // Do something with file
  }
}

const p1 = document.getElementById("p1");
p1.addEventListener("drop", dropHandler);
```

### Protected mode

Outside of `dragstart` and `drop` events, the data store is in _protected mode_, disallowing code from accessing any payload. Namely:

- All [modification](#modifying_the_drag_data_store) attempts silently do nothing or throw an `DOMException` (for `items.add()` and `items.remove()` only).
- `DataTransfer.getData()` always returns the empty string.
- `DataTransfer.files` always returns an empty list.
- `DataTransferItem.getAsString()` returns without ever calling the callback.
- `DataTransferItem.getAsFile()` always returns `null`.

Again, read/write protection is done on a [per-job](/en-US/docs/Web/JavaScript/Reference/Execution_model#job_queue_and_event_loop) basis, which means only the _synchronous code_ within the `drop` handler can read the data store. If you try to access the data store after an asynchronous operation, you will no longer have write permissions. For example, this does not work:

```js example-bad
function getDataPromise(item) {
  return new Promise((resolve) => {
    item.getAsString((data) => {
      resolve(data);
    });
  });
}

async function dropHandler(ev) {
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "string") {
      // Bad: by the second time this runs, we are no longer in the same job
      const data = await getDataPromise(item);
    }
  }
}

const p1 = document.getElementById("p1");
p1.addEventListener("drop", dropHandler);
```

Instead, you must call all the access methods synchronously upfront, and wait for their results later:

```js example-good
async function dropHandler(ev) {
  const promises = [];
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "string") {
      // Bad: by the second time this runs, we are no longer in the same job
      promises.push(getDataPromise(item));
    }
  }
  const results = await Promise.all(promises);
}
```

## Common drag data types

The spec only defines the behavior for a few data types, but browsers sometimes have native support for more types. In general, types are intended as a _protocol_ just like MIME types, and you can use any type as long as the receiving end (another webpage, another part of the same webpage, or even somewhere outside the browser) understands it. This section describes some common conventions and browsers' default behaviors.

### Dragging text

For dragging text, use the `text/plain` type. The second data parameter should be the dragged string. For example:

```js
event.dataTransfer.items.add("This is text to drag", "text/plain");
```

It is recommended to always add data of the `text/plain` type as a fallback for applications or drop targets that do not support other types, unless there is no logical text alternative. Always add this `text/plain` type last, as it is the least specific and shouldn't be preferred.

The `text/plain` type receives the following special treatments in the browser:

- In `getData()`, `setData()`, and `clearData()`, the `Text` type (case-insensitive) is treated as `text/plain`.
- When a selection is dragged, the first data item is a `text/plain` item containing the selected text.
- When dragging over and dropping onto an editable text field, such as a {{HTMLElement("textarea")}} or [`<input type="text">`](/en-US/docs/Web/HTML/Reference/Elements/input/text), the `text/plain` item gets copied into the field by default (without any event handling).

### Dragging links

Dragged hyperlinks should include data of two types: `text/uri-list`, and `text/plain`. _Both_ types should use the link's URL for their data. Note: the URL type is `uri-list` with an _I_, not an _L_.

As usual, set the `text/plain` type last, as a fallback for the `text/uri-list` type. For example:

```js
event.dataTransfer.items.add("https://www.mozilla.org", "text/uri-list");
event.dataTransfer.items.add("https://www.mozilla.org", "text/plain");
```

To drag multiple links, separate each link inside the `text/uri-list` data with a CRLF linebreak. Lines that begin with a number sign (`#`) are comments, and should not be considered URLs. You can use comments to indicate the purpose of a URL, the title associated with a URL, or other data.

> [!WARNING]
> The `text/plain` fallback for multiple links should include all URLs, but no comments.

For example, this sample `text/uri-list` data contains two links and a comment:

```plain
https://www.mozilla.org
#A second link
http://www.example.com
```

When retrieving a dropped link, ensure you handle when multiple links are dragged, including any comments.

The `text/uri-list` type receives the following special treatments in the browser:

- In `getData()`, `setData()`, and `clearData()`, the `URL` type (case-insensitive) is treated as `text/uri-list`. For `getData()`, the result only contains the first URL in the list.
- When an {{HTMLElement("a")}} element, an {{HTMLElement("img")}} element, or a selection that partially or fully contains such elements is dragged, an item of type `text/uri-list` is created containing all such elements' `href` or `src` attributes, if this list is non-empty.

Firefox supports the non-standard `text/x-moz-url` type. If it appears, it should appear before the `text/uri-list` type. It holds the URLs of links followed by their titles, separated by a linebreak. For example:

```plain
https://www.mozilla.org
Mozilla
http://www.example.com
Example
```

### Dragging images

Direct image dragging (that is, the data is the pixel content) is not common, and may be unsupported on certain platforms. Instead, images are usually dragged only by their URLs. To do this, use the `text/uri-list` type as with other URLs. The data should be the URL of the image, or a [`data:` URL](/en-US/docs/Web/URI/Reference/Schemes/data) if the image is not stored on a website or disk.

As with links, the data for the `text/plain` type should also contain the URL. However, a `data:` URL is not usually useful in a text context, so you may wish to exclude the `text/plain` data in this situation.

```js
event.dataTransfer.items.add(imageURL, "text/uri-list");
event.dataTransfer.items.add(imageURL, "text/plain");
```

Firefox supports the non-standard `application/x-moz-file` type if the image is located on disk. This allows the drop target to potentially access the actual file on the user's system, if it's privileged (such as extension code).

### Dragging elements

When the dragged item is an arbitrary element with `draggable="true"`, what data to set depends on what you intend to transfer. By default, browsers create one item of type `application/microdata+json`, containing the [microdata](/en-US/docs/Web/HTML/Guides/Microdata) extracted from the dragged element(s) (multiple elements can be dragged in the case of dragging a selection). When the dragged item is a selection, the browser may also create a `text/html` item containing the full HTML source of the selected elements (with all styles inlined), although this behavior may vary between browsers.

The standard way to transfer the element is to use the `text/html` type containing serialized HTML source code, which the receiving end can then parse and insert. For example, it would be suitable to set its data to the value of the {{domxref("Element/outerHTML","outerHTML")}} property of an element. `text/xml` can be used too, but ensure that the data is well-formed XML.

You may also include a plain text representation of the HTML or XML data using the `text/plain` type. The data should be just the text without any of the source tags or attributes. For instance:

```js
event.dataTransfer.items.add("text/html", element.outerHTML);
event.dataTransfer.items.add("text/plain", element.innerText);
```

You can also use other types that you invent for custom purposes. Strive to always include a `text/plain` alternative, unless the dragged object is specific to a particular site or application. In this case, the custom type ensures that the data cannot be dropped elsewhere.

### Dragging files from an operating system file explorer

When the dragged item is a file, an item of kind `file` is added to the drag data. The `type` is set to the MIME type of the file (as provided by the operating system), or `application/octet-stream` if the type is unknown. Currently, dragged files can only originate outside of the browser, such as from a file explorer.

### Dragging files to an operating system file explorer

What can be transferred out of the browser mostly depends on the browser and where it is dragged to. [Dragging images](#dragging_images) to the local file system is commonly supported and results in the image being downloaded.

Chrome supports the non-standard `DownloadURL` type. The payload should be text in the form `<MIME type>:<file name>:<file URL>`. For example:

```js
event.dataTransfer.items.add(
  "DownloadURL",
  "image/png:example.png:data:image/png;base64,iVBORw0K...",
);
```

This allows an arbitrary file to be downloaded when dragged to the file explorer, or, when dropping into another browser window, as if a [file is being dropped](#dragging_files_from_an_operating_system_file_explorer) (although CORS restrictions may apply). See [Drag out files like Gmail](https://ryanseddon.com/html5/gmail-dragout/) for a practical use case.

## See also

- [HTML Drag and Drop API (Overview)](/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
