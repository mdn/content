---
title: "NDEFReader: write() method"
short-title: write()
slug: Web/API/NDEFReader/write
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.NDEFReader.write
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

The `write()` method of the {{DOMxRef("NDEFReader")}} interface attempts to write an NDEF message to a tag and returns a {{jsxref("Promise")}} that either resolves when a message has been written to the tag or rejects if a hardware or permission error is encountered. This method triggers a permission prompt if the "nfc" permission has not been previously granted.

## Syntax

```js-nolint
write(message)
write(message, options)
```

### Parameters

- `message`

  - : The message to be written, either a string, an {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}},
    a {{jsxref("DataView")}}, or an array of records. A record has the following members:

    - `data` {{optional_inline}}
      - : Contains the data to be transmitted, a string, an {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}},
        a {{jsxref("DataView")}}, or an array of nested records
    - `encoding` {{optional_inline}}
      - : A string specifying the record's encoding.
    - `id` {{optional_inline}}
      - : A developer-defined identifier for the record.
    - `lang` {{optional_inline}}
      - : A valid language tag according to {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}.
    - `mediaType` {{optional_inline}}
      - : A valid [MIME type](/en-US/docs/Web/HTTP/MIME_types).
    - `recordType`

      - : A string indicating the type of data stored in `data`. It must be one of the following values:

        - `"absolute-url"`
          - : An absolute URL to the data.
        - `"empty"`
          - : An empty {{domxref("NDEFRecord")}}.
        - `"mime"`
          - : A valid [MIME type](/en-US/docs/Web/HTTP/MIME_types).
        - `"smart-poster"`
          - : A smart poster as defined by the [NDEF-SMARTPOSTER](https://w3c.github.io/web-nfc/#bib-ndef-smartposter) specification.
        - `"text"`
          - : Text as defined by the [NDEF-TEXT](https://w3c.github.io/web-nfc/#bib-ndef-text) specification.
        - `"unknown"`
          - : The record type is not known.
        - `"URL"`
          - : A URL as defined by the [NDEF-URI](https://w3c.github.io/web-nfc/#bib-ndef-uri) specification.

- `options` {{optional_inline}}

  - : An object with the following properties:

    - `overwrite`
      - : A boolean value specifying whether or not existing records should be overwritten, if such exists.
    - `signal` {{optional_inline}}
      - : An {{DOMxRef("AbortSignal")}} that allows the current write operation to be canceled.

### Return value

A {{JSxRef("Promise")}} that either resolves when a message has been written to the tag or rejects if a hardware or permission error is encountered.

### Exceptions

This method doesn't throw exceptions; instead, it rejects the returned promise,
passing a {{domxref("DOMException")}} whose `name` is one of the
following:

- `AbortError`
  - : The scan operation was aborted with the {{DOMxRef("AbortSignal")}} passed in the `options` argument.
- `NotAllowedError`
  - : The permission for this operation was rejected or `overwrite` is
    `false` and there are already records on the tag.
- `NotSupportedError`
  - : There is no NFC adapter compatible with Web NFC, or the available NFC adapter does
    not support pushing messages, or connection can not be established.
- `NotReadableError`
  - : The UA is not allowed to access underlying NFC adapter (e.g., due to user
    preference).
- `NetworkError`
  - : Transfer failed after it already started (e.g., the tag was removed from the
    reader).

## Examples

### Write a text string

The following example shows how to write a string to an NFC tag and process any errors that occur.

```js
const ndef = new NDEFReader();
ndef
  .write("Hello World")
  .then(() => {
    console.log("Message written.");
  })
  .catch((error) => {
    console.log(`Write failed :-( try again: ${error}.`);
  });
```

### Write a URL

The following example shows how to write a record object (described above) to an NFC tag and process any errors that occur.

```js
const ndef = new NDEFReader();
try {
  await ndef.write({
    records: [{ recordType: "url", data: "http://example.com/" }],
  });
} catch {
  console.log("Write failed :-( try again.");
}
```

### Scheduling a write with a timeout

It's sometimes useful to set a time limit on a write operation. For example, you ask the user to touch a tag, but no tag is found within a certain amount of time, then you time out.

```js
const ndef = new NDEFReader();
ndef.onreading = (event) => console.log("We read a tag!");

function write(data, { timeout } = {}) {
  return new Promise((resolve, reject) => {
    const controller = new AbortController();
    controller.signal.onabort = () => reject("Time is up, bailing out!");
    setTimeout(() => controller.abort(), timeout);

    ndef.addEventListener(
      "reading",
      (event) => {
        ndef.write(data, { signal: controller.signal }).then(resolve, reject);
      },
      { once: true },
    );
  });
}

await ndef.scan();
try {
  // Let's wait for 5 seconds only.
  await write("Hello World", { timeout: 5_000 });
} catch (err) {
  console.error("Something went wrong", err);
} finally {
  console.log("We wrote to a tag!");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
