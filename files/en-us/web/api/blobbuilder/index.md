---
title: BlobBuilder
slug: Web/API/BlobBuilder
tags:
  - API
  - DOM
  - DOM Reference
  - File API
  - Deprecated
  - Reference
browser-compat: api.BlobBuilder
---
{{APIRef("File API")}}{{ deprecated_header}}

> **Note:** The `BlobBuilder` interface has been
> deprecated in favor of the newly introduced {{domxref('Blob')}} constructor.

The **`BlobBuilder`** interface provides an easy way to
construct {{domxref("Blob")}} objects. Just create a `BlobBuilder` and append
chunks of data to it by calling the {{manch("append")}} method. When you're done
building your blob, call {{manch("getBlob")}} to retrieve a {{domxref("Blob")}}
containing the data you sent into the blob builder.

## Method overview

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <code
          >void <a href="/en-US/docs/Web/API/BlobBuilder#append()">append</a>(in
          ArrayBuffer data);</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          >void <a href="/en-US/docs/Web/API/BlobBuilder#append()">append</a>(in
          Blob data);</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          >void <a href="/en-US/docs/Web/API/BlobBuilder#append()">append</a>(in
          String data, [optional] in String endings);</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          >Blob
          <a href="/en-US/docs/Web/API/BlobBuilder#getblob()">getBlob</a
          >([optional] in DOMString contentType);</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          >File
          <a href="/en-US/docs/Web/API/BlobBuilder#getfile()">getFile</a>(in
          DOMString name, [optional] in DOMString contentType);</code
        >
      </td>
    </tr>
  </tbody>
</table>

## Methods

### append()

Appends the contents of the specified JavaScript object to the {{domxref("Blob")}}
being built. If the value you specify isn't a {{domxref("Blob")}}, [`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer),
or [`String`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String),
the value is coerced to a string before being appended to the blob.

```js
void append(
  in ArrayBuffer data
);

void append(
  in Blob data
);

void append(
  in String data,
  [optional] in String endings
);
```

#### Parameters

- `data`
  - : The data to append to the {{domxref("Blob")}} being constructed.
- `endings`
  - : Specifies how strings containing `\n` are to be written out. This can be
    `"transparent"` (endings unchanged) or `"native"` (endings
    changed to match host OS filesystem convention). The default value is
    `"transparent"`.

### getBlob()

Returns the {{domxref("Blob")}} object that has been constructed using the data passed
through calls to {{manch("append")}}.

```js
Blob getBlob(
  in DOMString contentType {{optional_inline}}
);
```

#### Parameters

- `contentType` {{optional_inline}}
  - : The MIME type of the data to be returned in the {{domxref("Blob")}}. This will be
    the value of the `Blob` object's type property.

#### Return value

A {{domxref("Blob")}} object containing all of the data passed to any calls to
{{manch("append")}} made since the `BlobBuilder` was created. This also
resets the `BlobBuilder` so that the next call to {{manch("append")}} is
starting a new, empty blob.

### getFile() {{non-standard_inline}}

Returns a {{domxref("File")}} object.

```js
File getFile(
  in DOMString name,
  [optional] in DOMString contentType
);
```

#### Parameters

- `name`
  - : The file name.
- `contentType` {{optional_inline}}
  - : The MIME type of the data to be returned in the {{domxref("File")}}. This will be
    the value of the `File` object's type property.

#### Return value

A {{domxref("File")}} object.

## Browser compatibility

{{Compat}}

## See also

- {{spec("http://dev.w3.org/2009/dap/file-system/file-writer.html#idl-def-BlobBuilder",
    "File API Specification: BlobBuilder", "ED")}}
- {{domxref("Blob")}}
- {{domxref("File")}}
