---
title: NDEFReader.onreading
slug: Web/API/NDEFReader/onreading
tags:
  - NDEF
  - Reference
  - Web NFC
  - Property
browser-compat: api.NDEFReader.onreading
---
{{securecontext_header}}{{SeeCompatTable}}{{APIRef()}}

The `onreading` property of the {{DOMxRef("NDEFReader")}} interface is called whenever a new reading is available from compatible NFC devices, e.g. NFC tags supporting NDEF, when these devices are within the reader's magnetic induction field.

## Examples

The following example shows how to process events using both the `onreading` and `onreadingerror` event handlerss.

```js
const ndef = new NDEFReader();
  ndef.scan().then(() => {
    console.log("Scan started successfully.");
    ndef.onreadingerror = (event) => {
      console.log("Error! Cannot read data from the NFC tag. Try a different one?");
    };
    ndef.onreading = (event) => {
      console.log("NDEF message read.");
    };
  }).catch(error => {
    console.log(`Error! Scan failed to start: ${error}.`);
  });

```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("NDEFReader.onreadingerror")}}, property representing handler for `readingerror` events.
