---
title: "NDEFRecord: recordType property"
short-title: recordType
slug: Web/API/NDEFRecord/recordType
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NDEFRecord.recordType
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

The **`recordType`**
property of the {{DOMxRef("NDEFRecord")}} interface returns the record type of the record.

## Value

A string which can be one of the following:

- `"empty"`
  - : An empty NDEF record.
- `"text"`
  - : A text NDEF record.
- `"url"`
  - : A URI NDEF record.
- `"smart-poster"`
  - : A "smart poster" NDEF record.
- `"absolute-url"`
  - : An absolute URL NDEF record.
- `"mime"`
  - : A {{Glossary("MIME type")}} NDEF record.
- `"unknown"`
  - : The NDEF record type is not known.
- local type name
  - : Represents a local type name, frequently used to specify NDEF record embedded within
    another record.
- external type name
  - : A custom string consisting of a domain name and custom type name separated by a colon (":").

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
