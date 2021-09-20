---
title: NDEFMessage.NDEFMessage()
slug: Web/API/NDEFMessage/NDEFMessage
tags:
  - API
  - Constructor
  - Reference
  - NDEFMessage
browser-compat: api.NDEFMessage.NDEFMessage
---
{{securecontext_header}}{{DefaultAPISidebar("")}}

The **`NDEFMessage()`** constructor creates a new {{domxref("NDEFMessage")}} object, initialized with the given NDEF records.

## Syntax

```js
new NDEFMessage(records);
```

### Parameters

- `records`

  - : An array of objects with the following members:

    - `data` {{optional_inline}}
      - : Contains the data to be transmitted; one of a string, a {{domxref("BufferSource")}}, or an array of nested records.
    - `encoding` {{optional_inline}}
      - : A string specifying the record's encoding.
    - `id` {{optional_inline}}
      - : A developer-defined identifier for the record.
    - `lang` {{optional_inline}}
      - : A valid [BCP47](https://www.rfc-editor.org/info/bcp47) language tag.
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
