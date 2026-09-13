---
title: ClipboardItem
slug: Web/API/ClipboardItem
page-type: web-api-interface
browser-compat: api.ClipboardItem
---

{{APIRef("Clipboard API")}}{{SecureContext_Header}}

The **`ClipboardItem`** interface of the [Clipboard API](/en-US/docs/Web/API/Clipboard_API) represents a single item of data copied to, or read from, the clipboard, used with {{domxref("Clipboard.read()")}} and {{domxref("Clipboard.write()")}} respectively.

A single `ClipboardItem` can hold several representations of that data at once, each identified by a different {{Glossary("MIME type")}} — for example, some copied rich text might be stored as both `text/html` and `text/plain`.

When constructing a `ClipboardItem`, these representations are provided as MIME-type-keyed properties of a single object; see {{domxref("ClipboardItem.ClipboardItem", "ClipboardItem()")}} for details.

When reading a `ClipboardItem`, its available formats are listed in {{domxref("ClipboardItem.types", "types")}}, and each one is retrieved individually with {{domxref("ClipboardItem.getType", "getType()")}}.

> [!NOTE]
> The `read()` and `write()` methods can be used to work with text strings and arbitrary data items represented by {{domxref("Blob")}} instances. However, if you are solely working with text, it is more convenient to use the {{domxref("Clipboard.readText()")}} and {{domxref("Clipboard.writeText()")}} methods.

## Constructor

- {{domxref("ClipboardItem.ClipboardItem", "ClipboardItem()")}}
  - : Creates a new **`ClipboardItem`** object, with the {{Glossary("MIME type")}} as the key and the data as the value.

## Instance properties

- {{domxref("ClipboardItem.types", "types")}} {{ReadOnlyInline}}
  - : Returns an {{jsxref("Array")}} of {{Glossary("MIME type", "MIME types")}}, one for each representation of the data in the `ClipboardItem`.
- {{domxref("ClipboardItem.presentationStyle", "presentationStyle")}} {{ReadOnlyInline}}
  - : Returns one of the following: `"unspecified"`, `"inline"` or `"attachment"`.

## Static methods

- {{domxref("ClipboardItem.supports_static", "ClipboardItem.supports()")}}
  - : Checks whether a given {{Glossary("MIME type")}} is supported by the clipboard. This enables a website to detect whether a MIME type is supported before attempting to write data.

## Instance methods

- {{domxref("ClipboardItem.getType", "getType()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with a {{domxref("Blob")}} of the requested {{Glossary("MIME type")}}, or an error if the MIME type is not found.

## Examples

### Writing text to the clipboard

In this example we first define two constants containing references to a {{htmlelement("p")}} element containing some text and a {{htmlelement("button")}} element.

Next, we define a function called `copyToClipboard()`. This starts off by storing a `"text/plain"` MIME type in a constant, then creating an object called `clipboardItemData` that contains one property with a key equal to the MIME type and a value of the text we want to copy to the clipboard (the content of the `<p>` element, in this case). Because we are working with text, we can pass it in directly rather than having to create a {{domxref("Blob")}}.

We construct a new `ClipboardItem` object using the {{domxref("ClipboardItem.ClipboardItem", "ClipboardItem()")}} constructor, and pass it into the {{domxref("Clipboard.write()")}} method to copy the text to the clipboard.

Finally, we add an event listener to the `<button>` so that it runs the function when pressed.

```js
const textSource = document.querySelector("p");
const copyBtn = document.querySelector("button");

async function copyToClipboard() {
  const type = "text/plain";
  const clipboardItemData = {
    [type]: textSource.textContent,
  };
  const clipboardItem = new ClipboardItem(clipboardItemData);
  await navigator.clipboard.write([clipboardItem]);
}

copyBtn.addEventListener("click", copyToClipboard);
```

### Writing an image to the clipboard

Here we use {{domxref("ClipboardItem.supports_static", "supports()")}} to check whether the `image/svg+xml` MIME data type is supported.
If it is, we fetch an SVG image with the [Fetch API](/en-US/docs/Web/API/Fetch_API), and then read it into a {{domxref("Blob")}}, which we can use to create a `ClipboardItem` that is written to the clipboard.

```js
async function writeClipImg() {
  try {
    if (ClipboardItem.supports("image/svg+xml")) {
      const imgURL = "/my-image.svg";
      const data = await fetch(imgURL);
      const blob = await data.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);
      console.log("Fetched image copied.");
    } else {
      console.log("SVG images are not supported by the clipboard.");
    }
  } catch (err) {
    console.error(err.name, err.message);
  }
}
```

### Reading from the clipboard

Here we're returning all items on the clipboard via the {{domxref("clipboard.read()")}} method.
Then using the {{domxref("ClipboardItem.types")}} property to set the {{domxref("ClipboardItem.getType", "getType()")}} argument and return the corresponding blob object.

Each `clipboardItem` here may itself list several MIME types in `types`, since a single clipboard entry can carry multiple format representations at once.

```js
async function getClipboardContents() {
  try {
    const clipboardItems = await navigator.clipboard.read();

    for (const clipboardItem of clipboardItems) {
      const formats = {};
      for (const type of clipboardItem.types) {
        formats[type] = await clipboardItem.getType(type);
      }
      console.log(formats); // e.g. { "text/html": Blob, "text/plain": Blob }
    }
  } catch (err) {
    console.error(err.name, err.message);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Clipboard.read()")}}
- {{domxref("Clipboard.write()")}}
- {{domxref("ClipboardChangeEvent")}}
- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
- [Image support for Async Clipboard article](https://web.dev/articles/async-clipboard)
