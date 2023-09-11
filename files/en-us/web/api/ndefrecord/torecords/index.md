---
title: "NDEFRecord: toRecords() method"
short-title: toRecords()
slug: Web/API/NDEFRecord/toRecords
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.NDEFRecord.toRecords
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

The **`toRecords()`**
method of the {{DOMxRef("NDEFRecord")}} interface converts
{{DOMxRef("NDEFRecord.data")}} to a sequence of records based on
{{DOMxRef("NDEFRecord.recordType")}}, and returns the result. This allows
parsing the payloads of record types which may contain nested records, such
as smart poster and external type records.

## Syntax

```js-nolint
toRecords()
```

### Parameters

None.

### Return value

A list of {{DOMxRef("NDEFRecord")}}s.

## Exceptions

- `NotSupported` {{domxref("DOMException")}}
  - : Indicates that the {{Glossary("User Agent")}} does not know how to parse this combination of
    {{DOMxRef("NDEFRecord.data")}} and {{DOMxRef("NDEFRecord.recordType")}}.

## Examples

Read an external record with an NDEF message as payload

The example uses external type records to create application-defined records.
These records may contain an {{domxref("NDEFMessage")}} as payload, with its own
{{domxref("NDEFRecord")}} objects, including local types that are used in the
context of the application. Notice that the smart poster record type also
contains an NDEF message as payload.

Because NDEF gives no guarantee on the ordering of records, using an external
type record with an NDEF message as payload can be useful for encapsulating
related data.

This example shows how to read an external record for social posts, which
contains an {{domxref("NDEFMessage")}}, containing a text record and a record
with the local type "act" (action), with a definition borrowed from smart
poster, but used in local application context.

```js
const ndefReader = new NDEFReader();
await ndefReader.scan();
ndefReader.onreading = (event) => {
  const externalRecord = event.message.records.find(
    (record) => record.type === "example.com:smart-poster",
  );

  let action, text;

  for (const record of externalRecord.toRecords()) {
    if (record.recordType === "text") {
      const decoder = new TextDecoder(record.encoding);
      text = decoder.decode(record.data);
    } else if (record.recordType === ":act") {
      action = record.data.getUint8(0);
    }
  }

  switch (action) {
    case 0: // do the action
      console.log(`Post "${text}" to timeline`);
      break;
    case 1: // save for later
      console.log(`Save "${text}" as a draft`);
      break;
    case 2: // open for editing
      console.log(`Show editable post with "${text}"`);
      break;
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
