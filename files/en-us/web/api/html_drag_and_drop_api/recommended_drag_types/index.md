---
title: Recommended Drag Types
slug: Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types
page-type: guide
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

The HTML Drag and Drop API supports dragging various types of data, including plain text, URLs, HTML code, files, etc. The document describes best practices for common draggable data types.

## Dragging Text

For dragging text, use the `text/plain` type. The second data parameter should be the dragged string. For example:

```js
event.dataTransfer.setData("text/plain", "This is text to drag");
```

Dragging text in textboxes and selections on web pages is done automatically by the browser, so you do not need to handle it yourself.

It is recommended to always add data of the `text/plain` type as a fallback for applications or drop targets that do not support other types, unless there is no logical text alternative. Always add this `text/plain` type last, as it is the least specific and shouldn't be preferred.

Note: In older code, you may find `text/unicode` or the `Text` types. These are equivalent to `text/plain`, and will store and retrieve plain text data.

## Dragging Links

Dragged hyperlinks should include data of two types: `text/uri-list`, and `text/plain`. _Both_ types should use the link's URL for their data. For example:

```js
const dt = event.dataTransfer;
dt.setData("text/uri-list", "https://www.mozilla.org");
dt.setData("text/plain", "https://www.mozilla.org");
```

As usual, set the `text/plain` type last, as a fallback for the `text/uri-list` type.

Note: the URL type is `uri-list` with an _I_, not an _L_.

To drag multiple links, separate each link inside the `text/uri-list` data with a CRLF linebreak. Lines that begin with a number sign (`#`) are comments, and should not be considered URLs. You can use comments to indicate the purpose of a URL, the title associated with a URL, or other data.

> [!WARNING]
> The `text/plain` fallback for multiple links should include all URLs, but no comments.

For example, this sample `text/uri-list` data contains two links and a comment:

```plain
https://www.mozilla.org
#A second link
http://www.example.com
```

When retrieving a dropped link, ensure you handle when multiple links are dragged, including any comments. For convenience, the special type `URL` may be used to refer to the first valid link within data for the `text/uri-list` type.

> [!WARNING]
> Do not add data with the `URL` type — attempting to do so will set the value of the `text/uri-list` type instead.

```js
const url = event.dataTransfer.getData("URL");
```

You may also see data with the Mozilla-specific type `text/x-moz-url`. If it appears, it should appear before the `text/uri-list` type. It holds the URLs of links followed by their titles, separated by a linebreak. For example:

```plain
https://www.mozilla.org
Mozilla
http://www.example.com
Example
```

## Dragging HTML and XML

HTML content may use the `text/html` type. The data for this type should be serialized HTML source code. For example, it would be suitable to set its data to the value of the {{domxref("Element.innerHTML","innerHTML")}} property of an element.

XML content may use the `text/xml` type, but ensure that the data is well-formed XML.

You may also include a plain text representation of the HTML or XML data using the `text/plain` type. The data should be just the text without any of the source tags or attributes. For instance:

```js
const dt = event.dataTransfer;
dt.setData("text/html", "Hello there, <strong>stranger</strong>");
dt.setData("text/plain", "Hello there, stranger");
```

### Updates to DataTransfer.types

The latest spec dictates that {{domxref("DataTransfer.types")}} should return a frozen array of strings rather than a {{domxref("DOMStringList")}} (this is supported in Firefox 52 and above).

As a result, the [contains](/en-US/docs/Web/API/Node/contains) method no longer works; the [includes](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) method should be used instead to check if a specific type of data is provided, using code like the following:

```js
if ([...event.dataTransfer.types].includes("text/html")) {
  // Do something
}
```

You could use feature detection to determine which method is supported on `types`, then run code as appropriate.

## Dragging Images

Direct image dragging is not common. In fact, Mozilla does not support direct image dragging on Mac or Linux. Instead, images are usually dragged only by their URLs. To do this, use the `text/uri-list` type as with other URLs. The data should be the URL of the image, or a [`data:` URL](/en-US/docs/Web/URI/Reference/Schemes/data) if the image is not stored on a website or disk.

