---
title: Blob
slug: Web/API/Blob
tags:
  - API
  - Blob
  - File API
  - Interface
  - Raw
  - Reference
  - data
browser-compat: api.Blob
---
{{APIRef("File API")}}

The **`Blob`** object represents a blob, which is a file-like object of immutable, raw data; they can be read as text or binary data, or converted into a {{DOMxRef("ReadableStream")}} so its methods can be used for processing the data.

Blobs can represent data that isn't necessarily in a JavaScript-native format. The {{DOMxRef("File")}} interface is based on `Blob`, inheriting blob functionality and expanding it to support files on the user's system.

## Using blobs

To construct a `Blob` from other non-blob objects and data, use the {{DOMxRef("Blob.Blob", "Blob()")}} constructor. To create a blob that contains a subset of another blob's data, use the {{DOMxRef("Blob.slice()", "slice()")}} method. To obtain a `Blob` object for a file on the user's file system, see the {{DOMxRef("File")}} documentation.

The APIs accepting `Blob` objects are also listed in the {{DOMxRef("File")}} documentation.

## Constructor

- {{DOMxRef("Blob.Blob", "Blob()")}}
  - : Returns a newly created `Blob` object which contains a concatenation of all of the data in the array passed into the constructor.

## Instance properties

- {{DOMxRef("Blob.prototype.size")}} {{readonlyinline}}
  - : The size, in bytes, of the data contained in the `Blob` object.
- {{DOMxRef("Blob.prototype.type")}} {{readonlyinline}}
  - : A string indicating the MIME type of the data contained in the `Blob`. If the type is unknown, this string is empty.

## Instance methods

- {{DOMxRef("Blob.prototype.arrayBuffer()")}}
  - : Returns a promise that resolves with an {{jsxref("ArrayBuffer")}} containing the entire contents of the `Blob` as binary data.
- {{DOMxRef("Blob.prototype.slice()")}}
  - : Returns a new `Blob` object containing the data in the specified range of bytes of the blob on which it's called.
- {{DOMxRef("Blob.prototype.stream()")}}
  - : Returns a {{DOMxRef("ReadableStream")}} that can be used to read the contents of the `Blob`.
- {{DOMxRef("Blob.prototype.text()")}}
  - : Returns a promise that resolves with a {{DOMxRef("USVString")}} containing the entire contents of the `Blob` interpreted as UTF-8 text.

## Examples

### Creating a blob

The {{DOMxRef("Blob.Blob", "Blob()")}} constructor can create blobs from other objects. For example, to construct a blob from a JSON string:

```js
const obj = {hello: 'world'};
const blob = new Blob([JSON.stringify(obj, null, 2)], {type : 'application/json'});
```

### Creating a URL representing the contents of a typed array

The following code creates a JavaScript [typed array](/en-US/docs/Web/JavaScript/Typed_arrays) and creates a new `Blob` containing the typed array's data. It then calls {{DOMxRef("URL.createObjectURL()")}} to convert the blob into a {{glossary("URL")}}.

#### HTML

```html
<p>This example creates a typed array containing the ASCII codes
   for the space character through the letter Z, then converts it
   to an object URL. A link to open that object URL is created.
   Click the link to see the decoded object URL.</p>
```

#### JavaScript

The main piece of this code for example purposes is the `typedArrayToURL()` function, which creates a `Blob` from the given typed array and returns an object URL for it. Having converted the data into an object URL, it can be used in a number of ways, including as the value of the {{HTMLElement("img")}} element's {{htmlattrxref("src", "img")}} attribute (assuming the data contains an image, of course).

```js
function typedArrayToURL(typedArray, mimeType) {
  return URL.createObjectURL(new Blob([typedArray.buffer], {type: mimeType}))
}

const bytes = new Uint8Array(59);

for(let i = 0; i < 59; i++) {
  bytes[i] = 32 + i;
}

const url = typedArrayToURL(bytes, 'text/plain');

const link = document.createElement('a');
link.href = url;
link.innerText = 'Open the array URL';

document.body.appendChild(link);
```

#### Result

Click the link in the example to see the browser decode the object URL.

{{EmbedLiveSample("Creating_a_URL_representing_the_contents_of_a_typed_array", 600, 200)}}

### Extracting data from a blob

One way to read content from a `Blob` is to use a {{DOMxRef("FileReader")}}. The following code reads the content of a `Blob` as a typed array:

```js
const reader = new FileReader();
reader.addEventListener('loadend', () => {
   // reader.result contains the contents of blob as a typed array
});
reader.readAsArrayBuffer(blob);
```

Another way to read content from a `Blob` is to use a {{domxref("Response")}}. The following code reads the content of a `Blob` as text:

```js
const text = await (new Response(blob)).text();
```

Or by using {{DOMxRef("Blob.prototype.text()")}}:

```js
const text = await blob.text();
```

By using other methods of `FileReader`, it is possible to read the contents of a Blob as a string or a data URL.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("BlobBuilder")}}
- {{DOMxRef("FileReader")}}
- {{DOMxRef("File")}}
- {{DOMxRef("URL.createObjectURL")}}
- [Using files from web applications](/en-US/docs/Web/API/File/Using_files_from_web_applications)
