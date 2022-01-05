---
title: NDEFRecord.mediaType
slug: Web/API/NDEFRecord/mediaType
tags:
  - NDEF
  - Reference
  - Web NFC
browser-compat: api.NDEFRecord.mediaType
---
{{securecontext_header}}{{SeeCompatTable}}{{APIRef()}}

The **`mediaType`**
property of the {{DOMxRef("NDEFRecord")}} interface returns the {{Glossary("MIME type")}} of the record. This value will be `null` if `recordType` is not equal to `"mime"`.

## Syntax

```js
NDEFRecord.mediaType
```

### Value

A {{DOMxRef("USVString")}}, containing the {{Glossary("MIME type")}} of the record
payload.

## Examples

The following example loops over the records in an {{domxref("NDEFMessage")}} object, which is retrieved from {{domxref("NDEFReadingEvent.message")}}. It then uses the `mediaType` property to determine which of the records to parse.

```js
const ndef = new NDEFReader();
  await ndef.scan();
  ndef.onreading = (event) => {
    const decoder = new TextDecoder();
    for (const record of event.message.records) {
      if (record.mediaType === "application/json") {
        const json = JSON.parse(decoder.decode(record.data));
        const article =/^[aeio]/i.test(json.title) ? "an" : "a";
        console.log(`${json.name} is ${article} ${json.title}`);
      }
    }
  };
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
