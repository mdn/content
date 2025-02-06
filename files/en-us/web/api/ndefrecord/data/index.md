---
title: "NDEFRecord: data property"
short-title: data
slug: Web/API/NDEFRecord/data
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NDEFRecord.data
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

The **`data`**
property of the {{DOMxRef("NDEFRecord")}} interface returns a
{{jsxref("DataView")}} containing the raw bytes of the record's payload.

## Value

A {{jsxref("DataView")}} that contains encoded payload data of the record.

## Examples

The following example loops over the records in an {{domxref("NDEFMessage")}}
object, which is retrieved from {{domxref("NDEFReadingEvent.message")}}. After
selecting a record based on its {{domxref("NDEFRecord.mediaType", "mediaType")}}, it then decodes what's stored in the `data` property.

```js
const ndef = new NDEFReader();
await ndef.scan();
ndef.onreading = (event) => {
  const decoder = new TextDecoder();
  for (const record of event.message.records) {
    if (record.mediaType === "application/json") {
      const json = JSON.parse(decoder.decode(record.data));
      const article = /^[aeio]/i.test(json.title) ? "an" : "a";
      console.log(`${json.name} is ${article} ${json.title}`);
    }
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
