---
title: NDEFMessage.records
slug: Web/API/NDEFMessage/records
page-type: web-api-instance-property
tags:
  - NDEF
  - Reference
  - Web NFC
  - Property
  - Experimental
browser-compat: api.NDEFMessage.records
---
{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef}}

The `records` property of
{{DOMxRef("NDEFMessage")}} interface represents a list of {{DOMxRef("NDEFRecord")}}s
present in the NDEF message.

## Value

A list of {{DOMxRef("NDEFRecord")}} object that represent data recorded in the message.

## Examples

The following example shows how to read the contents of an NDEF message. It first sets up an event handler for {{domxref("NDEFReader.reading_event", "onreading")}}, which is passed an instance of {{domxref("NDEFReadingEvent")}}. An `NDEFMessage` object is returned from {{domxref("NDEFReadingEvent.message")}}. It loops through `message.records` and processes each record based on its message type. The data member is a {{jsxref("DataView")}}, which allows handling data encoded in UTF-16.

```js
ndefReaderInst.onreading = (event) => {
  const ndefMessage = event.message;
  for (const record of ndefMessage.records) {
    console.log(`Record type:  ${record.recordType}`);
    console.log(`MIME type:    ${record.mediaType}`);
    console.log(`Record id:    ${record.id}`);
    switch (record.recordType) {
      case "text":
        // TODO: Read text record with record data, lang, and encoding.
        break;
      case "url":
        // TODO: Read URL record with record data.
        break;
      default:
        // TODO: Handle other records with record data.
    };
  };
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
