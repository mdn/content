---
title: NDEFReadingEvent()
slug: Web/API/NDEFReadingEvent/NDEFReadingEvent
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - Experimental
  - Reference
  - NDEFReadingEvent
browser-compat: api.NDEFReadingEvent.NDEFReadingEvent
---
{{securecontext_header}}{{APIRef()}}{{SeeCompatTable}}

The **`NDEFReadingEvent()`** constructor creates a new {{domxref("NDEFReadingEvent")}} object which represents events dispatched on new NFC readings obtained by {{DOMxRef("NDEFReader")}}.

## Syntax

```js
new NDEFReadingEvent(type, options)
```

### Parameters

- `type`
  - :  A string with the name of the event.
    It is case-sensitive and browsers always set it to `reading`.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `serialNumber` {{optional_inline}}
      - : The serial number of the device a message was read from. It default to `""`, and can be set to `null`.
    - `message`
      - : An object with the following members:
        - `data` {{optional_inline}}
          - : Contains the data to be transmitted. It can be a string object or literal, an {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, a {{jsxref("DataView")}}, or an array of nested records.
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

A new {{domxref("NDEFReadingEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
