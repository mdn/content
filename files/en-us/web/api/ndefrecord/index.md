---
title: NDEFRecord
slug: Web/API/NDEFRecord
page-type: web-api-interface
tags:
  - NDEF
  - Reference
  - Web NFC
  - Experimental
browser-compat: api.NDEFRecord
---
{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef}}

The **`NDEFRecord`** interface of the [Web NFC API](/en-US/docs/Web/API/Web_NFC_API) provides data that can be read from, or written to, compatible NFC devices, e.g. NFC tags supporting NDEF.

## Constructor

- {{DOMxRef("NDEFRecord.NDEFRecord", "NDEFRecord()")}} {{Experimental_Inline}}
  - : Returns a new `NDEFRecord`.

## Properties

- {{DOMxRef("NDEFRecord.recordType")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Returns the record type of the record. Records must have either a standardized well-known type name such as `"empty"`, `"text"`, `"url"`, `"smart-poster"`, `"absolute-url"`, `"mime"`, or `"unknown"` or else an external type name, which consists of a domain name and custom type name separated by a colon (":").
- {{DOMxRef("NDEFRecord.mediaType")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Returns the {{Glossary("MIME type")}} of the record. This value will be `null` if `recordType` is not equal to `"mime"`.
- {{DOMxRef("NDEFRecord.id")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Returns the record identifier, which is an absolute or relative URL used to identify the record.
    > **Note:** The uniqueness of the identifier is enforced only by the generator of the record.
- {{DOMxRef("NDEFRecord.data")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Returns a {{jsxref("DataView")}} containing the raw bytes of the record's payload.
- {{DOMxRef("NDEFRecord.encoding")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Returns the encoding of a textual payload, or `null` otherwise.
- {{DOMxRef("NDEFRecord.lang")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Returns the language of a textual payload, or `null` if one was not supplied.

## Methods

- {{DOMxRef("NDEFRecord.toRecords", "NDEFRecord.toRecords()")}} {{Experimental_Inline}}
  - : Converts {{DOMxRef("NDEFRecord.data")}} to a sequence of records. This allows parsing the payloads of record types which may contain nested records, such as smart poster and external type records.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