As with links, the data for the `text/plain` type should also contain the URL. However, a `data:` URL is not usually useful in a text context, so you may wish to exclude the `text/plain` data in this situation.

In chrome or other privileged code, you may also use the `image/jpeg`, `image/png` or `image/gif` types, depending on the type of image. The data should be an object which implements the `nsIInputStream` interface. When this stream is read, it should provide the data bits for the image, as if the image was a file of that type.

You should also include the `application/x-moz-file` type if the image is located on disk. In fact, this a common way in which image files are dragged.

It is important to set the data in the right order, from most-specific to least-specific. The standard image type, such as `image/jpeg`, should come first, followed by the `application/x-moz-file` type. Next, you should set the `text/uri-list` data, and finally the `text/plain` data. For example:

```js
const dt = event.dataTransfer;
dt.setData("text/uri-list", imageURL);
dt.setData("text/plain", imageURL);
```

## Dragging Nodes

Nodes and elements in a document may be dragged using the `application/x-moz-node` type. The data for the type should be a DOM node. This allows the drop target to receive the actual node where the drag was started from. Note that callers from a different domain will not be able to access the node even when it has been dropped.

You should always include a `text/plain` alternative for the node.

## Dragging Custom Data

You can also use other types that you invent for custom purposes. Strive to always include a `text/plain` alternative, unless the dragged object is specific to a particular site or application. In this case, the custom type ensures that the data cannot be dropped elsewhere.

## Dragging files to an operating system folder

You may want to add a file to an existing drag event session, and you may also want to write the file to disk when the drop operation happens over a folder in the operating system when your code receives notification of the target folder's location. This only works in extensions (or other privileged code) and the type `application/moz-file-promise` should be used. The following sample offers an overview of this advanced case:

```js
// currentEvent is an existing drag operation event

currentEvent.dataTransfer.setData("text/x-moz-url", URL);
currentEvent.dataTransfer.setData("application/x-moz-file-promise-url", URL);
currentEvent.dataTransfer.setData(
  "application/x-moz-file-promise-dest-filename",
  leafName,
);

function dataProvider() {}

dataProvider.prototype = {
  QueryInterface(iid) {
    if (
      iid.equals(Components.interfaces.nsIFlavorDataProvider) ||
      iid.equals(Components.interfaces.nsISupports)
    )
      return this;
    throw Components.results.NS_NOINTERFACE;
  },
  getFlavorData(aTransferable, aFlavor, aData, aDataLen) {
    if (aFlavor === "application/x-moz-file-promise") {
      const urlPrimitive = {};
      const dataSize = {};

      aTransferable.getTransferData(
        "application/x-moz-file-promise-url",
        urlPrimitive,
        dataSize,
      );
      const url = urlPrimitive.value.QueryInterface(
        Components.interfaces.nsISupportsString,
      ).data;
      console.log(`URL file original is = ${url}`);

      const namePrimitive = {};
      aTransferable.getTransferData(
        "application/x-moz-file-promise-dest-filename",
        namePrimitive,
        dataSize,
      );
      const name = namePrimitive.value.QueryInterface(
        Components.interfaces.nsISupportsString,
      ).data;

      console.log(`target filename is = ${name}`);

      const dirPrimitive = {};
      aTransferable.getTransferData(
        "application/x-moz-file-promise-dir",
        dirPrimitive,
        dataSize,
      );
      const dir = dirPrimitive.value.QueryInterface(
        Components.interfaces.nsILocalFile,
      );

      console.log(`target folder is = ${dir.path}`);

      const file = Cc["@mozilla.org/file/local;1"].createInstance(
        Components.interfaces.nsILocalFile,
      );
      file.initWithPath(dir.path);
      file.appendRelativePath(name);

      console.log(`output final path is = ${file.path}`);

      // now you can write or copy the file yourself…
    }
  },
};
```

## See also

- [HTML Drag and Drop API (Overview)](/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
