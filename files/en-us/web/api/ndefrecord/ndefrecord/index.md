---
title: "NDEFRecord: NDEFRecord() constructor"
short-title: NDEFRecord()
slug: Web/API/NDEFRecord/NDEFRecord
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.NDEFRecord.NDEFRecord
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

The **`NDEFRecord()`**
constructor of the [Web NFC API](/en-US/docs/Web/API/Web_NFC_API) returns a
newly constructed {{DOMxRef("NDEFRecord")}} object that represents data that can be
read from, or written to, compatible NFC devices; e.g. NFC tags supporting NDEF.

## Syntax

```js-nolint
new NDEFRecord(options)
```

### Parameters

- `options`

  - : An object with the following properties:

    - `data` {{optional_inline}}
      - : Contains the data to be transmitted. It can be a string, an {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, a {{jsxref("DataView")}}, or an array of nested records.
    - `encoding` {{optional_inline}}
      - : A string specifying the record's encoding.
    - `id` {{optional_inline}}
      - : A developer-defined identifier for the record.
    - `lang` {{optional_inline}}
      - : A valid language tag according to {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}.
    - `mediaType` {{optional_inline}}
      - : A valid [MIME type](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types).
    - `recordType`

      - : A string indicating the type of data stored in `data`. It must be one of the following values:

        - `"absolute-url"`

          An absolute URL to the data.

          `"empty"`

          - : An empty {{domxref("NDEFRecord")}}.

        - `"mime"`
          - : A valid [MIME type](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types).
        - `"smart-poster"`
          - : A smart poster as defined by the [NDEF-SMARTPOSTER](https://w3c.github.io/web-nfc/#bib-ndef-smartposter) specification.
        - `"text"`
          - : Text as defined by the [NDEF-TEXT](https://w3c.github.io/web-nfc/#bib-ndef-text) specification.
        - `"unknown"`
          - : The record type is not known.
        - `"URL"`
          - : A URL as defined by the [NDEF-URI](https://w3c.github.io/web-nfc/#bib-ndef-uri) specification.

### Return value

A new {{DOMxRef("NDEFRecord")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
